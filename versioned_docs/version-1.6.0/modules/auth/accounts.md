---
id: accounts
title: Accounts
sidebar_label: Accounts
tags:
  - install
  - Getting started
---
Appconda Account API is used for user signup and login in client applications. Users can be organized into teams and be given labels, so they can be given different permissions and access different resources. Each user's account can also have their own preference object, which you can use to save preferences such as theme, language, and notification settings.

### Account vs Users API
The Account API is the API you should use in your client applications with Client SDKs like web, Flutter, mobile, and native apps. Account API creates sessions, which represent an authenticated user and is attached to a user's account. Sessions respect permissions, which means users can only access resources if they have been granted the correct permissions.

The Users API is a dedicated API for managing users from an admin's perspective. It should be used with backend or server-side applications with Server SDKs. Users API uses API keys instead of sessions. This means they're not resticted by permissions, but by the scopes granted to the API key used.

## Signup and login
You can signup and login a user with an account create through email password, phone (SMS), Anonymous, magic URL, and OAuth 2 authentication.

## Preferences
You can store user preferences on a user's account using Appconda's Update Preferences endpoint. You can store preferences such as theme, notification settings, or preferred language so they can be synced across multiple devices.

Preferences are stored as a key-value JSON object. The maximum allowed size for preferences is 64kB, and an error will be thrown if this limit is exceeded.