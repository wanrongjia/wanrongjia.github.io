"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[3775],{1809:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var i=a(6252),l=a(3577);const r=e=>((0,i.dD)("data-v-7946b59c"),e=e(),(0,i.Cn)(),e),n={class:"left-panel"},o=r((()=>(0,i._)("div",{class:"title"},"组织节点：",-1))),s={class:"breadcrumb_name"},d={class:"right-panel"};function u(e,t,a,r,u,c){const h=(0,i.up)("el-input"),g=(0,i.up)("el-header"),p=(0,i.up)("el-tree"),f=(0,i.up)("el-main"),m=(0,i.up)("el-container"),w=(0,i.up)("el-aside"),k=(0,i.up)("el-breadcrumb-item"),b=(0,i.up)("el-breadcrumb"),y=(0,i.up)("el-button"),C=(0,i.up)("el-table-column"),_=(0,i.up)("el-button-group"),v=(0,i.up)("scTable"),D=(0,i.up)("save-dialog"),x=(0,i.Q2)("loading"),I=(0,i.Q2)("role");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.j4)(w,{width:"200px"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(g,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{placeholder:"输入关键字进行过滤",modelValue:u.groupFilterText,"onUpdate:modelValue":t[0]||(t[0]=e=>u.groupFilterText=e),clearable:""},null,8,["modelValue"])])),_:1}),(0,i.Wm)(f,{class:"nopadding"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{ref:"group",class:"menu","node-key":"id",data:u.group,props:u.treeProps,"current-node-key":u.current,"highlight-current":!0,"expand-on-click-node":!1,"filter-node-method":c.groupFilterNode,"default-expanded-keys":u.epxandDefault,onNodeClick:c.groupClick},null,8,["data","props","current-node-key","filter-node-method","default-expanded-keys","onNodeClick"])])),_:1})])),_:1})])),_:1})),[[x,u.showGrouploading]]),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[u.breadcrumb.length?((0,i.wg)(),(0,i.j4)(g,{key:0},{default:(0,i.w5)((()=>[(0,i._)("div",n,[o,(0,i.Wm)(b,{"separator-class":"el-icon-arrow-right"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(u.breadcrumb,((e,t)=>((0,i.wg)(),(0,i.j4)(k,{key:t,onClick:t=>c.groupClick(e)},{default:(0,i.w5)((()=>[(0,i._)("div",s,(0,l.zw)(e.name),1)])),_:2},1032,["onClick"])))),128))])),_:1})]),(0,i._)("div",d,[(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{type:"primary",icon:"el-icon-plus",onClick:c.add},{default:(0,i.w5)((()=>[(0,i.Uk)("新建组织")])),_:1},8,["onClick"])),[[I,["1","2"]]])])])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(f,{class:"nopadding"},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{ref:"table",data:u.tableData,staticTotal:u.total,"row-key":"id",hideRefresh:"",onSelectionChange:c.selectionChange,onPaginationChange:c.paginationChange,onPageSizeChange:c.pageSizeChange},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{label:"部门名称",prop:"name","min-width":"400"}),(0,i.Wm)(C,{label:"最后编辑时间",prop:"updateTime","min-width":"180"}),(0,i.Wm)(C,{label:"最后操作账号",prop:"updateUserAccount","min-width":"180"}),(0,i.Wm)(C,{label:"操作",fixed:"right",align:"right","min-width":"270"},{default:(0,i.w5)((e=>[(0,i.Wm)(_,null,{default:(0,i.w5)((()=>[e.row.level<=3?(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{key:0,text:"",type:"primary",size:"small",onClick:t=>c.add_children(e.row,e.$index)},{default:(0,i.w5)((()=>[(0,i.Uk)("添加子节点")])),_:2},1032,["onClick"])),[[I,["1","2"]]]):(0,i.kq)("",!0),e.row.level<=3?(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{key:1,text:"",type:"primary",size:"small",onClick:t=>c.groupClick(e.row)},{default:(0,i.w5)((()=>[(0,i.Uk)("查看下级")])),_:2},1032,["onClick"])),[[I,["1","2"]]]):(0,i.kq)("",!0),(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{text:"",type:"primary",size:"small",onClick:t=>c.table_edit(e.row,e.$index)},{default:(0,i.w5)((()=>[(0,i.Uk)("修改")])),_:2},1032,["onClick"])),[[I,["1","2"]]]),e.row.level>2&&e.row.allowDelete?(0,i.wy)(((0,i.wg)(),(0,i.j4)(y,{key:2,text:"",type:"primary",onClick:t=>c.table_del(e.row,e.$index),size:"small"},{default:(0,i.w5)((()=>[(0,i.Uk)("删除")])),_:2},1032,["onClick"])),[[I,["1","2"]]]):(0,i.kq)("",!0)])),_:2},1024)])),_:1})])),_:1},8,["data","staticTotal","onSelectionChange","onPaginationChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1}),u.dialog.save?((0,i.wg)(),(0,i.j4)(D,{key:0,ref:"saveDialog",groups:u.group,onSuccess:c.handleSaveSuccess,onClosed:t[1]||(t[1]=e=>u.dialog.save=!1)},null,8,["groups","onSuccess"])):(0,i.kq)("",!0)],64)}a(541),a(7658);var c=a(9551),h=a(9123),g={name:"dept",components:{saveDialog:c["default"]},computed:{user:()=>h.Z.state.user.USER_INFO},data(){return{dialog:{save:!1},tableData:[],total:0,selection:[],search:{keyword:null},showGrouploading:!1,groupFilterText:"",group:[],treeProps:{label:"name",children:"subset"},current:"0",epxandDefault:[],queryInfo:{current:1,paramData:{organizationId:"0"},size:10},breadcrumb:[]}},watch:{groupFilterText(e){this.$refs.group.filter(e)}},mounted(){this.getGroup(!0)},methods:{paginationChange(e){this.queryInfo.current=e,this.getDataList()},pageSizeChange(e){this.queryInfo.size=e,this.getDataList()},groupFilterNode(e,t){return!e||-1!==t.name.indexOf(e)},groupClick(e){this.current=e.id,this.queryInfo.paramData.organizationId=e.id,this.breadcrumb=this.familyTree(this.group,e.id),this.getDataList()},familyTree(e,t,a="parentId",i="subset"){var l=[],r=function(t,n){for(var o=0;o<t.length;o++){var s=t[o];if(s.id===n){l.unshift(s),r(e,s[a]);break}s[i]&&r(s[i],n)}};return r(e,t),l},async getGroup(e){this.showGrouploading=!0;let t=await this.$API.user.GetOrgList.get();this.showGrouploading=!1,200===t.code&&t.data&&(this.group=t.data?[t.data]:[],e?(this.epxandDefault.push(this.user.organizationId),this.current=this.user.organizationId,this.queryInfo.paramData.organizationId=this.user.organizationId,this.breadcrumb=this.familyTree(this.group,this.user.organizationId)):(this.epxandDefault=[this.current],this.queryInfo.paramData.organizationId=this.current,this.breadcrumb=this.familyTree(this.group,this.current)),this.getDataList())},async getDataList(){this.$refs.table.loading=!0;let e=await this.$API.org.GetOrgList.post(this.queryInfo);200===e.code?(this.tableData=e.data.list,this.total=e.data.total,this.$refs.table.loading=!1):this.$refs.table.loading=!1},add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("add")}))},add_children(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("children").setData({parentId:e.id,level:e.level+1})}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},table_del(e){this.$confirm("是否删除当前组织节点？删除后将无法撤回！删除组织节点后，其关联账号、下级节点、下级节点账号将会同步删除！","删除提示",{type:"warning"}).then((async()=>{let t=await this.$API.org.DeleteOrg.delete(e.id);200==t.code?(this.getGroup(),this.$message.success("删除成功")):this.$alert(t.message,"提示",{type:"error"})})).catch((()=>{}))},async batch_del(){},selectionChange(e){this.selection=e},upsearch(){},filterTree(e){var t=null;function a(i){i.forEach((i=>{i.id==e&&(t=i),i.children&&a(i.children)}))}return a(this.$refs.table.tableData),t},handleSaveSuccess(e,t){this.getGroup(),"add"==t||"edit"==t?this.getDataList():"children"==t&&(this.current=e.parentId,this.getDataList())}}},p=a(3744);const f=(0,p.Z)(g,[["render",u],["__scopeId","data-v-7946b59c"]]);var m=f}}]);