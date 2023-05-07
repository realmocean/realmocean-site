---
id: tasks.task.getaccess
title: tasks.task.getaccess
sidebar_label: tasks.task.getaccess
---
**tasks.task.getaccess(**taskId, users**)**

The method checks access to a task.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |
| users | Array of user IDs, which access must be checked. Current user is specified by default. |

#### Examples

callMethod(
    'tasks.task.getaccess',
    {taskId:1, users:\[1\]},
    function(res){console.log(res.answer.result);}
);