---
id: task.elapseditem.get
title: task.elapseditem.get
sidebar_label: task.elapseditem.get
---

Returns an entry about elapsed time by its identifier.

#### Method Parameters

| Parameter | Description |
| --- | --- |
| TASKID | Task identifier. Required parameter. |
| ITEMID | Entry identifier. Required parameter. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

BX24.callMethod(
   'task.elapseditem.get',
   \[13, 217\],
   function(result){
      console.info(result.data());
      console.log(result);
   }
);