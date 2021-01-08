const options = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', options)
    .command('actualizar', 'Actualiza un tarea creada', options)
    .command('borrar', 'Elimina una tarea', options)
    .help()
    .argv;

module.exports = {
    argv
}