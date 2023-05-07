---
id: tasks.task.result.list
title: tasks.task.result.list
sidebar_label: tasks.task.result.list
---
tasks.task.result.list(taskId)

View list of task results.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task identifier (int). |

#### Example

BX.ajax.runAction("tasks.task.result.list", {
   data: {
      taskId: 100500
  }
}).then(function (response) { console.log(response);});