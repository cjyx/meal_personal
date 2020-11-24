import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtIcon, AtButton, AtGrid } from "taro-ui";
import "./successReceive.scss";

import CouponItem from "@/components/CouponItem";

const mockData = {
  type: 1,
  name: "COUPON",
  offerName: "折扣券",
  couponDiscount: "9.5",
  couponName: "无门槛",
  time: "永久有效",
  range: "全店通用/适用范围"
};

export default class extends Component {
  config = {
    navigationBarTitleText: "成功领取"
  };
  render() {
    return (
      <View className="success-receive-wrapper">
        <View className="success-receive-container">
          <CouponItem item={mockData}/>
          <View className="text-box">
            <View className="title">你已领取了好友的礼券</View>
            <View className="tip">买单享优惠还能返利获赠积分</View>
            <View className="desc">更多活动奖励可以查看门店主页</View>
          </View>
        </View>
        <View className="success-receive-container desc-content">
          <View className="box">
            <Text>商家送您一份专属权益待激活</Text>
          </View>
        </View>
        <View className="common-button">
          <AtButton
            onClick={() => {
              Taro.redirectTo("/pages/interact/storeDetail/rightsDetail");
            }}
          >
            我的卡包
          </AtButton>
        </View>
      </View>
    );
  }
}
