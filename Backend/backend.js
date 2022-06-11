console.log("Backend.js has been found")

const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware')
const connectDB = require('./db')
const port = process.env.PORT || 3001

connectDB()

const app = express()
const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/blogs', require('./route'))
app.use('/api/v1/suggestions', require('./route'))
app.use('/api/v1/fhilts', require('./route'))

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname, '../Frontend/dist')))
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html')))
// }else{
//     app.get('/', (req, res) => res.send('Not production'))
// }

app.use(errorHandler)

app.listen(port, () => console.log(`Server listening at port ${port}`))