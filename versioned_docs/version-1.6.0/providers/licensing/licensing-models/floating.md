---
id: floating
title: Floating
sidebar_label: Floating
---

-   [Overview](#overview)
-   [License templates](#license-templates)
-   [Licenses](#licenses)
-   [Validation](#validation)

## Overview


**Floating** licensing model authorizes the use of an application with the given number of sessions (users, hosts, etc.). The number of concurrent sessions is tracked, and the total number of running sessions of the licensed application at any time is limited by the maximum allowed sessions in the floating licenses purchased by the licensee.

Session is acquired by checkout operation and returned back to the pool by subsequent checkin. Maximum checkout validity time is limited by the product module parameter:

-   `Integer` **`maxCheckoutValidity`** - floating license maximum checkout validity, in seconds ("Maximum checkout validity" in <a href="http://l64.cc/nlUI" class="external-link">AppLicensing Management Console</a> / product module edit form)

Validity can be extended as long as needed by subsequent checkouts before the expiration time.

## License templates


This licensing model requires one or more license templates of type FLOATING, each specifying a number of sessions and a purchase price. By configuring multiple license templates, one can build volume discounts, e.g.:

-   10 sessions for 5 EUR
-   100 sessions for 45 EUR
-   1000 sessions for 400 EUR

Required additional properties specific to the FLOATING [license templates](../object-model#license-template):

-   `Integer` **`maxSessions`** - specifies the maximum number of sessions allowed concurrently per license.

## Licenses


Required additional properties specific to the FLOATING [licenses](../object-model#license):

-   `Integer` **`maxSessions`** - specifies the maximum number of sessions allowed concurrently per license. Normally it is copied from the corresponding license template, but can be changed later for each license individually. When multiple FLOATING licenses purchased, the total number of concurrently allowed sessions is the sum of **`maxSessions`** of all active licenses.

Besides, every session that is checked out is listed as

-   [`Timestamp`] **`sessionId_<sessionId>`** custom property. Session can be forcibly checked in on demand by removing the corresponding **`sessionId_<sessionId>`** property.

## Validation


### Validation parameters:

On validation, this licensing model requires the following [validate parameters]:

-   **`productModuleNumberN=<productModuleNumber>`**
-   **`sessionIdN=<sessionId>`** `<sessionId>` is any string that identifies the session uniquely. It is similar to the [licenseeNumber], but for the session.
-   **`actionN=<action>`** `<action>` is one of:
    -   **`checkOut`** - check out a session and assign it an identifier `<sessionId>`. If session with given identifier already checked out, its validity extended.
    -   **`checkIn`** - check in session with identifier `<sessionId>`, returning it to the pool of available sessions.

### Validation returns values:

-   `Boolean` **`valid`** - **`true`** if action is **`checkOut`** and operation succeeds, hence the product use is allowed. **`false`** on not successful checkout or when action is **`checkIn`**.
-   [`Timestamp`] **`expirationTimestamp`** - on successful checkout, provides the point in time until checkout is valid.

### Validation response examples:

```http
POST https://go.AppLicensing.io/core/v2/rest/licensee/I011/validate
Accept: application/xml
Content-Type: application/x-www-form-urlencoded

productModuleNumber0=Floating-DEMO&sessionId0=SampleSessionId&action0=checkOut
```



```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <infos/>
    <items>
        <item type="ProductModuleValidation">
            <property name="productModuleNumber">Floating-DEMO</property>
            <property name="valid">true</property>
            <property name="licensingModel">Floating</property>
            <property name="expirationTimestamp">2020-05-04T16:03:30.032Z</property>
            <property name="productModuleName">Floating LM demo module</property>
        </item>
    </items>

```

-   **checkIn:**

```http
POST https://go.AppLicensing.io/core/v2/rest/licensee/I011/validate
Accept: application/xml
Content-Type: application/x-www-form-urlencoded

productModuleNumber0=Floating-DEMO&sessionId0=SampleSessionId&action0=checkIn
```


```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>

    <infos/>
    <items>
        <item type="ProductModuleValidation">
            <property name="productModuleNumber">Floating-DEMO</property>
            <property name="valid">false</property>
            <property name="licensingModel">Floating</property>
            <property name="productModuleName">Floating LM demo module</property>
        </item>
    </items>

```
