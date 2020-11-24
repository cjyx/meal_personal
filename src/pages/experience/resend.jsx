import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { AtAvatar, AtButton, AtIcon } from "taro-ui";

import "./resend.scss";

class ResendIndex extends Component {
  config = {
    navigationBarTitleText: "再次发送"
  };

  state = { isOpenExplain: false };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  toggleOpenExplain = bool => {
    this.setState({
      isOpenExplain: bool
    });
  };

  render() {
    const { isOpenExplain } = this.state;
    const { type = "" } = this.$router.params;
    return (
      <View>
        <View className="resend-index">
          <View className="user-info_wrap at-row at-row__justify--between">
            <View>
              <View className="avatar-box">
                {/* <AtAvatar image={sItem.avatar} /> */}
              </View>
              <View className="store-name">商家名@用户昵称 </View>
            </View>
          </View>

          <View className="resend-index_main">
            <View className="title">邀约好友Ta去领取专属权益卡</View>
            <View className="desc">
              hello!活动期间，邀约好友免费领取权益卡攒积分，积分可兑换成商品，线上包邮、线下自提，激活买单打折赠积分，消费多少送多少，还能领取激活礼，快约ta加入吧！
            </View>
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
                        />
                        粉丝昵称
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View className="card-caption">
                <View>门店名称</View>
                <Text>可享优惠：9.5折</Text>
              </View>
              <Image
                src={require("@/assets/images/icon_01.png")}
                className="badge"
              />
            </View>

            <View className="stop-time paragraph">
              <View className="caption at-row at-row__align--center">
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="clock"
                    size="18"
                    color="#229E8E"
                  />
                </View>
                <View className="title yellow">活动截止时间</View>
              </View>
              <View className="text bold">2020-05-03 23:59 前</View>
            </View>
            <View className="invitation paragraph">
              <View className="caption at-row at-row__align--center">
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="appoint"
                    size="16"
                    color="#229E8E"
                  />
                </View>
                <View className="title">邀约激励</View>
              </View>
              <View className="text">
                <Text className="space">商家奖励</Text>
                <AtIcon
                  prefixClass="icon"
                  value="integral"
                  size="14"
                  color="#000"
                />
                <Text>10积分</Text>
              </View>
            </View>
            <View className="clock-in paragraph">
              <View className="caption at-row at-row__align--center">
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="punch-clock"
                    size="16"
                    color="#229E8E"
                  />
                </View>
                <View className="title">到店打卡</View>
              </View>
              <View className="text">
                <Text className="space">商家打赏</Text>
                <Text className="space">20积分</Text>
                <Text className="space">全场8.5折</Text>
                <Text>劵/1张</Text>
              </View>
              <View className="text active-tit">活动说明：</View>
              <View className="text at-row">
                <View className="at-row">
                  <View className="space">
                    <AtIcon
                      prefixClass="icon"
                      value="store"
                      size="16"
                      color="#434343"
                    />
                  </View>
                  <View>
                    <View>商家打赏</View>
                    <View className="state">100%</View>
                  </View>
                </View>
                <View className="at-row">
                  <View className="space">
                    <AtIcon
                      prefixClass="icon"
                      value="user-circle"
                      size="16"
                      color="#434343"
                    />
                  </View>
                  <View>
                    <View>参与人数</View>
                    <View className="state">100%</View>
                  </View>
                </View>
              </View>
              {isOpenExplain && (
                <View className="explain-box">
                  <View className="explain-text">
                    这是商家推出的一种互动体验式活动，你可邀约好友一起来参与进来，邀约的好友加入活动后，各自领取商家奖励，按活动规则完成后自动领取商家打赏礼包。
                  </View>
                  <View className="step-item at-row">
                    <View className="icon-box">
                      <AtIcon
                        prefixClass="icon"
                        value="flag"
                        size="40"
                        color="#434343"
                      />
                    </View>
                    <View>
                      <View className="tit">STEP01</View>
                      <View className="introduce">
                        查看活动内容，分享活动给好友
                      </View>
                    </View>
                  </View>
                  <View className="step-item at-row">
                    <View className="icon-box">
                      <AtIcon
                        prefixClass="icon"
                        value="mulit-people-circle"
                        size="40"
                        color="#434343"
                      />
                    </View>
                    <View>
                      <View className="tit">STEP02</View>
                      <View className="introduce">
                        邀约好友加入活动，待好友加入后，领取商家奖励，活动期间可以多次发起邀约
                      </View>
                    </View>
                  </View>
                  <View className="step-item at-row ">
                    <View className="icon-box">
                      <AtIcon
                        prefixClass="icon"
                        value="mulit-people-circle"
                        size="40"
                        color="#434343"
                      />
                    </View>
                    <View>
                      <View className="tit">STEP03</View>
                      <View className="introduce">
                        按商家活动要求到店打卡或上传凭证，获取商家打赏礼包
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
            <View className="number-box">
              {isOpenExplain ? (
                <View
                  className="space rotate"
                  onClick={this.toggleOpenExplain.bind(this, false)}
                >
                  <AtIcon
                    prefixClass="icon"
                    value="down"
                    size="12"
                    color="#848484"
                  />
                </View>
              ) : (
                <View
                  className="space"
                  onClick={this.toggleOpenExplain.bind(this, true)}
                >
                  <AtIcon
                    prefixClass="icon"
                    value="down"
                    size="12"
                    color="#848484"
                  />
                </View>
              )}
              {type === "appoint" && (
                <View className="number">
                  约定编号：SX123456789012236778903456
                </View>
              )}
            </View>
          </View>
        </View>
        {type === "appoint" ? (
          <View className="footer-pisition">到店优惠买单赠送积分</View>
        ) : (
          <View className="footer-pisition resend-index_foot at-row">
            <View className="at-col">
              <View className="tit">等待加入</View>
              <View className="desc">2020-02-05 23:59 前</View>
            </View>
            <View className="btn">
              <AtButton type="primary">加入好友邀约</AtButton>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default ResendIndex;
