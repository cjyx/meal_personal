import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Button } from "@tarojs/components";
import { AtAvatar, AtTag, AtButton, AtIcon, AtCurtain } from "taro-ui";
import "./clockRecord.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "更多记录"
  };

  render() {
    return (
      <View className="clock-record-wrapper">
        <View className="discounts-pay-list clock-record-list">
          <View className="list-item">
            <View className="list-item-container">
              <View className="list-item-content">
                <View className="list-item-content_title">
                  <View className="list-item-content_info">
                    等待完成<AtTag>本次</AtTag>
                  </View>
                  <View className="list-item-extra_info">1/1次</View>
                </View>
                <View className="list-item-content_desc">
                  应完成时间：2020-03-05 23:59:59
                </View>
              </View>
            </View>
          </View>
          <View className="list-item">
            <View className="list-item-container">
              <View className="list-item-content">
                <View className="list-item-content_title">
                  <View className="list-item-content_info">
                    等待完成<AtTag>本次</AtTag>
                  </View>
                  <View className="list-item-extra_info">1/1次</View>
                </View>
                <View className="list-item-content_desc">
                  应完成时间：2020-03-05 23:59:59
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
