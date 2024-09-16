---
id: decentralization
title: Decentralization
sidebar_label: Decentralization
tags:
  - install
  - Getting started
---

# Decentralization

Decentralization is the first step toward horizontal scaling. It also can be a vital part for a single-server infrastructure.

:::note

Good to know

All the docker-compose.yml and .env files are available in the repo.

:::

## What is decentralization?

Decentralization is the opposite of centralization.

Meaning, instead of centering and gathering all the services into a single place, you are placing one or more service in one location, while placing other services in other location(s).

This process called decentralization.

In order for us to be able to apply the decentralization principles in appconda, you need first to group appconda infrastructure components into 3 groups.

1. **Storage** - Docker volumes. These are the virtual drives being used by appconda containers. One volume can be in use by more than one container.
2. **Application** - Databases. These components need to have single endpoint - usually - which makes them very hard to scale.
3. **Services** - Endpoints & Workers. These components are logical components. Meaning they don't have any changeable data inside them, which makes them very easy to scale and replicate.
   
In the process, you will separate those servers in the at-least two servers, placing the storage and applications into one non-replicable server. And, the services into one replicable server.

In this chart, you can see a possible deploying of a decentralized appconda infrastructure when all the replicable services use one, and only one source of truth.

*The dashed line represents connection to a storage volumes while the solid one represents connection to an application*

---

## Storage

You're going to use the SSHFS - File system over SSH - protocol. This will allow you to share folders from one server to all other servers in the local network.

:::info

**Ubuntu Style**

Is worth noting that in this chapter and the following ones You're going to install all the needed software using Ubuntu 22.04 server.

Usually it means you can run it in any Debian based Linux distros.

:::

When dealing with sshfs you have at least two servers.

- **Main** — A server that hosts the folders you want to be available over the network.
- **Client** - one or more servers in the local network that have the Main server folder mounted as a local directory.
- 
### Configure the Main server
In the Main server, you've only 2 steps to take:

1. Create the folders.
2. Create and save a public SSH key.
   
Create a directory in the home folder and name it share. Then cd into it and create a folder for each of appconda volumes

```shell
mkdir /home/share
cd /home/share
mkdir mariadb redis cache uploads certificates functions builds config executor
```

### Creating SSH Keys

You'll now create the SSH key. The private key will be used by the Client servers, while the public one will be added to the Main authorized_keys file.

This process will let the Client servers to connect to the Main server without having to enter a password.

First, generate the SSH key, give it any name you want - sshfs - in this case and an empty passphrase.

```shell
> ssh-keygen -t ed25519
Enter file in which to save the key (/root/.ssh/id_ed25519): sshfs 
Enter passphrase (empty for no passphrase): 
Enter same passphrase again:
```

Now append the sshfs.pub content to the authorized_keys by running:

```shell
cat sshfs.pub >> /root/.ssh/authorized_keys
```

### Mounting the sshfs folders

Copy the sshfs (the private key) to the client server /root/.ssh folder and name it id_rsa. Then, set the file permission to 0600 by running:

```shell
chmod 600 /root/.ssh/id_rsa
```

Then, install the sshfs library, and, create the share directory.

```shell
apt update
apt install sshfs

mkdir /home/share
```

For this step, you'll need to know your Main server internal IP address, I'll use 10.116.0.2 as my Main server IP.

By running this line you'll add a mounting command to the linux system so it will mount all the `share` folder at boot.

```shell
echo 'root@10.116.0.2:/home/share /home/share fuse.sshfs allow_other,x-systemd.automount' >> /etc/fstab
```

Now you can run

```shell
mount -a
```

Running this command will try to mount all the values inside the /etc/fstab file. After that you can run this command to verify you can see all share subdirectories.

```shell
ls /home/share
```

:::info[**Good to know**]

1. It's best to reboot the server, and ls the /home/share directory once more to verify that everything in order.
2. You won't need to it over and over, as when you learn about horizontal scaling, you will create a snapshot of the already-configured client server and reuse it!
:::

:::danger[**Security**]


When using sshfs you must take extra steps for securing the data transfer. You'll cover all of it in the Security chapter.
:::

---

## Databases

This tutorial ain't going to cover Database scaling or manual setup of Database cluster rather you're going to use a single node cluster for deploying them.

:::info[**Managed DBs**]

It worth checking managed services for these 3 services in case you need to have HA database.

- Redis — Many IaaS providers offer a managed Redis as DigitalOcean and Upstash
- MariaDB - There aren't too many manageable out-of-the-box services for manage MariaDB, one that pops out - a bit pricey - is MariaDB **SkySQL**
  
In the future, Appconda will support PostgreSQL and MySQL without any modifications. Those databases have plenty of managed services out there for any scale.
:::

You can use the storage server for hosting your databases. Just make sure you've Docker installed on the server. For more details, you can follow the beginning of this chapter.

### Installation process

1. Create a folder inside the root folder name it databases.
2. Create a docker-compose.yml file that contains only the database information
3. Create a .env file with all the database value.
4. Start the Docker compose.

#### Create Folder
```shell
mkdir /root/databases
cd /root/databases
```

#### docker-compose.yml
```yml
version: '3'

services:
   mariadb:
      image: mariadb:10.11
      container_name: appconda-mariadb
      ports:
         - "3306:3306"
      restart: unless-stopped
      networks:
         - gateway
      volumes:
         - appconda-mariadb:/var/lib/mysql:rw
      environment:
         - MYSQL_ROOT_PASSWORD
         - MYSQL_DATABASE
         - MYSQL_USER
         - MYSQL_PASSWORD
      command: 'mysqld --innodb-flush-method=fsync'

   redis:
      image: redis:7.2.4-alpine
      container_name: appconda-redis
      restart: unless-stopped
      ports:
         - "6379:6379"
      command: >
         redis-server
         --maxmemory            512mb
         --maxmemory-policy     allkeys-lru
         --maxmemory-samples    5
      networks:
         - gateway
      volumes:
         - appconda-redis:/data:rw

networks:
   gateway:

volumes:
   appconda-mariadb:
      driver: local
      driver_opts:
         type: volume
         o: "bind"
         device: "/home/share/mariadb"
   appconda-redis:
      driver: local
      driver_opts:
         type: volume
         o: "bind"
         device: "/home/share/redis"
```

#### .env

```shell
MYSQL_ROOT_PASSWORD = change_root_passwrod
MYSQL_DATABASE = appconda
MYSQL_USER = appconda
MYSQL_PASSWORD = change_user_password
```

#### Starting services
```shell
docker compose up -d
```

Make sure to change the passwords for the MariaDB database.

In that volumes part of the `docker-compose.yml `you are using the binding option. This setting will tell docker in which local folder the volume is. Using this method will let you use any folder, even an `sshfs` one as a volume for your docker services.

---

## Services
Now that you have set the storage and databases, it's time to set the rest of the services, which can logically divide into 3 groups:

1. Endpoints - Services that responding to outside requests from the internet through traefik.
2. Standalone - Services that responding to an internal requests.
3. Workers — Services that are triggered by pre-defined cron schedule.
  
You also have Traefik which is the revers-proxy being used by Appconda to handle incoming requests.

Because you've extracted - decentralized - your storage and databases, the rest of the services will be very easy to scale.

Meaning, for example, you can easily replicate the appconda container, then, even that you have many containers that answer the same requests, they all getting their data from a single source of truth, the **databases** and the **storage**.

## Customizing the Docker file
You'll need to use a customized version of appconda docker-compose.yml, one which is stripped out from the Databases services declaration and dependencies and change the bind volume syntax.

When you're using the decentralized approach you have a disadvantage that you can't upgrade appconda automatically as this will change your customized docker-compose.yml file. But, fear not as manual upgrade is very easy.

You'll need to use a customized version of appconda docker-compose.yml, one which is stripped out from the Databases services declaration and dependencies and change the bind volume syntax.

When you're using the decentralized approach you have a disadvantage that you can't upgrade appconda automatically as this will change your customized docker-compose.yml file. But, fear not as manual upgrade is very easy.

:::note[customized docker-compose.yml file]
```yml
x-logging: &x-logging
  logging:
    driver: 'json-file'
    options:
      max-file: '5'
      max-size: '10m'
version: '3'

services:
  traefik:
    image: traefik:2.7
    container_name: appconda-traefik
    <<: *x-logging
    command:
      - --providers.file.directory=/storage/config
      - --providers.file.watch=true
      - --providers.docker=true
      - --providers.docker.exposedByDefault=false
      - --providers.docker.constraints=Label(`traefik.constraint-label-stack`,`appconda`)
      - --entrypoints.appconda_web.address=:80
      - --entrypoints.appconda_websecure.address=:443
    restart: unless-stopped
    ports:
      - 80:80
      - 443:443
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - appconda-config:/storage/config:ro
      - appconda-certificates:/storage/certificates:ro
    depends_on:
      - appconda
    networks:
      - gateway
      - appconda

  appconda:
    image: appconda/appconda:1.3.8
    container_name: appconda
    <<: *x-logging
    restart: unless-stopped
    networks:
      - appconda
    labels:
      - traefik.enable=true
      - traefik.constraint-label-stack=appconda
      - traefik.docker.network=appconda
      - traefik.http.appconda-only.appconda_api.loadbalancer.server.port=80
      #http
      - traefik.http.routers.appconda_api_http.entrypoints=appconda_web
      - traefik.http.routers.appconda_api_http.rule=PathPrefix(`/`)
      - traefik.http.routers.appconda_api_http.service=appconda_api
      # https
      - traefik.http.routers.appconda_api_https.entrypoints=appconda_websecure
      - traefik.http.routers.appconda_api_https.rule=PathPrefix(`/`)
      - traefik.http.routers.appconda_api_https.service=appconda_api
      - traefik.http.routers.appconda_api_https.tls=true
    volumes:
      - appconda-uploads:/storage/uploads:rw
      - appconda-cache:/storage/cache:rw
      - appconda-config:/storage/config:rw
      - appconda-certificates:/storage/certificates:rw
      - appconda-functions:/storage/functions:rw
    environment:
      - _APP_ENV
      - _APP_WORKER_PER_CORE
      - _APP_LOCALE
      - _APP_CONSOLE_WHITELIST_ROOT
      - _APP_CONSOLE_WHITELIST_EMAILS
      - _APP_CONSOLE_WHITELIST_IPS
      - _APP_SYSTEM_EMAIL_NAME
      - _APP_SYSTEM_EMAIL_ADDRESS
      - _APP_SYSTEM_SECURITY_EMAIL_ADDRESS
      - _APP_SYSTEM_RESPONSE_FORMAT
      - _APP_OPTIONS_ABUSE
      - _APP_OPTIONS_FORCE_HTTPS
      - _APP_OPENSSL_KEY_V1
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_SMTP_HOST
      - _APP_SMTP_PORT
      - _APP_SMTP_SECURE
      - _APP_SMTP_USERNAME
      - _APP_SMTP_PASSWORD
      - _APP_USAGE_STATS
      - _APP_STORAGE_LIMIT
      - _APP_STORAGE_PREVIEW_LIMIT
      - _APP_STORAGE_ANTIVIRUS
      - _APP_STORAGE_ANTIVIRUS_HOST
      - _APP_STORAGE_ANTIVIRUS_PORT
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_FUNCTIONS_SIZE_LIMIT
      - _APP_FUNCTIONS_TIMEOUT
      - _APP_FUNCTIONS_BUILD_TIMEOUT
      - _APP_FUNCTIONS_CONTAINERS
      - _APP_FUNCTIONS_CPUS
      - _APP_FUNCTIONS_MEMORY
      - _APP_FUNCTIONS_MEMORY_SWAP
      - _APP_FUNCTIONS_RUNTIMES
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG
      - _APP_STATSD_HOST
      - _APP_STATSD_PORT
      - _APP_MAINTENANCE_INTERVAL
      - _APP_MAINTENANCE_RETENTION_EXECUTION
      - _APP_MAINTENANCE_RETENTION_CACHE
      - _APP_MAINTENANCE_RETENTION_ABUSE
      - _APP_MAINTENANCE_RETENTION_AUDIT
      - _APP_MAINTENANCE_RETENTION_USAGE_HOURLY
      - _APP_SMS_PROVIDER
      - _APP_SMS_FROM
      - _APP_GRAPHQL_MAX_BATCH_SIZE
      - _APP_GRAPHQL_MAX_COMPLEXITY
      - _APP_GRAPHQL_MAX_DEPTH

  appconda-realtime:
    image: appconda/appconda:1.3.8
    entrypoint: realtime
    container_name: appconda-realtime
    <<: *x-logging
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.constraint-label-stack=appconda"
      - "traefik.docker.network=appconda"
      - "traefik.http.appconda-only.appconda_realtime.loadbalancer.server.port=80"
      #ws
      - traefik.http.routers.appconda_realtime_ws.entrypoints=appconda_web
      - traefik.http.routers.appconda_realtime_ws.rule=PathPrefix(`/v1/realtime`)
      - traefik.http.routers.appconda_realtime_ws.service=appconda_realtime
      # wss
      - traefik.http.routers.appconda_realtime_wss.entrypoints=appconda_websecure
      - traefik.http.routers.appconda_realtime_wss.rule=PathPrefix(`/v1/realtime`)
      - traefik.http.routers.appconda_realtime_wss.service=appconda_realtime
      - traefik.http.routers.appconda_realtime_wss.tls=true
      - traefik.http.routers.appconda_realtime_wss.tls.certresolver=dns
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_WORKER_PER_CORE
      - _APP_OPTIONS_ABUSE
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_USAGE_STATS
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG

  appconda-worker-audits:
    image: appconda/appconda:1.3.8
    entrypoint: worker-audits
    <<: *x-logging
    container_name: appconda-worker-audits
    restart: unless-stopped
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG

  appconda-worker-webhooks:
    image: appconda/appconda:1.3.8
    entrypoint: worker-webhooks
    <<: *x-logging
    container_name: appconda-worker-webhooks
    restart: unless-stopped
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_SYSTEM_SECURITY_EMAIL_ADDRESS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG

  appconda-worker-deletes:
    image: appconda/appconda:1.3.8
    entrypoint: worker-deletes
    <<: *x-logging
    container_name: appconda-worker-deletes
    restart: unless-stopped
    networks:
      - appconda
    volumes:
      - appconda-uploads:/storage/uploads:rw
      - appconda-cache:/storage/cache:rw
      - appconda-functions:/storage/functions:rw
      - appconda-builds:/storage/builds:rw
      - appconda-certificates:/storage/certificates:rw
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST

  appconda-worker-databases:
    image: appconda/appconda:1.3.8
    entrypoint: worker-databases
    <<: *x-logging
    container_name: appconda-worker-databases
    restart: unless-stopped
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG

  appconda-worker-builds:
    image: appconda/appconda:1.3.8
    entrypoint: worker-builds
    <<: *x-logging
    container_name: appconda-worker-builds
    restart: unless-stopped
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG

  appconda-worker-certificates:
    image: appconda/appconda:1.3.8
    entrypoint: worker-certificates
    <<: *x-logging
    container_name: appconda-worker-certificates
    restart: unless-stopped
    networks:
      - appconda
    volumes:
      - appconda-config:/storage/config:rw
      - appconda-certificates:/storage/certificates:rw
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET
      - _APP_SYSTEM_SECURITY_EMAIL_ADDRESS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG

  appconda-worker-functions:
    image: appconda/appconda:1.3.8
    entrypoint: worker-functions
    <<: *x-logging
    container_name: appconda-worker-functions
    restart: unless-stopped
    networks:
      - appconda
    depends_on:
      - appconda-executor
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_FUNCTIONS_TIMEOUT
      - _APP_EXECUTOR_SECRET
      - _APP_EXECUTOR_HOST
      - _APP_USAGE_STATS
      - DOCKERHUB_PULL_USERNAME
      - DOCKERHUB_PULL_PASSWORD

  appconda-executor:
    image: appconda/appconda:1.3.8
    entrypoint: executor
    <<: *x-logging
    container_name: appconda-executor
    restart: unless-stopped
    stop_signal: SIGINT
    networks:
      appconda:
      runtimes:
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - appconda-functions:/storage/functions:rw
      - appconda-builds:/storage/builds:rw
      - /tmp:/tmp:rw
    depends_on:
      - appconda
    environment:
      - _APP_ENV
      - _APP_VERSION
      - _APP_FUNCTIONS_TIMEOUT
      - _APP_FUNCTIONS_BUILD_TIMEOUT
      - _APP_FUNCTIONS_CONTAINERS
      - _APP_FUNCTIONS_RUNTIMES
      - _APP_FUNCTIONS_CPUS
      - _APP_FUNCTIONS_MEMORY
      - _APP_FUNCTIONS_MEMORY_SWAP
      - _APP_FUNCTIONS_INACTIVE_THRESHOLD
      - _APP_EXECUTOR_SECRET
      - OPEN_RUNTIMES_NETWORK
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG
      - _APP_STORAGE_DEVICE
      - _APP_STORAGE_S3_ACCESS_KEY
      - _APP_STORAGE_S3_SECRET
      - _APP_STORAGE_S3_REGION
      - _APP_STORAGE_S3_BUCKET
      - _APP_STORAGE_DO_SPACES_ACCESS_KEY
      - _APP_STORAGE_DO_SPACES_SECRET
      - _APP_STORAGE_DO_SPACES_REGION
      - _APP_STORAGE_DO_SPACES_BUCKET
      - _APP_STORAGE_BACKBLAZE_ACCESS_KEY
      - _APP_STORAGE_BACKBLAZE_SECRET
      - _APP_STORAGE_BACKBLAZE_REGION
      - _APP_STORAGE_BACKBLAZE_BUCKET
      - _APP_STORAGE_LINODE_ACCESS_KEY
      - _APP_STORAGE_LINODE_SECRET
      - _APP_STORAGE_LINODE_REGION
      - _APP_STORAGE_LINODE_BUCKET
      - _APP_STORAGE_WASABI_ACCESS_KEY
      - _APP_STORAGE_WASABI_SECRET
      - _APP_STORAGE_WASABI_REGION
      - _APP_STORAGE_WASABI_BUCKET
      - DOCKERHUB_PULL_USERNAME
      - DOCKERHUB_PULL_PASSWORD

  appconda-worker-mails:
    image: appconda/appconda:1.3.8
    entrypoint: worker-mails
    <<: *x-logging
    container_name: appconda-worker-mails
    restart: unless-stopped
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_SYSTEM_EMAIL_NAME
      - _APP_SYSTEM_EMAIL_ADDRESS
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_SMTP_HOST
      - _APP_SMTP_PORT
      - _APP_SMTP_SECURE
      - _APP_SMTP_USERNAME
      - _APP_SMTP_PASSWORD
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG

  appconda-worker-messaging:
    image: appconda/appconda:1.3.8
    entrypoint: worker-messaging
    <<: *x-logging
    container_name: appconda-worker-messaging
    restart: unless-stopped
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_SMS_PROVIDER
      - _APP_SMS_FROM
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG

  appconda-maintenance:
    image: appconda/appconda:1.3.8
    entrypoint: maintenance
    <<: *x-logging
    container_name: appconda-maintenance
    restart: unless-stopped
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_DOMAIN
      - _APP_DOMAIN_TARGET
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_MAINTENANCE_INTERVAL
      - _APP_MAINTENANCE_RETENTION_EXECUTION
      - _APP_MAINTENANCE_RETENTION_CACHE
      - _APP_MAINTENANCE_RETENTION_ABUSE
      - _APP_MAINTENANCE_RETENTION_AUDIT
      - _APP_MAINTENANCE_RETENTION_USAGE_HOURLY

  appconda-usage:
    image: appconda/appconda:1.3.8
    entrypoint: usage
    container_name: appconda-usage
    <<: *x-logging
    restart: unless-stopped
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_OPENSSL_KEY_V1
      - _APP_DB_HOST
      - _APP_DB_PORT
      - _APP_DB_SCHEMA
      - _APP_DB_USER
      - _APP_DB_PASS
      - _APP_USAGE_AGGREGATION_INTERVAL
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS
      - _APP_LOGGING_PROVIDER
      - _APP_LOGGING_CONFIG

  appconda-schedule:
    image: appconda/appconda:1.3.8
    entrypoint: schedule
    container_name: appconda-schedule
    <<: *x-logging
    restart: unless-stopped
    networks:
      - appconda
    environment:
      - _APP_ENV
      - _APP_REDIS_HOST
      - _APP_REDIS_PORT
      - _APP_REDIS_USER
      - _APP_REDIS_PASS

  telegraf:
    image: appconda/telegraf:1.4.0
    container_name: appconda-telegraf
    <<: *x-logging
    restart: unless-stopped
    networks:
      - appconda
    environment:

networks:
  gateway:
  appconda:
  runtimes:

volumes:
  appconda-cache:
    driver: local
    driver_opts:
      type: volume
      o: "bind"
      device: "/home/share/cache"
  appconda-uploads:
    driver: local
    driver_opts:
      type: volume
      o: "bind"
      device: "/home/share/uploads"
  appconda-certificates:
    driver: local
    driver_opts:
      type: volume
      o: "bind"
      device: "/home/share/certificates"
  appconda-functions:
    driver: local
    driver_opts:
      type: volume
      o: "bind"
      device: "/home/share/functions"
  appconda-builds:
    driver: local
    driver_opts:
      type: volume
      o: "bind"
      device: "/home/share/builds"
  appconda-config:
    driver: local
    driver_opts:
      type: volume
      o: "bind"
      device: "/home/share/config"
  appconda-executor:
    driver: local
    driver_opts:
      type: volume
      o: "bind"
      device: "/home/share/executor"
```
:::

#### Customize variables

Next you'll need to create `.env` file. You can use the regular one, you just need to replace the host for MariaDB, Redis and Influx DB with our Main server internal IP.

:::note[.env file]
Notice the green lines in which the value **10.0.0.15** is used as the Main server internal IP.

Also, make sure to update the values in the red lines with you've set in the Main **.env** file

```shell
_APP_ENV = production
_APP_LOCALE = en
_APP_OPTIONS_ABUSE = enabled
_APP_OPTIONS_FORCE_HTTPS = disabled
_APP_OPENSSL_KEY_V1 = your-secret-key
_APP_DOMAIN = localhost
_APP_DOMAIN_TARGET = localhost
_APP_CONSOLE_WHITELIST_ROOT = enabled
_APP_CONSOLE_WHITELIST_EMAILS =
_APP_CONSOLE_WHITELIST_IPS =
_APP_SYSTEM_EMAIL_NAME = appconda
_APP_SYSTEM_EMAIL_ADDRESS = team@appconda.io
_APP_SYSTEM_RESPONSE_FORMAT =
_APP_SYSTEM_SECURITY_EMAIL_ADDRESS = certs@appconda.io
_APP_USAGE_STATS = enabled
_APP_LOGGING_PROVIDER =
_APP_LOGGING_CONFIG =
_APP_USAGE_AGGREGATION_INTERVAL = 30
_APP_USAGE_TIMESERIES_INTERVAL = 30
_APP_USAGE_DATABASE_INTERVAL = 900
_APP_WORKER_PER_CORE = 6
_APP_REDIS_HOST = 10.0.0.15 
_APP_REDIS_PORT = 6379
_APP_REDIS_USER =
_APP_REDIS_PASS =
_APP_DB_HOST = 10.0.0.15 
_APP_DB_PORT = 3306
_APP_DB_SCHEMA = appconda
_APP_DB_USER = user 
_APP_DB_PASS = password 
_APP_DB_ROOT_PASS = rootsecretpassword 
_APP_STATSD_HOST = telegraf
_APP_STATSD_PORT = 8125
_APP_SMTP_HOST =
_APP_SMTP_PORT =
_APP_SMTP_SECURE =
_APP_SMTP_USERNAME =
_APP_SMTP_PASSWORD =
_APP_SMS_PROVIDER =
_APP_SMS_FROM =
_APP_STORAGE_LIMIT = 30000000
_APP_STORAGE_PREVIEW_LIMIT = 20000000
_APP_STORAGE_ANTIVIRUS = disabled
_APP_STORAGE_ANTIVIRUS_HOST = clamav
_APP_STORAGE_ANTIVIRUS_PORT = 3310
_APP_STORAGE_DEVICE = local
_APP_STORAGE_S3_ACCESS_KEY =
_APP_STORAGE_S3_SECRET =
_APP_STORAGE_S3_REGION = us-east-1
_APP_STORAGE_S3_BUCKET =
_APP_STORAGE_DO_SPACES_ACCESS_KEY =
_APP_STORAGE_DO_SPACES_SECRET =
_APP_STORAGE_DO_SPACES_REGION = us-east-1
_APP_STORAGE_DO_SPACES_BUCKET =
_APP_STORAGE_BACKBLAZE_ACCESS_KEY =
_APP_STORAGE_BACKBLAZE_SECRET =
_APP_STORAGE_BACKBLAZE_REGION = us-west-004
_APP_STORAGE_BACKBLAZE_BUCKET =
_APP_STORAGE_LINODE_ACCESS_KEY =
_APP_STORAGE_LINODE_SECRET =
_APP_STORAGE_LINODE_REGION = eu-central-1
_APP_STORAGE_LINODE_BUCKET =
_APP_STORAGE_WASABI_ACCESS_KEY =
_APP_STORAGE_WASABI_SECRET =
_APP_STORAGE_WASABI_REGION = eu-central-1
_APP_STORAGE_WASABI_BUCKET =
_APP_FUNCTIONS_SIZE_LIMIT = 30000000
_APP_FUNCTIONS_TIMEOUT = 900
_APP_FUNCTIONS_BUILD_TIMEOUT = 900
_APP_FUNCTIONS_CONTAINERS = 10
_APP_FUNCTIONS_CPUS = 0
_APP_FUNCTIONS_MEMORY = 0
_APP_FUNCTIONS_MEMORY_SWAP = 0
_APP_FUNCTIONS_RUNTIMES = node-16.0,php-8.0,python-3.9,ruby-3.0
_APP_EXECUTOR_SECRET = your-secret-key
_APP_EXECUTOR_HOST = http://appconda-executor/v1
_APP_EXECUTOR_RUNTIME_NETWORK = appconda_runtimes
_APP_FUNCTIONS_ENVS = node-16.0,php-7.4,python-3.9,ruby-3.0
_APP_FUNCTIONS_INACTIVE_THRESHOLD = 60
DOCKERHUB_PULL_USERNAME =
DOCKERHUB_PULL_PASSWORD =
DOCKERHUB_PULL_EMAIL =
OPEN_RUNTIMES_NETWORK = appconda_runtimes
_APP_MAINTENANCE_INTERVAL = 86400
_APP_MAINTENANCE_RETENTION_CACHE = 2592000
_APP_MAINTENANCE_RETENTION_EXECUTION = 1209600
_APP_MAINTENANCE_RETENTION_AUDIT = 1209600
_APP_MAINTENANCE_RETENTION_ABUSE = 86400
_APP_MAINTENANCE_RETENTION_USAGE_HOURLY = 8640000
_APP_GRAPHQL_MAX_BATCH_SIZE = 10
_APP_GRAPHQL_MAX_COMPLEXITY = 250
_APP_GRAPHQL_MAX_DEPTH = 3
```
:::

Now you can start the docker compose by running:

```shell
docker compose up -d
```

---

## Vertical scaling
Even though you're going to use decentralization with horizontal scaling, decentralization on itself gives a huge advantage even when working with a single server of Appconda, by letting you scale up and down your server with zero downtime.

The way you can do that is by doing something like this:

- Take a snapshot of our current single Client server that connects to the Main one.
- Create a new - bigger or smaller - server using that snapshot.
- Point all DNS `A` record requests to the newly created server.
- Wait till your DNS TTL has passed.
- Now you can safely delete the old server.
  
This way you've scaled your server with zero downtime.

---

### Horizontal scaling
Continue to the next chapter to see how you can scale our Appconda infrastructure horizontally.