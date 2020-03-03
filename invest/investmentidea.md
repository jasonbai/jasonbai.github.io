## 投资杂谈

## 量化交易

> 在线平台： 聚宽，优矿



### 教程

---

1. [量化交易零基础入门教程](https://www.joinquant.com/view/community/detail/8ec7aaaa899cf928550f89a104637f22)

### 书籍

---

* 对冲之王：华尔街量化投资传奇



### 学习日志

---

#### 2020.3  程序部分

> 2020.3.2

因为之前有点Python底子，所有程序基础部分理解的速度还可以，但代码经验少，熟悉一下聚宽上面特有**API**



#### 2020.2 开始学习

刚开始计划从学习[量化交易零基础入门教程](https://www.joinquant.com/view/community/detail/8ec7aaaa899cf928550f89a104637f22) 这套课程开始，聚宽目前提供的环境完全不需要本地化部署，在网页端可以搞定一切，看起来还提供本地端的多语言环境及对应的API接口，现阶段的我应该都能满足。语言方面，也就从Python开始进入好了，前面有一点点底子，从应用面上看，应该好过R这样的语言。



目录

- \- [x ] 初识量化交易
  - \- [x ] 为什么需要量化交易？
  - \- [ x] 何为量化交易？
  - \- [ x] 量化交易的价值何在？
  - \- [ x] 做量化交易需要准备什么？
  - \- [ x] 聚宽是什么？
- \- [ x] 量化策略的基本框架
  - \- [x ] 策略编写的基本框架及其实现
  - \- [ x] 回测的含义及其实现
  - \- [ x] 初步学习解决代码错误
  - \- [ x] 周期循环的开始时间
- \- [ x] python基本语法与变量
  - \- [ x] python是什么
  - \- [ x] python的基础语法
  - \- [ x] 变量与赋值
  - \- [ x] Python 保留字符
  - \- [ x] 打印 print
  - \- [ x] 全局变量
  - \- [ x] 基本数据类型-数字与字符串
  - \- [ x] 算术运算
  - \- [ x] 查看数据类型 type
  - \- [ x] 数据类型-列表与字典
- \- [ x ]下单、函数、API
  - \- [ x ] 函数与API
  - \- [ x ] 函数使用方法
  - \- [ x ] 如何看API文档
  - \- [ x ] 自定义函数方法
  - \- [ x ] 常用的下单函数
- \- [  ] 获取context数据、条件判断
  - \- [  ] context的含义
  - \- [  ] context的结构
  - \- [  ] context的读取方法
  - \- [  ] 条件判断语句
  - \- [  ] 止损的含义及其实现方法
- \- [  ] 循环、多股票策略
  - \- [  ] 学习用list存储多个股票
  - \- [  ] 学习使用for循环
  - \- [  ] 学习写一个简单的多股票策略
- \- [  ] 获取典型常用数据
  - \- [  ] 聚宽数据
  - \- [  ] 获取指数成分股
  - \- [  ] 获取股票行情数据
  - \- [  ] 获取股票财务数据
- \- [  ] 综合之前所学写一个策略
  - \- [  ] 灵感细化
  - \- [  ] 逐步实现策略
  - \- [  ] 调整与改进策略
- \- [  ] 策略评价与建立模拟
  - \- [  ] 评价策略回测的指标
  - \- [  ] 建立模拟交易
  - \- [  ] 未来函数
  - \- [  ] 运行过慢
  - \- [  ] 过拟合
  - \- [  ] 策略失效
- \- [  ] 投资研究功能
  - \- [  ] 投资研究功能简介
  - \- [  ] 新建notebook
  - \- [  ] 单元格及其类型
  - \- [  ] 命令模式与编辑模式
  - \- [  ] 应用举例
- \- [  ] 成长指路
  - \- [  ] 自学意识
  - \- [  ] 之后去学什么
  - \- [  ] 灵感来源
  - \- [  ] 关于职业化

### 策略存档

---

#### **1** 号策略

> 每日交易，如果亏损10%以上，则卖空。

```python
def initialize(context):
      run_daily(period,time='every_bar')
      g.security = '000001.XSHE'

def period(context):
      # 买入股票
      order(g.security, 100)
      # 获得股票持仓成本
      cost=context.portfolio.positions['000001.XSHE'].avg_cost
      # 获得股票现价
      price=context.portfolio.positions['000001.XSHE'].price
      # 计算收益率
      ret=price/cost-1
      # 打印日志
      print('成本价：%s' % cost)
      print('现价：%s' % price)
      print('收益率：%s' % ret)
      # 如果收益率小于-0.01，即亏损达到1%则卖出股票，幅度可以自己调，一般10%
      if ret<-0.01:
          order_target('000001.XSHE',0)
          print('触发止损')
```



#### 2 号策略

```Python
# 克隆自聚宽文章：https://www.joinquant.com/post/19532
# 标题：【API解析】context对象及获取方式
# 作者：JoinQuant技术支持

# 克隆自聚宽文章：https://www.joinquant.com/post/19532
# 标题：【API解析】context对象及获取方式
# 作者：JoinQuant技术支持

# 导入函数库
from jqdata import *

# 初始化函数，设定基准等等
def initialize(context):
    # 设定沪深300作为基准
    set_benchmark('000300.XSHG')
    # 开启动态复权模式(真实价格)
    set_option('use_real_price', True)
    # 过滤掉order系列API产生的比error级别低的log
    log.set_level('order', 'error')
    
    ### 设置账户类型 ###

    ## 设置两个账户，各账户资金为策略总资金的二分之一
    init_cash = context.portfolio.starting_cash/2

    # 设定subportfolios[0]为 股票和基金账户，初始资金为 init_cash 变量代表的数值
    # 设定subportfolios[1]为 期货账户，初始资金为 init_cash 变量代表的数值
    set_subportfolios([SubPortfolioConfig(cash=init_cash, type='stock'),\
                       SubPortfolioConfig(cash=init_cash, type='futures')])
    
    ## 设置股票池
    set_universe(['000001.XSHE','000002.XSHE'])
    
    # 开盘时运行 
    run_daily(market_open, time='every_bar', reference_security='000300.XSHG')
    # 收盘后运行
    run_daily(after_market_close, time='15:30:00', reference_security='000300.XSHG')

## 开盘时运行函数
def market_open(context):
    ## 下单股票
    stock = '000001.XSHE'
    
    if stock not in context.portfolio.positions:
        order(stock, 1000,side='long', pindex=0) 
    else:
        order(stock, 500,side='short', pindex=0)  #股票非融资融券不能做空,如果没有设置日志级别会提示下单失败
    
    ## 获取玉米主力期货合约并下单
    f = get_dominant_future('C')
    if f not in context.portfolio.positions:
        order(f, 10,side='long', pindex=1)
    else:
        order(f, 2,side='short', pindex=1)

## 收盘后运行函数
def after_market_close(context):
    ## current.dt
    print("当前单位时间的开始时间:{}".format(context.current_dt))
    print('-'*30) 
    
    ## previous.date
    print("前一个交易日:{}".format(context.previous_date))
    print('-'*30)

    ## universe
    print("股票池:{0}".format(context.universe))
    print('-'*30)
    
    ## 运行参数
    print("开始日期:{0}".format(context.run_params.start_date))
    print("结束日期:{0}".format(context.run_params.end_date))
    print("运行方式:{0}".format(context.run_params.type))
    print("运行频率:{0}".format(context.run_params.frequency))
    print('-'*30)
    
    ## subportfolio 
    # 股票账户
    print("股票账户")
    print("累计出入金:{0}".format(context.subportfolios[0].inout_cash))
    print("可用资金:{0}".format(context.subportfolios[0].available_cash))
    print("可取资金:{0}".format(context.subportfolios[0].transferable_cash))
    print("挂单锁住资金:{0}".format(context.subportfolios[0].locked_cash))
    print("账户所属类型:{0}".format(context.subportfolios[0].type))
    print ("多单的仓位:_______________")
    ####################position对象#######################################################
    long_positions_dict  = context.subportfolios[0].long_positions    # 这是一个dict,键是标的代码,值是对应的position对象
    for position in list(long_positions_dict.values()):  
        print("    标的:{0},总仓位:{1},标的价值:{2}".format(position.security,position.total_amount,position.value))
        
    print ("空单的仓位:_______________(股票账户没有空仓,不输出,可以根据字典长度判断是否有多/空仓位有无持仓)")
    short_positions_dict  = context.subportfolios[0].short_positions    # 这是一个dict,键是标的代码,值是对应的position对象
    for position in list(short_positions_dict.values()):
        print("    标的:{0},总仓位:{1},标的价值:{2}".format(position.security,position.total_amount,position.value))
    ##########################################################################
    print("持仓价值:{0}".format(context.subportfolios[0].positions_value))
    print("总资产:{0}".format(context.subportfolios[0].total_value))
    print('-'*30)
    
    # 期货账户
    print("期货账户")
    print("累计出入金:{0}".format(context.subportfolios[1].inout_cash))
    print("可用资金:{0}".format(context.subportfolios[1].available_cash))
    print("可取资金:{0}".format(context.subportfolios[1].transferable_cash))
    print("挂单锁住资金:{0}".format(context.subportfolios[1].locked_cash))
    print("账户所属类型:{0}".format(context.subportfolios[1].type))
    ####################position对象#######################################################
    print ("多单的仓位:_______________")
    long_positions_dict  = context.subportfolios[1].long_positions    # 这是一个dict,键是标的代码,值是对应的position对象
    for position in list(long_positions_dict.values()):  
        print("    标的:{0},总仓位:{1},标的价值:{2}".format(position.security,position.total_amount,position.value))
        
    print ("空单的仓位:_______________")
    short_positions_dict  = context.subportfolios[1].short_positions    # 这是一个dict,键是标的代码,值是对应的position对象
    for position in list(short_positions_dict.values()):
        print("    标的:{0},总仓位:{1},标的价值:{2}".format(position.security,position.total_amount,position.value))
    ##########################################################################
    print("持仓价值:{0}".format(context.subportfolios[1].positions_value))
    print("总资产:{0}".format(context.subportfolios[1].total_value))
    print("保证金:{0}".format(context.subportfolios[1].margin))
    print('-'*30)
    
    ## Portfolio
    print("总账户")
    print("累计出入金:{0}".format(context.portfolio.inout_cash))
    print("可用资金:{0}".format(context.portfolio.available_cash))
    print("可取资金:{0}".format(context.portfolio.transferable_cash))
    print("挂单锁住资金:{0}".format(context.portfolio.locked_cash))
    print("保证金:{0}".format(context.portfolio.margin))
    print("多单的仓位(position组成的dict):{0}".format(context.portfolio.long_positions)) # 这是一个dict,键是标的代码,值是对应的position对象
    print("空单的仓位(position组成的dict):{0}".format(context.portfolio.short_positions.values())) # 这是一个dict,键是标的代码,值是对应的position对象
    print("总权益:{0}".format(context.portfolio.total_value))
    print("总权益的累计收益:{0}".format(context.portfolio.returns))
    print("初始资金:{0}".format(context.portfolio.starting_cash))
    print("持仓价值:{0}".format(context.portfolio.positions_value))
    print('-'*30)
    
    ## Position 持仓标的信息
    print('#'*50)
```

