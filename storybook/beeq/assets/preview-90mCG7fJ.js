var v="storybook/html",_={CODE_UPDATE:"".concat(v,"/codeUpdate")},n,a;const{addons:E,makeDecorator:h}=__STORYBOOK_MODULE_PREVIEW_API__;var D=h({name:"withHTML",parameterName:"html",skipIfNoParametersOrOptions:!1,wrapper:function(d,l,f){var m=f.parameters,o=m===void 0?{}:m;return setTimeout(function(){var s=o.root||"#storybook-root, #root",c=document.querySelector(s),e=c?c.innerHTML:"".concat(s," not found."),p=o.removeEmptyComments,r=o.removeComments,i=o.transform;if(p&&(e=e.replace(/<!--\s*-->/g,"")),r===!0?e=e.replace(/<!--[\S\s]*?-->/g,""):r instanceof RegExp&&(e=e.replace(/<!--([\S\s]*?)-->/g,function(t,u){return r.test(u)?"":t})),typeof i=="function")try{e=i(e)}catch(t){console.error(t)}E.getChannel().emit(_.CODE_UPDATE,{code:e,options:o})},0),d(l)}});(n=module)!==null&&n!==void 0&&(a=n.hot)!==null&&a!==void 0&&a.decline&&module.hot.decline();var T=[D];export{T as decorators};
