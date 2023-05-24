---
id: folders
title: Folders
sidebar_label: Folders
---


## Queries
```ts
const { query } = useProtocol(WorkProtocol.Folders);
const { data: { workspaces } } = query`
                                    folders(workspace_id: "workspace_id" ) {
                                        id
                                        name
                                    }
                                `
```

### Arguments
| Parameter                   | Description                                                |
| --------------------------- | ---------------------------------------------------------- |
| tenant_id: ```String```     | Optional. If not present, the session's tenant_id is used  |
| account_id: ```String```    | Optional. If not present, the session's account_id is used |
| app_id: ```String```        | Optional. If not present, current app_id is used           |
| workspace_id: ```String!``` | The unique identifiers of the specific workspace           |
| page: ```Int```             | The page number to get. Starts at 1.                       |
| limit: ```Int```            | The number of workspaces to return. The default is 25.     |
| order_by: ```String```      | The number of workspaces to return. The default is 25.     |

### Fields
| Fields                   | Description |
| ------------------------ | ----------- |
| tenant_id: ```String```  |             |
| account_id: ```String``` |             |
| app_id: ```String```     |             |
| name: ```String```       |             |
| created_at: ```Date```   |             |

## Mutations

### Create a folder

```ts
const { mutation } = useProtocol(WorkProtocol.Folders);
const { mutate: createFolder } = mutation`
                                     create_folder (workspace_id: $workspace_id, name:$name) {
                                        id
                                        description
                                    }
                                `

createFolder({
    workspace_id: 'AAA',
    name: 'New Folder'
})

```
#### Arguments
| Arguments                 | Description |
| ------------------------- | ----------- |
| tenant_id: ```String```   |             |
| account_id: ```String```  |             |
| app_id: ```String```      |             |
| name: ```String!```       |             |
| description: ```String``` |             |


### Delete folder

```ts
const { mutation } = useProtocol(WorkProtocol.Folders);
const { mutate: deleteFolder } = mutation`
                                     delete_folder (folder_id: "ABC") {
                                        id
                                    }
                                `

```
#### Arguments
| Arguments                | Description                     |
| ------------------------ | ------------------------------- |
| folder_id: ```String!``` | The folder's unique identifier. |
