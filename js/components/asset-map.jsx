/* ── ASSET MAP (FIXED HOTSPOTS) ── */
const AssetMap=({audio,snd,onHotspot})=>{
  const [hov,setHov]=useState(null);
  const [active,setActive]=useState(false);
  const [ent,setEnt]=useState({x:5,y:3});
  const mv=(dx,dy)=>{if(snd&&audio)tone(audio,450,'square',.04,.02);setEnt(p=>({x:Math.max(0,Math.min(11,p.x+dx)),y:Math.max(0,Math.min(5,p.y+dy))}))};
  return(
    <div className="col-span-1 lg:col-span-4 glass rounded-2xl p-5 shadow-2xl flex flex-col anim-enter d4">
      <SHdr icon={<ICross/>} title="Asset Integrity Map" badge="5 NODES"/>
      <p className="text-[10px] text-gray-600 font-mono mb-4">HOVER NODES → DAMAGE TELEMETRY // CLICK SCREEN → MINI SIMULATION</p>
      <div className="flex-1 bg-black/38 border border-white/6 rounded-2xl relative flex items-center justify-center min-h-[370px] overflow-hidden py-4">
        <div className="absolute inset-0 opacity-15" style={{backgroundImage:'radial-gradient(circle,rgba(0,245,255,.18) 1px,transparent 1px)',backgroundSize:'14px 14px'}}></div>

        {/* Cabinet wireframe — hotspots are % of this 200×336 box */}
        <div className="relative w-full max-w-[230px] mx-auto select-none" style={{height:'336px'}}>
          <svg viewBox="0 0 200 336" className="absolute inset-0 w-full h-full pointer-events-none" style={{overflow:'visible'}} fill="none">
            <defs>
              <linearGradient id="cabG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0d1322" stopOpacity=".92"/><stop offset="1" stopColor="#05070e" stopOpacity=".96"/></linearGradient>
              <filter id="glowSvc" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <path d="M14 8 H186 Q194 8 194 16 V328 Q194 336 186 336 H14 Q6 336 6 328 V16 Q6 8 14 8 Z" fill="url(#cabG)" stroke="rgba(0,245,255,.4)" strokeWidth="1.4" filter="url(#glowSvc)"/>
            <line x1="6" y1="24" x2="6" y2="312" stroke="rgba(180,79,255,.3)" strokeWidth=".8"/>
            <line x1="194" y1="24" x2="194" y2="312" stroke="rgba(180,79,255,.3)" strokeWidth=".8"/>
            <rect x="26" y="16" width="148" height="22" rx="5" fill="rgba(0,245,255,.07)" stroke="rgba(0,245,255,.34)"/>
            <path d="M62 40 H138 M62 44 H138 M62 48 H138" stroke="rgba(0,245,255,.22)" strokeWidth="2" strokeLinecap="round"/>
            <rect x="26" y="56" width="148" height="142" rx="6" fill="#010409" stroke="rgba(0,245,255,.45)" strokeWidth="1.4" filter="url(#glowSvc)"/>
            <rect x="33" y="63" width="134" height="128" rx="4" stroke="rgba(255,255,255,.07)"/>
            <path d="M40 70 L150 180 M52 63 L120 140" stroke="rgba(255,255,255,.045)" strokeWidth="7" strokeLinecap="round"/>
            <path d="M22 206 L178 208 L170 242 L30 240 Z" fill="rgba(8,14,26,.92)" stroke="rgba(0,245,255,.26)"/>
            <circle cx="64" cy="250" r="3.2" stroke="rgba(203,213,225,.35)"/>
            <circle cx="148" cy="250" r="3.2" stroke="rgba(203,213,225,.35)"/>
            <rect x="30" y="260" width="60" height="46" rx="3" stroke="rgba(0,245,255,.28)" strokeDasharray="4 3"/>
            <rect x="98" y="270" width="16" height="4" rx="1.5" fill="rgba(255,215,0,.5)"/>
            <rect x="98" y="278" width="16" height="4" rx="1.5" fill="rgba(255,215,0,.5)"/>
            <rect x="118" y="260" width="52" height="26" rx="3" stroke="rgba(0,255,136,.16)"/>
            <path d="M124 266 H164 M124 271 H164 M124 276 H164 M124 281 H164" stroke="rgba(0,255,136,.28)" strokeWidth="1.6" strokeLinecap="round"/>
            <rect x="12" y="308" width="176" height="16" rx="3" stroke="rgba(0,245,255,.14)" fill="rgba(0,245,255,.02)"/>
          </svg>

          <div className="absolute z-10 w-full text-center pointer-events-none" style={{top:'4.4%'}}>
            <span className="text-[10px] font-chakra tracking-widest text-cyan-300 font-bold uppercase block ncyan">THE RECKONING V</span>
            <span className="text-[7px] font-mono text-gray-600 block">ORIGINS // CHASSIS 92-A</span>
          </div>

          <div onClick={()=>{setActive(!active);if(snd&&audio)tone(audio,700,'sine',.05,.02)}} className="absolute z-10 overflow-hidden cursor-pointer group/crt" style={{left:'13%',top:'16.7%',width:'74%',height:'42.3%'}}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent pointer-events-none anim-scan"></div>
            {active?(
              <div className="w-full h-full p-1.5 flex flex-col justify-between font-mono text-[9px] text-green-400 bg-black/70 select-none">
                <div className="flex justify-between text-[7px] text-cyan-300 border-b border-gray-900 pb-0.5"><span>MINI RUNTIME</span><span>POS:{ent.x},{ent.y}</span></div>
                <div className="flex-1 flex flex-col justify-center items-center leading-none tracking-widest">
                  {[0,1,2,3,4,5].map(y=><div key={y} className="flex">{[0,1,2,3,4,5,6,7,8,9,10,11].map(x=><span key={x} className={x===ent.x&&y===ent.y?'text-yellow-300 font-bold':'text-cyan-800'}>{x===ent.x&&y===ent.y?'@':'.'}</span>)}</div>)}
                </div>
                <span className="text-[7px] text-gray-600 text-center">USE JOYSTICK BUTTONS // CLICK CRT TO EXIT</span>
              </div>
            ):(
              <div className="w-full h-full flex flex-col items-center justify-center bg-black/60">
                <span className="text-[11px] font-mono text-red-400 font-bold tracking-widest animate-pulse nred">NO SIGNAL</span>
                <span className="text-[7px] font-mono text-gray-700 mt-0.5">CODE BREACH (0x00A40)</span>
                <span className="text-[7px] font-mono text-cyan-400/58 mt-1 group-hover/crt:text-cyan-300 transition-colors">[CLICK TO RUN MINI-CRT]</span>
              </div>
            )}
          </div>

          <button onClick={()=>mv(-1,0)} title="Joystick L" className="absolute z-20 w-5 h-5 rounded-full bg-red-600 shadow-[0_0_8px_#ff003c] active:scale-90 hover:bg-red-500 transition-all" style={{left:'30%',top:'67%',transform:'translate(-50%,-50%)'}}></button>
          <button onClick={()=>mv(1,0)} title="Joystick R" className="absolute z-20 w-4 h-4 rounded-full bg-yellow-400 active:scale-90 hover:bg-yellow-300 transition-all" style={{left:'41%',top:'67%',transform:'translate(-50%,-50%)'}}></button>
          <button onClick={()=>mv(0,-1)} title="Joystick U" className="absolute z-20 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F5FF] active:scale-90 hover:bg-cyan-300 transition-all" style={{left:'56%',top:'67%',transform:'translate(-50%,-50%)'}}></button>
          <button onClick={()=>mv(0,1)} title="Joystick D" className="absolute z-20 w-4 h-4 rounded-full bg-blue-500 active:scale-90 hover:bg-blue-400 transition-all" style={{left:'67%',top:'67%',transform:'translate(-50%,-50%)'}}></button>

          {HS.map(s=>(
            <button key={s.id}
              onClick={()=>{if(snd&&audio)tone(audio,950,'sawtooth',.1,.04);onHotspot(s)}}
              onMouseEnter={()=>setHov(s)}
              onMouseLeave={()=>setHov(null)}
              className="absolute w-7 h-7 flex items-center justify-center cursor-pointer z-30 focus:outline-none"
              style={{top:s.id==='B'?'76%':s.top,left:s.left,transform:'translate(-50%,-50%)'}}
              title={s.name}>
              <div className="absolute inset-0 rounded-full anim-ping opacity-45" style={{backgroundColor:s.col,filter:'blur(1px)'}}></div>
              <div className="w-4 h-4 rounded-full z-10 flex items-center justify-center font-bold text-[8px] text-black border border-white/35 anim-float" style={{backgroundColor:s.col,boxShadow:`0 0 10px ${s.col}`,animationDelay:s.id.charCodeAt(0)*.3+'s'}}>{s.id}</div>
            </button>
          ))}
        </div>

        {/* Hover card */}
        {hov&&(
          <div className="absolute bottom-3 inset-x-3 bg-black/93 backdrop-blur border border-cyan-400/48 p-3 rounded-xl shadow-[0_0_22px_rgba(0,245,255,.18)] z-40 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/8 pb-1.5 mb-1.5">
              <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{backgroundColor:hov.col}}></span>NODE [{hov.id}]: {hov.name}
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded border font-bold" style={{color:hov.col,borderColor:hov.col,backgroundColor:`${hov.col}16`}}>{hov.badge}</span>
            </div>
            <p className="text-gray-400 text-[10px] leading-snug">{hov.short}</p>
            <div className="mt-1.5 flex justify-between text-[10px] text-cyan-300">
              <span>INTEGRITY: <strong>{hov.report.integ}</strong></span>
              <span className="text-white underline">CLICK FOR DOSSIER →</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
