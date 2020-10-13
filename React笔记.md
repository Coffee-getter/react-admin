# state
1. 什么样的项目需要state？
1.对用户输入
2.服务器请求
3.时间变化 
等做出响应
--
2. state里面放什么数据呢？
直接被改变的数据，不要多放
间接被改变的数据则在render里面进行计算使用
--
3. state里面不要放什么数据？
1.间接改变需要计算的数据
2.react组件
3.基于props的重复数据（除非props在下一步进行改变）



# 常见模式
一个有状态state的组件--props--> 多个无状态只渲染的子组件



# 组件创建的三种模式
1. 函数方式
const xxx = ({props}) => {
  return (

  )
}
适合无状态组件
不会被实例化，渲染性能提升
不能访问this对象和生命周期函数
--
2. ES6方式
class xxx extends React.Component {
  state = [];
  render(){
    return(

    )
  }
}
--
3. ES5 createClass 不推荐使用



# 组件生命周期

    1.实例化                    2.存在期                     3.销毁
      |                            |                           |
getDefaultProps          componentWillReceiveProps   componentWillUnmount
      |                            |
getInitialState          shouldComponentUpdate
      |                            |
componentWillMount          componentWillUpdate
      |                            |
      ----------（ render）--------- 
                    |
       -----------------------------
      |                             |
 componentDidMount        componentDidUpdate
 操作已经渲染好的DOM       更新已经渲染好的DOM

# 生命周期的三个状态
Mounting：将组建插入到DOM
Updating:将数据更新到DOM
Unmounting：将数据移除DOM

# 生命周期的钩子函数
自行了解


# 两个文件
package.json
记录需要用到的模块，用于安装依赖

roadhogrc
对roadhog模块的配置


# 目录规划

components
UI组件，接受外部传过来的参数，渲染到界面外

container
负责连接组件，将component组件和store数据进行包装

models
处理数据的地方，以‘namespace’作为唯一标识，在models里面调用service层获取数据

services 
用api向后台获取数据

utils
工具目录类，后台请求接口类

constants.js 定义一些常用的常量

router.js 配置路由

index.js 入口文件


# echarts
npm install echarts 
import echarts from 'echarts';
import 'echarts/map/js/china';引入中国地图

在render里面创建一个DOM节点-用来放置该地图
在componentDidMount()里面进行代码编辑
代码可在网上查找

