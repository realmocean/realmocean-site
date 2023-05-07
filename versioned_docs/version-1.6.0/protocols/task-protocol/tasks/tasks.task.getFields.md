---
id: tasks.task.getFields
title: tasks.task.getFields
sidebar_label: tasks.task.getFields
---
The method returns all accessible fields.

#### Parameters

No parameters.

#### Examples

callMethod(
    'tasks.task.getFields',
    {},
    function(result)
    {
        console.info(result.data());
        console.log(result);
    }
);



### List of fields

| Code | Field | Type | Value | Required |
| --- | --- | --- | --- | --- |
| ID  | Task identifier | integer |     |     |
| PARENT_ID | Parent task ID | integer | Default value - 0 |     |
| TITLE | Name | string |     | Да  |
| DESCRIPTION | Description | string |     |     |
| MARK | Rating | enum | N - Negative,  <br/> P - Positive.  <br/> Default value - null |     |
| PRIORITY | Priority | enum | 2 - High,  <br/> 1 - Medium,  <br/> 0 - Low.  <br/> Default value - 1 |     |
| STATUS | Status | enum | 2 -Pending,  <br/> 3 - In progress,  <br/> 4 - Pending review,  <br/> 5 - Completed,  <br/> 6 - Deferred.  <br/> Default value - 2 |     |
| MULTITASK | Multitask | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| NOT_VIEWED |     | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| REPLICATE | Repeat task | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| GROUP_ID | Project | integer | Default value - 0 |     |
| STAGE_ID | Stage | integer | Default value- 0 |     |
| CREATED_BY | Created by | integer |     | Yes |
| CREATED_DATE | Date created | datetime |     |     |
| RESPONSIBLE_ID | Responsible | integer |     | Yes |
| ACCOMPLICES | Participant | array |     |     |
| AUDITORS | Observers | array |     |     |
| CHANGED_BY | Modified by | integer |     |     |
| CHANGED_DATE | Modified on | integer |     |     |
| STATUS\_CHANGED\_BY | Status modified by | integer |     |     |
| CLOSED_BY | Closed the task | integer |     |     |
| CLOSED_DATE | Closed on | datetime |     |     |
| DATE_START | Start date | datetime | null |     |
| DEADLINE | Deadline | datetime | null |     |
| START\_DATE\_PLAN | Planned start | datetime | null |     |
| END\_DATE\_PLAN | Planned finish | datetime | null |     |
| GUID | GUID | string | null |     |
| XML_ID | XML_ID | string | null |     |
| COMMENTS_COUNT | Number of comments | integer |     |     |
| NEW\_COMMENTS\_COUNT | Number of new comments | integer |     |     |
| ALLOW\_CHANGE\_DEADLINE | Allow to change deadlines | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| TASK_CONTROL | Accept | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| ADD\_IN\_REPORT | Add to report | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| FORKED\_BY\_TEMPLATE_ID | Created from template | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| TIME_ESTIMATE | Time spent | integer |     |     |
| TIME\_SPENT\_IN_LOGS | Time spent from history | integer |     |     |
| MATCH\_WORK\_TIME | Skip weekend | integer |     |     |
| FORUM\_TOPIC\_ID | Forum topic ID | integer |     |     |
| FORUM_ID | Forum ID | integer |     |     |
| SITE_ID | Site ID | string |     |     |
| SUBORDINATE | Subordinate task | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| FAVORITE | Added to Favorites | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| EXCHANGE_MODIFIED |     | datetime | null |     |
| EXCHANGE_ID | EXCHANGE_ID | integer | null |     |
| OUTLOOK_VERSION | OUTLOOK_VERSION | integer | null |     |
| VIEWED_DATE | Last view date | datetime |     |     |
| SORTING | Sort index | double |     |     |
| DURATION_PLAN | Duration (plan) | integer |     |     |
| DURATION_FACT | Duration (actual) | integer |     |     |
| CHECKLIST | Checklist | array |     |     |
| DURATION_TYPE | DURATION_TYPE | enum | \[0\] => secs  <br/> \[1\] => mins  <br/> \[2\] => hours  <br/> \[3\] => days  <br/> \[4\] => weeks  <br/> \[5\] => monts  <br/> \[6\] => years.  <br/> Default value - 3 |     |
| UF\_CRM\_TASK | Bind to elements CRM  <br/> L_XX - lead,  <br/> C_XX - contact ,  <br/> D_XX - deal | crm |     |     |
| UF\_TASK\_WEBDAV_FILES | File (Drive) | disk_file |     |     |
| UF\_MAIL\_MESSAGE | Email (email) | mail_message |     |     |
| IS_MUTED | Notifications | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| IS_PINNED | Pinned | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| IS\_PINNED\_IN_GROUP | Pinned in group | enum | Y - Yes,  <br/> N - No.  <br/> Default value - No. |     |
| SERVICE\_COMMENTS\_COUNT |     | integer |     |     |