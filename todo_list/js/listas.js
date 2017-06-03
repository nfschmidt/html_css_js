
var inputNuevaTarea = document.getElementById("input-tarea");
var listaTareas = document.getElementById("listas-tareas");
var botonAgregar = document.getElementById("boton-agregar");

// Le damos comportamiento al boton "agregar"
// Al hacerle click se agrega un elemento a la lista
botonAgregar.onclick = function() {
    // Si el input esta vacio mostramos un cartel de error y terminamos
    if (inputNuevaTarea.value === "") {
        window.alert("No se puede ingresar una tarea vacia!");
        return;
    }

    var listItem = document.createElement("li");
    var spanTarea = document.createElement("span");
    spanTarea.innerHTML = inputNuevaTarea.value;
    listItem.appendChild(spanTarea);

    // Creamos los botones que vamos a agregar al elemento de la lista
    var botonHecho = document.createElement("button");
    var botonNoHecho = document.createElement("button");
    var botonBorrar = document.createElement("button");

    // El boton "hecho" comienza visible.
    // Al hacerle click marca la tarea como hecha, se oculta
    // y muestraal boton "no hecho"
    botonHecho.innerHTML = "Hecho";
    botonHecho.classList.add("boton", "boton-hecho");
    botonHecho.onclick = function() {
        spanTarea.classList.add("tarea-hecha");
        botonHecho.style.display = "none";
        botonNoHecho.style.display = "inline-block";
    }
    listItem.appendChild(botonHecho);

    // El boton "no hecho" comienza invisible.
    // Al hacerle click saca la tarea como hecha, se oculta
    // y muestraal boton "hecho"
    var botonNoHecho = document.createElement("button");
    botonNoHecho.innerHTML = "No hecho";
    botonNoHecho.classList.add("boton", "boton-no-hecho");
    botonNoHecho.style.display = "none";
    botonNoHecho.onclick = function() {
        spanTarea.classList.remove("tarea-hecha");
        botonNoHecho.style.display = "none";
        botonHecho.style.display = "inline-block";
    }
    listItem.appendChild(botonNoHecho);

    // El boton "borrar" siempre esta visible
    // Al hacerle click borra el elemento actual de la lista
    var botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.classList.add("boton", "boton-borrar");
    botonBorrar.onclick = function() {
        listaTareas.removeChild(listItem);
    }
    listItem.appendChild(botonBorrar);

    listaTareas.appendChild(listItem);
    inputNuevaTarea.value = "";
};


var botonBorrarTodo = document.getElementById("boton-borrar-todas");
botonBorrarTodo.onclick = function() {
    listaTareas.innerHTML = "";
}
