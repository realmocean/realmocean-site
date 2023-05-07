---
id: task.commentitem.getmanifest
title: task.commentitem.getmanifest
sidebar_label: task.commentitem.getmanifest
---
Returns the list of methods of the type **task.commentitem.*** and their description.

The returned value of this method is not intended for automatic processing because its format is subject to change without notice.

The method may be useful as background information because it always contains updated information.

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

BX24.callMethod(
    'task.commentitem.getmanifest',
    \[\],
    function(result)
    {
        console.info(result.data());
        console.log(result);
    }
);