---
id: task.item.userfield.gettypes
title: task.item.userfield.gettypes
sidebar_label: task.item.userfield.gettypes
---
$appParams = array(
     'auth' =\> 'q21g8vhcqmxdrbhqlbd2wh6ev1debppa',
);

This method returns all available types of data.

#### Method parameters

| Parameter | Description |
| --- | --- |
| _auth_ | Authorization token. |

#### Call examples

$request = 'http://your-domain.com/rest/task.item.userfield.gettypes.xml?'.http\_build\_query($appParams);'



BX24.callMethod(
    'task.item.userfield.gettypes',
    {'q21g8vhcqmxdrbhqlbd2wh6ev1debppa'},

    function(result)
    {
        console.info(result.data());
        console.log(result);
    }
);