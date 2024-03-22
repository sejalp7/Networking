import express from 'express'
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 5111;

app.all('/', (req, res) => {
    // console.log('Request', req);
    // console.log('Response', res);
    res.send('I am running!!!')
})


const todoList = [
    {
        id: 1,
        task: 'Make App',
        completed: true
    },
    {
        id: 2,
        task: 'Make Server',
        completed: false
    }
];

//READ
app.get('/todos', (req, res) => {
    res.send(todoList);
})

//CREATE/
app.post('/todos', (req, res) => {
    const todo =req.body;
    todoList.push(todo);
    res.json({
        message: 'Task Added Successfully'
    });
})

//UPDATE
app.put('/todos/:id', (req, res) => {
    const findTask = todoList.findIndex((todo) => todo.id === Number(req.params.id));

    if(findTask !== -1) {
        todoList[findTask] = {
            id: Number(req.params.id),
            ...req.body
        }
    }

    res.json({
        message: 'Task updated successfully'
    })
})

//DELETE
app.delete('/todos/:id', (req, res) => {
    const findTask = todoList.findIndex((todo) => todo.id === Number(req.params.id));
    if(findTask !== -1) {
        todoList.splice(findTask, 1);
    }

    res.json({
        message: 'Task deleted successfully'
    })
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})