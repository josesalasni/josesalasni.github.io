(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{155:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});var n=a(7),r=a.n(n),o=a(0),l=a.n(o),i=a(181),c=a(193),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return l.a.createElement(i.a,{location:this.props.location,title:e},l.a.createElement(c.a,{title:"404: Not Found"}),l.a.createElement("h1",null,"Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(l.a.Component);t.default=s;var d="1097489062"},163:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(33),c=a.n(i);a.d(t,"a",function(){return c.a});a(167);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},167:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},168:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(196),r=a.n(n),o=a(197),l=a.n(o);l.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete l.a.googleFonts;var i=new r.a(l.a);var c=i.rhythm,s=i.scale},171:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),i=a(56),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog de Carlos Salas"}},allMarkdownRemark:{edges:[{node:{excerpt:"Hola, este es el primer post de este blog. Servirá a modo de pruebas para comprobar si esta correcto el funcionamiento de todas las…",fields:{slug:"/como-centrar-un-elemento-dentro-de-un-div-en-html/"},frontmatter:{date:"19 April, 2019",title:"Como centrar un elemento dentro de un div en html"}}}]}}}},181:function(e,t,a){"use strict";a(76),a(77);var n=a(7),r=a.n(n),o=a(0),l=a.n(o),i=a(163),c=a(372),s=a(368),d=a(280),u=a(286),m=a(375),p=(a(168),a(371)),f=a(180),h=(a(148),a(179)),g=a(369),y=a(370),E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement(i.b,{query:b,render:function(e){var t=e.allMarkdownRemark.edges,a=[];return t.map(function(e){var t=e.node;a.push(t)}),l.a.createElement("div",{style:{marginTop:"40px"}},l.a.createElement("h4",null,"Artículos recientes"),l.a.createElement(g.a,{style:{border:"2px solid #ebedf0"}}),l.a.createElement(y.a,{itemLayout:"horizontal",dataSource:a,style:{marginTop:"30px"},renderItem:function(e){return l.a.createElement(y.a.Item,null,l.a.createElement(y.a.Item.Meta,{title:l.a.createElement(i.a,{style:{boxShadow:"none"},to:e.fields.slug},e.frontmatter.title)}))}}))},data:h}))},t}(l.a.Component),b="2138858922",v=(p.a.Meta,function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return l.a.createElement("div",{style:{display:"inline-block",marginTop:"24px"}},l.a.createElement("div",{className:"card",style:{display:"inline-block"}},l.a.createElement("div",{className:"card-banner"},l.a.createElement("div",{className:"card-profile"}),l.a.createElement("div",{className:"card-content"},l.a.createElement("h3",null,"Carlos José Salas"),l.a.createElement("p",null," Estudiante de Programación de Nicaragua ")),l.a.createElement("div",{className:"card-links"},l.a.createElement(d.a,null,l.a.createElement(u.a,{span:8},l.a.createElement("a",{href:"https://github.com/josesalasni",target:"_blank"},l.a.createElement(f.a,{type:"github",style:{fontSize:"2em"}}))),l.a.createElement(u.a,{span:8},l.a.createElement("a",{href:"mailto:josesalasni@gmail.com?Subject=Hello%20again",target:"_blank"},l.a.createElement(f.a,{type:"mail",style:{fontSize:"2em"}}))),l.a.createElement(u.a,{span:8},l.a.createElement("a",{href:"https://www.facebook.com/salascarlosyy",target:"_blank"},l.a.createElement(f.a,{type:"facebook",style:{fontSize:"2em"}}))))))),l.a.createElement(E,null))},t}(l.a.Component)),x=(a(149),a(150),c.b.SubMenu,s.a.Header),k=s.a.Content,w=(s.a.Sider,s.a.Footer),S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={current:"mail"},t.handleClick=function(e){},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.title,n=e.children,r=(t.pathname,t.pathname.split("/").filter(Boolean).pop());r&&Boolean(r.match(/^[0-9]+$/));return l.a.createElement(s.a,null,l.a.createElement(s.a,{id:"mainlayout"},l.a.createElement(x,{id:"header",style:{position:"relative",background:"#3c8dbc ",padding:0,lineHeight:0}},l.a.createElement(c.b,{theme:"light",id:"topbar",mode:"horizontal",onClick:this.handleClick,selectedKeys:[this.state.current],defaultSelectedKeys:["2"],style:{lineHeight:"64px",background:"#2d2d2d",WebkitBoxShadow:"0 2px 8px #f0f1f2",boxShadow:"0 2px 8px #f0f1f2"}},l.a.createElement(c.b.Item,{style:{color:"white"},key:"1"},l.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),l.a.createElement(c.b.Item,{style:{color:"white",float:"right"},key:"2"},l.a.createElement("a",{style:{color:"white"},target:"_blank",href:"https://josesalasni.github.io"},"Sobre mi")))),l.a.createElement(k,{style:{background:"#fff"}},l.a.createElement(s.a,{style:{padding:"24px 0",background:"#fff"}},l.a.createElement(d.a,null,l.a.createElement(u.a,{lg:18,span:24},l.a.createElement("div",{id:"mainCon",style:{borderRight:"1px solid #ebedf0",background:"#fff",paddingLeft:"70px",paddingRight:"70px",margin:"24px 24px 24px",minHeight:360}},n)),l.a.createElement(u.a,{lg:6,span:24},l.a.createElement("div",{style:{textAlign:"center",margin:"24px, 24px , 24px"}},l.a.createElement(v,null)))))),l.a.createElement("div",null,l.a.createElement(m.a,null)),l.a.createElement(w,{style:{background:"#2d2d2d",color:"white",textAlign:"center"}},(new Date).getFullYear(),", Desarrollado por Carlos Salas usando React.Js y Gatsby")))},t}(l.a.Component);t.a=S},193:function(e,t,a){"use strict";var n=a(194),r=a(0),o=a.n(r),l=a(4),i=a.n(l),c=a(205),s=a.n(c),d=a(163);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,i=e.title;return o.a.createElement(d.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:i},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u;var m="1025518380"},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog de Carlos Salas",description:"Un blog acerca de tutoriales e información de temas de programación en español.",author:"Carlos Salas"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-79b8b9a23b518fde7727.js.map