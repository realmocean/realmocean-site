---
id: tasks.task.approve
title: tasks.task.approve
sidebar_label: tasks.task.approve
---

**tasks.task.approve(**taskId**)**

The method approves a task.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

callMethod(
  'tasks.task.approve',
  {taskId:1},
  function(res){console.log(res.answer.result);}
);