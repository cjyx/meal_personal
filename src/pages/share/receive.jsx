import Taro, { Component } from '@tarojs/taro';
import { View,Image } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import CouponItem from '@/components/CouponItem'

import couponLeftPng7 from '@/assets/images/coupon7.png'
import couponLeftPng8 from '@/assets/images/coupon8.png'
import couponLeftPng9 from '@/assets/images/coupon9.png'

import './receive.scss';

const mockData = {type:1,name:'COUPON',offerName:'折扣券',couponDiscount: '9.5',couponName: '无门槛',time:'永久有效',range:'全店通用/适用范围'};

export default class extends Component {
  static options = {
    addGlobalClass: true
  };

  config = {
    navigationBarTitleText: '领取优惠券'
  };
  state = {};

  render() {
    const { } = this.state;

    return (
      <View className='share-container'>
        <View className='share-wrap'>
          <View className='avatar-box_60-60 back-yellow at-row at-row__align--center at-row__justify--center'>
            <AtIcon prefixClass='icon' value='lock-fill' size='20' color='#ffffff' />
          </View>
          <View>
            <Image className='img-placeholder' src={couponLeftPng7} mode='widthFix' />
            <View className='share-coupon_wrap'>
              <View className='share-coupon_box'>
              <CouponItem item={mockData} />
              <View className='text'>好友赠你的礼券</View>
              </View>
            </View>
            <Image className='img-placeholder' src={couponLeftPng9} mode='widthFix' />
            <Image className='img-placeholder' src={couponLeftPng8} mode='widthFix' />
          </View>
        </View>
      </View>
    );
  }
}
