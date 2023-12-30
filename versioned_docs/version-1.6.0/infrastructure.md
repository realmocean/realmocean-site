---
id: infrastructure
title: Infrastructure Overview
sidebar_label: Infrastructure Overview
tags:
  - install
  - Getting started
---

In this chapter, you are going to take a deep dive into the Realmocean infrastructure. It's more theoretical, so be warned.

## The Infrastructure
Realmocean use a docker-compose.yml file for setup and running is infrastructure.

docker-compose.yml is a yaml file that define the services, volumes and networks needed to run.

Containers & Images
In Docker, Containers are a sort of virtual machines running instance of a specific Docker Image. Docker Image is a file that contains all the files and software needed to run a certain service.

Here's a quick overview of Realmocean docker-compose.yml file.

| Service Name                 | Image                   | Description                                                                                      |
| :--------------------------- | :---------------------- | :----------------------------------------------------------------------------------------------- |
| traefik                      | traefik:2.7             | Load balancer and traffic router                                                                 |
| realmocean                     | realmocean/realmocean:1.3.8 | Realmocean Console & API main entrypoint                                                           |
| mariadb                      | mariadb:10.7            | App & System Database                                                                            |
| redis                        | redis:7.0.4-alpine      | Key Value on-RAM Database, use to store temporary workers data for queue-based process and cache |
| influxdb                     | realmocean/influxdb:1.5.0 | Timebase Database. use to track Realmocean usages.                                                 |
| telegraf                     | realmocean/telegraf:1.4.0 | Server Metric usage collector                                                                    |
| realmocean-realtime            | realmocean/realmocean:1.3.8 | Realmocean Realtime entrypoint                                                                     |
| realmocean-executor            | realmocean/realmocean:1.3.8 | On-demand Function creator and manager                                                           |
| realmocean-maintenance         | realmocean/realmocean:1.3.8 | Maintainer. Do all non-specific jobs. for example adding certificate requirement to the queue    |
| realmocean-usage               | realmocean/realmocean:1.3.8 | Usage tracker. Transfers information from influxdb into MariaDB                                  |
| realmocean-schedule            | realmocean/realmocean:1.3.8 | The crontab (Schedule) manager.                                                                  |
| realmocean-worker-audits       | realmocean/realmocean:1.3.8 | Queue Worker - Log information for auditing purposes.                                            |
| realmocean-worker-webhooks     | realmocean/realmocean:1.3.8 | Queue Worker - CURL any needed webhooks                                                          |
| realmocean-worker-deletes      | realmocean/realmocean:1.3.8 | Queue Worker - Deleting projects, users, collection, documents and anything else.                |
| realmocean-worker-databases    | realmocean/realmocean:1.3.8 | Queue Worker - Runs any management needed action on the database, e.g. Adding index.             |
| realmocean-worker-builds       | realmocean/realmocean:1.3.8 | Queue Worker - Building deployment of newly deployed functions.                                  |
| realmocean-worker-certificates | realmocean/realmocean:1.3.8 | Queue Worker - Created required in-queue certificate                                             |
| realmocean-worker-functions    | realmocean/realmocean:1.3.8 | Queue Worker - Execute any in-queue function.                                                    |
| realmocean-worker-mails        | realmocean/realmocean:1.3.8 | Queue Worker - Sends any Realmocean internal emails.                                               |
| realmocean-worker-messaging    | realmocean/realmocean:1.3.8 | Queue Worker - Sends SMS for auth.                                                               |

### Good To Know

As you can see most of the services are sharing the same Docker image Realmocean/Realmocean:1.3.8

This approach is quite smart and although that each service is accessing and using different part of the image, it's still one image.

So when a new version is being released all the services will use the new one, and you get an advantage of monorepo approach in a way that you force yourself to make sure that all the services can run with the new image.

What eventually makes upgrading much easy and much more fail-proof.

## Networks
In Docker, Networks are a way to connect between containers. Think of them as a virtual switch/router.

Networks are a way to define which containers can communicate with each other, as containers contact each other through the network. That way you can isolate containers from each other.

### List of Networks
Here's a quick overview of Realmocean networks.

| Network  | Usage                                                                                                     |
| :------- | :-------------------------------------------------------------------------------------------------------- |
| gateway  | Default network Not in use                                                                                |
| Realmocean | Realmocean main network shared across all containers except the dynamically created open-runtime containers |
| runtime  | Isolated network between the Realmocean-executor and any dynamically created open-runtime container(s)      |

## Volumes
In Docker, Volumes are a way to store data outside the container. Any data that is stored in a volume will persist even if the container is failed, stopped or deleted.

### List of Volumes
Here's a quick overview of Realmocean volumes.

| volumes                      | Usage                             | Used By # Containers    |
| :--------------------------- | :-------------------------------- | :---------------------- |
| Realmocean-mariadb             | MariaDB                           | mariadb                 |
| Realmocean-redis               | Redis                             | redis                   |
| Realmocean-cache               | Cache                             | Realmocean                |
| Realmocean-worker-deletes      |                                   |                         |
| Realmocean-uploads             | Storage                           | Realmocean                |
| Realmocean-worker-deletes      |                                   |                         |
| Realmocean-certificates        | Certification                     | traefik                 |
| Realmocean                     |                                   |                         |
| Realmocean-worker-deletes      |                                   |                         |
| Realmocean-worker-certificates |                                   |                         |
| Realmocean-functions           | Prebuilt functions                | Realmocean                |
| Realmocean-worker-deletes      |                                   |                         |
| Realmocean-executor            |                                   |                         |
| Realmocean-builds              | Built functions                   | Realmocean-worker-deletes |
| Realmocean-executor            |                                   |                         |
| Realmocean-influxdb            | InfluxDB                          | influxdb                |
| Realmocean-config              | Yaml files for each custom-domain | traefik                 |
| Realmocean                     |                                   |                         |
| Realmocean-worker-certificates |                                   |                         |
| Realmocean-executor            | N/A                               |                         |

## Environment variables
When running any docker container, you may want to pass some environment variables to it. Passing environment variables to a container is a way to configure the container without having the need to change the container itself.

### Available Environment variables
I've included only those variables needed to have attention. The full list can be found here.

| Variable                                                                                                                              | Default value                            |
| :------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------- |
| _APP_LOCALE                                                                                                                           |                                          |
| Set Realmocean locale for login emails, teams join and more.                                                                            |                                          |
| Here you can find list of all the languages are supported by Realmocean                                                                 | en                                       |
| _APP_OPTIONS_ABUSE                                                                                                                    |                                          |
| Activate Realmocean Rate Limit service.                                                                                                 |                                          |
| Can be either enabled or disabled.                                                                                                    | enabled                                  |
| _APP_OPTIONS_FORCE_HTTPS                                                                                                              |                                          |
| If enabled the console & API will accept HTTPS request only                                                                           |                                          |
| Can be either enabled or disabled.                                                                                                    | disabled                                 |
| _APP_OPENSSL_KEY_V1                                                                                                                   |                                          |
| Random key created by you.                                                                                                            |                                          |
| Will be used to encrypt the JWT token and your files.                                                                                 |                                          |
| Change it to some random long text and make backup of it                                                                              | your-secret-key                          |
| _APP_DOMAIN                                                                                                                           |                                          |
| The domain you'll point to your Realmocean server IP                                                                                    | localhost                                |
| _APP_DOMAIN_TARGET                                                                                                                    |                                          |
| The domain that any added custom-domain will point using CNAME.                                                                       |                                          |
| Usually it will be the same value as _APP_DOMAIN                                                                                      | localhost                                |
| _APP_CONSOLE_WHITELIST_ROOT                                                                                                           |                                          |
| When enabled only one user can be created in the console signup form.                                                                 |                                          |
| Then either you disable this option, or you can send a direct invention to a user.                                                    | enabled                                  |
| _APP_CONSOLE_WHITELIST_EMAILS                                                                                                         |                                          |
| When APP_CONSOLE_WHITELIST_ROOT is 'disabled' then you can block the signup to specific emails                                        |                                          |
| Separate each email using the comma character.                                                                                        |                                          |
| _APP_CONSOLE_WHITELIST_IPS                                                                                                            |                                          |
| When APP_CONSOLE_WHITELIST_ROOT is 'disabled' then you can block the signup to specific IPs                                           |                                          |
| Separate each IP using the comma character.                                                                                           |                                          |
| _APP_SYSTEM_EMAIL_NAME                                                                                                                |                                          |
| The sender name in any Realmocean generated emails, e.g. password recovery email.                                                       | Realmocean                                 |
| _APP_SYSTEM_EMAIL_ADDRESS                                                                                                             |                                          |
| The sender email in any Realmocean generated emails, e.g. password recovery email.                                                      | team@Realmocean.io                         |
| _APP_SYSTEM_SECURITY_EMAIL_ADDRESS                                                                                                    |                                          |
| Email address for Let's Encrypt alerts.                                                                                               |                                          |
| This email address is also sent in any curl (request that go out from your Realmocean) request, eg. Webhooks and in the Avatar service. | certs@Realmocean.io                        |
| _APP_USAGE_STATS                                                                                                                      |                                          |
| Disable App stat collection.                                                                                                          |                                          |
| Just to clearfix the usage collection is between you and Realmocean, and not related to any usages data being collected by Realmocean.    |                                          |
| If you do disabled it you can remove the influxdb and telegraph containers as they won't be used                                      | enabled                                  |
| _APP_LOGGING_PROVIDER                                                                                                                 |                                          |
| Any custom logger.                                                                                                                    |                                          |
| You can use any of the following: sentry, raygun, appsignal, logowl                                                                   |                                          |
| _APP_LOGGING_CONFIG                                                                                                                   |                                          |
| Custom logger config.                                                                                                                 |                                          |
| For sentry enter: SENTRY_KEY:SENTRY_ID.                                                                                               |                                          |
| For all the rest: enter single string for your API key or Service ticked in case of logowl                                            |                                          |
| _APP_SMTP_HOST                                                                                                                        |                                          |
| SMTP host.                                                                                                                            |                                          |
| Recommended service are: SendInBlue and SendGrid.                                                                                     |                                          |
| _APP_SMTP_PORT                                                                                                                        |                                          |
| SMTP port.                                                                                                                            |                                          |
| _APP_SMTP_SECURE                                                                                                                      |                                          |
| SMTP secure type.                                                                                                                     |                                          |
| Usually can be: tls, starttls or none.                                                                                                |                                          |
| _APP_SMTP_USERNAME                                                                                                                    |                                          |
| SMTP Username                                                                                                                         |                                          |
| _APP_SMTP_PASSWORD                                                                                                                    |                                          |
| SMTP Password                                                                                                                         |                                          |
| _APP_FUNCTIONS_SIZE_LIMIT                                                                                                             |                                          |
| Maximum size of deployed function.                                                                                                    |                                          |
| Value is in bytes.                                                                                                                    | 30000000                                 |
| _APP_FUNCTIONS_TIMEOUT                                                                                                                |                                          |
| Function time out.                                                                                                                    |                                          |
| Meaning what is the maximum time to wait for function to complete.                                                                    |                                          |
| Value is in seconds.                                                                                                                  | 900                                      |
| _APP_FUNCTIONS_BUILD_TIMEOUT                                                                                                          |                                          |
| Function build timeout.                                                                                                               |                                          |
| Meaning what is the maximum time to wait before declare the build as failed.                                                          |                                          |
| Value is in seconds.                                                                                                                  | 900                                      |
| _APP_FUNCTIONS_CONTAINERS                                                                                                             |                                          |
| Maximum number of allowed dynamically created functions container.                                                                    | 10                                       |
| _APP_FUNCTIONS_CPUS                                                                                                                   |                                          |
| Maximum CPU core for each function.                                                                                                   |                                          |
| 0 means unlimited.                                                                                                                    | 0                                        |
| _APP_FUNCTIONS_MEMORY                                                                                                                 |                                          |
| Maximum Memory for each function.                                                                                                     |                                          |
| 0 means unlimited.                                                                                                                    | 0                                        |
| _APP_FUNCTIONS_MEMORY_SWAP                                                                                                            |                                          |
| Maximum Swap Memory for each function.                                                                                                |                                          |
| 0 means unlimited                                                                                                                     | 0                                        |
| _APP_FUNCTIONS_RUNTIMES                                                                                                               |                                          |
| Available runtimes to write your function in.                                                                                         |                                          |
| You can find the full list here as Realmocean use another Realmocean-tool called Open Runtime                                             | node-16.0, php-8.0, python-3.9, ruby-3.0 |
| _APP_EXECUTOR_SECRET                                                                                                                  |                                          |
| Secret key use by the executor (the function orchestrator)                                                                            |                                          |
| Generate random one.                                                                                                                  | your-secret-key                          |
| _APP_EXECUTOR_HOST                                                                                                                    |                                          |
| Full executor host. as you are using Docker network the endpoint will be the container name                                           | http://Realmocean-executor/v1              |
| _APP_FUNCTIONS_INACTIVE_THRESHOLD                                                                                                     |                                          |
| Function idle timeout.                                                                                                                |                                          |
| Meaning how much time of function idle time before the container will be destroyed.                                                   |                                          |
| Value in seconds.                                                                                                                     | 60                                       |