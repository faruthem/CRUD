import { connect } from "mongoose";
//import {mongodb} from './config';
(async()=>{
    try{
        const db =await connect("mongodb://localhost/CRUD")
        console.log('LOS HURONES PUDIERON SER ENLAZADOS', db.connection.name)
    }catch(error){
        console.log(error);
    }
})()