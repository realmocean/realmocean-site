---
id: customerProvider
title: Customer Provider
sidebar_label: Customer Provider
---

Organization Provider allows you to query the organization information in realm.

```tsx
export interface IOrgProvider {
    getEmployees(): Promise<IEmployee[]>;
}
```
