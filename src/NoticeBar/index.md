---
nav:
  path: /components
group:
  title: 引导提示
  order: 14
toc: 'content'
---
# NoticeBar 通告栏
展示一组消息通知
## 何时使用
用于当前页面内信息的通知，是一种较醒目的页面内通知方式

## 代码示例
<code src='pages/NoticeBar/index'></code>


## API
| 属性 | 说明 | 类型 | 默认值 |
| -----|-----|-----|-----|
| className | 类名 | string | - | 
| enableMarquee | 是否开启滚动动画 | boolean | false | 
| loop | 是否循环滚动，enableMarquee 为 true 时有效 | boolean | false | 
| mode | 通告类型，`link` 表示连接，整行可点；`closeable` 表示点击 x 可以关闭；不填时表示你右侧没有图标 | string | - | 
| style | 样式 | string | - |
| title | 标题 | string\|slot | - |
| visible |  是否显示 | boolean | false | 
| onTap |  点击通知栏右侧的图标（箭头或者叉），触发回调 | ()=>void | - | 


