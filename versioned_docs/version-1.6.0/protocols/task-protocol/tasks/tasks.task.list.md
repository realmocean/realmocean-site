---
id: tasks.task.list
title: tasks.task.list
sidebar_label: tasks.task.list
---
Returns array of tasks, each containing array of fields. In contrast to [task.item.list](/rest_help/tasks/task/item/task_item_list.php), parameters of the **tasks.task.list** query can be specified in any sequence, as well as skip unnecessary parameters.

To get data for all tasks, user must have admin access permissions. Department manager will get access only to tasks in his/her hierarchy branch.

Also, tasks in "Favourites" can be retrieved via filtering by the parameter `$filter[::SUBFILTER-PARAMS][FAVORITE]=Y`.

**Attention!** Fields must be specified in **select**, because the default fields may be modified in the future.

#### Function parameters

### Parameters

| Parameter | Description |
| --- | --- |
| order | Array for sorting of result. Array of the type _{"sorting\_field": 'sort\_order' \[, ...\]}_.  <br/> Field for sorting can have the following values:<br/> <br/> * **ID** \- task ID;<br/> * **TITLE** \- task name;<br/> * **TIME\_SPENT\_IN_LOGS** \- time spent indicated in logs;<br/> * **DATE_START** \- start date;<br/> * **CREATED_DATE** \- date when created;<br/> * **CHANGED_DATE** \- date when task was modified last;<br/> * **CLOSED_DATE** \- date closed;<br/> * **START\_DATE\_PLAN** \- plan start date;<br/> * **END\_DATE\_PLAN** \- plan finish date;<br/> * **DEADLINE** \- deadline;<br/> * **REAL_STATUS** \- task status. Constants that reflect task statuses:<br/>     * STATE_NEW = 1;<br/>     * STATE_PENDING = 2;<br/>     * STATE\_IN\_PROGRESS = 3;<br/>     * STATE\_SUPPOSEDLY\_COMPLETED = 4;<br/>     * STATE_COMPLETED = 5;<br/>     * STATE_DEFERRED = 6;<br/>     * STATE_DECLINED = 7;<br/> * **STATUS_COMPLETE** \- task complete flag;<br/> * **PRIORITY** \- priority;<br/> * **MARK** \- evaluation;<br/> * **CREATED\_BY\_LAST_NAME** \- task created by; <br/> * **RESPONSIBLE\_LAST\_NAME** \- last name of the task responsible user; <br/> * **GROUP_ID** \- workgroup. <br/> * **TIME_ESTIMATE** \- time spent on task;<br/> * **ALLOW\_CHANGE\_DEADLINE** \- flag "Allow for responsible user to change deadline";<br/> * **ALLOW\_TIME\_TRACKING** \- flag enabling task time tracking;<br/> * **MATCH\_WORK\_TIME** \- skip weekends;<br/> * **FAVORITE** \- favourite;<br/> * **SORTING** \- sorting index;<br/> * **MESSAGE_ID** \- search index ID;<br/> <br/> **Note:** For Bitrix24 On-premise editions this list of fields for sorting can be returned via the method [CTasks::getAvailableOrderFields()](https://training.bitrix24.com/api_help/tasks/classes/ctasks/getavailableorderfields.php).<br/> <br/> Direction of sorting can have the following values:<br/> <br/> * **asc** \- by ascension;<br/> * **desc** \- by descension;<br/> <br/>  Optional. By default, filtering is performed by descension of task ID. |
| filter | Array type _{"filtered_field": "filter value" \[, ...\]}_. Filtered field can have the following values:<br/> <br/> * **ID** \- task ID;<br/> * **PARENT_ID** \- parent task ID;<br/> * **GROUP_ID** \- workgroup ID;<br/> * **CREATED_BY** \- creator;<br/> * **STATUS\_CHANGED\_BY** \- user who was the last to modify task status;<br/> * **PRIORITY** \- priority;<br/> * **FORUM\_TOPIC\_ID** \- forum topic ID;<br/> * **RESPONSIBLE_ID** \- responsible;<br/> * **TITLE** \- task name (can be searched by template \[%_\]) ;<br/> * **TAG** \-  tag;<br/> * **REAL_STATUS** \- task status. Constants that reflect task statuses:<br/>     * STATE_NEW = 1;<br/>     * STATE_PENDING = 2;<br/>     * STATE\_IN\_PROGRESS = 3;<br/>     * STATE\_SUPPOSEDLY\_COMPLETED = 4;<br/>     * STATE_COMPLETED = 5;<br/>     * STATE_DEFERRED = 6;<br/>     * STATE_DECLINED = 7;<br/> * **STATUS** \- status for sorting. Similar to **REAL_STATUS**, but additionally has three meta-statuses:<br/>     * **-3** \- task almost overdue;<br/>     * **-2** \- task not viewed;<br/>     * **-1** \- overdue task.<br/> * **MARK** \- evaluation;<br/> * **SITE_ID** \- site ID;<br/> * **ADD\_IN\_REPORT** \- task in report (Y\|N);<br/> * **DATE_START** \- date when task started;<br/> * **DEADLINE** \- deadline;<br/> * **CREATED_DATE** \- date of creation;<br/> * **CLOSED_DATE** \- date of completion;<br/> * **CHANGED_DATE** \- date of last change;<br/> * **ACCOMPLICE** \- observer ID;<br/> * **AUDITOR** \- auditor ID;<br/> * **DEPENDS_ON** \- previous task ID; <br/> * **ONLY\_ROOT\_TASKS** \-   root tasks only (not subtasks) as well as subtasks of parent task to which current user does not have access to (Y\|N).<br/> * **STAGE_ID** \- stage;<br/> * **UF\_CRM\_TASK** \- CRM elements;<br/> <br/>   <br/> Type of filtration can be specified in front of the name of filtered field:<br/> <br/> * "!" \- not equal<br/> * "<" \- less<br/> * "<=" \- less or equal<br/> * ">" \- more<br/> * ">=" \- more or equal<br/> <br/>   <br/> "_filter value_" \- single value or array.  <br/>   <br/> Optional. Records are not filtered by default. |

| Parameter | Description |
| --- | --- |
| order | Array for result sorting. Array type _{"sort_field": 'sort order' \[, ...\]}_.  <br/> Sorting field can have the following values:<br/> <br/> * **ID** \- task ID;<br/> * **PARENT_ID** \- parent task ID;<br/> * **TITLE** \- task name;<br/> * **DESCRIPTION** \- description;<br/> * **MARK** \- evaluation;<br/> * **PRIORITY** \- priority:<br/>     * **0** \- low;<br/>     * **1** \- medium;<br/>     * **2** \- high.<br/> * **STATUS** \- status;<br/> * **MULTITASK** \- multiple task;<br/> * **NOT_VIEWED** \- task not viewed;<br/> * **REPLICATE** \- recurring task;<br/> * **GROUP_ID** \- workgroup. <br/> * **STAGE_ID** \- stage;<br/> * **CREATED_BY** \- creator;<br/> * **CREATED_DATE** \- date of creation;<br/> * **RESPONSIBLE_ID** \- responsible;<br/> * **ACCOMPLICE** \- participant ID;<br/> * **AUDITOR** \- auditor ID;<br/> * **CHANGED_BY** \- who modified task;<br/> * **CHANGED_DATE** \- date when modified;<br/> * **STATUS\_CHANGED\_DATE** \- date when status was updated;<br/> * **CLOSED_BY** \- who closed task;<br/> * **CLOSED_DATE** \- date when task is closed;<br/> * **DATE_START** \- start date;<br/> * **DEADLINE** \- deadline;<br/> * **START\_DATE\_PLAN** \- planned start;<br/> * **END\_DATE\_PLAN** \- planned completion date;<br/> * **GUID** \- GUID (statistically unique 128-byte ID);<br/> * **XML_ID** \- external code;<br/> * **COMMENTS_COUNT** \- number of comments;<br/> * **NEW\_COMMENTS\_COUNT** \- number of new comments;<br/> * **TASK_CONTROL** \- task control;<br/> * **ADD\_IN\_REPORT** \- add to report;<br/> * **FORKED\_BY\_TEMPLATE_ID** \- created from template;<br/> * **TIME_ESTIMATE** \- estimated time;<br/> * **TIME\_SPENT\_IN_LOGS** \- estimated time from history log;<br/> * **MATCH\_WORK\_TIME** \- skip weekends;<br/> * **FORUM\_TOPIC\_ID** \- forum topic ID;<br/> * **FORUM_ID** \- forum ID;<br/> * **SITE_ID** \- site ID;<br/> * **SUBORDINATE** \- task of subordinate;<br/> * **FAVORITE** \- Favourites;<br/> * **VIEWED_DATE** \- date when viewed last;<br/> * **SORTING** \- sorting index;<br/> * **DURATION_PLAN** \- duration (plan);<br/> * **DURATION_FACT** \- duration (actual);<br/> * **DURATION_TYPE** \- type of measurement unit within a scheduled duration: days, hours or minutes;<br/> <br/>   <br/> Optional. All the main **noncomputable** fields will be returned by default. List of fields can be clarified by sending **tasks.task.getFields** request. |
| limit | Number of records. Parameter is used to retrieve more than default number of records (50). All records cannot be retrieved in a single query due to system restrictions for all methods in REST API. You can execute several queries per 50 records to get all leads in response. Pass the 'start' parameter with the value multiple to value 50. Example:<br/> <br/> start=0<br/> start=50<br/> start=100 |
| start | Number of records to skip in the result. For example, with value `20`, the result will skip all the first 20 entries and start displaying 21 entry onwards.<br/> <br/> With value `-1` disables the count. |

#### Examples

1.  Print all tasks with the name "task for test", sorting by fields `ID`, `TITLE`, `STATUS` (sorting by ascension):

    callMethod(
        'tasks.task.list',
        {filter:{TITLE:'task for test'}, select: \['ID','TITLE','STATUS'\], order:{ID:'asc'}},
        function(res){console.log(res.answer.result);}
    );

    Result:



2.  Printing all non-recurring tasks, added to "Favourites" with status higher than 2:

    BX.rest.callMethod('tasks.task.list', {filter:{'>STATUS':2, REPLICATE:'N', '::SUBFILTER-PARAMS':{FAVORITE:'Y'}}}, (res)=>{console.log(res.answer.result);})

    Result:

    result: {
        tasks: \[
            {
                id: "117",
                parentId: null,
                title: "123",
                description: "Opisanie.   Ghhhhh",
                mark: null,
                priority: "0",
                status: "6",
                multitask: "N",
                notViewed: "N",
                replicate: "N",
                groupId: "0",
                stageId: "0",
                createdBy: "1",
                createdDate: "2019-03-15T15:41:27+02:00",
                responsibleId: "1",
                changedBy: "1",
                changedDate: "2019-03-18T14:06:18+02:00",
                statusChangedBy: "1",
                statusChangedDate: "2019-03-18T14:05:54+02:00",
                closedBy: null,
                closedDate: null,
                dateStart: null,
                deadline: null,
                startDatePlan: null,
                endDatePlan: null,
                guid: "{aef54f9d-8157-464b-9069-6ded9745e26d}",
                xmlId: null,
                commentsCount: null,
                taskControl: "Y",
                addInReport: "N",
                forkedByTemplateId: null,
                timeEstimate: "0",
                timeSpentInLogs: null,
                matchWorkTime: "N",
                forumTopicId: null,
                forumId: null,
                siteId: "s1",
                subordinate: "Y",
                favorite: "Y",
                exchangeModified: null,
                exchangeId: null,
                outlookVersion: "7",
                viewedDate: "2019-03-18T14:07:08+02:00",
                sorting: "2564.0000000",
                durationPlan: "0",
                durationFact: null,
                durationType: "days",
                descriptionInBbcode: "Y",
                ufCrmTask: \[ \],
                ufTaskWebdavFiles: \[
                    22
                \],
                ufAuto915658270214: null,
                ufAuto244510721805: null,
                ufAuto637823431651: "0",
                ufMailMessage: null,
                ufAuto226929532613: "",
                ufAuto187628303463: null,
                auditors: \[ \],
                accomplices: \[ \],
                newCommentsCount: 0,
                subStatus: "6",
                creator: {
                    id: "1",
                    name: "John Smith",
                    link: "/company/personal/user/1/",
                    icon: "/upload/resize\_cache/main/9b0/58\_58_2/p2dVDwA46Nw.png",
                },
                responsible: {
                    id: "1",
                    name: "John Smith",
                    link: "/company/personal/user/1/",
                    icon: "/upload/resize\_cache/main/9b0/58\_58_2/p2dVDwA46Nw.png",
                },
            }
        \]
    },


Example for disabling page navigation:

$result = CRest::call(
    'tasks.task.list',
    \[
        'filter' =\> \[
            '>ID' =\> 50
        \],
        'start' =\> -1,
    \]
);

REST method **tasks.task.list** has a registered number of items - 50. Presently, this value cannot be changed. To skip first N of entries, you have to pass the parameter 'start: N'. Example:

callMethod('tasks.task.list',{start: 1150})