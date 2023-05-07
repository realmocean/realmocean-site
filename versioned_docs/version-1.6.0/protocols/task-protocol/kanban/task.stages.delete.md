---
id: task.stages.delete
title: task.stages.delete
sidebar_label: task.stages.delete
---
This method deletes stages for Kanban/Planner. Receives stage ID on input.

The stage is verified for a sufficient level of permission rights, as well as for the fact that it does not contain tasks.

#### Parameters :

| Parameter | Description | Available from version |
| --- | --- | --- |
| isAdmin | If _true_ is returned, then the permission rights verification will not be performed - under the condition that the requested user has the account administrator rights. |     |

Returns _true_, if successful.