"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[936],{7840:function(e,l,i){i.r(l),i.d(l,{default:function(){return E}});var t=i(6252);function s(e,l,i,s,a,o){const r=(0,t.up)("el-alert"),u=(0,t.up)("el-button"),n=(0,t.up)("sc-file-select"),c=(0,t.up)("el-card"),d=(0,t.up)("el-col"),p=(0,t.up)("el-row"),m=(0,t.up)("el-main");return(0,t.wg)(),(0,t.j4)(m,null,{default:(0,t.w5)((()=>[(0,t.Wm)(p,{gutter:15},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{lg:18},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{shadow:"never"},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{title:"资源库选择器即将弃用,将不会维护更新,与1.7版本之后将移除此组件",type:"error",style:{"margin-bottom":"20px"}}),(0,t.Wm)(n,{modelValue:a.file,"onUpdate:modelValue":l[0]||(l[0]=e=>a.file=e),multiple:a.multiple,hideUpload:a.hideUpload,max:99,onSubmit:o.submit},{do:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Uk)("自定义插槽")])),_:1})])),_:1},8,["modelValue","multiple","hideUpload","onSubmit"])])),_:1})])),_:1}),(0,t.Wm)(d,{lg:6},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{shadow:"never",header:"参数和方法"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{type:"primary",onClick:l[1]||(l[1]=e=>a.multiple=!a.multiple)},{default:(0,t.w5)((()=>[(0,t.Uk)("切换multiple")])),_:1}),(0,t.Wm)(u,{type:"primary",onClick:l[2]||(l[2]=e=>a.hideUpload=!a.hideUpload)},{default:(0,t.w5)((()=>[(0,t.Uk)("切换hideUpload")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var a=i(3577),o=i(9963);const r=e=>((0,t.dD)("data-v-48ded1ad"),e=e(),(0,t.Cn)(),e),u={class:"sc-file-select"},n={class:"sc-file-select__side"},c={class:"sc-file-select__side-menu"},d={class:"el-tree-node__label"},p={key:0,class:"sc-file-select__side-msg"},m={class:"sc-file-select__files"},f={class:"sc-file-select__top"},g={key:0,class:"upload"},h={class:"tips"},_={class:"keyword"},w={class:"sc-file-select__list"},y={class:"sc-file-select__item__file"},k={class:"sc-file-select__item__upload"},v=["onClick"],b={class:"sc-file-select__item__file"},P={key:0,class:"sc-file-select__item__checkbox"},x={key:1,class:"sc-file-select__item__select"},C=r((()=>(0,t._)("div",{class:"sc-file-select__item__box"},null,-1))),W={key:3,class:"item-file item-file-doc"},D={key:1,class:"sc-icon-file-list-fill",style:{color:"#999"}},U=["title"],z={class:"sc-file-select__pagination"},S={class:"sc-file-select__do"};function I(e,l,i,s,r,I){const N=(0,t.up)("el-icon-folder"),L=(0,t.up)("el-icon"),j=(0,t.up)("el-tree"),O=(0,t.up)("el-button"),q=(0,t.up)("el-upload"),V=(0,t.up)("el-icon-warning"),$=(0,t.up)("el-input"),B=(0,t.up)("el-empty"),E=(0,t.up)("el-progress"),K=(0,t.up)("el-image"),A=(0,t.up)("el-icon-check"),F=(0,t.up)("el-scrollbar"),Z=(0,t.up)("el-pagination"),J=(0,t.Q2)("loading");return(0,t.wg)(),(0,t.iD)("div",u,[(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",c,[(0,t.Wm)(j,{ref:"group",class:"menu",data:r.menu,"node-key":r.treeProps.key,props:r.treeProps,"current-node-key":r.menu.length>0?r.menu[0][r.treeProps.key]:"","highlight-current":"",onNodeClick:I.groupClick},{default:(0,t.w5)((({node:e})=>[(0,t._)("span",d,[(0,t.Wm)(L,{class:"icon"},{default:(0,t.w5)((()=>[(0,t.Wm)(N)])),_:1}),(0,t.Uk)((0,a.zw)(e.label),1)])])),_:1},8,["data","node-key","props","current-node-key","onNodeClick"])]),i.multiple?((0,t.wg)(),(0,t.iD)("div",p,[(0,t.Uk)(" 已选择 "),(0,t._)("b",null,(0,a.zw)(r.value.length),1),(0,t.Uk)(" / "),(0,t._)("b",null,(0,a.zw)(i.max),1),(0,t.Uk)(" 项 ")])):(0,t.kq)("",!0)])),[[J,r.menuLoading]]),(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",m,[(0,t._)("div",f,[i.hideUpload?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",g,[(0,t.Wm)(q,{class:"sc-file-select__upload",action:"",multiple:"","show-file-list":!1,accept:r.accept,"on-change":I.uploadChange,"before-upload":I.uploadBefore,"on-progress":I.uploadProcess,"on-success":I.uploadSuccess,"on-error":I.uploadError,"http-request":I.uploadRequest},{default:(0,t.w5)((()=>[(0,t.Wm)(O,{type:"primary",icon:"el-icon-upload"},{default:(0,t.w5)((()=>[(0,t.Uk)("本地上传")])),_:1})])),_:1},8,["accept","on-change","before-upload","on-progress","on-success","on-error","http-request"]),(0,t._)("span",h,[(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(V)])),_:1}),(0,t.Uk)("大小不超过"+(0,a.zw)(i.maxSize)+"MB",1)])])),(0,t._)("div",_,[(0,t.Wm)($,{modelValue:r.keyword,"onUpdate:modelValue":l[0]||(l[0]=e=>r.keyword=e),"prefix-icon":"el-icon-search",placeholder:"文件名搜索",clearable:"",onKeyup:(0,o.D2)(I.search,["enter"]),onClear:I.search},null,8,["modelValue","onKeyup","onClear"])])]),(0,t._)("div",w,[(0,t.Wm)(F,{ref:"scrollbar"},{default:(0,t.w5)((()=>[0==r.fileList.length&&0==r.data.length?((0,t.wg)(),(0,t.j4)(B,{key:0,description:"无数据","image-size":80})):(0,t.kq)("",!0),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.fileList,((e,l)=>((0,t.wg)(),(0,t.iD)("div",{key:l,class:"sc-file-select__item"},[(0,t._)("div",y,[(0,t._)("div",k,[(0,t.Wm)(E,{type:"circle",percentage:e.progress,width:70},null,8,["percentage"])]),(0,t.Wm)(K,{src:e.tempImg,fit:"contain"},null,8,["src"])]),(0,t._)("p",null,(0,a.zw)(e.name),1)])))),128)),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(r.data,(e=>((0,t.wg)(),(0,t.iD)("div",{key:e[r.fileProps.key],class:(0,a.C_)(["sc-file-select__item",{active:r.value.includes(e[r.fileProps.url])}]),onClick:l=>I.select(e)},[(0,t._)("div",b,[i.multiple?((0,t.wg)(),(0,t.iD)("div",P,[(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(A)])),_:1})])):((0,t.wg)(),(0,t.iD)("div",x,[(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Wm)(A)])),_:1})])),C,I._isImg(e[r.fileProps.url])?((0,t.wg)(),(0,t.j4)(K,{key:2,src:e[r.fileProps.url],fit:"contain",lazy:""},null,8,["src"])):((0,t.wg)(),(0,t.iD)("div",W,[r.files[I._getExt(e[r.fileProps.url])]?((0,t.wg)(),(0,t.iD)("i",{key:0,class:(0,a.C_)(r.files[I._getExt(e[r.fileProps.url])].icon),style:(0,a.j5)({color:r.files[I._getExt(e[r.fileProps.url])].color})},null,6)):((0,t.wg)(),(0,t.iD)("i",D))]))]),(0,t._)("p",{title:e[r.fileProps.fileName]},(0,a.zw)(e[r.fileProps.fileName]),9,U)],10,v)))),128))])),_:1},512)]),(0,t._)("div",z,[(0,t.Wm)(Z,{small:"",background:"",layout:"prev, pager, next",total:r.total,"page-size":r.pageSize,currentPage:r.currentPage,"onUpdate:currentPage":l[1]||(l[1]=e=>r.currentPage=e),onCurrentChange:I.reload},null,8,["total","page-size","currentPage","onCurrentChange"])]),(0,t._)("div",S,[(0,t.WI)(e.$slots,"do",{},void 0,!0),(0,t.Wm)(O,{type:"primary",disabled:r.value.length<=0,onClick:I.submit},{default:(0,t.w5)((()=>[(0,t.Uk)("确 定")])),_:1},8,["disabled","onClick"])])])),[[J,r.listLoading]])])}i(7658),i(541);var N=i(7877),L={apiObj:N.Z.common.upload,menuApiObj:N.Z.common.file.menu,listApiObj:N.Z.common.file.list,successCode:200,maxSize:30,max:99,uploadParseData:function(e){return{id:e.data.id,fileName:e.data.fileName,url:e.data.src}},listParseData:function(e){return{rows:e.data.rows,total:e.data.total,msg:e.message,code:e.code}},request:{page:"page",pageSize:"pageSize",keyword:"keyword",menuKey:"groupId"},menuProps:{key:"id",label:"label",children:"children"},fileProps:{key:"id",fileName:"fileName",url:"url"},files:{doc:{icon:"sc-icon-file-word-2-fill",color:"#409eff"},docx:{icon:"sc-icon-file-word-2-fill",color:"#409eff"},xls:{icon:"sc-icon-file-excel-2-fill",color:"#67C23A"},xlsx:{icon:"sc-icon-file-excel-2-fill",color:"#67C23A"},ppt:{icon:"sc-icon-file-ppt-2-fill",color:"#F56C6C"},pptx:{icon:"sc-icon-file-ppt-2-fill",color:"#F56C6C"}}},j={props:{modelValue:null,hideUpload:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},max:{type:Number,default:L.max},onlyImage:{type:Boolean,default:!1},maxSize:{type:Number,default:L.maxSize}},data(){return{keyword:null,pageSize:20,total:0,currentPage:1,data:[],menu:[],menuId:"",value:this.multiple?[]:"",fileList:[],accept:this.onlyImage?"image/gif, image/jpeg, image/png":"",listLoading:!1,menuLoading:!1,treeProps:L.menuProps,fileProps:L.fileProps,files:L.files}},watch:{multiple(){this.value=this.multiple?[]:"",this.$emit("update:modelValue",JSON.parse(JSON.stringify(this.value)))}},mounted(){this.getMenu(),this.getData()},methods:{async getMenu(){this.menuLoading=!0;var e=await L.menuApiObj.get();this.menu=e.data,this.menuLoading=!1},async getData(){this.listLoading=!0;var e={[L.request.menuKey]:this.menuId,[L.request.page]:this.currentPage,[L.request.pageSize]:this.pageSize,[L.request.keyword]:this.keyword};this.onlyImage&&(e.type="image");var l=await L.listApiObj.get(e),i=L.listParseData(l);this.data=i.rows,this.total=i.total,this.listLoading=!1,this.$refs.scrollbar.setScrollTop(0)},groupClick(e){this.menuId=e.id,this.currentPage=1,this.keyword=null,this.getData()},reload(){this.getData()},search(){this.currentPage=1,this.getData()},select(e){const l=e[this.fileProps.url];this.multiple?this.value.includes(l)?this.value.splice(this.value.findIndex((e=>e==l)),1):this.value.push(l):this.value.includes(l)?this.value="":this.value=l},submit(){const e=JSON.parse(JSON.stringify(this.value));this.$emit("update:modelValue",e),this.$emit("submit",e)},uploadChange(e,l){e.tempImg=URL.createObjectURL(e.raw),this.fileList=l},uploadBefore(e){const l=e.size/1024/1024<this.maxSize;if(!l)return this.$message.warning(`上传文件大小不能超过 ${this.maxSize}MB!`),!1},uploadRequest(e){var l=L.apiObj;const i=new FormData;i.append("file",e.file),i.append([L.request.menuKey],this.menuId),l.post(i,{onUploadProgress:l=>{e.onProgress(l)}}).then((l=>{e.onSuccess(l)})).catch((l=>{e.onError(l)}))},uploadProcess(e,l){l.progress=Number((e.loaded/e.total*100).toFixed(2))},uploadSuccess(e,l){this.fileList.splice(this.fileList.findIndex((e=>e.uid==l.uid)),1);var i=L.uploadParseData(e);this.data.unshift({[this.fileProps.key]:i.id,[this.fileProps.fileName]:i.fileName,[this.fileProps.url]:i.url}),this.multiple||(this.value=i.url)},uploadError(e){this.$notify.error({title:"上传文件错误",message:e})},_isImg(e){const l=[".jpg",".jpeg",".png",".gif",".bmp"],i=e.substring(e.lastIndexOf("."));return-1!=l.indexOf(i)},_getExt(e){return e.substring(e.lastIndexOf(".")+1)}}},O=i(3744);const q=(0,O.Z)(j,[["render",I],["__scopeId","data-v-48ded1ad"]]);var V=q,$={name:"fileselect",components:{scFileSelect:V},data(){return{file:"",multiple:!1,hideUpload:!1,upload:"",upload2:""}},mounted(){},methods:{submit(e){console.log(e),this.$message("返回值请查看F12控制台console.log()")}}};const B=(0,O.Z)($,[["render",s]]);var E=B}}]);