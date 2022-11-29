---
id: orgProvider
title: Organization Provider
sidebar_label: Organization Provider
---

Organization Provider allows you to query the organization information in realm.

```tsx
export interface IOrgProvider {
    getEmployees(): Promise<IEmployee[]>;
    getTitles(): Promise<IEmployeeTitle[]>;
    createPosition(recordId: string, name: string, parentId: string): Promise<string>;
    updatePosition(id: string,recordId: string, name: string, parentId: string): Promise<boolean>;
    getPositions(page:int, perPage:int):Promise<IPosition[]>;
}
```

[IPosition](./organizationService/models/IPosition)