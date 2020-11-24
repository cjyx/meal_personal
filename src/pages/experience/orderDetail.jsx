import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtAvatar, AtButton, AtIcon } from "taro-ui";
import "./orderDetail.scss";

import Curtain from "@/components/Curtain";

class OrderDetailIndex extends Component {
  static options = {
    addGlobalClass: true
  };

  config = {
    navigationBarTitleText: "订单详情"
  };

  state = {
    isOpened: false
  };
  handleClose = () => {
    this.setState({
      isOpened: false
    });
  };
  render() {
    const { isOpened } = this.state;
    const { type = "" } = this.$router.params;
    return (
      <View>
        <View className="order-detail-index">
          <View className="caption">恭喜你，拼团成功</View>

          <View className="card-wrap card-active at-row at-row__align--center">
            <View className="avatar-box">
              {/* <AtAvatar image={sItem.avatar} /> */}
            </View>
            <View className="at-col text-box">
              <View className="name ellipsis">活动名称</View>
              <View className="time ellipsis">周一至周日 免预约</View>
              <View className="desc ellipsis">24小时不成团退款</View>
            </View>
            <View className="right-txt">
              <Text>￥128</Text>
              <AtIcon value="chevron-right" size="10" color="#000000" />
            </View>
          </View>

          <View className="card-wrap card-team">
            <View className="at-row">
              <View className="avatar-box">
                {/* <AtAvatar image={sItem.avatar} /> */}
              </View>
              <View className="at-col text-box">
                <View className="name ellipsis">商家团购券</View>
                <View className="desc ellipsis">
                  <Text className="space">1张可用</Text>
                  <Text className="space">2021-01-22 23:59</Text>
                  <Text>到期</Text>
                </View>
                <View className="number">
                  <View className="at-row at-row__justify--between">
                    <View>2588 6818 3728</View>
                    <AtIcon
                      prefixClass="icon"
                      value="qrcode"
                      size="14"
                      color="#000000"
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="card-wrap card-store">
            <View className="at-row">
              <View className="avatar-box">
                {/* <AtAvatar image={sItem.avatar} /> */}
              </View>
              <View className="at-col text-box">
                <View className="name ellipsis">门店名称</View>
                <View className="desc ellipsis">店铺描述</View>
                <View className="number">
                  <View className="store-distance">
                    <AtIcon
                      prefixClass="icon"
                      value="location"
                      size="12"
                      color="#434343"
                    ></AtIcon>
                    <Text className="text-dom">500m</Text>
                    <AtIcon
                      value="chevron-right"
                      size="12"
                      color="##434343"
                    ></AtIcon>
                  </View>
                  <View className="store-address">
                    莲湖区西门里南马道巷22号
                  </View>
                </View>
                <View className="number color-848484">
                  <View className="at-row at-row__justify--between">
                    <View>咨询订座／发票／送货／使用规则等问题</View>
                    <View className="icon-box at-row at-row__justify--center at-row__align--center">
                      <View>
                        <AtIcon
                          prefixClass="icon"
                          value="phone-two"
                          size="36"
                          color="#000000"
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="card-wrap goods-info at-row">
            <View className="left-icon">
              <AtIcon
                prefixClass="icon"
                value="lock-fill"
                size="14"
                color="#000000"
              />
            </View>
            <View className="at-col">
              <View className="name ellipsis">商品信息</View>
              <View className="text-box mt-28">
                <View className="color-848484">类别名</View>
                <View className="at-row at-row__justify--between">
                  <View>商品名（1单位）</View>
                  <View>￥128</View>
                </View>
                <View className="at-row at-row__justify--between">
                  <View>商品名（1单位）</View>
                  <View>￥128</View>
                </View>
              </View>
              <View className="number font-24">
                <View className="color-848484">备注</View>
                <View>备注内容</View>
              </View>
            </View>
          </View>

          <View className="card-wrap card-tips at-row ">
            <View className="left-icon">
              <AtIcon
                prefixClass="icon"
                value="remind"
                size="14"
                color="#000000"
              />
            </View>
            <View className="at-col">
              <View className="name ellipsis">温馨提示</View>
              <View className="mt-28 text-box">
                <View className="bold">有效期*</View>
                <View className="dd">购买后360天内有效</View>
                <View className="bold">使用时间*</View>
                <View className="dd">10:00-21:00（周末、法定节假日通用）</View>
                <View className="bold">适用范围*</View>
                <View className="dd">全店通用</View>
                <View className="bold">规则提醒</View>
                <View className="dd">不再与其他优惠同享</View>
                <View className="dd">团购用户不可同时享受商家其他优惠</View>
                <View className="dd">店内有包间</View>
                <View className="dd">无需预约</View>
                <View className="dd">发票问题请咨询商家</View>
              </View>
            </View>
          </View>

          <View className="card-wrap at-row order-info">
            <View className="left-icon">
              <AtIcon
                prefixClass="icon"
                value="form"
                size="14"
                color="#000000"
              />
            </View>
            <View className="at-col text-box">
              <View className="name ellipsis">订单信息</View>
              <View className="mt-28">
                <View className="at-row">
                  <View className="dt space">订单编号：</View>
                  <View>333214159019</View>
                </View>
                <View className="at-row">
                  <View className="dt space">手机号码：</View>
                  <View>137****5503</View>
                </View>
                <View className="at-row">
                  <View className="dt space">付款时间：</View>
                  <View>2020-02-15 20:20</View>
                </View>
                <View className="at-row">
                  <View className="dt space">数量：</View>
                  <View>1</View>
                </View>
                <View className="at-row">
                  <View className="dt space">总价：</View>
                  <View>¥128</View>
                </View>
                <View className="at-row">
                  <View className="dt space">实付：</View>
                  <View>¥128</View>{" "}
                </View>
              </View>
            </View>
          </View>
        </View>
        {type === "03" && (
          <View className="footer-pisition order-detail-index_foot at-row">
            <View className="at-col at-col-6 item black">再来一单</View>
            <View
              className="at-col at-col-6 item yellow"
              onClick={() => {
                this.setState({ isOpened: true });
              }}
            >
              扫码验券
            </View>
          </View>
        )}

        {type === "02" && <View className="footer-pisition">立即支付</View>}

        {type === "04" && (
          <View className="footer-pisition black">再来一单</View>
        )}
        <Curtain
          isOpened={isOpened}
          onClose={this.handleClose}
          title="商家扫描券码即可消费"
        >
          <View className="qrcode-content">
            <Image
              src={require("@/assets/images/qrcode1.png")}
              className="qrcode-picture"
            />
          </View>
        </Curtain>
      </View>
    );
  }
}

export default OrderDetailIndex;
