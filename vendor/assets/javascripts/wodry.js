/* Sergey Golovin 2014 golovim@gmail.com */

(function(){var a,b={}.hasOwnProperty;a=jQuery,a.fn.extend({wodry:function(c){var d,e,f,g,h;return null==c&&(c={}),e=a.extend({},c),null==e.separator&&(e.separator="|"),null==e.delay&&(e.delay=2e3),null==e.animationDuration&&(e.animationDuration=500),null==e.animation&&(e.animation="rotateY"),null==e.callback&&(e.callback=function(){}),null==e.shift&&(e.shift={}),null==(f=e.shift).x&&(f.x=0),null==(g=e.shift).y&&(g.y=0),null==(h=e.shift).z&&(h.z=0),d={rotateY:{front_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px)",back_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) rotateY(180deg)",action:{transform:" rotateY(180deg)",transition:" "+e.animationDuration+"ms"}},rotateX:{front_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px)",back_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) rotateX(180deg)",action:{transform:" rotateX(180deg)",transition:" "+e.animationDuration+"ms"}},rotateAll:{isCoplex:!0,front_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) rotateX(180deg) rotateY(180deg)",back_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) rotateX(180deg) rotateY(180deg)",action:{transform:" rotateX(180deg) rotateY(180deg)",transition:" "+e.animationDuration+"ms"}},scaleX:{isCoplex:!0,front_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) scaleX(0.1)",back_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) scaleX(0.1)",action:{transform:" scaleX(10)",transition:" "+e.animationDuration+"ms"}},scaleY:{isCoplex:!0,front_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) scaleY(0.1)",back_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) scaleY(0.1)",action:{transform:" scaleY(10)",transition:" "+e.animationDuration+"ms"}},scaleAll:{isCoplex:!0,front_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) scaleY(0.1) slaleX(0.1)",back_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) scaleY(0.1) scaleX(0.1)",action:{transform:" scaleY(10) scaleX(10)",transition:" "+e.animationDuration+"ms"}},anticlockwise:{isCoplex:!0,front_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) rotate3d(100,40,-80,180deg)",back_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) rotate3d(100,40,-80,180deg)",action:{transform:" rotate3d(100,40,-80,180deg)",transition:" "+e.animationDuration+"ms"}},clockwise:{isCoplex:!0,front_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) rotate3d(40,100,80,180deg)",back_transform:"translate3d("+e.shift.x+"px,"+e.shift.y+"px,"+e.shift.z+"px) rotate3d(40,100,80,180deg)",action:{transform:" rotate3d(40,100,80,180deg)",transition:" "+e.animationDuration+"ms"}}},this.each(function(){var c,f,g,h,i;return h=a(this),f=[],a.each(h.text().split(e.separator),function(a,b){return f.push(b)}),h.text(f[0]),i=function(a,c){var d,e,f,g,h,i,j,k,l,m,n;for(i={},g={},l=0,m=a.length;m>l;l++)h=a[l],d=a.indexOf(h),g[h]=c[d];if(a.length===c.length){for(h in g)b.call(g,h)&&(j=g[h],n=["-webkit-"+h,"-moz-"+h,"-o-"+h],k=n[0],e=n[1],f=n[2],i[k]=j,i[e]=j,i[f]=j,i[h]=j);return i}},c=function(b,c,d,e){return c.html(""),a("<span class='front-face'>"+d+"</span>").appendTo(c),a("."+c.context.className+" .front-face").css(i(["transform"],[b.front_transform])),a("<span class='back-face'>"+e+"</span>").appendTo(c),a("."+c.context.className+" .back-face").css(i(["transform"],[b.back_transform])),c.wrapInner("<span class='wodry-flipping' />").find(".wodry-flipping").hide().show().css(i(["transform","transition"],[b.action.transform,b.action.transition])),b.isCoplex?setTimeout(function(){return a("."+c.context.className+" .front-face").remove()},1):void 0},g=function(){var b,g;return h.find(".back-face").length>0&&h.html(h.find(".back-face").html()),g=h.text(),b=a.inArray(g,f),b+1===f.length&&(b=-1),c(d[e.animation],h,g,f[b+1])},setInterval(function(){return g(),e.callback()},e.delay+e.animationDuration)})}})}).call(this);
//# sourceMappingURL=wodry.min.map