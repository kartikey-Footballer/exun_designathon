/* ── INCIDENT TIMELINE ── */
const IncTimeline=({audio,snd,onSelect})=>{
  const [f,setF]=useState('ALL');
  const [q,setQ]=useState('');
  const filtered=useMemo(()=>TLEvents.filter(e=>(f==='ALL'||e.type===f)&&(e.title+e.detail+e.time).toLowerCase().includes(q.toLowerCase())),[f,q]);
  return(
    <div className="col-span-1 lg:col-span-4 glass rounded-2xl p-5 shadow-2xl flex flex-col anim-enter d2">
      <SHdr icon={<IClock/>} title="Incident Timeline" badge={`${filtered.length} LOGS`}/>
      <div className="relative mb-3">
        <ISearch cls="w-3.5 h-3.5 text-gray-600 absolute left-3 top-2.5"/>
        <input type="text" placeholder="Filter logs..." value={q} onChange={e=>setQ(e.target.value)} className="w-full bg-black/40 border border-white/8 rounded-lg pl-8 pr-3 py-2 text-[11px] font-mono text-gray-300 placeholder-gray-700 focus:outline-none focus:border-cyan-400/45 transition-colors"/>
      </div>
      <div className="flex gap-1.5 mb-4 text-[10px] font-mono flex-wrap">
        {['ALL','CRITICAL','INTERCEPT','FORENSIC'].map(t=>(
          <button key={t} onClick={()=>{setF(t);if(snd&&audio)tone(audio,600,'sine',.04,.025)}} className={`px-2.5 py-1 rounded-lg border transition-all ${f===t?'bg-cyan-400/12 text-cyan-300 border-cyan-400/45':'bg-white/3 text-gray-500 border-white/6 hover:text-gray-300'}`}>{t}</button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto max-h-[320px] pr-1 space-y-3 border-l-2 border-white/5 ml-3 pl-4">
        {filtered.length===0?<div className="text-center py-8 text-gray-600 font-mono text-xs">No logs match filter.</div>:filtered.map(e=>(
          <div key={e.id} onClick={()=>onSelect&&onSelect(e)} className="relative group/l cursor-pointer transition-all hover:translate-x-1">
            <div className={`absolute -left-[22px] top-2 w-3 h-3 rounded-full border-2 ${e.type==='CRITICAL'?'bg-red-500 border-red-400 shadow-[0_0_10px_rgba(255,0,60,.8)]':e.type==='FORENSIC'?'bg-green-500 border-green-400':'bg-cyan-400 border-cyan-300 shadow-[0_0_8px_rgba(0,245,255,.6)]'}`}>
              {e.type==='CRITICAL'&&<div className="absolute inset-0 rounded-full bg-red-400 anim-ping opacity-50"></div>}
            </div>
            <div className="bg-white/3 border border-white/6 group-hover/l:border-cyan-400/28 rounded-xl p-3 transition-colors">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className={`text-[10px] font-mono font-bold ${e.type==='CRITICAL'?'text-red-400':'text-cyan-300'}`}>{e.time}</span>
                <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${e.bc}`}>{e.type}</span>
              </div>
              <h4 className="text-white text-[11px] font-chakra font-bold tracking-wide group-hover/l:text-cyan-300 transition-colors">{e.title}</h4>
              <p className="text-gray-500 text-[11px] mt-1 leading-relaxed">{e.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
