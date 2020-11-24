import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtAvatar, AtIcon } from "taro-ui";

const mockData = [
  {
    id: "1",
    beginTime: "2020.03.05",
    endTime: "2020.05-06",
    name: "活动名称",
    image: require("@/assets/images/hpimg_02.jpg")
  },
  {
    id: "2",
    beginTime: "2020.03.05",
    endTime: "2020.05-06",
    name: "活动名称",
    image: require("@/assets/images/hpimg_02.jpg")
  }
];

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    return (
      <View className="recent-activity">
        {mockData.map(item => (
          <View key={item.id} className="activity-item" onClick={()=>{
            Taro.navigateTo({url:"/pages/interact/signUp"})
          }}>
            <View className="content">
              <View className="time">
                <AtIcon
                  prefixClass="icon"
                  value="clock"
                  size="15"
                  color={"#000"}
                />
                {item.beginTime}-{item.endTime}
              </View>
              <View className="name">{item.name}</View>
            </View>
            <Image src={item.image} className="pictrue" />
          </View>
        ))}
      </View>
    );
  }
}
