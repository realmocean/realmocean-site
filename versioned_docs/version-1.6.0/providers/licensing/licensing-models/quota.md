---
id: quota
title: Quota
sidebar_label: Quota
---


-   [Overview](#Quota-Overview)
-   [License templates](#Quota-Licensetemplates)
-   [Licenses](#Quota-Licenses)
-   [Validation](#Quota-Validation)

Overview
========

**Quota** licensing model authorizes the use of a product (or an aspect of the product) within the licensed limit (quota), which is expressed as integer value. The value may represent any resource, here are some examples:

-   Number of active users
-   Number of documents
-   Storage capacity
-   Amount of allocated memory
-   Network throughput
-   Number of request per day
-   ... you name it

Quota is just a fixed number, it doesn't change from validation to validation, but will change when user acquires new licenses or licenses get activated/deactivated via AppLicensing API / Console. As a vendor, you keep control of the quota.

Reported quota is a sum of quotas of all active licenses at the time of validation. Value '-1' indicates unlimited quota. In case an active license exists with quota '-1', overall quota is also '-1', regardless of other licenses.

License templates
=================

This licensing model requires one or more license templates of type QUANTITY, each specifying a quota (via **`quantity`** property) and a purchase price. By configuring multiple license templates, one can build volume discounts, e.g. if quota is applied to the number of allowed users, you can offer:

-   10 users for 5 EUR
-   100 users for 45 EUR
-   1000 users for 400 EUR

Required additional properties specific to the QUANTITY [license templates](../object-model#license-template):

-   `Integer` **`quantity`** - specifies the quota allowed by the licenses created off this template. Positive integer, or '-1' for unlimited quota.

Licenses
========

According to the license templates, QUANTITY licenses define a quota via its **`quantity`** property.

Required additional properties specific to the QUANTITY [licenses](../object-model#license):

-   `Integer` **`quantity`** - specifies the quota allowed by the license. Positive integer, or '-1' for unlimited quota. Normally it is copied from the corresponding license template, but can be changed later for each license individually. When multiple QUANTITY licenses purchased, the total quota is the sum of **`quantity`** of all active licenses, or '-1' if any active license has **`quantity`** '-1'.

Validation
==========

On validation, this licensing model does not require any [validate parameters](../restfull-api/services/licensee-services#validate-licensee).

Validation returns following values, specific to **Quota** licensing model:

-   `Boolean` **`valid`** - **`true`** if quota is positive or '-1' (unlimited); **`false`** if total quota = 0
-   `Integer` **`quota`** - total quota, '-1' for unlimited

Validation response example:

```xml
<ns2:AppLicensing xmlns="http://www.w3.org/2000/09/xmldsig#" xmlns:ns2="http://AppLicensing.Realmocean.com/schema/context" ttl="2020-03-12T19:56:47.297Z">
  <ns2:infos/>
  <ns2:items>
    <ns2:item type="ProductModuleValidation">
      <ns2:property name="productModuleNumber">Mq-DEMO</ns2:property>
      <ns2:property name="valid">true</ns2:property>
      <ns2:property name="productModuleName">Module licensed under Quota licensing model</ns2:property>
      <ns2:property name="quota">35</ns2:property>
      <ns2:property name="licensingModel">Quota</ns2:property>
    </ns2:item>
  </ns2:items>
</ns2:AppLicensing>
```