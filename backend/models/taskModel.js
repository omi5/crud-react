const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },

})


const taskModel = mongoose.model('topics', taskSchema)

module.exports = taskModel;