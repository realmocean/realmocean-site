---
id: task.elapseditem.update
title: task.elapseditem.update
sidebar_label: task.elapseditem.update
---
task.elapseditem.update(taskId, itemId, arFields)

Changes parameters of the specified time spent record.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |
| itemId | Time spent record ID. |
| arFields | Array of time records and comments (**SECONDS** and **COMMENT_TEXT**). **MINUTES** may be used instead of **SECONDS**, but they cannot be used at the same time. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

BX24.callMethod(
   'task.elapseditem.update',
   \[1, 204, {SECONDS: 666, COMMENT_TEXT: 'comment text' CREATED_DATE: '2016-01-20 17:26:37'}\],
   function(result)
       {
      console.info(result.data());
      console.log(result);
    }
   }
);