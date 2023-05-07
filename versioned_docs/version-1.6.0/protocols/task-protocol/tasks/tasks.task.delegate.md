---
id: tasks.task.delegate
title: tasks.task.delegate
sidebar_label: tasks.task.delegate
---

**tasks.task.delegate(**taskId, userId**)**

The method delegates a task.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |
| userId | ID of the user to be delegated with the task. |

#### Examples

callMethod(
    'tasks.task.delegate',
    {taskId:1, usersId: 2},
    function(res){console.log(res.answer.result);}
);