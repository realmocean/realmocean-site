---
id: task.commentitem.update
title: task.commentitem.update
sidebar_label: task.commentitem.update
---
Updates the comment data.

#### Method Parameters

| Parameters | Description |
| --- | --- |
| TASKID | Task ID. Required parameter. |
| ITEMID | Comment ID. Required parameter. |
| FIELDS | Data field array for a comment (**POST_MESSAGE**). Required parameter. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

// Updating the comment with ID=1205 by the text "HI"

BX24.callMethod(
    'task.commentitem.update',
    \[13, 1205, {'POST_MESSAGE': 'HI'}\],
    function(result){
        console.info(result.data());
        console.log(result);
    }
);