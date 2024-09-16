---
id: docker-swarm
title: Docker Swarm
sidebar_label: Docker swarm
tags:
  - install
  - Getting started
---

# Docker Swarm

After you've decentralized your Database and Storage, you can go into Docker Swarm. If you haven't done so make sure to that first.

Even though you can use Docker Swarm to deploy the application containers as the MariaDB, for example, in this tutorial, you'll go with a decentralized approach for the volumes and the applications.

:::info[Good to know]
All the docker-compose.yml and .env files are available in the repo.
:::

---

## What Docker Swarm is?

The best way to understand Docker Swarm is to think of it as Docker way to treat a bunch of servers as one giant computer. Meaning you're not creating containers rather services. Each `service` have `tasks` which are the actual deployed container.

Docker Swarm has many pieces, here is the must-know terminology:

|Terminology	|Meaning|
|---|---|
|Node	|Physical server|
|Manager node	 |Server that ranked as a manager. Can change the deployed services and remove other nodes.|
| Worker node	| Server that ranked as a worker. This server can't change anything rather just get a new tasks for a manager.|
| Stack |	List of services inside docker-compose.yml file|
| Service	| Declaration of a desired state for a given container.| The state includes the container image version and various deploy options. For example setting the replicas deploy-option declares that this service desired state is to have 4 replicas of that service.
|Task	| An action that being send from the managers to a worker contain container details that need to run by the worker.|
|Replica	| Number of replicas a given server will have in the Swarm. All the replicas can be in a single node, or they can be scattered all around.|
|Scaling	|Changing the number of replicas for a given service in realtime.|
| Rolling update	| Changing the image version (upgrade or downgrade) of a service in realtime.|
|Quorum	| In case of more than one manager, you'll need to have the majority of the managers available before rolling any update. For example, in case you have 3 managers and 2 are down, you won't be able to roll any update. The reason is that the manager need to "consult" each other to come to a verdict before changing some of the settings, To make sure the decision made by you Docker Swarm require you to have the majority of the manager quorum available|

For example, if a worker node is not responding is in charge of 3 tasks for some service. The managers will deploy that 3 tasks to other nodes.

## Manage nodes
To get a list of all available nodes and their status in the Swarm, run:

```shell
docker node ls
```