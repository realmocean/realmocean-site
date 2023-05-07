---
id: tasks.task.counters.get
title: tasks.task.counters.get
sidebar_label: tasks.task.counters.get
---
**tasks.task.counters.get(**userId, groupId, type**)**

The method gets user counters.

Can be filtered by:

* userId
* groupId
* type

#### Parameters

| Parameter | Description |
| --- | --- |
| userId | User ID (namespace). When `userId` is not specified, current user is set. |
| groupId | User group ID. |
| type | Counter roles:<br/><br/>* **view_all** \- all roles;<br/>* **view\_role\_responsible** \- "Responsible" role;<br/>* **view\_role\_accomplice** \- "Participant" role;<br/>* **view\_role\_auditor** \- "Observer" role;<br/>* **view\_role\_originator** \- "Created by" role. |

#### Example

BX.rest.callMethod('tasks.task.counters.get', {userId:1, groupId:0,type:'vew_all'}, (res)=>{console.log(res.answer.result);});

Result:

{
 "result": {
    "wo_deadline": {
     "counter": 0,
     "code": 10485760 },
   "expired": {
     "counter": 1,
     "code": 6291456 },
   "expired_soon": {
     "counter": 0,
     "code": 9437184 },
   "not_viewed": {
     "counter": 0,
     "code": 1048576 },
   "wait_ctrl": {
     "counter": 0,
     "code": 8388608 } },
 "total": 1,
 "time": {
   "start": 1552383141.526606,
   "finish": 1552383141.576861,
   "duration": 0.05025482177734375,
   "processing": 0.002279996871948242,
   "date_start": "2019-03-12T11:32:21+02:00",
   "date_finish": "2019-03-12T11:32:21+02:00" } }