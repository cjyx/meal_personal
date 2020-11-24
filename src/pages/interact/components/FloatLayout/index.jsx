import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtIcon, AtFloatLayout } from "taro-ui";

import "./index.scss";

export default class extends Component {
  render() {
    const { isOpened, onClose } = this.props;
    return (
      <AtFloatLayout isOpened={isOpened} onClose={onClose}>
        <View className="floatLayout-container">
          {this.props.children} 
          <View className="at-row operation">
            <View className="at-col">
              <AtIcon
                prefixClass="icon"
                value="wechat"
                size="50"
                color="#434343"
              ></AtIcon>
              <Text>微信好友</Text>
            </View>
            <View className="at-col">{this.props.renderContent}</View>
          </View>
          <Button
            type="primary"
            size="small"
            className="close"
            onClick={onClose}
          >
            取消
          </Button>
        </View>
      </AtFloatLayout>
    );
  }
}
