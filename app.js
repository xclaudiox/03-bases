/* Requires */
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.b, argv.l)
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.b, argv.l)
            .then(archivo => console.log(`Archivoo creado ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('otro');
        break;
}