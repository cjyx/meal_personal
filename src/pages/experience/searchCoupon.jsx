import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtSearchBar, AtIcon, AtFloatLayout } from 'taro-ui'
import GiftCertificateListItem from '../index/components/ExperienceIndex/GiftCertificateListItem'
import GiftCardItem from '../index/components/ExperienceIndex/GiftCardItem'

import './searchCoupon.scss';

const mockData = [
    {
        name: '*门店名称',
        icon: '',
        offerName: '整单折扣',
        couponName: '券名称',
        couponDiscount: '9.5',
        time: '活动时间设置参数',
        range: '全店通用',
        theme: 'yellow',
        type: 'default'
    },
    {
        price: '60',
        tit: '代金券',
        time: '有效时间',
        condition: '满0元可用',
        type: 'gift'
    },
    {
        name: '*门店名称',
        icon: '',
        offerName: '特价商品',
        couponName: '券名称',
        couponDiscount: '9.5',
        time: '活动时间设置参数',
        range: '全店通用',
        theme: 'yellow',
        type: 'default'
    },
    {
        name: '*门店名称',
        icon: '',
        offerName: '礼券',
        couponName: '券名称',
        couponDiscount: '9.5',
        time: '活动时间设置参数',
        range: '全店通用',
        theme: 'red',
        isShowGiftIcon: true,
        type: 'default'
    }
]

const mockSelectedData = [
    { title: '券类型(12张)', unique: 'type', child: ['全部类型', '折扣券', '代金券', '商品券', '礼券'] },
    { title: '券来源', unique: 'source', child: ['全部类型', '营销活动', '约定活动', 'TA的赠送', '会员福利'] }
]

export default class extends Component {
    static options = {
        addGlobalClass: true
    }

    config = {
        navigationBarTitleText: '搜索'
    };
    state = {
        isOpened: false,
        dtUnique: 'type',
        ddText: {
            type: mockSelectedData[0].title,
            source: mockSelectedData[1].title
        }
    };

    toggleFloatLayout = (bool, unique) => {
        if (!unique) {
            this.setState({ isOpened: bool });
            return;
        }

        if (bool === null) {
            this.setState({ dtUnique: unique });
            return;
        }
        this.setState({ isOpened: bool, dtUnique: unique })
    }

    setWords = (val, key) => {
        this.setState({
            ddText: { ...this.state.ddText, [key]: val },
            isOpened: false
        })
    }

    render() {
        const { isOpened, dtUnique, ddText } = this.state;

        return (
            <View class='search-coupon'>
                <AtSearchBar className='search-container' value={this.state.value} placeholder='推广店铺名称' onChange={this.handleChange} onClear={this.handleClear} onActionClick={this.handleActionClick} />
                <View className='caption selected-wrap at-row'>
                    <View className='item' onClick={this.toggleFloatLayout.bind(this, true, 'type')}>
                        <Text className='space'>{ddText.type}</Text>
                        <AtIcon value='chevron-down' size='14' color='#434343' />
                    </View>
                    <View className='item' onClick={this.toggleFloatLayout.bind(this, true, 'source')}>
                        <Text className='space'>{ddText.source}</Text>
                        <AtIcon value='chevron-down' size='14' color='#434343' />
                    </View>
                </View>
                <View className='list-wrap'>
                    {mockData.map(item => <View key=''>
                        {item.type === 'gift' && <GiftCardItem key='' item={item} />}
                        {item.type === 'default' && <GiftCertificateListItem key='' item={item} />}
                    </View>)}
                </View>
                <AtFloatLayout isOpened={isOpened} title={null} onClose={this.toggleFloatLayout.bind(this, false)}>
                    <View className='at-row filter-wrap'>
                        {mockSelectedData.map(item => <View className={`selected-wrap ${item.unique === dtUnique ? 'show' : ''}`} key=''>
                            <View className={`item dt ${item.unique === dtUnique ? 'active' : ''}`} onClick={this.toggleFloatLayout.bind(this, null, item.unique)}>
                                <Text className='space'>{item.title}</Text>
                                <AtIcon value='chevron-down' size='14' color='#434343' />
                            </View>
                            <View className='dd-box'>
                                {item.child.map(sItem => <View className={`dd ${sItem === ddText[item.unique] ? 'active' : ''} `} key='' onClick={this.setWords.bind(this, sItem, item.unique)}>{sItem}</View>)}</View>
                        </View>)}
                    </View>
                </AtFloatLayout>
            </View>
        );
    }
}
