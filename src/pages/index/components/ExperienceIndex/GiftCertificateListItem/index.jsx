import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

const themeColor = {
    blue: '#229E8E',
    yellow: '#FDD000',
    red: '#E0004E'
}

class GiftCertificateListItem extends Component {
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

    render() {
        const { item = {} } = this.props;
        return (
            <View className={`gift-certificate-item_container at-row ${item.theme}`} onClick={()=>{Taro.navigateTo({url: '/pages/experience/couponDetail'})}}>
                <View className='left-box'>
                    <View className='store-name at-row at-row__justify--center at-row__align--center'>
                        <View className='round'></View>
                        <View className='text ellipsis'>{item.name}</View>
                    </View>
                </View>
                <View className='right-box at-col'>
                    <View className='at-row at-row__justify--between at-row__align--end'>
                        <View className='at-row at-row__justify--center at-row__align--center'>
                            <View className='offer-name at-row at-row__justify--center at-row__align--center'>
                                <View className='round-icon at-row at-row__justify--center at-row__align--center'>
                                    <AtIcon prefixClass='icon' value='appoint' size='30' color='#ffffff' />
                                </View>
                                <View className='text ellipsis'>{item.offerName}</View>
                            </View>
                            <View className='line'></View>
                            <View className='discount at-col'>{item.couponDiscount}<Text className='text'>折</Text></View>
                        </View>
                        <View className='right-text-box at-row at-row__justify--between at-row__align--end flex-column'>
                            <View><AtIcon prefixClass='icon' value='appoint' size='32' color='' /></View>
                            <View className='text-box'>
                                <View className='coupon-name'>{item.couponName}</View>
                                <View className='time'>{item.time}</View>
                                <View className='range'>{item.range}</View>
                            </View>
                        </View>
                    </View>
                    <View className='icon-box'>
                        <View className='at-row'>
                            <View className='share-icon at-row at-row__justify--center at-row__align--center'><AtIcon prefixClass='icon' value='export' size='12' color='#ffffff' /></View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default GiftCertificateListItem
