var inputNuevaTarea = document.getElementById("nueva-tarea");
var listaTareas = document.getElementById("tareas");

var botonAgregar = document.getElementById("agregar");
botonAgregar.onclick = function() {
    var listItem = document.createElement("li");
    listItem.innerHTML = inputNuevaTarea.value;
    listaTareas.appendChild(listItem);
    inputNuevaTarea.value = "";
};

var botonBorrarTodo = document.getElementById("borrar");
botonBorrarTodo.onclick = function() {
    listaTareas.innerHTML = "";
}
