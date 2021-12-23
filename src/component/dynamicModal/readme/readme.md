# 动态弹窗原理

## 实现拖拽
- 拖拽必须是`绝对定位或者固定定位`(fixed)
- 通过定位`元素的top,left变化`实现
- 通过鼠标`按下并移动`事件计算具体的top、left

主要涉及方法：
|方法|作用|
|----|-----|
|`offsetTop` |元素距上方的距离|

|`offsetWidth` |当前元素的宽 = border+padding+width|

|document.documentElement.clientWidth |可视区总宽|

|mouseEvent.clientX |光标当前X轴位置|

|mouseEvent.clientY |光标当前Y轴位置|

拖拽top和计算方式

光标到元素左侧边界的距离 = mouseEvent.clientX(初始) - dom.offsetLeft;
移动光标的距离 = moveEvent.clientX(移动后) 
元素left的长度 = 移动光标的距离 - 光标到元素左侧边界的距离
元素top的长度 = 移动光标的距离- 光标到元素顶部边界的距离(同上)

```ts
/**获取元素*/
// 方式一
const domEL = domcument.querySelector('#dom');
domEL.offsetLeft
domEl.offsetRight
domEl.offsetTop
domEl.offsetBoottom
domEl.offsetWidth
domEl.offsetHeight 

// 方式二 效果同上
const bounding = modalRef.current!.getBoundingClientRect();
const {left,right,top,bottom,width,height} = bounding; 

/**获取元素样式 比如padding,top,margin*/
const dom = domcument.querySelector('#dom');
// dom的样式
const allstyle = document.defaultView?.getComputedStyle(dom);
const { padding,top,margin} = allstyle;

/**设置样式*/
const domEL = domcument.querySelector('#dom');
domEl.style.top = '200px';

```

## 实现延展宽或者高
- 拖拽必须是`绝对定位或者固定定位`(fixed)
- 通过定位`元素的top,left变化`实现,且同时扩展`width和height`
- 扩展的同时定位top,left要相对的移动
- 通过鼠标`按下并移动`事件计算具体的top、left

### 向上延展
dom的`高度` = offsetHeight(原高度) + (offsetTop(顶距) - moveEvent.clientY(光标移动后的`Y轴`位置))
dom.style.top = moveEvent.clientY
### 向下延展
dom的`高度` = moveEvent.clientY - offsetTop(顶距)
dom.style.bottom =  document.documentELement.clientHeight(可视区高) - moveEvent.clientY
### 向左延展
dom的`宽度` = offsetWidth(原宽度) + (offsetLeft(左侧距) - moveEvent.clientX(光标移动后的`X轴`位置))
dom.style.left = moveEvent.clientX
### 向右延展
dom的`宽度` =   moveEvent.clientX - offsetLeft(左侧距)
dom.style.right =  document.documentELement.clientWidth(可视区宽) - moveEvent.clientX