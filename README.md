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
| `/user/updateselfinfo` | UPDATE      | Update Information for your account    | User            |
| `/user/deleteself`     | DELETE      | Delete your account                    | User            |

### UserList
For the detail, visit this UserList API Documentation
| Route                  | Method      | Description                            | Authorization   |
| ---------------------- | ----------- | -------------------------------------- | --------------- |
| `/userlist/`           | POST        | Create a List                          | User            |
| `/userlist/`           | GET         | Get all List                           | User            |
| `/userlist/:userlistid`| GET         | Get one List                           | User            |
| `/userlist/:userlistid`| UPDATE      | Update a List                          | User            |
| `/userlist/:userlistid`| DELETE      | Delete a List                          | User            |


