"use strict";
// 创建待办事项清单
let todos = []; // 类型是 Todo 数组
// 获取 DOM 元素
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");
// 添加任务
function addTodo() {
    const task = taskInput.value.trim();
    if (!task) {
        alert("请输入任务！");
        return;
    }
    const newTodo = {
        id: todos.length + 1,
        task: task,
        completed: false
    };
    todos.push(newTodo);
    // console.log(`已添加: ${task}`);
    taskInput.value = "";
    renderTodos();
}
// TODO.渲染清单
function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = `${todo.task} `;
        if (todo.completed) {
            li.classList.add("completed");
        }
        const completedBtn = document.createElement("button");
        completedBtn.textContent = "完成";
        completedBtn.onclick = () => {
            todo.completed = true;
            renderTodos();
        };
        li.appendChild(completedBtn);
        todoList.appendChild(li);
    });
}
// 全局暴露 addTodo 函数给 HTML 用
window.addTodo = addTodo;
// 查看所有待办事项的函数
function listTodo() {
    if (todos.length == 0) {
        console.log("清单为空！");
        return;
    }
    todos.forEach((todo) => {
        const status = todo.completed ? "[✔]" : "[ ]";
        console.log(`${status} ${todo.id} ${todo.task}`);
    });
}
// 标记任务完成的函数
function completedTodo(id) {
    const todo = todos.find((t) => t.id == id);
    if (todo) {
        todo.completed = true;
        console.log(`任务 ${id} 已标记为完成！`);
    }
    else {
        console.log(`找不到任务 ${id}！`);
    }
}
// 删除任务
function deleteTodo(id) {
    todos = todos.filter((t) => t.id != id);
    console.log(`任务 ${id} 已删除！`);
}
