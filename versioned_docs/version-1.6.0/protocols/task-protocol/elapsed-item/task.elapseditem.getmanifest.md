---
id: task.elapseditem.getmanifest
title: task.elapseditem.getmanifest
sidebar_label: task.elapseditem.getmanifest
---
Return list of methods of the **task.elapseditem.*** type and their description.

The returned value of this method cannot be processed automatically because its format may be changed without notice.

This method may be useful as reference because it always contains updated information.

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

BX24.callMethod(
    'task.elapseditem.getmanifest',
    \[\],
    function(result)
    {
        console.info(result.data());
        console.log(result);
    }
);