const taskModel = require('./../models/taskModel')

module.exports.getTasks = async(req, res) =>{
    const tasks = await taskModel.find()
    res.status(201).send(tasks)
    // res.send('Hiiii');
}

module.exports.saveTask = (req,res) =>{
    const {task} = req.body

    taskModel.create({task})
    .then((data)=>{
        console.log('Succesfully save data');
        res.status(201).send(data)
    })
    .catch((error) =>{
        console.log(error);
        res.send(error)
    }) 
}


module.exports.updateTask = (req,res)=>{
    const id = req.params
    const {task} = req.body

    taskModel.findByIdAndUpdate(id, {task})
    .then(() => {
        res.send('Updated SuccesFully')
    })
    .catch((error) =>{
        res.send(error)
    })
}

module.exports.deleteTask = (req,res)=>{
    const id = req.params

    taskModel.findByIdAndDelete(id)
    .then(()=>{
        res.send('Delete succesfully')

    })
    .catch((error) =>{
        res.send(error)
    })
}