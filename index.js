const todos = [{
  id: 3,
  content: 'HTML',
  completed: false
},
{
  id: 2,
  content: 'CSS',
  completed: true
},
{
  id: 1,
  content: 'Javascript',
  completed: false
}
];


function render() {
  const test = document.querySelector('.test')


  todos.forEach(todo => {

    html += `<li id="${todo.id}">
    <label><input type="checkbox" ${todo.completed ? 'checked' : '' }>${todo.content}</label>
  </li>`

  });

  // return test;
}
render()
//console.log(render());



console.log(render());


const $btn = document.querySelector('.btn');
$btn.onclick = (e) => {
  document.querySelector('.test').innerHTML = render();
}

document.querySelector('.test').innerHTML += render();

/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/

