# Shoppa (Server)

Always over budget when shopping? Want to keep organized what you gotta buy? `Shoppa` is there for you! This is server for `Shoppa Web Application`. In the future, we might add feature for sync for mobile application.

> P.S.: <br />
> - This web application is still experimental, but you can use this as daily driver<br />
> - Please don't use it for commercial use without my permission. I made this with love, don't break my heart 😢

## Feature

You can make an user account for make a list and write in it what you gonna buy. Why must make an user account? Because every person has different shopping list.

## End Points

This web application have 3 models. You can see the details in documentations down here.

### User
For the detail, visit this User API Documentation
| Route                  | Method      | Description                            | Authorization   |
| ---------------------- | ----------- | -------------------------------------- | --------------- |
| `/user/register`       | POST        | Register for User                      | Everyone        |
| `/user/login`          | POST        | Login for User                         | Everyone        |
| `/user/getselfinfo`    | GET         | Get Information for your account       | User            |
| `/user/:userinfo`      | GET         | Get Information for someone account    | Everyone        |
| `/user/updateselfinfo` | PUT         | Update Information for your account    | User            |
| `/user/deleteself`     | DELETE      | Delete your account                    | User            |

### UserList
For the detail, visit this UserList API Documentation
| Route                  | Method      | Description                            | Authorization   |
| ---------------------- | ----------- | -------------------------------------- | --------------- |
| `/userlist/`           | POST        | Create a List                          | User            |
| `/userlist/`           | GET         | Get all Lists                          | User            |
| `/userlist/:userlistid`| GET         | Get one List                           | User            |
| `/userlist/:userlistid`| PUT         | Update a List                          | User            |
| `/userlist/:userlistid`| DELETE      | Delete a List                          | User            |

### List
For the detail, visit this List API Documentation
| Route                         | Method      | Description                            | Authorization   |
| ----------------------------- | ----------- | -------------------------------------- | --------------- |
| `/userlist/:ULID/list`        | POST        | Write an Item                          | User            |
| `/userlist/:ULID/list`        | GET         | Get all Items                          | User            |
| `/userlist/:ULID/list/:listid`| GET         | Get one Item                           | User            |
| `/userlist/:ULID/list/:listid`| PUT         | Update a Item                          | User            |
| `/userlist/:ULID/list/:listid`| PATCH       | Mark an Item as Done                   | User            |
| `/userlist/:ULID/list/:listid`| DELETE      | Delete an Item                         | User            |

## Getting started
Before you start, make sure to make `.env` file on root project dir, and `NodeJS` already installed on your machine.

## Executing
After you clone this repo, make sure to create the database and migrate everything on migrations, and then run it with `$ npm run dev` command.

## Any Question?
Feel free to ask me.
