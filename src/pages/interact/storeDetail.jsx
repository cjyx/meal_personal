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
import "./storeDetail.scss";
import bannerPng from "@/assets/images/AD.jpg";
import SwiperProp from "@/components/Swiper/";
import RightsProp from "./components/Rights";

export default class extends Component {
  config = {
    navigationBarTitleText: "门店详情"
  };
  state = {
    imgList: [
      { url: require("@/assets/images/hpimg_02.jpg") },
      { url: require("@/assets/images/hpimg_02.jpg") },
      { url: require("@/assets/images/hpimg_02.jpg") }
    ],
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
    ],
    tabList: [{ title: "会员福利" }, { title: "推荐单品" }],
    voucherList: [
      {
        title: "消费满100元减10元",
        desc: "周一至周日11:30-21:30",
        count: "单次可用1张",
        tip: "全店通用 免预约",
        integral: 10,
        money: 20
      },
      {
        title: "消费满200元减30元",
        desc: "周一至周日11:30-21:30",
        count: "不限张数",
        tip: "指定商品可用 免预约",
        integral: 20,
        money: 40
      }
    ],
    current: 0
  };
  handleTabClick = value => {
    this.setState({
      current: value
    });
  };
  render() {
    const {
      imgList,
      tabList,
      voucherList,
      mockIntegralData,
      current
    } = this.state;
    return (
      <View>
        <View className="store-detail">
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
              <View className="icon-group">
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="phone-two"
                    size="42"
                    color="#434343"
                  ></AtIcon>
                </View>
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="tag"
                    size="24"
                    color="#434343"
                  ></AtIcon>
                </View>
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="share"
                    size="40"
                    color="#434343"
                  ></AtIcon>
                </View>
              </View>
            </View>
          </View>
          <SwiperProp indicatorDots={true} imgList={imgList} />
          <View className="equity-container">
            <AtCard
              extra="我的卡包"
              title="您的权益卡"
              className="card-container"
            >
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
                    <View>待激活</View>
                    <AtIcon
                      prefixClass="icon"
                      value="qrcode-circle"
                      size="28"
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
                <AtIcon
                  prefixClass="icon"
                  value="right"
                  size="12"
                  color="#000"
                  className="card-extra"
                />
              </View>
              <View className="Tips">
                <view>温馨提示</view>
                <Text>1、激活享会员优惠权益及消费福利（赠送1:1积分）</Text>
                <Text>2、积分可用于抵扣，也可用于免费兑换商品</Text>
                <Text>3、优惠权益满足条件自动升级</Text>
                <Text>4、更多详情可点击进入权益卡查看</Text>
              </View>
            </AtCard>
            <View className="picture">
              <Image src={require("@/assets/images/AD.jpg")} />
            </View>
            <AtTabs
              scroll
              current={current}
              tabList={tabList}
              onClick={this.handleTabClick}
              className="tab-container"
            >
              <AtTabsPane current={current} index={0}>
                {voucherList.map(item => (
                  <View className="voucher-list">
                    <Image src={require("@/assets/images/product.jpg")} />
                    <View className="voucher-content">
                      <View className="titile">{item.title}</View>
                      <View className="time">
                        {item.desc} {item.count}
                      </View>
                      <View className="tips">
                        <Text>{item.tip}</Text> <view>代金券</view>
                      </View>
                      <View className="button">
                        <View>
                          <AtIcon
                            prefixClass="icon"
                            value="integral"
                            size="16"
                            color="#000"
                          ></AtIcon>
                          <Text>{item.integral}</Text>
                          兑换积分／抵扣{item.money}元
                        </View>
                        <AtButton
                          type="secondary"
                          size="small"
                          circle
                          onClick={() => {
                            Taro.navigateTo({
                              url: "/pages/interact/consumeCoupon"
                            });
                          }}
                        >
                          即刻兑换
                        </AtButton>
                      </View>
                    </View>
                  </View>
                ))}
                <View className="more">查看更多</View>
              </AtTabsPane>
            </AtTabs>
            <AtCard
              extra="更多优惠"
              title="优惠套餐"
              className="card-container"
            >
              <View className="list-container">
                <Image src={require("@/assets/images/product.jpg")} />
                <View className="list-content">
                  <View className="titile">产品简称</View>
                  <View className="desc">产品构成</View>
                  <View className="desc">周一至周日 | 免预约</View>
                  <View className="money">
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
                    <AtTag size="small" circle>
                      5.8折
                    </AtTag>
                  </View>
                  <AtButton type="primary" size="normal" circle>
                    赠送128积分
                  </AtButton>
                </View>
              </View>
              <View className="list-container">
                <Image src={require("@/assets/images/product.jpg")} />
                <View className="list-content">
                  <View className="titile">产品简称</View>
                  <View className="desc">产品构成</View>
                  <View className="desc">周一至周日 | 免预约</View>
                  <View className="money">
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
                    <AtTag size="small" circle>
                      5.8折
                    </AtTag>
                  </View>
                  <AtButton type="primary" size="normal" circle>
                    赠送128积分
                  </AtButton>
                </View>
              </View>
            </AtCard>
            <AtCard title="推荐单品" className="card-container">
              <View className="remonmend-container">
                <Text className="title">
                  商家招牌菜（显示推荐菜品发布数量）
                </Text>
                <Swiper
                  className="remonmend-swiper"
                  indicatorColor="#E3E3E3"
                  indicatorActiveColor="#229E8E"
                  circular
                  indicatorDots
                  autoplay
                >
                  <SwiperItem>
                    <View className="dishes-item">
                      <Image src={require("@/assets/images/hpimg_02.jpg")} />
                      <View>
                        <Text className="name">菜品名称</Text>
                        <View>
                          <Text>菜品介绍</Text>
                          <Text>¥128</Text>
                        </View>
                      </View>
                    </View>
                  </SwiperItem>
                  <SwiperItem>
                    <View className="dishes-item">
                      <Image src={require("@/assets/images/hpimg_02.jpg")} />
                      <View>
                        <Text className="name">菜品名称</Text>
                        <View>
                          <Text>菜品介绍</Text>
                          <Text>¥128</Text>
                        </View>
                      </View>
                    </View>
                  </SwiperItem>
                </Swiper>
                <Swiper
                  className="remonmend-pic-swiper"
                  displayMultipleItems="3"
                >
                  {[1, 2, 3, 4].map(item => (
                    <SwiperItem className="pic-swiper-item">
                      <Image src={require("@/assets/images/product.jpg")} />
                    </SwiperItem>
                  ))}
                </Swiper>
              </View>
            </AtCard>
            <AtCard
              title="店铺活动"
              className="card-container activityCard-container"
            >
              <Swiper
                indicatorColor="#848484"
                indicatorActiveColor="#434343"
                circular
                indicatorDots
                autoplay
              >
                <SwiperItem className="pic-swiper-item">
                  <View className="activity-container">
                    <View>
                      <View className="circle">
                        <AtIcon
                          prefixClass="icon"
                          value="lock-fill"
                          size="30"
                          color="#A0A0A0"
                          className="card-extra"
                        />
                      </View>
                      <Text>会员激活礼</Text>
                      <AtButton type="primary" size="small">
                        立即查看
                      </AtButton>
                    </View>
                    <View>
                      <View className="circle">
                        <AtIcon
                          prefixClass="icon"
                          value="gift-fill"
                          size="30"
                          color="#A0A0A0"
                          className="card-extra"
                        />
                      </View>
                      <Text>会员激活礼</Text>
                      <AtButton type="primary" size="small">
                        立即查看
                      </AtButton>
                    </View>
                  </View>
                </SwiperItem>
              </Swiper>
            </AtCard>
            <AtCard
              title="积分兑换"
              extra="查看更多"
              className="card-container activityCard-container"
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
            {/* 如何使用权益 */}
            <RightsProp />
          </View>
        </View>
        <View className="footer-pisition">到店优惠买单赠送积分</View>
      </View>
    );
  }
}
