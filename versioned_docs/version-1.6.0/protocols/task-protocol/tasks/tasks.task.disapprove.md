---
id: tasks.task.disapprove
title: tasks.task.disapprove
sidebar_label: tasks.task.disapprove
---

**tasks.task.disapprove(**taskId**)**

The method disapproves a task

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

callMethod(
  'tasks.task.disapprove',
  {taskId:1},
  function(res){console.log(res.answer.result);}
);