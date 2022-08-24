require('dotenv').config()

const express= require('express');

const app= express();

app.set('view engine','hbs')

//partial handlebars
const hbs=require('hbs');
hbs.registerPartials(__dirname+'/views/partials')

//servir contenido estatico

app.use(express.static('public'))

//renderizar vistas sencillas
//la idea de handle bars es que tengamos separados el MVC




//renderizar la vista
//Este es el controlador
app.get('/', (req,res)=>{
    //estos argumentos son enviados a la hora de renderizar la vista
    res.render('home',{
        titulo:'Curso de Node',
        nombre:'Luis Sendoya'


    })
})

//al utilizar hbs se puede reutilizar los elementos

app.get('/elements', (req,res)=>{
    res.render('elements');
})

app.get('/generic',(req,res)=>{
    res.render('generic')
})


//sin renderizar un contenido statico
// app.get('/generic', (req,res)=>{
//     res.sendFile(__dirname + '/public/generic.html');
// })

app.get('*', (req,res)=>{
    res.send('Page not found');
})

const puerto=process.env.PORT;

app.listen(puerto,()=>{
    console.log(`Example app listening at http://localhost:${puerto}/ `)
})

//middleware=> son una funcion que se ejecuta antes de hacer otra cosa

//la carpeta public tiene prioridad con respecto a las otras rutas


//al utilizar hbs quiero prerendizar las vitas y enviarlas cuando se haga la soliciutd de los respectivo send


//el script start y el puerto son fundamentales para desplegar una aplicacion en un hosting

