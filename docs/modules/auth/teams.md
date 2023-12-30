---
id: teams
title: Teams
sidebar_label: Teams
tags:
  - install
  - Getting started
---

Teams are a good way to allow users to share access to resources. For example, in a todo app, a user can create a team for one of their todo lists and invite another user to the team to grant the other user access. You can further give special rights to parts of a team using team roles.

The invited user can accept the invitation to gain access. If the user's ever removed from the team, they'll lose access again.


## Create team
For example, we can create a team called teachers with roles maths, sciences, arts, and literature.

The creator of the team is also granted the owner role. Only those with the owner role can invite and remove members.
```ts
import {useCreateTeam} from '@realmocean/sdk'


useCreateTeam('console');
``````

### Invite a member

You can invite members to a team by creating team memberships. For example, inviting "Mehmet" a math teacher, to the teachers team.