---
id: tasks.task.startwatch
title: tasks.task.startwatch
sidebar_label: tasks.task.startwatch
---
**tasks.task.startwatch(**taskId**)**

The method allows to monitor a task.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

callMethod(
 'tasks.task.startwatch',
 {taskId:1},
 function(res){console.log(res.answer.result);}
);