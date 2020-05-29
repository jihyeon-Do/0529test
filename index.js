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

  todos.forEach(({ id, content, completed }) => {
    test.innerHTML += `<li id=${id}><label><input type="checkbox"${completed ? ' checked' : ''}>${content}</label></li>`
  let html = '';

  });

  // return test;
}
render()
//console.log(render());


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

