const mongoose = require("mongoose")

const applicationSchema = new mongoose.Schema({
    compny: {
        type: String,
        required: true
    },
    title: {
        type: String,
    },
    notes:{
        type: String
    },
    postingLink:{
        type:String
    },
    status: {
        type: String,
        enum:['interested', 'applied', 'interviewing', 'rejected', 'acepted']
    }

})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    applications: [applicationSchema]
})

const User = mongoose.model("User", userSchema)

module.exports = User;