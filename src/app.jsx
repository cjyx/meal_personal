import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/mobx";
import Index from "./pages/index/index";

import counterStore from "./store/counter";

import "./app.scss";
import "@/assets/fonts/iconfont.css";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  counterStore
};

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    pages: ["pages/index/index"],
    subPackages: [
      {
        root: "pages/interact",
        pages: [
          "settlementCenter", //结算中心
          "success", //抵扣成功
          "order", //报名订单
          "signUp", //活动报名
          "receiveCard", //领取权益卡
          "consumeCoupon", //消费券
          "posterInvite", ////互动首页 -- 门店详情 -- 权益卡详情 -- 海报邀请
          "rightsRegister", //权益卡领取注册页
          "rightsDetail", //互动首页 -- 门店详情 -- 权益卡详情
          "storeDetail", //互动首页 -- 门店详情
          "search", //搜索
          "storeLocation", //搜索 -- 线下积分兑换点
          "product" //商品
        ],
        independent: false
      },
      {
        root: "pages/experience",
        pages: [
          "resend", // 体验首页 -- 我的约定 -- 约定管理  -- 待Ta加入 -- 再次发送
          "waitDone", // 体验首页 -- 我的约定 -- 约定管理  -- 待Ta加入 -- 等待完成
          "openGift", // 体验首页 -- 我的约定 -- 约定管理  -- 待Ta加入 -- 等待完成
          "showQrcode", //出示二维码打卡
          "clockRecord", //打卡记录
          "orderDetail", // 体验首页 -- 我的订单 -- 商品订单  --  订单详情
          "orderDetail2", // 体验首页 -- 我的订单 -- 商品订单  --  订单详情
          "seeQrcode", // 体验首页 -- 我的订单 -- 商品订单  --  查看劵码
          "search", // 体验首页 -- 我的卡包 -- 我的权益卡  --  搜索
          "searchCoupon", // 体验首页 -- 我的卡包 -- 我的权益卡  --  下拉框选择
          "couponDetail", // 体验首页 -- 我的卡包 -- 我的权益卡  --  下拉框选择
          "waitJoin" // 体验首页 -- 我的卡包 -- 我的权益卡  --  等价加入
        ],
        independent: false
      },
      {
        root: "pages/share",
        pages: [
          "receive", //  分享礼券
          "successReceive" //分享我的礼券 -- 成功领券
        ]
      },
      {
        root: "pages/pay",
        pages: [
          "discountsPay", //  优惠买单
          "paySuccess", //支付成功
          "selectCoupons" //选择优惠券
        ]
      }
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
