import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtAvatar, AtIcon, AtFloatLayout, AtButton, AtGrid } from "taro-ui";
import "./receiveCard.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "领取权益卡"
  };
  render() {
    return (
      <View className="receive-card-wrapper">
        <View className="receive-card-container">
          <View
            className="card"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/interact/rightsDetail"
              });
            }}
          >
            <View className="card-content">
              <View className="star">
                <View>
                  <Image src={require("@/assets/images/card_01.png")} />
                  <View>
                    <Image src={require("@/assets/images/star_01.png")} />
                    <View>
                      <AtIcon
                        prefixClass="icon"
                        value="user"
                        size="14"
                        color="#000"
                      ></AtIcon>
                      粉丝昵称
                    </View>
                  </View>
                </View>
              </View>
              <View className="qrcode">
                <AtIcon
                  prefixClass="icon"
                  value="qrcode-circle"
                  size="32"
                  color="#000"
                ></AtIcon>
              </View>
            </View>
            <View className="card-caption">
              <View>门店名称</View>
              <Text>等级名称</Text>
            </View>
            <Text className="card-number">313 9732 6643 8768</Text>
            <Image
              src={require("@/assets/images/icon_01.png")}
              className="badge"
            />
          </View>
          <View className="text-box">
            <View className="title">你已领取了商家权益礼卡</View>
            <View className="tip">买单享优惠还能返利获赠积分</View>
            <View className="desc">加入活动攒积分兑好物</View>
            <View className="desc">更多活动奖励可以查看门店主页</View>
          </View>
        </View>
        <View className="receive-card-container desc-content">
          <View className="box">
            <Text>激活有礼</Text>
            <Text>首单消费送双倍积分</Text>
            <Text>赠送激活礼券</Text>
          </View>
        </View>
        <View className="common-button">
          <AtButton
            onClick={() => {
              Taro.redirectTo("/pages/interact/storeDetail/rightsDetail");
            }}
          >
            权益卡详情
          </AtButton>
        </View>
      </View>
    );
  }
}
