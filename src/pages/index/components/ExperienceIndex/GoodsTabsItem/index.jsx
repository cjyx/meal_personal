import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton, AtAvatar, AtIcon } from 'taro-ui';

class GoodsTabsItem extends Component {
    static options = {
        addGlobalClass: true
    }

    componentWillMount() { }

    componentWillReact() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    handleClick = () => {
        const { item } = this.props;
        switch (item.useStatus) {
            case '01':
                Taro.navigateTo({ url: '/pages/experience/orderDetail2' });
                return;
            default:
                Taro.navigateTo({ url: `/pages/experience/orderDetail?type=${item.useStatus}` });
                return;
        }
    }

    skipUrl = (url) => {
        Taro.navigateTo({ url })
    }

    seeQrcode = (e) => {
        e.stopPropagation();
        Taro.navigateTo({ url: `/pages/experience/seeQrcode` });
    }

    render() {
        const { item = {} } = this.props;
        return (
            <View className='goods-tabs-item'>
                <View className='goods-tabs-item_top at-row at-row__align--center at-row__justify--between'>
                    <View className='avatar-box'>
                        <View className='at-row at-row__align--center at-row__justify--center'>
                            <AtIcon prefixClass='icon' value='shop' size='20' />
                        </View>
                    </View>
                    <View className='active-name at-col'>{item.activeName}</View>
                    <View className='right-txt'>{item.rightTxt}</View>
                </View>
                <View className='goods-tabs-item_main'>
                    <View className='at-row'>
                        <View className='avatar-box'>
                            <AtAvatar image={item.avatar} />
                        </View>
                        <View>
                            <View className='date'>下单时间：{item.date}</View>
                            <View className='integral'>抵扣积分：{item.integral}</View>
                        </View>
                    </View>

                    {/*  01 待报名  02 拼团待付款  03 待消费 04 已完成 */}
                    {item.useStatus === '01' && <View className='btn-box at-row at-row__justify--end'>
                        <View className='btn'>
                            <AtButton circle size='small' onClick={this.handleClick.bind(this)}>待报名</AtButton>
                        </View>
                    </View>}
                    {item.useStatus === '02' && <View className='btn-box at-row at-row__justify--end'>
                        <View className='btn'>
                            <AtButton circle size='small' onClick={this.handleClick.bind(this)}>付款</AtButton>
                        </View>
                    </View>}
                    {item.useStatus === '03' && <View className='btn-box at-row at-row__justify--end'>
                        <View className='btn'>
                            <AtButton circle size='small' onClick={this.handleClick.bind(this)}>再来一单</AtButton>
                        </View>
                        <View className='btn'>
                            <AtButton circle size='small' onClick={this.seeQrcode}>查看劵码</AtButton>
                        </View>
                    </View>}
                    {item.useStatus === '04' && <View className='btn-box at-row at-row__justify--end'>
                        <View className='btn'>
                            <AtButton circle size='small' onClick={this.handleClick.bind(this)}>再来一单</AtButton>
                        </View>
                    </View>}
                </View>
            </View>
        )
    }
}

export default GoodsTabsItem
