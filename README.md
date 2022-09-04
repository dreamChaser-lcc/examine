
# 在线链接

[项目地址](http://licc.cloud/admin/)

[组件库文档地址](http://licc.cloud/stars-lib-docs/)

# umi project

## Getting Started

yarn Install dependencies

```bash
yarn
```

Start the dev server,

```bash
yarn start
```

or

npm Install dependencies,recommend use npm 7+

```bash
npm install
```

Start the dev server,

```bash
npm start
```

## 项目目录

```
examine
├─ mock               // 模拟数据
├─ nodeServer         // nodeJs的一些demo
├─ public             // 全局静态资源
├─ Readme             // 学习笔记
├─ src  
│  ├─ api             // api函数
│  ├─ assets          // 静态资源
│  ├─ axios           // CORS 跨域 请求封装
│  ├─ component       // 组件
│  ├─ constants       // 常量
│  ├─ enum            // 枚举
│  ├─ globalContext   // useContext + useReducer实现mini状态管理
│  ├─ hooks           // 自定义hooks
│  ├─ layouts         // 布局
│  ├─ pages           // 页面
│  ├─ plugins         // umi的插件
│  └─ utils           // 方法
├─ config.router.ts   // 布局菜单配置
├─ package.json
├─ README.md
├─ tsconfig.json      // ts配置
├─ typings.d.ts       // ts第三方声明
├─ yarn-error.log
└─ yarn.lock
```

## 提交规范

- :sparkles:feat：新功能（feature）
- :bug:fix：修补bug
- :memo:docs：文档（documentation）
- :lipstick:style：格式（不影响代码运行的变动）
- :art:refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- :wrench:chore：构建过程或辅助工具的变动
- :zap:perf：性能优化（performance）
- tmp：临时提交（可用于非 master 分支）

## 合并代码

### git rebase 变基合并

```bash
git rebase xxx //xxx为分支名称 
```

### git merge （会污染提交记录提交记录会多出一条merge oldBranch into newBranch的提交记录）

```bash
git merge xxx // xxx为新分支
```
