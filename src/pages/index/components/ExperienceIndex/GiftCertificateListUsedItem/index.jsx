import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtSwipeAction } from 'taro-ui'

const themeColor = {
    blue: '#229E8E',
    yellow: '#FDD000',
    red: '#E0004E'
}

class GiftCertificateListUsedItem extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {}

    componentWillMount() { }

    componentWillReact() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    handleClick = () => {

    }

    render() {
        const { item = {} } = this.props;
        return (
            <View className='gift-certificate-used-item_container' onClick={()=>{Taro.navigateTo({url: '/pages/experience/couponDetail'})}}>
                <AtSwipeAction onClick={this.handleClick} options={[{ text: '删除', style: { backgroundColor: '#424242' } }]}>
                    <View className='at-row'>
                        {/* // couponType:  01 折扣券  02 代金券  03 兑换券  04 */}
                        {item.couponType === '01' && <View className='left-box at-row at-row__justify--center at-row__align--center'>
                            <Text className='num'>{item.couponDiscount}</Text>
                            <Text>折</Text>
                        </View>}
                        {(item.couponType === '02' || item.couponType === '04') && <View className='left-box at-row at-row__justify--center at-row__align--center'>
                            <Text className='num'>{item.couponDiscount}</Text>
                            <Text>元</Text>
                        </View>}
                        {item.couponType === '03' && <View className='left-box at-row at-row__justify--center at-row__align--center'>
                            <Text>{item.couponDiscount}</Text>
                        </View>}
                        <View className='at-col right-box'>
                            <View className='right-box-text'>{item.name}</View>
                            <View className='right-box-text'>券类型：{item.couponName}</View>
                            <View className='right-box-text'>使用时间：{item.time}</View>
                            {item.couponType === '01' && <View className='right-box-text'>适用范围：{item.range}</View>}
                            {(item.couponType === '02' || item.couponType === '04') && <View className='right-box-text'>不参与商品：</View>}
                            {item.couponType === '03' && <View className='right-box-text'>活动商品：</View>}
                        </View>
                    </View>
                </AtSwipeAction>
            </View>
        )
    }
}

export default GiftCertificateListUsedItem
