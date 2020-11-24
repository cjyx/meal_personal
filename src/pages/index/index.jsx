import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import TabBarBottom from "@/components/TabBarBottom";
import ExperienceIndex from "./experienceIndex";
import InteractIndex from "./interactIndex";

import "./index.scss";

@inject("counterStore")
@observer
class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    navigationBarTitleText: "首页"
  };

  state = {
    current: 0
  };
  handleTabBarClick = index => {
    this.setState({ current: index });
  };
  render() {
    const AtTabBarList = [
      {
        title: "互动",
        iconPrefixClass: "icon",
        iconType: "interact"
      },
      { title: "", special: true },
      { title: "体验", iconPrefixClass: "icon", iconType: "exp-fill" }
    ];
    const { current } = this.state;

    return (
      <View className="home">
        <View className="main">
          {current === 0 && <InteractIndex />}
          {current === 2 && <ExperienceIndex />}
        </View>
        <TabBarBottom
          tabList={AtTabBarList}
          onTabBarClick={this.handleTabBarClick}
        />
      </View>
    );
  }
}

export default Index;
