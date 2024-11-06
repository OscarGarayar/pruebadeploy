import{O as l}from"./orders-api.service-DGHKN4we.js";import{_ as u,c as m,a as e,s as a,v as c,x as _,y as p,k as h,f,p as b,g as v}from"./index-CMyOcGY-.js";import"./http-common-CiLYNU3f.js";import"./axios-CCb-kr4I.js";const y={data(){return{order:null}},created(){const o=this.$route.query.id;this.fetchOrderDetails(o)},methods:{async fetchOrderDetails(o){const r=new l;try{const n=await r.getById(o);this.order=n.data,console.log(this.order)}catch(n){console.error("Error fetching order details:",n)}},async updateOrder(){const o=new l;try{await o.update(this.order.id,this.order),this.$router.push("/orders")}catch(r){console.error("Error updating order:",r)}}}},d=o=>(b("data-v-dbd35e73"),o=o(),v(),o),O={key:0,class:"order-update-container"},S=d(()=>e("h2",null,"Update Order",-1)),g={class:"form-group"},I=d(()=>e("label",{for:"name"},"Name:",-1)),w={class:"form-group"},U=d(()=>e("label",{for:"table"},"Table:",-1)),k={class:"form-group"},x=d(()=>e("label",{for:"status"},"Status:",-1)),V=d(()=>e("option",{value:"In preparation"},"In preparation",-1)),B=d(()=>e("option",{value:"Finish"},"Finish",-1)),A=[V,B],C={class:"form-buttons"},D=d(()=>e("button",{type:"submit",class:"btn btn-update"},"Update Order",-1));function E(o,r,n,M,s,i){return s.order?(f(),m("div",O,[S,e("form",{onSubmit:r[4]||(r[4]=p((...t)=>i.updateOrder&&i.updateOrder(...t),["prevent"])),class:"order-form"},[e("div",g,[I,a(e("input",{"onUpdate:modelValue":r[0]||(r[0]=t=>s.order.name=t),type:"text",class:"form-control"},null,512),[[c,s.order.name]])]),e("div",w,[U,a(e("input",{"onUpdate:modelValue":r[1]||(r[1]=t=>s.order.table=t),type:"number",class:"form-control"},null,512),[[c,s.order.table]])]),e("div",k,[x,a(e("select",{"onUpdate:modelValue":r[2]||(r[2]=t=>s.order.status=t),class:"form-control"},A,512),[[_,s.order.status]])]),e("div",C,[D,e("button",{onClick:r[3]||(r[3]=p(t=>o.$router.push("/orders"),["prevent"])),class:"btn btn-cancel"},"Cancel")])],32)])):h("",!0)}const j=u(y,[["render",E],["__scopeId","data-v-dbd35e73"]]);export{j as default};