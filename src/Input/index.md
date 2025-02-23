---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---

# Input 输入框
通过键盘输入内容，是最基础的表单域包装
## 何时使用
一般用在表单页进行信息的收集

## 代码示例
### Input 基本使用
<code src='pages/Input/index'></code>

### SearchBar 搜索框
<code src='pages/InputSearchBar/index'></code>

### Textarea
<code src='pages/InputTextarea/index'></code>

### 自定义
<code src='pages/InputCustom/index'></code>


## API

### Input, Textarea 相同的属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| string | - |
| defaultValue | 初始值 | string | - | 
| disabled | 是否禁用 | boolean | false |
| maxLength | 最大长度 | number | 140 |
| placeholder | 占位符 | string | - |
| style | 样式| string | - |
| value | 输入框的值。受控模式。 | string | - | 
| onConfirm | 点击键盘完成时触发此回调 | (value: string, event: Event => void | - |
| onFocus | 聚焦时触发触发此回调 | (value: string, event: Event) => void | - |
| onBlur | 失焦时触发此回调 | (value: string, event: Event) => void | - |
| onChange | 输入时触发此回调 | (value: string, event: Event) => void | - |

### Input属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| allowClear | 可以点击清除图标删除内容 | boolean | false |
| enableNative | 是否使用native | boolean | - |
| focus | 聚焦，查看[详细说明](#input-focus) | boolean | - |
| password | 是否是密码类型 | boolean | false |

### Textarea属性
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| autoHeight | 是否自动增高。 | boolean | false |
| enableNative | 是否使用native | boolean | false |
| showCount | 是否显示字数统计 | boolean | true |


### Input, Textarea 更多相同属性

- placeholder-style
- placeholder-class
- name
- confirm-type

https://opendocs.alipay.com/mini/component/input
<br />
https://opendocs.alipay.com/mini/component/textarea

### Input focus
使用focus属性需要在app.json window里加上 `"enableInPageRenderInput": "YES"`，否则无法在IOS里打开键盘。

### Input, Textarea 实例方法
实例方案需要小程序 `component2` 可使用
| 属性 | 说明 | 类型 |
| -----|-----|-----|
| update | 更新值 | (value: string) => void |
| getValue | 得到值 | () => string |

## FAQ

### Input focus没有打开键盘
需要在app.json window里加上 `"enableInPageRenderInput": "YES"`
### Input出现光标问题
可查看 https://opendocs.alipay.com/mini/component/input#FAQ 使用 `enableNative` 属性解决

### 使用value受控模式出现键盘问题
这个是由于 https://opendocs.alipay.com/mini/component/input#Bug%20%26%20Tip
解决方式为：不使用value受控模式，采用ref方式调用input更新方法
```html
<input defaultValue="{{defaultValue}}" ref="handelRef" />
<button onTap="clear">clear</button>
```

```js
Page({
  handelRef(input) {
    this.input = input;
  },
  clear() {
    this.input.update('');
  }
})
```

### 实例方法不可用
需要使用 `component2` https://opendocs.alipay.com/mini/framework/component-ref
