import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon, AtCurtain, AtButton } from "taro-ui";

import "./index.scss";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  render() {
    const { isOpened, title, onClose } = this.props;

    return (
      <AtCurtain
        className="curtain-container"
        closeBtnPosition="bottom"
        isOpened={isOpened}
        onClose={onClose}
      >
        <View className="curtain-content">
          <View className="title">{title}</View>
          {this.props.children}
        </View>
      </AtCurtain>
    );
  }
}

/* 福袋 */
/* <View className="lucky-bag-content">
            <Text>由于商家各自提供的奖励不同</Text>
            <Text>数量不同，礼包领取后需到</Text>
            <Text>约定奖励中激活开包</Text>
            <View className="lucky-bag-bj">
              <View className="bj">
                <View className="caption">
                  <Text>参与有礼</Text>
                  <Text>打赏礼包</Text>
                </View>
                <Button type="primary" size="mini" className='btn'>
                  约定奖励
                </Button>
              </View>
            </View>
          </View> */

/*  二维码 */
/* <View className="qrcode-content">
            <Image src={require('@/assets/images/qrcode2.png')} className="qrcode-picture" />
          </View> */

/* 礼包 */
/* <View className="gift-bag-content">
            <View className="gift-bag-picture">
              <Image src={require("@/assets/images/gift-bag.png")} />
            </View>
            <View className="associated">
              <View className="at-row at-row__justify--end">
                <View className="associated-box">
                  <View className="avatar">
                    <AtAvatar circle />
                  </View>
                </View>
                <View className="icon-box">
                  <View>
                    <AtIcon
                      prefixClass="icon"
                      value="check"
                      size="12"
                      color="#ffffff"
                    />
                  </View>
                </View>
                <View className="associated-box">
                  <View className="avatar">
                    <AtAvatar circle />
                  </View>
                </View>
              </View>
            </View>
            <View className="bottom">
              <Text className="tips">已和好友一起与商家达成约定</Text>
              <Text className="desc">将通知对方你已加入约定</Text>
              <Button size="mini" className="btn">
                我知道了
              </Button>
            </View>
          </View> */
