---
id: task.elapseditem.delete
title: task.elapseditem.delete
sidebar_label: task.elapseditem.delete
---
task.elapseditem.delete(taskId, itemId)

This method deletes time spent record.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |
| itemId | Time spent record ID. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

BX24.callMethod(
   'task.elapseditem.delete',
   \[1, 203\],
   function(result){
      console.info(result.data());
      console.log(result);
   }
);