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
  pageIndex : number,
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
              iconPath: '../asset/meditation.png',
              selectedIconPath: "/image/icon_component_HL.png",
              text: "冥想"
            }, {
              pagePath: "/pages/exercise/index",
              iconPath: '../asset/exercise.png',
              selectedIconPath: "/image/icon_API_HL.png",
              text: "锻炼"
            }, {
              pagePath: "/pages/brain/index",
              iconPath: '../asset/brain.png',
              selectedIconPath: "/image/icon_API_HL.png",
              text: "大脑"
            }, {
              pagePath: "/pages/community/index",
              iconPath: '../asset/community.png',
              selectedIconPath: "/image/icon_API_HL.png",
              text: "社区"
            }, {
              pagePath: "/pages/mine/index",
              iconPath: "../asset/mine.png",
              selectedIconPath: '../asset/mine.png',
              text: "我的"
            }]
          },
      }
  }

  componentWillMount () {
   }

  componentDidMount () {
   }

  componentWillUnmount () { }

  componentDidShow () {
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
      const {pageIndex} = this.props
      console.log('+++++++++++')
      console.log(pageIndex)
    return (
        <CoverView className="tab-bar">
            <CoverView className="tab-bar-border"></CoverView>
    
            {list.map((item,index)=>(
                <CoverView key={item.pagePath} className="tab-bar-item" data-path={item.pagePath} data-index={index} onClick={this.switchTab}>
                    <CoverImage  className={pageIndex === index ? 'text-select' : ''}  src={item.iconPath}></CoverImage>
                    <CoverView style={{color:(pageIndex === index ? selectedColor : color)}}>{item.text}</CoverView>
                </CoverView>
            ))}
        </CoverView>
      )
  }
}


const mapStateToProps = (state) => {
    return {
      pageIndex: state.global.global.pageIndex,
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
