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
import "./discountsPay.scss";

import OtherPayTabs from "./components/pay/OtherPayTabs";
import WechatPayTabs from "./components/pay/WechatPayTabs";
import Attention from "./components/attention";
import FloatLayout from "./components/floatLayout";

export default class extends Component {
  config = {
    navigationBarTitleText: "优惠买单"
  };
  state = {
    current: 0,
    tabList: [{ title: "其他支付" }, { title: "微信支付" }],
    isOpened: false
  };
  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  handleFloatClose = () => {
    this.setState({ isOpened: false });
  };
  handlePayClick = () => {
    this.setState({ isOpened: true });
  };
  render() {
    const { current, tabList, isOpened } = this.state;
    return (
      <View className="discounts-pay-wrapper">
        <View className="discounts-pay-title">
          <AtIcon prefixClass="icon" value="close" size="24" color="#000" />
          优惠买单
        </View>
        <View className="store-caption">
          <AtAvatar image={require("@/assets/images/user.png")} />
          <View>
            <Text>门店名称</Text>
            <Text>店铺描述</Text>
          </View>
        </View>
        <View className="discounts-pay-container">
          <AtTabs
            scroll
            current={current}
            tabList={tabList}
            onClick={this.handleTabClick}
            className="tab-container discounts-pay-tab"
          >
            <AtTabsPane current={current} index={0}>
              <OtherPayTabs />
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
              <WechatPayTabs />
            </AtTabsPane>
          </AtTabs>
          <Attention
            onPayClick={this.handlePayClick}
            content={
              current == 0
                ? "当前你选择了，线下通过现金或店家其他收款码支付"
                : "当前你选择了，在线微信支付"
            }
          />
        </View>
        <FloatLayout isOpened={isOpened} onCloseClick={this.handleFloatClose} />
      </View>
    );
  }
}
