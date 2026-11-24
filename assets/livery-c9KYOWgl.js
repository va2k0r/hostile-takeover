import{i as b,dt as B}from"./rings-xmYvwU_m.js";import{C as k,l as c,d as F,B as z,V as C,ae as _}from"./three-K8XZ__Z1.js";const K=`
varying vec3 htPlate;
uniform vec3 htPaintColor;
uniform float htMark;
${B}
`,M={bow:0,mid:1,stern:2,mine:3,refinery:4,shipyard:5,subFtlStation:6};function W(o,m,p,h){const n=o.clone();n.onBeforeCompile=(e,r)=>{o.onBeforeCompile.call(n,e,r),e.uniforms.htPanelSpace={value:m},e.uniforms.htPaintColor={value:p},e.uniforms.htMark={value:h},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 htPanelSpace;
varying vec3 htPlate;`).replace("#include <begin_vertex>",`#include <begin_vertex>
htPlate = (htPanelSpace * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
`+K).replace("#include <color_fragment>",`#include <color_fragment>
        float htCoat = 0.94 * htPaintMask(htPlate, htMark);
        float htGrain = sqrt(clamp(dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722)), 0.0, 1.0));
        diffuseColor.rgb = mix(diffuseColor.rgb, htPaintColor * (0.56 + 0.47 * htGrain), htCoat);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.20, htCoat);
        roughnessFactor = mix(roughnessFactor, 0.59, htCoat * 0.64);`)};const l=o.customProgramCacheKey();return n.customProgramCacheKey=()=>"ht-section-livery/1/"+l,n}function G(o,m,p){o.updateMatrixWorld(!0);const h=new k(p),n=new Map,l=new Map;for(const e of o.children){const r=e.children[0];if(!r)continue;const P=new c().copy(e.matrixWorld).invert(),i=new z,g=[];if(r.traverse(t=>{if(!(t instanceof F))return;const u=new c().multiplyMatrices(P,t.matrixWorld),a=t.geometry;a.boundingBox||a.computeBoundingBox(),!(!a.boundingBox||a.boundingBox.isEmpty())&&(i.union(a.boundingBox.clone().applyMatrix4(u)),g.push({mesh:t,relative:u}))}),i.isEmpty())continue;const d=i.getSize(new C).max(new C(1e-4,1e-4,1e-4)),w=new c().makeScale(1/d.x,1/d.y,1/d.z).multiply(new c().makeTranslation(-i.min.x,-i.min.y,-i.min.z)),y=b(m)?M[m]:M[e.name];for(const{mesh:t,relative:u}of g){const a=new c().multiplyMatrices(w,u),S=a.elements.map(s=>Math.round(s*1e5)).join(","),x=s=>{if(!(s instanceof _))return s;const v=s.uuid+"/"+y+"/"+S;let f=n.get(v);return f||(f=W(s,a,h,y),n.set(v,f)),f};l.set(t,t.material),t.material=Array.isArray(t.material)?t.material.map(x):x(t.material)}}return()=>{for(const[e,r]of l)e.material=r;for(const e of n.values())e.dispose();l.clear(),n.clear()}}export{G as a};
