const { Schema, models, model } = require("mongoose")

const UserSchema = new Schema({

    email:{
        type: String,
        unique: true,
        required:[true, "Email is Required"]
    },
    userName:{
        type: String,
        required:[true, "name is Required"]
    },
    password:{
        type: String,
        required:[true, "password is Required"]
    }
})
const User = models.User || model("User",UserSchema)
export default User