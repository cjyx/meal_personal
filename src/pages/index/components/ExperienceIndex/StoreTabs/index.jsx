import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtAvatar, AtIcon } from 'taro-ui';

const mockData = [
    {
        date: '2020年3月',
        expenditure: '20',
        storeArr: [
            {
                avatar: require('@/assets/images/user.png'),
                name: '门店名称',
                desc: '美业健康',
                date: '3月20日 18:36',
                price: '-28.00',
                discountsPrice: '15'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '门店名称',
                desc: '餐饮',
                date: '3月22日 18:36',
                price: '-220.00',
                discountsPrice: '15'
            }
        ]
    },
    {
        date: '2020年2月',
        expenditure: '20',
        storeArr: [
            {
                avatar: require('@/assets/images/user.png'),
                name: '门店名称',
                desc: '美业健康',
                date: '3月20日 18:36',
                price: '-28.00',
                discountsPrice: '15'
            },
            {
                avatar: require('@/assets/images/user.png'),
                name: '门店名称',
                desc: '餐饮',
                date: '3月22日 18:36',
                price: '-220.00',
                discountsPrice: '15'
            }
        ]
    }
]

class StoreTabs extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        current: 0,
        tabList: [{ title: '消费记录' }]
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
            <AtTabs className='store-tabs' current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                <AtTabsPane current={current} index={0} >
                    <View className='store-tabs-wrap'>
                        {mockData.map(item => <View className='store-tabs_item' key=''>
                            <View className='at-row'>
                                <View className='at-col'>
                                    <View className='month'>{item.date} <AtIcon value='chevron-down' size='14' color='#434343'></AtIcon></View>
                                    <View className='expenditure'>支出 ¥{item.expenditure}</View>
                                </View>
                                <View className='right'>
                                    统计<AtIcon value='chevron-right' size='14' color='#848484'></AtIcon>
                                </View>
                            </View>
                            <View>
                                {item.storeArr.map(sItem => <View className='store-tabs_sItem at-row' key=''>
                                    <View className='avatar-box'>
                                        <AtAvatar image={sItem.avatar} />
                                    </View>
                                    <View className='text at-col'>
                                        <View className='store-name'>{sItem.name}</View>
                                        <View className='desc'>{sItem.desc}</View>
                                        <View className='date'>{sItem.date}</View>
                                    </View>
                                    <View className='right-txt'>
                                        <View className='price'>{sItem.price}</View>
                                        <View>优惠¥{sItem.discountsPrice}</View>
                                    </View>
                                </View>)}
                            </View>
                        </View>)}
                    </View>
                </AtTabsPane>
            </AtTabs>
        )
    }
}

export default StoreTabs
