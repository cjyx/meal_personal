import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtAvatar, AtIcon } from "taro-ui";

export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  handleClick = item => {
    Taro.navigateTo({ url: "/pages/interact/storeDetail" });
  };
  render() {
    const { data = [], type } = this.props;
    return (
      <View className="browse-box">
        {data.map(item => (
          <View className="browse-item" key={item.id}>
            <View className="store-caption">
              <AtAvatar image={item.avatar} />
              <View>
                <Text>{item.name}</Text>
                <Text>{item.desc}</Text>
              </View>
            </View>
            <View
              className="store-detail"
              onClick={() => this.handleClick(item)}
            >
              <AtIcon
                className="tag"
                prefixClass="icon"
                value="tag"
                size="20"
                color={type == 1 ? "#FF8500" : "#434343"}
              />
              <View className="store-content">
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="integral-fill"
                    size="12"
                    color="#434343"
                  />
                  <Text>{item.type}</Text>
                </View>
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="location"
                    size="12"
                    color="#434343"
                  />
                  <Text>
                    {item.address} {item.distance}
                  </Text>
                </View>
                <View>
                  <AtIcon
                    prefixClass="icon"
                    value="money"
                    size="12"
                    color="#434343"
                  />
                  <Text>{item.price}</Text>
                </View>
              </View>
              <View className="store-extra">
                <AtIcon
                  prefixClass="icon"
                  value="right"
                  size="14"
                  color="#848484"
                />
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
