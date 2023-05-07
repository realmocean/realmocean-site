---
id: tasks.task.files.attach
title: tasks.task.files.attach
sidebar_label: tasks.task.files.attach
---
**tasks.task.files.attach(**taskId, fileId, params**)**

Method attaches disk-uploaded file to a task.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |
| fileId | Disk-uploaded file ID. |
| params | Array with additional parameters, empty by default. Currently is not used. |

#### Example

callMethod(
    'tasks.task.files.attach',
   {
       taskId: 1,
       fileId: 1065,
    },
   function(res) {
       console.log(res.answer.result);
    }
);