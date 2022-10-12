import { connect } from "mongoose";
(async()=>{
    try{
        const db =await connect("mongodb://localhost/CRUD")
        //const 
        //mongo_nodejs_mexpress_web:27017/CRUD")
        console.log('LOS HURONES PUDIERON SER ENLAZADOS', db.connection.name)
    }catch(error){
        console.log(error);
    }
})()