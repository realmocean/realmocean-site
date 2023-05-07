---
id: task.commentitem.getlist
title: task.commentitem.getlist
sidebar_label: task.commentitem.getlist
---
Returns list of comments to a task.

#### Method parameters

| Parameter | Description |
| --- | --- |
| TASKID | Task ID. A required parameter. |
| ORDER | Array for result sorting. The field for sorting may take the following values:  <br/> <br/> * **ID** – comment ID;<br/> * **AUTHOR_ID** – comment author’s identifier;<br/> * **AUTHOR_NAME** – author’s name;<br/> * **AUTHOR_EMAIL** – author’s email ;<br/> * **POST_DATE** – comment posting date..<br/> <br/> The sorting direction may take the following values:<br/> <br/> * **asc** – ascending;<br/> * **desc** – descending;<br/> <br/> Optional. By default it is filtered by descending comment ID. |
| FILTER | The array of the type _{"filtered_field": "field value" \[, ...\]}_. Filtered field can take the following values:  <br/> <br/> * **ID** – comment ID;<br/> * **AUTHOR_ID** – ID of a comment author;<br/> * **AUTHOR_NAME** – author’s name;<br/> * **POST_DATE** – comment posting date.<br/> <br/> Filter type can be specified before the filtered field:<br/> <br/> * "!" – not equal;<br/> * "<" – less;<br/> * "<=" – less or equal;<br/> * ">" – more;<br/> * ">=" – more or equal.<br/> <br/> _filter values_ – a single value or an array.  <br/>   <br/> Optional. By default the entries are not filtered. |

**Attention!** Compliance to parameter sequence in the request is mandatory. If sequence is not observed, the request will be completed with errors.

#### Example

// Obtain all the comments for the task with ID=1 with ascending sorting by ID and filter by AUTHOR_ID

BX24.callMethod(
    'task.commentitem.getlist',
    \[1, {'ID': 'asc'}, {'>AUTHOR_ID': 2}\],
    function(result){
        console.info(result.data());
        console.log(result);
    }
);