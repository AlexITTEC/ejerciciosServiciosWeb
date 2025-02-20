// Array para almacenar las tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea(id, descripcion) {
    tareas.push({ id, descripcion, completado: false });
    console.log(`Tarea "${descripcion}" agregada.`);
}

// Función para eliminar una tarea por ID
function eliminarTarea(id) {
    const index = tareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
        console.log(`Tarea "${tareas[index].descripcion}" eliminada.`);
        tareas.splice(index, 1);
    } else {
        console.log(`No se encontró una tarea con ID ${id}.`);
    }
}

// Función para marcar una tarea como completada
function completarTarea(id) {
    const tarea = tareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completado = true;
        console.log(`Tarea "${tarea.descripcion}" marcada como completada.`);
    } else {
        console.log(`No se encontró una tarea con ID ${id}.`);
    }
}

// Ejemplo de uso:
agregarTarea(1, "Aprender JavaScript");
agregarTarea(2, "Practicar Fetch API");
agregarTarea(3, "Construir un pequeño CRUD");

console.log("Tareas actuales:", tareas);

completarTarea(2);
eliminarTarea(1);

console.log("Tareas actualizadas:", tareas);
