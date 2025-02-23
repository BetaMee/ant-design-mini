---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Checkbox 复选框
在一组可选项中进行多选
## 何时使用
- 在一组可选项中进行多项选择时
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合



## 代码示例

### 基本使用
<code src='pages/Checkbox/index'></code>

### CheckboxGroup
<code src='pages/CheckboxGroup/index'></code>

## API
#### Checkbox
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| checked | 是否选中 | boolean | - |
| className | 类名| string | - |
| color | 选中的颜色，同 CSS 色值| string | - |
| defaultChecked | 默认是否选中 | boolean | - |
| disabled | 是否禁用  | boolean | false | 
| style | 样式| string | - |
| onChange | 选中状态改变，触发回调 | (checked: boolean, event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

#### CheckboxGroup
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| string | - |
| color | 选中的颜色，同 CSS 色值| string | - |
| defaultValue | 默认选中值  | `string[]` | - | 
| disabled | 是否禁用  | boolean | false | 
| options | 指定可选项 | `{label: string; value: string; disabled: boolean}[]` | - |
| position | 布局，可选`horizontal` `vertical` | string | `vertical` |
| style | 样式| string | - |
| value | CheckboxGroup 的值，决定子元素是否勾选 | string[] | - |
| onChange | 勾选状态变化时，触发此函数 |(value: string[], event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void | - |

