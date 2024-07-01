---
id: users
title: Manage users
sidebar_label: Users
tags:
  - install
  - Getting started
---

Appconda Users API is used for managing users in server applications. Users API can only be used with an API key with the Server SDK, to manage all users. If you need to act on behalf of users through an Appconda Function or your own backend, use JWT login.

## Account vs Users API
The Account API is the API you should use in your client applications with Client SDKs like web, Flutter, mobile, and native apps. Account API creates sessions, which represent an authenticated user and is attached to a user's account. Sessions respect permissions, which means users can only access resources if they have been granted the correct permissions.

The Users API is a dedicated API for managing users from an admin's perspective. It should be used with backend or server-side applications with Server SDKs. Users API uses API keys instead of sessions. This means they're not resticted by permissions, but by the scopes granted to the API key used.

The users API can be used to create users, import users, update user info, get user audit logs, and remove users.