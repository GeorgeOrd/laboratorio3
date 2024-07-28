/* NÚMEROS DEL 1 AL 10 */
let rendered_list = ''
const generate_list = () => {
    //1. obtenemos el elemento donde imprimiremos los números del 1 al 10
    const list = document.getElementById('1to10_list');
    //2.  Generamos la lista con un bucle que itere 10 veces y lo guardamos en
    //una variable que nos permita renderizar el elemento
    for (let i = 1; i <= 10; i++) {
        const element = `<li class="number">${i}</li>`
        rendered_list += element 
    }
    //3. Renderizamos la lista
    list.innerHTML = rendered_list
}

/*RELOJ EN TIEMPO REAL*/
const generate_timestamp = () => {
    // 1. Creamos un objeto de la clase Date, este
    // contiene toda la información de la hora y fecha actuales
    const currentTime = new Date()
    const timestamp = currentTime.toLocaleString('es-EC')
    
    //2. Renderizamos la plantilla dentro del elemento
    const dateTime = document.getElementById('date_and_time')
    dateTime.innerText = timestamp
}

//Llamamos a cada función que hemos creado
generate_list()
setInterval(generate_timestamp, 1000)