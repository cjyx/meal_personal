import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtInput } from "taro-ui";

import bannerPng from "@/assets/images/AD.jpg";

import "./signUp.scss";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  config = {
    navigationBarTitleText: "报名订单"
  };
  state = {};

  render() {
    return (
      <View>
        <View className="sign-up-order_index">
          <View className="sign-up_main-box at-row">
            <View className="img-box">
              <Image className="image" src={bannerPng} mode="aspectFill" />
            </View>
            <View>
              <View className="active-tit">活动主标题</View>
              <View className="active-desc">活动描述语</View>
            </View>
          </View>

          <View className="sign-up_main-box at-row at-row__justify--between label-item label-icon-item">
            <View className="label">支付方式</View>
            <View>在线支付</View>
          </View>

          <View className="sign-up_main-box">
            <View className="at-row at-row__justify--between label-item label-icon-item">
              <View className="label">礼券</View>
              <View>
                <Text>无可用</Text>
              </View>
              <View className="icon-box">
                <AtIcon
                  prefixClass="icon"
                  value="more-row"
                  size="16"
                  color="#C3C3C3"
                ></AtIcon>
              </View>
            </View>
            <View className="at-row at-row__justify--between label-item label-icon-item">
              <View className="label">有效兑换积分</View>
              <View>
                <Text>5000</Text>
              </View>
            </View>
            <View className="at-row at-row__justify--between label-item label-icon-item">
              <View className="label">兑礼卡</View>
              <View>
                <Text>无可用</Text>
              </View>
              <View className="icon-box">
                <AtIcon
                  prefixClass="icon"
                  value="more-row"
                  size="16"
                  color="#C3C3C3"
                ></AtIcon>
              </View>
            </View>
          </View>

          <View className="sign-up_main-box at-row at-row__justify--between label-item">
            <View className="label">手机号</View>
            <View>
              <AtInput
                name="phone"
                maxLength={11}
                type="number"
                placeholder="请填写联系你的手机号"
              />
            </View>
          </View>

          <View className="sign-up_main-box at-row at-row__justify--between label-item">
            <View className="label">抵扣积分</View>
            <View>5积分</View>
          </View>
        </View>
        <View className="footer-pisition">
          <View className="box">
            <Text className="space2">需抵扣总积分 5</Text>
            <View className="right">
              <View
                className="content-btn"
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/interact/success" });
                }}
              >
                <Image src={require("@/assets/images/bj_04.png")} />
                <View className="desc">
                  <View className="space">
                    <Text className="font-28">递交订单</Text>
                  </View>
                  <AtIcon
                    prefixClass="icon"
                    value="right"
                    size="16"
                    color="#FDD000"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
