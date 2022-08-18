"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[876],{1876:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"studentList"},[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,size:"mini"}},[l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.addStudent}},[e._v("新增")])],1),l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.formInline.name,callback:function(t){e.$set(e.formInline,"name",t)},expression:"formInline.name"}})],1),l("el-form-item",{attrs:{label:"学号"}},[l("el-input",{attrs:{placeholder:"请输入学号"},model:{value:e.formInline.number,callback:function(t){e.$set(e.formInline,"number",t)},expression:"formInline.number"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.find}},[e._v("查询")])],1)],1),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{prop:"name",label:"姓名",align:"center"}}),l("el-table-column",{attrs:{prop:"sex",label:"性别",align:"center"}}),l("el-table-column",{attrs:{prop:"age",label:"年龄",align:"center"}}),l("el-table-column",{attrs:{prop:"number",label:"学号",align:"center"}}),l("el-table-column",{attrs:{prop:"class",label:"班级",align:"center"}}),l("el-table-column",{attrs:{prop:"state",label:"状态",align:"center"}}),l("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),l("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),l("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:function(l){return e.updateInfo(t.row)}}}),l("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete"},on:{click:function(l){return e.deleteInfo(t.row)}}})]}}])})],1),l("el-dialog",{attrs:{title:"新增信息",visible:e.dialogFormVisible,width:"500px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[l("el-form-item",{attrs:{label:"姓名","label-width":e.formLabelWidth,prop:"name"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),l("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth}},[l("el-radio",{attrs:{label:"男"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("男")]),l("el-radio",{attrs:{label:"女"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[e._v("女")])],1),l("el-form-item",{attrs:{label:"年龄","label-width":e.formLabelWidth,prop:"age"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),l("el-form-item",{attrs:{label:"学号","label-width":e.formLabelWidth,prop:"number"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),l("el-form-item",{attrs:{label:"班级","label-width":e.formLabelWidth,prop:"class"}},[l("el-select",{attrs:{placeholder:"请选择班级"},model:{value:e.form.class,callback:function(t){e.$set(e.form,"class",t)},expression:"form.class"}},[l("el-option",{attrs:{label:"一班",value:"一班"}}),l("el-option",{attrs:{label:"二班",value:"二班"}}),l("el-option",{attrs:{label:"三班",value:"三班"}}),l("el-option",{attrs:{label:"四班",value:"四班"}}),l("el-option",{attrs:{label:"五班",value:"五班"}}),l("el-option",{attrs:{label:"六班",value:"六班"}}),l("el-option",{attrs:{label:"七班",value:"七班"}}),l("el-option",{attrs:{label:"八班",value:"八班"}})],1)],1),l("el-form-item",{attrs:{label:"状态","label-width":e.formLabelWidth,prop:"state"}},[l("el-select",{attrs:{placeholder:"请选择状态"},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},[l("el-option",{attrs:{label:"已入学",value:"已入学"}}),l("el-option",{attrs:{label:"未入学",value:"未入学"}}),l("el-option",{attrs:{label:"休学中",value:"休学中"}})],1)],1),l("el-form-item",{attrs:{label:"地址","label-width":e.formLabelWidth,prop:"address"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),l("el-form-item",{attrs:{label:"联系方式","label-width":e.formLabelWidth,prop:"phone"}},[l("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.sure(e.form)}}},[e._v("确 定")])],1)],1),l("el-pagination",{attrs:{background:"",layout:"prev, pager, next,junp",total:1e3}})],1)},o=[],r={data(){return{tableData:[],formInline:{name:"",number:""},dialogFormVisible:!1,form:{name:"",sex:"男",age:"",number:"",class:"",state:"",address:"",phone:""},formLabelWidth:"80px",rules:{name:[{required:!0,message:"请输入姓名"}],age:[{required:!0,message:"请输入年龄"}],number:[{required:!0,message:"请输入学号"}],class:[{required:!0,message:"请输入班级"}],state:[{required:!0,message:"请输入状态"}],address:[{required:!0,message:"请输入地址"}],phone:[{required:!0,message:"请输入电话"}]}}},created(){this.getData()},methods:{getData(){this.service.get("/students").then((e=>{console.log(e),this.tableData=[...e.data.data]})).catch((e=>{console.log(e)}))},updateInfo(e){console.log(e)},deleteInfo(e){console.log(e)},addStudent(){this.dialogFormVisible=!0},find(){},sure(e){this.$refs.form.validate((e=>{if(e){console.log(this.state);const e=!0;e&&(console.log(this.form),this.service.post("/students",this.form).then((e=>{console.log(e),this.dialogFormVisible=!1,this.form={name:"",sex:"1",age:"",number:"",class:"",state:"",address:"",phone:""},this.getData()})).catch((e=>{console.log(e)})))}else console.error(this.form)}))}}},s=r,n=l(1001),i=(0,n.Z)(s,a,o,!1,null,"0deab836",null),m=i.exports}}]);
//# sourceMappingURL=876.4256313b.js.map