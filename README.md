# LAB - 07-a

## API Server

### Author: Alvian Joseph

### Links and Resources
* [submission PR](https://github.com/alvian-401-advanced-javascript/lab-07-api-server)
* [![Build Status](https://www.travis-ci.com/alvian-401-advanced-javascript/lab-07-api-server.svg?branch=master)](https://www.travis-ci.com/alvian-401-advanced-javascript/lab-07-api-server)

### Command to add data to server  
```echo '{"id": number, "description":"string","display_name": "string", "string":"text"}' | http post :3000/categories```

#### REST methods
* `/categories GET, POST`  

  GET Responds with all categories

* `/categories/:id/ PUT, DELETE`  

  Requires id in path, PUT updates a given category
  Requires id in path, DELETE deletes a given category



### Documentation
* Not required for this lab


#### Running the app
* nodemon index.js

#### Tests
npm test server.test.js
