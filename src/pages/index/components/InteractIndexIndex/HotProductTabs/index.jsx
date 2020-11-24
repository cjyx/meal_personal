import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Swiper, SwiperItem } from "@tarojs/components";
import { AtAvatar, AtIcon, AtTag, AtButton } from "taro-ui";

import Steps from "@/components/Steps";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    stepItems: [
      {
        title: "发起拼团",
        icon: {
          value: "flag",
          inactiveColor: "#c0c0c0",
          size: "30"
        }
      },
      {
        title: "邀约拼单",
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
    ],
    direction: "row",
    arrData: [1, 2, 3, 4]
  };
  render() {
    const { direction, stepItems, arrData } = this.state;
    return (
      <View className="hot-activity">
        <View className="group-container">
          <Steps items={stepItems} direction={direction} />
          <Swiper className="swiper" displayMultipleItems="2.5">
            {arrData.map(item => (
              <SwiperItem key={item}>
                <View className="list-container">
                  <View className="top">
                    <Image src={require("@/assets/images/product.jpg")} />
                    <AtTag circle>2元拼团 | 4.4KM</AtTag>
                  </View>
                  <View className="list-content">
                    <View className="title ellipsis">
                      产品简称产品简称产品简称
                    </View>

                    <View className="price">
                      <AtIcon
                        prefixClass="icon"
                        value="tags"
                        size="15"
                        color="#FDD000"
                      />
                      <View className="current">
                        <Text>¥</Text>21
                      </View>
                      <Text className="original">¥128</Text>
                    </View>
                  </View>
                </View>
              </SwiperItem>
            ))}
          </Swiper>
        </View>
        <View className="hot-main-box">
          <View className="title">餐饮</View>
          <View className="bussiness-box">
            <View className="info image-box">
              <View className="store-caption">
                <AtAvatar image={require("@/assets/images/user.png")} />
                <View>
                  <Text>门店名称</Text>
                  <Text>店铺描述</Text>
                </View>
              </View>
              <Image
                className="image"
                src={require("@/assets/images/product.jpg")}
                mode="aspectFill"
              />
            </View>
            <View className="active-name">活动名称</View>
            <View className="text-box at-row at-row__align--center">
              <View className="at-col info">
                <AtIcon
                  prefixClass="icon"
                  value="tags-color"
                  size="16"
                  color="#FDD000"
                ></AtIcon>
                <View className="price">
                  <View className="current">
                    <Text>¥</Text>21
                  </View>
                  <Text className="original">门市价¥169</Text>
                </View>
                <AtIcon
                  prefixClass="icon"
                  value="location"
                  size="12"
                  color="#434343"
                ></AtIcon>
                <Text className="space space2">莲湖区</Text>
                <Text className="space">500m</Text>
                <AtIcon
                  prefixClass="icon"
                  value="integral-fill"
                  size="12"
                  color="#434343"
                ></AtIcon>
                <Text className="space2">小吃/快餐</Text>
              </View>
              <View className="btn">
                <AtButton
                  type="primary"
                  circle
                  size="small"
                  onClick={() => {
                    Taro.navigateTo({ url: "/pages/interact/product" });
                  }}
                >
                  去开团
                </AtButton>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
