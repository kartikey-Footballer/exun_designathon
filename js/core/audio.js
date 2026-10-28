/* ── AUDIO ── */
const mkAudio=()=>{try{return new(window.AudioContext||window.webkitAudioContext)()}catch(e){return null}};
const tone=(ctx,f,t,d,v=0.04)=>{if(!ctx)return;try{if(ctx.state==='suspended')ctx.resume();const o=ctx.createOscillator(),g=ctx.createGain();o.type=t;o.frequency.setValueAtTime(f,ctx.currentTime);g.gain.setValueAtTime(v,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.0001,ctx.currentTime+d);o.connect(g);g.connect(ctx.destination);o.start();o.stop(ctx.currentTime+d)}catch(e){}};
const alarm=ctx=>{if(!ctx)return;[800,1100,750,1200,950].forEach((f,i)=>setTimeout(()=>tone(ctx,f,'sawtooth',.15,.08),i*110))};
const laser=ctx=>{if(!ctx)return;[400,600,900,1300,1800].forEach((f,i)=>setTimeout(()=>tone(ctx,f,'triangle',.08,.04),i*90))};
