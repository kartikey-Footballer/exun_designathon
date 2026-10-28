(function(){
    var cv=document.getElementById('particleCanvas');if(!cv)return;
    var ctx=cv.getContext('2d'),w,h,dpr;
    var pts=[],stars=[],mx=0,my=0,tx=0,ty=0;
    var pal=['#00F5FF','#00F5FF','#B44FFF','#FF003C','#00FF88'];
    function rs(){dpr=Math.min(window.devicePixelRatio||1,2);w=window.innerWidth;h=window.innerHeight;cv.width=w*dpr;cv.height=h*dpr;cv.style.width=w+'px';cv.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0)}
    window.addEventListener('resize',rs);
    window.addEventListener('mousemove',function(e){tx=e.clientX/w-.5;ty=e.clientY/h-.5},{passive:true});
    rs();
    for(var i=0;i<48;i++)pts.push({x:Math.random()*w,y:Math.random()*h,z:Math.random()*.7+.3,vx:(Math.random()-.5)*.16,vy:(Math.random()-.5)*.16,r:Math.random()*1.4+.5,a:Math.random()*.35+.08,c:pal[Math.floor(Math.random()*pal.length)],ap:Math.random()*Math.PI*2});
    for(var j=0;j<90;j++)stars.push({x:Math.random()*w,y:Math.random()*h,z:Math.random()*.5+.15,ph:Math.random()*Math.PI*2,sp:Math.random()*1.6+.4});
    function draw(t){
        mx+=(tx-mx)*.05;my+=(ty-my)*.05;
        ctx.clearRect(0,0,w,h);
        for(var i=0;i<pts.length;i++){
            var a=pts[i];a.x+=a.vx;a.y+=a.vy;
            if(a.x<-30)a.x=w+30;if(a.x>w+30)a.x=-30;if(a.y<-30)a.y=h+30;if(a.y>h+30)a.y=-30;
            var ox=a.x+mx*42*a.z,oy=a.y+my*42*a.z;
            for(var k=i+1;k<pts.length;k++){
                var b=pts[k],bx=b.x+mx*42*b.z,by=b.y+my*42*b.z;
                var dx=ox-bx,dy=oy-by,d=Math.sqrt(dx*dx+dy*dy);
                if(d<120){ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(bx,by);ctx.strokeStyle='rgba(0,245,255,'+(0.04*(1-d/120))+')';ctx.lineWidth=.4;ctx.stroke();}
            }
            var tw=.6+.4*Math.sin(t*.0012+a.ap);
            ctx.globalAlpha=a.a*tw;ctx.fillStyle=a.c;ctx.beginPath();ctx.arc(ox,oy,a.r,0,Math.PI*2);ctx.fill();
            ctx.globalAlpha=a.a*.25*tw;ctx.beginPath();ctx.arc(ox,oy,a.r*3,0,Math.PI*2);ctx.fill();
        }
        for(var s=0;s<stars.length;s++){
            var st=stars[s];
            var sx=st.x+mx*16*st.z,sy=st.y+my*16*st.z;
            var sa=(st.z)*(0.35+0.3*Math.sin(t*.002*st.sp+st.ph));
            ctx.globalAlpha=Math.max(0,sa);ctx.fillStyle='#cfefff';
            ctx.beginPath();ctx.arc(sx,sy,st.z*1.1+.3,0,Math.PI*2);ctx.fill();
        }
        ctx.globalAlpha=1;requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
})();
