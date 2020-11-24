import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtAvatar, AtIcon, AtTag, AtButton } from "taro-ui";

const mockData = [
  {
    id: "1",
    number: 1000,
    title: "邀约好友领取权益礼卡",
    image: require("@/assets/images/product.jpg")
  },
  {
    id: "2",
    number: 1000,
    title: "来挑战平板支撑至少一分钟，为了诱人的马甲线",
    image: require("@/assets/images/product.jpg")
  },
  {
    id: "3",
    number: 1000,
    title: "邀约好友领取权益礼卡",
    image: require("@/assets/images/product.jpg")
  },
  {
    id: "4",
    number: 1000,
    title: "邀约好友领取权益礼卡",
    image: require("@/assets/images/product.jpg")
  }
];

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    return (
      <View className="at-row at-row--wrap at-row__justify--between appoint-activity">
        {mockData.map(item => (
          <View
            key={item.id}
            className="at-col at-col-6  at-col--wrap appoint-item"
          >
            <View className="top">
              <Image src={item.image} />
              <AtTag className="number" type="primary">
                {item.number}+次
              </AtTag>
            </View>
            <View className="title">{item.title}</View>
            <View className="bottom">
              <AtButton
                type="primary"
                size="small"
                circle
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/experience/resend" });
                }}
              >
                立即约定
              </AtButton>
              <View className="text">
                <AtIcon
                  prefixClass="icon"
                  value="integral"
                  size="15"
                  color="#229E8E"
                />
                攒积分
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
