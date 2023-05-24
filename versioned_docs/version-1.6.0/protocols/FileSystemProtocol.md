---
id: FileSystemProtocol
title: FileSystemProtocol
sidebar_label: FileSystem Protocol
---
FileSystemProtocol ile uygulamalariniza gorev yonetimi ekleyebilirsiniz.

### Creating protocol resolver
```ts
export const TaskProtocolResolver = (queryClient) => (
    {
        domain: ({ account_id, app_id, workspace_id, folder_id }) => ({
                // We resolve each item in domain shema type
                providerInfo: () => ({
                    vendor: 'Tuvalsoft',
                    version: '1.0.0'
                }),
                tasks: TasksResolver(queryClient, server),
                task: TaskResolver(queryClient, server),
                status: StatusResolver(queryClient, server),
                indicators: IndicatorsResolver(queryClient, server)
            })
    }
)
```

### Creating protocol context

```ts
 DataProtocol('com.tuvalsoft.provider.tasks')(() =>
...
 ).config({
                variables: {

                    tenant_id: useSessionService().TenantId,
                    account_id: useSessionService().AccountId,
                    app_id: 'com.tuvalsoft.app.workbench',
                    space_id: space_id,
                    folder_id: folder_id,
                    item_id: item_id
                }
            })
```

### Using protocol

```ts
 const { query } = useProtocol(TaskProtocol);
 const { data: {tasks, status }, isLoading } = query(`
                                                                        tasks {
                                                                            id
                                                                            tenant_id
                                                                            account_id
                                                                            app_id
                                                                            space_id
                                                                            folder_id
                                                                            item_id
                                                                            task_name
                                                                            task_description
                                                                            task_status
                                                                            task_assignee
                                                                            task_duedate
                                                                        }
                                                                        status {
                                                                            id
                                                                            tenant_id
                                                                            account_id
                                                                            app_id
                                                                            space_id
                                                                            folder_id
                                                                            item_id
                                                                            status_name
                                                                            status_background_color
                                                                            status_color
                                                                            order_index
                                                                        }`)
```

### Protocol schema
```graphql
type Domain {
  providerInfo: ProviderInfo
  tasks: [Task]
  task(id: String): Task
  status: [Status]
  indicators: [Indicator]
}

type ProviderInfo {
  vendor: String
  version: String
}

# Task a part of project
type Task {
    id: ID!
    tenant_id: String
    account_id: String
    app_id: String
    space_id: String
    folder_id: String
    item_id: String
    task_name: String
    task_description: String
    task_status: String
    task_assignee: String
    task_duedate: String
}

type Status {
   id: ID!
   tenant_id: String
   account_id: String
   app_id: String
   space_id: String
   folder_id: String
   item_id: String
   status_name: String
   status_background_color: String
   status_color: String
   order_index: String
}
 # The tweet text. No more than 140 characters!
type Indicator {
    id: ID!
   name: String
   period: String
}
type Query {
    domain( tenant_id: String, account_id: String, app_id: String, space_id: String, folder_id: String,  item_id: String): Domain
  }
```