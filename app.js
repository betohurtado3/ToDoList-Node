const argv = require('./config/yargs').argv;
const porHacer = require('./toDo/toDo');
var colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado)  {
            console.log('\n======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado', tarea.completado);
            console.log('======================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.eliminar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}