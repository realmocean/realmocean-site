---
id: tasks.task.history.list
title: tasks.task.history.list
sidebar_label: tasks.task.history.list
---
**tasks.task.history.list(**taskId**)**

The method gets task history.

Returns array of data (see example).

Can be filtered and sorted by all fields (see tasks.task.list). By default, retrieves the complete history without pagination.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |


#### Examples

1.  Prints history of specific task without filters:

    BX.rest.callMethod('tasks.task.history.list', {taskId: 125}, (res)=>{console.log(res.answer.result);});

    Result:



2.  Points history of specific task with `NEW` filter applied (i. e. specifying when task was created):

    BX.rest.callMethod('tasks.task.history.list', {taskId: 119, filter:{FIELD:'NEW'}}, (res)=>{console.log(res.answer.result);});

    Result:

    {
     "result": {
       "list": \[
         {
           "id": "1230",
           "createdDate": "01.03.2019 15:29:28",
           "field": "NEW",
           "value": {
             "from": null,
             "to": null },
           "user": {
             "id": "1",
             "name": "John",
             "lastName": "Smith",
             "secondName": "",
             "login": "admin" } }
       \] },
     "time": {
       "start": 1552382093.81029,
       "finish": 1552382093.927268,
       "duration": 0.11697793006896973,
       "processing": 0.018744230270385742,
       "date_start": "2019-03-12T11:14:53+02:00",
       "date_finish": "2019-03-12T11:14:53+02:00" } }