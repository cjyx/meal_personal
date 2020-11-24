import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon } from "taro-ui";

import "./index.scss";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };

  config = {
    navigationBarTitleText: "体验首页"
  };

  state = {};

  render() {
    const { type, selected, list = [], onTabChange } = this.props;

    return (
      <View className="experience-nav-components at-row">
        {list.map(item => (
          <View
            key={item.num}
            className={`item ${selected === item.num ? "active" : ""}`}
          >
            <View
              className={`item-box item-box-${type}-${item.num}`}
              onClick={() => {
                onTabChange(item);
              }}
            >
              <View className="icon-box">
                <AtIcon
                  prefixClass="icon"
                  value={item.icon}
                  size="30"
                  color={selected === item.num ? "#fff" : "#000"}
                />
              </View>
              <View className="tit">
                <Text>{item.title}</Text>
              </View>
              <View className="num">
                <Text>{item.num}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
