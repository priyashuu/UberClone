const mongoose = require('mongoose');
const capatainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"Firstname must be at least 3 characters long "],
        },
        lastname:{
           type:String,
           minlength:[3,"Lastname must be at least 3 characters long "],
        }
    },
    email:{
       type:String,
       required:true,
       unique:true,
       lowercase:true,
       match:[/^|S+@|S|.|S+$/,"Please enter a valid email ."]
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
       type:String,
    },
    status:{
      type:String,
      enum:['active','inactive'],
      default:'active',
    },
    vechile:{
        color:{
            type:String,
            required:true,
            minlength:[3,'Color must be atleast 3 characters long '],
        },
        plate:{
            type:String,
            required:true,
            min:[1,'Capacity must be atleast ']
        }
    }
})