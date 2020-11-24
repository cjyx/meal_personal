import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'

import qrcodePng from '@/assets/images/qrcode2.png'

class OrderDetailPrompt extends Component {
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

    handleClose = () => {
        this.props.onClose();
    }

    render() {
        return (
            <View className='order-detail-prompt at-row at-row__align--center at-row__justify--center'>
                <View className='order-detail-prompt_main'>
                    <View className='title'>商家扫描券码即可消费</View>
                    <View>
                        <Image className='qr-code' src={qrcodePng} mode='widthFix' />
                    </View>
                </View>
                <View onClick={this.handleClose}>
                    <AtIcon prefixClass='icon' value='close' size='30' color='#ffffff'></AtIcon>
                </View>
            </View>
        )
    }
}

export default OrderDetailPrompt
