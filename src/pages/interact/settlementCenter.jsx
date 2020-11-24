import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Radio } from "@tarojs/components";
import { AtIcon, AtInput, AtButton, AtDivider } from "taro-ui";
import "./settlementCenter.scss";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  config = {
    navigationBarTitleText: "兑集结算中心"
  };
  state = {
    type: 1,
    isLoading: false
  };
  handleRadioChange = value => {
    console.log(value);
  };
  render() {
    const { type, isLoading } = this.state;
    return (
      <View className="settlement-center-wrapper">
        <View className="container">
          <View className="top">
            <View className="title">5积分</View>
            <View className="desc">目前您的有效兑换积分为</View>
            <View className="text">5000</View>
          </View>
          <View className="bottom">
            <View className="btn btn-buy">
              {type == 2 && (
                <AtButton type="secondary" circle>
                  购买兑礼卡
                </AtButton>
              )}
            </View>
            <View className="discounts-pay-list settlement-center-list">
              <RadioGroup onChange={this.handleRadioChange}>
                <View className="list-item">
                  <View className="list-item-container">
                    <View className="list-item-thumb">
                      <AtIcon
                        prefixClass="icon"
                        value="integral"
                        size="18"
                        color="#000"
                      />
                    </View>
                    <View className="list-item-content">
                      <View className="list-item-content_title bold">
                        抵扣积分
                      </View>
                    </View>
                    <View className="list-item-extra">
                      <View className="list-item-extra_info padding-left">
                        <Radio
                          className="radio"
                          value="integral"
                          checked={false}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </RadioGroup>
            </View>
            <View className="tips-text">
              点击“确定抵扣”按钮并抵扣相应积分兑换商品时，即代表您已阅读、理解并接受
              <Text>兑集积分兑换规则（电子版的特别规定）</Text>
            </View>
            <View className="btn">
              {type == 1 && (
                <AtButton type="primary" circle>
                  {!isLoading ? (
                    "确定抵扣"
                  ) : (
                    <AtIcon value="loading-2" size="22" color="#fff" />
                  )}
                </AtButton>
              )}
              {type == 2 && (
                <AtButton type="primary" className="gray" circle>
                  确定抵扣
                </AtButton>
              )}
            </View>
          </View>
        </View>
        <View className="close">
          <AtIcon
            prefixClass="icon"
            value="close"
            size="24"
            color="rgba(0,0,0,0.5)"
          />
        </View>
      </View>
    );
  }
}
