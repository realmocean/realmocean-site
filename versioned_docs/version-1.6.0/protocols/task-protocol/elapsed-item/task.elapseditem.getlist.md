---
id: task.elapseditem.getlist
title: task.elapseditem.getlist
sidebar_label: task.elapseditem.getlist
---
Returns a list of entries about elapsed time for a task.

#### Method Parameters

| Parameter | Description |
| --- | --- |
| TASKID | Task identifier. Required parameter. |
| ORDER | Array for result sorting. Sorting field may take the following values:  <br/> <br/> * **ID** – identifier of the entry about elapsed time;<br/> * **USER_ID** – identifier of the user on whose behalf the entry about the elapsed time was made;<br/> * **MINUTES** – elapsed time, minutes;<br/> * **SECONDS** – elapsed time, seconds ;<br/> * **CREATED_DATE** – entry creation date;<br/> * **DATE_START** – start date;<br/> * **DATE_STOP** – end date.<br/> <br/> Sorting direction can take the following values:<br/> <br/> * **asc** – ascending;<br/> * **desc** – descending;<br/> <br/> Optional. By default it is filtered by descending of the entry elapsed time identifier. |
| FILTER | Array of the time _{"filtered_field": "filter value" \[, ...\]}_. Filtered field can take the following values:  <br/> <br/> * **ID** – comment identifier;<br/> * **USER_ID** – identifier of the user on whose behalf the entry about the elapsed time was made;<br/> * **CREATED_DATE** – entry creation date.<br/> <br/> Filtration type may be indicated before the name of the field to be filtered:<br/> <br/> * "!" – not equal;<br/> * "<" – less;<br/> * "<=" – less or equal;<br/> * ">" – more;<br/> * ">=" – more or equal.<br/> <br/> _filter values_ \- a single value or an array.  <br/>   <br/> Optional. By default entries are not filtered. |
| PARAMS | Array for call options. The array NAV_PARAMS type _{"call option": 'value' \[, ...\]}_ is the element that stores the following options:<br/> <br/> * **nPageSize** \- number of elements per page. Record entries are limited to 50 to avoid excessive load on pagewise navigation.<br/> * **iNumPage** \- page number within pagewise navigation. |
| SELECT | Array of record fields to be returned by the method. Only the required fields can be specified. If the `"*"` value is available in the array - all available fields are returned.  <br/>   <br/> Default value - empty array `array()`, meaning that all fields of the request table will be returned. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

Please be advised on some specifics of manually adding information about worktime expended on the work completed several days ago. In this case, the following field values are changed:

* CREATED_DATE - start date;
* DATE_START - date entry created;
* DATE_STOP - date entry created;

#### Example

// Obtaining all entries about elapsed time with sorting by descending ID.
// Only entries with fewer than 50 IDs will be filtered.

BX24.callMethod(
   'task.elapseditem.getlist',
   \[1, {'ID': 'desc'}, {'<ID': 50}\],
   function(result){
      console.info(result.data());
      console.log(result);
   }
);

Retrieving selection by the time spent based on the general filter conditions. For example, select data on working hours at the specified date:

BX24.callMethod(
  'task.elapseditem.getlist',
  \[{'ID': 'desc'}, {'>=CREATED_DATE': '2018-02-16'}\],
  function(result){
     console.info(result.data());
     console.log(result);
  }
);

Example of working with php:

// Example of working with php
// Obtain GET request for data selection.
$appParams = array(
    "auth" =\> '92006f4ae0c55d400f1e6e09428af64a',
    "ORDER" =\> array("ID" =\> "DESC"),            // Sorting by ID - descending
    "FILTER" =\> array(">ID" =\> 1),                // Filter
    "SELECT" =\> array('ID', 'TASK_ID'),            // Selection - only record and task ID
    "PARAMS" =\> array('NAV_PARAMS' =\> array(    // Pagewise navigation parameters
        "nPageSize" =\> 2,                        // per 2 items per page
        'iNumPage' =\> 2                        // page number 2
    )),
);

$appRequestUrl = 'http://test-domain.ru/rest/task.elapseditem.getlist.xml?'.http\_build\_query($appParams);

print(urldecode($appRequestUrl));;