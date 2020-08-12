import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Canvas } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    const ctx  = Taro.createCanvasContext('poster', this.$scope);
    ctx.fillStyle="#FF0000";
    ctx.fillRect(0,0,150,75);
      ctx.draw()
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Canvas style='width: 300px; height: 200px;' canvasId='poster' />
      </View>
    )
  }
}
