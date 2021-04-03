/*
 * @Author: 黄佳佳
 * @Date: 2021-04-03 18:56:38
 * @LastEditors: 黄佳佳
 * @LastEditTime: 2021-04-03 19:22:36
 * @Description: 
 */
import React,{Component} from "react"
import gj from "./gj"

class A extends Component{
    render(){
        return (
            <div>我是组件a</div>
        )
    }
}

export default gj(A)
