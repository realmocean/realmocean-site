---
id: task.item.userfield.get
title: task.item.userfield.get
sidebar_label: task.item.userfield.get
---
This method returns property by the ID.

#### Metod parameters

| Parameter | Description |
| --- | --- |
| _auth_ | Authorization token. |
| _ID_ | User field ID. |

#### Example

$appParams = array(
     'auth' =\> 'q21g8vhcqmxdrbhqlbd2wh6ev1debppa',
     'ID' =\> 77
);

**Call example**

$request = 'http://your-domain.com/rest/task.item.userfield.get.xml?'.http\_build\_query($appParams);



BX24.callMethod(
    'task.item.userfield.get',
    {'q21g8vhcqmxdrbhqlbd2wh6ev1debppa', 77},

    function(result)
    {
        console.info(result.data());
        console.log(result);
    }
);