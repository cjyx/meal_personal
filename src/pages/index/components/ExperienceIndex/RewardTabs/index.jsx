import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtAvatar } from 'taro-ui';

import redEnvelopes from '@/assets/images/redEnvelopes.png'

const mockData = [
    {
        date: '2020-03-20',
        avatar: require('@/assets/images/user.png'),
        storeName: '商家名称',
        name: '约定活动名称'
    },
    {
        date: '2020-03-20',
        avatar: require('@/assets/images/user.png'),
        storeName: '商家名称',
        name: '约定活动名称'
    }
]

const mockWaitData = [
    {
        avatar: require('@/assets/images/user.png'),
        storeName: '门店名称',
        desc: '美业健康',
        date: '2020-03–20 16:46:32',
        integration: '20',
        favourableName: '优惠名称'
    },
]

class RewardTabs extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        current: 0,
        tabList: [{ title: '打赏礼包' }, { title: '已完成' }]
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

    skipUrl = url => {
        Taro.navigateTo({ url });
    }

    render() {
        const { current, tabList } = this.state;
        return (
            <AtTabs className='reward-tabs' current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                <AtTabsPane current={current} index={0} >
                    <View className='reward-tabs-wrap'>
                        {mockData.map(item => <View className='reward-tabs_item' key=''>
                            <View className='date'>{item.date}</View>
                            <View className='info at-row'>
                                <View className='avatar-box'>
                                    <AtAvatar image={item.avatar} />
                                </View>
                                <View className='text'>
                                    <View className='store-name'>{item.storeName}</View>
                                    <View className='store-active-name'>{item.name}</View>
                                </View>
                                <View className='image' onClick={this.skipUrl.bind(this,'/pages/experience/openGift')}>
                                    <Image className='Image' src={redEnvelopes} mode='widthFix' />
                                </View>
                            </View>
                        </View>)}
                    </View>
                </AtTabsPane>
                <AtTabsPane current={current} index={1} >
                    <View className='done-wrap'>
                        {mockWaitData.map(item => <View className='done-wrap_item at-row' key=''>
                            <View className='avatar-box'>
                                <AtAvatar image={item.avatar} />
                            </View>
                            <View className='text at-col'>
                                <View className='store-name'>{item.storeName}</View>
                                <View className='desc'>{item.desc}</View>
                                <View className='task'>
                                    <Text className='bold'>打赏任务：</Text>
                                    任务名称
                                </View>
                            </View>
                            <View className='right-txt'>
                                <View className='date'>{item.date}</View>
                                <View>已打开礼包领取</View>
                            </View>
                        </View>)}
                    </View>
                </AtTabsPane>
            </AtTabs>
        )
    }
}

export default RewardTabs
