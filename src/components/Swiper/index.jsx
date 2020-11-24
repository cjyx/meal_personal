import { Component } from "@tarojs/taro";
import {
  View,
  Button,
  Text,
  Image,
  Swiper,
  SwiperItem
} from "@tarojs/components";
import './index.scss'

export default class extends Component {
  state = { nowIdx: 0, swiperH: "" };
  //获取swiper高度
  getHeight = e => {
    var winWid = Taro.getSystemInfoSync().windowWidth - 2 * 50; //获取当前屏幕的宽度
    var imgh = e.detail.height; //图片高度
    var imgw = e.detail.width; //图片宽度
    var sH = (winWid * imgh) / imgw + "px";
    this.setState({
      swiperH: sH //设置高度
    });
  };
  //swiper滑动事件
  handleSwiperChange = e => {
    this.setState({
      nowIdx: e.detail.current
    });
  };
  render() {
    const { imgList,indicatorDots } = this.props;
    const { nowIdx, swiperH } = this.state;
    return (
      <Swiper
        className="swiper-container"
        previousMargin="50px"
        nextMargin="50px"
        circular
        indicatorDots={indicatorDots}
        interval="2000"
        autoplay
        onChange={this.handleSwiperChange}
      >
        {imgList.map((item, index) => (
          <SwiperItem key={index} className="swripe-item">
            <Image
              onLoad={this.getHeight}
              // style={`height:${swiperH}`}
              className={`swiper-img ${
                nowIdx === index ? "swiper-active" : ""
              }`}
              src={item.url}
            />
          </SwiperItem>
        ))}
      </Swiper>
    );
  }
}
