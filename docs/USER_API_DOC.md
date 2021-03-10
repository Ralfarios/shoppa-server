# Shoppa (Server) User API Documentation
For make you easier to develop this web application server, we list all of User endpoints and response.

| Route                  | Method      | Description                            | Authorization   |
| ---------------------- | ----------- | -------------------------------------- | --------------- |
| `/user/register`       | POST        | Register for User                      | Everyone        |
| `/user/login`          | POST        | Login for User                         | Everyone        |
| `/user/getselfinfo`    | GET         | Get Information for your account       | User            |
| `/user/:userinfo`      | GET         | Get Information for someone account    | Everyone        |
| `/user/updateselfinfo` | PUT         | Update Information for your account    | User            |
| `/user/deleteself`     | DELETE      | Delete your account                    | User            |
<br />

## Detailed Responses
<hr />

### POST /user/register
_Request Header_
```
Unneeded
```

_Request Body_
```json
{
  "email": "your email: string",
  "password": "your password: string",
  "firstname": "your first name: string",
  "lastname": "your last name: string: optional",
  "profpic": "your profile picture url: string: optional",
  "currency": "your preferred local currency: string: optional",
  "locales": "your preferred local country: string: optional"
}
```
_Response (201)_
```json
{
  "UID": "User Unique ID: string",
  "email": "your email: string",
  "firstname": "your first name: string",
  "lastname": "your last name: string"
}
```

_Response (400)_
```json
{
  "name": "SequelizeValidationError"
}
```

_Response (409)_
```json
{
  "name": "SequelizeUniqueConstraintError"
}
```

_Response (500)_
```json
{
  "name": "Internal server error"
}
```

<hr />

### POST /user/login
_Request Header_
```
Unneeded
```

_Request Body_
```json
{
  "email / username": "your email / username: string",
  "password": "your password: string",
}
```

_Response (200)_
```json
{
  "access_token": "your access token: string"
}
```

_Response (401)_
```json
{
  "name": "invalidLogin"
}
```

_Response (500)_
```json
{
  "name": "Internal server error"
}
```

<hr />

### GET /user/getselfinfo
_Request Header_
```json
{
  "access_token": "your access token: string"
}
```

_Request Body_
```
Unneeded
```

_Response (200)_
```json
{
  "UID": "User Unique ID: string",
  "email": "your email: string",
  "username": "your username: string",
  "firstname": "your first name: string",
  "lastname": "your last name: string",
  "profpic": "your profile picture url: string",
  "currency": "your preferred local currency: string",
  "locales": "your preferred local country: string"
}
```

_Response (401)_
```json
{
  "name": "JSON Web Token must be provided"
}
```

_Response (500)_
```json
{
  "name": "Internal server error"
}
```

<hr />

### GET /user/:userinfo
_Request Header_
```json
{
  "access_token": "your access token: string"
}
```

_Request Parameter_
```json
{
  "userinfo": "User Unique ID: string"
}
```

_Response (200)_
```json
{
  "UID": "User Unique ID: string",
  "email": "your email: string",
  "username": "your username: string",
  "firstname": "your first name: string",
  "lastname": "your last name: string",
  "profpic": "your profile picture url: string",
  "currency": "your preferred local currency: string",
  "locales": "your preferred local country: string"
}
```

_Response (401)_
```json
{
  "name": "JSON Web Token must be provided"
}
```

_Response (404)_
```json
{
  "name": "userNotFound"
}
```

_Response (500)_
```json
{
  "name": "Internal server error"
}
```

### PUT /user/updateselfinfo
_Request Header_
```json
{
  "access_token": "your access token: string"
}
```

_Request Body_
```
Unneeded
```

_Response (200)_
```json
{
  "access_token": "your new access token: string"
}
```

_Response (400)_
```json
{
  "name": "SequelizeValidationError"
}
```

_Response (401)_
```json
{
  "name": "JSON Web Token must be provided"
}
```

_Response (409)_
```json
{
  "name": "SequelizeUniqueConstraintError"
}
```

_Response (500)_
```json
{
  "name": "Internal server error"
}
```

### DELETE /user/updateselfinfo
_Request Header_
```json
{
  "access_token": "your access token: string"
}
```

_Request Body_
```json
  {
    "password": "your password: string"
  }
```

_Response (200)_
```json
{
  "name": "accDeleted"
}
```

_Response (400)_
```json
{
  "name": "wrongPass"
}
```

_Response (401)_
```json
{
  "name": "JSON Web Token must be provided"
}
```

_Response (500)_
```json
{
  "name": "Internal server error"
}
```
