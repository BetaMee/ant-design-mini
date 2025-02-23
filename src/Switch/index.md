---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Switch 开关
开关选择器，相比较于原生switch实现了ios跟android端体验一致
## 何时使用
- 需要表示开关状态/两种状态之间的切换时
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合

## 代码示例
<code src='pages/Switch/index'></code>



## API
| 属性 | 说明 | 类型 | 默认值 | 
| -----|-----|-----|-----|
| checked  | 是否勾选 | boolean| - |
| className | 类名 | string | - |
| color | 选中背景色 |  string | - |
| defaultChecked | 默认是否勾选 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| loading | 是否加载状态 | boolean  | false |
| checkedText | 选中时的内容 | string \| slot | - |
| uncheckedText | 非选中时的内容 | string \| slot | - |
| size | 组件尺寸，可选 `medium` `small` `x-small` | string | `medium`  |
| style | 样式 | string | - |
| onChange | 点击 switch，触发此回调 | (checked: boolean, event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |
