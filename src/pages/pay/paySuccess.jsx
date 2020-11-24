import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtAvatar, AtIcon, AtButton, AtInput } from "taro-ui";
import "./paySuccess.scss";

import Advertisement from "@/components/Advertisement";

export default class extends Component {
  config = {
    navigationBarTitleText: "支付成功"
  };
  state = {
    couponList: [
      { type: "代金券", caption: "60元", desc: "满200使用" },
      { type: "折扣券", caption: "全场6.0折", desc: "" },
      { type: "商品券", caption: "商品名一件", desc: "满200使用" }
    ],
    type: 2
  };
  render() {
    const { couponList, type } = this.state;
    return (
      <View className="pay-success-wrapper">
        <View className="discounts-pay-title">完成</View>
        <View className="pay-success-top">
          <AtIcon
            prefixClass="icon"
            value="check-circle"
            size="30"
            color="#229E8E"
          />
          <Text className="padding">支付成功</Text>
          <View className="place">
            ¥<Text>285.00</Text>
          </View>
          <Text>(消费)返利赠送积分 +285</Text>
        </View>
        <View className="at-row payee-container">
          <View className="at-col at-col-6 left">
            收款方<Text>门店名称</Text>
          </View>
          <View className="at-col at-col-6 right">
            收款金额<Text>¥ 285.00</Text>
          </View>
        </View>
        <View className="payment-methods">
          付款方式
          <Text>其他支付</Text>
        </View>
        <View className="discount-coupon-container">
          <Text className="caption">买单付款领福利</Text>
          <Text className="title">
            {type == 1 ? "选取礼券" : "福利选取成功"}
          </Text>
          <View className="at-row coupon-list">
            {type == 1 &&
              couponList.map(item => (
                <View
                  className="at-col at-col-4 at-col--wrap coupon-list-item"
                  key={item.type}
                >
                  <View>
                    <Text className="type ellipsis">{item.type}</Text>
                    <View className="content">
                      <Text className="caption ellipsis">{item.caption}</Text>
                      <Text className="ellipsis">{item.desc}</Text>
                    </View>
                    <AtButton
                      className="btn"
                      type="primary"
                      size="small"
                      circle
                    >
                      选我
                    </AtButton>
                  </View>
                </View>
              ))}
            {type == 2 && (
              <View className="coupon-list-welfare">
                <View className="content">
                  <View className="sale">
                    <Text className="font-80">6</Text>
                    <Text>折</Text>
                  </View>
                  <View className="at-row ticket">
                    <View className="at-col">
                      <AtIcon
                        prefixClass="icon"
                        value="smile-circle"
                        size="40"
                        color="#FDD000"
                      />
                    </View>
                    <View className="at-col at-col--auto right">
                      <Text className="ticket-title">券名称</Text>
                      <Text>永久有效</Text>
                      <Text className="ticket-desc">全店通用/适用范围</Text>
                    </View>
                  </View>
                </View>
                <View className="check">查看商家 ></View>
              </View>
            )}
          </View>
        </View>
        <View className="pay-success-bottom">
          <View className="advertsement-circle">
            <Image src={require("@/assets/images/AD.jpg")} />
          </View>
          <AtButton className="btn" type="secondary" circle>
            在线投诉
          </AtButton>
        </View>
        {/* 广告 */}
        <Advertisement
          picture={require("@/assets/images/hpimg_02.jpg")}
          closeBtnVisible={false}
        />
      </View>
    );
  }
}
