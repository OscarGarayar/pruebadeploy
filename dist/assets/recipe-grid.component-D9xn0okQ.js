import{R as u}from"./recipe-api.service-aXopS-ej.js";import{_ as R,c as d,a as o,b as _,d as f,F as v,q as y,i as w,f as l,l as A,t as k,p as S,g as b}from"./index-CMyOcGY-.js";import"./http-common-CiLYNU3f.js";import"./axios-CCb-kr4I.js";class p{constructor(e=0,t="",r="",n="",a=[],i=""){this.id=e,this.name=t,this.category=r,this.description=n,this.ingredients=a,this.image=i}static fromApiResponse(e){return new p(e.id,e.name,e.category,e.description,e.ingredients.map(t=>h.fromApiResponse1(t)),e.image)}}class h{constructor(e="",t="",r=0){this.name=e,this.quantity=t,this.cost=r}static fromApiResponse1(e){return new h(e.name,e.quantity,e.cost)}}const E={data(){return{recipes:[]}},methods:{async deleteRecipe(s,e){const t=new u;try{(await t.delete(s)).status===200?(this.recipes.splice(e,1),alert("Recipe delete")):alert("Error delete recipe")}catch(r){console.error("Error deleting recipe:",r),alert("Error during deletion")}}},async mounted(){const s=new u;try{const e=await s.getAll();this.recipes=e.data.map(t=>p.fromApiResponse(t)),console.log(this.recipes)}catch(e){console.error("Error fetching recipe:",e)}}},g=s=>(S("data-v-4e689d7f"),s=s(),b(),s),q={class:"container"},x=g(()=>o("h1",null,"Admi. Kitchen",-1)),C=g(()=>o("h2",null,"Recetas",-1)),I={class:"action-button"},B={class:"recipe-grid"},N=["src","alt"],V=["onClick"];function $(s,e,t,r,n,a){const i=w("router-link");return l(),d("div",q,[x,C,o("button",I,[_(i,{to:{path:"/recipe/recipeAdd"},class:"link-button"},{default:f(()=>[A(" Añadir receta ")]),_:1})]),o("div",B,[(l(!0),d(v,null,y(n.recipes,(c,m)=>(l(),d("div",{key:m,class:"recipe-card"},[_(i,{to:{path:"/recipe/viewRecipe",query:{id:c.id}}},{default:f(()=>[o("img",{src:c.image,alt:c.name,class:"recipe-image"},null,8,N)]),_:2},1032,["to"]),o("h3",null,k(c.name),1),o("button",{class:"action-button",onClick:F=>a.deleteRecipe(c.id,m)},"Eliminar receta",8,V)]))),128))])])}const j=R(E,[["render",$],["__scopeId","data-v-4e689d7f"]]);export{j as default};