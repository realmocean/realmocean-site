---
id: tasks.task.update
title: tasks.task.update
sidebar_label: tasks.task.update
---
**tasks.task.update(**taskId, fields**)**

The method updates a task.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |
| fields | Fields, corresponding to the available list of [tasks.task.getfields](/rest_help/tasks/task/tasks/tasks_task_getFields.php) fields. |

#### Examples

BX24.callMethod(
  'tasks.task.update',
  {taskId:1, fields:{TITLE:'task for test', RESPONSIBLE_ID:1}},
  function(res){console.log(res.answer.result);}
);

Method parameters for attaching a file form disk to a task:

{"taskId": "77", "fields": {"UF\_TASK\_WEBDAV_FILES": \["n111"\]} }

where "111" - file ID on disk.

Attention: you need to add "n" character at the beginning



**Starting from version 22.1300.0**. You can pass the parameter SE_PARAMETER to the method. It contains the list of objects with additional task parameters.

BX.ajax.runAction("tasks.task.add", {
    data: {
       fields: {
           "TITLE": 'REST',
           "RESPONSIBLE_ID": 1,
           "SE_PARAMETER": \[
               {
                   'VALUE': 'Y',
                   'CODE': 3
               },
               {
                   'VALUE': 'Y',
                   'CODE': 2
               },
           \]
       }
   }
}).then(function (response) { console.log(response);});

Code values:

1.  deadlines are determined by subtask deadlines
2.  automatically finish the task when subtasks are completed (and vice versa)
3.  mandatory report when a task is finished