---
id: tasks.task.favorite.remove
title: tasks.task.favorite.remove
sidebar_label: tasks.task.favorite.remove
---
**tasks.task.favorite.remove(**taskId**)**

The method removes task from "Favorites".

Returns `true` on success (otherwise, returns `false`).

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |

#### Examples

BX.rest.callMethod('tasks.task.favorite.remove', {taskId: 119}, (res)=>{console.log(res.answer.result);});

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