---
id: orgProvider
title: Organization Provider
sidebar_label: Organization Provider
---

Organization Provider allows you to query the organization information in realm.

```tsx
export interface IOrgProvider {
    getEmployees(): Promise<IEmployee[]>;
}
```
