import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtAvatar, AtIcon, AtButton } from 'taro-ui';

const mockData = [
    { id: 1, avatar: require('@/assets/images/user.png'), title: '邀约好友领取权益礼卡', desc: '商家约定活动将于2020-03-05 23:59:59失效' },
    { id: 2,  avatar: require('@/assets/images/user.png'), title: '来挑战平板支撑至少一分钟，为了诱人的马甲线', desc: '商家约定活动将于2020-03-30 23:59:59失效' }
]

const mockWaitData = [
    {  id: 3, avatar: [require('@/assets/images/user.png'), require('@/assets/images/user.png')], title: '邀约好友领取权益礼卡', desc: '商家约定活动将于2020-03-05 23:59:59失效', status: '等待加入', skipUrl: '/pages/experience/resend' },
    {  id: 4, avatar: [require('@/assets/images/user.png'), require('@/assets/images/user.png')], title: '来挑战平板支撑至少一分钟，为了诱人的马甲线', desc: '商家约定活动将于2020-03-30 23:59:59失效', status: '等待完成', skipUrl: '/pages/experience/waitDone' }
]

class AppointTabs extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        current: 0,
        tabList: [{ title: '待Ta加入' }, { title: '等待完成' }]
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
            <AtTabs className='appoint-tabs' current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                <AtTabsPane current={current} index={0} >
                    <View className='appoint-tabs-wrap'>
                        {mockData.map(item => <View key={item.id}>
                            <View className='avatar-box'>
                                <AtAvatar image={item.avatar} />
                                <View className='icon-box'><AtIcon prefixClass='icon' value='-user-circle' size='20' /></View>
                            </View>
                            <View className='order-box'>
                                <View className='tit'>{item.title}</View>
                                <View className='desc'>{item.desc}</View>
                                <View className='btn'>
                                    <AtButton type='primary' circle size='small' onClick={this.skipUrl.bind(this, '/pages/experience/resend')}>再次发送</AtButton>
                                </View>
                            </View>
                        </View>)}
                    </View>
                </AtTabsPane>
                <AtTabsPane current={current} index={1} >
                    <View className='wait-wrap'>
                        {mockWaitData.map(item => <View className='wait_item'  key={item.id}>
                            <View className='wait_item-top at-row at-row__justify--between  at-row__align--center'>
                                <View className='at-col'>
                                    <View className='at-row  at-row__align--center'>
                                        {item.avatar.map(sItem => <View className='avatar-box' key={item.id+'1'}>
                                            <AtAvatar image={sItem} /></View>)}
                                    </View>
                                </View>
                                <View className='right-txt' onClick={this.skipUrl.bind(this, item.skipUrl)}>
                                    {item.status}
                                    <AtIcon value='chevron-right' size='14' color='#434343' />
                                </View>
                            </View>
                            <View className='wait_item-bot'>
                                <View className='tit'>{item.title}</View>
                                <View className='desc'>{item.desc}</View>
                            </View>
                        </View>)}

                    </View>
                </AtTabsPane>
            </AtTabs>
        )
    }
}

export default AppointTabs
