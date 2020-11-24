import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtIcon } from 'taro-ui'

import GiftCertificateListItem from '../GiftCertificateListItem'
import GiftCertificateListUsedItem from '../GiftCertificateListUsedItem'

const mockData = [
    {
        id: 5,
        name: '*门店名称',
        icon: '',
        offerName: '整单折扣',
        couponName: '券名称',
        couponDiscount: '9.5',
        time: '活动时间设置参数',
        range: '全店通用',
        theme: 'yellow'
    },
    {
        id: 6,
        name: '*门店名称',
        icon: '',
        offerName: '买赠',
        couponName: '券名称',
        couponDiscount: '9.5',
        time: '活动时间设置参数',
        range: '全店通用',
        theme: 'blue',
        isShowGiftIcon: true
    },
    {
        id: 7,
        name: '*门店名称',
        icon: '',
        offerName: '特价商品',
        couponName: '券名称',
        couponDiscount: '9.5',
        time: '活动时间设置参数',
        range: '全店通用',
        theme: 'yellow'
    },
    {
        id:8,
        name: '*门店名称',
        icon: '',
        offerName: '礼券',
        couponName: '券名称',
        couponDiscount: '9.5',
        time: '活动时间设置参数',
        range: '全店通用',
        theme: 'red',
        isShowGiftIcon: true
    }
]


// couponType:  01 折扣券  02 代金券  03 兑换券  04 商品名券
const mockUsedData = [
    {
        id: 9,
        couponDiscount: 9.5,
        name: '门店名称',
        couponName: '折扣券',
        time: '2020.03.02 18:59',
        range: '全店通用',
        couponType: '01'
    },
    {
        id: 10,
        couponDiscount: 8.5,
        name: '门店名称',
        couponName: '代金券',
        time: '2020.03.02 18:59',
        range: '不参与商品：',
        couponType: '02'
    },
    {
        id: 12,
        couponDiscount: '已领赠品',
        name: '门店名称',
        couponName: '兑换券',
        time: '2020.03.02 18:59',
        range: '礼品名',
        couponType: '03'
    },
    {
        couponDiscount: 30,
        name: '门店名称',
        couponName: '商品名券',
        time: '2020.03.02 18:59',
        range: '全店通用',
        couponType: '04'
    },
    {
        id: 13,
        couponDiscount: 2,
        name: '门店名称',
        couponName: '代金券',
        time: '2020.03.02 18:59',
        range: '全店通用',
        couponType: '02'
    },
    {
        id:14,
        couponDiscount: 60,
        name: '门店名称',
        couponName: '代金券',
        time: '2020.03.02 18:59',
        range: '全店通用',
        couponType: '02'
    }
]

class GiftCertificateTabs extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        current: 0,
        tabList: [{ title: '待使用' }, { title: '已使用' }]
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

    selectedClick = () => {
        Taro.navigateTo({ url: '/pages/experience/searchCoupon' })
    }

    render() {
        const { current, tabList } = this.state;
        return (
            <AtTabs className='gift-certificate-tabs-index' current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                <AtTabsPane current={current} index={0} >
                    <View className='caption selected-wrap at-row'>
                        <View className='item' onClick={this.selectedClick}>
                            <Text className='space'>券类型(12张)</Text>
                            <AtIcon value='chevron-down' size='14' color='#434343' />
                        </View>
                        <View className='item' onClick={this.selectedClick}>
                            <Text className='space'>券来源</Text>
                            <AtIcon value='chevron-down' size='14' color='#434343' />
                        </View>
                    </View>
                    <View className='list-wrap'>
                        {mockData.map(item => <GiftCertificateListItem key={item.id} item={item} />)}
                    </View>
                </AtTabsPane>
                <AtTabsPane current={current} index={1} >
                    <View className='caption selected-wrap at-row'>
                        <View className='item' onClick={this.selectedClick}>
                            <Text className='space'>券类型(6张)</Text>
                            <AtIcon value='chevron-down' size='14' color='#434343' />
                        </View>
                        <View className='item' onClick={this.selectedClick}>
                            <Text className='space'>券来源</Text>
                            <AtIcon value='chevron-down' size='14' color='#434343' />
                        </View>
                    </View>
                    <View className='list-wrap'>
                        {mockUsedData.map(item => <GiftCertificateListUsedItem key={item.id} item={item} />)}
                    </View>
                </AtTabsPane>
            </AtTabs>
        )
    }
}

export default GiftCertificateTabs
