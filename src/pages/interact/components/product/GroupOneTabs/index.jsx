import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Swiper, SwiperItem } from "@tarojs/components";
import {
  AtAvatar,
  AtIcon,
  AtTag,
  AtButton,
  AtCountdown,
  AtCard,
  AtTabs,
  AtTabsPane
} from "taro-ui";
import "./index.scss";

import Steps from "@/components/Steps";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    arrData: [1, 2, 3, 4, 5],
    detailCurrent: 0,
    detailTabList: [{ title: "团购详情" }, { title: "购买须知" }],
    items: [
      {
        title: "发起拼团",
        icon: {
          value: "flag",
          inactiveColor: "#c0c0c0",
          size: "30"
        }
      },
      {
        title: "邀约1人或拼单",
        icon: {
          value: "mulit-people-circle",
          inactiveColor: "#c0c0c0",
          size: "30"
        }
      },
      {
        title: "拼成发券",
        icon: {
          value: "smile-circle",
          inactiveColor: "#c0c0c0",
          size: "30"
        }
      }
    ]
  };
  handleDetailTabClick = value => {
    this.setState({
      detailCurrent: value
    });
  };
  render() {
    const { arrData, items, detailCurrent, detailTabList } = this.state;
    return (
      <View className="group-buy-container">
        <AtCard title="活动名称" className="card-container">
          <View className="group-buy-box">
            <View className="tips ellipsis">
              <AtIcon
                prefixClass="icon"
                value="mulit-people"
                size="15"
                color="#848484"
              />
              <Text>2人拼团，24小时不成团退款</Text>
            </View>
            <Swiper className="pic-swiper" displayMultipleItems="2.5">
              {arrData.map(item => (
                <SwiperItem key={item}>
                  <Image src={require("@/assets/images/product.jpg")} />
                </SwiperItem>
              ))}
            </Swiper>
            <View className="at-row countdown">
              <View className="at-col at-col--auto left">
                <Text className="name">活动距结束</Text>
                <View className="time">
                  <AtCountdown
                    isShowDay
                    day={6}
                    hours={1}
                    minutes={1}
                    seconds={10}
                  />
                </View>
              </View>
              <View className="at-col right">
                <View className="share">
                  <AtIcon
                    prefixClass="icon"
                    value="share"
                    size="24"
                    color="#434343"
                  />
                </View>
              </View>
            </View>
          </View>
        </AtCard>
        <AtCard className="card-container">
          <Steps items={items} />
        </AtCard>
        <AtCard className="card-container group-buy-list">
          <View className="title">3人在拼单，可直接参与</View>
          <View className="content">
            <View className="at-row at-row__align--center content-item">
              <View className="at-col left">
                <AtAvatar image={require("@/assets/images/user.png")} />
                <Text>昵称</Text>
              </View>
              <View className="at-col right">
                <View className="countdown">
                  <Text>还差1人拼团</Text>
                  <View>
                    剩余
                    <AtCountdown
                      isShowDay
                      format={{ hours: ":", minutes: ":", seconds: "" }}
                      day={6}
                      hours={1}
                      minutes={1}
                      seconds={10}
                    />
                  </View>
                </View>
                <AtButton type="primary" size="small" className="btn">
                  去拼单
                </AtButton>
              </View>
            </View>
          </View>
        </AtCard>
        <AtCard
          title="成为兑集会员"
          className="card-container member-container"
        >
          <View className="box">
            <Image src={require("@/assets/images/bj_02.png")} />
            <View className="content">
              <View className="top">
                <Text>365礼享会员卡／买单必返</Text>
                <AtButton type="secondary" circle>
                  立即查看
                </AtButton>
              </View>
              <View className="desc">
                ¥<Text>69</Text>/一年
              </View>
            </View>
          </View>
        </AtCard>
        <AtTabs
          scroll
          current={detailCurrent}
          tabList={detailTabList}
          onClick={this.handleDetailTabClick}
          className="tab-container purchase-container"
        >
          <AtTabsPane current={detailCurrent} index={0}>
            <AtCard className="card-container purchase-detail">
              <View className="title">类别</View>
              <View className="at-row commodity">
                <View className="at-col">
                  商品名称<Text>（1 份）</Text>
                </View>
                <View className="at-col right">
                  ¥<Text>169</Text>
                </View>
              </View>
            </AtCard>
          </AtTabsPane>
          <AtTabsPane current={detailCurrent} index={1}>
            <AtCard className="card-container announcement">
              <Text className="title">有效期</Text>
              <Text>*购买后360天内有效</Text>
              <Text className="title">使用时间</Text>
              <Text>*10:00-21:00（周末、法定节假日通用）</Text>
              <Text className="title">适用范围</Text>
              <Text>*全店通用</Text>
              <Text className="title">规则提醒</Text>
              <Text>*不再与其他优惠同享</Text>
              <Text className="title">温馨提示</Text>
              <Text>*团购用户不可同时享受商家其他优惠</Text>
              <Text>*店内有包间</Text>
              <Text>*无需预约</Text>
              <Text>*发票问题请咨询商家</Text>
            </AtCard>
          </AtTabsPane>
        </AtTabs>
        <AtCard className="card-container store-box">
          <Text className="title">适用店铺</Text>
          <View className="store-caption">
            <AtAvatar image={require("@/assets/images/user.png")} />
            <View>
              <Text>门店名称</Text>
              <Text>店铺描述</Text>
              <View className="caption-info">
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="location"
                    size="12"
                    color="#434343"
                  ></AtIcon>
                  500m
                </View>
                <View>莲湖区西门里南马道巷22号莲湖区西门里南马道巷22号</View>
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="integral-fill"
                    size="12"
                    color="#434343"
                  ></AtIcon>
                  小吃/快餐
                </View>
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="money"
                    size="12"
                    color="#434343"
                  ></AtIcon>
                  人均客单价：58元/人
                </View>
              </View>
            </View>
            <View className="icon-group">
              <View>
                <AtIcon
                  prefixClass="icon"
                  value="phone-two"
                  size="25"
                  color="#434343"
                />
              </View>
              <View className="text">联系商家</View>
            </View>
          </View>
        </AtCard>
      </View>
    );
  }
}
