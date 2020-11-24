import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { AtTabs, AtTabsPane, AtButton, AtIcon } from 'taro-ui'

import qrcodePng from '@/assets/images/QRcode.png'

import './couponDetail.scss';

export default class extends Component {
  config = {
    navigationBarTitleText: '搜索'
  };
  state = {
    current: 0,
    tabList: [{ title: '商品券' }]
  };

  render() {
    const { current, tabList } = this.state;
    const type = '01';
    return (
      <View class='coupon-detail_container'>
        <View className='coupon-detail_wrap'>
          <View className='qrcode_wrap'>
            <View className='img-box'><Image className='image' src={qrcodePng} mode='widthFix' /></View>
            <View>买单前，出示即享优惠买单</View>
            <View>赠送积分</View>
          </View>
          <View className='coupon-detail_main'>
            <AtTabs className='appoint-tabs' current={current} tabList={tabList} >
              <AtTabsPane current={current} index={0} >
                {/*   第二份减免 */}
                {type === '01' &&
                  <View className='info_wrap'>
                    <View className='dd'><View className='label'>优惠名称</View><View>读取名称参数</View></View>
                    <View className='dd'><View className='label'>优惠类型</View><View>相同商品第二份优惠</View></View>
                    <View className='dd'><View className='label'>有效时间</View><View>永久有效</View></View>
                    <View className='dd'><View className='label'>第二份优惠方式</View><View>减免(减免金额 0元)</View></View>
                    <View className='dd'><View className='label'>活动商品(0)</View><View>0%</View></View>
                    <View className='dd'><View className='label'>券来券</View><View>营销活动名称</View></View>
                  </View>}
                {/*   第二份优惠 */}
                {type === '02' &&
                  <View className='info_wrap'>
                    <View className='dd'><View className='label'>优惠名称</View><View>读取名称参数</View></View>
                    <View className='dd'><View className='label'>优惠类型</View><View>相同商品第二份优惠</View></View>
                    <View className='dd'><View className='label'>有效时间</View><View>永久有效</View></View>
                    <View className='dd'><View className='label'>第二份优惠方式</View><View>折扣(第二份折扣率0%)</View></View>
                    <View className='dd'><View className='label'>活动商品(0)</View><View>0%</View></View>
                    <View className='dd'><View className='label'>券来券</View><View>营销活动名称</View></View>
                  </View>}
                {/*   礼券 */}
                {type === '03' &&
                  <View className='info_wrap'>
                    <View className='dd'><View className='label'>礼券名称</View><View>读取名称参数</View></View>
                    <View className='dd'><View className='label'>优惠类型</View><View>买赠</View></View>
                    <View className='dd'><View className='label'>有效时间</View><View>永久有效</View></View>
                    <View className='dd'><View className='label'>赠送积分</View><View>0</View></View>
                    <View className='dd'><View className='label'>赠送商品</View></View>
                    <View className='dd'><View className='label'>券来券</View><View>营销活动名称</View></View>
                  </View>}
                {/*   买赠 */}
                {type === '04' &&
                  <View className='info_wrap'>
                    <View className='dd'><View className='label'>优惠名称</View><View>读取名称参数</View></View>
                    <View className='dd'><View className='label'>优惠类型</View><View>买赠</View></View>
                    <View className='dd'><View className='label'>有效时间</View><View>永久有效</View></View>
                    <View className='dd'>购买1份，赠送一份</View>
                    <View className='dd'><View className='label'>购买商品</View></View>
                    <View className='dd'><View className='label'>赠送商品</View></View>
                    <View className='dd'><View className='label'>券来券</View><View>营销活动名称</View></View>
                  </View>}
                {/*   买赠-1 */}
                {type === '05' &&
                  <View className='info_wrap'>
                    <View className='dd'><View className='label'>优惠名称</View><View>读取名称参数</View></View>
                    <View className='dd'><View className='label'>优惠类型</View><View>买赠</View></View>
                    <View className='dd'><View className='label'>有效时间</View><View>永久有效</View></View>
                    <View className='dd'>满0元，赠送一份</View>
                    <View className='dd'><View className='label'>赠送商品</View></View>
                    <View className='dd'><View className='label'>券来券</View><View>营销活动名称</View></View>
                  </View>}
                  {/* 满减 */}
                  {type === '06' &&
                  <View className='info_wrap'>
                    <View className='dd'><View className='label'>优惠名称</View><View>读取名称参数</View></View>
                    <View className='dd'><View className='label'>优惠类型</View><View>满减</View></View>
                    <View className='dd'><View className='label'>有效时间</View><View>永久有效</View></View>
                    <View className='dd'><View className='label'>满减规则</View><View>0%</View></View>
                    <View className='dd'><View className='label'>优惠1</View><View>满0元，减0元</View></View>
                    <View className='dd'><View className='label'>券来券</View><View>营销活动名称</View></View>
                  </View>}
                  {/* 满减 */}
                  {type === '07' &&
                  <View className='info_wrap'>
                    <View className='dd'><View className='label'>优惠名称</View><View>读取名称参数</View></View>
                    <View className='dd'><View className='label'>优惠类型</View><View>特价商品</View></View>
                    <View className='dd'><View className='label'>有效时间</View><View>永久有效</View></View>
                    <View className='dd'><View className='label'>活动商品(0)</View><View>0%</View></View>
                    <View className='dd'><View className='label'>券来券</View><View>营销活动名称</View></View>
                  </View>}
                  {/* 整单折扣 */}
                  {type === '07' &&
                  <View className='info_wrap'>
                    <View className='dd'><View className='label'>优惠名称</View><View>读取名称参数</View></View>
                    <View className='dd'><View className='label'>优惠类型</View><View>整单折扣</View></View>
                    <View className='dd'><View className='label'>有效时间</View><View>永久有效</View></View>
                    <View className='dd'><View className='label'>整单折扣率</View><View>0%</View></View>
                    <View className='dd'><View>不参与活动的商品(0)</View></View>
                    <View className='dd'><View className='label'>券来券</View><View>营销活动名称</View></View>
                  </View>}
              </AtTabsPane>
            </AtTabs>



            <View className='btn_wrap at-row at-row__justify--center'>
              <View className='left-btn'><AtButton>转赠好友</AtButton></View>
              <View className='right-btn'><AtButton>优惠买单</AtButton></View>
            </View>
            <View className='address_wrap'>
              <View className='at-row'>
                <View className='avatar-box'>
                  {/* <AtAvatar image={sItem.avatar} /> */}
                </View>
                <View className='at-col text-box'>
                  <View className='name ellipsis'>门店名称</View>
                  <View className='desc ellipsis'>店铺描述</View>
                  <View className='number'>
                    <View className='store-distance'>
                      <AtIcon prefixClass='icon' value='location' size='12' color='#434343'></AtIcon>
                      <Text className='text-dom'>500m</Text>
                      <AtIcon value='chevron-right' size='12' color='##434343'></AtIcon>
                    </View>
                    <View className='store-address'>莲湖区西门里南马道巷22号</View>
                    <View>
                      <AtIcon prefixClass='icon' value='integral-fill' size='12' color='#434343'></AtIcon>
                      <Text className='text-dom'>小吃/快餐</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
