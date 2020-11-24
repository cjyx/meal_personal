import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtIcon } from 'taro-ui';

const mockData = [1, 2, 3];

class CardTabs extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        current: 0,
        tabList: [{ title: '全部(5张)' }]
    }

    componentWillMount() { }

    componentWillReact() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    handleClick = (index) => {
        this.setState({ current: index })
    }

    skipSearch = () => {
        Taro.navigateTo({ url: '/pages/experience/search' });
    }

    render() {
        const { current, tabList } = this.state;
        return (
            <View className='card-tabs-index'>
                <View className='search-icon' onClick={this.skipSearch}>
                    <AtIcon prefixClass='icon' value='search' size='18' color='#434343'></AtIcon>
                </View>
                <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={current} index={0} >
                        <View className='card-tabs-index_wrap'>
                            <View className='caption'>餐饮(5张)</View>
                            <View className='card'>
                                <Swiper className='card-swiper' indicatorDots circular indicatorColor='#848484' indicatorActiveColor='#000000'>
                                    {mockData.map(item => <SwiperItem key={item}>
                                        <View className='card'>
                                            <View className='card-content at-row at-row__align--center'>
                                                <View className='star'>
                                                    <View>
                                                        <Image src={require('@/assets/images/card_01.png')} />
                                                        <View>
                                                            <Image src={require('@/assets/images/star_01.png')} />
                                                            <View>
                                                                <AtIcon prefixClass='icon' value='user' size='14' color='#000' ></AtIcon> 粉丝昵称
                                        </View>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View className='qrcode' onClick={()=>{Taro.navigateTo({url: '/pages/interact/rightsDetail'})}}>
                                                    <AtIcon prefixClass='icon' value='qrcode-circle' size='20' color='#000' ></AtIcon>
                                                </View>
                                            </View>
                                            <View className='card-caption'>
                                                <View>门店名称</View>
                                                <Text>等级名称</Text>
                                            </View>
                                            <Text className='card-number'>313 9732 6643 8768</Text>
                                            <AtIcon value='chevron-right' size='14' color='#ffffff' className='card-extra' />
                                        </View>
                                    </SwiperItem>)}
                                </Swiper>

                            </View>
                        </View>
                    </AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}

export default CardTabs
