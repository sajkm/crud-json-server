//import json-server
const jsonServer = require('json-server')

//create json server using json-server library
const CrudAppServer= jsonServer.create()

//set up path/route for db.json file
const router = jsonServer.router("db.json")

//Return middleware used by json server
const middleware = jsonServer.defaults()

//setup port for server app
const port = 4000 || process.env.PORT 

//use middleware and router in server
CrudAppServer.use(middleware)
CrudAppServer.use(router)

//server listen for request from frontend
CrudAppServer.listen(port,()=>{
    console.log(`Crud App server started at port: ${port}, and waiting for request!!!`);
})