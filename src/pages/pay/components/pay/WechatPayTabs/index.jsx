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

import Attention from "../../attention";
import FloatLayout from "../../floatLayout";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    total: "",
    checkedList: [],
    checkedRightsList: [],
    checkedCouponList: [],
    isOpened: false
  };
  handleTotalChange = value => {
    this.setState({
      total: value
    });
  };
  handleCheckChange = value => {
    this.setState({
      checkedList: value
    });
  };
  handleRightsChange = value => {
    this.setState({
      checkedRightsList: value
    });
  };
  handleCouponChange = value => {
    this.setState({
      checkedCouponList: value
    });
  };
  render() {
    const {
      total,
      checkedList,
      checkedRightsList,
      checkedCouponList,
      isOpened
    } = this.state;
    return (
      <View className="discounts-pay-tabitem">
        <View className="discounts-pay-list">
          <View className="list-item">
            <View className="list-item-container">
              {/* <View className="list-item-thumb"></View> */}
              <View className="list-item-content">
                <View className="list-item-content_title">消费总额</View>
                {/* <View className="list-item-content_desc">描述信息</View> */}
              </View>
              <View className="list-item-extra">
                <View className="list-item-extra_info">
                  <AtInput
                    className="discount-input"
                    required
                    type="number"
                    placeholder="请询问店主后输入"
                    value={total}
                    onChange={this.handleTotalChange}
                  />
                </View>
                {/* <View className="list-item-extra_icon">
                    <AtIcon
                      prefixClass="icon"
                      value="right"
                      size="12"
                      color="#848484"
                    />
                  </View> */}
              </View>
            </View>
          </View>
          <View className="list-item">
            <View className="list-item-container">
              <View className="list-item-content">
                <View className="list-item-content_title">
                  <AtCheckbox
                    options={[
                      {
                        value: "list1",
                        label: "输入不参与优惠金额"
                      }
                    ]}
                    className="discount-checkbox"
                    selectedList={checkedList}
                    onChange={this.handleCheckChange}
                  />
                </View>
              </View>
            </View>
          </View>
          {checkedList.length > 0 && (
            <View className="list-item">
              <View className="list-item-container">
                <View className="list-item-content">
                  <View className="list-item-content_title">
                    不参与优惠总额
                  </View>
                </View>
                <View className="list-item-extra">
                  <View className="list-item-extra_info">
                    <AtInput
                      className="discount-input"
                      required
                      type="number"
                      placeholder="请询问店主后输入"
                      value={total}
                      onChange={this.handleTotalChange}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          <View className="list-item">
            <View className="list-item-content_tips">
              享有权益：优惠买单赠积分
            </View>
            <View className="list-item-container">
              <View className="list-item-content">
                <View className="list-item-content_title">
                  <AtCheckbox
                    options={[
                      {
                        value: "list2",
                        label: "权益卡"
                      }
                    ]}
                    className="discount-checkbox"
                    selectedList={checkedRightsList}
                    onChange={this.handleRightsChange}
                  />
                  <Text>整单折扣(9.5折)</Text>
                </View>
              </View>
              <View className="list-item-extra">
                <View className="list-item-extra_info">优惠 ¥0.00</View>
              </View>
            </View>
          </View>
          <View className="list-item">
            <View className="list-item-container">
              <View className="list-item-content">
                <View className="list-item-content_title">
                  <AtCheckbox
                    options={[
                      {
                        value: "list3",
                        label: "优惠券"
                      }
                    ]}
                    className="discount-checkbox"
                    selectedList={checkedCouponList}
                    onChange={this.handleCouponChange}
                  />
                </View>
              </View>
              <View className="list-item-extra">
                <View className="list-item-extra_info">无可用</View>
                <View className="list-item-extra_icon">
                  <AtIcon
                    prefixClass="icon"
                    value="right"
                    size="12"
                    color="#848484"
                  />
                </View>
              </View>
            </View>
          </View>
          <View className="list-item">
            <View className="list-item-container">
              <View className="list-item-content">
                <View className="list-item-content_title bold">实付金额：</View>
              </View>
              <View className="list-item-extra">
                <View className="list-item-extra_info bold color-e0004e">
                  ¥ 0.00
                </View>
              </View>
            </View>
          </View>
          <View className="list-item">
            <View className="list-item-container">
              <View className="list-item-content">
                <View className="list-item-content_title">获赠积分：</View>
              </View>
              <View className="list-item-extra">
                <View className="list-item-extra_info">0</View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
