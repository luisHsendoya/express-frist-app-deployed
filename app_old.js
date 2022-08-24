const http= require('http');
http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json')
    const persona={
        id:1,
        nombre:"luis"
    }
    res.write(JSON.stringify(persona));

    res.end()

})
.listen(8080);
