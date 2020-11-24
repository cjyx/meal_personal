import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import {
  AtAvatar,
  AtIcon,
  AtButton,
  AtFloatLayout,
  AtTabs,
  AtTabsPane,
  AtList,
  AtListItem,
  AtInput,
  AtCheckbox
} from "taro-ui";

import "./index.scss";

export default class extends Component {
  render() {
    const { onPayClick, content } = this.props;
    return (
      <View className="attention-box">
        <View className="top">
          <View className="title">当前支付事项：</View>
          <View className="content">
            <View className="at-row">
              <View className="at-col index">1</View>
              <View className="at-col at-col--wrap">
                <Text>{content}</Text>
                <Text>确认实付金额及获赠积分，点击(确定买单)按钮</Text>
              </View>
            </View>
            <View className="at-row">
              <View className="at-col index">2</View>
              <Text className="at-col at-col--wrap">
                商家确认收款，积分自动到您账户
              </Text>
            </View>
          </View>
          <Button className="btn" onClick={onPayClick}>
            确定买单
          </Button>
        </View>
        <View className="bottom"></View>
      </View>
    );
  }
}
