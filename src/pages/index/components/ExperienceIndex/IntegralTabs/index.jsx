import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtAvatar, AtIcon } from 'taro-ui';

import IntegralChildTabs from '../IntegralChildTabs'

const mockData = [
    {
        date: '2020年3月',
        expenditure: '20',
        storeArr: [
            {
                avatar: require('@/assets/images/user.png'),
                name: '(消费)会员福利',
                date: '2020-03–20 16:46:32',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(消费)会员福利',
                date: '3月22日 18:36',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(消费)会员福利',
                date: '2020-03–20 16:46:32',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(奖励)营销活动@推荐有礼',
                date: '3月22日 18:36',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(奖励)约定活动@商家名',
                date: '3月22日 18:36',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(奖励)约定活动@商家名',
                date: '3月22日 18:36',
                price: '+128.00'
            }
        ]
    },
    {
        date: '2020年2月',
        expenditure: '20',
        storeArr: [
            {
                avatar: require('@/assets/images/user.png'),
                name: '(消费)会员福利',
                date: '2020-03–20 16:46:32',
                price: '+220.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '兑礼卡充值',
                date: '3月22日 18:36',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(奖励)线下提货@商家名',
                date: '3月22日 18:36',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(抵扣)活动名称',
                date: '3月22日 18:36',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(抵扣)活动名称',
                date: '3月22日 18:36',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(抵扣)商品名称',
                date: '3月22日 18:36',
                price: '+128.00'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '(赠送)微信昵称',
                date: '3月22日 18:36',
                price: '+128.00'
            }
        ]
    }
]

class IntegralTabs extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        current: 0,
        tabList: [{ title: '全部积分' }, { title: '积分兑换' }]
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

    render() {
        const { current, tabList } = this.state;
        return (
            <AtTabs className='integral-tabs' current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                <AtTabsPane current={current} index={0} >
                    <View className='integral-tabs-wrap'>
                        {mockData.map(item => <View className='integral-tabs_item' key=''>
                            <View className='at-row'>
                                <View className='at-col'>
                                    <View className='month'>{item.date} <AtIcon value='chevron-down' size='14' color='#434343'></AtIcon></View>
                                    <View className='expenditure'>支出 ¥{item.expenditure}</View>
                                </View>
                            </View>
                            <View>
                                {item.storeArr.map(sItem => <View className='integral-tabs_sItem at-row at-row__align--center' key=''>
                                    <View className='text at-col'>
                                        <View className='store-name'>{sItem.name}</View>
                                        <View className='date'>{sItem.date}</View>
                                    </View>
                                    <View className='right-txt'>
                                        <View className='price'>{sItem.price}</View>
                                    </View>
                                </View>)}
                            </View>
                        </View>)}
                    </View>
                </AtTabsPane>
                <AtTabsPane current={current} index={1} >
                    <IntegralChildTabs />
                </AtTabsPane>
            </AtTabs>
        )
    }
}

export default IntegralTabs
