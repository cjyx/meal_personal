import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtAvatar, AtIcon } from 'taro-ui';

import GoodsTabsItem from '../GoodsTabsItem'

const mockData = [
    {
        id: 18,
        avatar: require('@/assets/images/user.png'),
        activeName: '活动名称',
        rightTxt: '活动报名',
        activeCover: require('@/assets/images/user.png'),
        date: '2020-02-15 20:20',
        integral: '-5',
        useStatus: '01',
    },
    {
        id: 19,
        avatar: require('@/assets/images/user.png'),
        activeName: '活动名称',
        rightTxt: '拼团待付款',
        activeCover: require('@/assets/images/user.png'),
        date: '2020-02-15 20:20',
        integral: '-5',
        useStatus: '02',
    },
    {
        id: 20,
        avatar: require('@/assets/images/user.png'),
        activeName: '活动名称',
        rightTxt: '待消费',
        activeCover: require('@/assets/images/user.png'),
        date: '2020-02-15 20:20',
        integral: '-5',
        useStatus: '03',
    },
    {
        id:22,
        avatar: require('@/assets/images/user.png'),
        activeName: '活动名称',
        rightTxt: '已完成',
        activeCover: require('@/assets/images/user.png'),
        date: '2020-02-15 20:20',
        integral: '-5',
        useStatus: '04'
    }
]

const waitPayMock = mockData.filter(item => item.useStatus === '02');
const waitUseMock = mockData.filter(item => item.useStatus === '03');

class GoodsTabs extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        current: 0,
        tabList: [{ title: '全部' }, { title: '待付款(1)' }, { title: '待使用(1)' }]
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
            <AtTabs className='goods-tabs' current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                <AtTabsPane current={current} index={0} >
                    <View className='goods-tabs_wrap'>
                        <View className='goods-tabs_ad'></View>
                        {mockData.map(item => <GoodsTabsItem item={item} key={item.id} />)}
                    </View>
                </AtTabsPane>
                <AtTabsPane current={current} index={1} >
                    <View className='goods-tabs_wrap'>
                        <View className='goods-tabs_ad'></View>
                        {waitPayMock.map(item => <GoodsTabsItem item={item} key={item.id} />)}
                    </View>
                </AtTabsPane>
                <AtTabsPane current={current} index={2} >
                    <View className='goods-tabs_wrap'>
                        <View className='goods-tabs_ad'></View>
                        {waitUseMock.map(item => <GoodsTabsItem item={item} key={item.id} />)}
                    </View>
                </AtTabsPane>
            </AtTabs>
        )
    }
}

export default GoodsTabs
