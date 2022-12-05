const form = document.querySelector("#form");
const addBtn = document.querySelector("#addBtn");
const stateBtn = document.querySelector("#stateBtn")
const newElementBox = document.querySelector("#newElementBox");
const totalTareas = document.querySelector("#totalTareas")
const madeTareas = document.querySelector("#madeTareas")
const contentArray = document.querySelector("#contentArray")

let tareas = [
  { tareaID: 1669751695844, tareaName: "Armar el árbol", state: false },
  { tareaID: 1669751695845, tareaName: "Ordenar la casa", state: false },
  { tareaID: 1669751695846, tareaName: "Ir al supermercado", state: false }
]

const made = tareas.filter(tareas => tareas.state == true)
madeTareas.innerHTML = ` ${made.length}` //  tareas made counter

const del = (id) => {
  tareas = tareas.filter((item) => item.tareaID !== id)
  render()
}

const render = () => {
  contentArray.innerHTML = ""
  totalTareas.innerHTML = `<p>${tareas.length}</p>` //  tareas counter

  tareas.forEach((item) => {
    contentArray.innerHTML += `
               <tr>
                  <td>${item.tareaID}</td>
                  <td>${item.tareaName}</td>
                  <td>No realizada<td>
                  <td><h4 onclick = "del(${item.tareaID})" title="Eliminar">❌</h4></td>
                  <td><button onclick = "change(${item.state})" id="update">Cambiar</button></td>
               </tr>`
    totalTareas.innerHTML = `<p>${tareas.length}</p>`
  })
}
render()

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (newElementBox.value == "") {
    alert("Agregue una tarea para continuar");
  }
  else {
    tareas.push({ tareaID: Date.now(), tareaName: newElementBox.value, tareaDone: false })
    render()
    newElementBox.value = ""
  }
})