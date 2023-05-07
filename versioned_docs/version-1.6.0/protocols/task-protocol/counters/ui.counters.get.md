---
id: ui.counters.get
title: ui.counters.get
sidebar_label: ui.counters.get
---
**ui.counters.get** \- this method returns .json object with data of counters for individual user, in a specific group with a specific role. If the group is not specified or equals to 0 (null), then it is not considered. If role is not specified, then it returns counters from the "All" section.

**Attention!** Currently this method is operational only for Bitrix24 Self-Hosted editions.

#### Parameters

| Parameter | Description | Available from version |
| --- | --- | --- |
| UserId | User ID |     |
| groupId | Group ID |     |
| type | Parameter is located in `\Bitrix\Tasks\Internals\Counter\Role`. User role must be passed to it, for which data must be displayed. |     |

#### Example

this.callRemote('ui.counters.get',
                    {
                        userId: userId,
                        type: roleId,
                        groupId: groupId
                    }
                ).then(function(result)
                {
                    console.log(result.getData());
                });