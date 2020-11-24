import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Map } from "@tarojs/components";
import { AtIcon, AtInput, AtButton, AtDivider } from "taro-ui";
import "./storeLocation.scss";
export default class extends Component {
  static options = {
    addGlobalClass: true
  };
  config = {
    navigationBarTitleText: "线下积分兑换点"
  };
  constructor() {
    super(...arguments);
    this.state = {
      latitude: "",
      longitude: "",
      markers: [],
      markerTaped: {},
      markerTapedId: ""
    };
  }
  componentWillMount() {}

  componentDidMount() {
    Taro.getLocation({ type: "wgs84" }).then(res => {
      const latitude = res.latitude;
      const longitude = res.longitude;
      this.setState({ latitude: latitude });
      this.setState({ longitude: longitude });
      this.buildMarkers(latitude, longitude);
    });
    const mapCtx = Taro.createMapContext("map");
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  markertapHandler = function(res) {
    console.log("markertapHandler", res);
    let { markerId } = res;
    this.setState({ markerTapedId: markerId });
  };
  buildMarkers = function(lat, lng) {
    let reuslt = [];
    for (let i = 0; i < 10; i++) {
      reuslt.push({
        latitude:
          lat + parseFloat((Math.random().toFixed(2) * 0.01).toFixed(5)),
        longitude:
          lng + parseFloat((Math.random().toFixed(2) * 0.01).toFixed(5)),
        iconPath: require("@/assets/images/integral.png"),
        width: "40px",
        height: "44px",
        id: Math.random().toFixed(5) * 100000
      });
    }
    console.log(reuslt);
    this.setState({ markers: reuslt });
  };
  render() {
    return (
      <View className="map-box">
        <Map
          id="map"
          className="map"
          longitude={this.state.longitude}
          latitude={this.state.latitude}
          markers={this.state.markers}
          //subKey=''
          onmarkertap={this.markertapHandler}
          show-location
          show-compass
        >
          {this.state.markerTapedId && (
            <MapCoverView markerId={this.state.markerTapedId} />
          )}
        </Map>
      </View>
    );
  }
}
