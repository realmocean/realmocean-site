---
id: task.dependence.delete
title: task.dependence.delete
sidebar_label: task.dependence.delete
---
task.dependence.delete(taskIdFrom, taskIdTo, linkType)

This method deletes dependency from one task to another.

#### Parameters

| Method | Description | Available from version |
| --- | --- | --- |
| taskIdFrom | ID of the task, dependency from which is deleted. |     |
| taskIdTo | ID of the task, dependency to which is deleted. |     |
| linkType | Dependency type:<br/> <br/> const LINK\_TYPE\_START_START =      0x00; // Start-Start link<br/> const LINK\_TYPE\_START_FINISH =     0x01; // Start-finish link<br/> const LINK\_TYPE\_FINISH_START =     0x02; // Finish-start link<br/> const LINK\_TYPE\_FINISH_FINISH =    0x03; // Finish-finish link |     |