以下是 `crm-web` 目录结构的注释：

```plaintext
|-- crm-web                      # 项目根目录
    |-- .editorconfig            # 代码格式配置文件
    |-- .env                     # 环境变量配置文件
    |-- .env.dev                 # 开发环境变量配置文件
    |-- .env.prod                # 生产环境变量配置文件
    |-- .eslintignore            # ESLint 忽略配置文件
    |-- .eslintrc.cjs            # ESLint 配置文件
    |-- .gitignore               # Git 忽略文件
    |-- .prettierignore          # Prettier 忽略配置文件
    |-- .prettierrc              # Prettier 配置文件
    |-- auto-imports.d.ts        # 自动导入的类型声明
    |-- components.d.ts          # 组件的类型声明
    |-- env.d.ts                 # 环境变量的类型声明
    |-- index.html               # 入口 HTML 文件
    |-- package-lock.json        # 依赖锁定文件
    |-- package.json             # 项目配置文件
    |-- pnpm-lock.yaml           # pnpm 依赖锁定文件
    |-- README.md                # 项目说明文件
    |-- tsconfig.json            # TypeScript 配置文件
    |-- tsconfig.node.json       # Node.js 环境的 TypeScript 配置文件
    |-- vite.config.ts           # Vite 配置文件
    |-- .vscode                  # VSCode 配置文件目录
    |   |-- extensions.json      # VSCode 插件推荐配置
    |-- public                   # 公共静态资源目录
    |   |-- print-lock.css       # 打印锁定样式表
    |   |-- vite.svg             # Vite logo 文件
    |-- report                   # 报告文件目录
    |   |-- html                 # HTML 报告目录
    |       |-- index.html       # HTML 报告入口文件
    |       |-- jscpd-report.json# 代码重复检测报告
    |       |-- js               # JavaScript 文件目录
    |       |   |-- prism.js     # 代码高亮脚本
    |       |-- styles           # 样式文件目录
    |           |-- prism.css    # 代码高亮样式表
    |           |-- tailwind.css # TailwindCSS 样式表
    |-- src                      # 源代码目录
        |-- @wangeditor.d.ts     # WangEditor 类型声明
        |-- App.vue              # Vue 应用入口组件
        |-- main.ts              # 应用入口文件
        |-- vite-env.d.ts        # Vite 环境变量类型声明
        |-- api                  # API 接口目录
        |   |-- customerInquiry.ts       # 客户查询接口
        |   |-- login.ts                 # 登录接口
        |   |-- myAccount.ts             # 我的账户接口
        |   |-- workOrderList.ts         # 工单列表接口
        |   |-- appointDemonstration     # 指定示范模块
        |   |   |-- index.ts             # 指定示范接口
        |   |-- baseData                 # 基础数据模块
        |   |   |-- index.ts             # 基础数据接口
        |   |   |-- addressManagement    # 地址管理模块
        |   |   |   |-- index.ts         # 地址管理接口
        |   |   |-- contract             # 合同模块
        |   |   |   |-- index.ts         # 合同接口
        |   |   |-- customer             # 客户模块
        |   |   |   |-- index.ts         # 客户接口
        |   |   |   |-- type.ts          # 客户类型声明
        |   |   |-- product              # 产品模块
        |   |       |-- index.ts         # 产品接口
        |   |       |-- types.ts         # 产品类型声明
        |   |-- commonApi                # 通用 API 模块
        |   |   |-- index.ts             # 通用 API 接口
        |   |-- demo-service             # 示例服务模块
        |   |-- finance                  # 财务模块
        |   |   |-- finance              # 财务接口
        |   |   |   |-- index.ts         # 财务接口
        |   |   |-- paymentSituation     # 支付情况接口
        |   |       |-- index.ts         # 支付情况接口
        |   |       |-- type.ts          # 支付情况类型声明
        |   |-- flowProxyManage          # 流程代理管理模块
        |   |   |-- flowProxy            # 流程代理接口
        |   |       |-- index.ts         # 流程代理接口
        |   |       |-- type.ts          # 流程代理类型声明
        |   |-- operation                # 运营模块
        |   |   |-- messageRecord        # 消息记录接口
        |   |       |-- index.ts         # 消息记录接口
        |   |-- pms                      # PMS 模块
        |   |   |-- pmsPuzzleLuckyRecordApi.ts # PMS 幸运记录接口
        |   |-- programme                # 项目模块
        |   |   |-- index.ts             # 项目接口
        |   |   |-- types.ts             # 项目类型声明
        |   |-- project                  # 项目管理模块
        |   |   |-- implementOperation   # 实施操作接口
        |   |   |   |-- index.ts         # 实施操作接口
        |   |   |-- implementOutings     # 实施出行接口
        |   |   |   |-- index.ts         # 实施出行接口
        |   |   |-- implementPeriod      # 实施期间接口
        |   |   |   |-- index.ts         # 实施期间接口
        |   |   |-- presaleRecord        # 售前记录接口
        |   |   |   |-- index.ts         # 售前记录接口
        |   |   |-- project              # 项目接口
        |   |   |   |-- index.ts         # 项目接口
        |   |   |   |-- type.ts          # 项目类型声明
        |   |   |-- projectExpense       # 项目费用接口
        |   |   |   |-- index.ts         # 项目费用接口
        |   |   |-- projectSchedule      # 项目进度接口
        |   |   |   |-- index.ts         # 项目进度接口
        |   |   |   |-- types.ts         # 项目进度类型声明
        |   |   |-- serverConfig         # 服务器配置接口
        |   |       |-- index.ts         # 服务器配置接口
        |   |-- report                   # 报告模块
        |   |   |-- evaluationReport     # 评估报告接口
        |   |   |   |-- index.ts         # 评估报告接口
        |   |   |   |-- types.ts         # 评估报告类型声明
        |   |   |-- implementerResponseReport # 实施者响应报告接口
        |   |   |   |-- index.ts         # 实施者响应报告接口
        |   |   |   |-- types.ts         # 实施者响应报告类型声明
        |   |   |-- technicationReport   # 技术报告接口
        |   |       |-- index.ts         # 技术报告接口
        |   |       |-- types.ts         # 技术报告类型声明
        |   |-- setting                  # 设置模块
        |   |   |-- approvalNodeManage   # 审批节点管理接口
        |   |   |   |-- index.ts         # 审批节点管理接口
        |   |   |   |-- types.ts         # 审批节点管理类型声明
        |   |   |-- calendarManage       # 日历管理接口
        |   |   |   |-- index.ts         # 日历管理接口
        |   |   |   |-- types.ts         # 日历管理类型声明
        |   |   |-- dictManage           # 字典管理接口
        |   |   |   |-- index.ts         # 字典管理接口
        |   |   |   |-- types.ts         # 字典管理类型声明
        |   |   |-- evaluationContentManage # 评估内容管理接口
        |   |   |   |-- index.ts         # 评估内容管理接口
        |   |   |   |-- types.ts         # 评估内容管理类型声明
        |   |   |-- messageManage        # 消息管理接口
        |   |   |   |-- index.ts         # 消息管理接口
        |   |   |   |-- types.ts         # 消息管理类型声明
        |   |   |-- tokenManage          # 令牌管理接口
        |   |       |-- index.ts

 # 令牌管理接口
        |   |       |-- types.ts         # 令牌管理类型声明
        |   |-- system                   # 系统模块
        |   |   |-- index.ts             # 系统接口
        |   |   |-- globalConfig         # 全局配置接口
        |   |   |   |-- index.ts         # 全局配置接口
        |   |   |   |-- types.ts         # 全局配置类型声明
        |   |   |-- menuManage           # 菜单管理接口
        |   |   |   |-- index.ts         # 菜单管理接口
        |   |   |-- personManage         # 人员管理接口
        |   |   |   |-- index.ts         # 人员管理接口
        |   |   |-- roleManage           # 角色管理接口
        |   |       |-- index.ts         # 角色管理接口
        |   |-- types                    # 类型声明目录
        |       |-- base.ts              # 基础类型声明
        |       |-- workOrder.ts         # 工单类型声明
        |-- assets                      # 资源目录
        |   |-- vue.svg                 # Vue logo 文件
        |   |-- css                     # CSS 文件目录
        |   |   |-- common.scss         # 公共样式表
        |   |   |-- index.scss          # 入口样式表
        |   |   |-- reset.scss          # 重置样式表
        |   |-- iconfont                # 图标字体目录
        |   |   |-- demo.css            # 图标字体示例样式表
        |   |   |-- demo_index.html     # 图标字体示例 HTML
        |   |   |-- frown.svg           # 表情图标文件
        |   |   |-- frownfull.svg       # 表情图标文件
        |   |   |-- iconfont.css        # 图标字体样式表
        |   |   |-- iconfont.js         # 图标字体脚本
        |   |   |-- iconfont.json       # 图标字体 JSON 文件
        |   |   |-- iconfont.ttf        # 图标字体 TTF 文件
        |   |   |-- iconfont.woff       # 图标字体 WOFF 文件
        |   |   |-- iconfont.woff2      # 图标字体 WOFF2 文件
        |   |   |-- meh.svg             # 表情图标文件
        |   |   |-- mehfull.svg         # 表情图标文件
        |   |   |-- smile.svg           # 表情图标文件
        |   |   |-- smilefull.svg       # 表情图标文件
        |   |-- img                     # 图片目录
        |       |-- banner.png          # 横幅图片
        |       |-- banner1.jpg         # 横幅图片
        |       |-- basics-service1.jpg # 基础服务图片
        |       |-- basics-service2.jpg # 基础服务图片
        |       |-- basics-service3.jpg # 基础服务图片
        |       |-- basics-service4.jpg # 基础服务图片
        |       |-- HT-logo.jpg         # HT logo 图片
        |       |-- iphone-active.png   # 活动图片
        |       |-- loading_big.gif     # 加载动画
        |       |-- logo.png            # Logo 图片
        |       |-- qrcode-bg.png       # 二维码背景图片
        |       |-- question.png        # 问题图片
        |       |-- wechat-option-active.png # 微信选项活动图片
        |-- components                  # 组件目录
        |   |-- customNode              # 自定义节点组件
        |   |   |-- doingDiamondNode.ts # 正在处理的菱形节点
        |   |   |-- doingRadiusRectNode.ts # 正在处理的圆角矩形节点
        |   |   |-- doingRectNode.ts    # 正在处理的矩形节点
        |   |   |-- doneDiamondNode.ts  # 完成的菱形节点
        |   |   |-- doneRadiusRectNode.ts # 完成的圆角矩形节点
        |   |   |-- doneRectNode.ts     # 完成的矩形节点
        |   |   |-- README.md           # 组件说明文档
        |   |   |-- todoDiamondNode.ts  # 待办的菱形节点
        |   |   |-- todoRadiusRectNode.ts # 待办的圆角矩形节点
        |   |   |-- todoRectNode.ts     # 待办的矩形节点
        |   |-- ht-button-group         # 按钮组组件
        |   |   |-- index.vue           # 按钮组组件实现
        |   |-- ht-detailLayout         # 详情布局组件
        |   |   |-- index.vue           # 详情布局组件实现
        |   |-- ht-transition           # 过渡组件
        |   |   |-- index.vue           # 过渡组件实现
        |   |-- mpAdvancedSearch        # 高级搜索组件
        |   |   |-- index.vue           # 高级搜索组件实现
        |   |-- mpAsideTree             # 侧边树组件
        |   |   |-- index.vue           # 侧边树组件实现
        |   |-- mpAutocomplete          # 自动完成组件
        |   |   |-- index.vue           # 自动完成组件实现
        |   |-- mpDialog                # 对话框组件
        |   |   |-- index.vue           # 对话框组件实现
        |   |-- mpDragBall              # 拖拽球组件
        |   |   |-- index.vue           # 拖拽球组件实现
        |   |-- mpForm                  # 表单组件
        |   |   |-- index.vue           # 表单组件实现
        |   |-- mpFormDialog            # 表单对话框组件
        |   |   |-- index.vue           # 表单对话框组件实现
        |   |-- mpListLayout            # 列表布局组件
        |   |   |-- index.vue           # 列表布局组件实现
        |   |-- mpListLayoutAside       # 侧边列表布局组件
        |   |   |-- index.vue           # 侧边列表布局组件实现
        |   |-- mpPagination            # 分页组件
        |   |   |-- index.vue           # 分页组件实现
        |   |-- mpPrint                 # 打印组件
        |   |   |-- index.vue           # 打印组件实现
        |   |-- mpSearchBox             # 搜索框组件
        |   |   |-- config.ts           # 搜索框配置
        |   |   |-- index.vue           # 搜索框组件实现
        |   |-- mpSelectLazy            # 懒加载选择组件
        |   |   |-- index.vue           # 懒加载选择组件实现
        |   |-- mpTableBox              # 表格框组件
        |   |   |-- index.vue           # 表格框组件实现
        |   |-- mpTableBoxValid         # 验证表格框组件
        |   |   |-- index.vue           # 验证表格框组件实现
        |   |-- mpUpload                # 上传组件
        |   |   |-- index.vue           # 上传组件实现
        |   |-- provincialCascader      # 省级联动选择组件
        |       |-- index.vue           # 省级联动选择组件实现
        |-- composition                # 组合 API 目录
        |   |-- ListClass.ts            # 列表类
        |-- directives                 # 指令目录
        |   |-- btnDebounce.ts          # 按钮防抖指令
        |   |-- btnpermission.ts        # 按钮权限指令
        |   |-- hasRight.ts             # 权限指令
        |   |-- index.ts                # 指令入口
        |   |-- inputFocus.ts           # 输入框聚焦指令
        |   |-- selectLoad.ts           # 选择加载指令
        |-- global                     # 全局配置目录
        |   |-- constants.ts            # 全局常量
        |   |-- register-icons.ts       # 注册图标
        |-- hooks                      # 自定义 Hook 目录
        |   |-- useTableSort.ts         # 表格排序 Hook
        |-- layout                     # 布局组件目录
        |   |-- index.vue               # 布局组件实现
        |   |-- component               # 布局组件目录
        |       |-- main-header         # 主头部组件
        |       |   |-- main-header.vue # 主头部组件实现
        |       |   |-- c-cpns          # 子组件目录
        |       |       |-- header-crumb.vue # 头部面包屑组件
        |       |       |-- header-info.vue  # 头部信息组件


 |       |-- main-menu           # 主菜单组件
        |           |-- main-menu.vue   # 主菜单组件实现
        |           |-- menuTree.vue    # 菜单树组件
        |-- router                     # 路由目录
        |   |-- index.ts                # 路由配置
        |   |-- baseData                # 基础数据路由
        |   |   |-- baseDataRoute.ts    # 基础数据路由配置
        |   |-- finance                 # 财务路由
        |   |   |-- financeRoute.ts     # 财务路由配置
        |   |-- programme               # 项目路由
        |   |   |-- programmeRoute.ts   # 项目路由配置
        |   |-- project                 # 项目路由
        |   |   |-- projectRoute.ts     # 项目路由配置
        |   |-- report                  # 报告路由
        |   |   |-- reportRoute.ts      # 报告路由配置
        |   |-- system                  # 系统路由
        |   |   |-- systemRoute.ts      # 系统路由配置
        |   |-- workOrderManage         # 工单管理路由
        |       |-- workOrderManageRoute.ts # 工单管理路由配置
        |-- service                    # 服务目录
        |   |-- index.ts                # 服务入口
        |   |-- config                  # 配置目录
        |   |   |-- index.ts            # 配置入口
        |   |-- request                 # 请求目录
        |       |-- index.ts            # 请求入口
        |       |-- type.ts             # 请求类型声明
        |-- store                      # 状态管理目录
        |   |-- index.ts                # 状态管理入口
        |   |-- modules                 # 模块目录
        |       |-- common.ts           # 公共模块
        |       |-- user.ts             # 用户模块
        |-- styles                     # 样式目录
        |   |-- callapse.scss           # 折叠样式表
        |   |-- element.scss            # 元素样式表
        |-- types                      # 类型声明目录
        |   |-- qrcode.d.ts             # 二维码类型声明
        |-- utils                      # 工具目录
        |   |-- index.ts                # 工具入口
        |   |-- cache                   # 缓存工具目录
        |       |-- index.ts            # 缓存工具入口
        |-- views                      # 视图目录
            |-- accountManage          # 账户管理视图
            |   |-- myAccount          # 我的账户视图
            |       |-- index.vue      # 我的账户视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- appointDemonList       # 指定示范列表视图
            |   |-- index.vue          # 指定示范列表视图实现
            |   |-- config             # 配置目录
            |       |-- index.config.ts # 配置文件
            |-- appointDemonstration   # 指定示范视图
            |   |-- index.vue          # 指定示范视图实现
            |-- baseData               # 基础数据视图
            |   |-- baseData.scss      # 基础数据样式表
            |   |-- addressManagement  # 地址管理视图
            |   |   |-- index.vue      # 地址管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- contractDetail     # 合同详情视图
            |   |   |-- index.vue      # 合同详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- contractManage     # 合同管理视图
            |   |   |-- index.vue      # 合同管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- customersDetail    # 客户详情视图
            |   |   |-- index.vue      # 客户详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- customersManage    # 客户管理视图
            |   |   |-- index.vue      # 客户管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- productManage      # 产品管理视图
            |       |-- index.vue      # 产品管理视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- customerManage         # 客户管理视图
            |   |-- customerInquiry    # 客户查询视图
            |   |   |-- index.vue      # 客户查询视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- cutomerMigration   # 客户迁移视图
            |   |   |-- index.vue      # 客户迁移视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- myCustomer         # 我的客户视图
            |       |-- index.vue      # 我的客户视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- evaluation             # 评估视图
            |   |-- evaluationContentManage # 评估内容管理视图
            |   |   |-- index.vue      # 评估内容管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- evaluationReport   # 评估报告视图
            |       |-- index.vue      # 评估报告视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- finance                # 财务视图
            |   |-- types.ts           # 财务类型声明
            |   |-- utils.ts           # 财务工具文件
            |   |-- workOrder.scss     # 工单样式表
            |   |-- financeDetail      # 财务详情视图
            |   |   |-- index.vue      # 财务详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- financeManage      # 财务管理视图
            |   |   |-- index.vue      # 财务管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- paymentSituation   # 支付情况视图
            |       |-- index.vue      # 支付情况视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- flowProxyManage        # 流程代理管理视图
            |   |-- flowProxy          # 流程代理视图
            |       |-- index.vue      # 流程代理视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- gateWay                # 网关视图
            |   |-- index.config.ts    # 配置文件
            |   |-- index.vue          # 网关视图实现
            |   |-- component          # 网关组件目录
            |       |-- wxLogin.vue    # 微信登录组件
            |-- listPageTest           # 列表页面测试视图
            |-- not-found              # 404 未找到页面视图
            |   |-- NotFound.vue       # 404 页面实现
            |-- operation              # 运营视图
            |   |-- messageRecord      # 消息记录视图
            |       |-- index.vue      # 消息记录视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- pms                    # PMS 模块视图
            |   |-- pmsPuzzleLuckyRecord # PMS 幸运记录视图
            |       |-- index.vue      # PMS 幸运记录视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |           |-- question.ts #

 问题文件
            |-- programme              # 项目视图
            |   |-- programmeEditor    # 项目编辑器视图
            |   |   |-- index.vue      # 项目编辑器视图实现
            |   |-- programmeManage    # 项目管理视图
            |   |   |-- index.vue      # 项目管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- programmeView      # 项目视图
            |       |-- index.vue      # 项目视图实现
            |-- project                # 项目管理视图
            |   |-- baseData.scss      # 基础数据样式表
            |   |-- utils.ts           # 项目管理工具文件
            |   |-- components         # 项目管理组件目录
            |   |   |-- serverConfigHistoryDialog # 服务器配置历史对话框组件
            |   |       |-- index.vue  # 服务器配置历史对话框组件实现
            |   |       |-- config     # 配置目录
            |   |           |-- index.config.ts # 配置文件
            |   |-- implementOperationDetail # 实施操作详情视图
            |   |   |-- index.vue      # 实施操作详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- implementOperationManage # 实施操作管理视图
            |   |   |-- index.vue      # 实施操作管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- implementOutingsDetail # 实施出行详情视图
            |   |   |-- index.vue      # 实施出行详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- implementOutingsManage # 实施出行管理视图
            |   |   |-- index.vue      # 实施出行管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- implementPeriodDetail # 实施期间详情视图
            |   |   |-- index.vue      # 实施期间详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- implementPeriodManage # 实施期间管理视图
            |   |   |-- index.vue      # 实施期间管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- presaleRecordDetail # 售前记录详情视图
            |   |   |-- index.vue      # 售前记录详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- presaleRecordManage # 售前记录管理视图
            |   |   |-- index.vue      # 售前记录管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- projectDetail      # 项目详情视图
            |   |   |-- index.vue      # 项目详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- projectExpenseDetail # 项目费用详情视图
            |   |   |-- index.vue      # 项目费用详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- projectExpenseManage # 项目费用管理视图
            |   |   |-- index.vue      # 项目费用管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- projectManage      # 项目管理视图
            |   |   |-- index.vue      # 项目管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- projectScheduleDetail # 项目进度详情视图
            |   |   |-- index.vue      # 项目进度详情视图实现
            |   |   |-- components     # 项目进度组件目录
            |   |   |   |-- flow.vue   # 流程组件
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- projectScheduleManage # 项目进度管理视图
            |   |   |-- index.vue      # 项目进度管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- serverConfigDetail # 服务器配置详情视图
            |   |   |-- index.vue      # 服务器配置详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- serverConfigManage # 服务器配置管理视图
            |       |-- index.vue      # 服务器配置管理视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- report                 # 报告视图
            |   |-- implementerResponseReport # 实施者响应报告视图
            |   |   |-- index.vue      # 实施者响应报告视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- implementResponseDetail # 实施响应详情视图
            |   |   |-- index.vue      # 实施响应详情视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- technicianReport   # 技术报告视图
            |       |-- index.vue      # 技术报告视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |           |-- logo.ts    # Logo 文件
            |           |-- panel.ts   # 面板文件
            |-- setting                # 设置视图
            |   |-- approvalNodeManage # 审批节点管理视图
            |   |   |-- index.vue      # 审批节点管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- calendarManage     # 日历管理视图
            |   |   |-- index.vue      # 日历管理视图实现
            |   |-- dictManage         # 字典管理视图
            |   |   |-- index.vue      # 字典管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- evaluationContentManage # 评估内容管理视图
            |   |   |-- index.vue      # 评估内容管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- messageManage      # 消息管理视图
            |   |   |-- index.vue      # 消息管理视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- tokenManage        # 令牌管理视图
            |       |-- index.vue      # 令牌管理视图实现
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- system                 # 系统视图
            |   |-- globalConfig       # 全局配置视图
            |   |   |-- index.vue      # 全局配置视图实现
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- menuManager        # 菜单管理视图
            |   |   |-- index.vue      # 菜单管理视图实现
            |   |   |-- component      # 菜单管理组件目录
            |   |   |

   |-- menuBtnConfigDialog.vue # 菜单按钮配置对话框组件
            |   |   |   |-- menuBtnConfigDialogEdit.vue # 菜单按钮配置编辑对话框组件
            |   |   |   |-- seachConfigDraw.vue # 搜索配置抽屉组件
            |   |   |-- config         # 配置目录
            |   |   |   |-- index.config.ts # 配置文件
            |   |   |   |-- menuBtnConfigDialog.config.ts # 菜单按钮配置对话框配置文件
            |   |   |-- utils          # 工具文件目录
            |   |       |-- elmessageBoxChose.ts # 消息框选择工具
            |   |-- personManage       # 人员管理视图
            |   |   |-- index.vue      # 人员管理视图实现
            |   |   |-- personManageEdit.vue # 人员管理编辑视图
            |   |   |-- components     # 人员管理组件目录
            |   |   |   |-- deptEditDialog.vue # 部门编辑对话框组件
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- roleManage         # 角色管理视图
            |   |   |-- index.vue      # 角色管理视图实现
            |   |   |-- component      # 角色管理组件目录
            |   |   |   |-- emPowerDialog.vue # 授权对话框组件
            |   |   |   |-- roleManageAssignDialog.vue # 角色管理分配对话框组件
            |   |   |   |-- roleManageDataCtrl.vue # 角色管理数据控制组件
            |   |   |   |-- roleManageDataCtrlEdit.vue # 角色管理数据控制编辑组件
            |   |   |-- config         # 配置目录
            |   |       |-- index.config.ts # 配置文件
            |   |-- userManage         # 用户管理视图
            |       |-- index.vue      # 用户管理视图实现
            |       |-- component      # 用户管理组件目录
            |       |   |-- addEditUserDialog.vue # 添加编辑用户对话框组件
            |       |   |-- editPswDialog.vue # 编辑密码对话框组件
            |       |-- config         # 配置目录
            |           |-- index.config.ts # 配置文件
            |-- workOrderManage        # 工单管理视图
                |-- types.ts           # 工单类型声明
                |-- utils.ts           # 工单工具文件
                |-- workOrder.scss     # 工单样式表
                |-- createWorkOrderCustomer # 创建客户工单视图
                |   |-- index.vue      # 创建客户工单视图实现
                |   |-- config         # 配置目录
                |       |-- index.config.ts # 配置文件
                |-- createWorkOrderNonCustomer # 创建非客户工单视图
                |   |-- index.vue      # 创建非客户工单视图实现
                |   |-- config         # 配置目录
                |       |-- index.config.ts # 配置文件
                |-- workOrderCustomer  # 客户工单视图
                |   |-- index.vue      # 客户工单视图实现
                |   |-- config         # 配置目录
                |       |-- index.config.ts # 配置文件
                |-- workOrderDetail    # 工单详情视图
                |   |-- index.vue      # 工单详情视图实现
                |   |-- components     # 工单详情组件目录
                |   |   |-- flow.vue   # 流程组件
                |   |   |-- customNode # 自定义节点组件目录
                |   |       |-- doingDiamondNode.ts # 正在处理的菱形节点
                |   |       |-- doingRadiusRectNode.ts # 正在处理的圆角矩形节点
                |   |       |-- doingRectNode.ts # 正在处理的矩形节点
                |   |       |-- doneDiamondNode.ts # 完成的菱形节点
                |   |       |-- doneRadiusRectNode.ts # 完成的圆角矩形节点
                |   |       |-- doneRectNode.ts # 完成的矩形节点
                |   |       |-- todoDiamondNode.ts # 待办的菱形节点
                |   |       |-- todoRadiusRectNode.ts # 待办的圆角矩形节点
                |   |       |-- todoRectNode.ts # 待办的矩形节点
                |   |-- config         # 配置目录
                |       |-- index.config.ts # 配置文件
                |-- workOrderEvaluation # 工单评估视图
                |   |-- index.vue      # 工单评估视图实现
                |-- workOrderList      # 工单列表视图
                |   |-- index.vue      # 工单列表视图实现
                |   |-- config         # 配置目录
                |       |-- index.config.ts # 配置文件
                |-- workOrderNonCustomer # 非客户工单视图
                    |-- index.vue      # 非客户工单视图实现
                    |-- components     # 非客户工单组件目录
                    |   |-- flow.vue   # 流程组件
                    |-- config         # 配置目录
                        |-- index.config.ts # 配置文件
```
