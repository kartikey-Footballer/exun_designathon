/* ── TAB 4 · SUSPENDED OPERATIONS VAULT ── */
const Vault=({audio,snd})=>{
  const [doc,setDoc]=useState('notice');
  const [dec,setDec]=useState({notice:false,log:false,note:false});
  const [shown,setShown]=useState(0);
  const total=VDNote.lines.length;
  useEffect(()=>{
    if(doc!=='note')return;
    const id=setInterval(()=>{
      setShown(s=>{
        if(s>=total){clearInterval(id);return s}
        if(snd&&audio)tone(audio,700+Math.random()*500,'sine',.03,.02);
        return s+1;
      });
    },380);
    return()=>clearInterval(id);
  },[doc]);
  const lift=id=>{setDec(d=>({...d,[id]:true}));if(snd&&audio){tone(audio,520,'sawtooth',.12,.05);setTimeout(()=>audio&&tone(audio,880,'sine',.14,.04),120)}};
  /* segment helper: array of [substring, className] marks applied in order */
  const Seg=(t,ms)=>{
    if(!t)return null;
    if(!ms||!ms.length)return t;
    const [[p,cls,...r],...rest]=ms;
    const i=t.indexOf(p);
    if(i<0)return Seg(t,rest);
    return [t.slice(0,i),<strong key={p} className={cls}>{p}</strong>,Seg(t.slice(i+p.length),rest)];
  };
  const docs=[
    {id:'notice',l:'SUSPENSION NOTICE',c:'red'},
    {id:'log',l:'PROGRESS ASSESSMENT LOG',c:'yellow'},
    {id:'note',l:'NOTE FROM NANO',c:'green'},
  ];
  const dc={red:'bg-red-500/12 text-red-400 border-red-500/45',yellow:'bg-yellow-500/12 text-yellow-300 border-yellow-500/45',green:'bg-green-500/12 text-green-300 border-green-500/45'};
  const Seal=({name,c})=>(
    <div className="absolute top-4 right-4 pointer-events-none select-none z-30" style={{animation:'stampIn .45s cubic-bezier(.22,1,.36,1) both'}}>
      <span className="block font-chakra font-black text-base px-4 py-1.5 border-[3px] rounded-md rotate-[-9deg] tracking-[.25em]" style={{borderColor:c,color:c,boxShadow:`0 0 22px ${c}55, inset 0 0 10px ${c}18`}}>{name}</span>
    </div>
  );
  return(
    <div className="glass-red rounded-2xl p-6 shadow-2xl my-2" style={{animation:'enterUp .5s cubic-bezier(.22,1,.36,1) both'}}>
      <div className="flex flex-col xl:flex-row gap-6">
        {/* ── MAIN COLUMN ── */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 pb-4 border-b border-red-500/12">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-red-500/12 border border-red-500/38"><ILock cls="text-red-400 w-5 h-5"/></div>
              <div>
                <h2 className="text-xl font-bold font-chakra text-white uppercase tracking-wider">Suspension Vault <span className="text-red-400">//</span> Post-SUS-01 Evidence Hold</h2>
                <p className="text-xs font-mono text-gray-600">Documents intercepted before archiving by the etiNuxe Intelligence Agency. Read at your own risk, Agent.</p>
              </div>
            </div>
            <div className="flex flex-wrap bg-black/38 border border-white/6 p-1 rounded-2xl font-mono text-[11px] gap-1">
              {docs.map(d=><button key={d.id} onClick={()=>{setDoc(d.id);if(snd&&audio)tone(audio,600,'sine',.04,.025)}} className={`px-3 py-1.5 rounded-xl border transition-all ${doc===d.id?dc[d.c]:'border-transparent text-gray-500 hover:text-gray-300'}`}>{d.l}</button>)}
            </div>
          </div>

          {doc==='notice'&&(
            <div className="paper relative bg-black/28 border border-red-500/22 rounded-2xl p-7 font-mono text-sm max-w-4xl space-y-4" style={{animation:'enterUp .4s ease both'}}>
              {dec.notice&&<Seal name="DECLASSIFIED" c="#00F5FF"/>}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px]">
                {[['DOCUMENT CLASSIFICATION',VDNotice.classification],['NOTICE REFERENCE',VDNotice.ref],['EFFECTIVE',VDNotice.effective],['ISSUING AUTHORITY','Govt. of Nuxeland']].map(([k,v])=>(
                  <div key={k} className="bg-white/3 border border-white/6 rounded-lg px-2.5 py-2"><span className="text-gray-600 block mb-0.5">{k}</span><span className="text-white font-bold">{v}</span></div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                <div><p className="text-[9px] text-gray-600 uppercase tracking-widest mb-1">To</p><p className="text-gray-300">{VDNotice.recipient}</p></div>
                <div><p className="text-[9px] text-gray-600 uppercase tracking-widest mb-1">Subject</p><p className="text-red-400 font-bold font-chakra tracking-wider">{VDNotice.subject}</p></div>
              </div>
              <div className="space-y-3 font-manrope text-[13px] text-gray-300 leading-relaxed border-t border-white/6 pt-4">
                {VDNotice.body.map((b,i)=>(
                  <p key={i}>
                    {i===0?Seg(b,[['are hereby suspended with immediate effect.','text-red-400']]):
                     i===1?Seg(b,[['"The Reckoning V: Origins"','text-yellow-300']]):
                     i===2?Seg(b,[['All personnel attached to EXUN','text-white']]):b}
                  </p>
                ))}
              </div>
              <div className="border-t border-white/6 pt-4">
                <p className="text-white font-chakra font-bold text-sm tracking-wider">{VDNotice.sign}</p>
              </div>
              <div className="bg-red-500/6 border border-red-500/28 rounded-xl p-3.5">
                <p className="text-[11px] text-gray-400 leading-relaxed">{VDNotice.warn}</p>
              </div>
              <p className="text-[9px] text-gray-700 tracking-widest pt-1">EXUN 2026 // EVIDENCE VAULT ARCHIVE{dec.notice?' // DECLASSIFIED BY FIELD OPERATOR // UNAUTHORISED':''}</p>
            </div>
          )}

          {doc==='log'&&(
            <div className="paper relative bg-black/28 border border-yellow-500/22 rounded-2xl p-7 font-mono text-sm max-w-4xl space-y-4" style={{animation:'enterUp .4s ease both'}}>
              {dec.log&&<Seal name="DECLASSIFIED" c="#00F5FF"/>}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-[10px]">
                {[['ASSESSOR',VDLog.assessor],['STATUS',VDLog.status],['LOGGED AT',VDLog.effective],['CASE','MJWHKZLTNBUXE5A']].map(([k,v])=>(
                  <div key={k} className="bg-white/3 border border-white/6 rounded-lg px-2.5 py-2"><span className="text-gray-600 block mb-0.5">{k}</span><span className="text-yellow-300 font-bold">{v}</span></div>
                ))}
              </div>
              <div className="space-y-3 font-manrope text-[13px] text-gray-300 leading-relaxed border-t border-white/6 pt-4">
                {VDLog.body.map((b,i)=>(
                  <p key={i}>
                    {i===2?Seg(b,[["He WASN'T a cosplayer!!!",'text-red-400 font-bold'],['completely missing.','text-white font-bold']]):
                     i===3?Seg(b,[['The character. Escaped.','text-cyan-300 font-bold']]):b}
                  </p>
                ))}
              </div>
              <div className="bg-red-500/8 border border-red-500/38 rounded-2xl p-5 text-center">
                <p className="text-[10px] text-red-400 tracking-[.3em] mb-2">AREA OF CONCERN</p>
                <p className="text-red-300 font-bold text-sm leading-snug">“{VDLog.pillar}”</p>
                <p className="text-[10px] text-gray-500 mt-2 pulse-slow">{VDLog.statusFoot}</p>
              </div>
            </div>
          )}

          {doc==='note'&&(
            <div className="paper relative bg-black/28 border border-green-500/22 rounded-2xl p-7 font-mono text-sm max-w-4xl" style={{animation:'enterUp .4s ease both'}}>
              {shown>=total&&<Seal name="SENT :)" c="#00FF88"/>}
              <div className="flex justify-between items-center mb-4 border-b border-white/6 pb-3 flex-wrap gap-2">
                <span className="text-green-300 font-bold text-base">{VDNote.head}</span>
                <div className="flex items-center gap-2 text-[10px] text-gray-600">
                  <span>SENDER: {VDNote.from}</span>
                  <button onClick={()=>setShown(total)} className="px-2 py-1 rounded-lg bg-white/4 border border-white/8 hover:border-green-500/45 text-gray-500 hover:text-green-300 transition-all">SKIP ▸▸</button>
                </div>
              </div>
              <div className="space-y-4 text-[13px] text-gray-300 leading-relaxed">
                {VDNote.lines.map((l,i)=>i<shown?(
                  <div key={i} className="flex gap-3 items-start" style={{animation:'enterUp .3s ease both'}}>
                    <span className="text-green-400/45 text-[10px] mt-1.5 flex-shrink-0">{String(i*7).padStart(4,'0')}</span>
                    <p className="flex-1">
                      {i===0?Seg(l,[['counts at the least as treason and breach of protocol','text-red-400/90 italic'],["I'm sticking my head out for you buddy!",'text-green-300']]):
                       i===2?Seg(l,[['the first of a digital jailbreak','text-white font-bold'],['video game characters disappearing from arcades without a trace','text-white font-bold']]):
                       i===3?Seg(l,[['the real reason why EXUN got suspended','text-red-300']]):
                       i===4?Seg(l,[['What are you going to do now?','text-white font-bold']]):l}
                      {i===shown-1&&shown<total&&<span className="tw-caret inline-block w-2.5 h-4 bg-green-400 align-middle animate-pulse ml-1"></span>}
                    </p>
                  </div>
                ):null)}
                {shown>=total&&(
                  <div className="flex gap-3 items-start" style={{animation:'enterUp .3s ease both'}}>
                    <span className="text-green-400/45 text-[10px] mt-1.5">{String(total*7).padStart(4,'0')}</span>
                    <p className="flex-1">— <span className="text-green-300 font-bold">N.</span> <span className="text-[10px] text-gray-600">// AGENT NANO · UNTRACEABLE DISPATCH · TREAT AS TREASON</span></p>
                  </div>
                )}
              </div>
              {dec.note&&<p className="mt-5 bg-green-500/5 border border-green-500/25 rounded-xl p-3.5 text-[11px] text-gray-400 leading-relaxed">Operator addendum: the vault stays open. Someone has to finish this. <span className="text-green-300 font-bold">Case status: OPEN — OFF BOOK.</span></p>}
              {!dec.note&&(
                <button onClick={()=>lift('note')} className="mt-5 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/45 text-green-300 font-chakra font-bold text-xs uppercase tracking-widest hover:bg-green-500/20 transition-all">VERIFY TRANSMISSION SOURCE</button>
              )}
            </div>
          )}
        </div>

        {/* ── SIDE COLUMN ── */}
        <div className="w-full xl:w-[310px] flex-shrink-0 flex flex-col gap-4">
          <div className="glass-red rounded-2xl p-4">
            <p className="text-[10px] text-red-400 tracking-[.25em] mb-3 flex items-center gap-2"><IAlert cls="w-3.5 h-3.5 animate-pulse"/>EXUN OPERATIONAL STATUS</p>
            <div className="space-y-2.5 text-[11px]">
              {[
                ['DUTIES','SUSPENDED','text-red-400 font-bold'],
                ['DIRECTIVE','EIA/EXUN/SUS-01','text-white'],
                ['EFFECTIVE','27 OCT 2026','text-white'],
                ['AGENTS','RELOCATING','text-yellow-400 font-bold'],
                ["NANO'S THEORY",'CONFIRMED','text-cyan-300 font-bold'],
                ['CASE','OPEN — OFF BOOK','text-green-300 font-bold'],
              ].map(([k,v,c])=>(
                <div key={k} className="flex justify-between gap-2"><span className="text-gray-600">{k}</span><span className={c}>{v}</span></div>
              ))}
            </div>
          </div>
          <div className="glass-red rounded-2xl p-4 flex-1">
            <p className="text-[10px] text-purple-300 tracking-[.25em] mb-3 flex items-center gap-2"><IActivity cls="w-3.5 h-3.5"/>GLOBAL JAILBREAK FEED</p>
            <div className="space-y-3 max-h-[340px] overflow-y-auto pr-1">
              {VDGlobal.map((g,i)=>(
                <div key={g.id} className="relative pl-4" style={{animation:`enterUp .4s ease both ${i*.12}s`}}>
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(180,79,255,.8)] anim-ping"></div>
                  <p className="text-white text-[10px] font-bold">{g.region}</p>
                  <p className="text-gray-500 text-[11px] leading-relaxed mt-0.5">{g.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-[9px] text-gray-700 mt-3 border-t border-white/6 pt-2.5 leading-relaxed">Characters vanishing worldwide without trace. The Government doesn't want news of this getting out. // DON'T LISTEN TO THE JARGON.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
