---
id: task.item.userfield.add
title: task.item.userfield.add
sidebar_label: task.item.userfield.add
---
This method creates new property.

System limitation for field name - 20 symbols. Prefix UF\_TASK\_ is always added to user field name. It means that the actual length of the name - 12 symbols.

#### Method parameters

| Parameter | Description |
| --- | --- |
| _auth_ | Authorization token. |
| _PARAMS_ | Array with parameters of array type property ("parameter": 'value' \[, ...\]), containing the following parameters:  <br/> <br/> * **USER\_TYPE\_ID** \- user field data type. Accessible values are as follows:<br/> <br/> * `string` (**String**);<br/> * `double` (**Number**);<br/> * `date` (**Date**);<br/> * `boolean` (**Yes/No**);<br/> <br/> * **FIELD_NAME** \- field code;<br/> * **XML_ID** \- external code;<br/> * **EDIT\_FORM\_LABEL** \- edit from label (specified in English ('en') language;<br/> * **LABEL** \- field title. |

#### Call examples.

$appParams = array(
          'auth' =\> 'q21g8vhcqmxdrbhqlbd2wh6ev1debppa',
          'PARAMS' =\> array(
                   'USER\_TYPE\_ID' =\> 'string',
                   'FIELD_NAME' =\> 'NEW\_TASKS\_FIELD',
                   'XML_ID' =\> 'MY\_TASK\_FIELD',
                   'EDIT\_FORM\_LABEL' =\> array(
                       'en' =\> 'New task field',
                   ),
                   'LABEL' =\> 'New task field'
           ),
);

$request = 'http://your-com/rest/task.item.userfield.add.xml?'.http\_build\_query($appParams);'



BX24.callMethod(
    'task.item.userfield.add',
    { 'q21g8vhcqmxdrbhqlbd2wh6ev1debppa', \['USER\_TYPE\_ID' : 'string', 'FIELD_NAME' : 'NEW\_TASKS\_FIELD', 'XML_ID' : 'MY\_TASK\_FIELD',
    'EDIT\_FORM\_LABEL' : \['en' : 'New task field',\], 'LABEL' : 'New task field'\]},

    function(result)
    {
        console.info(result.data());
        console.log(result);
    }
);