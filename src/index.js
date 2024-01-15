document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    input =  document.getElementById('new-task-description').value
    handleTodos(input)
    form.reset()
  });
});

function handleTodos(answer) {
  let newTodos = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener("click", handleDelete)
  btn.textContent = "X"
  newTodos.textContent = answer
  newTodos.appendChild(btn)
  document.querySelector('#tasks').appendChild(newTodos)
  console.log(answer)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}

