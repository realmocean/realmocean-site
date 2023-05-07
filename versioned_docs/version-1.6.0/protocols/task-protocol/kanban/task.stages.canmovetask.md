---
id: task.stages.canmovetask
title: task.stages.canmovetask
sidebar_label: task.stages.canmovetask
---
This method defines, if the current user can move tasks in the specified entity.

#### Paramters

| Method | Description | Available from version |
| --- | --- | --- |
| entityId | Entity ID |     |
| entityType | Entity type (U - user, G - group). In case of U (Planner), _true_ is returned only in one case: if the ID of current user is passed in entityId. |     |

Returns 'true/false'.