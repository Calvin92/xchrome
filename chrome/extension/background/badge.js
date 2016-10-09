// 插件icon旁的标记数字，以显示插件的状态信息等～
chrome.storage.local.get('todos', (obj) => {
  let todos = obj.todos;
  if (todos) {
    todos = JSON.parse(todos);
    const len = todos.filter((todo) => !todo.marked).length;
    if (len > 0) {
      chrome.browserAction.setBadgeText({ text: len.toString() });
    }
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: '1' });
  }
});
