---
id: objectmodel
title: AppLicensing Object Model
sidebar_label: Object Model
---
AppLicensing Object Model
=========================

-   [Vendor](#vendor)
-   [Product](#product)
-   [Product Module](#product-module)
-   [License Template](#license-template)
-   [Licensing Model](#licensing-model)
-   [License](#license)
-   [Licensee](#licensee)
-   [Transaction](#transaction)

Vendor
------

Vendor is a licensor that uses AppLicensing service for managing the
licenses for his products. Vendor registers with AppLicensing by opening
an account. Vendor configures his products and desired licenses within
the AppLicensing service via
<a href="https://ui.AppLicensing.io" class="external-link">AppLicensing Management Console</a>.
Besides, vendor has to integrate AppLicensing service into his products
by means of AppLicensing API.

Product
-------

Product of the vendor within AppLicensing. Usually it corresponds to an
actual product of the vendor, but variations possible - in some cases it
may be feasible to configure two or more separate products within
AppLicensing for a single actual product of the vendor. Licensing rules
are defined for each product individually, products are completely
independent of each other in terms of license management.

Product Module
--------------

Product may comprise of multiple modules, but must have at least one.
Each module is licensed using one of the [Licensing
Models](licensing-models) offered by AppLicensing service.
Licensing within a module is independent of other modules, however all
modules belonging to a product are visible to every licensee of the
product.

License Template
----------------

License template is a configuration element that is bound to a module.
License templates define concrete items available for obtaining by a
licensee, specifying what is an item, its price, amount (if applicable),
etc. Actual licenses created off these templates are then given to
licensees.

[Licensing Model](licensing-models)
-------------------------------------------------

Licensing model is a set of rules and algorithms that define how to
process the licenses obtained by a licensee. A number of licensing
models is supported by AppLicensing service, refer to the [licensing
models documentation](licensing-models) for details.

License
-------

Licenses are cloned off the corresponding templates when a licensee
obtain them. Licenses always belong to a certain licensee. Collection of
all licenses that belong to a licensee are processed by a licensing
model(s) on validation request (sent via AppLicensing API), and the
validation result is then sent back for further processing on the
vendor/end user side.

Licensee
---------

Licensee is usually an end customer, capable of obtaining licenses for
the product. From the vendor perspective a licensee may correspond to a
physical instance of the product, customer account within a vendor's
service, or it can be an USB dongle given to a product user. In
practice, a licensee must only have a unique identifier associated with
it, that is communicated to AppLicensing for performing operations
related to this licensee. Licensee doesn't need to have an own account
within AppLicensing. There are two main operations performed for
licensee: validation and obtaining new licenses. Validation process is
typically completely transparent to the licensee and performed from the
product by means of AppLicensing API. Licensee can be offered to obtain
new licenses for the product by redirecting him to the [AppLicensing Shop](AppLicensing-shop)
in web browser.

Transaction
--------------------------------------------------------------------------------------------------------------------------------------------

Transaction is created each time a new bunch of licenses is obtained by
a licensee. It can be either a direct purchase by a licensee via
[AppLicensing Shop](AppLicensing-shop), licenses can be given to a licensee by a vendor, or
assigned implicitly by AppLicensing if it is defined so by some license
model (e.g. evaluation license may be given automatically). All these
events are reflected in transactions.