---
id: tasks.task.delete
title: tasks.task.delete
sidebar_label: tasks.task.delete
---
**tasks.task.delete(**taskId**)**

The method deletes a task.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

callMethod(
    'tasks.task.delete',
    {taskId:1},
    function(res){console.log(res.answer.result);}
);