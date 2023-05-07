---
id: tasks.task.start
title: tasks.task.start
sidebar_label: tasks.task.start
---
**tasks.task.start(**taskId**)**

The method switches task to the "in progress" status.

#### Paramaters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

callMethod(
   'tasks.task.start',
   {taskId:1},
   function(res){console.log(res.answer.result);}
);