# Echarts学习

## react中使用，安装命令
```CLI
  $ npm install --save echarts-for-react

  # `echarts` is the peerDependence of `echarts-for-react`, you can install echarts with your own version.
  $ npm install --save echarts
```

## 关于数据集(dataset)

### 格式
`对象数组形式`
```js
 dataset: {
    // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
    // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
    // 如果不指定 dimensions，也可以通过指定 series.encode
    dimensions: ['product', '2015', '2016', '2017'],
    source: [
      { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
      { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
      { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
    ]
  },
```
`数组形式`
```js
 dataset: {
    source: [
      ['product', '2012', '2013', '2014', '2015'],
      ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
      ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
      ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
    ]
  },
```
### 排列顺序
`默认是一列一组数据`column排序
```js
  // 相当于
  product = ['Matcha Latte','Milk Tea','Cheese Cocoa'];
  '2012' = [41.1 , 86.5, 24.1];
  '2013' = [30.4 , 92.1, 67.2];
  ...
```
`可在series.seriesLayoutBy`切换排序方式
- seriesLayoutBy=row|column
```js
    series: [
    // 这几个系列会出现在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
    { type: 'bar', seriesLayoutBy: 'row' }, // Matcha Latte = [ 41.1, 30.4, 65.1, 53.3]
    { type: 'bar', seriesLayoutBy: 'row' }, // Milk Tea =  [ 86.5, 92.1, 85.7, 83.1],
    { type: 'bar', seriesLayoutBy: 'row' }, // Cheese Cocoa = [ 24.1, 67.2, 79.5, 86.4]
    // 这几个系列会出现在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
    { type: 'bar', }, // '2012' = [41.1 , 86.5, 24.1];
    { type: 'bar',},  // '2013' = [30.4 , 92.1, 67.2];
    { type: 'bar',},  
  ]
```

### 官方文档
<https://echarts.apache.org/handbook/zh/concepts/dataset/>

## encode (搭配数据集使用)
### 使用
```js
option = {
    dataset: {
        source: [
            // 每一列称为一个『维度』。
            // 这里分别是维度 0、1、2、3、4。
            [12, 44, 55, 66, 2],
            [23, 6, 16, 23, 1],
            ...
        ]
    },
    series: {
        type: 'xxx',
        encode: {
            x: [3, 1, 5],      // 表示维度 3、1、5 映射到 x 轴。
            y: 2,              // 表示维度 2 映射到 y 轴。
            tooltip: [3, 2, 4] // 表示维度 3、2、4 会在 tooltip 中显示。
        }
    }
}
```
### 可通过dimensions(维度)，命名
```js
series: {
    type: 'xxx',
    dimensions: ['date', 'open', 'close', 'highest', 'lowest'],
    encode: {
        x: 'date',
        y: ['open', 'close', 'highest', 'lowest']
    }
}
```
### 官网
<https://echarts.apache.org/zh/option.html#series-scatter.encode>