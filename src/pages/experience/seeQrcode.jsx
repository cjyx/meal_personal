import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtAvatar, AtButton, AtIcon } from 'taro-ui';

import qrcodePng from '@/assets/images/qrcode2.png'

import './seeQrcode.scss'

class SeeQrcode extends Component {

    config = {
        navigationBarTitleText: '查看劵码'
    }

    state = {}

    componentWillMount() { }

    componentWillReact() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='see-qrcode-index'>
                <View className='caption'>
                    <View className='tit'>活动名称</View>
                    <View className='desc'>有效期至：  2021-01-14 23:59</View>
                </View>
                <View className='number-box at-row at-row__justify--between'>
                    <View>
                        <View>券码：</View>
                        <View className='number'>2588 6818 3728</View>
                    </View>
                    <View className='right-txt'>
                        <View><AtIcon prefixClass='icon' value='export' size='20' color='#434343'></AtIcon></View>  
                        <View>赠送好友</View>  
                    </View>
                </View>
                <View className='qr-code-box'>
                    <View className='tit'>到门店出示即可</View>
                    <View>
                        <Image className='qr-code' src={qrcodePng} mode='widthFix' />
                    </View>
                </View>
            </View>
        )
    }
}

export default SeeQrcode
