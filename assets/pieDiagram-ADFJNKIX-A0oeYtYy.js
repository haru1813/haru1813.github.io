import{aa as S,ad as z,aM as j,d as K,s as Z,e as q,f as H,A as J,z as Q,h as p,l as F,i as X,K as Y,O as ee,T as te,k as ae,E as re,L as ne}from"./Pagination-CcSB4ttT.js";import{p as ie}from"./chunk-4BX2VUAB-B9rhBvg3.js";import{p as se}from"./treemap-GDKQZRPO-fpexQtWI.js";import{d as R}from"./arc-Db2HvSVn.js";import{o as le}from"./ordinal-Cboi1Yqb.js";import"./index-BLHB_cOd.js";import"./_baseUniq-BaBTkycH.js";import"./_basePickBy-DfKWqh_r.js";import"./clone-DDfWPCDN.js";import"./init-Gi6I4Gst.js";function oe(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function ue(){var e=ce,a=oe,f=null,x=S(0),s=S(z),o=S(0);function l(t){var n,c=(t=j(t)).length,d,y,h=0,u=new Array(c),i=new Array(c),v=+x.apply(this,arguments),A=Math.min(z,Math.max(-z,s.apply(this,arguments)-v)),m,C=Math.min(Math.abs(A)/c,o.apply(this,arguments)),$=C*(A<0?-1:1),g;for(n=0;n<c;++n)(g=i[u[n]=n]=+e(t[n],n,t))>0&&(h+=g);for(a!=null?u.sort(function(w,D){return a(i[w],i[D])}):f!=null&&u.sort(function(w,D){return f(t[w],t[D])}),n=0,y=h?(A-c*$)/h:0;n<c;++n,v=m)d=u[n],g=i[d],m=v+(g>0?g*y:0)+$,i[d]={data:t[d],index:n,value:g,startAngle:v,endAngle:m,padAngle:C};return i}return l.value=function(t){return arguments.length?(e=typeof t=="function"?t:S(+t),l):e},l.sortValues=function(t){return arguments.length?(a=t,f=null,l):a},l.sort=function(t){return arguments.length?(f=t,a=null,l):f},l.startAngle=function(t){return arguments.length?(x=typeof t=="function"?t:S(+t),l):x},l.endAngle=function(t){return arguments.length?(s=typeof t=="function"?t:S(+t),l):s},l.padAngle=function(t){return arguments.length?(o=typeof t=="function"?t:S(+t),l):o},l}var pe=ne.pie,G={sections:new Map,showData:!1},T=G.sections,N=G.showData,de=structuredClone(pe),ge=p(()=>structuredClone(de),"getConfig"),fe=p(()=>{T=new Map,N=G.showData,re()},"clear"),me=p(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(e)||(T.set(e,a),F.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),he=p(()=>T,"getSections"),ve=p(e=>{N=e},"setShowData"),Se=p(()=>N,"getShowData"),I={getConfig:ge,clear:fe,setDiagramTitle:Q,getDiagramTitle:J,setAccTitle:H,getAccTitle:q,setAccDescription:Z,getAccDescription:K,addSection:me,getSections:he,setShowData:ve,getShowData:Se},xe=p((e,a)=>{ie(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ye={parse:p(async e=>{const a=await se("pie",e);F.debug(a),xe(a,I)},"parse")},Ae=p(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),we=Ae,De=p(e=>{const a=[...e.values()].reduce((s,o)=>s+o,0),f=[...e.entries()].map(([s,o])=>({label:s,value:o})).filter(s=>s.value/a*100>=1).sort((s,o)=>o.value-s.value);return ue().value(s=>s.value)(f)},"createPieArcs"),Ce=p((e,a,f,x)=>{F.debug(`rendering pie chart
`+e);const s=x.db,o=X(),l=Y(s.getConfig(),o.pie),t=40,n=18,c=4,d=450,y=d,h=ee(a),u=h.append("g");u.attr("transform","translate("+y/2+","+d/2+")");const{themeVariables:i}=o;let[v]=te(i.pieOuterStrokeWidth);v??=2;const A=l.textPosition,m=Math.min(y,d)/2-t,C=R().innerRadius(0).outerRadius(m),$=R().innerRadius(m*A).outerRadius(m*A);u.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const g=s.getSections(),w=De(g),D=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let E=0;g.forEach(r=>{E+=r});const O=w.filter(r=>(r.data.value/E*100).toFixed(0)!=="0"),k=le(D);u.selectAll("mySlices").data(O).enter().append("path").attr("d",C).attr("fill",r=>k(r.data.label)).attr("class","pieCircle"),u.selectAll("mySlices").data(O).enter().append("text").text(r=>(r.data.value/E*100).toFixed(0)+"%").attr("transform",r=>"translate("+$.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),u.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const W=[...g.entries()].map(([r,M])=>({label:r,value:M})),b=u.selectAll(".legend").data(W).enter().append("g").attr("class","legend").attr("transform",(r,M)=>{const P=n+c,B=P*W.length/2,V=12*n,U=M*P-B;return"translate("+V+","+U+")"});b.append("rect").attr("width",n).attr("height",n).style("fill",r=>k(r.label)).style("stroke",r=>k(r.label)),b.append("text").attr("x",n+c).attr("y",n-c).text(r=>s.getShowData()?`${r.label} [${r.value}]`:r.label);const _=Math.max(...b.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),L=y+t+n+c+_;h.attr("viewBox",`0 0 ${L} ${d}`),ae(h,d,L,l.useMaxWidth)},"draw"),$e={draw:Ce},We={parser:ye,db:I,renderer:$e,styles:we};export{We as diagram};
