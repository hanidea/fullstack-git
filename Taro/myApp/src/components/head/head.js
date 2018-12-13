import Taro,{Component} from '@tarojs/taro';
import {View,Text,Image} from '@tarojs/components';
import Top from './top';
class Head extends Component{
    render(){
        return (<view className="head">
            <Top />
            <Text>整体头部</Text>
        </view>)
    }
}
export default Head;