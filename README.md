# Docker-Compose (Spring, React, Selenium) 

Contains a basic Springboot Backend, React Frontend and BDDs writting using Selenium, Cucumber. BDDs will communicate with FE running on docker container, which communicated with BE for data. 

### How to run

```
docker-compose up -d
cd bdd
npm run test
```

This will dockerise and run FE, BE and chrome ready for BDD on containers. Running the npm run test, will execute the test suite. 
