import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { AtTabBar, AtIcon } from "taro-ui";

import "./index.scss";

class TabBarBottom extends Component {
  static options = {
    addGlobalClass: true
  };
  state = {
    current: 0
  };
  handleClick = () => {};
  render() {
    const { current } = this.state;
    const { tabList = [], src = "", onTabBarClick } = this.props;
    const AtTabBarProps = {
      current,
      tabList,
      className: "tab-bar-bottom",
      fixed: true,
      onClick: index => {
        this.setState({ current: index });
        onTabBarClick(index);
      }
    };
    return (
      <View className="tabBar-wrap">
        <View className="special">
          <View className="box">
            <View className="circle">
              <AtIcon
                prefixClass="icon"
                value="nifty"
                size="30"
                color="#434343"
              />
            </View>
          </View>
        </View>
        <AtTabBar {...AtTabBarProps} />
      </View>
    );
  }
}

export default TabBarBottom;
