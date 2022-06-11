const mongoose = require('mongoose')
const dotenv = require('dotenv').config({ path: 'ENV_FILENAME' });
const connectionString = process.env.MONGOBLOGS

const connectDB = async () => {
    try {
        const fig = await mongoose.connect(`${connectionString}`)
        console.log(`MongoDB has been connnected at ${fig.connection.host}`)
    } catch (e){
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB