import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');
app.use(express.static('public'));

let todosd = [];
let todosw = [];

//code for Daily tasks side

app.get('/', (req, res) => {
    let now = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    var day = days[ now.getDay() ];
    var month = months[ now.getMonth() ];
    var date = now.getDate()
    res.render('index.ejs',{day: day, month: month, date: date,todosd:todosd});
});

app.post('/', (req, res) => {
    let task = req.body.todo;
    if(task!==''){
        todosd.push(task);
    }
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    let todoId = req.body.todoId;
    todosd.splice(todoId, 1);
    
    res.redirect('/');
});


//code for working tasks side

app.get('/work', (req, res) => {
    let now = new Date();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    var day = days[ now.getDay() ];
    var month = months[ now.getMonth() ];
    var date = now.getDate()
    res.render('work.ejs',{day: day, month: month, date: date,todosw:todosw});
})

app.post('/work', (req, res) => {
    let task1 = req.body.todo;
    if(task1!==''){
        todosw.push(task1);
    }
    res.redirect('/work');
});
app.post('/del', (req, res) => {
    let todoId = req.body.todoId;
    todosw.splice(todoId, 1);
    
    res.redirect('/work');
})

//running the server

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});