import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Text, Image } from "@tarojs/components";
import { AtIcon } from "taro-ui";
import "./index.scss";

export default class extends Component {
  state = {
    ADClose: false
  };
  handleClick = () => {
    const { url } = this.props;
    if (url) Taro.redirectTo({ url: url });
  };
  render() {
    const { ADClose } = this.state;
    const { picture, closeBtnVisible } = this.props;
    return (
      <View>
        {!ADClose && (
          <View className="advertisement" onClick={this.handleClick}>
            {closeBtnVisible && (
              <AtIcon
                prefixClass="icon"
                value="close"
                size="22"
                color="rgba(0,0,0,0.5)"
                onClick={() => {
                  this.setState({ ADClose: true });
                }}
              />
            )}
            <Image src={picture} />
          </View>
        )}
      </View>
    );
  }
}
