(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/logo.3150a290.png"},204:function(e,t,a){e.exports=a(412)},211:function(e,t,a){},213:function(e,t,a){},392:function(e,t,a){},411:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),o=a.n(l),r=(a(209),a(210),a(211),a(212),a(29)),s=a(30),c=a(33),p=a(31),u=a(34),m=a(88),d=a(60),h=a(418),g=a(426),f=a(10),b=(a(213),a(103)),E=a.n(b),y=a(421),v=a(89),S=a(74),P=a(41),k=a(47),x=a(414),C=a(429),w=a(423),T=a(419),j=a(420),I=a(424),O=a(198),B=a(104),A=a.n(B),N="https://petsnic.herokuapp.com",D=Object(B.create)({baseURL:N}),z=a(425),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t="";if(null!=e)switch(e){case 404:t="El contenido seleccionado no se ha encontrado, puede que se haya borrado o no exista.";break;case 500:t="El servidor tuvo un problema para realizar la petici\xf3n, por favor intente nuevamente en otro momento.";break;case 400:t="Hubo un error con los datos que envi\xf3, por favor revise que los haya ingresado correctamente";break;default:t="Hubo un problema para ejecutar la funci\xf3n, el sistema puede que no este disponible en estos momentos."}null!==e&&401!==e?(z.a.config({placement:"bottomRight",bottom:50,duration:5}),z.a.error({message:"Error",description:t})):(null!==localStorage.getItem("auth_token")&&localStorage.clear(),z.a.config({placement:"bottomRight",bottom:50,duration:5}),z.a.error({message:"error",description:"Hubo un error validando su sesion, inicie sesi\xf3n nuevamente"}))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t="";t=null!=e?"Se ha ingresado la "+e+" correctamente.":"Se ha realizado la operaci\xf3n correctamente.",z.a.config({placement:"bottomRight",bottom:50,duration:5}),z.a.success({message:"Notificaci\xf3n",description:t})},F=w.a.TextArea,M=v.a.Option,q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){if(!e){a.setState({sending:!0});var n={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("auth_token")}};D.post("api/publication",t,n).then(function(e){200===e.status?a.state.fileList.length>0?a.handleSubmitPhoto(e.data):(a.props.form.resetFields(),_("publicaci\xf3n"),a.props.onSubmitClick(),a.setState({fileList:[]})):L(e.status)}).catch(function(e){null!=e.response.status?L(e.response.status):L()}),a.setState({sending:!1})}})},a.handlePreview=function(e){a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},a.handleChange=function(e){var t=e.fileList;a.setState({fileList:t})},a.handleCancel=function(){return a.setState({previewVisible:!1})},a.handleSubmitPhoto=function(e){var t={headers:{"Content-Type":"multipart/form-data",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("auth_token")}},n=new FormData;a.state.fileList.forEach(function(e){n.append("files",e.originFileObj)}),D.post("api/publication/"+e+"/picture",n,t).then(function(e){200===e.status?(a.props.form.resetFields(),_("publicaci\xf3n"),a.props.onSubmitClick(),a.setState({fileList:[]})):L(e.status)}).catch(function(e){L(e.response.status)})},a.state={previewVisible:!1,previewImage:"",fileList:[],sending:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.form.validateFields()}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,a=t.previewVisible,n=t.previewImage,l=t.fileList,o=i.a.createElement("div",null,i.a.createElement(f.a,{type:"plus"}),i.a.createElement("div",{className:"ant-upload-text"},"Upload"));return i.a.createElement(T.a,{onSubmit:this.handleSubmit},i.a.createElement(S.a,null,i.a.createElement(P.a,{span:24},i.a.createElement(T.a.Item,{style:{width:"95%",left:"50%",transform:"translateX(-50%)"},required:"true"},e("Description",{rules:[{required:!1,message:"Escribe el contenido!"}]})(i.a.createElement(F,{rows:4,name:"Description"})))),!1===this.props.compress&&i.a.createElement("div",{id:"compressElements"},i.a.createElement(P.a,{lg:12,span:24},i.a.createElement(T.a.Item,{required:"true",label:"Tipo de mascota",style:{width:"90%",left:"50%",transform:"translateX(-50%)"}},e("Category",{rules:[{required:!1,message:"Escribe el contenido!"}]})(i.a.createElement(v.a,null,i.a.createElement(M,{value:"Perros"},"Perros"),i.a.createElement(M,{value:"Gatos"},"Gatos"),i.a.createElement(M,{value:"Caballos"},"Caballos"))))),i.a.createElement(P.a,{lg:12,span:24},i.a.createElement(T.a.Item,{required:"true",label:"Tipo de Publicaci\xf3n",style:{width:"90%",left:"50%",transform:"translateX(-50%)"}},e("TypePublication",{rules:[{required:!1,message:"Escribe el contenido!"}]})(i.a.createElement(v.a,null,i.a.createElement(M,{value:"Desaparecido"},"Desaparecidos"),i.a.createElement(M,{value:"Donaci\xf3n"},"Donaci\xf3n"))))),i.a.createElement(P.a,{span:24},i.a.createElement(T.a.Item,{required:"false",label:"Fotograf\xedas",style:{width:"95%",left:"50%",transform:"translateX(-50%)"}},e("Pictures",{rules:[{required:!1,message:"Escribe el contenido!"}]})(i.a.createElement("div",{className:"clearfix"},i.a.createElement(j.a,{beforeUpload:function(){return!1},listType:"picture-card",fileList:l,onPreview:this.handlePreview,onChange:this.handleChange},l.length>=3?null:o),i.a.createElement(I.a,{visible:a,footer:null,onCancel:this.handleCancel},i.a.createElement("img",{alt:"example",style:{width:"100%"},src:n})))))),i.a.createElement(P.a,{span:12},i.a.createElement(T.a.Item,{style:{width:"95%",left:"50%",transform:"translateX(-50%)"}},i.a.createElement(k.a,{htmlType:"submit",type:"primary"},"Submit"))),!0===this.state.sending&&i.a.createElement(P.a,{span:12},i.a.createElement(O.a,{style:{width:"95%",left:"50%",transform:"translateX(-50%)"}})))))}}]),t}(i.a.Component),U=T.a.create({name:"insert_box_pets_lost"})(q),R=a(86),H=a.n(R),V=function(e){null===localStorage.getItem("auth_token")&&e.history.push("/")},X=(a(392),y.a.Meta),G=v.a.Option,J=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),a.props.form.validateFields(function(e,t){e||console.log("Received values of form: ",t)})},a.fillData=function(){a.setState({loadingBtnSearch:!0});var e=!1;e="Pendiente"!==a.state.StatusPub;var t=localStorage.getItem("auth_token"),n={params:{typePublication:a.state.TypePub,status:e,categoryName:a.state.TypePet},headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+t}};D.get("api/publication",n).then(function(e){if(console.log(e),200===e.status){var t=e.data,n=JSON.parse(e.headers.pagingheader);a.setState({ListPets:[]},function(){var e=a.state.ListPets;t.forEach(function(t){e.push(t)}),a.setState({ListPets:e,loadingBtnSearch:!1})}),a.setState({Paging:n},function(){"Yes"===a.state.Paging.nextPage?a.setState({disabledBtn:!1,loadMessage:"Hay m\xe1s publicaciones"}):a.setState({disabledBtn:!0,loadMessage:"No hay m\xe1s publicaciones disponibles"})})}else L(e.status)}).catch(function(e){a.setState({loadingBtnSearch:!1}),L(e.response.status)})},a.updatePaging=function(){if("Yes"===a.state.Paging.nextPage){var e=!1;e="Pendiente"!==a.state.StatusPub,a.setState({loadingBtn:!0});var t=a.state.Paging.currentPage+1,n=localStorage.getItem("auth_token"),i={params:{pageNumber:t,typePublication:a.state.TypePub,status:e,categoryName:a.state.TypePet},headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+n}};D.get("api/publication",i).then(function(e){if(200===e.status){var t=e.data,n=JSON.parse(e.headers.pagingheader),i=a.state.ListPets;t.forEach(function(e){i.push(e)}),a.setState({ListPets:i,loadingBtn:!1}),a.setState({Paging:n},function(){console.log(a.state.Paging),"Yes"===a.state.Paging.nextPage?a.setState({disabledBtn:!1,loadMessage:"Hay m\xe1s publicaciones"}):a.setState({disabledBtn:!0,loadMessage:"No hay m\xe1s publicaciones disponibles"})})}}).catch(function(e){alert(e)})}else console.log("This is the last page")},a.loadBtn=function(){a.updatePaging()},a.searchBtn=function(){a.fillData()},a.handleTypePetChange=function(e){a.setState({TypePet:e})},a.handleStatePubChange=function(e){a.setState({StatusPub:e})},a.handleTypePubChange=function(e){a.setState({TypePub:e})},a.handleClickPublication=function(e){a.props.history.push("publicaciones/"+e+"/detalle")},a.compressBtn=function(){!0===a.state.compressed?a.setState({compressed:!1}):a.setState({compressed:!0})},a.state={ListPets:[],loadMessage:"No hay m\xe1s publicaciones disponibles",loadingBtn:!1,loadingBtnSearch:!1,disabledBtn:!0,Paging:{},TypePet:"",TypePub:"",StatusPub:"Pendiente",compressed:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){V(this.props),this.fillData()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"container",id:"PetsLostPage"},i.a.createElement(S.a,null,i.a.createElement(P.a,{lg:14,span:24},i.a.createElement("div",{id:"cardtitle"},i.a.createElement(y.a,{type:"inner",title:"Agregar una publicaci\xf3n",extra:i.a.createElement(k.a,{onClick:this.compressBtn,type:"primary"},i.a.createElement("div",null," ",i.a.createElement(f.a,{style:{marginRight:"5px"},type:"message"}),!1===this.state.compressed&&i.a.createElement("div",{style:{display:"inline"}},"Ocultar"),!0===this.state.compressed&&i.a.createElement("div",{style:{display:"inline"}},"Mostrar")))},i.a.createElement("div",{style:{height:"30px"}},i.a.createElement(U,{compress:this.state.compressed,onSubmitClick:this.fillData}))))),i.a.createElement(P.a,{lg:10,span:24},i.a.createElement("div",{id:"searching",style:{marginLeft:"66px",background:"white"}},i.a.createElement(y.a,{type:"inner",title:"Filtro de b\xfasqueda"},i.a.createElement(S.a,null,i.a.createElement(P.a,{span:24},i.a.createElement(P.a,{span:12},"Tipo de mascota"),i.a.createElement(P.a,{span:12},i.a.createElement(v.a,{size:"small",style:{float:"right"},defaultValue:"Todos",onChange:this.handleTypePetChange},i.a.createElement(G,{value:""},"Todos"),i.a.createElement(G,{value:"Perros"},"Perros"),i.a.createElement(G,{value:"Gatos"},"Gatos"),i.a.createElement(G,{value:"Caballos"},"Caballos")))),i.a.createElement(P.a,{style:{marginTop:"30px"},span:12},"Tipo de Publicaci\xf3n"),i.a.createElement(P.a,{style:{float:"right",marginTop:"30px"},span:12},i.a.createElement(v.a,{style:{float:"right"},size:"small",defaultValue:"Ambos",onChange:this.handleTypePubChange},i.a.createElement(G,{value:""},"Ambos"),i.a.createElement(G,{value:"Desaparecido"},"Desaparecidos"),i.a.createElement(G,{value:"Donaciones"},"Donaciones"))),i.a.createElement(P.a,{style:{marginTop:"30px"},span:12},"Estado"),i.a.createElement(P.a,{style:{marginTop:"30px"},span:12},i.a.createElement(v.a,{style:{float:"right"},size:"small",defaultValue:"Pendiente",onChange:this.handleStatePubChange},i.a.createElement(G,{value:"Completado"},"Completado"),i.a.createElement(G,{value:"Pendiente"},"Pendiente"))),i.a.createElement(P.a,{style:{textAlign:"center",marginTop:"15px"},span:24},i.a.createElement(k.a,{type:"primary",loading:this.state.loadingBtnSearch,onClick:this.searchBtn},"Buscar")))))),i.a.createElement(P.a,{id:"cardscol",lg:14,span:24},i.a.createElement("div",{id:"cardsPetsLost"},this.state.ListPets.map(function(t){return i.a.createElement(y.a,{style:{marginTop:"30px"},key:t.publicationId,actions:[i.a.createElement(f.a,{type:"environment"}),i.a.createElement(f.a,{onClick:function(){return e.handleClickPublication(t.publicationId)},type:"message"}),i.a.createElement(f.a,{type:"share-alt"})]},i.a.createElement(X,{key:"card-"+t.publicationId,avatar:i.a.createElement(x.a,{src:t.pictureUrl}),title:[t.firstName," ",t.lastName,i.a.createElement("div",{key:"div-"+t.publicationId,style:{float:"right"}},"  ",i.a.createElement(H.a,{locale:"es",fromNow:!0},t.datePublish)," ")],description:t.description}),null!==t.path&&i.a.createElement("img",{onClick:function(){return e.handleClickPublication(t.publicationId)},style:{width:"100%",marginTop:"30px"},alt:"img-publication",src:N+"/images/"+t.path}))})),i.a.createElement("div",{style:{marginTop:"30px"},id:"cardEnd"},i.a.createElement(y.a,null,i.a.createElement("div",null,this.state.loadMessage,i.a.createElement(k.a,{style:{float:"right"},disabled:this.state.disabledBtn,size:"small",type:"primary",loading:this.state.loadingBtn,onClick:this.loadBtn},"Cargar"))))),i.a.createElement(C.a,null)))}}]),t}(i.a.Component),W=a(415),Y=a(422),K=a(416),$=y.a.Meta,Q=w.a.TextArea,Z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.props.match.params.id;a.props.form.validateFields(function(e,n){var i={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("auth_token")}};D.post("api/publication/"+t+"/comment",n,i).then(function(e){200===e.status&&(a.props.form.resetFields(),a.fillComments())}).catch(function(e){null!=e.response.status?L(e.response.status):L()})})},a.handleChange=function(e){a.setState({value:e.target.value})},a.fillComments=function(){var e=a.props.match.params.id,t={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("auth_token")}};D.get("api/publication/"+e+"/comment",t).then(function(e){200===e.status?a.setState({comments:e.data}):L(e.status)}).catch(function(e){L(e.response.status)})},a.fillData=function(){var e=a.props.match.params.id,t={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+localStorage.getItem("auth_token")}};D.get("api/publication/"+e,t).then(function(e){200===e.status&&(e.data.pictures.length>0&&a.setState({pictures:e.data.pictures}),a.setState({publication:e.data}),a.fillComments())}).catch(function(e){L(e.response.status)})},a.handleNext=function(){a.carousel.next()},a.handlePrevious=function(){a.carousel.prev()},a.state={publication:{},comments:[],pictures:[]},a.carousel=i.a.createRef(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){V(this.props),this.props.form.validateFields(),this.fillData()}},{key:"render",value:function(){var e=this,t=this.props.form.getFieldDecorator;return i.a.createElement("div",{className:"containerdetail"},null!==this.state.publication&&i.a.createElement(S.a,null,i.a.createElement(P.a,{span:24},i.a.createElement("div",{id:"cardcontent"},i.a.createElement(y.a,null,null!==this.state.publication&&i.a.createElement($,{key:"card-"+this.state.publication.publicationId,avatar:i.a.createElement(x.a,{src:this.state.publication.pictureUrl}),title:[this.state.publication.firstName," ",this.state.publication.lastName,i.a.createElement("div",{key:"div-"+this.state.publication.publicationId,style:{float:"right"}}," ",i.a.createElement(H.a,{locale:"es",fromNow:!0},this.state.publication.datePublish),"  ")],description:this.state.publication.description}),i.a.createElement("div",{style:{marginTop:"24px"}},i.a.createElement(W.a,{ref:function(t){return e.carousel=t},autoplay:!0},this.state.pictures.map(function(e){return i.a.createElement("div",null,i.a.createElement("img",{alt:"imgPublication",src:N+"/images/"+e.path}))})),i.a.createElement("div",{style:{marginTop:"24px",textAlign:"center"}},i.a.createElement(k.a.Group,{style:{display:"inline-block"},size:"large"},i.a.createElement(k.a,{onClick:this.handlePrevious,type:"primary"},i.a.createElement(f.a,{type:"left"}),"Retroceder"),i.a.createElement(k.a,{onClick:this.handleNext,type:"primary"},"Siguiente",i.a.createElement(f.a,{type:"right"})))))))),i.a.createElement(P.a,{style:{marginTop:"24px"},span:24},i.a.createElement("div",{id:"cardcomments"},i.a.createElement(y.a,null,i.a.createElement("div",{className:"contentcardcomment"},i.a.createElement(T.a,{onSubmit:this.handleSubmit},i.a.createElement(T.a.Item,{required:"true"},t("Message",{rules:[{required:!1,message:"Escribe el comentario!"}]})(i.a.createElement(Q,{rows:4,name:"Comment"}))),i.a.createElement(T.a.Item,null,i.a.createElement(k.a,{htmlType:"submit",style:{float:"right"},onClick:this.handleSubmit,type:"primary"},"Agregar un comentario")))),i.a.createElement(Y.a,{className:"comment-list",itemLayout:"horizontal",dataSource:this.state.comments,renderItem:function(e){return i.a.createElement(K.a,{key:e.commentId,author:e.firstName,avatar:e.pictureUrl,content:e.message,datetime:i.a.createElement(H.a,{locale:"es",fromNow:!0},e.dateComment)})}}))))))}}]),t}(i.a.Component),ee=T.a.create({name:"insert_comment_pets_detail"})(Z),te=a(430),ae=a(427),ne=a(417),ie=a(428),le=a(23),oe=a.n(le);delete oe.a.Icon.Default.prototype._getIconUrl,oe.a.Icon.Default.mergeOptions({iconRetinaUrl:a(406),iconUrl:a(407),shadowUrl:a(408)});var re=function(e){var t=[12.136389,-86.251389];return n.createElement("div",{className:"container"},n.createElement(te.a,{center:t,zoom:13},n.createElement(ae.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),n.createElement(ne.a,{position:t},n.createElement(ie.a,null,"A pretty CSS3 popup. ",n.createElement("br",null)," Easily customizable."))))},se=h.a.Header,ce=h.a.Content,pe=h.a.Footer,ue=h.a.Sider,me=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={current:"mail",collapsed:!1,paddingContent:"216px",mobile:!1},a.toggle=function(){!0===a.state.mobile&&a.setState({collapsed:!a.state.collapsed})},a.handleClick=function(e){a.setState({current:e.key})},a.handleBreakPoint=function(e){!0===e?(!1===a.state.collapsed&&a.setState({collapsed:!0}),a.setState({mobile:!0})):(!0===a.state.collapsed&&a.setState({collapsed:!1}),a.setState({mobile:!1}))},a.handleLogout=function(){localStorage.clear(),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(h.a,null,i.a.createElement(h.a,null,i.a.createElement(ue,{breakpoint:"lg",collapsedWidth:"0",trigger:null,onBreakpoint:function(t){e.handleBreakPoint(t)},theme:"dark",width:"200",collapsed:this.state.collapsed,style:{overflow:"auto",height:"100vh",zIndex:"4",position:"fixed",top:"64px",left:0}},i.a.createElement("div",{style:{height:"auto",padding:"4px",background:"#388e3c",textAlign:"center"},className:"logo"},i.a.createElement("img",{alt:"logo",width:"auto",height:"110px",style:{margin:"10px"},src:E.a}),i.a.createElement("h1",{style:{fontSize:"1.7em",color:"white"}}," Pets Nicaragua")),i.a.createElement(g.b,{theme:"dark",style:{marginTop:"24px"},mode:"inline",defaultSelectedKeys:["1"]},i.a.createElement(g.b.Item,{key:"1"},i.a.createElement(f.a,{type:"exclamation"}),i.a.createElement("span",{className:"nav-text"},"Publicaciones"),i.a.createElement(m.b,{to:"/user/publicaciones"},"Publicaciones")),i.a.createElement(g.b.Item,{key:"2"},i.a.createElement(f.a,{type:"smile"}),i.a.createElement("span",{className:"nav-text"},"Mapa"),i.a.createElement(m.b,{to:"/user/map"},"Mapa")),"/user"===this.props.location.pathname&&i.a.createElement("h2",null,i.a.createElement(d.a,{to:"/user/publicaciones"})))),i.a.createElement(h.a,{id:"mainlayout"},i.a.createElement(se,{id:"header",style:{zIndex:"4",background:"#66BB6A",padding:0,width:"100%",lineHeight:0,position:"fixed"}},i.a.createElement(g.b,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],style:{lineHeight:"64px",background:"#66BB6A"}},i.a.createElement(g.b.Item,{id:"logoName",style:{fontSize:"1.2em",width:"200px"},onClick:this.toggle,key:"1"},i.a.createElement(f.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold"}),"Pepega clap"),i.a.createElement(g.b.Item,{onClick:this.handleLogout,style:{fontSize:"1.2em",float:"right"},key:"2"},i.a.createElement(f.a,{type:"user"}),"Cerrar sesion"))),i.a.createElement(ce,{id:"mainContent",style:{marginLeft:"200px",marginTop:"116px",marginRight:"16px"}},i.a.createElement("div",{style:{minHeight:760}},i.a.createElement(d.b,{exact:!0,path:"/user/publicaciones",component:J}),i.a.createElement(d.b,{path:"/user/map",component:re}),i.a.createElement(d.b,{exact:!0,path:"/user/publicaciones/:id/detalle/",component:ee}))),i.a.createElement(pe,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ant UED"))))}}]),t}(i.a.Component),de=a(202),he=a.n(de),ge=(a(411),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={logged:!1,loading:!1},a.componentDidMount=function(){null!=localStorage.getItem("auth_token")&&(a.setState({logged:!0}),a.props.history.push("/user/publicaciones"))},a.responseFacebook=function(e){var t={AccessToken:e.accessToken};null!=e&&(a.setState({loading:!0}),A.a.post(N+"/api/externalauth/facebook",t).then(function(e){200===e.status?(localStorage.setItem("id",e.data.id),localStorage.setItem("auth_token",e.data.auth_token),localStorage.setItem("expires_in",e.data.expires_in),a.setState({loading:!1}),a.props.history.push("/user/publicaciones")):(a.setState({loading:!1}),alert("error logeando"))}).catch(function(e){a.setState({loading:!1}),console.log(e)}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(){!0===this.state.logged&&this.setState({logged:!1})}},{key:"render",value:function(){var e=i.a.createElement(f.a,{type:"loading",style:{fontSize:30,color:"white"},spin:!0});return i.a.createElement("div",null,i.a.createElement("div",{style:{textAlign:"center",left:"50%",top:"10%",transform:"translate(-50%, -10%) ",position:"fixed"}},i.a.createElement("img",{alt:"logo",width:"auto",height:"140px",style:{margin:"10px"},src:E.a})),i.a.createElement(y.a,{title:"Inicia sesi\xf3n para acceder",bordered:!1,style:{textAlign:"center",left:"50%",top:"50%",transform:"translate(-50%, -10%) ",position:"fixed"}},i.a.createElement(he.a,{appId:"802990273399180",autoLoad:!1,fields:"name,email,picture",callback:this.responseFacebook})),!0===this.state.loading&&i.a.createElement(O.a,{indicator:e,size:"large",style:{textAlign:"center",left:"50%",top:"80%",transform:"translate(-50%, -10%) ",position:"fixed"}}))}}]),t}(i.a.Component)),fe=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(m.a,{basename:"/mascotas"},i.a.createElement("div",null,i.a.createElement(d.b,{exact:!0,path:"/",component:ge}),i.a.createElement(d.b,{path:"/user",component:me})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[204,1,2]]]);
//# sourceMappingURL=main.8b2df47a.chunk.js.map