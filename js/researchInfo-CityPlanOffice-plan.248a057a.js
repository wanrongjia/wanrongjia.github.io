"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[7167],{9296:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var l=t(6252),s=t(3577);const i=e=>((0,l.dD)("data-v-bf890a70"),e=e(),(0,l.Cn)(),e),r={class:"left-panel"},n={class:"query"},o={class:"query_item"},u=i((()=>(0,l._)("div",{class:"query_label"},"计划名称：",-1))),c={class:"right-panel"},d={class:"right-panel-search",style:{margin:"5px 0"}},h={class:"left-panel"},p=i((()=>(0,l._)("div",{class:"right-panel"},null,-1)));function g(e,a,t,i,g,f){const m=(0,l.up)("el-input"),w=(0,l.up)("el-button"),y=(0,l.up)("el-header"),b=(0,l.up)("el-table-column"),v=(0,l.up)("el-button-group"),_=(0,l.up)("scTable"),k=(0,l.up)("el-main"),C=(0,l.up)("el-container"),L=(0,l.up)("save-dialog"),D=(0,l.Q2)("role");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(C,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y,{class:"searchSpan"},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l._)("div",n,[(0,l._)("div",o,[u,(0,l.Wm)(m,{class:"query_input",placeholder:"请输入计划名称",modelValue:g.queryInfo.paramData.name,"onUpdate:modelValue":a[0]||(a[0]=e=>g.queryInfo.paramData.name=e),clearable:""},null,8,["modelValue"])])])]),(0,l._)("div",c,[(0,l._)("div",d,[(0,l.Wm)(w,{type:"default",onClick:a[1]||(a[1]=e=>f.upsearch(!0))},{default:(0,l.w5)((()=>[(0,l.Uk)("重置")])),_:1}),(0,l.Wm)(w,{type:"primary",onClick:a[2]||(a[2]=e=>f.upsearch(!1))},{default:(0,l.w5)((()=>[(0,l.Uk)("查询")])),_:1})])])])),_:1}),(0,l.wy)(((0,l.wg)(),(0,l.j4)(y,{style:{height:"auto"}},{default:(0,l.w5)((()=>[(0,l._)("div",h,[(0,l.Wm)(w,{type:"primary",size:"default",onClick:f.add},{default:(0,l.w5)((()=>[(0,l.Uk)("新建计划")])),_:1},8,["onClick"])]),p])),_:1})),[[D,["1","2"]]]),(0,l.Wm)(k,{class:"nopadding"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{ref:"table",data:g.tableData,staticTotal:g.total,"row-key":"id",hideRefresh:"",onSelectionChange:f.selectionChange,onPaginationChange:f.paginationChange,onPageSizeChange:f.pageSizeChange},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{label:"计划名称",prop:"name","min-width":"400"}),(0,l.Wm)(b,{label:"所属部门",prop:"deptType","min-width":"150",align:"center"},{default:(0,l.w5)((e=>[(0,l.Uk)((0,s.zw)(f.filterType(e.row.deptType,g.deptList)),1)])),_:1}),(0,l.Wm)(b,{label:"调研对象",prop:"researchObjectType","min-width":"150",align:"center"},{default:(0,l.w5)((e=>[(0,l.Uk)((0,s.zw)(f.filterType(e.row.researchObjectType,g.researchObjectList)),1)])),_:1}),(0,l.Wm)(b,{label:"周期",prop:"researchPeriodType","min-width":"150",align:"center"},{default:(0,l.w5)((e=>[(0,l.Uk)((0,s.zw)(f.filterType(e.row.researchPeriodType,g.researchPeriodList)),1)])),_:1}),(0,l.Wm)(b,{label:"状态",prop:"status","min-width":"100",align:"center"},{default:(0,l.w5)((e=>[(0,l._)("div",{style:(0,s.j5)(f.statusStyle(e.row.status))},(0,s.zw)(f.filterType(e.row.status,g.statusList)),5)])),_:1}),(0,l.wy)(((0,l.wg)(),(0,l.j4)(b,{label:"操作",fixed:"right",align:"right","min-width":"150"},{default:(0,l.w5)((e=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(w,{text:"",type:"primary",size:"small",onClick:a=>f.show_detail(e.row)},{default:(0,l.w5)((()=>[(0,l.Uk)("查看详情")])),_:2},1032,["onClick"])),[[D,["1","2","4","10"]]]),[4,5].includes(e.row.status)?(0,l.kq)("",!0):(0,l.wy)(((0,l.wg)(),(0,l.j4)(w,{key:0,text:"",type:"primary",onClick:a=>f.table_del(e.row,e.$index),size:"small"},{default:(0,l.w5)((()=>[(0,l.Uk)("删除")])),_:2},1032,["onClick"])),[[D,["1","2"]]])])),_:2},1024)])),_:1})),[[D,["1","2","4","7","8","9","10"]]])])),_:1},8,["data","staticTotal","onSelectionChange","onPaginationChange","onPageSizeChange"])])),_:1})])),_:1})])),_:1}),g.dialog.save?((0,l.wg)(),(0,l.j4)(L,{key:0,ref:"saveDialog",onSuccess:f.handleSaveSuccess,deptList:g.deptList,researchObjectList:g.researchObjectList,researchPeriodList:g.researchPeriodList,onClosed:a[3]||(a[3]=e=>g.dialog.save=!1)},null,8,["onSuccess","deptList","researchObjectList","researchPeriodList"])):(0,l.kq)("",!0)],64)}t(7658);var f=t(1002),m=t(9123),w={name:"plan",components:{saveDialog:f["default"]},computed:{user:()=>m.Z.state.user.USER_INFO},data(){return{open:!1,dialog:{save:!1},tableData:[],total:0,selection:[],queryInfo:{current:1,paramData:{name:"",statusList:[]},size:10},deptList:[{label:"营销",value:3}],researchObjectList:[{label:"店铺",value:2}],researchPeriodList:[{label:"月度",value:1},{label:"季度",value:2},{label:"半年",value:3},{label:"年度",value:4}],statusList:[{label:"待开始",value:1},{label:"调研进行中",value:2},{label:"待开启申诉",value:3},{label:"申诉已开启",value:4},{label:"结果待公布",value:5},{label:"结果公布",value:6}]}},mounted(){["7","8","9"].includes(this.user.role)?this.queryInfo.paramData.statusList=[4,5,6]:this.queryInfo.paramData.statusList=[],this.getDataList(!0)},methods:{filterType(e,a){return a.find((a=>a.value===e))?.label||"-"},statusStyle(e){let a="user-select: none;";switch(e){case 1:a+="color: #FF9F2E;";break;case 2:a+="color: #22CE29;";break;case 3:a+="color: #1D95F6;";break;case 4:a+="color: #23994A;text-decoration: underline;cursor: pointer;";break;case 5:a+="color: #FF7878;text-decoration: underline;cursor: pointer;";break;case 6:a+="color: #C8C8C8;";break}return a},async getDataList(){this.$refs.table.loading=!0;let e=await this.$API.researchInfo.ResearchCompany.GetPlanList.post(this.queryInfo);200===e.code?(this.tableData=e.data.list,this.total=e.data.total,this.$refs.table.loading=!1):this.$refs.table.loading=!1},add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},show_detail(e){this.$router.push({path:"/researchInfo/plan/detail",query:{id:e.id}})},table_del(e){this.$confirm("是否删除当前计划，删除后该计划下回收的问卷/打分表信息将会删除。","删除提示",{type:"warning"}).then((async()=>{let a=await this.$API.researchInfo.ResearchCompany.DeletePlan.delete(e.id);200==a.code?(this.getDataList(),this.$message.success("删除成功")):this.$alert(a.message,"提示",{type:"error"})})).catch((()=>{}))},selectionChange(e){this.selection=e},paginationChange(e){this.queryInfo.current=e,this.getDataList()},pageSizeChange(e){this.queryInfo.size=e,this.getDataList()},upsearch(e){e&&(this.queryInfo.paramData.name=""),this.queryInfo.current=1,this.$refs.table.currentPage=1,this.getDataList()},handleSaveSuccess(e,a){("add"==a||"edit"==a||"import"==a)&&this.getDataList()}}},y=t(3744);const b=(0,y.Z)(w,[["render",g],["__scopeId","data-v-bf890a70"]]);var v=b}}]);