---
nav:
  path: /components
group:
  title: 导航
  order: 6
toc: 'content'
---
# Tabs 标签页
内容组之间进行导航切换
## 何时使用
- 内容组之间进行导航切换
- 当前内容需要分成同层级结构的组，进行内容切换展示，用在表单或者标准列表界面的顶部


## 代码示例
### 基本使用
<code src='pages/Tabs/index'></code>

### 受控
<code src='pages/TabsControl/index'></code>

### 滑动
<code src='pages/TabsScroll/index'></code>

### Swiper
<code src='pages/TabsSwiper/index'></code>

### 电梯模式

- 滚动会对应到tab
- 点击tab可滚动到对应tab title
- onChange只会在tab切换触发，示例里自定义title onTap可滚动current tab

<code src='pages/TabsElevator/index'></code>


### 吸顶

- 滑动到最顶部会吸顶，
- 切换tab content会滚动到最顶部

<code src='pages/TabsSticky/index'></code>



### 纵向模式
<code src='pages/TabsVertical/index'></code>

### 纵向电梯模式
<code src='pages/TabsVerticalElevator/index'></code>

## API
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| string | - |
| current | 选中索引 | number | - |
| defaultCurrent | 选中索引初始值 | number | 0 |
| direction | tabs方向, `horizontal`(水平) `vertical` (垂直) | string | horizontal |
| items | 选项 | `Item[]` | [] |
| plus | 右上角操作按钮插槽; <br /> slot-scope 包括 `value`(对应 `Item`) `index`(对应 `Item` 的索引) | slot | - |
| style | 样式| string | - |
| tabsBarClassName | tabs bar类名 | string | - |
| tabClassName | tab类名 | string | - |
| tabActiveClassName | tab active类名 | string | - |
| title | 自定义 `Items` 标题；<br /> slot-scope 包括 `value`(对应 `Item`) `index`(对应 `Item` 的索引) | slot | - |
| type | 类型，`basic`(基础)，`capsule`(胶囊)，`mixin`(混合) | string | `basic` |
| onChange | 面板切换时候，触发回调 | (index: number, e: [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void| - |

### Item
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| title | 标题 | string | - |

在 Item 里除了可以有 `title`，还可以加上自定义的属性，比如 `content`, `badge` 等，这些属性可使用使用 `sloc-scope` 访问：


```js
Page({
  data: {
    items: [
      {
        title: 'tab 1',
        content: 'tab 1 content',
      },
      {
        title: 'tab 2',
        content: 'tab 2 content',
      },
      {
        title: 'tab 3',
        content: 'tab 3 content',
      },
    ]
  }
})
```

```html
<tabs items="{{items}}">
  <view slot="title" slot-scope="tab">
    {{tab.index}}: {{tab.value.title}}, {{tab.value.content}}
  </view>
</tabs>
```

## FAQ
### onChange只有修改才能出发，想要在触发current标签的点击需要怎么做
可以受用slot来自定义
```html
<tabs items="{{items}}" onChange="onChange">
  <view slot="title" slot-scope="tab" data-index="{{tab.index}}" onTap="onTap">
    {{tab.value.title}}
  </view>
</tabs>
```

```js
Page({
  onChange(index) {
    console.log(index);
  },
  onTap(e) {
    const { index } = e.currentTarget.dataset;
  }
})
```