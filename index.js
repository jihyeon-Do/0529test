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

const $test = document.querySelector('.test');
const $btn = document.querySelector('button');
function render() {
  // let html = '';

  todos.forEach(todo => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    li.id = todo.id;
    label.textContent = todo.content;
    input.setAttribute("type", "checkbox");
    todo.completed ? input.checked = true : input.checked = false;
    li.appendChild(label);
    label.appendChild(input);
    $test.appendChild(li);
  });
  // return html;
}
// console.log(render());
$btn.onclick = () => render();
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