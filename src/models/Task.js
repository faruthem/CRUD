import { Schema,model } from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String,
        require:true,
        unique: true,
        trim: true
    } ,
    description:{
        type: String,
        require: true
    } ,
    done:{
        type: Boolean,
        default: false
    } ,
},{
    timestamps:true,
    versionKey: false
});
//prueba esto quitalo si no sirve ji-ji
/*
const taskSchema2 = new Schema({
    Correo:{
	    type:String,
	    require:true,
	    unique:true,
	    trim: true
    },
    password:{
	    type:String,
	    require: true
    },
    Username:{
	    type:String,
	    require: true
	},
    phone:{
	    type:Number,
	    require: true
	},
    done:{
        type: Boolean,
        default: false
    },
},{
    timestamps:true,
    versionKey: false
});*/
//Fin de prueba
export default model("Task", taskSchema);
//export default model("Task2",taskSchema2);



