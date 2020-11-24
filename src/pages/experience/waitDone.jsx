import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtAvatar, AtButton, AtIcon } from "taro-ui";

import "./waitDone.scss";

class WaitDoneIndex extends Component {
  config = {
    navigationBarTitleText: "再次发送"
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
        <View className="wait-done-index">
          <View className="user-info_wrap at-row at-row__justify--between">
            <View>
              <View className="avatar-box">
                {/* <AtAvatar image={sItem.avatar} /> */}
              </View>
              <View className="store-name">商家名@用户昵称 </View>
            </View>
            <View>
              <View className="at-row at-row__justify--end">
                <View className="avatar-box-2">
                  <View className="avatar">
                    <AtAvatar circle />
                  </View>
                  <View className="btn-box">
                    <AtButton type="primary" circle size="small">
                      *昵称
                    </AtButton>
                  </View>
                </View>
                <View className="pt-40">
                  <View className="icon-box">
                    <AtIcon
                      prefixClass="icon"
                      value="down"
                      size="10"
                      color="#ffffff"
                    />
                  </View>
                </View>
                <View className="avatar-box-2">
                  <View className="avatar">
                    <AtAvatar circle />
                  </View>
                  <View className="btn-box">
                    <AtButton type="primary" circle size="small">
                      *昵称
                    </AtButton>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="wait-done-index_main">
            <View className="title">邀约好友Ta去领取专属权益卡</View>
            <View className="at-row at-row__justify--between">
              <View className="at-col desc ellipsis">
                hello!活动期间，邀约好友免费领取权益卡攒积分，积分可兑换成商品，线上包邮、线下自提，激活买单打折赠积分，消费多少送多少，还能领取激活礼，快约ta加入吧！
              </View>
              <View className="desc-right">
                <Text>查看活动内容</Text>
                <AtIcon
                  value="chevron-right"
                  size="14"
                  color="#27A090"
                ></AtIcon>
              </View>
            </View>
          </View>

          <View className="wait-done-index_main no-arrow no-pb">
              <View className="select-rights">查看领取的权益卡</View>
            <View className="title2">商家打赏规则</View>
            <View className="paragraph2 at-row at-row__justify--between at-row__align--center">
              <View>活动邀约激活已完成</View>
              <View className="btn">
                <AtButton circle>立即领取</AtButton>
              </View>
            </View>
            <View className="paragraph2 at-row at-row__justify--between">
              <View>你和ta任意一人完成打卡 1次</View>
              <View className="right-txt">
                <View>20积分</View>
                <View>全场8.5折 券/1张</View>
              </View>
            </View>
            <View className="active-tit">活动说明：</View>
            <View className="number-box">
              <View className="space">
                <AtIcon
                  prefixClass="icon"
                  value="down"
                  size="12"
                  color="#848484"
                />
              </View>
              <View className="number">
                约定编号：SX123456789012236778903456
              </View>
            </View>
          </View>

          <View className="wait-done-index_main no-arrow">
            <View className="title2 at-row at-row__justify--between">
              <View className="at-col desc ellipsis">
                到店打卡，得商家打赏礼包
              </View>
              <View>
                <AtIcon value="alert-circle" size="16" color="#27A090"></AtIcon>
              </View>
            </View>
            <View>应完成时间：2020-03-05 23:59:59</View>
            <View>第一期 更多记录 ></View>
          </View>
        </View>
        <View className="footer-pisition wait-index_foot at-row">
          <View className="at-col">
            <View className="tit">等待完成</View>
            <View className="desc">2020-02-05 23:59 前</View>
          </View>
          <View className="btn">
            <AtButton type="primary">到店打卡</AtButton>
          </View>
        </View>
      </View>
    );
  }
}

export default WaitDoneIndex;
