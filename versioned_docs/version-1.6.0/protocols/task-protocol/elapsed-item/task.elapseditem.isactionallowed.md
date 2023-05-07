---
id: task.elapseditem.isactionallowed
title: task.elapseditem.isactionallowed
sidebar_label: task.elapseditem.isactionallowed
---
task.elapseditem.isactionallowed(taskId, itemId, actionId)

Verify whether the action is allowed.

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |
| itemId | Time spent record ID. |
| actionId | Action ID:<br/> <br/> * **1** \- ACTION\_ELAPSED\_TIME_ADD;<br/> * **2** \- ACTION\_ELAPSED\_TIME_MODIFY;<br/> * **3** \- ACTION\_ELAPSED\_TIME_REMOVE. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

BX24.callMethod(
   'task.elapseditem.isActionAllowed',
   \[1, 204, 2\],
   function(reply){
      var isAllowed = reply.data();      // or this way (similarly): var isAllowed = reply.answer.result;
   }
);