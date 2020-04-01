**Setting up branch autodetection.**
This will allow Amplify to automatically connect branches. 

**Sign in to the AWS Amplify Console.**
Here you will see all of the apps. If you do not see any apps, make sure the region is set to, `N. Virgina (us-east-1)`

1. Select “Mission-Control-Fe”

2. Select “General” under “App Settings”

3. In “App Details” click on “Edit”

4. Under “Branch Autodetection” hit the switch to enable.


5. Within the field, set a Branch Pattern you wish to autodetect.
    - In this case we will be using “feature/*” meaning any branch created using this pattern will auto connect to AWS Amplify. 
    - Example a new feature is being developed to add a login form.
    feature/login-form
    - Once the branch “feature/login-form” is pushed to Github, AWS Amplify will connect the branch and auto-deploy.

**Setting up subdomains**
This will allow you to create subdomains which will need to be set up within Okta and will allow you to specify which development branches will be connected to those subdomains.


1. Sign in to the AWS Amplify Console
Here you will see all of the apps. If you do not see any apps, make sure the region is set to `N. Virgina (us-east-1)`

1. Select “Mission-Control-Fe”

2. Select “Domain Management” under “App Settings”

3. In “Custom Domain” click on “Manage Subdomains”
    - In “Edit Domain” click on “Add”
    - Input a subdomain
        - In this case we will use “Labs21A”
        - Select a branch
        - In this case we will use “feature/login-form”
4. Click Update

**Setting up Okta**
This will allow subdomains created in AWS Amplify to successfully connect to Okta.

1. Sign in to Okta Developer

2. Set up the subdomains as “Trusted Origins”
    - On the menu header, hover over “API” and select “Trusted Origins”
    - Click on “Add Origin”
        - Input a “Name”
            - In this case we will use “Labs 21 - Stage Environment”
        - Input the “Origin URL”
            - In this case we will use “https://labs21a.stage.missionctrl.dev”
        - Check “CORS” and “Redirect”
        - Click Save


3. Set up the app’s “Redirects”
    - On the menu header, select “Applications”
    - Select “Mission Control (Labs19)”
    - Click on “General”
    - In “General Settings” click on “Edit”
        - Under Login 
            - Login Redirect URIs, click on “Add URI”
                - Input the “URL” of the subdomain, and place “/implicit/callback” in front of it
                    - In this case it will look like “https://labs21a.stage.missionctrl.dev/implicit/callback”
            - Logout Redirect URIs, click on “Add URI”
                - Input the “URL” of the subdomain.
                - In this case it will look like “https://labs21a.stage.missionctrl.dev”
                - Click on “Save’


**Setting up Front End Feature Environments**
This will allow a developer to set up which staging environment their Apollo/Prisma Client will be pointing to.

1. Create a branch
    - Create a new branch with the branch pattern “feature/*”
        - In this case we will be using “feature/login-form”
    - Open up VSCode/Editor of choice
    - In the root of the project, find the *amplify.yml* file.
    - Within this file, find the following code:
    ```
    env:
        variables:
            REACT_APP_URQL_URL: https://apollo.{SPECIFY_STAGE_HERE}.missionctrl.dev
            REACT_APP_URQL_WS: wss://apollo.{SPECIFY_STAGE_HERE}.missionctrl.dev/graphql
       
	```
    - Input the stage enviroment you are using.
        - In this case the *amplify.yml* will look like this:
        ```
            env:
        variables:
            REACT_APP_URQL_URL: https://apollo.stage.missionctrl.dev
            REACT_APP_URQL_WS: wss://apollo.stage.missionctrl.dev/graphql
       
