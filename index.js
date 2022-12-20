const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = 'localhost';
const port = 3000;

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hello Node');
// }).listen(3000);

const server = http.createServer(function(req, res) {
    const name = 'Surya Ibrahim';
    let a = 10000;
    let b = 20000;
    let c = a + b;

    a = rupiah.convert(a);
    b = rupiah.convert(b);
    c = rupiah.convert(c);

    fs.appendFile('hasil.txt', c, ()=>{
        console.log('Berhasil Disimpan');
    })

    const ram = os.freemem();
    const myCpu = os.cpus();

    function mycpu (){
        let myCPU = [];
        myCpu.map((cpu,i) => {
            myCPU.push(cpu.model);
        })
        return myCPU[0];
    }

    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello ${name} Saya Memiliki uang ${c} sisa Ram ${ram} dan CPU ${mycpu()}`);
});

server.listen(port, host, function() {
    console.log(`Server is running on port ${host}:${port}`);
});
