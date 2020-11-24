import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtTag, AtButton, AtIcon } from "taro-ui";

import "./showQrcode.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "出示二维码"
  };
  render() {
    return (
      <View className="show-qrcode-wrapper">
        <View className="title">等待商家扫码确认</View>
        <View className="qrcode-container">
          <Image src={require("@/assets/images/qrcode2.png")} />
          <Text>约定编号</Text>
          <Text>YD123456789012236778903456</Text>
        </View>
        <View className="discounts-pay-list qrcode-list">
          <View className="list-item">
            <View className="list-item-container">
              <View className="list-item-content">
                <View className="list-item-content_title">
                  等待完成<AtTag>本次</AtTag>
                </View>
                <View className="list-item-content_desc">
                  应完成时间：2020-03-05 23:59:59
                </View>
              </View>
              <View className="list-item-extra">
                <View className="list-item-extra_info">1/1次</View>
              </View>
            </View>
          </View>
        </View>
        <View className="button-container">
          <AtIcon
            prefixClass="icon"
            value="close"
            size="30"
            color="#000"
            onClick={() => {
              Taro.navigateBack();
            }}
          ></AtIcon>
        </View>
      </View>
    );
  }
}
