---
id: vertical-scaling
title: Vertical Scaling
sidebar_label: Vertical Scaling
tags:
  - install
  - Getting started
---

# Vertical scaling

In Vertical scaling you have only one server.

One server to rule them all!

Vertical scaling is when you're scaling your server from bottom to the top. Meaning you still have only one server but, as you go up, the server specs become stronger and stronger up to a monstrosity levels. It's a simple and fast solution.

Vertical scaling will eventually hit some threshold that no matter how strong the server will be It won't be able to process more the N requests per second.

:::note

Good to know

All the docker-compose.yml and .env files are available in the repo.

:::

---

## Scaling

Vertical scaling is the simplest of them all. And, it's available within all IaaS (DigitalOcean, Linode, etc.) or Cloud (AWS, Azure, GCP) providers with a few clicks.

When scaling its best scale to two levels above the current one.

If, for example, you had a 12$ server in DigitalOcean and your server experiences overload, it will be best to upgrade to the 24$ instead of the 18$ one. The reason is that you don't want to solve only tomorrow resource-load requirement but next week one.

| Price | vCPU | RAM | HD   |
| ----- | ---- | --- | ---- |
| 12 $  | 1    | 2GB | 50GB |
| 18 $  | 2    | 2GB | 60GB |
| 24 $  | 2    | 4GB | 80GB |


:::note

**Down-scaling**

It worth noting that many providers give the ability to scale down the server. Usually only in case you haven't scaled the hard-drive. In case you think that your server need will go down, make sure to choose the reversible scale option.

:::

## Scaling up to?

If you see that you keep scaling on a daily basis you might want to consider decentralize your infrastructure and check the Horizontal scaling option.

Even though the basic level of any horizontal scaling infrastructure will be expensive than the starting point of a vertical one, in the long term it will be much more cost-efficient.

## 100 Downtime

The number 100 here is actually not good.

It means that there is 100% downtime when upgrading your Appconda instance that has only one server.

It is worth remembering that when scaling a server it must be turned off, so during that time no access can be made to the server.

Also, it won't be possible to delegate the requests to a different server as the single server also contains the database, meaning any attempt to delegate the request will result data discrepancy.

It's very common and completely okay to go with a vertical scaling approach for any kind of application that has a consisted ups and downs.

A good example is regional application, in which you'll do the upgrade in the region midnight time, while charging your self with incredible amounts of coffee.

---

## Upgrade

Upgrading Appconda in a vertical-scale server to a new version and running upgrade migration have no specific instructions.

You can follow the regular upgrade instructions.

---

## Benchmarks

Go to Benchmarks to see how Appconda is handling request when scaling it vertically.

---

## Ansible

In the book repo in the vertical folder, you'll find ansible file for automating the installation process.


```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```