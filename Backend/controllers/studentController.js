import students from '../models/studentModel.js'

// create student - CRUD - create
const createStudent =  async (req, res) => {
    const { name, email, password } = req.body;

    let student = await students.create({ name, email, password })

    res.json({
        student,
        message: "student created"
    })
}

// read student - CRUD - read
const getStudent = async (req, res) => {
    let student = await students.find({})
    res.json({ student })
}

// update student - CRUD - update
const updateStudent = async (req, res) => {
    const  { id } = req.params;

    const {name, email, password} = req.body;

    let student = await students.findById(id)

    if(name) student.name = name;
    if(email) student.email = email;
    if(password) student.password = password;

    await student.save();

    res.json({ student })
}

// delete student - CRUD - delete
const deleteStudent  = async (req, res) => {
    const  { id } = req.params;
    let student = await students.findByIdAndDelete(id)
    res.json({ student })
}

export { createStudent, getStudent, updateStudent, deleteStudent }