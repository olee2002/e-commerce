(this["webpackJsonpe-commerce-app"]=this["webpackJsonpe-commerce-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(85)},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),i=a.n(c),l=a(5),s=a(6),o=a(37),m=a(9),u=a(21),p=a(38),d=a.n(p),g=a(39),b=a.n(g),h=a(3),f="SET_CURRENT_USER",E={currentUser:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(h.a)(Object(h.a)({},e),{},{currentUser:t.payload});default:return e}},y={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART"},k=a(43),O=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(k.a)(e),[Object(h.a)(Object(h.a)({},t),{},{quantity:1})])},N=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{quantity:e.quantity-1}):e}))},j={hidden:!0,cartItems:[]},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.TOGGLE_CART_HIDDEN:return Object(h.a)(Object(h.a)({},e),{},{hidden:!e.hidden});case y.ADD_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:O(e.cartItems,t.payload)});case y.REMOVE_ITEM:return Object(h.a)(Object(h.a)({},e),{},{cartItems:N(e.cartItems,t.payload)});case y.CLEAR_ITEM_FROM_CART:return Object(h.a)(Object(h.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});default:return e}},U={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return t.type,e},I={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type,e},x={key:"root",storage:b.a,whitelist:["cart"]},T=Object(m.c)({user:v,cart:w,directory:C,shop:S}),R=Object(u.a)(x,T),B=[d.a],M=Object(m.d)(R,m.a.apply(void 0,B)),P=Object(u.b)(M),A=(u.b,a(56),a(12)),D=a(2),G=a(4),_=(a(57),a(58),Object(D.h)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=(e.history,e.linkUrl);e.match;return r.a.createElement(l.b,{className:"".concat(n," menu-item"),to:"/e-commerce/shop/".concat(c)},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))}))),q=(a(60),[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"mens"}]);function H(){var e=Object(n.useState)(q),t=Object(A.a)(e,2),a=t[0];t[1];return r.a.createElement("div",{className:"directory-menu"},a.map((function(e){var t=e.title,a=e.imageUrl,n=e.id,c=e.linkUrl,i=e.size;return r.a.createElement(_,{key:n,title:t,imageUrl:a,linkUrl:c,size:i})})))}a(61);function z(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(H,null))}var L=a(17),W=(a(62),function(e){var t=e.item,a=(t.id,t.name),n=t.price,c=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},n)))}),J=(a(63),function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(W,{key:e.id,item:e})}))))}),V=Object(G.a)([function(e){return e.shop}],(function(e){return e.collections})),F=(Object(G.a)([V],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),a(64),function(){var e=function(e){return Object.keys(e).map((function(t){return e[t]}))}(Object(s.c)((function(e){return e.shop.collections})));return r.a.createElement("div",{className:"collections-overview"},e.map((function(e){var t=e.id,a=Object(L.a)(e,["id"]);return r.a.createElement(J,Object.assign({key:t},a))})))}),K=(a(65),function(){var e=Object(D.g)().collectionId,t=Object(s.c)((function(t){return t.shop.collections[e]})),a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(W,{key:e.id,item:e})}))))}),Q=function(e){var t=e.match;return r.a.createElement("div",{className:"shop-page"},t.params&&t.params.collectionId?r.a.createElement(K,null):r.a.createElement(F,null))},Y=a(10),X=a.n(Y),Z=a(14),$=(a(67),function(e){var t=e.handleChange,a=e.label,n=Object(L.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),ee=(a(68),function(e){var t=e.children,a=Object(L.a)(e,["children"]);return r.a.createElement("button",Object.assign({className:"custom-button"},a),t)}),te=a(18),ae=a.n(te);a(69),a(73);ae.a.initializeApp({apiKey:"AIzaSyAeCfS0D7Yn4QimKmoIVU7YkByHhqyPcXg",authDomain:"shopping-cart-2479c.firebaseapp.com",databaseURL:"https://shopping-cart-2479c.firebaseio.com",projectId:"shopping-cart-2479c",storageBucket:"shopping-cart-2479c.appspot.com",messagingSenderId:"630143016029",appId:"1:630143016029:web:16d38f1604356f807ac1b4",measurementId:"G-9S5S9ZKGVG"});var ne=function(){var e=Object(Z.a)(X.a.mark((function e(t,a){var n,r,c,i;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=ce.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=19;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(h.a)({displayName:r,email:c,createdAt:i},a));case 12:e.sent,e.next=19;break;case 15:e.prev=15,e.t0=e.catch(9),console.log("error creating user",e.t0.message),console.log("create uuser got caught");case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,null,[[9,15]])})));return function(t,a){return e.apply(this,arguments)}}(),re=ae.a.auth(),ce=ae.a.firestore(),ie=new ae.a.auth.GoogleAuthProvider;ie.setCustomParameters({prompt:"select_account"});var le=function(){var e=Object(Z.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.signInWithPopup(ie);case 2:return(t=e.sent)&&t.user&&localStorage.setItem("displayName",t.user.displayName),e.abrupt("return",t.user.displayName);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=(ae.a,a(75),function(e){var t=e.getSignInInfo,a=Object(n.useState)(""),c=Object(A.a)(a,2),i=c[0],l=c[1],s=Object(n.useState)(""),o=Object(A.a)(s,2),m=o[0],u=o[1],p=Object(D.f)(),d=function(){var e=Object(Z.a)(X.a.mark((function e(){var a;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,le();case 2:a=e.sent,t(a),p.push("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(e){var t=e.target;t.value;"email"===t.name?l(e.target.value):u(e.target.value)};return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(),p.push("/")}},r.a.createElement($,{name:"email",type:"email",handleChange:g,value:i,label:"email",required:!0}),r.a.createElement($,{name:"password",type:"password",value:m,handleChange:g,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(ee,{type:"submit"}," Sign in "),r.a.createElement(ee,{onClick:d,isGoogleSignIn:!0,type:"submit"},"Sign in with Google"))))}),oe=a(25),me=a(40),ue=a(41),pe=a(44),de=a(42),ge=(a(76),function(e){Object(pe.a)(a,e);var t=Object(de.a)(a);function a(){var e;return Object(me.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(Z.a)(X.a.mark((function t(a){var n,r,c,i,l,s,o;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,i=n.password,l=n.confirmPassword,i===l){t.next=5;break}return alert("passwords don't match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,re.createUserWithEmailAndPassword(c,i);case 8:return s=t.sent,o=s.user,t.next=12,ne(o,{displayName:r});case 12:t.sent,e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),console.error(t.t0);case 19:case"end":return t.stop()}}),t,null,[[5,16]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(oe.a)({},n,r))},e.state={displayName:"",email:"",password:"",confirmPassword:"",userCreated:!1},e}return Object(ue.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have a account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement($,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement($,{type:"email",name:"email",value:a,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement($,{type:"password",name:"password",value:n,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement($,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(ee,{type:"submit"},"SIGN UP")))}}]),a}(r.a.Component)),be=(a(77),function(e){e.getSignInInfo;return r.a.createElement("div",{className:"contact"},r.a.createElement("div",{className:"line"}),r.a.createElement("img",{className:"cat-box",style:{width:600},src:"https://res.allmacwallpaper.com/get/Retina-MacBook-Air-13-inch-wallpapers/Black-Cat-2560x1600/9618-11.jpg"}),r.a.createElement("div",{className:"text"},'This site is currently being built. Any inquiries about the site please contact "Dev O\'lee" @ babylee2002@gmail.com'),r.a.createElement("div",{className:"line"}))}),he=(a(78),function(e){var t=e.getSignInInfo;return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(se,{getSignInInfo:t}),r.a.createElement(ge,null))}),fe=function(){return{type:y.TOGGLE_CART_HIDDEN}},Ee=function(e){return e.cart},ve=Object(G.a)([Ee],(function(e){return e.cartItems})),ye=(Object(G.a)([Ee],(function(e){return e.hidden})),Object(G.a)([ve],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})));Object(G.a)([ve],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)}));function ke(){return(ke=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ne=r.a.createElement("g",null),je=r.a.createElement("g",null),we=r.a.createElement("g",null),Ue=r.a.createElement("g",null),Ce=r.a.createElement("g",null),Ie=r.a.createElement("g",null),Se=r.a.createElement("g",null),xe=r.a.createElement("g",null),Te=r.a.createElement("g",null),Re=r.a.createElement("g",null),Be=r.a.createElement("g",null),Me=r.a.createElement("g",null),Pe=r.a.createElement("g",null),Ae=r.a.createElement("g",null),De=r.a.createElement("g",null),Ge=function(e){var t=e.svgRef,a=e.title,n=Oe(e,["svgRef","title"]);return r.a.createElement("svg",ke({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Ne,je,we,Ue,Ce,Ie,Se,xe,Te,Re,Be,Me,Pe,Ae,De)},_e=r.a.forwardRef((function(e,t){return r.a.createElement(Ge,ke({svgRef:t},e))})),qe=(a.p,a(79),Object(G.b)({itemCount:ye})),He=Object(s.b)(qe,(function(e){return{toggleCartHidden:function(){return e(fe())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(_e,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),ze=(a(80),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",n)))}),Le=(a(81),function(e){var t=e.cartItems,a=e.history,n=e.dispatch,c=e.handleCancel;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-cancel",onClick:c},"X"),r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(ze,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(ee,{onClick:function(){a.push("/checkout"),n(fe())}},"GO TO CHECKOUT"))});function We(){return(We=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Je(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Ve=r.a.createElement("title",null,"Group"),Fe=r.a.createElement("desc",null,"Created with Sketch."),Ke=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Qe=function(e){var t=e.svgRef,a=e.title,n=Je(e,["svgRef","title"]);return r.a.createElement("svg",We({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?Ve:a?r.a.createElement("title",null,a):null,Fe,Ke)},Ye=r.a.forwardRef((function(e,t){return r.a.createElement(Qe,We({svgRef:t},e))})),Xe=(a.p,a(82),function(e){var t=e.displayName,a=e.getSignInInfo,c=(e.hidden,Object(s.c)((function(e){return e.cart.cartItems}))),i=Object(n.useState)(!1),o=Object(A.a)(i,2),m=o[0],u=o[1];return r.a.createElement("div",{className:"header"},r.a.createElement(l.b,{className:"logo-container",to:"/e-commerce"},r.a.createElement(Ye,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement("div",{className:"option",to:"/e-commerce/signin"},t&&"Welcome ".concat(t,"!")),r.a.createElement(l.b,{className:"option",to:"/e-commerce/shop"},"SHOP"),r.a.createElement(l.b,{className:"option",to:"/e-commerce/contact"},"CONTACT"),t?r.a.createElement(l.b,{to:"/e-commerce/signin",onClick:function(){localStorage.clear(),a(""),re.signOut(),alert("Signing you out!")}},"SIGN-OUT"):r.a.createElement(l.b,{className:"option",to:"/e-commerce/signin"},"SIGN-IN"),r.a.createElement(l.b,{className:"option",to:"/e-commerce/checkout",onMouseOver:function(){return c&&0===c.length&&u(!0)}},r.a.createElement(He,null)),m?r.a.createElement(Le,{cartItems:c,handleCancel:function(){u(!1)}}):null))}),Ze=(a(83),function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,s=t.price,o=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},o),r.a.createElement("div",{className:"arrow",onClick:function(){return n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},s),r.a.createElement("div",{className:"remove-button",onClick:function(){return a(t)}},"\u2715"))}),$e=(a(84),function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t?t.length>0&&t.map((function(e){return r.a.createElement(Ze,{key:e.id,cartItem:e})})):r.a.createElement("div",{style:{marginTop:20}},"Current No Item is selected. Please go back to the shop page!"),r.a.createElement("div",{className:"total"},"TOTAL: $",a))}),et=Object(G.a)([function(e){return e.user}],(function(e){return e.currentUser}));var tt=Object(G.b)({currentUser:et}),at=Object(s.b)(tt,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))((function(){var e=Object(n.useState)(""),t=Object(A.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),c=Object(A.a)(a,2),i=c[0],l=c[1];Object(n.useEffect)((function(){re.onAuthStateChanged((function(e){e&&l(e.displayName)}))}));var s=function(e){l(e)};return Object(n.useEffect)((function(){s(i)}),[i]),r.a.createElement("div",null,r.a.createElement(Xe,{displayName:i,getSignInInfo:s}),r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/",component:z}),r.a.createElement(D.a,{exact:!0,path:"/e-commerce",component:z}),r.a.createElement(D.a,{exact:!0,path:"/e-commerce/shop",component:Q}),r.a.createElement(D.a,{exact:!0,path:"/e-commerce/shop/:collectionId",component:Q}),r.a.createElement(D.a,{exact:!0,path:"/e-commerce/signin",render:function(){return r.a.createElement(he,{getSignInInfo:s})}}),r.a.createElement(D.a,{exact:!0,path:"/e-commerce/contact",component:be}),r.a.createElement(D.a,{exact:!0,path:"/e-commerce/checkout",component:$e})))}));i.a.render(r.a.createElement(s.a,{store:M},r.a.createElement(l.a,null,r.a.createElement(o.a,{persistor:P},r.a.createElement(at,null)))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.913a10cc.chunk.js.map