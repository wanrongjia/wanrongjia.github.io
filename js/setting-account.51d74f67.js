"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[6532,9336],{1750:function(e,a,t){t.r(a),t.d(a,{default:function(){return $}});var l=t(6252),i=t(3577);const s={class:"left-panel"},n={class:"query"},o={class:"query_item"},r=(0,l._)("div",{class:"query_label"},"用户账号：",-1),u={class:"query_item"},d=(0,l._)("div",{class:"query_label"},"姓名：",-1),p={class:"query_item"},c=(0,l._)("div",{class:"query_label"},"手机号：",-1),h={class:"query_item"},g=(0,l._)("div",{class:"query_label"},"账号状态：",-1),m={class:"right-panel"},f={class:"right-panel-search",style:{margin:"5px 0"}},w={class:"left-panel"},y={class:"right-panel"},_={class:"breadcrumb_name"};function b(e,a,t,b,D,k){const v=(0,l.up)("el-input"),q=(0,l.up)("el-header"),W=(0,l.up)("el-tree"),$=(0,l.up)("el-main"),C=(0,l.up)("el-container"),I=(0,l.up)("el-aside"),x=(0,l.up)("el-radio-button"),U=(0,l.up)("el-radio-group"),V=(0,l.up)("el-button"),z=(0,l.up)("el-alert"),P=(0,l.up)("el-table-column"),L=(0,l.up)("el-timeline-item"),T=(0,l.up)("el-timeline"),S=(0,l.up)("el-popover"),j=(0,l.up)("el-switch"),G=(0,l.up)("el-popconfirm"),N=(0,l.up)("el-button-group"),F=(0,l.up)("scTable"),A=(0,l.up)("save-dialog"),Q=(0,l.up)("psd-dialog"),R=(0,l.Q2)("loading"),E=(0,l.Q2)("copy"),H=(0,l.Q2)("role");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(I,{width:"200px"},{default:(0,l.w5)((()=>[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,{placeholder:"输入关键字进行过滤",modelValue:D.groupFilterText,"onUpdate:modelValue":a[0]||(a[0]=e=>D.groupFilterText=e),clearable:""},null,8,["modelValue"])])),_:1}),(0,l.Wm)($,{class:"nopadding"},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{ref:"group",class:"menu","node-key":"id",data:D.group,props:D.treeProps,"current-node-key":D.current,"highlight-current":!0,"expand-on-click-node":!1,"filter-node-method":k.groupFilterNode,"default-expanded-keys":D.epxandDefault,onNodeClick:k.groupClick},null,8,["data","props","current-node-key","filter-node-method","default-expanded-keys","onNodeClick"])])),_:1})])),_:1})])),_:1})),[[R,D.showGrouploading]]),(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(q,{style:{height:"auto","align-items":"flex-start"}},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l._)("div",n,[(0,l._)("div",o,[r,(0,l.Wm)(v,{class:"query_input",modelValue:D.queryInfo.paramData.account,"onUpdate:modelValue":a[1]||(a[1]=e=>D.queryInfo.paramData.account=e)},null,8,["modelValue"])]),(0,l._)("div",u,[d,(0,l.Wm)(v,{class:"query_input",modelValue:D.queryInfo.paramData.name,"onUpdate:modelValue":a[2]||(a[2]=e=>D.queryInfo.paramData.name=e)},null,8,["modelValue"])]),(0,l._)("div",p,[c,(0,l.Wm)(v,{class:"query_input",modelValue:D.queryInfo.paramData.phone,"onUpdate:modelValue":a[3]||(a[3]=e=>D.queryInfo.paramData.phone=e)},null,8,["modelValue"])]),(0,l._)("div",h,[g,(0,l.Wm)(U,{modelValue:D.queryInfo.paramData.disable,"onUpdate:modelValue":a[4]||(a[4]=e=>D.queryInfo.paramData.disable=e),onChange:k.changeData},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{label:""},{default:(0,l.w5)((()=>[(0,l.Uk)("全部")])),_:1}),(0,l.Wm)(x,{label:!1},{default:(0,l.w5)((()=>[(0,l.Uk)("启用")])),_:1}),(0,l.Wm)(x,{label:!0},{default:(0,l.w5)((()=>[(0,l.Uk)("禁用")])),_:1})])),_:1},8,["modelValue","onChange"])])])]),(0,l._)("div",m,[(0,l._)("div",f,[(0,l.Wm)(V,{type:"default",onClick:a[5]||(a[5]=e=>k.upsearch(!0))},{default:(0,l.w5)((()=>[(0,l.Uk)("重置")])),_:1}),(0,l.Wm)(V,{type:"primary",onClick:a[6]||(a[6]=e=>k.upsearch(!1))},{default:(0,l.w5)((()=>[(0,l.Uk)("查询")])),_:1})])])])),_:1}),(0,l.wy)(((0,l.wg)(),(0,l.j4)(q,{style:{height:"auto"}},{default:(0,l.w5)((()=>[(0,l._)("div",w,[(0,l.Wm)(V,{type:"primary",onClick:k.add,icon:"el-icon-plus"},{default:(0,l.w5)((()=>[(0,l.Uk)(" 新建账号 ")])),_:1},8,["onClick"])]),(0,l._)("div",y,[(0,l.wy)(((0,l.wg)(),(0,l.j4)(z,{type:"success",center:"",closable:!1},{title:(0,l.w5)((()=>[(0,l.Uk)(" 点击复制账号初始密码 ")])),_:1})),[[E,D.originPassword]])])])),_:1})),[[H,["1","2"]]]),(0,l.Wm)($,{class:"nopadding"},{default:(0,l.w5)((()=>[(0,l.Wm)(F,{ref:"table",data:D.tableData,staticTotal:D.total,onSelectionChange:k.selectionChange,onPaginationChange:k.paginationChange,onPageSizeChange:k.pageSizeChange,stripe:"",hideRefresh:"",onRefresh:k.getDataList},{default:(0,l.w5)((()=>[(0,l.Wm)(P,{label:"ID",prop:"id",width:"170"}),(0,l.Wm)(P,{label:"登录账号",prop:"account",width:"150","column-key":"filterUserName"}),(0,l.Wm)(P,{label:"姓名",prop:"name",width:"150"}),(0,l.Wm)(P,{label:"所属组织",prop:"organizationName",width:"150"},{default:(0,l.w5)((e=>[(0,l.Wm)(S,{placement:"right",width:"250",trigger:"click"},{reference:(0,l.w5)((()=>[(0,l._)("div",_,(0,i.zw)(e.row.organizationName),1)])),default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(k.familyTree(D.group,e.row.organizationId),((e,a)=>((0,l.wg)(),(0,l.j4)(L,{type:"primary","hide-timestamp":"",placement:"top",key:a},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(e.name),1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1024)])),_:1}),(0,l.Wm)(P,{label:"角色",prop:"roleName",width:"150"}),(0,l.Wm)(P,{label:"状态",prop:"disable",width:"100"},{default:(0,l.w5)((e=>[(0,l.Wm)(j,{modelValue:e.row.disable,"onUpdate:modelValue":a=>e.row.disable=a,"active-value":!1,"inactive-value":!0,"inline-prompt":"","active-text":"启用","inactive-text":"禁用",onChange:a=>k.disableUser(a,e.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),(0,l.Wm)(P,{label:"创建人账号",prop:"createUserAccount",width:"170"}),(0,l.Wm)(P,{label:"创建时间",prop:"createTime",width:"170"}),(0,l.Wm)(P,{label:"操作",fixed:"right",align:"right",width:"190"},{default:(0,l.w5)((e=>[(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(V,{text:"",type:"primary",size:"small",onClick:a=>k.password_show(e.row,e.$index)},{default:(0,l.w5)((()=>[(0,l.Uk)("重置密码")])),_:2},1032,["onClick"])),[[H,["1","2"]]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(V,{text:"",type:"primary",size:"small",onClick:a=>k.table_edit(e.row,e.$index)},{default:(0,l.w5)((()=>[(0,l.Uk)("修改")])),_:2},1032,["onClick"])),[[H,["1","2"]]]),(0,l.Wm)(G,{title:"确定删除吗？",onConfirm:a=>k.table_del(e.row,e.$index)},{reference:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(V,{text:"",type:"primary",size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:1})),[[H,["1","2"]]])])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["data","staticTotal","onSelectionChange","onPaginationChange","onPageSizeChange","onRefresh"])])),_:1})])),_:1})])),_:1}),D.dialog.save?((0,l.wg)(),(0,l.j4)(A,{key:0,ref:"saveDialog",onSuccess:k.handleSuccess,onClosed:a[7]||(a[7]=e=>D.dialog.save=!1)},null,8,["onSuccess"])):(0,l.kq)("",!0),D.dialog.psd?((0,l.wg)(),(0,l.j4)(Q,{key:1,ref:"psdDialog",onSuccess:k.savePassword,onClosed:a[8]||(a[8]=e=>D.dialog.psd=!1)},null,8,["onSuccess"])):(0,l.kq)("",!0)],64)}t(541);var D=t(5827),k=t(9129),v={name:"user",components:{saveDialog:D["default"],psdDialog:k["default"]},data(){return{dialog:{save:!1,psd:!1},showGrouploading:!1,groupFilterText:"",group:[],tableData:[],total:0,selection:[],search:{name:null},treeProps:{label:"name",children:"subset"},originPassword:"!Wenjuan123!@#",epxandDefault:[],current:"",queryInfo:{current:1,paramData:{account:"",disable:"",name:"",organizationId:0,phone:""},size:10}}},watch:{groupFilterText(e){this.$refs.group.filter(e)}},mounted(){this.getGroup()},methods:{familyTree(e,a,t="parentId",l="subset"){var i=[],s=function(a,n){for(var o=0;o<a.length;o++){var r=a[o];if(r.id===n){i.unshift(r),s(e,r[t]);break}r[l]&&s(r[l],n)}};return s(e,a),i},savePassword(){},changeData(e){this.queryInfo.paramData.disable=e},add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},password_show(e){this.dialog.psd=!0,this.$nextTick((()=>{this.$refs.psdDialog.open().setData(e)}))},async table_del(e){this.$confirm("是否删除当前帐号？删除后将无法撤销！如删除客户经理，其对应的店铺信息客户经理将会为空；如删除调查员，其将退出正在参与的计划；","删除提示",{type:"warning"}).then((async()=>{let a=await this.$API.user.DeleteUser.delete(e.id);200==a.code?(this.getDataList(),this.$message.success("删除成功")):this.$alert(a.message,"提示",{type:"error"})})).catch((()=>{}))},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((a,t)=>{e.id===a.id&&this.$refs.table.tableData.splice(t,1)}))})),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},selectionChange(e){this.selection=e},async getGroup(){this.showGrouploading=!0;let e=await this.$API.user.GetOrgList.get();this.showGrouploading=!1,this.group=[e.data],this.epxandDefault=[this.current],this.queryInfo.paramData.organizationId=this.current,this.getDataList()},groupFilterNode(e,a){return!e||-1!==a.name.indexOf(e)},groupClick(e){this.queryInfo.paramData.organizationId=e.id,this.getDataList()},async disableUser(e,a){this.$confirm(`确定${e?"禁用":"启用"}${a.name}吗？`,"提示",{type:"warning"}).then((async()=>{const t=this.$loading();let l=await this.$API.user.DisableUser.put(a.id,{disable:e});200===l.code?(this.$message.success("操作成功"),this.getDataList()):this.$message.error(l.message),t.close()})).catch((()=>{this.$message.info("用户取消禁用"),a.disable=!e}))},paginationChange(e){this.queryInfo.current=e,this.getDataList()},pageSizeChange(e){this.queryInfo.size=e,this.getDataList()},async getDataList(){this.$refs.table.loading=!0;let e=await this.$API.user.GetUserList.post(this.queryInfo);200===e.code?(this.tableData=e.data.list,this.total=e.data.total,this.$refs.table.loading=!1):this.$refs.table.loading=!1},upsearch(e){e&&(this.queryInfo.paramData.account="",this.queryInfo.paramData.disable="",this.queryInfo.paramData.name="",this.queryInfo.paramData.phone=""),this.queryInfo.current=1,this.$refs.table.currentPage=1,this.getDataList()},handleSuccess(e,a){"add"===a?(this.queryInfo.current=1,this.$refs.table.currentPage=1,this.getDataList()):"edit"==a&&this.getDataList()}}},q=t(3744);const W=(0,q.Z)(v,[["render",b]]);var $=W}}]);