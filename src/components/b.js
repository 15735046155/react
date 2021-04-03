/*
 * @Author: 黄佳佳
 * @Date: 2021-04-03 18:56:43
 * @LastEditors: 黄佳佳
 * @LastEditTime: 2021-04-03 19:20:22
 * @Description: 
 */

import React,{Component} from "react"
import gj from "./gj"
class B extends Component{
    render(){
        return (
            <div>我是组件b</div>
        )
    }
}
export default gj(B)
