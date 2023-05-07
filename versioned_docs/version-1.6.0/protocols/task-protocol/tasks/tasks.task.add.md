---
id: tasks.task.add
title: tasks.task.add
sidebar_label: tasks.task.add
---

**tasks.task.add(**fields**)**

The method creates a task.

#### Parameters

| Parameter | Description |
| --- | --- |
| fields | Fields, corresponding to the available list of [tasks.task.getfields](/rest_help/tasks/task/tasks/tasks_task_getFields.php) fields. |

#### Examples

callMethod(
   'tasks.task.add',
   {fields:{TITLE:'task for test', RESPONSIBLE_ID:1}},
   function(res){console.log(res.answer.result);}
);

The "n" character must be specified in front of file identifier to attach a file to a task

{
   "taskId":"76",
   "fields": {
       "UF\_TASK\_WEBDAV_FILES": \[
           "n96"
       \] } }

**Starting from version 22.1300.0**. You can pass the parameter SE_PARAMETER to the method. It contains the list of objects with additional task parameters.

runAction("tasks.task.add", {
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