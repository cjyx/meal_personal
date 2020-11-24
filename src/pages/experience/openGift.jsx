import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtButton, AtIcon } from 'taro-ui';
import GiftCardItem from '../index/components/ExperienceIndex/GiftCardItem'

import redEnvelopes from '@/assets/images/redEnvelopes.png'
import successPng from '@/assets/images/success.png'

import './openGift.scss'

const mockData = [
    { price: '60', tit: '代金券', time: '有效时间', condition: '满0元可用' },
    { price: '60', tit: '代金券', time: '有效时间', condition: '满0元可用' },
    { price: '60', tit: '代金券', time: '有效时间', condition: '满0元可用' },
]

class OpenGiftIndex extends Component {

    config = {
        navigationBarTitleText: '打开礼包'
    }

    state = {
        isOpening: false,
        isOpen: false
    }

    componentWillMount() { }

    componentWillReact() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    openGiftFun = () => {
        this.setState({
            isOpening: true
        })
        Taro.showToast({
            title: '已完成',
            image: successPng,
            duration: 3500
        })

        setTimeout(() => {
            this.setState({ isOpen: true, isOpening: false })
        }, 3500)
    }

    render() {
        const { isOpen, isOpening } = this.state;
        return (
            <View className='open-gift-index'>
                {isOpen ? <View className='caption'>奖品已存入你的账户</View> :
                    <View className='info at-row'>
                        <View className='avatar-box'>
                            {/* <AtAvatar image={item.avatar} /> */}
                        </View>
                        <View className='text'>
                            <View className='store-name'>门店名称</View>
                            <View className='store-desc'>店铺描述</View>
                            <View className='store-distance'>
                                <AtIcon prefixClass='icon' value='location' size='12' color='#434343'></AtIcon>
                                <Text className='text'>500m</Text>
                                <AtIcon value='chevron-right' size='12' color='##434343'></AtIcon>
                            </View>
                            <View className='store-address'>莲湖区西门里南马道巷22号</View>
                        </View>
                    </View>
                }
                <View className='open-gift-main'>
                    <View className='open-gift-main_top'>
                        <Image src={redEnvelopes} mode='widthFix' className='image' />
                    </View>
                    <View className='open-gift-main_middle'>
                        <View className='title'>商家礼包</View>
                        <View className='discount at-row at-row__justify--around'>
                            <View>
                                <AtIcon prefixClass='icon' value='polygon-one' size='40'></AtIcon>
                                <View>兑换积分</View>
                                <View>20</View>
                            </View>
                            <View>
                                <AtIcon prefixClass='icon' value='polygon-one' size='40'></AtIcon>
                                <View>代金券</View>
                                <View>1张</View>
                            </View>
                            <View>
                                <AtIcon prefixClass='icon' value='pay-circle' size='40'></AtIcon>
                                <View>现金券</View>
                                <View>2元</View>
                            </View>
                        </View>
                        {isOpen ? <View className='integral'><View>积分已入账</View><View>当前可用积分：2806</View></View> :
                            <View className='card'>
                                <Swiper className='card-swiper' indicatorDots circular indicatorColor='#848484' indicatorActiveColor='#000000'>
                                    {mockData.map(item => <SwiperItem key=''>
                                        <GiftCardItem key='' item={item} />
                                    </SwiperItem>)}
                                </Swiper>
                            </View>
                        }
                        <View className='btn' onClick={this.openGiftFun}>
                            <AtButton>
                                {isOpening ? <AtIcon value='loading-2' size='18' color='#fdd000'></AtIcon> : <Text>
                                    {isOpen ? '参看我的礼券' : '即刻开礼包'}</Text>}
                            </AtButton>
                        </View>
                    </View>
                    <View className='open-gift-main_bot'>
                        <View className='box'></View>
                    </View>
                </View>
            </View>
        )
    }
}

export default OpenGiftIndex
