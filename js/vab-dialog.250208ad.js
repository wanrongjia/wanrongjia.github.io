"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[2577],{9977:function(a,l,e){e.r(l),e.d(l,{default:function(){return g}});var o=e(66252);function i(a,l,e,i,d,n){const t=(0,o.up)("el-alert"),g=(0,o.up)("el-button"),u=(0,o.up)("el-card"),m=(0,o.up)("el-main"),s=(0,o.up)("sc-dialog"),r=(0,o.up)("el-empty"),p=(0,o.up)("dialog1"),k=(0,o.up)("dialog2");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(t,{title:"二次封装el-dialog,加入加载中/最大化.",type:"success",style:{margin:"0 0 20px 0"}}),(0,o.Wm)(u,{shadow:"never",header:"内置"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{type:"primary",onClick:n.open1},{default:(0,o.w5)((()=>[(0,o.Uk)("默认")])),_:1},8,["onClick"]),(0,o.Wm)(g,{type:"primary",onClick:n.open2},{default:(0,o.w5)((()=>[(0,o.Uk)("加载")])),_:1},8,["onClick"]),(0,o.Wm)(g,{type:"primary",onClick:n.open3},{default:(0,o.w5)((()=>[(0,o.Uk)("禁止拖拽最大化和关闭")])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(u,{shadow:"never",header:"异步",style:{"margin-top":"15px"}},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{type:"primary",onClick:n.asyn1},{default:(0,o.w5)((()=>[(0,o.Uk)("异步加载1")])),_:1},8,["onClick"]),(0,o.Wm)(g,{type:"primary",onClick:n.asyn2},{default:(0,o.w5)((()=>[(0,o.Uk)("异步加载2")])),_:1},8,["onClick"]),(0,o.Wm)(t,{title:"适用于页面有很多弹窗操作,利用异步组件按需加载,加快首屏的加载速度和打包体积",style:{"margin-top":"20px"}})])),_:1})])),_:1}),(0,o.Wm)(s,{modelValue:d.dialog1,"onUpdate:modelValue":l[2]||(l[2]=a=>d.dialog1=a),draggable:"",title:"提示"},{footer:(0,o.w5)((()=>[(0,o.Wm)(g,{onClick:l[0]||(l[0]=a=>d.dialog1=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("取 消")])),_:1}),(0,o.Wm)(g,{type:"primary",onClick:l[1]||(l[1]=a=>d.dialog1=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("确 定")])),_:1})])),default:(0,o.w5)((()=>[(0,o.Uk)(" 内容 ")])),_:1},8,["modelValue"]),(0,o.Wm)(s,{modelValue:d.dialog2,"onUpdate:modelValue":l[5]||(l[5]=a=>d.dialog2=a),draggable:"",title:"模拟加载",width:400,loading:d.dialog2Loading},{footer:(0,o.w5)((()=>[(0,o.Wm)(g,{onClick:l[3]||(l[3]=a=>d.dialog2=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("取 消")])),_:1}),(0,o.Wm)(g,{type:"primary",onClick:l[4]||(l[4]=a=>d.dialog2=!1),loading:d.dialog2Loading},{default:(0,o.w5)((()=>[(0,o.Uk)("确 定")])),_:1},8,["loading"])])),default:(0,o.w5)((()=>[(0,o.Wm)(r,{description:"NO Data","image-size":80})])),_:1},8,["modelValue","loading"]),(0,o.Wm)(s,{modelValue:d.dialog3,"onUpdate:modelValue":l[8]||(l[8]=a=>d.dialog3=a),title:"禁用拖拽","show-fullscreen":!1,"show-close":!1},{footer:(0,o.w5)((()=>[(0,o.Wm)(g,{onClick:l[6]||(l[6]=a=>d.dialog3=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("取 消")])),_:1}),(0,o.Wm)(g,{type:"primary",onClick:l[7]||(l[7]=a=>d.dialog3=!1)},{default:(0,o.w5)((()=>[(0,o.Uk)("确 定")])),_:1})])),default:(0,o.w5)((()=>[(0,o.Uk)(" 内容 ")])),_:1},8,["modelValue"]),d.asynDialog1?((0,o.wg)(),(0,o.j4)(p,{key:0,draggable:"",onClosed:l[9]||(l[9]=a=>d.asynDialog1=!1)})):(0,o.kq)("",!0),d.asynDialog2?((0,o.wg)(),(0,o.j4)(k,{key:1,draggable:"",onClosed:l[10]||(l[10]=a=>d.asynDialog2=!1)})):(0,o.kq)("",!0)],64)}var d={name:"dialogExtend",components:{dialog1:(0,o.RC)((()=>e.e(3270).then(e.bind(e,1033)))),dialog2:(0,o.RC)((()=>e.e(7666).then(e.bind(e,55279))))},data(){return{dialog1:!1,dialog2:!1,dialog3:!1,dialog2Loading:!1,asynDialog1:!1,asynDialog2:!1}},mounted(){},methods:{open1(){this.dialog1=!0},open2(){this.dialog2=!0,this.dialog2Loading=!0,setTimeout((()=>{this.dialog2Loading=!1}),1e3)},open3(){this.dialog3=!0},asyn1(){this.asynDialog1=!0},asyn2(){this.asynDialog2=!0}}},n=e(83744);const t=(0,n.Z)(d,[["render",i]]);var g=t}}]);