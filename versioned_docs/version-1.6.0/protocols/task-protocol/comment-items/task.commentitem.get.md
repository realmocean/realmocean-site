---
id: task.commentitem.get
title: task.commentitem.get
sidebar_label: task.commentitem.get
---
Returns a comment to a task.

#### Method Parameters

| Parameters | Description |
| --- | --- |
| TASKID | Task ID. Required parameter. |
| ITEMID | Comment ID. Required parameter. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

BX24.callMethod(
   'task.commentitem.get',
   \[13, 1205\],
   function(result){
      console.info(result.data());
      console.log(result);
   }
);