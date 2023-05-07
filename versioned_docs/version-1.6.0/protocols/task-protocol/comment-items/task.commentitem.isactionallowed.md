---
id: task.commentitem.isactionallowed
title: task.commentitem.isactionallowed
sidebar_label: task.commentitem.isactionallowed
---
Verifies whether the action is permitted.

#### Method Parameters

| Parameter | Description |
| --- | --- |
| TASKID | Task ID. Required parameter. |
| ITEMID | Comment ID. Required parameter. |
| ACTIONID | ID of the action to be checked:  <br/> <br/> * **1** \- ACTION\_COMMENT\_ADD;<br/> * **2** \- ACTION\_COMMENT\_MODIFY;<br/> * **3** \- ACTION\_COMMENT\_REMOVE.<br/> <br/> Required parameter. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

// Let us check the comment with ID=1205 to make sure the delete action is permitted:

BX24.callMethod(
   'task.commentitem.isactionallowed',
   \[13, 1205, 3\],
   function(result){
      console.info(result.data());
      console.log(result);
   }
);