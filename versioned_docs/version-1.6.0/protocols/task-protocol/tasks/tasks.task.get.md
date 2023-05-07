---
id: tasks.task.get
title: tasks.task.get
sidebar_label: tasks.task.get
---

Returns data about specific task.

**Attention!** The fields must be specified in **select**, because default fields can be modified in the future.

#### Example

callMethod(
    'tasks.task.get',
{taskId:1, select:\['ID','TITLE'\]},
function(res){console.log(res.answer.result);}
);

#### Parameters

| Parameter | Description |
| --- | --- |
| taskId | Task ID. |
| select | Array of record fields that will be returned by the method. Only the required fields can be specified.  <br/>  <br/> Sorting fields can have values:<br/> <br/> * **ID** \- task ID;<br/> * **PARENT_ID** \- parent task ID;<br/> * **TITLE** \- task name;<br/> * **DESCRIPTION** \- description;<br/> * **MARK** \- evaluation;<br/> * **PRIORITY** \- priority:<br/>    * **0** \- low;<br/>    * **1** \- medium;<br/>    * **2** \- high.<br/> * **STATUS** \- status;<br/> * **MULTITASK** \- multitask;<br/> * **NOT_VIEWED** \- not viewed task;<br/> * **REPLICATE** \- repeat task;<br/> * **GROUP_ID** \- workgroup. <br/> * **STAGE_ID** \- stage;<br/> * **CREATED_BY** \- created by;<br/> * **CREATED_DATE** \- creation date;<br/> * **RESPONSIBLE_ID** \- responsible for task;<br/> * **ACCOMPLICE** \- task participant ID;<br/> * **AUDITOR** \- auditor ID;<br/> * **CHANGED_BY** \- who modified task;<br/> * **CHANGED_DATE** \- date when modified;<br/> * **STATUS\_CHANGED\_DATE** \- who changed task status;<br/> * **CLOSED_BY** \- who closed task;<br/> * **CLOSED_DATE** \- date when task is closed;<br/> * **DATE_START** \- task start date;<br/> * **DEADLINE** \- deadline;<br/> * **START\_DATE\_PLAN** \- planned task start;<br/> * **END\_DATE\_PLAN** \- planned task finish;<br/> * **GUID** \- GUID (static unique 128-byte ID);<br/> * **XML_ID** \- external code;<br/> * **COMMENTS_COUNT** \- number of comments;<br/> * **NEW\_COMMENTS\_COUNT** \- number of new comments;<br/> * **TASK_CONTROL** \- start executing the task;<br/> * **ADD\_IN\_REPORT** \- add to report;<br/> * **FORKED\_BY\_TEMPLATE_ID** \- created from template;<br/> * **TIME_ESTIMATE** \- estimated spent time;<br/> * **TIME\_SPENT\_IN_LOGS** \- time spent from log;<br/> * **MATCH\_WORK\_TIME** \- skip weekends;<br/> * **FORUM\_TOPIC\_ID** \- forum topic ID;<br/> * **FORUM_ID** \- forum ID;<br/> * **SITE_ID** \- site ID;<br/> * **SUBORDINATE** \- task of subordinate user;<br/> * **FAVORITE** \- favorites;<br/> * **VIEWED_DATE** \- date when viewed last;<br/> * **SORTING** \- sorting index;<br/> * **DURATION_PLAN** \- duration (plan);<br/> * **DURATION_FACT** \- duration (actual);<br/> * **DURATION_TYPE** \- duration type;<br/> li>0 - seconds* 1 - minutes<br/> * 2 - hours<br/> * 3 - days<br/> * 4 - weeks<br/> * 5 - months<br/> * 6 - years<br/> <br/> * **UF\_CRM\_TASK** \- bidding to CRM items.<br/> <br/> By default, all **uncomputable** fields for the query main table.<br/> <br/> To get custom fields and bidding fields to CRM entities (UF\_CRM\_TASK), they can be directly indicated in SELECT. List of fields can be clarified by sending the request [tasks.task.getFields](/rest_help/tasks/task/tasks/tasks_task_getFields.php). |