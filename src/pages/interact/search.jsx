import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import {
  AtAvatar,
  AtIcon,
  AtSearchBar,
  AtTabs,
  AtTabsPane,
  AtTag
} from "taro-ui";
import "./search.scss";

import BrowseTabs from "../index/components/InteractIndexIndex/BrowseTabs";

export default class extends Component {
  config = {
    navigationBarTitleText: "搜索"
  };
  state = {
    value: "",
    nameList: [{ name: "门店名称" }, { name: "名称" }],
    history: [{ name: "门店名称" }, { name: "名称" }]
  };
  handleChange = value => {
    this.setState({
      value: value,
      contentVisible: false,
      contentData: []
    });
  };
  handleClear = () => {
    this.setState({
      value: ""
    });
  };
  handleActionClick = () => {
    this.setState({
      contentVisible: true,
      contentData: [
        {
          id: "1",
          name: "门店名称",
          desc: "商家描述",
          type: "小吃/快餐（注册引导页选择的品类）",
          address: "莲湖区西门里南马道巷22号",
          distance: "500m",
          price: "人均客单价：58元/人"
        },
        {
          id: "2",
          name: "门店名称",
          desc: "商家描述",
          type: "小吃/快餐（注册引导页选择的品类）",
          address: "莲湖区西门里南马道巷22号",
          distance: "500m",
          price: "人均客单价：58元/人"
        }
      ]
    });
  };
  render() {
    const {
      value,
      tabList,
      nameList,
      contentData,
      contentVisible,
      history
    } = this.state;
    return (
      <View>
        <AtSearchBar
          className="search-container"
          value={this.state.value}
          placeholder="推广店铺名称"
          onChange={this.handleChange}
          onClear={this.handleClear}
          onActionClick={this.handleActionClick}
        />

        <View className="store-container">
          <View
            className="right-icon"
            style={{ right: !contentVisible ? "37px" : 0, top: "5px" }}
          >
            <Image src={require("@/assets/images/location.png")} />
          </View>
          {!contentVisible ? (
            <AtTabs
              current={0}
              tabList={[{ title: "浏览的店铺" }]}
              className="tab-container"
            >
              <AtTabsPane current={0}>
                <View>
                  <View className="tag-group">
                    {nameList.map((item, index) => (
                      <AtTag
                        key={index}
                        name={item.name}
                        type="primary"
                        circle
                        //   onClick={this.onClick}
                      >
                        {item.name}
                      </AtTag>
                    ))}
                  </View>
                  <View className="history">
                    <View className="history-title">
                      <Text>历史搜索记录</Text>
                      <AtIcon
                        prefixClass="icon"
                        value="delete"
                        size="16"
                        color="#8E8E8E"
                      ></AtIcon>
                    </View>
                    <View className="tag-group">
                      {nameList.map((item, index) => (
                        <AtTag
                          key={index}
                          name={item.name}
                          type="primary"
                          circle
                          //   onClick={this.onClick}
                        >
                          {item.name}
                        </AtTag>
                      ))}
                    </View>
                  </View>
                </View>
              </AtTabsPane>
            </AtTabs>
          ) : (
            <View>
              <BrowseTabs data={contentData} />
            </View>
          )}
        </View>
        <View className="button-container">
          <AtIcon
            prefixClass="icon"
            value="close"
            size="30"
            color="#000"
            onClick={() => {
              Taro.navigateTo({ url: "/pages/interact/index" });
            }}
          ></AtIcon>
        </View>
      </View>
    );
  }
}
