
import Taro,{Component}   from  '@tarojs/taro'
import { View, Text,  Canvas, Image  } from '@tarojs/components'
// import { Canvas } from 'taro-ui'
// import './index.scss'
import { AtTag } from 'taro-ui'
import BrainMain from '../../asset/brain-main.png'
import './index.scss'

export default class Brain extends Component {
  constructor(props){
      super(props)
  }

  componentWillMount () { 

  }

  componentDidMount () { 
      // 操作画布
      const ctx  = Taro.createCanvasContext('poster',)
      ctx.drawImage(BrainMain, 0, 0, 300, 200)
      ctx.draw()

  }


  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='brain-wrapper'>
        <Text className="brain-header">大脑实验室</Text>
        <Canvas className="brain-canvas" style='width: 300px; height: 200px;' canvasId='poster' />
      </View>
    )
  }
}
