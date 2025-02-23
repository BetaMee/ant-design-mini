---
nav:
  path: /components
group:
  title: 信息输入
  order: 10
toc: 'content'
---
# Checklist 可勾选列表
列表的勾选操作
## 何时使用
- 在一组列表项中选择一个或多个
- 可勾选列表的使用需要默认至少勾选一项，方便用户了解列表是可以勾选的

## 代码示例
<code src='pages/Checklist/index'></code>

## API
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名| string | - |
| content | CheckListItem自定义内容区作用域插槽，接收item参数  | slot | - |
| icon | 自定义选中Icon插槽 | slot |  - |
| multiple |  是否支持多选 | boolean | false | 
| options | 配置每一列的选项 | [ChecklistItem](#checklistitem)[] | [] |
| style | 样式| string | - |
| value | 选中数据 | (string \| number)[] | [] | 
| onChange | 选中项发生变化，触发回调 | (value: string \| number&#124; [], column: [ChecklistItem](#checklistitem), event:  [Event](https://opendocs.alipay.com/mini/framework/event-object)) => void |

### ChecklistItem

| 参数 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| description | 描述 | string | - |
| disabled | 是否禁用 | boolean | false |
| image | 图片 | string | - |
| readonly | 是否只读 | boolean | false |
| title | 标题 | string | - |
| value | 值 | string | - |


