---
id: tasks.task.result.deleteFromComment
title: tasks.task.result.deleteFromComment
sidebar_label: tasks.task.result.deleteFromComment
---
tasks.task.result.deleteFromComment(commentId)

Delete a task result by a comment used to create it.

#### Parameters

| Parameter | Description |
| --- | --- |
| commentId | Comment identifier (int). |

#### Example

BX.ajax.runAction("tasks.task.result.deleteFromComment", {
   data: {
      commentId: 100500
  }
}).then(function (response) { console.log(response);});