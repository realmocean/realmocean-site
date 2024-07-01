---
id: development
title: Development
sidebar_label: Development
tags:
  - install
  - Getting started
---

Appconda is a self-hosted Soft Code (Baas + Iaas) platform.

That pretty straightforward, but, if you never heard of BaaS, you are probably scratching the top of your head and asking yourself, "what for? What is the meaning of that?"

Well, let's start with the basics. BaaS stands for Backend as a Service. It is a cloud computing service model that provides developers with a way to connect their applications to a backend cloud storage and APIs exposed by back end applications while also providing features such as user management, push notifications, and integration with social networking services.

## This is what Appconda is:

Appconda is a set of essential modules that 99.9% of apps would need.

Every app needs a Database, a solid Authentication & Authorization mechanism, permission system, a way to compute information, and an organized place for the app files.

Appconda taking cover of all the above + more; you will explore these Appconda modules:

- **Auth** - User-management system that can work with basic traditional authorization techniques such as email and - Phone and with all the popular OAuth2 providers in the market today, including Google, AzureAD, Apple, and more.
- **Database** - An extraordinary hybrid NoSQL approach to a Relational Database engine runs on MariaDB.
- **Functions** - A serverless runtime system to run your necessary computing needs with the most popular languages. If you never met with serverless computing, you are going to love it.
- **Storage** - A permission-based storage module.
- **Realtime** - Realtime module in which you can subscribe and response to almost any server side events.
- **Miscellaneous** — More cool modules like Locale, Health, and Avatar creator.

## Server vs. Client

Appconda has three methods by which you can connect to the engine.

### REST API

GraphQL API
Platform SDKs
Those three methods can be used for two types of connection, client & server connections.

**Client** - a connection made by code that is content exposed to the client. This code won't have any administrative keys within it, and the connection results go through permission rules to ensure the data is sent back to an appropriate user.

**Server** - a connection made from a "secret" code. Aka code that has hidden from the end-users. This code has more access to resources by providing a unique API key.
Platform SDKs available for both client & server connections.

| Platform | Language   |
| -------- | ---------- |
| Client   | SDKs       |
| Platform | Language   |
| Web      | JavaScript |
| Flutter  | Dart       |
| Apple    | Swift      |
| Android  | Java       |
| Android  | Kotlin     |

#### Server SDKs

| Platform | Language   |
| -------- | ---------- |
| Node | Ruby |
| Deno | Dart |
| PHP | Kotlin |
| Python | Java (Uses Kotlin) |
| Swift | |
