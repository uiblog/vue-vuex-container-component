webpackJsonp([1],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),s={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",t._l(t.comments,function(n){return e("li",{key:n.id},[t._v("\n    "+t._s(n.body)+"—"+t._s(n.author)+"\n  ")])}))},staticRenderFns:[]},r=e("VU/8")({name:"CommentList",computed:{comments:function(){return this.$store.state.comments}},mounted:function(){this.$store.dispatch("fetchComments")}},s,!1,null,null,null).exports,m={name:"CommentListNew",props:{comments:{type:Array,default:function(){return[]},validator:function(t){return t.every(function(t){return"body"in t&&"author"in t&&"id"in t})}},fetch:{type:Function,default:function(){}},type:{type:String}},mounted:function(){this.fetch()}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[t._v("\n  "+t._s(t.type)+" 评论\n  "),t._l(t.comments,function(n){return e("li",{key:n.id},[t._v("\n    "+t._s(n.body)+"—"+t._s(n.author)+"\n  ")])})],2)},staticRenderFns:[]},c=e("VU/8")(m,i,!1,null,null,null).exports,u={name:"CommentListContainer",components:{CommentList:c},computed:{comments:function(){return this.$store.state.comments}},methods:{fetchComments:function(){return this.$store.dispatch("fetchComments")}}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("CommentList",{attrs:{fetch:this.fetchComments,comments:this.comments}})},staticRenderFns:[]},l=e("VU/8")(u,a,!1,null,null,null).exports,f=e("NYxO"),p=e("eOgT"),h=e.n(p);o.a.use(f.a);var d=new f.a.Store({state:{comments:[]},mutations:{setComments:function(t,n){t.comments=n}},actions:{fetchComments:function(t){var n=t.commit;setTimeout(function(){n("setComments",[{body:"霸气侧漏",author:"雷叔",id:1123},{body:"机智如我",author:"蕾妹",id:1124}])})}}}),_=d,C=new h.a(d).connect({mapStateToProps:{comments:function(t){return t.comments}},mapActionToProps:{fetch:"fetchComments"}})(c),v={components:{CommentList:r,CommentListContainer:l,ConnectCommentListContainer:e("VU/8")(C,null,!1,null,null,null).exports}},y={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrapper"},[e("h1",[t._v("容器组件-展示组件模式")]),t._v(" "),e("h2",[t._v("没有容器组件")]),t._v(" "),e("CommentList",{attrs:{type:"热门"}}),t._v(" "),e("h2",[t._v("手动实现容器组件与store连接")]),t._v(" "),e("CommentListContainer",{attrs:{type:"热门"}}),t._v(" "),e("h2",[t._v("通过 @xunlei/vuex-connector 实现容器组件")]),t._v(" "),e("ConnectCommentListContainer",{attrs:{type:"热门"}})],1)},staticRenderFns:[]};var L=e("VU/8")(v,y,!1,function(t){e("O1RA")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:L},template:"<App/>",store:_})},O1RA:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.3be6ac6ae84c79d1dbbd.js.map