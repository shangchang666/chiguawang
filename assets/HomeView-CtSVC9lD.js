import{u as S,r as b,o as r,c as u,a as e,n as C,b as $,d as y,F as h,e as k,t as g,f as U,g as f,h as P,i as j,j as M,w as O,v as F}from"./index-p3MEixUG.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";const R={class:"d-flex flex-column justify-start"},z={class:"d-flex align-center"},N={class:"d-flex align-center search-div"},H=["value"],L={class:"d-flex title-list align-center"},E=["onClick"],J={__name:"Two",props:["searchTerm"],emits:["filterByType","searchData","update:searchTerm"],setup(_,{emit:p}){const s=S(),a=p,c=["今日爆料","必看大片","学生校园","反差吃瓜","必撸精品","每日大赛","乱伦精选","热门大瓜","明星黑料","动漫无码","国产剧场","探花精选","吃瓜新闻","热门短剧"],t=()=>{s.isSidebarOpen=!s.isSidebarOpen};return(v,i)=>{const l=b("v-btn");return r(),u(h,null,[e("button",{class:C(["toggle-button",{active:$(s).isSidebarOpen}]),onClick:t}," 菜单 ",2),e("div",{class:C(["sidebar",{open:$(s).isSidebarOpen}])},[e("div",R,[i[2]||(i[2]=e("div",{class:"header-title d-flex align-center justify-center"},"51吃瓜网",-1)),e("div",z,[e("div",N,[e("input",{type:"text",id:"search",value:_.searchTerm,onInput:i[0]||(i[0]=n=>a("update:searchTerm",n.target.value))},null,40,H),y(l,{class:"btn",variant:"tonal",density:"comfortable",icon:"mdi-magnify",onClick:i[1]||(i[1]=n=>a("searchData"))})])]),e("div",L,[(r(),u(h,null,k(c,n=>e("div",{class:"title-list-item",key:n,onClick:D=>a("filterByType",n)},g(n),9,E)),64))])])],2)],64)}}},q=T(J,[["__scopeId","data-v-12283fd9"]]),A=""+new URL("../static/bg/01.jfif",import.meta.url).href,G={class:"main-div"},K={class:"main-div-child"},Q={class:"main-div-child-list"},W={class:"main-div-child-list-item d-flex"},X=["onClick"],Y={class:"main-div-child-item-title"},Z={style:{"font-size":"12px"}},ee=["src"],te={__name:"list",props:["filteredData","totalPages","paginatedData","changePage"],setup(_){const p=U(),s=_,a=t=>{localStorage.setItem("cgw-item",JSON.stringify(t)),p.push("/Detail")},c=t=>"./static/".concat(t);return(t,v)=>{const i=b("v-pagination");return r(),u("main",G,[v[0]||(v[0]=e("div",{class:"title-div"},[e("img",{src:A,alt:"",class:"img"})],-1)),e("div",K,[e("div",Q,[e("div",W,[(r(!0),u(h,null,k(s.paginatedData,l=>(r(),u("div",{class:"main-div-child-list-item-left",key:l,onClick:n=>a(l)},[e("div",Y,[e("div",null,g(l.title),1),e("span",Z,g(l.time)+" • 今日爆料 • "+g(l.type),1)]),e("img",{src:c(l.FM),alt:"",class:"img"},null,8,ee)],8,X))),128)),y(i,{class:"w-100 ma-2",length:_.totalPages,size:"small","onUpdate:modelValue":_.changePage},null,8,["length","onUpdate:modelValue"])])])])])}}},se=T(te,[["__scopeId","data-v-d6422e5a"]]),ae={key:1,class:"header d-flex justify-space-around"},le={class:"d-flex"},ie={class:"d-flex title-list align-center"},ne=["onClick"],oe={class:"d-flex align-center"},ce={class:"d-flex align-center search-div"},x=20,re={__name:"HomeView",setup(_){const p=S(),s=f(window.list||[]),a=f(1),c=f(""),t=f(s.value),v=f();t.value=[...s.value];const i=["今日爆料","必看大片","学生校园","反差吃瓜","必撸精品","每日大赛","乱伦精选","热门大瓜","明星黑料","动漫无码","国产剧场","探花精选","吃瓜新闻","热门短剧"],l=o=>{o==="今日爆料"?(t.value=s.value,a.value=1):(t.value=s.value.filter(d=>d.type===o),a.value=1)},n=()=>{w(),t.value=s.value.filter(o=>o.title.includes(c.value)),a.value=1},D=P(()=>{const o=(a.value-1)*x;return t.value.slice(o,o+x)}),w=()=>{v.value&&(v.value.$el.scrollTop=0)},B=P(()=>Math.ceil(t.value.length/x)),V=o=>{w(),a.value=o};return j(()=>{s.value=window.list||[],a.value=1}),(o,d)=>{const I=b("v-btn");return r(),u(h,null,[$(p).isMobile?(r(),M(q,{key:0,onFilterByType:l,onSearchData:n,searchTerm:c.value,"onUpdate:searchTerm":d[0]||(d[0]=m=>c.value=m)},null,8,["searchTerm"])):(r(),u("header",ae,[e("div",le,[d[2]||(d[2]=e("div",{class:"header-title d-flex align-center"},"51吃瓜网",-1)),e("div",ie,[(r(),u(h,null,k(i,m=>e("div",{key:m,class:"title-list-item",onClick:de=>l(m)},g(m),9,ne)),64))]),e("div",oe,[e("div",ce,[O(e("input",{type:"text",id:"search","onUpdate:modelValue":d[1]||(d[1]=m=>c.value=m)},null,512),[[F,c.value]]),y(I,{onClick:n,variant:"tonal",density:"comfortable",icon:"mdi-magnify"})])])])])),y(se,{ref_key:"listRef",ref:v,filteredData:t.value,totalPages:B.value,paginatedData:D.value,changePage:V},null,8,["filteredData","totalPages","paginatedData"])],64)}}},me=T(re,[["__scopeId","data-v-f78d8e72"]]);export{me as default};