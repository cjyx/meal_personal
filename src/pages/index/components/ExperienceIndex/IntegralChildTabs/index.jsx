import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtIcon } from 'taro-ui';

const mockIntegralList = [
    {
        id: 23,
        brandName: '品牌名称',
        desc: '商品描述，最大显示两行',
        number: 568,
        picture: ''
    },
    {
        id: 24,
        brandName: '品牌名称',
        desc: '商品描述，最大显示两行',
        number: 568,
        picture: ''
    },
    {
        id: 25,
        brandName: '品牌名称',
        desc: '商品描述，最大显示两行',
        number: 568,
        picture: ''
    },
    {
        id: 26,
        brandName: '品牌名称',
        desc: '商品描述，最大显示两行',
        number: 568,
        picture: ''
    }
]

class IntegralChildTabs extends Component {
    static options = {
        addGlobalClass: true
    }

    state = {
        current: 0,
        tabList: [{ title: '为您推荐' }, { title: '商家福利' }]
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
            <View className='integral-child-tabs'>
                <View className='more'>更多好物</View>
                <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                    <AtTabsPane current={current} index={0} >
                        <View className='at-row at-row--wrap integral-child-tabs_exchange'>
                            {mockIntegralList.map(item => <View key={item.id} className='at-col at-col-6 integral-child-tabs_exchange--item'>
                                <View className='img-box'>
                                    {/* <Image className='image' src={item.picture} mode='aspectFit' /> */}
                                </View>
                                <View className='text-box'>
                                    <View className='tit ellipsis'>{item.brandName}</View>
                                    <View className='desc'>{item.desc}</View>
                                    <View className='at-row at-row__align--end integral-box'>
                                        <View className='at-col'>{item.number}<Text className='font-20 no-bold'>积分</Text></View>
                                        <AtIcon prefixClass='icon' value='more' size='24' color='#c3c3c3' />
                                    </View>
                                </View>
                            </View>)}
                        </View>
                    </AtTabsPane>
                    <AtTabsPane current={current} index={1} >
                        <View className='at-row at-row--wrap integral-child-tabs_exchange'>
                            {mockIntegralList.map(item => <View key={item.id} className='at-col at-col-6 integral-child-tabs_exchange--item'>
                                <View className='img-box'>
                                    {/* <Image className='image' src={item.picture} mode='aspectFit' /> */}
                                </View>
                                <View className='text-box'>
                                    <View className='tit ellipsis'>{item.brandName}</View>
                                    <View className='desc'>{item.desc}</View>
                                    <View className='at-row at-row__align--end integral-box'>
                                        <View className='at-col'>{item.number}<Text className='font-20 no-bold'>积分</Text></View>
                                        <AtIcon prefixClass='icon' value='more' size='24' color='#c3c3c3' />
                                    </View>
                                </View>
                            </View>)}
                        </View>
                    </AtTabsPane>
                </AtTabs>
            </View>
        )
    }
}

export default IntegralChildTabs
