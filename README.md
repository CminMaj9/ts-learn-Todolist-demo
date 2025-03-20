# TS学习记录

> TS 是 JS 的超集，是支持了静态类型的 JS，是编译时就能判断变量类型的语言。我个人感觉和是 JS+PHP 的味道，然后学习到了 TS 是编译为 JS 再运行的，因此本质上还是 JS 的底子。

## 目前代码内容

1. 完成了一个 TodoList 的小练手项目。

**DOM 操作**：用 document.getElementById 获取页面元素。

**类型断言**：as HTMLInputElement 告诉 TS 这些元素是什么类型。

**渲染逻辑**：renderTodos 函数动态生成 <li> 元素。

**事件绑定**：按钮点击时更新状态并重新渲染。

**全局函数**：addTodo 暴露到 window 对象，让 HTML 的 onclick 调用。

##### 学到了！

**TS + DOM**：如何用 TS 操作网页元素。

**类型断言**：as 的用法。

**事件处理**：绑定点击事件。

**模块化调整**：从命令行到浏览器的转变。

2. 还没搞

## 一些有用的代码：

```sh
# 创建 tsconfig.json
tsc --init

# package.json
npm init -y


```

## 黑色幽默：

![image-20250320100507811](/Users/gefangjie/Desktop/ts-learn-Todolist-demo/static/readmePic/SCR-20250320-jgtb.png)

Grok你这么喜欢外卖是吧。