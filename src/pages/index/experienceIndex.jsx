import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtAvatar, AtTabs, AtTabsPane } from "taro-ui";

import NavTab from "@/components/Nav";
import AppointTabs from "./components/ExperienceIndex/AppointTabs";
import RewardTabs from "./components/ExperienceIndex/RewardTabs";
import StoreTabs from "./components/ExperienceIndex/StoreTabs";
import GoodsTabs from "./components/ExperienceIndex/GoodsTabs";
import IntegralTabs from "./components/ExperienceIndex/IntegralTabs";
import CardTabs from "./components/ExperienceIndex/CardTabs";
import GiftCertificateTabs from "./components/ExperienceIndex/GiftCertificateTabs";

class ExperienceIndex extends Component {
  static options = {
    addGlobalClass: true
  };
  config = {
    navigationBarTitleText: "体验首页"
  };

  state = {
    selected: "01",
    navList: [
      { num: "01", title: "我的约定", icon: "appoint" },
      { num: "02", title: "我的订单", icon: "order" },
      { num: "03", title: "我的卡包", icon: "purse" }
    ],
    current: 0,
    tabList: [{ title: "约定管理" }, { title: "商家打赏" }],
    orderCurrent: 0,
    orderTabList: [{ title: "门店买单" }, { title: "商品订单" }],
    purseCurrent: 0,
    purseTabList: [
      { title: "我的积分" },
      { title: "我的权益卡" },
      { title: "我的礼券" }
    ]
  };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  navTabChange = item => {
    this.setState({ selected: item.num });
  };

  handleClick = index => {
    this.setState({ current: index });
  };

  handleOrderClick = index => {
    this.setState({ orderCurrent: index });
  };

  handlePurseClick = index => {
    this.setState({ purseCurrent: index });
  };

  render() {
    const {
      selected,
      navList,
      current,
      tabList,
      orderCurrent,
      orderTabList,
      purseCurrent,
      purseTabList
    } = this.state;
    return (
      <View className="experience-index">
        <View className="header-content">
          <AtAvatar image={require("@/assets/images/user.png")} />
          <View className="header-content-right">
            <Text className="text">Hello，昵称</Text>
            <Image className="image" src={require("@/assets/images/vip.png")} />
          </View>
        </View>

        <View className="header-content header-integral">
          <Image
            className="image"
            src={require("@/assets/images/integral.png")}
          />
          <View className="header-content-right">
            <Text className="header-integral-number">2786</Text>
            <Text className="header-integral-dec">当前可用积分</Text>
          </View>
        </View>

        <NavTab
          type="experience"
          selected={selected}
          list={navList}
          onTabChange={this.navTabChange}
        />

        <View className="main-content">
          {selected === "01" && (
            <AtTabs
              className="main-content-tabs"
              current={current}
              tabList={tabList}
              onClick={this.handleClick.bind(this)}
            >
              <AtTabsPane current={current} index={0}>
                <AppointTabs />
              </AtTabsPane>
              <AtTabsPane current={current} index={1}>
                <RewardTabs />
              </AtTabsPane>
            </AtTabs>
          )}
          {selected === "02" && (
            <AtTabs
              className="main-content-tabs"
              current={orderCurrent}
              tabList={orderTabList}
              onClick={this.handleOrderClick.bind(this)}
            >
              <AtTabsPane current={orderCurrent} index={0}>
                <StoreTabs />
              </AtTabsPane>
              <AtTabsPane current={orderCurrent} index={1}>
                <GoodsTabs />
              </AtTabsPane>
            </AtTabs>
          )}
          {selected === "03" && (
            <AtTabs
              className="main-content-tabs"
              current={purseCurrent}
              tabList={purseTabList}
              onClick={this.handlePurseClick.bind(this)}
            >
              <AtTabsPane current={purseCurrent} index={0}>
                <IntegralTabs />
              </AtTabsPane>
              <AtTabsPane current={purseCurrent} index={1}>
                <CardTabs />
              </AtTabsPane>
              <AtTabsPane current={purseCurrent} index={2}>
                <GiftCertificateTabs />
              </AtTabsPane>
            </AtTabs>
          )}
        </View>
      </View>
    );
  }
}

export default ExperienceIndex;
