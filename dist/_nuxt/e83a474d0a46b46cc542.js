(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{185:function(t,r,e){"use strict";e.r(r);var l=e(95),n=e.n(l),o={props:["title","image","artistName","url","color"]},c=e(16),d={asyncData:function(t){var r=t.params;return n.a.get("https://itunes.apple.com/search?term=".concat(r.id,"&entity=album")).then(function(t){return{albumData:t.data.results}})},components:{Card:Object(c.a)(o,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"grey lighten-3",staticStyle:{"max-width":"400px",margin:"auto"},attrs:{id:"e3"}},[e("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-card",{staticClass:"white--text",attrs:{target:"_blank",href:t.url,color:t.color}},[e("v-container",{attrs:{fluid:"","grid-list-lg":""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs7:""}},[e("div",[e("div",{staticClass:"headline"},[t._v(t._s(t.title))]),t._v(" "),e("div",[t._v(t._s(t.artistName))])])]),t._v(" "),e("v-flex",{attrs:{xs5:""}},[e("v-card-media",{attrs:{src:t.image,height:"100px",contain:""}})],1)],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null).exports},middleware:"search",methods:{picker:function(t){return t%2==0?"red":"blue"}},computed:{albumExists:function(){return this.albumData.length>0}}},m=Object(c.a)(d,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h1",[t._v("Results for "+t._s(t.$route.params.id))]),t._v(" "),t.albumExists?e("div",[t._l(t.albumData,function(r,l){return e("div",[e("Card",{attrs:{title:r.collectionCensoredName,image:r.artworkUrl100,artistName:r.artistName,url:r.artistViewUrl,color:t.picker(l)}})],1)}),t._v("\n    "+t._s(t.albumData)+"\n  ")],2):e("div",[e("h1",[t._v("Could not find any albums")])])])},[],!1,null,null,null);r.default=m.exports}}]);