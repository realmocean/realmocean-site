---
id: tasks.task.renew
title: tasks.task.renew
sidebar_label: tasks.task.renew
---
**tasks.task.renew(**taskId**)**

The method restarts task after its completed.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

callMethod(
  'tasks.task.renew',
  {taskId:1},
  function(res){console.log(res.answer.result);}
);