import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtAvatar, AtIcon, AtTabs, AtTabsPane, AtButton } from "taro-ui";

import NavTab from "@/components/Nav/";
import SwiperProp from "@/components/Swiper/";
import Advertisement from "@/components/Advertisement";
import BrowseTabs from "./components/InteractIndexIndex/BrowseTabs";
import RecentTabs from "./components/InteractIndexIndex/RecentTabs";
import AppointActivityTabs from "./components/InteractIndexIndex/AppointActivityTabs";
import HotProductTabs from "./components/InteractIndexIndex/HotProductTabs";

const storeData = [
  {
    id: "1",
    avatar: require("@/assets/images/user.png"),
    name: "门店名称",
    desc: "商家描述",
    type: "小吃/快餐（注册引导页选择的品类）",
    address: "莲湖区西门里南马道巷22号",
    distance: "500m",
    price: "人均客单价：58元/人"
  },
  {
    id: "2",
    avatar: require("@/assets/images/user.png"),
    name: "门店名称",
    desc: "商家描述",
    type: "小吃/快餐（注册引导页选择的品类）",
    address: "莲湖区西门里南马道巷22号",
    distance: "500m",
    price: "人均客单价：58元/人"
  },
  {
    id: "3",
    avatar: require("@/assets/images/user.png"),
    name: "门店名称",
    desc: "商家描述",
    type: "小吃/快餐（注册引导页选择的品类）",
    address: "莲湖区西门里南马道巷22号",
    distance: "500m",
    price: "人均客单价：58元/人"
  }
];
export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  config = {
    navigationBarTitleText: "互动"
  };
  state = {
    selected: "01",
    navList: [
      { num: "01", title: "店主邀约", icon: "shop" },
      { num: "02", title: "活动参与", icon: "fly" },
      { num: "03", title: "活动参与", icon: "scan" }
    ],
    imgList: [
      { url: require("@/assets/images/hpimg_02.jpg") },
      { url: require("@/assets/images/hpimg_02.jpg") },
      { url: require("@/assets/images/hpimg_02.jpg") }
    ],
    current: 0,
    tabList: [{ title: "浏览的店铺" }, { title: "关注的店铺" }],
    activityCurrent: 0,
    activityTabList: [
      { title: "近期活动" },
      { title: "约定活动" },
      { title: "爆品拼团" }
    ]
  };
  navTabChange = item => {
    this.setState({ selected: item.num });
  };
  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  handleActivityClick = value => {
    this.setState({
      activityCurrent: value
    });
  };

  render() {
    const {
      selected,
      imgList,
      navList,
      current,
      tabList,
      activityCurrent,
      activityTabList
    } = this.state;
    return (
      <View className="interact-wrapper">
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
          type="interact"
          selected={selected}
          list={navList}
          onTabChange={this.navTabChange}
        />
        <View className="merchant-content">
          <Text>近期邀约的商家</Text>
          {/* 轮播图 */}
          <SwiperProp imgList={imgList} indicatorDots={false} />
        </View>
        {/* 广告 */}
        <Advertisement
          picture={require("@/assets/images/hpimg_02.jpg")}
          closeBtnVisible={true}
        />
        <View className="interact-container">
          {selected == "01" && (
            <View>
              <View
                className="right-icon"
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/interact/search" });
                }}
              >
                <AtIcon
                  prefixClass="icon"
                  value="search"
                  size="18"
                  color="#434343"
                ></AtIcon>
              </View>
              <AtTabs
                scroll
                current={current}
                tabList={tabList}
                onClick={this.handleTabClick}
                className="tab-container"
              >
                <AtTabsPane current={current} index={0}>
                  <BrowseTabs data={storeData} type={current} />
                </AtTabsPane>
                <AtTabsPane current={current} index={1}>
                  <BrowseTabs data={storeData} type={current} />
                </AtTabsPane>
              </AtTabs>
            </View>
          )}
          {selected == "02" && (
            <View>
              <AtTabs
                scroll
                current={activityCurrent}
                tabList={activityTabList}
                onClick={this.handleActivityClick}
                className="tab-container"
              >
                <AtTabsPane current={activityCurrent} index={0}>
                  <RecentTabs />
                </AtTabsPane>
                <AtTabsPane current={activityCurrent} index={1}>
                  <AppointActivityTabs />
                </AtTabsPane>
                <AtTabsPane current={activityCurrent} index={2}>
                  <HotProductTabs />
                </AtTabsPane>
              </AtTabs>
            </View>
          )}
        </View>
      </View>
    );
  }
}
