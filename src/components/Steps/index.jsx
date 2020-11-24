import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";

import "./index.scss";

export default class extends Component {
  render() {
    const { items = [], current, direction } = this.props;
    return (
      <View className={`step ${direction == "row" ? "step-row" : ""}`}>
        {items.map((item, index) => (
          <View key={item.title} className="step-item">
            <View
              className={`circular-wrap ${
                direction == "row" ? "circular-wrap-row" : ""
              }`}
            >
              {index > 0 && <View className="step-left-line"></View>}
              <View className="step-circular">
                {item.icon && (
                  <AtIcon
                    prefixClass="icon"
                    value={item.icon.value}
                    size={item.icon.size}
                    color={item.icon.inactiveColor}
                  />
                )}
                {item.title && direction == "row" && (
                  <View className="step-title">{item.title}</View>
                )}
              </View>
              {index < items.length - 1 && (
                <View className="step-right-line"></View>
              )}
            </View>
            {direction !== "row" && item.title && (
              <View className="step-title">{item.title}</View>
            )}
            {item.desc && <View className="step-desc">{item.desc}</View>}
          </View>
        ))}
      </View>
    );
  }
}
