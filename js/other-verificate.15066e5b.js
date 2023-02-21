"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[5267],{93088:function(e,l,r){r.r(l),r.d(l,{default:function(){return s}});var a=r(66252);function u(e,l,r,u,m,o){const t=(0,a.up)("el-input"),d=(0,a.up)("el-form-item"),s=(0,a.up)("el-button"),n=(0,a.up)("el-form"),i=(0,a.up)("el-card"),f=(0,a.up)("el-alert"),p=(0,a.up)("el-main");return(0,a.wg)(),(0,a.j4)(p,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i,{shadow:"never",header:"async-validator内置"},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{ref:"form",model:m.form,rules:m.rules,"label-width":"100px","status-icon":""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{label:"必填",prop:"required"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:m.form.required,"onUpdate:modelValue":l[0]||(l[0]=e=>m.form.required=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"长度",prop:"length"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:m.form.length,"onUpdate:modelValue":l[1]||(l[1]=e=>m.form.length=e),placeholder:"长度需为3位"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"类型",prop:"type"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:m.form.type,"onUpdate:modelValue":l[2]||(l[2]=e=>m.form.type=e),placeholder:"类型可为string number boolean array date url email等"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"范围",prop:"range"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:m.form.range,"onUpdate:modelValue":l[3]||(l[3]=e=>m.form.range=e),placeholder:"请填写范围在3至5位"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"枚举",prop:"enum"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:m.form.enum,"onUpdate:modelValue":l[4]||(l[4]=e=>m.form.enum=e),placeholder:"请填写admin，user，guest其一"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"自定义",prop:"custom"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:m.form.custom,"onUpdate:modelValue":l[5]||(l[5]=e=>m.form.custom=e),placeholder:"请填写数字1"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"异步验证",prop:"async"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:m.form.async,"onUpdate:modelValue":l[6]||(l[6]=e=>m.form.async=e),placeholder:"请输入SCUI最新版本号,form开启status-icon后 可以查看右侧状态"},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{type:"primary",onClick:o.submit},{default:(0,a.w5)((()=>[(0,a.Uk)("验证所有字段")])),_:1},8,["onClick"]),(0,a.Wm)(s,{onClick:l[7]||(l[7]=e=>o.resetForm("form"))},{default:(0,a.w5)((()=>[(0,a.Uk)("Reset")])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1}),(0,a.Wm)(i,{shadow:"never",header:"自定义",style:{"margin-top":"15px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(n,{ref:"form2",model:m.form2,rules:m.rules2,"label-width":"100px","status-icon":""},{default:(0,a.w5)((()=>[(0,a.Wm)(d,{label:"手机号码",prop:"phone"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:m.form2.phone,"onUpdate:modelValue":l[8]||(l[8]=e=>m.form2.phone=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,{label:"车牌号码",prop:"cars"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:m.form2.cars,"onUpdate:modelValue":l[9]||(l[9]=e=>m.form2.cars=e)},null,8,["modelValue"])])),_:1}),(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,{type:"primary",onClick:o.submit2},{default:(0,a.w5)((()=>[(0,a.Uk)("验证所有字段")])),_:1},8,["onClick"]),(0,a.Wm)(s,{onClick:l[10]||(l[10]=e=>o.resetForm("form2"))},{default:(0,a.w5)((()=>[(0,a.Uk)("Reset")])),_:1})])),_:1})])),_:1},8,["model","rules"]),(0,a.Wm)(f,{title:"自定义验证可在 @/utils/verificate.js 中不断扩展业务需要的验证. 记得要 import 进来",type:"success"})])),_:1})])),_:1})}var m=r(62921),o={name:"verificate",data(){return{form:{},rules:{required:[{required:!0,message:"请填写"}],length:[{required:!0,len:3,message:"长度需为3位"}],type:[{required:!0,type:"email",message:"类型需为email"}],range:[{required:!0,min:3,max:5,message:"范围在3至5位"}],enum:[{required:!0,type:"enum",enum:["admin","user","guest"],message:"请填写admin，user，guest其一"}],custom:[{required:!0,validator:(e,l)=>"1"===l,message:"请填写数字1",trigger:"blur"}],async:[{required:!0,validator:(e,l,r)=>{this.$API.demo.ver.get({value:l}).then((e=>{if(e.data!=l)return r(new Error("请输入SCUI最新版本号："+e.data));r()}))},trigger:"blur"}]},form2:{},rules2:{phone:[{required:!0,message:"请输入姓名"},{validator:m.Z,trigger:"blur"}],cars:[{required:!0,validator:m.n,trigger:"blur"}]}}},mounted(){},methods:{submit(){this.$refs.form.validate((async e=>{if(!e)return!1;this.$message.success("全部验证通过")}))},submit2(){this.$refs.form2.validate((async e=>{if(!e)return!1;this.$message.success("全部验证通过")}))},resetForm(e){this.$refs[e].resetFields()}}},t=r(83744);const d=(0,t.Z)(o,[["render",u]]);var s=d}}]);