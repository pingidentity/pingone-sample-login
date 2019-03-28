# PingOne for Customers Sample Login
Provides an example login application for use with PingOne for Customers.  This sample application is written in HTML and JavaScript and leverages JQuery, Bootstrap and js-cookie

## Quick Start

* Create a PingOne for Customers Application and Sample User
* Update js/auth.js with your tenant's variables
* Publish the contents of dist/* to your web server root

## Contents

* dist/index.html         - Landing page for anonymous or authenticated users
* dist/js/auth.js         - Shared JavaScript with configuratioin for your P14C tenant
* dist/login/index.html   - Sample login application
* dist/logout/index.html  - Logout mechanism
* dist/css/stylesheet.css - Shares stylesheet

## Getting Started

### Prerequisites
You will need your own PingOne for Customers tenant.  You can [sign up for a trial](https://developer.pingidentity.com/).

### Register your Application Connection
Once you have your own tenant, use the PingOne for Customers Admin Console to add an application connection. To create the application connection:

1. Click **Connections**.
2. Click + **Application**.
3. Select the **Single Page App** type.
4. Click **Configure**.
5. Create the application profile by entering the following information:
* **Application name**: pingone-customers-sample-login or other name
6. Click **Next**.
7. **Redirect URI**: The URL where dist/login/ will live.  For example, https://www.example.com/login/
8. Click **Save and Continue**
9. Add the following scopes: **address**, **email**, **phone** and **profile**
10. Click **Save and Close**

The Applications page shows the new application.  Click the toggle switch to enable the application.  View the details of your application and make note of its **Client ID**.

11. On the Profile Tab of your new application, populate **SignOn URL** with the location that dist/login/ will live.  For example, https://www.example.com/login/
12. Click **Save and Close**

### Get your Environment ID
To get your **Environment ID**, in the Admin Console, click Settings, then Environment, then Properties. The Properties page shows the environment ID.

### Create Test User
To create your test user:

1. Click **Users**.
2. Click + **Add User**.
3. At a minimum, specify a **username** such as michael@example.com.
4. Click **Save**
5. View your new user and select **Reset Password**
6. Specify an initial password, such as **4Science**.
7. Click **Save**
8. Navigate to the **API** tab of your new user
9. Click **View JSON**

```javascript
{
  "_embedded": {},
  "username": "suzanne@example.com",
  "population": {
    "_links": {
      "self": {
        "href": "https://api.pingone.com/v1/environments/47ccf5bf-700c-4933-acd5/populations/9c07631a-261d-4205-8f91"
      }
    },
    "id": "9c07631a-261d-4205-8f91",
    "name": "Default",
    "userCount": 1,
    "createdAt": "2019-03-27T14:34:41.154Z",
    "updatedAt": "2019-03-27T14:34:41.154Z"
  }
}
```

10. Make note of your **Population ID** (9c07631a-261d-4205-8f91 in the example above).

### Clone this Repository
```
git clone https://github.com/pingidentity/pingone-customers-sample-login
```

