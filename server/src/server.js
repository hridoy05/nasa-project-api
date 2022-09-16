const http = require('http')
const connectDB = require('../db/connect')
const app =require('./app')

const {loadPlanetsData} = require('./models/planets.model')

const PORT = process.env.PORT || 8000
const server = http.createServer(app)

async function startServer (){
   try{
    await connectDB.mongoConnect()
    await loadPlanetsData()
    server.listen(PORT, ()=> {
        console.log(`listening on port ${PORT}..`);
    })

   }catch(error){
    console.log(error);
   }
}

startServer()

