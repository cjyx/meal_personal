import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import {
  AtAvatar,
  AtIcon,
  AtButton,
  AtFloatLayout,
  AtTabs,
  AtTabsPane,
  AtList,
  AtListItem,
  AtInput,
  AtCheckbox
} from "taro-ui";

export default class extends Component {
  constructor(props) {
    super(props);
  }
  static options = {
    addGlobalClass: true
  };
  render() {
    const { isOpened, onCloseClick } = this.props;
    return (
      <AtFloatLayout isOpened={isOpened} className="discount-pay-floatlayout">
        <View className="discount-pay-float">
          <View className="title">
            <AtIcon
              prefixClass="icon"
              value="close"
              size="30"
              color="#000"
              onClick={onCloseClick}
            />
            <Text>当前你选择了</Text>
            <Text>线下通过现金或店家其他收款码支付</Text>
          </View>
          <View className="content">
            <View className="caption">支付账单信息</View>
            <View className="desc">
              消费总额
              <Text className="bold">¥300.00</Text>
            </View>
            <View className="desc">
              不参与优惠总额
              <Text>¥30.00</Text>
            </View>
            <View className="desc">
              <View className="bold">优惠金额（¥270.00～9.0折）</View>
              <Text>¥27.00</Text>
            </View>
            <View className="desc">
              实付金额（¥243.00+¥30.00）
              <Text className="bold color-e0004e">¥273.00</Text>
            </View>
            <View className="desc">
              返利赠送积分
              <Text>273</Text>
            </View>
          </View>
          <View className="content content-two">
            <View className="caption">线下支付完成</View>
            <View className="desc">出示支付凭证给店家确认</View>
            <View className="desc">店家确认收款后积分自动你的账户</View>
            <View className="desc">
              你所处的位置有时会引网络问题，积分到账有可能会延迟
            </View>
            <View className="desc">建议买单后查看积分到账情况！</View>
          </View>
          <View className="btns at-row at-row__justify--between">
            <AtButton type="primary" size="small">
              修改金额
            </AtButton>
            <AtButton type="primary" size="small" className="btn-last">
              去支付
            </AtButton>
          </View>
        </View>
      </AtFloatLayout>
    );
  }
}
