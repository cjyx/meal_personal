import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtIcon, AtCard } from "taro-ui";

//使用权益
export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    return (
      <View className="rights-container">
        <AtCard title="如何使用权益" className="card-container">
          <View className="at-row  at-row--wrap">
            <View className="at-col at-col-4 at-col--wrap rights-item">
              <Text className="title">STEP01</Text>
              <View className="icon-content">
                <AtIcon
                  prefixClass="icon"
                  value="polygon-three"
                  size="60"
                  color="#00ADB5"
                  className="card-extra"
                />
              </View>
              <Image src={require("@/assets/images/rights_01.png")} />
              <View className="content">
                <Text>到店消费</Text>
                <Text>用权益买单支付</Text>
                <Text className="sub-text">买单必赠</Text>
                <View className="line"></View>
              </View>
            </View>
            <View className="at-col at-col-4 at-col--wrap rights-item">
              <Text className="title">STEP02</Text>
              <View className="icon-content">
                <AtIcon
                  prefixClass="icon"
                  value="polygon-four"
                  size="60"
                  color="#FF5E5B"
                  className="card-extra"
                />
              </View>
              <Image src={require("@/assets/images/rights_02.png")} />
              <View className="content">
                <Text>扫商家收款码或</Text>
                <Text>出示权益卡二维码</Text>
                <Text className="sub-text">激活商家权益</Text>
                <View className="line"></View>
              </View>
            </View>
            <View className="at-col at-col-4 at-col--wrap rights-item">
              <Text className="title">STEP03</Text>
              <View className="icon-content">
                <AtIcon
                  prefixClass="icon"
                  value="polygon-one"
                  size="60"
                  color="#FFA515"
                  className="card-extra"
                />
              </View>
              <Image src={require("@/assets/images/rights_03.png")} />
              <View className="content">
                <Text>享折后价</Text>
                <Text className="sub-text">赠送兑换积分</Text>
                <View className="line"></View>
              </View>
            </View>
          </View>
        </AtCard>
      </View>
    );
  }
}
