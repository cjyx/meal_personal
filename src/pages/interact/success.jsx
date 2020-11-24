import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtIcon, AtInput, AtButton, AtDivider } from "taro-ui";

import bannerPng from "@/assets/images/AD.jpg";

import "./signUp.scss";

const mockIntegralList = [
  {
    brandName: "品牌名称",
    desc: "商品描述，最大显示两行",
    number: 568,
    picture: ""
  },
  {
    brandName: "品牌名称",
    desc: "商品描述，最大显示两行",
    number: 568,
    picture: ""
  },
  {
    brandName: "品牌名称",
    desc: "商品描述，最大显示两行",
    number: 568,
    picture: ""
  },
  {
    brandName: "品牌名称",
    desc: "商品描述，最大显示两行",
    number: 568,
    picture: ""
  }
];

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  config = {
    navigationBarTitleText: "抵扣成功"
  };
  state = {};

  render() {
    return (
      <View>
      <View className="sign-up-success_index">
        <View className="title1">
          <AtIcon
            prefixClass="icon"
            value="check-circle"
            size="20"
            color="#000000"
          ></AtIcon>
          <Text className="space2">抵扣成功</Text>
        </View>
        <View className="title2">9积分</View>

        <View className="btn1">
          <AtButton circle size="small">
            查看订单
          </AtButton>
        </View>

        <View className="prize-box">
          <View className="prize-tit">下单免费抽奖</View>
          <View className="prize-small-box">
            <View className="prize-tit2">[本期抽奖奖品]</View>
            <View>AJ1 High 85 “Varsity red”反转黑红休～</View>
            <View className="prize-img">
              <Image className="image" src={bannerPng} />
            </View>
            <View className="prize-btn">
              <AtButton circle size="small">
                我想参与
              </AtButton>
            </View>
          </View>
        </View>
        <View className="integral-child-tabs_exchange">
          <AtDivider
            content="为你推荐"
            fontColor="#000"
            lineColor="#000"
            className="recommend-title"
          />
          <View className="at-row at-row--wrap">
            {mockIntegralList.map(item => (
              <View
                key=""
                className="at-col at-col-6 integral-child-tabs_exchange--item"
              >
                <View className="img-box">
                  {/* <Image className='image' src={item.picture} mode='aspectFit' /> */}
                </View>
                <View className="text-box">
                  <View className="tit ellipsis">{item.brandName}</View>
                  <View className="desc">{item.desc}</View>
                  <View className="at-row at-row__align--end integral-box">
                    <View className="at-col">
                      {item.number}
                      <Text className="font-20 no-bold">积分</Text>
                    </View>
                    <AtIcon
                      prefixClass="icon"
                      value="more"
                      size="20"
                      color="#c3c3c3"
                    />
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
      </View>
    );
  }
}
