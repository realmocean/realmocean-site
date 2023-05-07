---
id: task.stages.movetask
title: task.stages.movetask
sidebar_label: task.stages.movetask
---
This method moves task from one stage to another.

#### Paramters

| Method | Description | Available from version |
| --- | --- | --- |
| id  | Task ID |     |
| stageId | ID of the stage, where the task must be moved |     |
| before | ID of the task, before which the task must be placed in stage. |     |
| after | ID of the task, after which the task must be placed in stage. |     |

**Note**. If 'before' and 'after' parameters are not passed simultaneously, then the task is added in the column as per settings of the project/planner. Otherwise, parameters 'before' and 'after' are incompatible. Only one or the other parameter is specified, if required.

This method works as follows. If the wokrgroup stage is passed, movement is performed within Kanban of the workgroup. If the Planner stage is passed, movement is performed within Planner. Prior to movement, permission rights verification is performed.