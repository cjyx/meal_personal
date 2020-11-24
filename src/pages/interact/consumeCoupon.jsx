import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image, Radio } from "@tarojs/components";
import { AtAvatar, AtIcon, AtFloatLayout, AtButton, AtCard } from "taro-ui";
import "./consumeCoupon.scss";

export default class extends Component {
  config = {
    navigationBarTitleText: "消费券"
  };
  state = {
    voucherList: [
      {
        title: "消费满100元减10元",
        desc: "10元代金券",
        tip: "周一至周日11:30-21:30  单次可用2张 免预约 过期不退",
        ticket: "代金券",
        type: "1",
        checked: false
      },
      {
        title: "消费满200元减30元",
        desc: "第二份免单",
        tip: "指定商品可用 免预约",
        ticket: "买赠券",
        type: "2",
        checked: false
      }
    ]
  };
  render() {
    const { voucherList } = this.state;
    return (
      <View>
        <View className="coupon-container">
          <View className="store-box">
            <Text className="title">适用店铺</Text>
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
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="share"
                    size="23"
                    color="#434343"
                  />
                </View>
              </View>
            </View>
          </View>
          <View className="voucher-container">
            {voucherList.map(item => (
              <View className="voucher-list">
                <View className="voucher-content">
                  <Radio
                    className="radio"
                    value={item.ticket}
                    checked={item.checked}
                    color="#FDD000"
                  />
                  <View className="titile">{item.title}</View>
                  <View className="tips">
                    <Text>{item.desc}</Text>
                    <View
                      className={
                        item.type == 1 ? "ticket-voucher" : "ticket-sale"
                      }
                    >
                      {item.ticket}
                    </View>
                  </View>
                  <View className="button">
                    <View>{item.tip}</View>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <AtCard title="使用规则" className="card-container usage-rule">
            <Text>有效期：</Text>
            <Text>使用时间：</Text>
            <Text>适用范围：</Text>
            <Text>无需预约，消费高峰期可能需要等位</Text>
            <Text>商家提供免费WIFI</Text>
            <Text>停车位收费标准：有停车位</Text>
            <Text>发票问题请询问商家</Text>
            <Text>团购用户不可同时享受商家其他优惠</Text>
            <Text>酒水饮料等问题，请致电商家咨询，以商家反馈为准</Text>
            <Text>不兑现、不找零</Text>
          </AtCard>
          <AtCard
            title="成为兑集会员"
            className="card-container member-container"
          >
            <View className="box">
              <Image src={require("@/assets/images/bj_02.png")} />
              <View className="content">
                <View className="top">
                  <Text>365礼享会员卡／买单必返</Text>
                  <AtButton type="secondary" circle>
                    立即查看
                  </AtButton>
                </View>
                <View className="desc">
                  ¥<Text>69</Text>/一年
                </View>
              </View>
            </View>
          </AtCard>
          <View style={{ height: "70px" }}></View>
        </View>
        <View className="footer-pisition">
          <View className="at-row">
            <View className="at-col  at-col--auto left-content">
              <AtIcon
                prefixClass="icon"
                value="integral"
                size="20"
                color="#000"
              />
              <View className="integral">
                <Text>10/</Text>兑换积分
              </View>
              <View className="desc">可省10元</View>
            </View>
            <View className="at-col" className="btn">
              <AtButton type="primary" circle>
                立即兑换
              </AtButton>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
