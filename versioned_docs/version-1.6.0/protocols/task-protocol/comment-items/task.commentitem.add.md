---
id: task.commentitem.add
title: task.commentitem.add
sidebar_label: task.commentitem.add
---
Creates a new comment to a task. Returns the ID of the added comment.

#### Method Parameters

| Parameter | Description |
| --- | --- |
| TASKID | Task ID. Required parameter. |
| FIELDS | Data field array for a task (**POST_MESSAGE**). Required parameter. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

// Adding a new comment with the test "HELLO" for the task with ID=13

BX24.callMethod(
    'task.commentitem.add',
    \[13, {'POST_MESSAGE': 'HELLO'}\],
    function(result){
      console.info(result.data());
      console.log(result);
    }
);