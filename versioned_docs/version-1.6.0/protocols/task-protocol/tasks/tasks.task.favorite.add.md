---
id: tasks.task.favorite.add
title: tasks.task.favorite.add
sidebar_label: tasks.task.favorite.add
---
**tasks.task.favorite.add(**taskId**)**

The method adds task to "Favourites".

Returns the parameter `true` on success (otherwise, returns `false`).

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

BX.rest.callMethod('tasks.task.favorite.add', {taskId: 119}, (res)=>{console.log(res.answer.result);});

Result:

{
 "result": true,
 "time": {
   "start": 1552382402.930095,
   "finish": 1552382403.055257,
   "duration": 0.12516212463378906,
   "processing": 0.09590816497802734,
   "date_start": "2019-03-12T11:20:02+02:00",
   "date_finish": "2019-03-12T11:20:03+02:00" } }