# Mission Control

You can find the deployed project at https://use-mission-control.com.

## Contributors


|                                       Dan Bergelt (https://github.com/danbergelt)                                        |                                       Alex Gordon (https://github.com/agordon1123)                                        |                                       Jose Restrepo (https://github.com/Artyk77)                                        |                                       Zach Overhulser (https://github.com/zoverlvx)                                        |                                       Armando Roman (https://github.com/armandoroman1016)                                        |
| :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------: |
|                      [<img src="https://avatars1.githubusercontent.com/u/50968952?s=460&v=4" width = "200" />](https://avatars1.githubusercontent.com/u/50968952?s=460&v=4)                       |                      [<img src="https://avatars1.githubusercontent.com/u/48846394?s=400&v=4" width = "200" />](https://avatars1.githubusercontent.com/u/48846394?s=400&v=4)                       |                      [<img src="https://avatars2.githubusercontent.com/u/48263350?s=400&v=4" width = "200" />](https://avatars2.githubusercontent.com/u/48263350?s=400&v=4)                       |                      [<img src="https://avatars1.githubusercontent.com/u/19368091?s=400&v=4" width = "200" />](https://avatars1.githubusercontent.com/u/19368091?s=400&v=4)                       |                      [<img src="https://avatars3.githubusercontent.com/u/51098659?s=400&v=4" width = "200" />](https://avatars3.githubusercontent.com/u/51098659?s=400&v=4)                       |
|                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/danbergelt)                 |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/agordon1123)             |           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Artyk77)            |          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/zoverlvx)           |            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/armandoroman1016)             |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/danbergelt/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/agordon1123) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/arturorestrep0/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/zoverlvx/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/armando-roman-64a53a188/) |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Project Overview

[Trello Board](https://trello.com/b/qIsV0OQN/labs17-mission-control)

[Product Canvas](https://www.notion.so/Mission-Control-3d160a20e5374bccaec96576398d54ba)

[UX Design files](https://www.figma.com/file/7ULC015ThVU7TmGqYU3WBn/Mission-Control-Lambda-Dashboard?node-id=0%3A1)

Mission Control is a system that provisions, tracks, monitors and controls all of the IT resources (virtual, physical, non-physical and logical) for every product built and maintained by your organization. It allows you to keep tabs on deadlines, team members, costs, and everything you need to push your product across the finish line.

When operating at scale, it's easy to get lost in a sea of information. Mission Control provides the clarity and centralization you need to assess your team's productivity and make executive decisions. Mission Control is a one-stop-shop that allows you to get the information you need and focus on what matters most - execution.


### Key Features

-    Not just for products - we also track your projects, allowing for a top-level view of your organization
-    For admins - the ability to view every single product and project in your organization w/ related KPIs
-    For users - the ability to see the projects that they themselves are attached to, allowing for a seamless and lightweight environment
-    Simple user promotion - admins can promote and demote other users in a snap
-    Sync with your data - simply sign up with your work email address, and your data will sync automatically with your database

## Tech Stack

### Front end built using:

#### React/Redux

-    React is a fantastic choice for building dynamic, interactive UIs. Mission Control is a complex website with a nested component structure, and has demanding relationships with multiple APIs. React allows us to meet the platform's needs efficiently, and helps keep everything organized behind the scenes.
-    As a manager, you need to be able to access a variety of different views, all of which contain different data. This calls for advanced state management. Redux's elegance, scalability, and inherent opinionated nature is perfect for applications that have advanced state requirements, and abstracts away the mess of local state.
-    React/Redux as a pair is a fantastic combination that not only allows for portable, reusable UI components, but also allows for infinitely scalable state, and the ability to shuttle data around the application seamlessly. It is THE enterprise solution.

#### Sass/SCSS

-    Nested CSS is a must when styling your application. SCSS not only allows us as developers to write CSS quickly, but also creates an intuitive flow for later revisions. Add in variables, mixins, and functions, and CSS (arguably) is elevated to a production level.

#### Material UI

-    Material UI is a fantastic resource for advanced UI components such as popovers, avatars, and tabs. We took advantage of Material UI for a wide variety of components, which greatly sped up up our development time. Material UI also offers a fantastic icon library, which we took advantage of throughout the application.

#### Axios

-    Axios is the industry-standard library for HTTP requests in Javascript. It provides a simple, readable syntax, and also allowed our team to make advanced queries, such as concurrent requests that required parallel resolution. Additionally, this application makes requests to several APIs, one of which is REST, the other of which is GraphQL. Axios provides functionality for both types of requests, all in one library. 

#### React Router

-    Single page applications have special needs, particularly when it comes to routing the user from page-to-page. React router allows for the easy transport of the site's users whilst retaining SPA functionality. And with the new React Router hooks, we can do all of this inside of the functional programming paradigm.

#### Formik/Yup

-    Forms in React are not much fun - they require (at least) local state management, and as the forms scale, that process only gets messier. Formik (with the validation library Yup) abstract away the difficulties of writing forms in React, and allow us to focus on core application functionality.

#### Front end deployed to AWS Amplify

#### [Back end](https://github.com/Lambda-School-Labs/mission-control-be) built using:

#### Node/Express/Postgres - deployed to AWS Elastic Beanstalk

-    Mission Control uses an external API to manage key business data, so our internal API demands were scaled down. Thus, in the interest of focusing on the user experience, we spun up a lightweight Node/Express API to handle authentication and role management within the site itself.
-    We feel that Postgres is the top choice for relational databases, considering it's stability and scalability. It's also very easy to work with, so working with the database is always quick and easy.
-    The full application is deployed to AWS (Amplify for the FE, Elastic Beanstalk on the BE with an AWS RDS). With the full app bundled together in one suite, dev ops becomes a breeze, and we can take full advantage of all of AWS's various products. 

#### Knex.js

-    Knex allows us to make SQL queries to our database quickly and easily. It integrates seamlessly into Node, and also allows us to seed our database when testing on local environments.

#### Validator and JWT

-    Auth is a tricky subject, but luckily there are plenty of open-source libraries and best-practices out there to learn from. For string validation, we used Validator. This library allows us to sanitize our database and ensure that only clean data touches our application. We used JWT (JSON Web Tokens) to create protected access to our API and provide a resouce for the front end to shield certain views.

# APIs

## Authentication

This API allows users to register + log in to Mission Control. It also assigns users roles (student, manager, admin) that all have varying levels of access on the front end and back end. Admins have the ability to promote/demote other users as well, so the role assignments are variable.

## Product Management API - https://api.use-mission-control.com/, https://github.com/Lambda-School-Labs/product-management-api

Built with GraphQL and Prisma, the Product Management API is the foundation of Mission Control. It contains products, projects, organizational roles, team members, and KPIs regarding your company's data. It requires a Bearer token for full access, which can be obtained by running `prisma token` in the context of that API's repository. More details on that API can be found at the Github link above, or by contacting Bernie Durfee(https://github.com/berniedurfee).


# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    *  REACT_APP_ROLE_KEY - this is the encryption key for the user's role (determines what dashboard they have access to). Choose a secure key (can be anything you want), and set up as a variable in your local application. The production key can be found in the AWS Amplify application
    *  REACT_APP_MISSION_CONTROL_ENDPOINT - can be found in the AWS Amplify application. This is the authentication API

# Testing

#### Jest

-    Embedded directly into Create React App, Jest provides all the tools one needs to run FE unit AND integration tests. Jest can be thought of as the lens through which an application's tests are viewed and ran. It is a stable base for other testing libraries to build off of.

#### React Testing Library

-    React Testing Library is a fantastic testing resource which was built with one guiding principle in mind - your tests should resemble user behavior as closely as possible. Thus, React Testing Library is DOM-focused, and does not bother with implementation details. Instead, it allowed us to test website behavior, and verify that certain information is displayed when it should be. With React Testing Library, the focus is placed where it should be - the shipped product.

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
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

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
