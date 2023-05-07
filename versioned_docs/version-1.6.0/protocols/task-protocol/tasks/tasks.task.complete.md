---
id: tasks.task.complete
title: tasks.task.complete
sidebar_label: tasks.task.complete
---

**tasks.task.complete(**taskId**)**

The method switches task to "completed" status.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

callMethod(
  'tasks.task.complete',
  {taskId:1},
  function(res){console.log(res.answer.result);}
);