---
id: task.item.userfield.update
title: task.item.userfield.update
sidebar_label: task.item.userfield.update
---
This method is used to edit property parameters.

#### Method parameters

| Parameter | Description |
| --- | --- |
| _auth_ | Authorization token. |
| _ID_ | User field ID. |
| _DATA_ | Array ("field"=>"value", ...). Contains values of edited parameters. |

#### Example

$appParams = array(
    'auth' =\> 'q21g8vhcqmxdrbhqlbd2wh6ev1debppa',
    'ID' =\> 77
    'DATA' =\> array('XML_ID' =\> 'new\_external\_id')
);

#### Call examples

$request = 'http://your-domain.com/rest/task.item.userfield.update.xml?'.http\_build\_query($appParams);



BX24.callMethod(
    'task.item.userfield.update',
    {'q21g8vhcqmxdrbhqlbd2wh6ev1debppa', 77, \['XML_ID': 'new\_external\_id'\]},

    function(result)
    {
        console.info(result.data());
        console.log(result);
    }
);