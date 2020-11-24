import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtAvatar, AtButton, AtIcon } from "taro-ui";

import "./orderDetail.scss";

class OrderDetailIndex extends Component {
  static options = {
    addGlobalClass: true
  };

  config = {
    navigationBarTitleText: "订单详情"
  };

  state = {};

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <View className="order-detail-index2">
          <View className="caption">恭喜你，报名成功</View>

          <View className="card-wrap card-active at-row at-row__align--center">
            <View className="avatar-box">
              {/* <AtAvatar image={sItem.avatar} /> */}
            </View>
            <View className="at-col text-box">
              <View className="name ellipsis">活动名称</View>
              <View className="desc ellipsis">
                <Text className="space">抵扣积分：</Text>-5
              </View>
            </View>
            <View className="right-txt">
              <AtIcon value="chevron-right" size="10" color="#000000" />
            </View>
          </View>

          <View className="card-wrap card-team">
            <View className="at-row">
              <View className="avatar-box">
                {/* <AtAvatar image={sItem.avatar} /> */}
              </View>
              <View className="at-col text-box">
                <View className="name ellipsis">商家活动券</View>
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
              <View className="name ellipsis">活动内容</View>
              <View className="mt-28 text-box">内容描述</View>
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
        <View className="footer-pisition">扫码验券</View>
      </View>
    );
  }
}

export default OrderDetailIndex;
