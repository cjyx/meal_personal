import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./index.scss";

import couponLeftPng from "@/assets/images/coupon1.png";
import couponLeftPng2 from "@/assets/images/coupon2.png";
import couponLeftPng3 from "@/assets/images/coupon3.png";
import couponLeftPng4 from "@/assets/images/coupon4.png";
import couponLeftPng5 from "@/assets/images/coupon5.png";
import couponLeftPng6 from "@/assets/images/coupon6.png";

class CouponItem extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {};

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  skip = () => {
    Taro.navigateTo({ url: "/pages/experience/couponDetail" });
  };

  render() {
    const { item = {} } = this.props;
    return (
      <View className="coupon-container at-row" onClick={this.skip}>
        <View className="left-box">
          <View className="back-img">
            {item.type === 1 && (
              <Image className="image" src={couponLeftPng} mode="aspectFit" />
            )}
            {item.type === 2 && (
              <Image className="image" src={couponLeftPng2} mode="aspectFit" />
            )}
            {item.type === 3 && (
              <Image className="image" src={couponLeftPng3} mode="aspectFit" />
            )}
            {item.type === 4 && (
              <Image className="image" src={couponLeftPng4} mode="aspectFit" />
            )}
          </View>
          <View className="store-name at-row at-row__justify--center at-row__align--center">
            <View className="round"></View>
            <View className="text ellipsis">{item.name}</View>
          </View>
        </View>
        <View className="right-box at-col">
          <View className="at-row at-row__justify--between at-row__align--end">
            <Image className="image" src={couponLeftPng5} mode="heightFix" />
            <View className="right-box_main at-col">
              <View className="at-row at-row__justify--center at-row__align--center">
                <View className="offer-name at-row at-row__justify--center at-row__align--center">
                  <View className="round-icon at-row at-row__justify--center at-row__align--center">
                    <AtIcon
                      prefixClass="icon"
                      value="appoint"
                      size="30"
                      color="#ffffff"
                    />
                  </View>
                  <View className="text ellipsis">{item.offerName}</View>
                </View>

                <View className="line"></View>

                <View className="discount at-col">
                  {item.couponDiscount}
                  <Text className="text">折</Text>
                </View>
              </View>

              <View className="right-text-box at-row at-row__justify--between at-row__align--end flex-column">
                <View>
                  {/* <AtIcon prefixClass='icon' value='appoint' size='32' color='' /> */}
                </View>
                <View className="text-box">
                  <View className="coupon-name">{item.couponName}</View>
                  <View className="time">{item.time}</View>
                  <View className="range">{item.range}</View>
                </View>
              </View>
            </View>
            <Image className="image" src={couponLeftPng6} mode="heightFix" />
          </View>
        </View>
      </View>
    );
  }
}

export default CouponItem;
