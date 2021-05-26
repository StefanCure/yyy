!function(a){"use strict";function d(b){var c=b.data;b.isDefaultPrevented()||(b.preventDefault(),a(b.target).ajaxSubmit(c))}function e(b){var c=b.target,d=a(c);if(!d.is("[type=submit],[type=image]")){var e=d.closest("[type=submit]");if(0===e.length)return;c=e[0]}var f=this;if(f.clk=c,"image"==c.type)if(void 0!==b.offsetX)f.clk_x=b.offsetX,f.clk_y=b.offsetY;else if("function"==typeof a.fn.offset){var g=d.offset();f.clk_x=b.pageX-g.left,f.clk_y=b.pageY-g.top}else f.clk_x=b.pageX-c.offsetLeft,f.clk_y=b.pageY-c.offsetTop;setTimeout(function(){f.clk=f.clk_x=f.clk_y=null},100)}function f(){if(a.fn.ajaxSubmit.debug){var b="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(b):window.opera&&window.opera.postError&&window.opera.postError(b)}}var b={};b.fileapi=void 0!==a("<input type='file'/>").get(0).files,b.formdata=void 0!==window.FormData;var c=!!a.fn.prop;a.fn.attr2=function(){if(!c)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"==typeof a?a:this.attr.apply(this,arguments)},a.fn.ajaxSubmit=function(d){function B(b){var g,h,c=a.param(b,d.traditional).split("&"),e=c.length,f=[];for(g=0;e>g;g++)c[g]=c[g].replace(/\+/g," "),h=c[g].split("="),f.push([decodeURIComponent(h[0]),decodeURIComponent(h[1])]);return f}function C(b){for(var c=new FormData,f=0;f<b.length;f++)c.append(b[f].name,b[f].value);if(d.extraData){var g=B(d.extraData);for(f=0;f<g.length;f++)g[f]&&c.append(g[f][0],g[f][1])}d.data=null;var h=a.extend(!0,{},a.ajaxSettings,d,{contentType:!1,processData:!1,cache:!1,type:e||"POST"});d.uploadProgress&&(h.xhr=function(){var b=a.ajaxSettings.xhr();return b.upload&&b.upload.addEventListener("progress",function(a){var b=0,c=a.loaded||a.position,e=a.total;a.lengthComputable&&(b=Math.ceil(100*(c/e))),d.uploadProgress(a,c,e,b)},!1),b}),h.data=null;var i=h.beforeSend;return h.beforeSend=function(a,b){b.data=d.formData?d.formData:c,i&&i.call(this,a,b)},a.ajax(h)}function D(b){function y(a){var b=null;try{a.contentWindow&&(b=a.contentWindow.document)}catch(c){f("cannot get iframe.contentWindow document: "+c)}if(b)return b;try{b=a.contentDocument?a.contentDocument:a.document}catch(c){f("cannot get iframe.contentDocument: "+c),b=a.document}return b}function B(){function d(){try{var a=y(p).readyState;f("state = "+a),a&&"uninitialized"==a.toLowerCase()&&setTimeout(d,50)}catch(b){f("Server abort: ",b," (",b.name,")"),G(x),u&&clearTimeout(u),u=void 0}}var b=i.attr2("target"),c=i.attr2("action");g.setAttribute("target",n),(!e||/post/i.test(e))&&g.setAttribute("method","POST"),c!=k.url&&g.setAttribute("action",k.url),k.skipEncodingOverride||e&&!/post/i.test(e)||i.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),k.timeout&&(u=setTimeout(function(){t=!0,G(w)},k.timeout));var h=[];try{if(k.extraData)for(var j in k.extraData)k.extraData.hasOwnProperty(j)&&(a.isPlainObject(k.extraData[j])&&k.extraData[j].hasOwnProperty("name")&&k.extraData[j].hasOwnProperty("value")?h.push(a('<input type="hidden" name="'+k.extraData[j].name+'">').val(k.extraData[j].value).appendTo(g)[0]):h.push(a('<input type="hidden" name="'+j+'">').val(k.extraData[j]).appendTo(g)[0]));k.iframeTarget||o.appendTo("body"),p.attachEvent?p.attachEvent("onload",G):p.addEventListener("load",G,!1),setTimeout(d,15);try{g.submit()}catch(l){var m=document.createElement("form").submit;m.apply(g)}}finally{g.setAttribute("action",c),b?g.setAttribute("target",b):i.removeAttr("target"),a(h).remove()}}function G(b){if(!q.aborted&&!F){if(D=y(p),D||(f("cannot access response document"),b=x),b===w&&q)return q.abort("timeout"),v.reject(q,"timeout"),void 0;if(b==x&&q)return q.abort("server abort"),v.reject(q,"error","server abort"),void 0;if(D&&D.location.href!=k.iframeSrc||t){p.detachEvent?p.detachEvent("onload",G):p.removeEventListener("load",G,!1);var d,c="success";try{if(t)throw"timeout";var e="xml"==k.dataType||D.XMLDocument||a.isXMLDoc(D);if(f("isXml="+e),!e&&window.opera&&(null===D.body||!D.body.innerHTML)&&--E)return f("requeing onLoad callback, DOM not available"),setTimeout(G,250),void 0;var g=D.body?D.body:D.documentElement;q.responseText=g?g.innerHTML:null,q.responseXML=D.XMLDocument?D.XMLDocument:D,e&&(k.dataType="xml"),q.getResponseHeader=function(a){var b={"content-type":k.dataType};return b[a.toLowerCase()]},g&&(q.status=Number(g.getAttribute("status"))||q.status,q.statusText=g.getAttribute("statusText")||q.statusText);var h=(k.dataType||"").toLowerCase(),i=/(json|script|text)/.test(h);if(i||k.textarea){var j=D.getElementsByTagName("textarea")[0];if(j)q.responseText=j.value,q.status=Number(j.getAttribute("status"))||q.status,q.statusText=j.getAttribute("statusText")||q.statusText;else if(i){var l=D.getElementsByTagName("pre")[0],n=D.getElementsByTagName("body")[0];l?q.responseText=l.textContent?l.textContent:l.innerText:n&&(q.responseText=n.textContent?n.textContent:n.innerText)}}else"xml"==h&&!q.responseXML&&q.responseText&&(q.responseXML=H(q.responseText));try{C=J(q,h,k)}catch(r){c="parsererror",q.error=d=r||c}}catch(r){f("error caught: ",r),c="error",q.error=d=r||c}q.aborted&&(f("upload aborted"),c=null),q.status&&(c=q.status>=200&&q.status<300||304===q.status?"success":"error"),"success"===c?(k.success&&k.success.call(k.context,C,"success",q),v.resolve(q.responseText,"success",q),m&&a.event.trigger("ajaxSuccess",[q,k])):c&&(void 0===d&&(d=q.statusText),k.error&&k.error.call(k.context,q,c,d),v.reject(q,"error",d),m&&a.event.trigger("ajaxError",[q,k,d])),m&&a.event.trigger("ajaxComplete",[q,k]),m&&!--a.active&&a.event.trigger("ajaxStop"),k.complete&&k.complete.call(k.context,q,c),F=!0,k.timeout&&clearTimeout(u),setTimeout(function(){k.iframeTarget?o.attr("src",k.iframeSrc):o.remove(),q.responseXML=null},100)}}}var h,j,k,m,n,o,p,q,r,s,t,u,g=i[0],v=a.Deferred();if(v.abort=function(a){q.abort(a)},b)for(j=0;j<l.length;j++)h=a(l[j]),c?h.prop("disabled",!1):h.removeAttr("disabled");if(k=a.extend(!0,{},a.ajaxSettings,d),k.context=k.context||k,n="jqFormIO"+(new Date).getTime(),k.iframeTarget?(o=a(k.iframeTarget),s=o.attr2("name"),s?n=s:o.attr2("name",n)):(o=a('<iframe name="'+n+'" src="'+k.iframeSrc+'" />'),o.css({position:"absolute",top:"-1000px",left:"-1000px"})),p=o[0],q={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(b){var c="timeout"===b?"timeout":"aborted";f("aborting upload... "+c),this.aborted=1;try{p.contentWindow.document.execCommand&&p.contentWindow.document.execCommand("Stop")}catch(d){}o.attr("src",k.iframeSrc),q.error=c,k.error&&k.error.call(k.context,q,c,b),m&&a.event.trigger("ajaxError",[q,k,c]),k.complete&&k.complete.call(k.context,q,c)}},m=k.global,m&&0===a.active++&&a.event.trigger("ajaxStart"),m&&a.event.trigger("ajaxSend",[q,k]),k.beforeSend&&k.beforeSend.call(k.context,q,k)===!1)return k.global&&a.active--,v.reject(),v;if(q.aborted)return v.reject(),v;r=g.clk,r&&(s=r.name,s&&!r.disabled&&(k.extraData=k.extraData||{},k.extraData[s]=r.value,"image"==r.type&&(k.extraData[s+".x"]=g.clk_x,k.extraData[s+".y"]=g.clk_y)));var w=1,x=2,z=a("meta[name=csrf-token]").attr("content"),A=a("meta[name=csrf-param]").attr("content");A&&z&&(k.extraData=k.extraData||{},k.extraData[A]=z),k.forceSync?B():setTimeout(B,10);var C,D,F,E=50,H=a.parseXML||function(a,b){return window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml"),b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},I=a.parseJSON||function(a){return window.eval("("+a+")")},J=function(b,c,d){var e=b.getResponseHeader("content-type")||"",f="xml"===c||!c&&e.indexOf("xml")>=0,g=f?b.responseXML:b.responseText;return f&&"parsererror"===g.documentElement.nodeName&&a.error&&a.error("parsererror"),d&&d.dataFilter&&(g=d.dataFilter(g,c)),"string"==typeof g&&("json"===c||!c&&e.indexOf("json")>=0?g=I(g):("script"===c||!c&&e.indexOf("javascript")>=0)&&a.globalEval(g)),g};return v}if(!this.length)return f("ajaxSubmit: skipping submit process - no element selected"),this;var e,g,h,i=this;"function"==typeof d?d={success:d}:void 0===d&&(d={}),e=d.type||this.attr2("method"),g=d.url||this.attr2("action"),h="string"==typeof g?a.trim(g):"",h=h||window.location.href||"",h&&(h=(h.match(/^([^#]+)/)||[])[1]),d=a.extend(!0,{url:h,success:a.ajaxSettings.success,type:e||a.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},d);var j={};if(this.trigger("form-pre-serialize",[this,d,j]),j.veto)return f("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(d.beforeSerialize&&d.beforeSerialize(this,d)===!1)return f("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var k=d.traditional;void 0===k&&(k=a.ajaxSettings.traditional);var m,l=[],n=this.formToArray(d.semantic,l);if(d.data&&(d.extraData=d.data,m=a.param(d.data,k)),d.beforeSubmit&&d.beforeSubmit(n,this,d)===!1)return f("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[n,this,d,j]),j.veto)return f("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var o=a.param(n,k);m&&(o=o?o+"&"+m:m),"GET"==d.type.toUpperCase()?(d.url+=(d.url.indexOf("?")>=0?"&":"?")+o,d.data=null):d.data=o;var p=[];if(d.resetForm&&p.push(function(){i.resetForm()}),d.clearForm&&p.push(function(){i.clearForm(d.includeHidden)}),!d.dataType&&d.target){var q=d.success||function(){};p.push(function(b){var c=d.replaceTarget?"replaceWith":"html";a(d.target)[c](b).each(q,arguments)})}else d.success&&p.push(d.success);if(d.success=function(a,b,c){for(var e=d.context||this,f=0,g=p.length;g>f;f++)p[f].apply(e,[a,b,c||i,i])},d.error){var r=d.error;d.error=function(a,b,c){var e=d.context||this;r.apply(e,[a,b,c,i])}}if(d.complete){var s=d.complete;d.complete=function(a,b){var c=d.context||this;s.apply(c,[a,b,i])}}var t=a("input[type=file]:enabled",this).filter(function(){return""!==a(this).val()}),u=t.length>0,v="multipart/form-data",w=i.attr("enctype")==v||i.attr("encoding")==v,x=b.fileapi&&b.formdata;f("fileAPI :"+x);var z,y=(u||w)&&!x;d.iframe!==!1&&(d.iframe||y)?d.closeKeepAlive?a.get(d.closeKeepAlive,function(){z=D(n)}):z=D(n):z=(u||w)&&x?C(n):a.ajax(d),i.removeData("jqxhr").data("jqxhr",z);for(var A=0;A<l.length;A++)l[A]=null;return this.trigger("form-submit-notify",[this,d]),this},a.fn.ajaxForm=function(b){if(b=b||{},b.delegation=b.delegation&&a.isFunction(a.fn.on),!b.delegation&&0===this.length){var c={s:this.selector,c:this.context};return!a.isReady&&c.s?(f("DOM not ready, queuing ajaxForm"),a(function(){a(c.s,c.c).ajaxForm(b)}),this):(f("terminating; zero elements found by selector"+(a.isReady?"":" (DOM not ready)")),this)}return b.delegation?(a(document).off("submit.form-plugin",this.selector,d).off("click.form-plugin",this.selector,e).on("submit.form-plugin",this.selector,b,d).on("click.form-plugin",this.selector,b,e),this):this.ajaxFormUnbind().bind("submit.form-plugin",b,d).bind("click.form-plugin",b,e)},a.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},a.fn.formToArray=function(c,d){var e=[];if(0===this.length)return e;var f=this[0],g=c?f.getElementsByTagName("*"):f.elements;if(!g)return e;var h,i,j,k,l,m,n;for(h=0,m=g.length;m>h;h++)if(l=g[h],j=l.name,j&&!l.disabled)if(c&&f.clk&&"image"==l.type)f.clk==l&&(e.push({name:j,value:a(l).val(),type:l.type}),e.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}));else if(k=a.fieldValue(l,!0),k&&k.constructor==Array)for(d&&d.push(l),i=0,n=k.length;n>i;i++)e.push({name:j,value:k[i]});else if(b.fileapi&&"file"==l.type){d&&d.push(l);var o=l.files;if(o.length)for(i=0;i<o.length;i++)e.push({name:j,value:o[i],type:l.type});else e.push({name:j,value:"",type:l.type})}else null!==k&&"undefined"!=typeof k&&(d&&d.push(l),e.push({name:j,value:k,type:l.type,required:l.required}));if(!c&&f.clk){var p=a(f.clk),q=p[0];j=q.name,j&&!q.disabled&&"image"==q.type&&(e.push({name:j,value:p.val()}),e.push({name:j+".x",value:f.clk_x},{name:j+".y",value:f.clk_y}))}return e},a.fn.formSerialize=function(b){return a.param(this.formToArray(b))},a.fn.fieldSerialize=function(b){var c=[];return this.each(function(){var d=this.name;if(d){var e=a.fieldValue(this,b);if(e&&e.constructor==Array)for(var f=0,g=e.length;g>f;f++)c.push({name:d,value:e[f]});else null!==e&&"undefined"!=typeof e&&c.push({name:this.name,value:e})}}),a.param(c)},a.fn.fieldValue=function(b){for(var c=[],d=0,e=this.length;e>d;d++){var f=this[d],g=a.fieldValue(f,b);null===g||"undefined"==typeof g||g.constructor==Array&&!g.length||(g.constructor==Array?a.merge(c,g):c.push(g))}return c},a.fieldValue=function(b,c){var d=b.name,e=b.type,f=b.tagName.toLowerCase();if(void 0===c&&(c=!0),c&&(!d||b.disabled||"reset"==e||"button"==e||("checkbox"==e||"radio"==e)&&!b.checked||("submit"==e||"image"==e)&&b.form&&b.form.clk!=b||"select"==f&&-1==b.selectedIndex))return null;if("select"==f){var g=b.selectedIndex;if(0>g)return null;for(var h=[],i=b.options,j="select-one"==e,k=j?g+1:i.length,l=j?g:0;k>l;l++){var m=i[l];if(m.selected){var n=m.value;if(n||(n=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),j)return n;h.push(n)}}return h}return a(b).val()},a.fn.clearForm=function(b){return this.each(function(){a("input,select,textarea",this).clearFields(b)})},a.fn.clearFields=a.fn.clearInputs=function(b){var c=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var d=this.type,e=this.tagName.toLowerCase();c.test(d)||"textarea"==e?this.value="":"checkbox"==d||"radio"==d?this.checked=!1:"select"==e?this.selectedIndex=-1:"file"==d?/MSIE/.test(navigator.userAgent)?a(this).replaceWith(a(this).clone(!0)):a(this).val(""):b&&(b===!0&&/hidden/.test(d)||"string"==typeof b&&a(this).is(b))&&(this.value="")})},a.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},a.fn.enable=function(a){return void 0===a&&(a=!0),this.each(function(){this.disabled=!a})},a.fn.selected=function(b){return void 0===b&&(b=!0),this.each(function(){var c=this.type;if("checkbox"==c||"radio"==c)this.checked=b;else if("option"==this.tagName.toLowerCase()){var d=a(this).parent("select");b&&d[0]&&"select-one"==d[0].type&&d.find("option").selected(!1),this.selected=b}})},a.fn.ajaxSubmit.debug=!1}("undefined"!=typeof jQuery?jQuery:window.Zepto);
/* Tooltipster v3.2.1 */;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,delay:200,fixedWidth:0,maxWidth:0,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;if(n.querySelector){if(t.options.content!==null){t._content_set(t.options.content)}else{var r=t.$el.attr("title");if(typeof r==="undefined")r=null;t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}}else{r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration: "+r.options.speed+"ms; -webkit-animation-duration: "+r.options.speed+"ms; -moz-transition-duration: "+r.options.speed+"ms; -moz-animation-duration: "+r.options.speed+"ms; -o-transition-duration: "+r.options.speed+"ms; -o-animation-duration: "+r.options.speed+"ms; -ms-transition-duration: "+r.options.speed+"ms; -ms-animation-duration: "+r.options.speed+"ms; transition-duration: "+r.options.speed+"ms; animation-duration: "+r.options.speed+"ms;",f=r.options.fixedWidth>0?"width:"+Math.round(r.options.fixedWidth)+"px;":"",c=r.options.maxWidth>0?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events: auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})}else{r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()}else{if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true}else{if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition()}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)}else{t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)}else{r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content}else{this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"}else{if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S}else{s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}if(n.options.fixedWidth===0){n.$tooltip.css({width:Math.round(u)+"px","padding-left":"0px","padding-right":"0px"})}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")}else{var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")}else{var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color: "+W+";";if(R.indexOf("bottom")!==-1){V="margin-top: -"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom: -"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right: -"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left: -"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0])t.$elProxy.remove();t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html();t.$el.removeClass("tooltipstered").attr("title",r).removeData(t.namespace).removeData("tooltipster-ns").off("."+t.namespace)}else{n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e){return this.options[e]},status:function(e){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1])}else{throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else{if(a)n=true;else console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.')}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);
jQuery(function($){

	
	//sorter
	var volunteerHome = $('body').data('volunteer-home'); 
	var volunteerGroup = $('body').data('volunteer-group');
	var volunteerCategory = $('body').data('volunteer-category')
	
	if(volunteerGroup!=''){
	  $('#select-group option:selected').removeAttr('selected');
	  $('#select-group').val(volunteerGroup).attr('selected', 'selected');
	  if ($('#content .ui-selectmenu-button').length>0) {
	  	$('#select-group').selectmenu('refresh');
	  }
	}
	if(volunteerCategory!=''){
	  $('#select-category option:selected').removeAttr('selected');
	  $('#select-category').val(volunteerCategory).attr('selected', 'selected');
	  if ($('#content .ui-selectmenu-button').length>0) {
	  	$('#select-category').selectmenu('refresh');
	  }
	}
	$('.sorter').change(function(event){
		event.preventDefault();
		var data = $("#vol-filter").serialize();
		window.location = volunteerHome+"?"+data;
	});  
	
	//contact form
	$("#contact-form").submit(function(e){
		e.preventDefault();
		emailActions();
	});
			
			
	function emailActions(){
		 var request,
		  $email  = $('#contact-form'),
		  	// Disable Inputs while submitting
			//$email.has('input, select, button, textarea').prop('disabled', true);
				  // Make Request
				  request = $.ajax({
					url: '/_components/ajax/ajax_partners_email.php',
					type: 'get',
					data: $('#contact-form').serialize()
				  });
			
				  // Register promise
				  request.done(function (response, textStatus, jqXHR){
					$.colorbox({
					  width: 550,
					  html: response
					});
					$('#email').val('');
				  });
			}

});



