---
id: emailService
title: Email Service
sidebar_label: Email Service
---

Organization Provider allows you to query the organization information in realm.

```tsx
export interface IOrgProvider {
    getEmployees(): Promise<IEmployee[]>;
}
```
