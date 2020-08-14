
import Taro,{Component}   from  '@tarojs/taro'
import { View, Text,  Canvas, Image  } from '@tarojs/components'
// import { Canvas } from 'taro-ui'
// import './index.scss'
import BrainMain from '../../asset/brain-main.png'
import {pointArr, lineArr} from './brainImgData'

export default class Brain extends Component {
  myRef: React.RefObject<any>
  constructor(props){
      super(props)
  }

  componentWillMount () { 

  }

  componentDidMount () { 
    // 操作画布
    const ctx  = Taro.createCanvasContext('poster',)
    ctx.fillStyle="#FF0000";
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
  }


  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>大脑实验室</Text>
        <Canvas style='width: 300px; height: 300px;' canvasId='poster' />
        <Image src={BrainMain} style={{width:"145px", height:"126px"}}  />
      </View>
    )
  }
}
