/* ── SHARED HEADER ── */
const SHdr=({icon,title,sub,badge,bCls='text-cyan-300 border-cyan-400/40 bg-cyan-400/8'})=>(
  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/6">
    <div className="flex items-center gap-2.5">
      <div className="p-1.5 rounded-lg bg-cyan-400/8 border border-cyan-400/20 text-cyan-300">{icon}</div>
      <div>
        <h2 className="text-cyan-300 text-sm font-bold font-chakra tracking-wider uppercase ncyan">{title}</h2>
        {sub&&<p className="text-[10px] text-gray-600 font-mono mt-0.5">{sub}</p>}
      </div>
    </div>
    {badge&&<span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${bCls}`}>{badge}</span>}
  </div>
);
