/* ── TELEMETRY CHART ── */
const TelChart=({audio,snd,scrub,setScrub})=>{
  const [vm,setVm]=useState('raw');
  const [hov,setHov]=useState(null);
  const ai=ED[scrub]||ED[10];
  const getH=d=>{
    if(vm==='raw') return d.isA?97:d.isX?5:d.isD?22:Math.max(5,(d.kwh/35)*12);
    if(vm==='harmonics') return d.isX?4:Math.max(6,(d.thd/100)*100);
    return d.isA?97:d.isX?4:d.isD?55:12;
  };
  const modes=[
    {id:'raw',l:'Raw Current (kWh)',ac:'bg-cyan-400/12 text-cyan-300 border border-cyan-400/45 shadow-[0_0_8px_rgba(0,245,255,.18)]'},
    {id:'harmonics',l:'Harmonic THD (%)',ac:'bg-red-500/12 text-red-400 border border-red-500/45 shadow-[0_0_8px_rgba(255,0,60,.18)]'},
    {id:'compressor',l:'Compressor Load',ac:'bg-yellow-500/12 text-yellow-300 border border-yellow-500/45 shadow-[0_0_8px_rgba(255,215,0,.18)]'},
  ];
  return(
    <div className="col-span-1 lg:col-span-8 glass rounded-2xl p-5 shadow-2xl anim-enter d1">
      <SHdr icon={<IActivity/>} title="Energy Telemetry & Harmonic Surge Visualizer" sub="Substation 92-B Feeder Current // Wenoti Arcade District Line"/>
      <div className="flex items-center bg-black/40 border border-white/8 p-1 rounded-xl text-[11px] font-mono mb-4 w-fit gap-1">
        {modes.map(m=><button key={m.id} onClick={()=>setVm(m.id)} className={`px-3 py-1.5 rounded-lg transition-all ${vm===m.id?m.ac:'text-gray-500 hover:text-gray-300'}`}>{m.l}</button>)}
      </div>
      <div className="h-52 flex items-end justify-between gap-1 border-b border-white/6 pb-2 relative">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {['100%','66%','33%','0%'].map((l,i)=><div key={i} className="w-full border-t border-dashed border-white/6 flex items-center"><span className="text-[8px] font-mono text-gray-700 ml-1">{l}</span></div>)}
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible opacity-55">
          <path d={`M 10 200 Q 55 198, 110 197 T 220 196 T 330 195 T 440 196 T 520 20 Q 560 110, 620 155 T 720 198 T 860 196`} fill="none" stroke={vm==='harmonics'?'#FF003C':'#00F5FF'} strokeWidth="1.5" strokeDasharray={vm==='harmonics'?'4,3':'none'} style={{filter:`drop-shadow(0 0 6px ${vm==='harmonics'?'#FF003C':'#00F5FF'})`}}/>
        </svg>
        {ED.map((d,i)=>{
          const h=getH(d),isSel=scrub===i||hov===i;
          const tipCl=i<2?'-top-32 left-0 translate-x-0':i>10?'-top-32 right-0 translate-x-0':'-top-32 left-1/2 -translate-x-1/2';
          const arrCl=i<2?'left-4':i>10?'right-4':'left-1/2 -translate-x-1/2';
          return(
            <div key={i} onMouseEnter={()=>{setHov(i);setScrub(i);if(snd&&audio)tone(audio,d.isA?1200:300+(d.kwh/30),'square',.03,.025)}} onMouseLeave={()=>setHov(null)} onClick={()=>setScrub(i)} className="flex flex-col items-center justify-end h-full w-full cursor-pointer relative z-10 group/b">
              {isSel&&(
                <div className={`absolute ${tipCl} bg-black/95 backdrop-blur border border-cyan-400/55 p-3 rounded-xl shadow-[0_0_25px_rgba(0,245,255,.25)] z-50 pointer-events-none whitespace-nowrap font-mono text-xs min-w-[185px]`}>
                  <div className="flex justify-between gap-3 border-b border-white/10 pb-1.5 mb-1.5">
                    <span className="text-white font-bold">{d.date}</span>
                    <span className={`text-[9px] px-1.5 rounded font-bold ${d.isA?'bg-red-500/18 text-red-400 border border-red-500':d.isX?'bg-red-500/12 text-red-400 border border-red-500/40':'bg-white/8 text-gray-400'}`}>{d.st}</span>
                  </div>
                  <div className="space-y-1 text-[11px]">
                    <div className="flex justify-between gap-4"><span className="text-gray-500">Energy:</span><strong className={d.isA?'text-red-400':'text-cyan-300'}>{d.kwh.toLocaleString()} kWh</strong></div>
                    <div className="flex justify-between gap-4"><span className="text-gray-500">THD:</span><strong className="text-yellow-400">{d.thd}%</strong></div>
                    <div className="flex justify-between gap-4"><span className="text-gray-500">Compressor:</span><strong className="text-purple-300">{d.comp}</strong></div>
                  </div>
                  <div className={`absolute -bottom-1.5 ${arrCl} w-3 h-3 bg-black/95 border-r border-b border-cyan-400/55 rotate-45`}></div>
                </div>
              )}
              {d.isA&&(
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
                  <span className="text-[9px] font-chakra font-bold text-red-400 bg-black/90 border border-red-500 px-1 rounded animate-bounce">+10,636%</span>
                  <div className="w-1.5 h-1.5 bg-red-500 rotate-45 mt-0.5"></div>
                </div>
              )}
              <div className={`relative overflow-hidden w-full rounded-t-sm transition-all duration-300 ${d.isA?'bg-gradient-to-t from-red-900 via-red-600 to-red-400 shadow-[0_0_18px_rgba(255,0,60,.9)] animate-pulse':d.isX?'bg-gradient-to-t from-black to-red-500/25 border-t border-red-500/60':d.isD?'bg-gradient-to-t from-orange-950 to-orange-500/65':isSel?'bg-gradient-to-t from-cyan-900 to-cyan-400 shadow-[0_0_12px_rgba(0,245,255,.6)]':'bg-gradient-to-t from-gray-800/90 to-gray-600/80 group-hover/b:from-cyan-900 group-hover/b:to-cyan-500'}`} style={{height:`${h}%`}}><div className="absolute inset-0 bg-gradient-to-b from-white/18 via-white/4 to-transparent" style={{height:'26%'}}></div></div>
              <span className={`text-[9px] mt-1.5 font-mono whitespace-nowrap ${d.isA||isSel?'text-red-400 font-bold':'text-gray-600 group-hover/b:text-cyan-400'}`}>{d.date.split(' ')[1]}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-gray-500">
          <IZap cls="w-3.5 h-3.5 text-cyan-300"/>
          <span className="text-cyan-300 font-bold">TIMELINE SCRUBBER:</span>
          <span className="text-white font-bold">{ai.date} — {ai.kwh.toLocaleString()} kWh</span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-2/5">
          <input type="range" min="0" max={`${ED.length-1}`} value={scrub} onChange={e=>{const v=parseInt(e.target.value);setScrub(v);if(snd&&audio)tone(audio,300+v*40,'triangle',.02,.015)}} className="w-full h-1.5 rounded-full"/>
          <span className="text-[10px] text-gray-600 whitespace-nowrap">OCT 13 → 27</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
        {[
          {l:'BASELINE REGIME',v:'26.8 kWh',vc:'text-cyan-300',bg:''},
          {l:'PEAK OVERLOAD (OCT 23)',v:'2,684.0 kWh',vc:'text-red-400',bg:'bg-red-500/6 border-red-500/28'},
          {l:'HARMONIC RESONANCE',v:'94.2% THD (12.4 kHz)',vc:'text-yellow-400',bg:''},
          {l:'ANOMALY MULTIPLIER',v:'107.4× Standard Grid',vc:'text-white font-bold',bg:''},
        ].map(({l,v,vc,bg})=>(
          <div key={l} className={`${bg||'bg-white/3 border-white/6'} border rounded-xl p-3`}>
            <span className="text-gray-600 block text-[9px] font-mono tracking-wider mb-1">{l}</span>
            <span className={`font-bold text-sm font-mono ${vc}`}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
