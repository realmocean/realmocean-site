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
This part was taken from Appconda DigitalOcean script.

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

```bash
sudo apt-get update
apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```

Docker ve Docker Compose kurulumlarını yapıp versiyonlarını kontrol ediyoruz

```bash
apt install docker.io
docker --version

apt install docker-compose
docker-compose --version
```

---

## Install Appconda automatically

It's best to cd to the current user home directory, so, later it will be easy to find Appconda Docker file.

shell
cd ~
Install Appconda using Appconda's one-liner, and follow the instructions.

```bash
docker run -it --rm \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --volume "$(pwd)"/appconda:/usr/src/code/appconda:rw \
  --entrypoint="install" \
  appconda/appconda:1.3.8
```

---

## Install Appconda manually

You can install Appconda manually, and this is usually what I prefer.

To install Appconda create a folder in the current user home directory, and cd into it.

```bash
cd ~
mkdir appconda
cd appconda
```
Any Appconda instance is required to have these two files.

docker-compose.yml - This file contains all the necessary containers, volumes and networks requires to run an instance of Appconda
.env - This file contains all environment variable information. Those variables that are being past to one or more containers and let you modify Docker containers without having the need to change the container itself.
To learn more about Appconda containers and more, check the infrastructure page

You won't create those file line by line, rather you will download them from Appconda permanent endpoint for these two files. To download these, run:

```bash
curl https://appconda.io/install/compose -o docker-compose.yml
curl https://appconda.io/install/env -o .env
```

Run this command 👇 to start and create your Appconda installation.

```bash
docker compose up -d
```

You can go to Post installation page to finish your installation.
