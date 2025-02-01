import express from 'express'
const routes = express.Router()
import { createStudent, getStudent, updateStudent, deleteStudent } from "../controllers/studentController.js"
// route + constroller

// create student - CRUD - create
routes.post('/create-student' , createStudent)

// read student - CRUD - read
routes.get('/get-student' , getStudent)

// update student - CRUD - update
routes.put('/update-student/:id' , updateStudent)

// delete student - CRUD - delete
routes.delete('/delete-student/:id' , deleteStudent)

export default routes;