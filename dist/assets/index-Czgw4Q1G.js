import{B as o,f as c,c as s,A as a,C as r,D as p}from"./index-CMyOcGY-.js";var f=function(e){var t=e.dt;return`
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (`.concat(t("icon.size"),` / 2));
    color: `).concat(t("iconfield.icon.color"),`;
    line-height: 1;
}

.p-iconfield .p-inputicon:first-child {
    left: `).concat(t("form.field.padding.x"),`;
}

.p-iconfield .p-inputicon:last-child {
    right: `).concat(t("form.field.padding.x"),`;
}

.p-iconfield .p-inputtext:not(:first-child) {
    padding-left: calc((`).concat(t("form.field.padding.x")," * 2) + ").concat(t("icon.size"),`);
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-right: calc((`).concat(t("form.field.padding.x")," * 2) + ").concat(t("icon.size"),`);
}
`)},u={root:"p-iconfield"},h=o.extend({name:"iconfield",theme:f,classes:u}),m={name:"BaseIconField",extends:p,style:h,provide:function(){return{$pcIconField:this,$parentInstance:this}}},$={name:"IconField",extends:m,inheritAttrs:!1};function v(n,e,t,l,d,i){return c(),s("div",r({class:n.cx("root")},n.ptmi("root")),[a(n.$slots,"default")],16)}$.render=v;var I={root:"p-inputicon"},x=o.extend({name:"inputicon",classes:I}),g={name:"BaseInputIcon",extends:p,style:x,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},B={name:"InputIcon",extends:g,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function y(n,e,t,l,d,i){return c(),s("span",r({class:i.containerClass},n.ptmi("root")),[a(n.$slots,"default")],16)}B.render=y;export{B as a,$ as s};