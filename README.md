# PingOne for Customers Sample Login
Provides an example login application for use with PingOne for Customers.  Included user dialogs:

* Username and Password
* Passwordless
* One Time Passcodes
* Mobile Push Notifications
* Expired Password Changes
* External Identity Providers
* Account Linking
* Custom Domains

This sample application is written in HTML and JavaScript and leverages JQuery, Bootstrap and js-cookie.  It leverages the PingOne for Customers Flow APIs (https://apidocs.pingidentity.com/pingone/platform/v1/api/#flows-1).

## Custom Domains

PingOne optionally supports the mapping of customer-owned and controlled domain names that are used to access user interfaces and services.  More information is available in Ping's documentation portal  (https://apidocs.pingidentity.com/pingone/platform/v1/api/#custom-domains)

## Quick Start

* Create a PingOne for Customers Application and Sample User
* Update js/auth.js with your tenant's variables
* Publish the contents of /dist to the DocumentRoot of your web server

## Contents

* dist/index.html         - Landing page for anonymous or authenticated users
* dist/js/auth.js         - Shared JavaScript with configuration for your P14C tenant
* dist/login/index.html   - Sample login application with different user interactions
* dist/logout/index.html  - Logout mechanism

## Getting Started

### Prerequisites

You will need your own PingOne for Customers tenant.  You can [sign up for a trial](https://www.pingidentity.com/en/try-ping.html).

### Register your Application Connection

Once you have your own tenant, use the PingOne for Customers Admin Console to add an application connection. To create the application connection:

1. Click **Connections**.
2. Click + **Application**.
3. Create the application profile by entering the following information:
* **Application name**: pingone-customers-sample-login or other name
* Select the **Single Page App** type.
5. Click **Save**.
6. Click **Configuration** at the top of the app settings.
7. Click on the pencil to edit the configurations for the app.
8. Add a **Redirect URI**: The URL where dist/login/ will live.  For example, https://www.example.com/login/
9. Click **Save and Continue**
10. Click **Resources** at the top of the app settings.
11. Click on the pencil to edit the resources for the app.
12. At a minimum, add the following scope: **profile**
13. Click **Save**
14. Click on the slider icon at the top right of the application to enable the app.

The Applications page shows the new application.  Click the toggle switch to enable the application.  View the details of your application and make note of its **Client ID**.

11. **Edit** the Application (click the pencil icon)
12. On the Profile Tab of your new application, populate **SignOn URL** with the location that dist/login/ will live.  For example, https://www.example.com/login/
13. On the Configuration Tab of your new application, populate **SignOff URLs** with the location that dist/logout/ will live.  For example, https://www.example.com/logout/
14. Click **Save**

### Get your Environment ID

To get your **Environment ID**, in the Admin Console, click Settings, then Environment, then Properties. The Properties page shows the environment ID.

### Create Test User

To create your test user:

1. Click **Users**.
2. Click + **Add User**.
3. At a minimum, specify a **username** such as michael@example.com and a **population**.
4. Click **Save**
5. View your new user and select **Reset Password**
6. Specify an initial password, such as **4Science**.
7. Click **Save**

### Clone this Repository

```
git clone https://github.com/pingidentity/pingone-customers-sample-login
```

Publish the contents of /dist to the DocumentRoot of your web server.  A URL similar to https://www.example.com/ is preferred to https://www.example.com/dist/

### Edit js/auth.js

Edit js/auth.js with your tenant's variables (clientId and environmentId)
