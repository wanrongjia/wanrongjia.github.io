"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[5381],{42883:function(e,l,t){t.r(l),t.d(l,{default:function(){return u}});var i=t(66252);const a={class:"left-panel"};function s(e,l,t,s,n,o){const d=(0,i.up)("el-button"),r=(0,i.up)("el-header"),c=(0,i.up)("el-table-column"),u=(0,i.up)("sc-status-indicator"),p=(0,i.up)("el-popconfirm"),m=(0,i.up)("scTable"),h=(0,i.up)("el-main"),f=(0,i.up)("el-container"),g=(0,i.up)("save-dialog"),w=(0,i.up)("info"),b=(0,i.up)("el-drawer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i._)("div",a,[(0,i.Wm)(d,{type:"primary",icon:"el-icon-plus",onClick:o.add},null,8,["onClick"]),(0,i.Wm)(d,{type:"primary",icon:"el-icon-plus",onClick:o.addPage},{default:(0,i.w5)((()=>[(0,i.Uk)("页面新增")])),_:1},8,["onClick"]),(0,i.Wm)(d,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==n.selection.length,onClick:o.batch_del},null,8,["disabled","onClick"])])])),_:1}),(0,i.Wm)(h,{class:"nopadding"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{ref:"table",apiObj:n.list.apiObj,"row-key":"id",onSelectionChange:o.selectionChange,stripe:""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{type:"selection",width:"50"}),(0,i.Wm)(c,{label:"姓名",prop:"name",width:"180"}),(0,i.Wm)(c,{label:"性别",prop:"sex",width:"150"}),(0,i.Wm)(c,{label:"邮箱",prop:"email",width:"250"}),(0,i.Wm)(c,{label:"状态",prop:"boolean",width:"60"},{default:(0,i.w5)((e=>[e.row.boolean?((0,i.wg)(),(0,i.j4)(u,{key:0,type:"success"})):(0,i.kq)("",!0),e.row.boolean?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(u,{key:1,pulse:"",type:"danger"}))])),_:1}),(0,i.Wm)(c,{label:"评分",prop:"num",width:"150"}),(0,i.Wm)(c,{label:"操作",fixed:"right",align:"right",width:"300"},{default:(0,i.w5)((e=>[(0,i.Wm)(d,{plain:"",size:"small",onClick:l=>o.table_show(e.row)},{default:(0,i.w5)((()=>[(0,i.Uk)("查看")])),_:2},1032,["onClick"]),(0,i.Wm)(d,{type:"primary",plain:"",size:"small",onClick:l=>o.table_edit(e.row)},{default:(0,i.w5)((()=>[(0,i.Uk)("编辑")])),_:2},1032,["onClick"]),(0,i.Wm)(d,{type:"primary",plain:"",size:"small",onClick:l=>o.table_edit_page(e.row)},{default:(0,i.w5)((()=>[(0,i.Uk)("页面编辑")])),_:2},1032,["onClick"]),(0,i.Wm)(p,{title:"确定删除吗？",onConfirm:l=>o.table_del(e.row,e.$index)},{reference:(0,i.w5)((()=>[(0,i.Wm)(d,{plain:"",type:"danger",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)("删除")])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["apiObj","onSelectionChange"])])),_:1})])),_:1}),n.dialog.save?((0,i.wg)(),(0,i.j4)(g,{key:0,ref:"saveDialog",onSuccess:o.handleSaveSuccess,onClosed:l[0]||(l[0]=e=>n.dialog.save=!1)},null,8,["onSuccess"])):(0,i.kq)("",!0),(0,i.Wm)(b,{modelValue:n.dialog.info,"onUpdate:modelValue":l[1]||(l[1]=e=>n.dialog.info=e),size:800,title:"详细",direction:"rtl","destroy-on-close":""},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{ref:"infoDialog"},null,512)])),_:1},8,["modelValue"])],64)}t(57658);var n=t(37722),o=t(6839),d={name:"listCrud",components:{saveDialog:n["default"],info:o["default"]},data(){return{dialog:{save:!1,info:!1},list:{apiObj:this.$API.demo.list},selection:[]}},mounted(){},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},addPage(){this.$router.push({path:"/template/list/crud/detail"})},table_edit_page(e){this.$router.push({path:"/template/list/crud/detail",query:{id:e.id}})},table_show(e){this.dialog.info=!0,this.$nextTick((()=>{this.$refs.infoDialog.setData(e)}))},async table_del(e,l){var t={id:e.id},i=await this.$API.demo.post.post(t);200==i.code?(this.$refs.table.removeIndex(l),this.$message.success("删除成功")):this.$alert(i.message,"提示",{type:"error"})},async batch_del(){var e=await this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning",confirmButtonText:"删除",confirmButtonClass:"el-button--danger"}).catch((()=>{}));if(!e)return!1;var l=this.selection.map((e=>e.id));this.$refs.table.removeKeys(l),this.$message.success("操作成功")},selectionChange(e){this.selection=e},handleSaveSuccess(e,l){"add"==l?this.$refs.table.unshiftRow(e):"edit"==l&&this.$refs.table.updateKey(e)}}},r=t(83744);const c=(0,r.Z)(d,[["render",s]]);var u=c}}]);