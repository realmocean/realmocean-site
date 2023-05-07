---
id: tasks.task.stopwatch
title: tasks.task.stopwatch
sidebar_label: tasks.task.stopwatch
---
**tasks.task.stopwatch(**taskId**)**

The method stops monitoring of a task.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

BX24.callMethod(
 'tasks.task.stopwatch',
 {taskId:1},
 function(res){console.log(res.answer.result);}
);