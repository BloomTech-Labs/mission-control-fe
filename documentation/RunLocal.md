# Docker, Prisma, Appolo Backend Setup and Run Localy

* Clone the repo https://github.com/Lambda-School-Labs/mission-control-be
* cd in to your local copy
* In root create ```.env```
```
APPLICATION_NAME=(get the value from your TL)
APOLLO_CONTAINER_IMAGE=(get the value from your TL)
ENVIRONMENT_NAME=(get the value from your TL)
OAUTH_TOKEN_ENDPOINT=(get the value from your TL)
OAUTH_CLIENT_ID=(get the value from your TL)
TEST_OAUTH_CLIENT_ID=(get the value from your TL)
TEST_OAUTH_CLIENT_SECRET=(get the value from your TL)
PRISMA_MANAGEMENT_API_SECRET=(get the value from your TL)
PRISMA_SECRET=(get the value from your TL)
PRISMA_ENDPOINT=(get the value from your TL)
SENDGRID_API_KEY=(get the value from your TL)
CODE_CLIMATE_API=(get the value from your TL)
CODE_CLIMATE_TOKEN=(get the value from your TL)
GIT_HUB_API=(get the value from your TL)
GIT_HUB_TOKEN=(get the value from your TL)
```
* ```npm install``` in the root directory to download dependencies
* ```cd apollo``` 
* ```npm install``` in this ```apollo``` directory 



## Windows (Idealy you use Mac or Linux)
### Windows Pro

### Windows Home (very problminatic)



## Mac/OSX
* in the root create ```sourceme.sh```
```
export $(grep -v '^#' .env | xargs -0)
```




## Linux




