import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtAvatar, AtIcon, AtFloatLayout, AtButton, AtGrid } from "taro-ui";
import "./posterInvite.scss";

import FloatLayout from "./components/FloatLayout";

export default class extends Component {
  config = {
    navigationBarTitleText: "海报邀请"
  };
  state = {
    isOpened: false
  };
  handleClose = () => {
    this.setState({ isOpened: false });
  };
  render() {
    const { isOpened } = this.state;
    return (
      <View className="posterInvite-container">
        <View className="store-caption">
          <AtAvatar image={require("@/assets/images/user.png")} />
          <View>
            <Text>门店名称</Text>
            <Text>店铺描述</Text>
            <View className="caption-info">
              <View>莲湖区西门里南马道巷22号</View>
              <View>
                <AtIcon
                  prefixClass="icon"
                  value="integral-fill"
                  size="12"
                  color="#fff"
                ></AtIcon>
                小吃/快餐
              </View>
            </View>
          </View>
        </View>
        <View className="box">
          <View className="tips">
            <Image src={require("@/assets/images/bj_01.png")} />
            <View>
              <Text>领取您的专属权益卡</Text>
              <Text>激活有惊喜</Text>
            </View>
          </View>
          <View className="title">
            <View>您即刻享有的权益</View>
            <View className="subTitle">我是能自成长升等级的权益卡哦～</View>
          </View>
          <View className="at-row at-row--wrap content">
            <View className="at-col at-col-6">
              <AtIcon
                prefixClass="icon"
                value="polygon-one"
                size="55"
                color="#000"
              />
              <View className="caption">每日优惠</View>
              <View>整单9.5折</View>
              <View>不参与优惠活动商品除外</View>
            </View>
            <View className="at-col at-col-6">
              <AtIcon
                prefixClass="icon"
                value="polygon-one"
                size="55"
                color="#000"
              />
              <View className="caption">买单必赠</View>
              <View>单单赠送</View>
              <View>活动期间首单赠送双倍积分</View>
            </View>
            <View className="at-col at-col-6">
              <AtIcon
                prefixClass="icon"
                value="polygon-one"
                size="55"
                color="#000"
              />
              <View className="caption">打赏活动</View>
              <View>你、我、Ta之间的相互约定</View>
              <View>有趣、有料，在互动中去体验</View>
              <View>完成获得到商家打赏礼包</View>
            </View>
            <View className="at-col at-col-6">
              <AtIcon
                prefixClass="icon"
                value="polygon-one"
                size="55"
                color="#000"
              />
              <View className="caption">积分兑换</View>
              <View>积分可以用来抵扣</View>
              <View>也可以免费兑换好物</View>
              <View>满足你不同需求</View>
            </View>
          </View>
        </View>
        <View className="qrCode">
          <Image
            src={require("@/assets/images/QRcode.png")}
            onClick={() => {
              this.setState({ isOpened: true });
            }}
          />
          <Text>扫码或长按二维码</Text>
        </View>
        {/* 浮动弹层 */}
        <FloatLayout
          isOpened={isOpened}
          onClose={this.handleClose}
          renderContent={
            <View>
              <AtIcon
                prefixClass="icon"
                value="wechat"
                size="50"
                color="#434343"
              ></AtIcon>
              <Text>微信朋友圈</Text>
            </View>
          }
        />
      </View>
    );
  }
}
