import Taro, { Component, Config } from "@tarojs/taro";
import {
  View,
  Button,
  Text,
  Image,
  Swiper,
  SwiperItem
} from "@tarojs/components";
import {
  AtAvatar,
  AtIcon,
  AtTabs,
  AtTabsPane,
  AtCard,
  AtButton,
  AtTag
} from "taro-ui";
import "./rightsRegister.scss";
import bannerPng from "@/assets/images/AD.jpg";
//使用权益
export default class extends Component {
  config = {
    navigationBarTitleText: "权益卡领取注册页"
  };
  state = {
    mockIntegralData: [
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
    ]
  };
  render() {
    const { mockIntegralData } = this.state;
    return (
      <View>
        <View className="rights-reg-box">
          <View className="rights-reg-title">
            <AtIcon prefixClass="icon" value="close" size="24" color="#000" />
            邀你领取一张您的专属权益卡
          </View>
          <View className="rights-reg-container">
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
                      color="#434343"
                    ></AtIcon>
                    小吃/快餐
                  </View>
                </View>
              </View>
            </View>
            <View className="title">您即刻享有的权益</View>
            <View className="tips">我是能自成长升等级的权益卡哦～</View>
            <AtIcon
              className="icon-view"
              prefixClass="icon"
              value="polygon-one"
              size="60"
              color="#000000"
            />
            <View className="sub-title">每日优惠</View>
            <View className="desc">整单9.5折</View>
            <View className="desc">不参与优惠活动商品除外</View>
            <View className="card">
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
            <View className="sub-title">可以通过门店活动获取其他优惠礼券</View>
            <AtIcon
              className="icon-view"
              prefixClass="icon"
              value="polygon-two"
              size="60"
              color="#000000"
            />
            <View className="sub-title">买单必赠</View>
            <View className="desc">单单赠送</View>
            <View className="desc">活动期间推出双倍赠送</View>
            <View className="content">
              <View className="circle">
                <AtIcon
                  prefixClass="icon"
                  value="integral"
                  size="30"
                  color="#848484"
                />
              </View>
              <View className="text">买单必赠，消费1元赠送1积分</View>
            </View>
            <AtIcon
              className="icon-view"
              prefixClass="icon"
              value="polygon-five"
              size="60"
              color="#000000"
            />
            <View className="sub-title">积分兑换</View>
            <View className="desc">积分可以用来抵扣</View>
            <View className="desc">也可以免费兑换好物</View>
            <View className="desc">满足你不同需求</View>
            <View style={{ width: "100%" }}>
              <AtCard className="card-container activityCard-container">
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
            </View>
            <AtIcon
              className="icon-view"
              prefixClass="icon"
              value="polygon-two"
              size="60"
              color="#000000"
            />
            <View className="sub-title">打赏活动</View>
            <View className="desc">你、我、Ta之间的相互约定</View>
            <View className="desc">有趣、有料，在互动中去体验</View>
            <View className="desc">完成后获得商家打赏礼包</View>
            <View className="activite at-row at-row__align--center">
              <View className="at-col at-col-2 right">
                <AtIcon
                  prefixClass="icon"
                  value="exp-fill"
                  size="30"
                  color="#434343"
                />
              </View>
              <View className="at-col at-col-2 right">
                <AtIcon
                  prefixClass="icon"
                  value="mutual"
                  size="28"
                  color="#848484"
                />
              </View>
              <View className="at-col at-col--auto caption">
                <AtIcon
                  prefixClass="icon"
                  value="clock"
                  size="20"
                  color="#434343"
                />
                <Text>约定事宜及时间</Text>
              </View>
              <View className="at-colo at-col-2 mutual">
                <AtIcon
                  prefixClass="icon"
                  value="mutual"
                  size="28"
                  color="#848484"
                />
              </View>
              <View className="at-col at-col-2">
                <AtIcon
                  prefixClass="icon"
                  value="shop-fill"
                  size="30"
                  color="#434343"
                />
              </View>
            </View>
          </View>
          <View className="common-button">
            <AtButton>即刻领取</AtButton>
          </View>
        </View>
      </View>
    );
  }
}
