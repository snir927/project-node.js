const express = require('express')
const authController = require('./controllers/authController')
const employeeController = require('./controllers/employeeController')
const departmentController = require('./controllers/departmentController')
const shiftController = require('./controllers/shiftController')
const employeeShiftController = require('./controllers/employeeShiftController')
const userController = require('./controllers/userController')
const cors = require('cors')
const connectDB = require('./configs/db')

require('dotenv').config()

const app = express();

connectDB();

app.use(cors())
app.use(express.json())

app.use('/auth', authController)
app.use('/users', userController)
app.use('/employees', employeeController)
app.use('/departments', departmentController)
app.use('/shifts', shiftController)
app.use('/employeeShifts', employeeShiftController)

app.listen(process.env.PORT, () => {
    console.log(`App is listening at http://localhost:${process.env.PORT}`)
})