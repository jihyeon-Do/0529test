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
  let html = '';

  todos.forEach(todo => {
    let $li = `<li id="${todo.id}">
    <label><input type="checkbox" ${todo.completed ? "checked" : ""}>${todo.content}</label>
  </li>`
    html+=$li;
  });
  const $ul = document.querySelector('.test');
  $ul.innerHTML = html;
  return html;
}

console.log(render());
const $btn = document.querySelector('button');
$btn.onclick = render
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

//아래와 같은 코드가 작성되게 view를 만들어서, index.html에 ul에 자식으로 출력하세요. 어떠한 방법을 사용해도 좋습니다.