"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[3775],{39922:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var i=a(66252),r=a(3577);const l=e=>((0,i.dD)("data-v-90be02ae"),e=e(),(0,i.Cn)(),e),s={class:"left-panel"},n=l((()=>(0,i._)("div",{class:"title"},"组织节点：",-1))),o={class:"breadcrumb_name"},d={class:"right-panel"};function u(e,t,a,l,u,c){const p=(0,i.up)("el-input"),h=(0,i.up)("el-header"),g=(0,i.up)("el-tree"),f=(0,i.up)("el-main"),m=(0,i.up)("el-container"),w=(0,i.up)("el-aside"),b=(0,i.up)("el-breadcrumb-item"),k=(0,i.up)("el-breadcrumb"),y=(0,i.up)("el-button"),_=(0,i.up)("el-table-column"),v=(0,i.up)("el-popconfirm"),D=(0,i.up)("el-button-group"),C=(0,i.up)("scTable"),x=(0,i.up)("save-dialog"),I=(0,i.Q2)("loading"),$=(0,i.Q2)("role");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.j4)(w,{width:"200px"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,null,{default:(0,i.w5)((()=>[(0,i.Wm)(p,{placeholder:"输入关键字进行过滤",modelValue:u.groupFilterText,"onUpdate:modelValue":t[0]||(t[0]=e=>u.groupFilterText=e),clearable:""},null,8,["modelValue"])])),_:1}),(0,i.Wm)(f,{class:"nopadding"},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{ref:"group",class:"menu","node-key":"id",data:u.group,props:u.treeProps,"current-node-key":u.current,"highlight-current":!0,"expand-on-click-node":!1,"filter-node-method":c.groupFilterNode,"default-expanded-keys":u.epxandDefault,onNodeClick:c.groupClick},null,8,["data","props","current-node-key","filter-node-method","default-expanded-keys","onNodeClick"])])),_:1})])),_:1})])),_:1})),[[I,u.showGrouploading]]),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[u.breadcrumb.length?((0,i.wg)(),(0,i.j4)(h,{key:0},{default:(0,i.w5)((()=>[(0,i._)("div",s,[n,(0,i.Wm)(k,{"separator-class":"el-icon-arrow-right"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.breadcrumb,((e,t)=>((0,i.wg)(),(0,i.j4)(b,{key:t,onClick:t=>c.groupClick(e)},{default:(0,i.w5)((()=>[(0,i._)("div",o,(0,r.zw)(e.name),1)])),_:2},1032,["onClick"])))),128))])),_:1})]),(0,i._)("div",d,[(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{type:"primary",icon:"el-icon-plus",onClick:c.add},{default:(0,i.w5)((()=>[(0,i.Uk)("新建组织")])),_:1},8,["onClick"])),[[$,["1","2"]]])])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(f,{class:"nopadding"},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{ref:"table",data:u.tableData,staticTotal:u.total,"row-key":"id",hideRefresh:"",onSelectionChange:c.selectionChange},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{label:"部门名称",prop:"name",width:"400"}),(0,i.Wm)(_,{label:"最后编辑时间",prop:"updateTime",width:"180"}),(0,i.Wm)(_,{label:"最后操作账号",prop:"updateUserAccount",width:"180"}),(0,i.Wm)(_,{label:"操作",fixed:"right",align:"right",width:"270"},{default:(0,i.w5)((e=>[(0,i.Wm)(D,null,{default:(0,i.w5)((()=>[e.row.level<3?(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{key:0,text:"",type:"primary",size:"small",onClick:t=>c.add_children(e.row,e.$index)},{default:(0,i.w5)((()=>[(0,i.Uk)("添加子节点")])),_:2},1032,["onClick"])),[[$,["1","2"]]]):(0,i.kq)("",!0),e.row.level<3?(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{key:1,text:"",type:"primary",size:"small",onClick:t=>c.groupClick(e.row)},{default:(0,i.w5)((()=>[(0,i.Uk)("查看下级")])),_:2},1032,["onClick"])),[[$,["1","2"]]]):(0,i.kq)("",!0),(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{text:"",type:"primary",size:"small",onClick:t=>c.table_edit(e.row,e.$index)},{default:(0,i.w5)((()=>[(0,i.Uk)("修改")])),_:2},1032,["onClick"])),[[$,["1","2"]]]),(0,i.Wm)(v,{title:"确定删除吗？",onConfirm:t=>c.table_del(e.row,e.$index)},{reference:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{text:"",type:"primary",size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)("删除")])),_:1})),[[$,["1","2"]]])])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["data","staticTotal","onSelectionChange"])])),_:1})])),_:1})])),_:1}),u.dialog.save?((0,i.wg)(),(0,i.j4)(x,{key:0,ref:"saveDialog",groups:u.group,onSuccess:c.handleSaveSuccess,onClosed:t[1]||(t[1]=e=>u.dialog.save=!1)},null,8,["groups","onSuccess"])):(0,i.kq)("",!0)],64)}a(30541),a(57658);var c=a(66006),p=a(24239),h={name:"dept",components:{saveDialog:c["default"]},computed:{user:()=>p.Z.state.user.USER_INFO},data(){return{dialog:{save:!1},tableData:[],total:0,selection:[],search:{keyword:null},showGrouploading:!1,groupFilterText:"",group:[],treeProps:{label:"name",children:"subset"},current:"0",epxandDefault:[],queryInfo:{current:1,paramData:{organizationId:"0"},size:10},breadcrumb:[]}},watch:{groupFilterText(e){this.$refs.group.filter(e)}},mounted(){this.getGroup(!0)},methods:{groupFilterNode(e,t){return!e||-1!==t.name.indexOf(e)},groupClick(e){this.current=e.id,this.queryInfo.paramData.organizationId=e.id,this.breadcrumb=this.familyTree(this.group,e.id),this.getDataList()},familyTree(e,t,a="parentId",i="subset"){var r=[],l=function(t,s){for(var n=0;n<t.length;n++){var o=t[n];if(o.id===s){r.unshift(o),l(e,o[a]);break}o[i]&&l(o[i],s)}};return l(e,t),r},async getGroup(e){this.showGrouploading=!0;let t=await this.$API.user.GetOrgList.get();this.showGrouploading=!1,this.group=[t.data],e?(this.epxandDefault.push(this.user.organizationId),this.current=this.user.organizationId,this.queryInfo.paramData.organizationId=this.user.organizationId,this.breadcrumb=this.familyTree(this.group,this.user.organizationId)):(this.epxandDefault=[this.current],this.queryInfo.paramData.organizationId=this.current,this.breadcrumb=this.familyTree(this.group,this.current)),this.getDataList()},async getDataList(){this.$refs.table.loading=!0;let e=await this.$API.org.GetOrgList.post(this.queryInfo);200===e.code?(this.tableData=e.data.list,this.total=e.data.total,this.$refs.table.loading=!1):this.$refs.table.loading=!1},add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},add_children(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("children").setData({parentId:e.id})}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},table_del(e){this.$confirm("是否删除当前组织节点？删除后将无法撤回！删除组织节点后，其关联账号、下级节点、下级节点账号将会同步删除！","删除提示",{type:"warning"}).then((async()=>{let t=await this.$API.org.DeleteOrg.delete(e.id);200==t.code?(this.getGroup(),this.$message.success("删除成功")):this.$alert(t.message,"提示",{type:"error"})})).catch((()=>{}))},async batch_del(){},selectionChange(e){this.selection=e},upsearch(){},filterTree(e){var t=null;function a(i){i.forEach((i=>{i.id==e&&(t=i),i.children&&a(i.children)}))}return a(this.$refs.table.tableData),t},handleSaveSuccess(e,t){this.getGroup(),"add"==t||"edit"==t?this.getDataList():"children"==t&&(this.current=e.parentId,this.getDataList())}}},g=a(83744);const f=(0,g.Z)(h,[["render",u],["__scopeId","data-v-90be02ae"]]);var m=f}}]);