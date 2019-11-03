(this["webpackJsonpamerican-airlines"]=this["webpackJsonpamerican-airlines"]||[]).push([[0],{55:function(e,t,a){e.exports=a.p+"static/media/738.57f5c74e.png"},56:function(e,t,a){e.exports=a.p+"static/media/321.3b85b920.png"},57:function(e,t,a){e.exports=a.p+"static/media/757.3f64ecc5.png"},73:function(e,t,a){e.exports=a(85)},78:function(e,t,a){},79:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),o=(a(78),a(79),a(46)),c=a.n(o),s=a(54),u=a(15),h=a(12),m=a(16),g=a(17),d=a(18),f=a(13),p=a(127),b=a(59),E=a(128),v=a(120),y=a(121),C=a(125),w=a(124),O=a(122),S=a(123),D=a(119),k=a(115),j=a(130),N=a(55),F=a.n(N),L=a(56),x=a.n(L),M=a(57),B=a.n(M),V=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).aircraftMap={738:F.a,321:x.a,757:B.a},a.initialState={open:!1,image:null},a.handleClickOpen=function(){a.setState({open:!0}),a.setState({image:a.aircraftMap[a.props.aircraft]})},a.handleClose=function(){a.setState({open:!1}),a.setState({image:null})},a.state=a.initialState,a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k.a,{onClick:this.handleClickOpen},i.a.createElement("b",null,this.props.aircraft)),i.a.createElement(j.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement("img",{src:this.state.image,alt:this.props.aircraft})))}}]),t}(n.Component),W=Object(v.a)({root:{width:"75%",overflowX:"auto",margin:"auto"},table:{minWidth:650}}),A=function(e){var t=e.flights,a=W();return i.a.createElement(D.a,{className:a.root},i.a.createElement(y.a,{className:a.table,"aria-label":"simple table"},i.a.createElement(O.a,null,i.a.createElement(S.a,null,i.a.createElement(w.a,null,"Flight #"),i.a.createElement(w.a,{align:"right"},"Origin"),i.a.createElement(w.a,{align:"right"},"Destination"),i.a.createElement(w.a,{align:"right"},"Distance (miles)"),i.a.createElement(w.a,{align:"right"},"Duration"),i.a.createElement(w.a,{align:"right"},"Aircraft"))),i.a.createElement(C.a,null,t.map((function(e){return i.a.createElement(S.a,{key:e.flightNumber+e.origin.city+e.destination.city+e.distance+e.duration.hours+e.duration.minutes+e.aircraft.model},i.a.createElement(w.a,{component:"th",scope:"row"},e.flightNumber),i.a.createElement(w.a,{align:"right"},"".concat(e.origin.city," (").concat(e.origin.code,")")),i.a.createElement(w.a,{align:"right"},"".concat(e.destination.city," (").concat(e.destination.code,")")),i.a.createElement(w.a,{align:"right"},e.distance),i.a.createElement(w.a,{align:"right"},"".concat(e.duration.hours,"h ").concat(e.duration.minutes,"m")),i.a.createElement(w.a,{align:"right"},i.a.createElement(V,{aircraft:e.aircraft.model})))})))))},J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).initialState={date:new Date,flights:[],searchFlightNum:"",searchOrigin:"",searchDestination:""},a.getFormattedDate=function(e){return e.getFullYear()+"-"+(1+e.getMonth()).toString().padStart(2,"0")+"-"+e.getDate().toString().padStart(2,"0")},a.handleDateChange=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://flight-info.herokuapp.com/flights?date=".concat(a.getFormattedDate(t)));case 2:return n=e.sent,e.next=5,n.json();case 5:i=e.sent,a.setState({date:t}),a.setState({flights:i});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleFlightNum=function(e){a.setState({searchFlightNum:e.target.value})},a.handleOrigin=function(e){a.setState({searchOrigin:e.target.value})},a.handleDestination=function(e){a.setState({searchDestination:e.target.value})},a.state=a.initialState,a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.handleDateChange(this.state.date)}},{key:"render",value:function(){var e=this.state,t=e.date,a=e.flights,n=e.searchFlightNum,r=e.searchOrigin,l=e.searchDestination,o=a.filter((function(e){return e.flightNumber.includes(n)&&(e.origin.city.toLowerCase().includes(r.toLowerCase())||e.origin.code.toLowerCase().includes(r.toLowerCase()))&&(e.destination.city.toLowerCase().includes(l.toLowerCase())||e.destination.code.toLowerCase().includes(l.toLowerCase()))}));return i.a.createElement("div",null,i.a.createElement(f.a,{utils:b.a},i.a.createElement(p.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:"Pick a Date",value:t,onChange:this.handleDateChange,KeyboardButtonProps:{"aria-label":"change date"}})),i.a.createElement("div",null,i.a.createElement(E.a,{id:"outlined-search",label:"Search by Flight #",type:"search",name:"flightNum",defaultValue:"",onChange:this.handleFlightNum,style:{margin:10},margin:"normal",variant:"outlined"}),i.a.createElement(E.a,{id:"outlined-search",label:"Search by Origin",type:"search",name:"origin",defaultValue:"",onChange:this.handleOrigin,style:{margin:10},margin:"normal",variant:"outlined"}),i.a.createElement(E.a,{id:"outlined-search",label:"Search by Destination",type:"search",name:"destination",defaultValue:"",onChange:this.handleDestination,style:{margin:10},margin:"normal",variant:"outlined"})),o.length?i.a.createElement(A,{flights:o}):i.a.createElement("h1",null,"No flights found!"))}}]),t}(n.Component);var P=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[73,1,2]]]);
//# sourceMappingURL=main.45e366fa.chunk.js.map