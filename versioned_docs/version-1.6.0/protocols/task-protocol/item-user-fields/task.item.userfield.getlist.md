---
id: task.item.userfield.getlist
title: task.item.userfield.getlist
sidebar_label: task.item.userfield.getlist
---
This method returns list of properties.

#### Method parameters

| Parameter | Description |
| --- | --- |
| _auth_ | Authorization token. |
| _ORDER_ | Array for result sorting. Array type ("sorting field"=>"sorting direction" \[, ...\]). |
| _FILTER_ | Array for array type filtration result ("filtered field"=>"filter value" \[, ...\]). Required parameter. |

#### Example

$appParams = array(
     'auth' =\> 'q21g8vhcqmxdrbhqlbd2wh6ev1debppa',
     'ORDER' =\> array('ID' =\> 'asc'),
     'FILTER' =\> array('USER\_TYPE\_ID' =\> 'string')
);

#### Call example

$request = 'http://your-domain.com/rest/task.item.userfield.getlist.xml?'.http\_build\_query($appParams);



BX24.callMethod(
    "task.item.userfield.getlist",
    {
        order:
        {
            "ID": "ASC"
        },
        filter:
        {
            "EDIT\_IN\_LIST": "Y"
        }
    },
    function(result)
    {
    }
);