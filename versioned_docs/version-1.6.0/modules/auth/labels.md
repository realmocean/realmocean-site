---
id: labels
title: Labels
sidebar_label: Labels
tags:
  - install
  - Getting started
---

The Auth module has three main components

Users - Creation of accounts using a wide variety of methods.
Teams - Quick way to group users together.
Roles - Custom level inside Teams. For example, Admin, Writer, Reader, and more.

## Users

This module alone can act as a solid backend for your app. For example, in the Firebase community, developers use the Firebase Authorization module to add User logic to an existing app, without using any other Firebase modules.

You can do so with the Realmocean Auth module.

Any account has a unique value to identify it in the database. This unique value is email or phone. The email field is used for almost all login types, and the phone is used only for the SMS login method.

Here is the list of all supported login types in Realmocean

| Method         | Short description                                                    | unique ID |
| -------------- | -------------------------------------------------------------------- | --------- |
| Email Password | User enter is email and password                                     | email     |
| Magic URL      | User gets an email with a magic link that the user can use to log in | email     |
| Team Invite    | User is created by being added to a team                             | email     |
| OAuth2         | Login through configured providers                                   | email     |
| Phone          | Login through SMS                                                    | phone     |
| Anonymous      | for keeping the same information for the anonymous session           | internal  |

## Teams
Teams, aka memberships, are a quick way to gather a few users inside a group. One user can have more than one team, meaning that users and teams share a many-to-many relationship.

When a user is in a team, it's straightforward to allow access to resources and data access based on user membership.

Adding a user to a team depends on from where you run the action happens.

If you run the action from the server side, an account is automatically created for the user, and the user been added to the team.

If, on the other hand, you run the action on the client side - for example, by the user who is the team's owner, the same thing happens, but, the invited-user gets an email with invention to join the website.

----

## Roles
You can give any team member a role. Roles are arbitrary value to determine user level within a team.

So, for example, if you have a team named membership, you can add the rules basic and extended and then let the user access assets and information based on their roles.

A user can have multiple roles at any given time.

### Roles vs. Teams?
Isn't roles just another form of a team? If you can assign multiple teams to a given user, then why you need roles?

Roles make sense. as you can see in the example, all the users are inside the membership team but have different roles. So even only for that, it is worth using it.
Roles are much easier to add and remove. You don't need to invited a user to get a role. Meaning, roles assigned or unassigned quickly based on other factors.
The suggestion: Use a mix of both and choose the path with the easy-to-understand logic.