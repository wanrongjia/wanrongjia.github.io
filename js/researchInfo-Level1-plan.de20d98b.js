"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[8624,4325],{9349:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var l=t(6252),s=t(3577);const r=e=>((0,l.dD)("data-v-51311dca"),e=e(),(0,l.Cn)(),e),i={class:"left-panel"},n={class:"query"},o={class:"query_item"},c=r((()=>(0,l._)("div",{class:"query_label"},"计划名称：",-1))),u={class:"right-panel"},d={class:"right-panel-search",style:{margin:"5px 0"}},p={class:"left-panel"},h=r((()=>(0,l._)("div",{class:"right-panel"},null,-1)));function f(e,a,t,r,f,m){const w=(0,l.up)("el-input"),b=(0,l.up)("el-button"),y=(0,l.up)("el-header"),g=(0,l.up)("el-table-column"),v=(0,l.up)("el-popconfirm"),_=(0,l.up)("el-button-group"),k=(0,l.up)("scTable"),L=(0,l.up)("el-main"),C=(0,l.up)("el-container"),D=(0,l.up)("save-dialog"),W=(0,l.Q2)("role");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y,{class:"searchSpan"},{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l._)("div",n,[(0,l._)("div",o,[c,(0,l.Wm)(w,{class:"query_input",placeholder:"请输入计划名称",modelValue:f.queryInfo.paramData.name,"onUpdate:modelValue":a[0]||(a[0]=e=>f.queryInfo.paramData.name=e),clearable:""},null,8,["modelValue"])])])]),(0,l._)("div",u,[(0,l._)("div",d,[(0,l.Wm)(b,{type:"default",onClick:a[1]||(a[1]=e=>m.upsearch(!0))},{default:(0,l.w5)((()=>[(0,l.Uk)("重置")])),_:1}),(0,l.Wm)(b,{type:"primary",onClick:a[2]||(a[2]=e=>m.upsearch(!1))},{default:(0,l.w5)((()=>[(0,l.Uk)("查询")])),_:1})])])])),_:1}),(0,l.wy)(((0,l.wg)(),(0,l.j4)(y,{style:{height:"auto"}},{default:(0,l.w5)((()=>[(0,l._)("div",p,[(0,l.Wm)(b,{type:"primary",size:"default",onClick:m.add},{default:(0,l.w5)((()=>[(0,l.Uk)("新建计划")])),_:1},8,["onClick"])]),h])),_:1})),[[W,["1","2"]]]),(0,l.Wm)(L,{class:"nopadding"},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{ref:"table",data:f.tableData,staticTotal:f.total,"row-key":"id",hideRefresh:"",onSelectionChange:m.selectionChange},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{label:"计划名称",prop:"name","min-width":"400"}),(0,l.Wm)(g,{label:"所属部门",prop:"deptType","min-width":"150",align:"center"},{default:(0,l.w5)((e=>[(0,l.Uk)((0,s.zw)(m.filterType(e.row.deptType,f.deptList)),1)])),_:1}),(0,l.Wm)(g,{label:"调研对象",prop:"researchObjectType","min-width":"150",align:"center"},{default:(0,l.w5)((e=>[(0,l.Uk)((0,s.zw)(m.filterType(e.row.researchObjectType,f.researchObjectList)),1)])),_:1}),(0,l.Wm)(g,{label:"周期",prop:"researchPeriodType","min-width":"150",align:"center"},{default:(0,l.w5)((e=>[(0,l.Uk)((0,s.zw)(m.filterType(e.row.researchPeriodType,f.researchPeriodList)),1)])),_:1}),(0,l.Wm)(g,{label:"状态",prop:"status","min-width":"100",align:"center"},{default:(0,l.w5)((e=>[(0,l._)("div",{style:(0,s.j5)(m.statusStyle(e.row.status))},(0,s.zw)(m.filterType(e.row.status,f.statusList)),5)])),_:1}),(0,l.wy)(((0,l.wg)(),(0,l.j4)(g,{label:"操作",fixed:"right",align:"right","min-width":"150"},{default:(0,l.w5)((e=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(b,{text:"",type:"primary",size:"small",onClick:a=>m.show_detail(e.row)},{default:(0,l.w5)((()=>[(0,l.Uk)("查看详情")])),_:2},1032,["onClick"])),[[W,["1","2","4","10"]]]),(0,l.Wm)(v,{title:"确定删除吗？",onConfirm:a=>m.table_del(e.row,e.$index)},{reference:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(b,{text:"",type:"primary",size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:1})),[[W,["1","2"]]])])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})),[[W,["1","2","4","7","8","9","10"]]])])),_:1},8,["data","staticTotal","onSelectionChange"])])),_:1})])),_:1})])),_:1}),f.dialog.save?((0,l.wg)(),(0,l.j4)(D,{key:0,ref:"saveDialog",onSuccess:m.handleSaveSuccess,deptList:f.deptList,researchObjectList:f.researchObjectList,researchPeriodList:f.researchPeriodList,onClosed:a[3]||(a[3]=e=>f.dialog.save=!1)},null,8,["onSuccess","deptList","researchObjectList","researchPeriodList"])):(0,l.kq)("",!0)],64)}t(7658);var m=t(6816),w=t(4239),b={name:"plan",components:{saveDialog:m["default"]},computed:{user:()=>w.Z.state.user.USER_INFO},data(){return{open:!1,dialog:{save:!1},tableData:[],total:0,selection:[],queryInfo:{current:1,paramData:{name:""},size:10},deptList:[{label:"专卖",value:1},{label:"物流",value:2},{label:"营销",value:3}],researchObjectList:[{label:"消费者",value:1},{label:"店铺",value:2}],researchPeriodList:[{label:"月度",value:1},{label:"季度",value:2},{label:"半年",value:3},{label:"年度",value:4}],statusList:[{label:"待开始",value:1},{label:"已开始",value:2},{label:"待开启申诉",value:3},{label:"申诉已开启",value:4},{label:"结果待公布",value:5},{label:"结果公布",value:6}]}},mounted(){this.getDataList(!0)},methods:{filterType(e,a){return a.find((a=>a.value===e))?.label||"-"},statusStyle(e){let a="user-select: none;";switch(e){case 1:a+="color: #FF9F2E;";break;case 2:a+="color: #22CE29;";break;case 3:a+="color: #1D95F6;";break;case 4:a+="color: #23994A;text-decoration: underline;cursor: pointer;";break;case 5:a+="color: #FF7878;text-decoration: underline;cursor: pointer;";break;case 6:a+="color: #C8C8C8;";break}return a},async getDataList(){this.$refs.table.loading=!0;let e=await this.$API.researchInfo.GetPlanList.post(this.queryInfo);200===e.code?(this.tableData=e.data.list,this.total=e.data.total,this.$refs.table.loading=!1):this.$refs.table.loading=!1},add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},show_detail(e){this.$router.push({path:"/researchInfo/plan/detail",query:{id:e.id}})},table_del(e){this.$confirm("是否删除当前计划，删除后该计划下回收的问卷/打分表信息将会删除。","删除提示",{type:"warning"}).then((async()=>{let a=await this.$API.researchInfo.DeletePlan.delete(e.id);200==a.code?(this.getDataList(),this.$message.success("删除成功")):this.$alert(a.message,"提示",{type:"error"})})).catch((()=>{}))},selectionChange(e){this.selection=e},upsearch(e){e&&(this.queryInfo.paramData={name:""}),this.queryInfo.current=1,this.$refs.table.currentPage=1,this.getDataList()},handleSaveSuccess(e,a){("add"==a||"edit"==a||"import"==a)&&this.getDataList()}}},y=t(3744);const g=(0,y.Z)(b,[["render",f],["__scopeId","data-v-51311dca"]]);var v=g}}]);