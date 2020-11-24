import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import {
  AtAvatar,
  AtButton,
  AtIcon,
  AtTabs,
  AtTabsPane,
  AtCard
} from "taro-ui";

import "./product.scss";

import GroupOneTabs from "./components/product/GroupOneTabs";

export default class extends Component {
  config = {
    navigationBarTitleText: "商品"
  };

  state = {
    current: 0,
    tabList: [{ title: "129元团" }, { title: "228元团" }]
  };

  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  handleDetailTabClick = value => {
    this.setState({
      detailCurrent: value
    });
  };
  render() {
    const { current, tabList } = this.state;
    return (
      <View>
        <View className="product-container">
          <AtTabs
            scroll
            current={current}
            tabList={tabList}
            onClick={this.handleTabClick}
            className="tab-container group-container"
          >
            <AtTabsPane current={current} index={0}>
              <GroupOneTabs />
            </AtTabsPane>
            <AtTabsPane current={current} index={1}>
              {/* <AppointTabs /> */}
            </AtTabsPane>
          </AtTabs>
        </View>
        <View className="footer-pisition">
          <View className="box">
            <AtButton type="secondary" size="small">
              兑集365礼享会员
            </AtButton>
            <View className="right">
              <View className="content-btn">
                <Image src={require("@/assets/images/bj_03.png")} />
                <View className="desc">
                  <View className="money font-20">
                    ¥<Text className="font-24">129</Text>
                  </View>
                  <View>单独买</View>
                </View>
              </View>
              <View className="content-btn content-btn-text">
                <Image src={require("@/assets/images/bj_04.png")} />
                <View className="desc ">
                  <View className="space">
                    <View className="money">
                      ¥<Text className="font-24">129</Text>
                    </View>
                    <Text className="font-28">立即参与</Text>
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
