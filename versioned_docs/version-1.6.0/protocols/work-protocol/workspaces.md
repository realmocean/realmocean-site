---
id: workspaces
title: Workspaces
sidebar_label: Workspaces
---


## Queries
```ts
const { query } = useProtocol(WorkProtocol.Workspaces);
const { data: { workspaces } } = query`
                                    workspaces(tenant_id:"tenant_1") {
                                        id
                                        name
                                    }
                                `
```

### Arguments
| Parameter                | Description                                                |
| ------------------------ | ---------------------------------------------------------- |
| tenant_id: ```String```  | Optional. If not present, the session's tenant_id is used  |
| account_id: ```String``` | Optional. If not present, the session's account_id is used |
| app_id: ```String```     | Optional. If not present, current app_id is used           |
| page: ```Int```          | The page number to get. Starts at 1.                       |
| limit: ```Int```         | The number of workspaces to return. The default is 25.     |
| order_by: ```String```   | The number of workspaces to return. The default is 25.     |

### Fields
| Fields                   | Description |
| ------------------------ | ----------- |
| tenant_id: ```String```  |             |
| account_id: ```String``` |             |
| app_id: ```String```     |             |
| name: ```String```       |             |
| created_at: ```Date```   |             |

## Mutations

### Create a workspace

```ts
const { mutation } = useProtocol(WorkProtocol.Workspaces);
const {mutate:createWorkspace} = mutation`
                                     create_workspace (name:"New Workspace") {
                                        id
                                        description
                                    }
                                `

```
#### Arguments
| Arguments                 | Description |
| ------------------------- | ----------- |
| tenant_id: ```String```   |             |
| account_id: ```String```  |             |
| app_id: ```String```      |             |
| name: ```String!```       |             |
| description: ```String``` |             |


### Delete workspace

```ts
const { mutation } = useProtocol(WorkProtocol.Workspaces);
const {mutate:createWorkspace} = mutation`
                                     delete_workspace (workspace_id:"ABC") {
                                        id
                                    }
                                `

```
#### Arguments
| Arguments                   | Description |
| --------------------------- | ----------- |
| workspace_id: ```String!``` |             |
