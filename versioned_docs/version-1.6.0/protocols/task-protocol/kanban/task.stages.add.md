---
id: task.stages.add
title: task.stages.add
sidebar_label: task.stages.add
---
This method adds stages for Kanban/Planner. Receives 'fields' array on input.

#### Array fields

| Method | Description | Available from version |
| --- | --- | --- |
| TITLE | Stage title |     |
| COLOR | Stage color |     |
| AFTER_ID | ID of the stage, after which a stage adding shall be performed. If not specified or equal to '0', the stage will be added to the start. |     |
| ENTITY_ID | Entity ID. Can be equal to the workgroup ID. If so, then the stage will be added to the Kanban of the workgroup. If the level of permission rights is insufficient, access error is displayed. If it equals to '0' or is absent, then the stage is added to Planner of the current user. |     |
| isAdmin | If _true_ is returned, then the permission rights verification will not be performed - under the condition that the requested user has the account administrator rights. |     |

Returns ID of added stage.