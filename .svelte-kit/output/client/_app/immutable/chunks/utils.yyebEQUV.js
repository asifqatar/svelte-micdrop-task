function Y(e){var t,r,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=Y(e[t]))&&(o&&(o+=" "),o+=r)}else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function ne(){for(var e,t,r=0,o="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=Y(e))&&(o&&(o+=" "),o+=t);return o}const _="-",se=e=>{const t=ae(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:l=>{const s=l.split(_);return s[0]===""&&s.length!==1&&s.shift(),D(s,t)||ie(l)},getConflictingClassGroupIds:(l,s)=>{const u=r[l]||[];return s&&o[l]?[...u,...o[l]]:u}}},D=(e,t)=>{var l;if(e.length===0)return t.classGroupId;const r=e[0],o=t.nextPart.get(r),i=o?D(e.slice(1),o):void 0;if(i)return i;if(t.validators.length===0)return;const n=e.join(_);return(l=t.validators.find(({validator:s})=>s(n)))==null?void 0:l.classGroupId},X=/^\[(.+)\]$/,ie=e=>{if(X.test(e)){const t=X.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},ae=e=>{const{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return ce(Object.entries(e.classGroups),r).forEach(([n,l])=>{Z(l,o,n,t)}),o},Z=(e,t,r,o)=>{e.forEach(i=>{if(typeof i=="string"){const n=i===""?t:Q(t,i);n.classGroupId=r;return}if(typeof i=="function"){if(le(i)){Z(i(o),t,r,o);return}t.validators.push({validator:i,classGroupId:r});return}Object.entries(i).forEach(([n,l])=>{Z(l,Q(t,n),r,o)})})},Q=(e,t)=>{let r=e;return t.split(_).forEach(o=>{r.nextPart.has(o)||r.nextPart.set(o,{nextPart:new Map,validators:[]}),r=r.nextPart.get(o)}),r},le=e=>e.isThemeGetter,ce=(e,t)=>t?e.map(([r,o])=>{const i=o.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([l,s])=>[t+l,s])):n);return[r,i]}):e,de=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,o=new Map;const i=(n,l)=>{r.set(n,l),t++,t>e&&(t=0,o=r,r=new Map)};return{get(n){let l=r.get(n);if(l!==void 0)return l;if((l=o.get(n))!==void 0)return i(n,l),l},set(n,l){r.has(n)?r.set(n,l):i(n,l)}}},ee="!",pe=e=>{const{separator:t,experimentalParseClassName:r}=e,o=t.length===1,i=t[0],n=t.length,l=s=>{const u=[];let b=0,f=0,w;for(let p=0;p<s.length;p++){let h=s[p];if(b===0){if(h===i&&(o||s.slice(p,p+n)===t)){u.push(s.slice(f,p)),f=p+n;continue}if(h==="/"){w=p;continue}}h==="["?b++:h==="]"&&b--}const v=u.length===0?s:s.substring(f),x=v.startsWith(ee),C=x?v.substring(1):v,g=w&&w>f?w-f:void 0;return{modifiers:u,hasImportantModifier:x,baseClassName:C,maybePostfixModifierPosition:g}};return r?s=>r({className:s,parseClassName:l}):l},ue=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(o=>{o[0]==="["?(t.push(...r.sort(),o),r=[]):r.push(o)}),t.push(...r.sort()),t},ge=e=>({cache:de(e.cacheSize),parseClassName:pe(e),...se(e)}),be=/\s+/,he=(e,t)=>{const{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:i}=t,n=[],l=e.trim().split(be);let s="";for(let u=l.length-1;u>=0;u-=1){const b=l[u],{modifiers:f,hasImportantModifier:w,baseClassName:v,maybePostfixModifierPosition:x}=r(b);let C=!!x,g=o(C?v.substring(0,x):v);if(!g){if(!C){s=b+(s.length>0?" "+s:s);continue}if(g=o(v),!g){s=b+(s.length>0?" "+s:s);continue}C=!1}const p=ue(f).join(":"),h=w?p+ee:p,m=h+g;if(n.includes(m))continue;n.push(m);const V=i(g,C);for(let A=0;A<V.length;++A){const H=V[A];n.push(h+H)}s=b+(s.length>0?" "+s:s)}return s};function fe(){let e=0,t,r,o="";for(;e<arguments.length;)(t=arguments[e++])&&(r=te(t))&&(o&&(o+=" "),o+=r);return o}const te=e=>{if(typeof e=="string")return e;let t,r="";for(let o=0;o<e.length;o++)e[o]&&(t=te(e[o]))&&(r&&(r+=" "),r+=t);return r};function me(e,...t){let r,o,i,n=l;function l(u){const b=t.reduce((f,w)=>w(f),e());return r=ge(b),o=r.cache.get,i=r.cache.set,n=s,s(u)}function s(u){const b=o(u);if(b)return b;const f=he(u,r);return i(u,f),f}return function(){return n(fe.apply(null,arguments))}}const c=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},re=/^\[(?:([a-z-]+):)?(.+)\]$/i,we=/^\d+\/\d+$/,ve=new Set(["px","full","screen"]),Ce=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,xe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ye=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ke=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Me=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,k=e=>S(e)||ve.has(e)||we.test(e),M=e=>B(e,"length",Re),S=e=>!!e&&!Number.isNaN(Number(e)),O=e=>B(e,"number",S),j=e=>!!e&&Number.isInteger(Number(e)),ze=e=>e.endsWith("%")&&S(e.slice(0,-1)),a=e=>re.test(e),z=e=>Ce.test(e),Ae=new Set(["length","size","percentage"]),Se=e=>B(e,Ae,oe),Be=e=>B(e,"position",oe),Ve=new Set(["image","url"]),Ie=e=>B(e,Ve,Ee),je=e=>B(e,"",He),R=()=>!0,B=(e,t,r)=>{const o=re.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):r(o[2]):!1},Re=e=>xe.test(e)&&!ye.test(e),oe=()=>!1,He=e=>ke.test(e),Ee=e=>Me.test(e),Ge=()=>{const e=c("colors"),t=c("spacing"),r=c("blur"),o=c("brightness"),i=c("borderColor"),n=c("borderRadius"),l=c("borderSpacing"),s=c("borderWidth"),u=c("contrast"),b=c("grayscale"),f=c("hueRotate"),w=c("invert"),v=c("gap"),x=c("gradientColorStops"),C=c("gradientColorStopPositions"),g=c("inset"),p=c("margin"),h=c("opacity"),m=c("padding"),V=c("saturate"),A=c("scale"),H=c("sepia"),W=c("skew"),F=c("space"),$=c("translate"),P=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto",a,t],d=()=>[a,t],U=()=>["",k,M],E=()=>["auto",S,a],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",a],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>[S,a];return{cacheSize:500,separator:":",theme:{colors:[R],spacing:[k,M],blur:["none","",z,a],brightness:y(),borderColor:[e],borderRadius:["none","","full",z,a],borderSpacing:d(),borderWidth:U(),contrast:y(),grayscale:I(),hueRotate:y(),invert:I(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[ze,M],inset:T(),margin:T(),opacity:y(),padding:d(),saturate:y(),scale:y(),sepia:I(),skew:y(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[z]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),a]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",j,a]}],basis:[{basis:T()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",j,a]}],"grid-cols":[{"grid-cols":[R]}],"col-start-end":[{col:["auto",{span:["full",j,a]},a]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[R]}],"row-start-end":[{row:["auto",{span:[j,a]},a]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[v]}],"gap-x":[{"gap-x":[v]}],"gap-y":[{"gap-y":[v]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[p]}],mx:[{mx:[p]}],my:[{my:[p]}],ms:[{ms:[p]}],me:[{me:[p]}],mt:[{mt:[p]}],mr:[{mr:[p]}],mb:[{mb:[p]}],ml:[{ml:[p]}],"space-x":[{"space-x":[F]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[F]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",a,t]}],"min-w":[{"min-w":[a,t,"min","max","fit"]}],"max-w":[{"max-w":[a,t,"none","full","min","max","fit","prose",{screen:[z]},z]}],h:[{h:[a,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[a,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[a,t,"auto","min","max","fit"]}],"font-size":[{text:["base",z,M]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[R]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",S,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",k,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",k,M]}],"underline-offset":[{"underline-offset":["auto",k,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),Be]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Se]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ie]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[k,a]}],"outline-w":[{outline:[k,M]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:U()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[k,M]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",z,je]}],"shadow-color":[{shadow:[R]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",z,a]}],grayscale:[{grayscale:[b]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[w]}],saturate:[{saturate:[V]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[b]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[w]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[V]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:y()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:y()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[A]}],"scale-x":[{"scale-x":[A]}],"scale-y":[{"scale-y":[A]}],rotate:[{rotate:[j,a]}],"translate-x":[{"translate-x":[$]}],"translate-y":[{"translate-y":[$]}],"skew-x":[{"skew-x":[W]}],"skew-y":[{"skew-y":[W]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[k,M,O]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Pe=me(Ge),Le="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%202V4M6%202V4'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.05%2022C7.01949%2022%205.00424%2022%203.75212%2020.6464C2.5%2019.2927%202.5%2017.1141%202.5%2012.7568V12.2432C2.5%207.88594%202.5%205.70728%203.75212%204.35364C5.00424%203%207.01949%203%2011.05%203H12.95C16.9805%203%2018.9958%203%2020.2479%204.35364C21.4765%205.68186%2021.4996%207.80438%2021.5%2012'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%208H21'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13%2018H21M17%2014V22'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Te="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2891%206C17.0128%206%2016.7478%206.10536%2016.5525%206.29289C16.3571%206.48043%2016.2474%206.73478%2016.2474%207V10C16.2474%2011.0609%2015.8084%2012.0783%2015.027%2012.8284C14.2456%2013.5786%2013.1858%2014%2012.0807%2014H7.91406C6.80899%2014%205.74919%2013.5786%204.96778%2012.8284C4.18638%2012.0783%203.7474%2011.0609%203.7474%2010V7C3.7474%206.73478%203.63765%206.48043%203.4423%206.29289C3.24695%206.10536%202.982%206%202.70573%206C2.42946%206%202.16451%206.10536%201.96916%206.29289C1.77381%206.48043%201.66406%206.73478%201.66406%207V10C1.66572%2011.5908%202.32473%2013.116%203.49647%2014.2409C4.66822%2015.3658%206.25697%2015.9984%207.91406%2016H8.95573V18H6.8724C6.59613%2018%206.33118%2018.1054%206.13583%2018.2929C5.94048%2018.4804%205.83073%2018.7348%205.83073%2019C5.83073%2019.2652%205.94048%2019.5196%206.13583%2019.7071C6.33118%2019.8946%206.59613%2020%206.8724%2020H13.1224C13.3987%2020%2013.6636%2019.8946%2013.859%2019.7071C14.0543%2019.5196%2014.1641%2019.2652%2014.1641%2019C14.1641%2018.7348%2014.0543%2018.4804%2013.859%2018.2929C13.6636%2018.1054%2013.3987%2018%2013.1224%2018H11.0391V16H12.0807C13.7378%2015.9984%2015.3266%2015.3658%2016.4983%2014.2409C17.6701%2013.116%2018.3291%2011.5908%2018.3307%2010V7C18.3307%206.73478%2018.221%206.48043%2018.0256%206.29289C17.8303%206.10536%2017.5653%206%2017.2891%206Z'%20fill='%231F2A37'/%3e%3cpath%20d='M8.95573%2013H11.0391C12.1441%2013%2013.2039%2012.5786%2013.9853%2011.8284C14.7667%2011.0783%2015.2057%2010.0609%2015.2057%209V4C15.2057%202.93913%2014.7667%201.92172%2013.9853%201.17157C13.2039%200.421427%2012.1441%200%2011.0391%200H8.95573C7.85066%200%206.79085%200.421427%206.00945%201.17157C5.22805%201.92172%204.78906%202.93913%204.78906%204V9C4.78906%2010.0609%205.22805%2011.0783%206.00945%2011.8284C6.79085%2012.5786%207.85066%2013%208.95573%2013ZM6.8724%204C6.8724%203.46957%207.09189%202.96086%207.48259%202.58579C7.87329%202.21071%208.40319%202%208.95573%202H11.0391C11.5916%202%2012.1215%202.21071%2012.5122%202.58579C12.9029%202.96086%2013.1224%203.46957%2013.1224%204V9C13.1224%209.53043%2012.9029%2010.0391%2012.5122%2010.4142C12.1215%2010.7893%2011.5916%2011%2011.0391%2011H8.95573C8.40319%2011%207.87329%2010.7893%207.48259%2010.4142C7.09189%2010.0391%206.8724%209.53043%206.8724%209V4Z'%20fill='%231F2A37'/%3e%3c/svg%3e",Ne="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.9984%207L3.77959%207.81253C2.90588%208.39501%202.46902%208.68625%202.23227%209.13041C1.99552%209.57457%201.99728%2010.0966%202.00078%2011.1406C2.00501%2012.3975%202.01669%2013.6782%202.04904%2014.9741C2.12578%2018.0487%202.16416%2019.586%203.29456%2020.7164C4.42496%2021.8469%205.98302%2021.8858%209.09913%2021.9637C11.0377%2022.0121%2012.9591%2022.0121%2014.8976%2021.9637C18.0138%2021.8858%2019.5718%2021.8469%2020.7022%2020.7164C21.8326%2019.586%2021.871%2018.0487%2021.9477%2014.9741C21.9801%2013.6782%2021.9917%2012.3975%2021.996%2011.1406C21.9995%2010.0966%2022.0012%209.57456%2021.7645%209.13041C21.5277%208.68625%2021.0909%208.39501%2020.2171%207.81253L18.9983%207'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3cpath%20d='M2%2010L8.91302%2014.1478C10.417%2015.0502%2011.169%2015.5014%2012%2015.5014C12.831%2015.5014%2013.583%2015.0502%2015.087%2014.1478L22%2010'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2012V6C5%204.11438%205%203.17157%205.58579%202.58579C6.17157%202%207.11438%202%209%202H15C16.8856%202%2017.8284%202%2018.4142%202.58579C19%203.17157%2019%204.11438%2019%206V12'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M10%2010H14M10%206H14'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Oe="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.6177%2021.367C13.1841%2021.773%2012.6044%2022%2012.0011%2022C11.3978%2022%2010.8182%2021.773%2010.3845%2021.367C6.41302%2017.626%201.09076%2013.4469%203.68627%207.37966C5.08963%204.09916%208.45834%202%2012.0011%202C15.5439%202%2018.9126%204.09916%2020.316%207.37966C22.9082%2013.4393%2017.599%2017.6389%2013.6177%2021.367Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M15.5%2011H12M12%2011H8.5M12%2011V14.5M12%2011V7.5'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",Ze="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.016%202C18.9026%202%2018%204.68629%2018%208H20.016C20.9876%208%2021.4734%208%2021.7741%207.66455C22.0749%207.32909%2022.0225%206.88733%2021.9178%206.00381C21.6414%203.67143%2020.8943%202%2020.016%202Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M18%208.05426V18.6458C18%2020.1575%2018%2020.9133%2017.538%2021.2108C16.7831%2021.6971%2015.6161%2020.6774%2015.0291%2020.3073C14.5441%2020.0014%2014.3017%2019.8485%2014.0325%2019.8397C13.7417%2019.8301%2013.4949%2019.9768%2012.9709%2020.3073L11.06%2021.5124C10.5445%2021.8374%2010.2868%2022%2010%2022C9.71321%2022%209.45546%2021.8374%208.94%2021.5124L7.02913%2020.3073C6.54415%2020.0014%206.30166%2019.8485%206.03253%2019.8397C5.74172%2019.8301%205.49493%2019.9768%204.97087%2020.3073C4.38395%2020.6774%203.21687%2021.6971%202.46195%2021.2108C2%2020.9133%202%2020.1575%202%2018.6458V8.05426C2%205.20025%202%203.77325%202.87868%202.88663C3.75736%202%205.17157%202%208%202H20'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10%208C8.89543%208%208%208.67157%208%209.5C8%2010.3284%208.89543%2011%2010%2011C11.1046%2011%2012%2011.6716%2012%2012.5C12%2013.3284%2011.1046%2014%2010%2014M10%208C10.8708%208%2011.6116%208.4174%2011.8862%209M10%208V7M10%2014C9.12919%2014%208.38836%2013.5826%208.1138%2013M10%2014V15'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e",_e="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2018C20.2091%2018%2022%2014.4183%2022%2010C22%205.58172%2020.2091%202%2018%202C15.7909%202%2014%205.58172%2014%2010C14%2014.4183%2015.7909%2018%2018%2018Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M18%202C14.8969%202%208.46512%204.37761%204.77105%205.85372C3.07942%206.52968%202%208.17832%202%2010C2%2011.8217%203.07942%2013.4703%204.77105%2014.1463C8.46512%2015.6224%2014.8969%2018%2018%2018'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M11%2022L9.05674%2020.9303C6.94097%2019.7657%205.74654%2017.4134%206.04547%2015'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",We="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.774%2018C21.5233%2018%2022.1193%2017.5285%2022.6545%2016.8691C23.7499%2015.5194%2021.9513%2014.4408%2021.2654%2013.9126C20.568%2013.3756%2019.7894%2013.0714%2019%2013M18%2011C19.3807%2011%2020.5%209.88071%2020.5%208.5C20.5%207.11929%2019.3807%206%2018%206'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M3.22596%2018C2.47666%2018%201.88067%2017.5285%201.34555%2016.8691C0.250087%2015.5194%202.04867%2014.4408%202.73465%2013.9126C3.43197%2013.3756%204.21058%2013.0714%205%2013M5.5%2011C4.11929%2011%203%209.88071%203%208.5C3%207.11929%204.11929%206%205.5%206'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M8.0838%2015.1112C7.06203%2015.743%204.38299%2017.0331%206.0147%2018.6474C6.81178%2019.436%207.69952%2020%208.81563%2020H15.1844C16.3005%2020%2017.1882%2019.436%2017.9853%2018.6474C19.617%2017.0331%2016.938%2015.743%2015.9162%2015.1112C13.5201%2013.6296%2010.4799%2013.6296%208.0838%2015.1112Z'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.5%207.5C15.5%209.433%2013.933%2011%2012%2011C10.067%2011%208.5%209.433%208.5%207.5C8.5%205.567%2010.067%204%2012%204C13.933%204%2015.5%205.567%2015.5%207.5Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3c/svg%3e",Fe="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%204.5C3%203.67157%203.67157%203%204.5%203H6.5C7.32843%203%208%203.67157%208%204.5V6.5C8%207.32843%207.32843%208%206.5%208H4.5C3.67157%208%203%207.32843%203%206.5V4.5Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M3%2017.5C3%2016.6716%203.67157%2016%204.5%2016H6.5C7.32843%2016%208%2016.6716%208%2017.5V19.5C8%2020.3284%207.32843%2021%206.5%2021H4.5C3.67157%2021%203%2020.3284%203%2019.5V17.5Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M7.99977%2018.5H20.9998M15.9998%205.5H7.99977M16.3233%207.67649L7.64844%2016.3513'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%204.5C16%203.67157%2016.6716%203%2017.5%203H19.5C20.3284%203%2021%203.67157%2021%204.5V6.5C21%207.32843%2020.3284%208%2019.5%208H17.5C16.6716%208%2016%207.32843%2016%206.5V4.5Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M18%2021L19.3883%2020.0537C20.4628%2019.3213%2021%2018.9551%2021%2018.5C21%2018.0449%2020.4628%2017.6787%2019.3883%2016.9463L18%2016'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",$e="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2017V13'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2017V7'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M17%2017V11'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M2.5%2012C2.5%207.52166%202.5%205.28249%203.89124%203.89124C5.28249%202.5%207.52166%202.5%2012%202.5C16.4783%202.5%2018.7175%202.5%2020.1088%203.89124C21.5%205.28249%2021.5%207.52166%2021.5%2012C21.5%2016.4783%2021.5%2018.7175%2020.1088%2020.1088C18.7175%2021.5%2016.4783%2021.5%2012%2021.5C7.52166%2021.5%205.28249%2021.5%203.89124%2020.1088C2.5%2018.7175%202.5%2016.4783%202.5%2012Z'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3c/svg%3e";function Ue(...e){return e.filter(Boolean).join(" ")}function qe(e,t){return e.length>t?e.slice(0,t)+"...":e}function Ke(...e){return Pe(ne(e))}function Je(e){return e==="weeks"?[{value:"monday",label:"Monday"},{value:"tuesday",label:"Tuesday"},{value:"wednesday",label:"Wednesday"},{value:"thursday",label:"Thursday"},{value:"friday",label:"Friday"}]:Array.from({length:31},(t,r)=>{const o=r+1,i=o%10===1&&o!==11?"st":o%10===2&&o!==12?"nd":o%10===3&&o!==13?"rd":"th";return{value:o.toString(),label:o+i}})}function Xe(e){return e==="months"?Array.from({length:12},(t,r)=>({value:(r+1).toString(),label:(r+1).toString()})):e==="weeks"?Array.from({length:10},(t,r)=>({value:(r+1).toString(),label:(r+1).toString()})):Array.from({length:31},(t,r)=>({value:(r+1).toString(),label:(r+1).toString()}))}const Qe=[{icon:Le,title:"Event creation",description:"Allow users to enter event info, create tickets & customize order forms",checkbox:["Create Events","Edit Event Details","Manage event status","Manage tickets","Manage Collections"]},{icon:Te,title:"Booking",description:"Allow users to manage performers, their invitations and statuses",checkbox:["Access the roster page and view performer profiles","Edit performer profiles","Send booking invitations","Manually confirm/decline performers to spots","Send avails requests"]},{icon:Oe,title:"Venue creation",description:"Allow users to create new venues",checkbox:["Add/edit/delete venues"]},{icon:_e,title:"Marketing",description:"Sell more tickets by creating campaigns, tracking engagements, etc.",checkbox:["Access social media posts","Manage tracking links","Manage promo codes"]},{icon:We,title:"Orders & attendees",description:"Allow users to view, update & refund orders, manage attendee guest or waitlists & release tickets",checkbox:["Add attendees","Manage orders, refunds, transfers and attendees","View list of attendees","Check in attendees","Resend confirmation emails","Override ticket restrictions","Sell tickets at the door","Revoke and reissue barcodes"]},{icon:Fe,title:"Organization",description:"Keep your users organized with assigned permissions per user, enable access to APIs & extensions",checkbox:["Manage organization members & permissions","Edit organization infomation"]},{icon:Ne,title:"Contacts",description:"Keep our users in the loop, select which emails you would like them to receive",checkbox:["Email attendees","Email/SMS performers"]},{icon:$e,title:"Reporting",description:"Allow users to access, filter & export data across your organization",checkbox:["Access reports pages"]},{icon:Ze,title:"Payouts & billing",description:"Users can configure payout methods, manage event payment options & track financials with reporting",checkbox:["Manage financial accounts (Stripe)"]}];export{Qe as R,qe as a,fe as b,Ue as c,Ke as d,Je as e,Xe as g,Pe as t};
