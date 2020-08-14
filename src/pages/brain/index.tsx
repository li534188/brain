
import Taro,{Component}   from  '@tarojs/taro'
import { View, Text,  Canvas, Image  } from '@tarojs/components'
// import { Canvas } from 'taro-ui'
// import './index.scss'
import {pointArr, lineArr} from './brainImgData'
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
    ctx.beginPath()
    ctx.fillStyle = "#ffffff"
    pointArr.map(item=>{
      let size = 0;
      switch (item.pointSize){
          case 'middle':
              size = 10;
              break;
          case 'xl':
              size = 12;
              break;
          case 'xxl':
              size = 14;
              break;
          case 'big':
              size = 20;
              break;
          default :
              size = 8;
              break;
      }
      ctx.moveTo(item.pointX, item.pointY);
      ctx.arc(item.pointX, item.pointY, size, 0, Math.PI * 2, true);
    })
    ctx.fill();
    ctx.beginPath()
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    lineArr.map((item)=>{
        ctx.moveTo(pointArr[item[0]].pointX, pointArr[item[0]].pointY)
        ctx.lineTo(pointArr[item[1]].pointX, pointArr[item[1]].pointY)
    })
    ctx.stroke()
      // 操作画布
    ctx.draw();

  }


  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='brain-wrapper'>
        <Text className="brain-header">大脑实验室</Text>
        <Canvas className="brain-canvas" style='width: 300px; height: 300px;background-color: #2F3D64;' canvasId='poster' />
      </View>
    )
  }
}
