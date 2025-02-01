import mongoose from "mongoose"

const studentSchema =  new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

let students = mongoose.model('student', studentSchema)

export default students;