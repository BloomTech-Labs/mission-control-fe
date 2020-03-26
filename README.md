<center>

# Mission Control
![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-16.12.0-blue)
[![code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://github.com/prettier/prettier)
</center>

|                                          [Kevin Afable](https://github.com/KAfable)                                          |                                          [Nicholas Gebhart](http://github.com/gebhartn)                                           |                                             [Dakotah Huey](https://github.com/frescocodes)                                             |
| :--------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------: |
|      [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULJ1MK9GT-17419b760e18-512" width = "200" />](https://github.com/)       |         [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULXHMK9PY-013dd2da8dd8-512" width = "200" />](https://github.com/)         |             [<img src="https://avatars0.githubusercontent.com/u/50816478?s=400&v=4" width = "200" />](https://github.com/)             |
|                     [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/KAfable)                     |                       [<img src="https://github.com/favicon.ico" width="15"> ](http://github.com/gebhartn)                        |                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/frescocodes)                        |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kevinafable/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/nicholas-gebhart/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/dakotah-huey-76439583/) |

|                                              [Tony Kovar](https://github.com/tonyrkovar)                                              |                                     [Roy Wakumelo Jr.](https://github.com/roywakumelojr)                                      |                                  [Tommy Coleman](https://github.com/tommycoleman87)                                   |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
|           [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULXJ07DJS-d95403332534-512" width = "200" />](https://github.com/)           |       [<img src="https://ca.slack-edge.com/T4JUEB3ME-ULXALGWPR-90c177b51aa7-512" width = "200" />](https://github.com/)       |   [<img src="https://ca.slack-edge.com/T4JUEB3ME-UHXNFRBFE-b1accb251340-512" width = "200" />](https://github.com/)   |
|                        [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tonyrkovar)                        |                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/roywakumelojr)                   |              [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/tommycoleman87)              |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/tony-kovar-772295136/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/roywakumelojr) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://github.com/tommycoleman87) |




## Project Overview


Mission Control is a system that provisions, tracks, monitors and controls all of the IT resources (virtual, physical, non-physical and logical) for every product built and maintained by your organization. It allows you to keep tabs on deadlines, team members, costs, and everything you need to push your product across the finish line.

When operating at scale, it's easy to get lost in a sea of information. Mission Control provides the clarity and centralization you need to assess your team's productivity and make executive decisions. Mission Control is a one-stop-shop that allows you to get the information you need and focus on what matters most - execution.

### Key Features

- Not just for products - we also track your projects, allowing for a top-level view of your organization
- For admins - the ability to view every single product and project in your organization w/ related APIs
- For users - the ability to see the projects that they themselves are attached to, allowing for a seamless and lightweight environment
- Simple user promotion - admins can promote and demote other users in a snap
- Sync with your data - simply sign up with your work email address, and your data will sync automatically with your database

## Tech Stack

### Front end built using:

#### React

- React is a fantastic choice for building dynamic, interactive UIs. Mission Control is a complex website with a nested component structure, and has demanding relationships with multiple APIs. React allows us to meet the platform's needs efficiently, and helps keep everything organized behind the scenes.

#### urql

- urql is a lightweight, powerful, and easy to use alternative to bulky GraphQL clients. urql helps you to rapidly use GraphQL in your apps without complex configuration or large API overhead. urql's API is intuitive to use, with full support for GraphQL Queries, Mutations and Subscriptions.

#### Sass/SCSS

- Nested CSS is a must when styling your application. SCSS not only allows us as developers to write CSS quickly, but also creates an intuitive flow for later revisions. Add in variables, mixins, and functions, and CSS (arguably) is elevated to a production level.

#### React Router

- Single page applications have special needs, particularly when it comes to routing the user from page-to-page. React router allows for the easy transport of the site's users whilst retaining SPA functionality. And with the new React Router hooks, we can do all of this inside of the functional programming paradigm.

#### OKTA

- OKTA provides cloud software that helps us manage and secure user authentication into modern applications, and for developers to build identity controls into applications, website web services and devices.


# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_ROLE_KEY - this is the encryption key for the user's role (determines what dashboard they have access to). Choose a secure key (can be anything you want), and set up as a variable in your local application. The production key can be found in the AWS Amplify application
    *  REACT_APP_MISSION_CONTROL_ENDPOINT - can be found in the AWS Amplify application. This is the authentication API

# Installation Instructions

Clone this repo into your local, and run `yarn` to install your dependencies.

## Other Scripts

    * build - `yarn build`
    * start - `yarn start`
    * test - `yarn test`

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/mission-control-be) for details on the backend of our project.


## Contributors
