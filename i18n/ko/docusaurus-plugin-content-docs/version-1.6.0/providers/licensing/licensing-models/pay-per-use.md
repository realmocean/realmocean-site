---
id: pay-per-use
title: Pay-per-Use
sidebar_label: Pay-per-Use
---


-   [Overview](#overview)
-   [License Templates](#license-templates)
-   [Licenses](#licenses)
-   [Validation](#validation)
    -   [Post-payment mode](#post-payment-mode)
    -   [Pre-payment mode](#pre-payment-mode)

Overview
========

**Pay-per-Use** licensing model counts the use of credits associated with licenses. User buys one or more licenses for a certain total amount of credits, credits are written off according to the reported use. At any time user can get more credits by buying additional licenses.

The credits may be tied to a various metrics such as CPU load, network bandwidth utilization, or anything else related to the nature of your application.

The billing is accordingly tied to the chosen model, which can be for instance:

-   Time based: billing on the duration of use
-   Count based: billing on the number of uses
-   Volume based: billing on the amount of resource use

In either case, AppLicensing keeps track of credits by a simple integer counters, stored in **`quantity`** and **`usedQuantity`** properties of each license. You decide what actual metric to associate with the credits.

For better adapting to various scenarios, Pay-per-Use supports two modes of operation: *pre-payment* and *post-payment*. The mode is decided by arguments passed to the validate call, see the validation section below for details.

License Templates
=================

To use this licensing model you must define one or more license templates of type QUANTITY, each specifying the credits amount (via **`quantity`** property) and a purchase price. Multiple license templates allow to configure discounts, e.g.:

-   10 credits for 5 EUR
-   100 credits for 45 EUR
-   1000 credits for 400 EUR

Additional properties specific to the QUANTITY [license templates](../object-model#license-template):

-   `Integer` **`quantity`** (required) - specifies credits amount, which is assigned by default to the licenses created off this template.

Licenses
========

Additional properties specific to the QUANTITY [licenses](../object-model#license):

-   `Integer` **`quantity`** (required) - specifies the credits amount, provided by this license. Normally it is copied from the corresponding property of the license template, but can be changed later for each license individually. When multiple QUANTITY licenses purchased, the total amount of credits is the sum of **`quantity`** of all active licenses.
-   `Integer` **`usedQuantity`** (optional) - specifies the amount of used credits. When not present, it is equivalent to **`usedQuantity`**=0. This property is updated automatically according to the parameters passed to the validate call (see below). **`usedQuantity`** equal to **`quantity`** means all credits of this license are used up.

Validation
==========

On validation, this licensing model uses the following [validate parameters](../restfull-api/services/licensee-services#validate-licensee):

-   **`productModuleNumber`**=\<String\> - specifies the product module, that uses Pay-per-Use licensing model
-   **`usedQuantity`**=\<non-negative Integer\> - specifies how many credits has been used by the application since previous validate call (*post-payment* mode). In case more credits were used than the remaining credits, remaining credits get negative.
-   **`reserveQuantity`**=\<non-negative Integer\> - specifies the credits amount that the application attempts to reserve for use until next validate call (*pre-payment* mode). It is not possible to reserve more than the remaining credits.

**`usedQuantity`** and **`reserveQuantity`** parameters are mutually exclusive - use only one of them depending on the mode you need. If both **`usedQuantity`** and **`reserveQuantity`** parameters to validate are omitted, it is equivalent to **`usedQuantity`**=0.
However, if you need to call validate just for reading-out the remaining credits, it is suggested to pass **`usedQuantity`**=0 explicitly. This helps better traceability of the call by explicit declaration of intent.

Validation returns values:

-   `Boolean` **`valid`** - **`true`** if the sum of **`quantity`** of all active licenses (given credits) is bigger than the sum of **`usedQuantity`** of these licenses (used credits).
-   `Integer` **`remainingQuantity`** - the amount of credits still available for use. It is the difference between the sum of **`quantity`** and the sum of **`usedQuantity`** of all active licenses.

Post-payment mode
-----------------

This mode is activated by passing **`usedQuantity`** validate parameter. Provided value is written off from the remaining credits. **`valid`**=**`true`** in the response indicates that some credits still remain after writing off passed value. The application should take care that the **`remainingQuantity`** returned by the previous validate call is not exceeded, however in this mode overdraft is allowed, in which case **`remainingQuantity`** in the response will get negative.
When all remaining credits are used up (validate has returned **`valid`**=**`false`**), the application would normally direct the user to the appropriate step for getting more credits, or disable corresponding functionality.

Validation response examples:

<span class="expand-control-icon"><img src="assets/images/icons/grey_arrow_down.png" class="expand-control-image" /></span><span class="expand-control-text">Some credits still remain</span>


```http
POST https://go.AppLicensing.io/core/v2/rest/licensee/ITEST-DEMO/validate
Accept: application/xml
Content-Type: application/x-www-form-urlencoded

productModuleNumber0=MTEST-DEMO&usedQuantity0=10
```

```xml
<AppLicensing xmlns="http://AppLicensing.Realmocean.com/schema/context" ttl="2020-05-21T07:28:48.646Z">
    <infos/>
    <items>
        <item type="ProductModuleValidation">
            <property name="productModuleNumber">MTEST-DEMO</property>
            <property name="valid">true</property>
            <property name="remainingQuantity">25</property>
            <property name="productModuleName">Module licensed under Pay-per-Use licensing model</property>
            <property name="licensingModel">PayPerUse</property>
        </item>
    </items>
</AppLicensing>
```


<span class="expand-control-icon"><img src="assets/images/icons/grey_arrow_down.png" class="expand-control-image" /></span><span class="expand-control-text">All remaining credits are used up by this validate call</span>

```http
POST https://go.AppLicensing.io/core/v2/rest/licensee/ITEST-DEMO/validate
Accept: application/xml
Content-Type: application/x-www-form-urlencoded

productModuleNumber0=MTEST-DEMO&usedQuantity0=25
```

```xml
 <AppLicensing xmlns="http://AppLicensing.Realmocean.com/schema/context" ttl="2020-05-21T07:30:28.246Z">
    <infos/>
    <items>
        <item type="ProductModuleValidation">
            <property name="productModuleNumber">MTEST-DEMO</property>
            <property name="valid">false</property>
            <property name="remainingQuantity">0</property>
            <property name="productModuleName">Module licensed under Pay-per-Use licensing model</property>
            <property name="licensingModel">PayPerUse</property>
        </item>
    </items>
</AppLicensing>
```


<span class="expand-control-icon"><img src="assets/images/icons/grey_arrow_down.png" class="expand-control-image" /></span><span class="expand-control-text">Attempt to use more than the remaining credits</span>


```http
POST https://go.AppLicensing.io/core/v2/rest/licensee/ITEST-DEMO/validate
Accept: application/xml
Content-Type: application/x-www-form-urlencoded

productModuleNumber0=MTEST-DEMO&usedQuantity0=30
```

```xml
<AppLicensing xmlns="http://AppLicensing.Realmocean.com/schema/context" ttl="2020-05-21T07:30:28.246Z">
    <infos>
        <info id="usedQuantityExceedsRemaining" type="warning">
            usedQuantity exceeds remaining quantity - use of more than remaining quantity returned by the validation call should be prevented by the client software
        </info>
    </infos>
    <items>
        <item type="ProductModuleValidation">
            <property name="productModuleNumber">MTEST-DEMO</property>
            <property name="valid">false</property>
            <property name="remainingQuantity">-5</property>
            <property name="productModuleName">Module licensed under Pay-per-Use licensing model</property>
            <property name="licensingModel">PayPerUse</property>
        </item>
    </items>
</AppLicensing>
```

Pre-payment mode
----------------

This mode is activated by passing **`reserveQuantity`** validate parameter. If provided value is less than or equal to the remaining credits, it is written off from the remaining credits, and **`valid`**=**`true`** returned in the response. In case provided value exceeds remaining credits, remaining credits stay unchanged, and **`valid`**=**`false`** returned in the response.

Validation response examples:

<span class="expand-control-icon"><img src="assets/images/icons/grey_arrow_down.png" class="expand-control-image" /></span><span class="expand-control-text">Enough credits available</span>


```http
POST https://go.AppLicensing.io/core/v2/rest/licensee/ITEST-DEMO/validate
Accept: application/xml
Content-Type: application/x-www-form-urlencoded

productModuleNumber0=MTEST-DEMO&reserveQuantity0=10
```

```xml
<AppLicensing xmlns="http://AppLicensing.Realmocean.com/schema/context" ttl="2020-05-21T07:28:48.646Z">
    <infos/>
    <items>
        <item type="ProductModuleValidation">
            <property name="productModuleNumber">MTEST-DEMO</property>
            <property name="valid">true</property>
            <property name="remainingQuantity">5</property>
            <property name="productModuleName">Module licensed under Pay-per-Use licensing model</property>
            <property name="licensingModel">PayPerUse</property>
        </item>
    </items>
</AppLicensing>
```
{: .ml-5 }

<span class="expand-control-icon"><img src="assets/images/icons/grey_arrow_down.png" class="expand-control-image" /></span><span class="expand-control-text">Enough remaining credits available, all are used up by this validate call</span>


```http
POST https://go.AppLicensing.io/core/v2/rest/licensee/ITEST-DEMO/validate
Accept: application/xml
Content-Type: application/x-www-form-urlencoded

productModuleNumber0=MTEST-DEMO&reserveQuantity0=15
```


```xml
 <AppLicensing xmlns="http://AppLicensing.Realmocean.com/schema/context" ttl="2020-05-21T07:30:28.246Z">
    <infos/>
    <items>
        <item type="ProductModuleValidation">
            <property name="productModuleNumber">MTEST-DEMO</property>
            <property name="valid">true</property>
            <property name="remainingQuantity">0</property>
            <property name="productModuleName">Module licensed under Pay-per-Use licensing model</property>
            <property name="licensingModel">PayPerUse</property>
        </item>
    </items>
</AppLicensing>
```


<span class="expand-control-icon"><img src="assets/images/icons/grey_arrow_down.png" class="expand-control-image" /></span><span class="expand-control-text">Attempt to reserve more than the remaining credits</span>


```http
POST https://go.AppLicensing.io/core/v2/rest/licensee/ITEST-DEMO/validate
Accept: application/xml
Content-Type: application/x-www-form-urlencoded

productModuleNumber0=MTEST-DEMO&reserveQuantity0=20
```

```xml
<AppLicensing xmlns="http://AppLicensing.Realmocean.com/schema/context" ttl="2020-05-21T07:30:28.246Z">
    <items>
        <item type="ProductModuleValidation">
            <property name="productModuleNumber">MTEST-DEMO</property>
            <property name="valid">false</property>
            <property name="remainingQuantity">15</property>
            <property name="productModuleName">Module licensed under Pay-per-Use licensing model</property>
            <property name="licensingModel">PayPerUse</property>
        </item>
    </items>
</AppLicensing>
```
