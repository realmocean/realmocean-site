---
id: tasks.task.pause
title: tasks.task.pause
sidebar_label: tasks.task.pause
---
**tasks.task.pause(**taskId**)**

The method stops execution of task, by switching its status to "pending".

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

callMethod(
   'tasks.task.pause',
   {taskId:1},
   function(res){console.log(res.answer.result);}
);