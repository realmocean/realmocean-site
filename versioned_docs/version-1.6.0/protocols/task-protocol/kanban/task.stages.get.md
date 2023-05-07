---
id: task.stages.get
title: task.stages.get
sidebar_label: task.stages.get
---
This method gets stages for Kanban/Planner.

#### Parameters:

| Parameter | Description | Available from version |
| --- | --- | --- |
| entityId | Entity ID. If it is equal to the workgroup ID, then the Kanban workgroup stages are returned. If the level of permission rights is insufficient, access error is displayed. If it equals to '0' or is absent, then the stage is added to Planner of the current user. |     |
| isAdmin | If _true_ is returned, then the permission rights verification will not be performed - under the condition that the requested user has the account administrator rights. |     |

Returns array of stages; fields are described in the [table of stages](/rest_help/tasks/task/kanban_planner/index.php).