---
id: ubuntu
title: Ubuntu
sidebar_label: Ubuntu
tags:
  - install
  - Getting started
---

This chapter assume you've a running Ubuntu server, and you've access to the root account.

## Create Swap file
This part was taken from Realmocean DigitalOcean script.

It's vital to create a swap file when using a low-budget servers, it also will benefit the high-budget ones.

Run this commands as root

```bash
fallocate -l 2G /swapfile
ls -lh /swapfile

chmod 600 /swapfile
ls -lh /swapfile

mkswap /swapfile
swapon /swapfile
swapon --show

echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab 
```
---

## Install Docker
You will install Docker using the Docker installation script. For more advance and specific installation, check Docker install instructions.

First, You need to fetch the "installation script."

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
```

### Best practice

When downloading any script from an outside source, it's always best examining the file before executing it. To see all the steps for that get-docker.sh file you can run

```bash
sudo sh ./get-docker.sh --dry-run
```

This command will print all the command this script is about the run.

To install Docker run the script:

```bash
sudo sh get-docker.sh
```
You can choose one of two methods to install Realmocean

---

## Install Realmocean automatically

It's best to cd to the current user home directory, so, later it will be easy to find Realmocean Docker file.

shell
cd ~
Install Realmocean using Realmocean's one-liner, and follow the instructions.

```bash
docker run -it --rm \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume "$(pwd)"/realmocean:/usr/src/code/realmocean:rw \
  --entrypoint="install" \
  realmocean/realmocean:1.3.8
```

---

## Install Realmocean manually

You can install Realmocean manually, and this is usually what I prefer.

To install Realmocean create a folder in the current user home directory, and cd into it.

```bash
cd ~
mkdir realmocean
cd realmocean
```
Any Realmocean instance is required to have these two files.

docker-compose.yml - This file contains all the necessary containers, volumes and networks requires to run an instance of Realmocean
.env - This file contains all environment variable information. Those variables that are being past to one or more containers and let you modify Docker containers without having the need to change the container itself.
To learn more about Realmocean containers and more, check the infrastructure page

You won't create those file line by line, rather you will download them from Realmocean permanent endpoint for these two files. To download these, run:

```bash
curl https://realmocean.io/install/compose -o docker-compose.yml
curl https://realmocean.io/install/env -o .env
```

Run this command 👇 to start and create your Realmocean installation.

```bash
docker compose up -d
```

You can go to Post installation page to finish your installation.
