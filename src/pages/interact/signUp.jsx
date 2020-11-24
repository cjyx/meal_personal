import Taro, { Component } from "@tarojs/taro";
import { View, Swiper, SwiperItem, Image, Text } from "@tarojs/components";
import { AtIcon, AtButton, AtAvatar, AtCard, AtTag } from "taro-ui";

import bannerPng from "@/assets/images/AD.jpg";

import "./signUp.scss";

const mockData = [
  { icon: "chat", title: "活动内容", desc: "家居摆放对****的影响" },
  { icon: "clause", title: "活动规则", desc: "满18岁周岁，不限性别" },
  { icon: "calendar", title: "报名截止", desc: "至2020/03/30结束" },
  {
    icon: "alarm-clock",
    title: "活动时间",
    desc: "固定时间（2020/04/01 8:00参加）  周期时间"
  },
  { icon: "gift-fill", title: "活动奖励", desc: "奖品名称" }
];

const mockIntegralData = [
  {
    child: [
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" },
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" },
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" }
    ]
  },
  {
    child: [
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" },
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" },
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" }
    ]
  },
  {
    child: [
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" },
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" },
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" }
    ]
  },
  {
    child: [
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" },
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" },
      { img: bannerPng, desc: "商品描述", num: 128, brandName: "品牌名称" }
    ]
  }
];

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  config = {
    navigationBarTitleText: "活动报名"
  };
  state = {};

  render() {
    return (
      <View>
        <View className="sign-up_index">
          <Swiper
            className="banner-swiper"
            indicatorDots
            circular
            indicatorColor="#FDD000"
            indicatorActiveColor="#000000"
          >
            <SwiperItem key="">
              <View className="img-box">
                <Image className="image" src={bannerPng} mode="aspectFill" />
              </View>
            </SwiperItem>
          </Swiper>

          <View className="caption at-row">
            <View className="at-col">
              <View className="title">活动主标题</View>
              <View className="desc ellipsis">活动描述语</View>
            </View>
            <View className="icon-box">
              <AtIcon
                prefixClass="icon"
                value="export"
                size="20"
                color="#434343"
              />
            </View>
          </View>

          <View className="sign-up_main-box active-content">
            {mockData.map((item, index) => (
              <View
                className={`item at-row ${index === mockData.length - 1 &&
                  "last"}`}
                key=""
              >
                <View className="icon-box">
                  <AtIcon
                    prefixClass="icon"
                    value={item.icon}
                    size="18"
                    color="#434343"
                  />
                </View>
                <View>
                  <View className="tit">{item.title}</View>
                  <View className="desc">{item.desc}</View>
                </View>
              </View>
            ))}
          </View>

          <AtCard
            title="适用店铺"
            className="card-container sign-up-container store-box"
          >
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
          <AtCard
            title="商家推荐"
            className="card-container sign-up-container store-box"
          >
            <View className="bussiness-box">
              <View className="image-box">
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
                <View className="at-col info-box">
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
          </AtCard>
          <AtCard
            title="积分兑换"
            extra="查看更多"
            className="card-container activityCard-container sign-up-container"
          >
            <Swiper
              indicatorColor="#848484"
              indicatorActiveColor="#434343"
              circular
              indicatorDots
              autoplay
            >
              {mockIntegralData.map(item => (
                <SwiperItem>
                  <View className="at-row credits-group">
                    {item.child.map(sItem => (
                      <View className="at-col">
                        <View className="title">
                          <Image src={sItem.img} />
                          <AtTag> {sItem.brandName}</AtTag>
                        </View>
                        <View className="desc">
                          <Text>{sItem.desc}</Text>
                          <View>
                            <Text>{sItem.num}</Text> 积分
                          </View>
                        </View>
                      </View>
                    ))}
                  </View>
                </SwiperItem>
              ))}
            </Swiper>
          </AtCard>
          <AtCard title="温馨提示" className="card-container sign-up-container">
            <View className="tips-text-box">
              <View>*家居摆放对****的影响</View>
              <View>*家居摆放对****的影响</View>
            </View>
          </AtCard>
        </View>
        <View className="footer-pisition">
          <View className="box">
            <AtIcon
              prefixClass="icon"
              value="integral"
              size="14"
              color="#434343"
            ></AtIcon>
            <Text className="space2">5积分报名参与</Text>
            <View className="right">
              <View
                className="content-btn"
                onClick={() => {
                  Taro.navigateTo({ url: "/pages/interact/order" });
                }}
              >
                <Image src={require("@/assets/images/bj_04.png")} />
                <View className="desc">
                  <View className="space">
                    <Text className="font-28">立即参与</Text>
                  </View>
                  <AtIcon
                    prefixClass="icon"
                    value="right"
                    size="16"
                    color="#FDD000"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
