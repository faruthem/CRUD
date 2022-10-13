import { Schema,model } from "mongoose";


const userSchema = new Schema({
    email:{
        type: String,
        required: true, //Indica que el campo es único
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    username:{
        type: String,
        required: true, //Indica que el campo es único
        unique: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true,
        reuired: true,
        trim: true
    },    
 },
    {
        timestamps: true,
        versionkey: false
    }
);

 
//export default model("users", userSchema);
export default model("User", userSchema); //Con está no funciona pero es la correcta 


