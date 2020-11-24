import Taro, { Component, Config } from "@tarojs/taro";
import {
  View,
  Button,
  Text,
  Imag,
  Radio,
  RadioGroup
} from "@tarojs/components";
import { AtAvatar, AtIcon, AtButton, AtTabs, AtTabsPane } from "taro-ui";
import "./selectCoupons.scss";

const mockData = [
  {
    id: 1,
    sale: 9.0,
    checked: false,
    caption: "无门槛使用",
    period: "2020-5-10",
    scope: "全店通用"
  },
  {
    id: 2,
    sale: 7.0,
    checked: false,
    caption: "无门槛使用",
    period: "2020-5-24",
    scope: "全店通用"
  },
  {
    id: 3,
    sale: 8.5,
    checked: false,
    caption: "无门槛使用",
    period: "2020-6-10",
    scope: "全店通用"
  }
];

export default class extends Component {
  config = {
    navigationBarTitleText: "选择优惠券"
  };
  state = {
    current: 0,
    tabList: [{ title: "可用优惠券(2)" }]
  };
  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  handleRadioChange = ({ target: { value } }) => {
    console.log(value);
  };
  render() {
    const { current, tabList } = this.state;
    return (
      <View className="select-coupons-wrapper">
        <View className="select-coupons-title">
          <AtIcon prefixClass="icon" value="close" size="24" color="#000" />
          选择优惠券
        </View>
        <AtTabs
          scroll
          current={current}
          tabList={tabList}
          onClick={this.handleTabClick}
          className="tab-container select-coupons-tab"
        >
          <AtTabsPane current={current} index={0}>
            <View className="select-couponts-container">
              <RadioGroup onChange={this.handleRadioChange}>
                {mockData.map(item => (
                  <View className="select-couponts-item" key={item.id}>
                    <View className="box sale">
                      <Text>{item.sale}</Text>折
                    </View>
                    <View className="box content">
                      <View className="text">
                        <Text>{item.caption}</Text>
                        <Text>有效时间：{item.period}</Text>
                        <Text>适用范围：{item.scope}</Text>
                      </View>
                      <Radio
                        className="radio"
                        value={item.sale}
                        checked={item.checked}
                      />
                    </View>
                  </View>
                ))}
              </RadioGroup>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}
