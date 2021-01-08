const fs = require('fs');

///Arreglo donde se guardan los objetos(Tareas por hacer)
let listadoPorHacer = [];

///Funcion para guardar el listado dentro de una archiv
const guardarDB = () => {
    //Funcion que escribe en json datos
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (error) => {
        if (error)
            throw new Error('No Se pudo grabar', error);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    //Regresa la posicion de la tarea, donde coincida la tarea que se escriba
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0)  {
        listadoPorHacer[index].completado = (String(completado) == 'true');
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) =>  {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

const crear = (descripcion) => {
    cargarDB();

    //Objeto (Tareas por hacer)
    let porHacer = {
        descripcion,
        completado: false
    };
    ///Se introduce una nueva tarea en el arreglo de tareas
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}