(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});a(35);var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(163),c=a(180),s=a(375),d=a(209),p=a(181),m=a(193),u=a(168),f=(a(348),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=document.createElement("script");e.src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v3.2&appId=312715572758197&autoLogAppEvents=1",e.async=!0,e.crossOrigin="anonymous",document.body.appendChild(e)},a.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,r=a.next;return i.a.createElement(p.a,{location:this.props.location,title:t},i.a.createElement(m.a,{title:e.frontmatter.title,description:e.excerpt}),i.a.createElement("div",{id:"fb-root"}),i.a.createElement("h1",{style:{marginTop:"0"}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},i.a.createElement(c.a,{style:{paddingTop:"15px",paddingRight:"15px"},type:"calendar"}),e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),e.frontmatter.tags.map(function(e,t){return i.a.createElement("span",{key:t,className:"tag"},i.a.createElement(s.a,null,i.a.createElement(o.a,{style:{boxShadow:"none"},to:"/tags/"+e},e)))}),i.a.createElement(d.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",marginTop:"30px",padding:0}},i.a.createElement("li",null,n&&i.a.createElement(o.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),i.a.createElement("li",null,r&&i.a.createElement(o.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))),i.a.createElement("div",{class:"fb-comments","data-href":window.location.href,"data-numposts":"6"}))},t}(i.a.Component));t.default=f;var g="1159323781"},163:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(33),c=a.n(o);a.d(t,"a",function(){return c.a});a(167);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},167:function(e,t,a){var n;e.exports=(n=a(171))&&n.default||n},168:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(196),r=a.n(n),l=a(197),i=a.n(l);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var o=new r.a(i.a);var c=o.rhythm,s=o.scale},171:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(56),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog de Carlos Salas"}},allMarkdownRemark:{edges:[{node:{excerpt:"Hola, este es el primer post de este blog. Servirá a modo de pruebas para comprobar si esta correcto el funcionamiento de todas las…",fields:{slug:"/como-centrar-un-elemento-dentro-de-un-div-en-html/"},frontmatter:{date:"19 April, 2019",title:"Como centrar un elemento dentro de un div en html"}}},{node:{excerpt:"Hola, bienvenido a mi blog, espero la pases bien y que disfrutes del contenido que subire, y lo más importante ques sea de ayuda para tus…",fields:{slug:"/bienvenido/"},frontmatter:{date:"19 April, 2019",title:"Bienvenida"}}}]}}}},181:function(e,t,a){"use strict";a(76),a(77);var n=a(7),r=a.n(n),l=a(0),i=a.n(l),o=a(163),c=a(373),s=a(369),d=a(280),p=a(286),m=a(376),u=(a(168),a(372)),f=a(180),g=(a(148),a(179)),h=a(370),y=a(371),b=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",null,i.a.createElement(o.b,{query:E,render:function(e){var t=e.allMarkdownRemark.edges,a=[];return t.map(function(e){var t=e.node;a.push(t)}),i.a.createElement("div",{style:{marginTop:"24px",display:"inline-block",width:"90%"}},i.a.createElement("h4",null,"Artículos recientes"),i.a.createElement(h.a,{style:{border:"2px solid #ebedf0"}}),i.a.createElement(y.a,{itemLayout:"horizontal",dataSource:a,style:{marginTop:"30px"},renderItem:function(e){return i.a.createElement(y.a.Item,null,i.a.createElement(y.a.Item.Meta,{title:i.a.createElement(o.a,{style:{boxShadow:"none"},to:e.fields.slug},e.frontmatter.title)}))}}))},data:g}))},t}(i.a.Component),E="2138858922",v=(u.a.Meta,function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{id:"sideMenu",style:{display:"inline-block",marginTop:"24px"}},i.a.createElement("div",{className:"card",style:{display:"inline-block"}},i.a.createElement("div",{className:"card-banner"},i.a.createElement("div",{className:"card-profile"}),i.a.createElement("div",{style:{paddingLeft:"10px"},className:"card-content"},i.a.createElement("h3",null,"Carlos José Salas"),i.a.createElement("p",null," Estudiante de Programación de Nicaragua ")),i.a.createElement("div",{className:"card-links"},i.a.createElement(d.a,null,i.a.createElement(p.a,{span:8},i.a.createElement("a",{href:"https://github.com/josesalasni",target:"_blank"},i.a.createElement(f.a,{type:"github",style:{fontSize:"2em"}}))),i.a.createElement(p.a,{span:8},i.a.createElement("a",{href:"mailto:josesalasni@gmail.com?Subject=Hello%20again",target:"_blank"},i.a.createElement(f.a,{type:"mail",style:{fontSize:"2em"}}))),i.a.createElement(p.a,{span:8},i.a.createElement("a",{href:"https://www.facebook.com/salascarlosyy",target:"_blank"},i.a.createElement(f.a,{type:"facebook",style:{fontSize:"2em"}}))))))),i.a.createElement(b,null))},t}(i.a.Component)),x=(a(149),a(150),c.b.SubMenu,s.a.Header),k=s.a.Content,w=(s.a.Sider,s.a.Footer),A=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={current:"mail"},t.handleClick=function(e){},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,a=e.title,n=e.children,r=(t.pathname,t.pathname.split("/").filter(Boolean).pop());r&&Boolean(r.match(/^[0-9]+$/));return i.a.createElement(s.a,null,i.a.createElement(s.a,{id:"mainlayout"},i.a.createElement(x,{id:"header",style:{position:"relative",background:"#3c8dbc ",padding:0,lineHeight:0}},i.a.createElement(c.b,{theme:"light",id:"topbar",mode:"horizontal",onClick:this.handleClick,selectedKeys:[this.state.current],defaultSelectedKeys:["2"],style:{lineHeight:"64px",background:"#2d2d2d",WebkitBoxShadow:"0 2px 8px #f0f1f2",boxShadow:"0 2px 8px #f0f1f2"}},i.a.createElement(c.b.Item,{style:{color:"white"},key:"1"},i.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement(c.b.Item,{style:{color:"white",float:"right"},key:"2"},i.a.createElement("a",{style:{color:"white"},target:"_blank",href:"https://josesalasni.github.io"},"Sobre mi")))),i.a.createElement(k,{style:{background:"#fff"}},i.a.createElement(s.a,{style:{padding:"24px 0",background:"#fff"}},i.a.createElement(d.a,null,i.a.createElement(p.a,{lg:18,span:24},i.a.createElement("div",{id:"mainCon",style:{borderRight:"1px solid #ebedf0",background:"#fff",paddingLeft:"70px",paddingRight:"70px",margin:"24px 24px 24px",minHeight:360}},n)),i.a.createElement(p.a,{lg:6,span:24},i.a.createElement("div",{style:{textAlign:"center",margin:"24px, 24px , 24px"}},i.a.createElement(v,null)))))),i.a.createElement("div",null,i.a.createElement(m.a,null)),i.a.createElement(w,{style:{background:"#2d2d2d",color:"white",textAlign:"center"}},(new Date).getFullYear(),", Desarrollado por Carlos Salas usando React.Js y Gatsby")))},t}(i.a.Component);t.a=A},193:function(e,t,a){"use strict";var n=a(194),r=a(0),l=a.n(r),i=a(4),o=a.n(i),c=a(206),s=a.n(c),d=a(163);function p(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title;return l.a.createElement(d.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=p;var m="1025518380"},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog de Carlos Salas",description:"Un blog acerca de tutoriales e información de temas de programación en español.",author:"Carlos Salas"}}}}},209:function(e,t,a){"use strict";a(210);var n=a(212),r=a(0),l=a.n(r),i=a(163),o=a(213),c=a.n(o),s=a(372),d=a(168),p=s.a.Meta;var m="2598425350";t.a=function(){return l.a.createElement(i.b,{query:m,render:function(e){var t=e.site.siteMetadata,a=t.author;return t.social,l.a.createElement(s.a,{style:{marginTop:16}},l.a.createElement(p,{avatar:l.a.createElement(c.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),title:a,description:"Escrito por "+a}))},data:n})}},212:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAFT0lEQVQ4yyWUeUyTdxzGX0CkIrS0tKW1BaSIQAG5aavI5cWhUDnnyRRPEqYRT6biZA7lmtcU8dh0Edwm0+i855yJm8riMf2DJc444xYdiBijzmncZ7++vsk3b97v7/c+eZ7ne0gPT53hftVSHlhieTDYyH1JyaOgKG7OXsB3rW3Ub9pIckoK+9vauD1lFvdyS7hc/zHHYmM4smItt+bPpW1MBq3lM6gdlYrUHZlEj+TFI0UAf0mD6Q9P4ue2vdRt34ZGr8NsMhEWFobeYCBl7BjO797L76176HLmcSwpgR/aO2gINjNDpaRmpAOpauZMrlii+dXDj+uOLC5u30lmQT4jrFbmzplDdl4eRgGq9PFBkiRmzJrFzXlVXGv4lKtjMziYmc7h+BHkizNzSAiSQySc2RMotNupXrWS/R0dhLoOxIWKhZXsXr2GyrIyQsKGyzlbWhpdW7dwIy6WM0LqNd9B9Bj8+cDbi3ExcUh5uTlMLJhEjjOfhoZNbKirw9fXF5WQkJ6ayNH9Ozmwaycb69eTJbx0ZGZw+ZvD/Lh8FbfjrDzRqbikUTLdGEBtaBSSc7KTKVPeIydnAs3NTdTX18tMkuMjOdHewOtHl3jd08W9a98y+/0yFlRVcWXkGO4vX8ud7Cz+VQ3iolbFsoQk2r00SLl5uZSWlYgopbikmEOHDpGYmCSDnj+yDfqu8Oft49y91slPp77g+wWL6E7P5uyKVTwcFghGDZ/r1KwuncpdcwRScXERhUWF2B12rJERtDQ3s7a2VgY8/XULPL8O/V38/dsJ8d3O1ZU13EpzUKVWCt8UvBDsxrq74+Pvz+KSsncMY2NjSbHZSEtPJyYxEZ05EK2obG5RPnt2fMTOxqVER4cRqFZzcIiepoEepHt64jdIQVNGClNDTDIBOcrLZ9LY2Mi8hQsZPykf/VBRYXcPAsxmkiZMwDZ+PEaDXr48zWTgktqXgQMGMNrdDS+R09lTSC52Yk5NwypCsgtG1cuWUr20mrq69fzS1UWqYOoCiB+dKjezr1KJJEA69BremnTUuEs0Z2WQVVDAgAAjfpnZRJTPxV65CMkkpBUJH2s+rGHzli00tbQwROQk4YslKgqbAAyKiMBPtNIfokX6DWrsri6Ii2Pztm2obaPQTiwioGQaMZWLRR9OzOPcubOsWVfLMAHgrlDg6T0If9MQvEUvhlgjsaYk4xdoZpQlBJtGjeTmjj4oGBcZtWM06sIpOD/6hA2dR5ESEhM4feY08XYbCo0fhqHBeAuJXgJUbTTIoK63Xsyzd6SVgcOGC99SCRuZiptgqhqZxohlazh46TKFn+1xWSVx4MABcp1OfMQyUGq1KMTcqnRaPFyVNAQIsGH4W6PRxifiF5eE2VmKymgkQKMhWhQipbwC5+p1TNu17x1gS0ODPAED/VRCSqBg541i8GA8vbzwFBbooqLRJdvQClbG3AICy6YTMzqN8cJff9FK1vBwlixfweETJ98B7mptpXxOBZLCiyGhFvTBQbJkNzc3uThKsRjUjlR0OfmsEDvSOns+c2tWM7+iQvbz+nXR/OL558WLd4B5YkV1iJELDh+OxmwiwDIUpZDqOjOEhhI8LhtTeASBmWPZcfQ4F2/c5HZ3N01NTXR2dvL8+XN6e3vp6elB8vDwkH9ctXIlm7dulVkaIyPRCpkeQrI6Ohbj5FJKF1fz5b69dN+5w5tXr3j69Kkcb968oa+vj/7+fl6+fCkYu2QJQIvFwslTp1C6ChMUhH9cgihAIupxuTiqllDX/hX895Znz57R+/gxT548kcPFzPV+LHIXLlzgf5fCID4hz5MYAAAAAElFTkSuQmCC",width:50,height:50,src:"/blog/static/377036f47947aa665fef662a9a0c92d3/58398/profile-pic.png",srcSet:"/blog/static/377036f47947aa665fef662a9a0c92d3/58398/profile-pic.png 1x,\n/blog/static/377036f47947aa665fef662a9a0c92d3/fd23f/profile-pic.png 1.5x,\n/blog/static/377036f47947aa665fef662a9a0c92d3/fc368/profile-pic.png 2x,\n/blog/static/377036f47947aa665fef662a9a0c92d3/521d9/profile-pic.png 3x"}}},site:{siteMetadata:{author:"Carlos Salas",social:{twitter:"carlossalas"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d333016dab56a3d606da.js.map