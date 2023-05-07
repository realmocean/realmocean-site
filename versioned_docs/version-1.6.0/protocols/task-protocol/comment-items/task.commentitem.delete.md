---
id: task.commentitem.delete
title: task.commentitem.delete
sidebar_label: task.commentitem.delete
---
Adds a comment.

#### method Parameters

| Parameter | Description |
| --- | --- |
| TASKID | Task ID. Required parameter. |
| ITEMID | Comment ID. Required parameter. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

BX24.callMethod(
   'task.commentitem.delete',
   \[13, 1205\],
   function(result){
      console.info(result.data());
      console.log(result);
   }
);