(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},30:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),i=a(6),s=a(2),l=a(17),d=a(18),u=(a(28),a(3)),m=a(4),h=a(7),p=a(5),g=a(8),f=(a(30),function(e){var t=e.product,a=e.buyclick;return r.a.createElement("div",{className:"productCard"},r.a.createElement("div",{className:"white prodImg"},r.a.createElement("img",{src:"".concat(t.image).concat(t.name,"palakad"),className:"grow",alt:t.name}),r.a.createElement("div",{className:"f5 f4-ns tl link prodName twrap bg-black-70"},t.name),r.a.createElement("div",{className:"prodDesc bg-black-50"},r.a.createElement("h2",{className:"f5 ph3 dib"},"Rs.".concat(t.price)),r.a.createElement("button",{className:"f6 link ph3 pv2 mb2 dib white buttonSm",value:"".concat(t.name),onClick:a},"Add to Cart"),r.a.createElement("div",{className:"f6 twrap"},t.description.substring(0,50)+".."))))}),y=function(e){var t=e.products,a=e.buyclick;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(f,{key:n,product:t[n],buyclick:a})}))},v=function(e){e.searchKeyword;var t=e.searchchange;return r.a.createElement("header",{className:"bg-black-70 navBar w-100 ph3 pv3 ph4-m ph5-l"},r.a.createElement("nav",{className:"f6 fw6 ttu tracked"},r.a.createElement("a",{className:"link dim white dib mr3",href:"#",title:"Home"},"Home"),r.a.createElement("a",{className:"link dim white dib mr3",href:"#",title:"About"},"About"),r.a.createElement("a",{className:"link dim white dib mr3",href:"#",title:"Store"},"Store"),r.a.createElement("a",{className:"link dim white dib",href:"#",title:"Contact"},"Contact"),r.a.createElement("input",{type:"search",placeholder:"search..",onChange:t})))},b=function(e){var t=e.mycart;return r.a.createElement("header",{className:"bg-black-70 white cartBar w-100"},r.a.createElement("div",{className:"f6 fw6 tracked"},"myCart",r.a.createElement("sup",{className:"tcart"},t.length)))},w=[{id:1,name:"Bluetooth 4.0 Speaker",price:2500,image:"https://picsum.photos/250/350/?",category:["Electronics"],description:"Connect any devices in wireless mode and play anything. Latest bluetooth 4.0 connectivity and AUX cable support."},{id:2,name:"Kerala chips",price:130,image:"https://picsum.photos/250/350/?",category:["Food"],description:"Real kerala chips imported from kerala. Prepared in pure coconut oil."},{name:"Plastic chair",price:570,image:"https://picsum.photos/250/350/?",category:["house hold"],description:"Super strong, high quality plastic chair. Variety of colors to choose from."},{id:4,name:"Mathrubhumi Calendar",price:50,image:"https://picsum.photos/250/350/?",category:["House hold"],description:"Original Mathrbhumi calendar with malayalam months"},{id:5,name:"HP Laptop",price:25e3,image:"https://picsum.photos/250/350/?",category:["Laptop","Electronics"],description:"Perfect combination of hardware to run any of your software"},{id:6,name:"Samsung Galaxy Note 7",price:28e3,image:"https://picsum.photos/250/350/?",category:["Mobile"],description:"Latest galaxy series device"},{id:7,name:"Motorola C6",price:8e3,image:"https://picsum.photos/250/350/?",category:["Mobile"],description:"Budget performance"},{id:8,name:"Bluetooth Speaker",price:2500,image:"https://picsum.photos/250/350/?",category:["Electronics"],description:"Connect any devices in wireless mode and play anything. Latest bluetooth 4.0 connectivity and AUX cable support."},{id:9,name:"LG Smart watch",price:2500,image:"https://picsum.photos/250/350/?",category:["Electronics"],description:"Connect any devices in wireless mode and play anything. Latest bluetooth 4.0 connectivity and AUX cable support."},{id:10,name:"VR Band",price:2500,image:"https://picsum.photos/250/350/?",category:["Electronics"],description:"Connect any devices in wireless mode and play anything. Latest bluetooth 4.0 connectivity and AUX cable support."}],E=function(e){var t=e.products,a=e.categoryclick;return r.a.createElement("ul",{className:"list catList ph3 ph5-ns pv4-ns dib"},t.map(function(e,t){if(!(e.category.length>1))return r.a.createElement("li",{className:"white dib mr2 f6 f5-ns b",key:t,value:"".concat(e.category[0]),onClick:a},"".concat(e.category[0],","));e.category.forEach(function(e,t){return r.a.createElement("li",{className:"white dib mr2 f6 f5-ns b--solid",key:t,value:"".concat(e),onClick:a},"".concat(e,","))})}))},C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),console.log(e,t)}},{key:"render",value:function(){return!0===this.state.hasError?r.a.createElement("div",null,"Oops something went wrong. here is the details."):this.props.children}}]),t}(n.Component),k=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).filteredProducts=[],e.filteredCategory=[],e.categorizedProducts=[],e.myCart=[],e.setCategorizedProducts=function(t){e.categorizedProducts=e.state.products.filter(function(e){return e.category.includes(t)})},e.onCategoryClick=function(t){e.setState({filteredCategory:t.target.value}),e.setCategorizedProducts(e.state.filteredCategory),e.filteredProducts=e.categorizedProducts},e.state={products:w,filteredCategory:"",myCart:""},e}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){if(this.myCart.includes(this.props.item))this.props.item[this.props.item].quantity+=1;else{var e=new Object;e.id=this.props.item,e.quantity=1,this.myCart.push(e)}console.log("this props-",this.props),console.log("cart : ",this.myCart)}},{key:"render",value:function(){var e=this,t=this.props,a=t.searchKeyword,n=t.onSearchChange,o=t.onBuyClick;t.item;return this.filteredProducts=this.state.products.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())}),this.categorizedProducts=this.state.products.filter(function(t){return t.category.includes(e.state.filteredCategory)}),r.a.createElement("div",{className:"bg-light-white tc"},r.a.createElement(C,null,r.a.createElement("div",null,r.a.createElement(v,{searchchange:n})),r.a.createElement("div",{className:"bg-light-blue"},r.a.createElement(E,{products:this.filteredProducts,categoryclick:this.onCategoryClick})),r.a.createElement("div",{className:"container"},r.a.createElement(y,{products:this.filteredProducts,buyclick:o})),r.a.createElement("div",null,r.a.createElement(b,{mycart:this.myCart}))))}}]),t}(n.Component),N=Object(i.b)(function(e){return{searchKeyword:e.searchProdsR.searchKeyword,item:e.addToCartR.item}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onBuyClick:function(t){return e({type:"ADD_TO_CART",payload:t.target.value})}}})(k),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(32);var P={searchKeyword:""},A={item:""},L=Object(l.createLogger)(),S=Object(s.c)({searchProdsR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(console.log(t.type),t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchKeyword:t.payload});default:return e}},addToCartR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_TO_CART":return Object.assign({},e,{item:t.payload});default:return e}}}),R=Object(s.d)(S,Object(s.a)(d.a,L));c.a.render(r.a.createElement(i.a,{store:R},r.a.createElement(N,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/online-store",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/online-store","/service-worker.js");O?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):j(e)})}}()}},[[19,2,1]]]);
//# sourceMappingURL=main.31f5322b.chunk.js.map