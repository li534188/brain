import Taro, {Component, Config,}   from  '@tarojs/taro'
import { View, Text, CoverImage , Map, CoverView  } from '@tarojs/components'
import {connect} from '@tarojs/redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/global'
import './index.scss'
import minePng from '../asset/mine.png'
import exercisePng from '../asset/exercise.png'
import communityPng from '../asset/community.png'
import meditationPng from '../asset/meditation.png'
import brainPng from '../asset/brain.png'

export interface MyProps {
    index : number,
    setIndex(index:number):{}
}


export interface MyState{
    data:{
        [propName: string]: any;
    }
  }


class Hello extends Component<MyProps, MyState> {

  constructor(props:MyProps){
      super(props)
      this.state={
        data: {
            selected: 0,
            color: "#7A7E83",
            selectedColor: "#3cc51f",
            list: [{
              pagePath: "/pages/meditation/index",
              iconPath: meditationPng,
              selectedIconPath: "/image/icon_component_HL.png",
              text: "冥想"
            }, {
              pagePath: "/pages/exercise/index",
              iconPath: exercisePng,
              selectedIconPath: "/image/icon_API_HL.png",
              text: "锻炼"
            }, {
              pagePath: "/pages/brain/index",
              iconPath: brainPng,
              selectedIconPath: "/image/icon_API_HL.png",
              text: "大脑"
            }, {
              pagePath: "/pages/community/index",
              iconPath: communityPng,
              selectedIconPath: "/image/icon_API_HL.png",
              text: "社区"
            }, {
              pagePath: "/pages/mine/index",
              iconPath: "/asset/mine.png",
              selectedIconPath: minePng,
              text: "我的"
            }]
          },
      }
  }

  componentWillMount () {
      const  {index} = this.props;
      console.log(999);
      console.log(index);
   }

  componentDidMount () {
    console.log(123)
   }

  componentWillUnmount () { }

  componentDidShow () {
    // const {data} = this.state;
    // const {index} = this.props;
    // console.log(888)
    // console.log(index)
    // this.setState({
    //     data:{...data,selected:index}
    // })
    console.log(123)
   }

  componentDidHide () { }

  config: Config = {
    usingComponents: {}
  }

  switchTab = (e) => {
    const info = e.currentTarget.dataset
    const url = info.path
    console.log(info)
    Taro.switchTab({url})
    const {data} = this.state
    const {setIndex} = this.props;
    this.setState({
      data:{...data,selected:info.index}
    })
    setIndex(info.index)
  }

  render () {
      const {data:{list, selected, selectedColor, color},} = this.state;
      const {index} = this.props
      let pageIdex = index;
    return (
        <CoverView className="tab-bar">
            <CoverView className="tab-bar-border"></CoverView>
    
            {list.map((item,index)=>(
                <CoverView key={item.pagePath} className="tab-bar-item" data-path={item.pagePath} data-index={index} onClick={this.switchTab}>
                    <CoverImage  className={pageIdex === index ? 'text-select' : ''}  src={item.iconPath}></CoverImage>
                    <CoverView style={{color:(pageIdex === index ? selectedColor : color)}}>{item.text}</CoverView>
                </CoverView>
            ))}
        </CoverView>
      )
  }
}


const mapStateToProps = (state) => {
    return {
        index: state.global.global.index,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            ...actions
        },
        dispatch
    );
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Hello as any);
