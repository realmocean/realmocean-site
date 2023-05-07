---
id: tasks.task.defer
title: tasks.task.defer
sidebar_label: tasks.task.defer
---

**tasks.task.defer(**taskId**)**

The method switches task to "deferred" status.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

callMethod(
  'tasks.task.defer',
  {taskId:1},
  function(res){console.log(res.answer.result);}
);