import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import {
  AtAvatar,
  AtIcon,
  AtTabs,
  AtTabsPane,
  AtCard,
  AtButton,
  AtTag,
  AtBadge,
  AtFloatLayout
} from "taro-ui";
import "./rightsDetail.scss";

import RightsProp from "./components/Rights";
import FloatLayout from "./components/FloatLayout";

//使用权益
export default class extends Component {
  config = {
    navigationBarTitleText: "权益卡详情"
  };
  state = {
    isActive: false,
    tabList: [{ title: "我的权益" }, { title: "会员消费福利" }],
    current: 0,
    isOpened: false
  };
  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  handleClose = () => {
    this.setState({ isOpened: false });
  };
  handleJump = () => {
    Taro.navigateTo({ url: "/pages/interact/posterInvite" });
  };
  render() {
    const { isActive, tabList, current, isOpened } = this.state;
    return (
      <View>
        <View className="rightsDetail-container">
          <View className="qrcode-container">
            <Image src={require("@/assets/images/QRcode.png")} />
            <Text>313 9732 6643 8768</Text>
            <Text className="desc">出示买单即享优惠赠送积分</Text>
            <View>
              {!isActive ? (
                <AtButton type="primary">激活买单立享权益</AtButton>
              ) : (
                <Text>权益有效时间：2020/02/03-2020/02/06</Text>
              )}
            </View>
          </View>
          <View className="rights-tabs">
            <AtTabs
              scroll
              current={current}
              tabList={tabList}
              onClick={this.handleTabClick}
              className="tab-container"
            >
              <AtTabsPane current={current} index={0}>
                {/* 我的权益 */}
                <View className="myRights">
                  <View className="at-row content">
                    <View className="at-col at-col-3">
                      <Image src={require("@/assets/images/icon_01.png")} />
                    </View>
                    <View className="at-col at-col-6">权益获取条件</View>
                    <View className="at-col at-col-3">当前权益</View>
                  </View>
                  <View className="grade">当前等级：等级名称</View>
                  <View className="at-row content grade-content grade-content-color">
                    <View className="at-col at-col-3">
                      <Image src={require("@/assets/images/star_01.png")} />
                    </View>
                    <View className="at-col at-col-6">注册激活</View>
                    <View className="at-col at-col-3">
                      整单折扣<Text>9.0折</Text>
                    </View>
                  </View>
                  <View className="grade grade-next">下一阶等级：等级名称</View>
                  <View className="at-row content grade-content">
                    <View className="at-col at-col-3">
                      <Image src={require("@/assets/images/star_02.png")} />
                    </View>
                    <View className="at-col at-col-6">
                      累积邀请2位好友消费
                      <Text>累积消费金额达到500元</Text>
                      <Text>二者达其一</Text>
                    </View>
                    <View className="at-col at-col-3">
                      整单折扣<Text>9.0折</Text>
                    </View>
                  </View>
                  <View className="grade-next caption">
                    可以转赠优惠券或分享好友领取权益卡，好友到店消费，达到
                    条件，系统会自动升级优惠权益。可以参与商家的活动去获取
                    优惠券及礼品。消费或活动赠送的积分，系统会自动捆绑到您
                    的个人账户。
                  </View>
                </View>
                <View className="inviteFriends">
                  <AtBadge value={"邀请好友领取权益卡"} className="add" on>
                    <AtIcon
                      prefixClass="icon"
                      value="plus-circle"
                      size="46"
                      color="#000"
                      onClick={() => {
                        this.setState({ isOpened: true });
                      }}
                    ></AtIcon>
                  </AtBadge>
                  <View className="invite-list">
                    <View className="noContent">
                      <Text className="title">成功邀约0位好友消费</Text>
                      <Text>暂无好友消费</Text>
                    </View>
                  </View>
                </View>
              </AtTabsPane>
              <AtTabsPane current={current} index={1}>
                {/* 会员消费福利 */}
                <View className="consumer-welfare">
                  <View className="box">
                    <View className="top"></View>
                    <View className="circle">
                      <AtIcon
                        prefixClass="icon"
                        value="integral"
                        size="30"
                        color="#848484"
                      ></AtIcon>
                    </View>
                    <View className="content">买单必赠，消费1元赠送1积分</View>
                  </View>
                  <View className="Tips">
                    <view>温馨提示</view>
                    <Text>1、消费即赠，赠送积分数为实际买单金额，不限次数</Text>
                    <Text>2、积分可用来抵扣也可免费兑换好物满足你不同需求</Text>
                    <Text>3、会员权益解释权归商家所有</Text>
                  </View>
                </View>
              </AtTabsPane>
            </AtTabs>
          </View>
          {/* 如何使用权益 */}
          <RightsProp />
        </View>
        <View className="footer-pisition">到店优惠买单赠送积分</View>
        {/* 浮动弹层 */}
        <FloatLayout
          isOpened={isOpened}
          onClose={this.handleClose}
          renderContent={
            <View className="at-col" onClick={this.handleJump}>
              <AtIcon
                prefixClass="icon"
                value="poster"
                size="50"
                color="#434343"
              ></AtIcon>
              <view>生成海报</view>
            </View>
          }
        >
          <Image src={require("@/assets/images/hpimg_02.jpg")} />
        </FloatLayout>
      </View>
    );
  }
}
