# PingOne for Customers Sample Login
Provides an example login application for use with PingOne for Customers.  This sample application is written in HTML and JavaScript and leverages JQuery, Bootstrap and js-cookie

## Contents

* dist/index.html         - Landing page for anonymous or authenticated users
* dist/js/auth.js         - Shared JavaScript with configuratioin for your P14C tenant
* dist/login/index.html   - Sample login application
* dist/logout/index.html  - Logout mechanism
* dist/css/stylesheet.css - Shares stylesheet

## Prerequisites
You will need your own PingOne for Customers tenant.  You can [sign up for a trial](https://developer.pingidentity.com/).

## Getting Started

### Register your Application Connection
Once you have your own tenant, use the PingOne for Customers Admin Console to add an application connection. To create the application connection:

1. Click **Connections**.
2. Click + **Application**.
3. Select the **Single Page App** type.
4. Click **Configure**.
5. Create the application profile by entering the following information:
* **Application name**. A unique identifier for the application.
* **Description** (optional). A brief characterization of the application.
* **Icon** (optional). A pictorial representation of the application. Use a file up to 1MB in JPG, JPEG, GIF, or PNG format.
6. Click Save and Close.

The Applications page shows the new application and its **Client ID** (under the application name). Click the Application’s details icon to show the details view. Click the toggle switch to enable the application.

You will also need your **Environment ID**.  To get your Environment ID, in the Admin Console, click Settings, then Environment, then Properties. The Properties page shows the environment ID.

### Clone this Repository
```
git clone https://github.com/pingidentity/pingone-customers-sample-login
```

