/* ── HEADER ── */
const Header=({audio,snd,setSnd,tab,setTab,onDebrief,onReport,onSusp})=>{
  const [time,setTime]=useState('');
  useEffect(()=>{const t=()=>setTime(new Date().toISOString().slice(0,19).replace('T',' // ')+' UTC');t();const id=setInterval(t,1000);return()=>clearInterval(id)},[]);
  const toggleSnd=()=>{if(!snd&&audio)tone(audio,880,'sine',.1,.05);setSnd(!snd)};
  const tabs=[
    {id:'matrix',label:'1. FORENSIC COMMAND MATRIX',icon:<IActivity cls="w-3.5 h-3.5"/>,as:'bg-cyan-400/15 text-cyan-300 border-cyan-400/50 shadow-[0_0_12px_rgba(0,245,255,0.2)]'},
    {id:'simulator',label:'2. LIVE RETRO GAME SIMULATOR',icon:<IPlay cls="w-3.5 h-3.5"/>,as:'bg-green-500/15 text-green-300 border-green-500/50 shadow-[0_0_12px_rgba(0,255,136,0.15)]'},
    {id:'dossier',label:'3. OFFICIAL CASE DOSSIER',icon:<IFile cls="w-3.5 h-3.5"/>,as:'bg-purple-500/15 text-purple-300 border-purple-500/50 shadow-[0_0_12px_rgba(180,79,255,0.15)]'},
    {id:'vault',label:'4. SUSPENSION VAULT',icon:<ILock cls="w-3.5 h-3.5"/>,as:'bg-red-500/15 text-red-300 border-red-500/50 shadow-[0_0_12px_rgba(255,0,60,0.18)]'},
  ];
  return(
    <header className="mb-5 anim-enter">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 bg-black/40 backdrop-blur border border-cyan-400/10 px-3 py-1.5 rounded-xl text-[11px] font-mono">
        <div className="flex items-center gap-3">
          <span className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white font-bold px-2.5 py-0.5 rounded shadow-[0_0_12px_rgba(0,200,255,.4)] text-xs tracking-wider">EXUN 2026</span>
          <span className="text-gray-400 font-semibold">BUILD COMPETITION FORENSIC DOSSIER</span>
          <span className="text-gray-700 hidden sm:block">|</span>
          <span className="text-cyan-400 hidden sm:block">SPECIAL AGENT INVESTIGATION TERMINAL</span>
          <span className="bg-red-500/12 border border-red-500/45 text-red-400 px-2 py-0.5 rounded font-bold animate-pulse">EXUN SUSPENDED // SUS-01</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 hidden md:flex">
          <span>AUTH:</span><span className="text-green-400 font-bold">CONIS NIKROBO & PAUL BOILER (LVL 4)</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 flex-shrink-0">
            <div className="absolute inset-0 rounded-xl bg-cyan-400/8 border border-red-500/35 flex items-center justify-center shadow-[0_0_30px_rgba(255,0,60,.2)]">
              <ICross cls="text-red-300 w-7 h-7 animate-spin" style={{animationDuration:'20s'}}/>
              <div className="absolute -rotate-12 w-[130%] bg-red-500 text-white font-chakra font-black text-[8px] tracking-[.3em] text-center py-0.5 shadow-[0_0_14px_rgba(255,0,60,.55)]">SUSPENDED</div>
            </div>
            <div className="absolute inset-0 rounded-xl border border-red-500/25 animate-ping" style={{animationDuration:'3s'}}></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[11px] font-mono text-cyan-300 font-bold bg-cyan-400/8 px-2 py-0.5 rounded border border-cyan-400/20">ETI-NUXE INTELLIGENCE</span>
              <span className="text-gray-700 font-mono text-xs">//</span>
              <span className="text-[11px] font-mono text-gray-600">EXTRADIGITAL EXCEPTIONS AND UNKNOWNS NETWORK (EEUN)</span>
              <span className="text-[10px] font-mono text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/35 tracking-widest">DUTIES SUSPENDED — REF EIA/EXUN/SUS-01</span>
            </div>
            <h1 className="text-cyan-300 text-3xl lg:text-4xl font-black font-chakra uppercase tracking-wider ncyan leading-none">EEUN COMMAND <span className="text-white/25">//</span> FORENSIC SUITE <span className="text-red-500/80 text-xl lg:text-2xl">[OFF BOOK]</span></h1>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
          <div className="flex items-center gap-2 bg-black/50 border border-cyan-400/20 px-3 py-1.5 rounded-xl text-cyan-300 backdrop-blur">
            <IClock cls="w-3.5 h-3.5"/><span>SYS_TIME: <strong className="text-white">{time||'INIT...'}</strong></span>
          </div>
          <button onClick={toggleSnd} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${snd?'border-cyan-400/45 text-cyan-300 bg-cyan-400/8 shadow-[0_0_10px_rgba(0,245,255,.15)]':'border-white/8 text-gray-500 bg-white/4 hover:border-white/18'}`}>
            {snd?<IVolOn cls="w-3.5 h-3.5"/>:<IVolOff cls="w-3.5 h-3.5"/>}<span>{snd?'AUDIO ON':'MUTED'}</span>
          </button>
          <div onClick={onDebrief} className="glitch flex items-center gap-2 bg-red-500/12 border border-red-500/65 text-red-400 px-3.5 py-1.5 rounded-xl font-bold font-chakra tracking-widest uppercase shadow-[0_0_18px_rgba(255,0,60,.28)] cursor-pointer hover:shadow-[0_0_30px_rgba(255,0,60,.5)] transition-all">
            <IAlert cls="w-4 h-4 animate-pulse"/><span>CRITICAL ANOMALY DETECTED</span>
          </div>
          <div onClick={onSusp} className="glitch flex items-center gap-2 bg-black/70 border border-red-500/80 text-red-300 px-3.5 py-1.5 rounded-xl font-bold font-chakra tracking-widest uppercase shadow-[0_0_18px_rgba(255,0,60,.4)] cursor-pointer hover:shadow-[0_0_30px_rgba(255,0,60,.6)] transition-all relative overflow-hidden">
            <ILock cls="w-4 h-4 animate-pulse"/><span>EXUN SUSPENDED</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 bg-black/28 backdrop-blur border border-white/6 rounded-2xl p-2">
        <div className="flex flex-wrap items-center gap-1.5">
          {tabs.map(t=>(
            <button key={t.id} onClick={()=>setTab(t.id)} className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold font-mono text-xs border transition-all duration-200 ${tab===t.id?t.as:'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/4'}`}>
              {t.icon}<span>{t.label}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {[['CASE DEBRIEF',onDebrief],['NANO & MEGA REPORT',onReport],['SUSPENSION NOTICE',onSusp]].map(([l,fn])=>(
            <button key={l} onClick={fn} className={`px-3 py-1.5 rounded-lg border transition-all text-[11px] font-mono ${l==='SUSPENSION NOTICE'?'bg-red-500/10 border-red-500/35 text-red-400 hover:border-red-500/60':'bg-white/4 border-white/8 hover:border-cyan-400/38 text-gray-500 hover:text-cyan-300'}`}>{l}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-3">
        {[
          ['AGENCY',<span className="flex items-center gap-1"><IShield cls="w-3 h-3 text-red-400"/>etiNuxe Intelligence Agency</span>,'text-white'],
          ['CASE ID','MJWHKZLTNBUXE5A','text-cyan-300 font-bold tracking-wider font-mono'],
          ['LOCATION','Wenoti Arcade, 92nd Ave, nuxEland','text-gray-300'],
          ['TARGET','"The Reckoning V: Origins"','text-yellow-400 font-bold'],
          ['STATUS','SUSPENDED — CASE OPEN','text-red-400 font-bold'],
        ].map(([label,val,vc])=>(
          <div key={label} className="bg-black/28 border border-red-500/10 rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-mono">
            <span className="text-gray-600 flex-shrink-0">{label}:</span><span className={vc}>{val}</span>
          </div>
        ))}
      </div>
    </header>
  );
};
