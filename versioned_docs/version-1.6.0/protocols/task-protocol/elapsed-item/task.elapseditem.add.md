---
id: task.elapseditem.add
title: task.elapseditem.add
sidebar_label: task.elapseditem.add
---
task.elapseditem.add(taskId, arFields)

Adds time spent to the task. Returns added record ID.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |
| arFields | Array of time records and comments (**SECONDS** and **COMMENT_TEXT**). **MINUTES** may be used instead of **SECONDS**, but they cannot be used at the same time. |

#### Example

BX24.callMethod(
   'task.elapseditem.add',
   \[1, {SECONDS: 113, COMMENT_TEXT: 'comment text'}\],
   function(result){
      console.info(result.data());
      console.log(result);
   }
);

Example of time adding

BX24.callMethod(
  'task.elapseditem.add',
  \[315, {SECONDS: 113, COMMENT_TEXT: 'added from REST', CREATED_DATE: '2018-02-16 17:26:37', USER_ID: 6}\],
  function(result)
{
     console.info(result.data());
     console.log(result);
}
);