(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=a(181),s=a(163),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.edges,a=(this.props.data.site.siteMetadata.title,t.map(function(e){return o.a.createElement("li",{key:e.node.fields.slug},o.a.createElement(s.a,{to:e.node.fields.slug},e.node.frontmatter.title))}));return o.a.createElement(i.a,{location:this.props.location,title:e},o.a.createElement("h2",{style:{marginTop:"0"}},"Hay ",this.props.data.allMarkdownRemark.totalCount," posts etiquetados con“",this.props.pageContext.tag,"”"),o.a.createElement("ul",null,a),o.a.createElement("p",null))},t}(o.a.Component);t.default=c;var d="3496546853"},163:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(33),s=a.n(i);a.d(t,"a",function(){return s.a});a(167);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},167:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},168:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return c});var n=a(196),r=a.n(n),l=a(197),o=a.n(l);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var i=new r.a(o.a);var s=i.rhythm,c=i.scale},171:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),i=a(56),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog de Carlos Salas"}},allMarkdownRemark:{edges:[{node:{excerpt:"Hola, este es el primer post de este blog. Servirá a modo de pruebas para comprobar si esta correcto el funcionamiento de todas las…",fields:{slug:"/como-centrar-un-elemento-dentro-de-un-div-en-html/"},frontmatter:{date:"19 April, 2019",title:"Como centrar un elemento dentro de un div en html"}}},{node:{excerpt:"Hola, bienvenido a mi blog, espero la pases bien y que disfrutes del contenido que subire, y lo más importante ques sea de ayuda para tus…",fields:{slug:"/bienvenido/"},frontmatter:{date:"19 April, 2019",title:"Bienvenida"}}}]}}}},181:function(e,t,a){"use strict";a(76),a(77);var n=a(7),r=a.n(n),l=a(0),o=a.n(l),i=a(163),s=a(372),c=a(368),d=a(280),u=a(286),m=a(375),p=(a(168),a(371)),f=a(180),h=(a(148),a(179)),g=a(369),y=a(370),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(i.b,{query:b,render:function(e){var t=e.allMarkdownRemark.edges,a=[];return t.map(function(e){var t=e.node;a.push(t)}),o.a.createElement("div",{style:{marginTop:"24px",display:"inline-block",width:"90%"}},o.a.createElement("h4",null,"Artículos recientes"),o.a.createElement(g.a,{style:{border:"2px solid #ebedf0"}}),o.a.createElement(y.a,{itemLayout:"horizontal",dataSource:a,style:{marginTop:"30px"},renderItem:function(e){return o.a.createElement(y.a.Item,null,o.a.createElement(y.a.Item.Meta,{title:o.a.createElement(i.a,{style:{boxShadow:"none"},to:e.fields.slug},e.frontmatter.title)}))}}))},data:h}))},t}(o.a.Component),b="2138858922",v=(p.a.Meta,function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"sideMenu",style:{display:"inline-block",marginTop:"24px"}},o.a.createElement("div",{className:"card",style:{display:"inline-block"}},o.a.createElement("div",{className:"card-banner"},o.a.createElement("div",{className:"card-profile"}),o.a.createElement("div",{className:"card-content"},o.a.createElement("h3",null,"Carlos José Salas"),o.a.createElement("p",null," Estudiante de Programación de Nicaragua ")),o.a.createElement("div",{className:"card-links"},o.a.createElement(d.a,null,o.a.createElement(u.a,{span:8},o.a.createElement("a",{href:"https://github.com/josesalasni",target:"_blank"},o.a.createElement(f.a,{type:"github",style:{fontSize:"2em"}}))),o.a.createElement(u.a,{span:8},o.a.createElement("a",{href:"mailto:josesalasni@gmail.com?Subject=Hello%20again",target:"_blank"},o.a.createElement(f.a,{type:"mail",style:{fontSize:"2em"}}))),o.a.createElement(u.a,{span:8},o.a.createElement("a",{href:"https://www.facebook.com/salascarlosyy",target:"_blank"},o.a.createElement(f.a,{type:"facebook",style:{fontSize:"2em"}}))))))),o.a.createElement(E,null))},t}(o.a.Component)),k=(a(149),a(150),s.b.SubMenu,c.a.Header),x=c.a.Content,w=(c.a.Sider,c.a.Footer),S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={current:"mail"},t.handleClick=function(e){},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.title,n=e.children,r=(t.pathname,t.pathname.split("/").filter(Boolean).pop());r&&Boolean(r.match(/^[0-9]+$/));return o.a.createElement(c.a,null,o.a.createElement(c.a,{id:"mainlayout"},o.a.createElement(k,{id:"header",style:{position:"relative",background:"#3c8dbc ",padding:0,lineHeight:0}},o.a.createElement(s.b,{theme:"light",id:"topbar",mode:"horizontal",onClick:this.handleClick,selectedKeys:[this.state.current],defaultSelectedKeys:["2"],style:{lineHeight:"64px",background:"#2d2d2d",WebkitBoxShadow:"0 2px 8px #f0f1f2",boxShadow:"0 2px 8px #f0f1f2"}},o.a.createElement(s.b.Item,{style:{color:"white"},key:"1"},o.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement(s.b.Item,{style:{color:"white",float:"right"},key:"2"},o.a.createElement("a",{style:{color:"white"},target:"_blank",href:"https://josesalasni.github.io"},"Sobre mi")))),o.a.createElement(x,{style:{background:"#fff"}},o.a.createElement(c.a,{style:{padding:"24px 0",background:"#fff"}},o.a.createElement(d.a,null,o.a.createElement(u.a,{lg:18,span:24},o.a.createElement("div",{id:"mainCon",style:{borderRight:"1px solid #ebedf0",background:"#fff",paddingLeft:"70px",paddingRight:"70px",margin:"24px 24px 24px",minHeight:360}},n)),o.a.createElement(u.a,{lg:6,span:24},o.a.createElement("div",{style:{textAlign:"center",margin:"24px, 24px , 24px"}},o.a.createElement(v,null)))))),o.a.createElement("div",null,o.a.createElement(m.a,null)),o.a.createElement(w,{style:{background:"#2d2d2d",color:"white",textAlign:"center"}},(new Date).getFullYear(),", Desarrollado por Carlos Salas usando React.Js y Gatsby")))},t}(o.a.Component);t.a=S}}]);
//# sourceMappingURL=component---src-templates-tags-info-js-723a92b0c63356c291ba.js.map