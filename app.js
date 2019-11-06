const argv = require('./config/yargs').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado ${archivo}`);
        }).catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}



// console.log(argv.base);
// console.log('limite', argv.limite);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];