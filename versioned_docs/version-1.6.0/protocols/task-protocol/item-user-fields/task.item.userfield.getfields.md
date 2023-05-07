---
id: task.item.userfield.getfields
title: task.item.userfield.getfields
sidebar_label: task.item.userfield.getfields
---
$appParams = array(
     'auth' =\> 'q21g8vhcqmxdrbhqlbd2wh6ev1debppa',
);

This method returns all available property fields.

#### Method parameters

| Parameter | Description |
| --- | --- |
| _auth_ | Authorization token. |

#### Examples

$request = 'http://your-domain.com/rest/task.item.userfield.getfields.xml?'.http\_build\_query($appParams);'



BX24.callMethod(
    'task.item.userfield.getfields',
    {'q21g8vhcqmxdrbhqlbd2wh6ev1debppa'},

    function(result)
    {
        console.info(result.data());
        console.log(result);
    }
);



### List of fields

| Code | Field | Type | Note |
| --- | --- | --- | --- |
| ID  | Identifier | int | Read only |
| ENTITY_ID | Object | string |     |
| FIELD_NAME | Code | string | Read only |
| USER\_TYPE\_ID | Data type | string | Read only |
| XM L_ID | External identifier (XML ID) | string |     |
| SORT | Sorting | int |     |
| MULTIPLE | Multiple | char |     |
| MANDATORY | Required | char |     |
| SHOW_FILTER | Show in filter list | char |     |
| SHOW\_IN\_LIST | Show in list | char |     |
| EDIT\_IN\_LIST | Allow editing by user | char |     |
| IS_SEARCHABLE | Field values included in search | char |     |
| EDIT\_FORM\_LABEL | Caption in edit form | string |     |
| LIST\_COLUMN\_LABEL | Title in list | string |     |
| LIST\_FILTER\_LABEL | Filter caption in list | string |     |
| ERROR_MESSAGE | Error message | string |     |
| HELP_MESSAGE | Help | string |     |
| LIST | List items | uf\_enum\_element | Multiple |
| SETTINGS | Additional settings (depend on type) | object |     |