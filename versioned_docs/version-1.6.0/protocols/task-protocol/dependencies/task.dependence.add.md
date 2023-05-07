---
id: task.dependence.add
title: task.dependence.add
sidebar_label: task.dependence.add
---
task.dependence.add(taskIdFrom, taskIdTo, linkType)

This method creates dependency from one task to another.

#### Parameters

| Method | Description | Available from version |
| --- | --- | --- |
| taskIdFrom | ID of the task, from which dependency is created. |     |
| taskIdTo | ID of the task to which dependency is created |     |
| linkType | Type of dependency:<br/> <br/> const LINK\_TYPE\_START_START =      00; // Start-start link<br/> const LINK\_TYPE\_START_FINISH =     01; // Start-finish link<br/> const LINK\_TYPE\_FINISH_START =     02; // Finish-start link<br/> const LINK\_TYPE\_FINISH_FINISH =    03; // Finish-finish link |     |

Type of dependency can be passed via simple digits. But if a request via PHP is made, it is recommended to use `ProjectDependenceTable::LINK_TYPE_START_START`, i. e. to use values of the constant.