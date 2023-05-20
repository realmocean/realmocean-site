---
id: applets
title: Applets
sidebar_label: Applets
---


## Queries
```ts
const { query } = useProtocol(WorkProtocol.Applets);

const workspace_id = 'Z589MPU2JAPD';
const folder_id = 'MWCGSEGXJHBK';

// This query retrive applets that is in spesific workspace and folder
const { data: { applets } } = query`
                                    applets(workspace_id: ${workspace_id}, folder_id: ${folder_id} ) {
                                        id
                                        name
                                        views {
                                            id
                                            title
                                        }
                                    }
                                `
```

### Arguments
| Parameter              | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| tenant_id: ```ID```    | If not present, the session's tenant_id is used        |
| account_id: ```ID```   | If not present, the session's account_id is used       |
| app_id: ```ID```       | If not present, current app_id is used                 |
| workspace_id: ```ID``` | Workspace ID of applet.                                |
| folder_id: ```ID```    | Folder ID of applet.                                   |
| scope_id: ```ID```     | The specific scope ID to return.                       |
| page: ```Int```        | The page number to get. Starts at 1.                   |
| limit: ```Int```       | The number of workspaces to return. The default is 25. |
| order_by: ```String``` | The number of workspaces to return. The default is 25. |

### Fields
| Fields                 | Description                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| id: ```ID!```          | Unique ID of applet.                                                                        |
| tenant_id: ```ID```    | The ID of tenant  that contains the applet.                                                 |
| account_id: ```ID```   | The ID of account  that contains the applet.                                                |
| app_id: ```ID```       | The ID of app  that contains the applet.                                                    |
| workspace_id: ```ID``` | The ID of workspace  that contains the applet. if null applet has been added to the app.    |
| folder_id: ```ID```    | The ID of folder  that contains the applet. if null applet has been added to the workspace. |
| scope_id: ```ID!```    | The ID of the scope that the applet has                                                     |
| name: ```String```     | Name of the applet                                                                          |
| views: ```[View]```    | Views that the applet has                                                                   |


## Mutations

### Create an applet
This method allows you to create a new applet for any parent(bios, app, workspace or folder) item. After the mutation runs you can query back all the item data as shown in the querying items section above.

```ts
const { mutation } = useProtocol(WorkProtocol.Applets);
const { mutate: createApplet } = mutation`
                                     create_applet {
                                        id
                                        description
                                    }
                                `
createApplet({
    workspace_id: 'AAA',
    folder_id: 'your_folder_id',
    name: 'My Folder'
})

```
#### Arguments
| Parameter              | Description                                      |
| ---------------------- | ------------------------------------------------ |
| tenant_id: ```ID```    | If not present, the session's tenant_id is used  |
| account_id: ```ID```   | If not present, the session's account_id is used |
| app_id: ```ID```       | If not present, current app_id is used           |
| workspace_id: ```ID``` | Workspace ID of applet.                          |
| folder_id: ```ID```    | Folder ID of applet.                             |
| scope_id: ```ID!```    | The ID of the scope that the applet has          |
| name: ```String```     | Name of the applet                               |


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
