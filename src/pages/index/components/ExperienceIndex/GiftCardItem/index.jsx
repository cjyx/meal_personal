import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

const themeColor = {
    blue: '#229E8E',
    yellow: '#FDD000',
    red: '#E0004E'
}

class GiftCardItem extends Component {
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
            <View className='gift-card-item-wrap'>
                <View className='card-box'>
                    <View className='price'>{item.price}<Text className='txt'>元</Text></View>
                    <View className='at-row'>
                        <View className='icon-box at-row at-row__justify--center at-row__align--center'>
                            <AtIcon prefixClass='icon' value='gift-fill' size='22'></AtIcon>
                        </View>
                        <View className='at-col'>
                            <View className='tit'>{item.tit}</View>
                            <View className='time'>{item.time}</View>
                            <View className='condition'>{item.condition}</View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default GiftCardItem
