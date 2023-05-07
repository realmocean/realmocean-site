---
id: tasks.task.mute
title: tasks.task.mute and tasks.task.unmute
sidebar_label: tasks.task.mute and tasks.task.unmute
---
### tasks.task.mute

tasks.task.mute(
   id
)

Enables the "Mute" mode

#### Parameters

| Parameter | Description |
| --- | --- |
| id  | Task ID. Required parameter |

#### Return value

Returns JSON array with task data. The same is done by the method [tasks.task.get](/rest_help/tasks/task/tasks/tasks_task_get.php)

.

#### Example

callMethod('tasks.task.mute', {id: 1223})

### tasks.task.unmute

tasks.task.unmute(
   id
)

Enables the "Unmute" mode

#### Parameters

| Parameter | Description |
| --- | --- |
| id  | Task ID. Required parameters |

#### Returned value

Returns JSON array with task data. The same is done by the method [tasks.task.get](/rest_help/tasks/task/tasks/tasks_task_get.php)

.

callMethod('tasks.task.unmute', {id: 1223})