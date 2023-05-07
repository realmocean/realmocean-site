---
id: task.stages.update
title: task.stages.update
sidebar_label: task.stages.update
---
This method updates stages for Kanban/Planner. Receives stage ID on input and the array of fields.

#### Parameters

| Method | Description | Available from version |
| --- | --- | --- |
| id  | Stage ID |     |
| fields | Array for updating, similar to the [task.stages.add](/rest_help/tasks/task/kanban_planner/task_stages_add.php) array, except for the ENTITY_ID field - it cannot be modified. Permission rights check is verified, similar to task.stages.add. |     |
| isAdmin | If _true_ is returned, then the permission rights verification will not be performed - under the condition that the requested user has the account administrator rights. |     |

This method also is applied to move stages from one position to another - it is sufficient to pass the required AFTER_ID .

Returns _true_, if successful.