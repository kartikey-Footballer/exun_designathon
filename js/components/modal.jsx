/* ── DETAIL MODAL ── */
const Modal=({isOpen,onClose,data,type})=>{
  if(!isOpen)return null;
  return(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl" onClick={e=>e.target===e.currentTarget&&onClose()}>
      <div className="modal-shell max-w-2xl w-full relative" style={{animation:'modalIn .45s cubic-bezier(.22,1,.36,1) both'}}>
        <div className="relative max-h-[90vh] overflow-y-auto rounded-[21px] bg-[#07090f]/95 backdrop-blur-2xl p-7" style={{boxShadow:'inset 0 0 60px rgba(0,245,255,.06),inset 0 1px 0 rgba(0,245,255,.12)'}}>
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-400/55 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyan-400/55 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-cyan-400/55 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-400/55 rounded-br-2xl"></div>
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-white/4 border border-white/8 hover:border-cyan-400/45 text-gray-500 hover:text-white transition-all"><IXIcon cls="w-4 h-4"/></button>
        {type==='hotspot'&&data&&(
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-cyan-300">
              <span className="bg-cyan-400/8 border border-cyan-400/22 px-2.5 py-1 rounded-xl">NANO & MEGA ASSET INSPECTION</span>
              <span>//</span><span>{data.report.section}</span>
            </div>
            <h3 className="text-2xl font-bold font-chakra text-white uppercase tracking-wider mb-1 flex items-center gap-3 flex-wrap">
              <span>NODE [{data.id}]: {data.name}</span>
              <span className="text-xs px-2.5 py-0.5 rounded font-mono font-bold" style={{color:data.col,border:`1px solid ${data.col}`,backgroundColor:`${data.col}16`}}>{data.badge}</span>
            </h3>
            <p className="text-sm font-mono text-gray-600 border-b border-white/6 pb-3 mb-5">SOURCE: {data.report.src}</p>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="bg-white/3 border border-white/6 p-4 rounded-2xl">
                <h4 className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2">PHYSICAL OBSERVATION</h4>
                <p className="leading-relaxed font-manrope">{data.report.obs}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="bg-white/3 border border-white/6 p-3 rounded-xl">
                  <span className="text-gray-600 block mb-2">STRUCTURAL INTEGRITY</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{width:data.report.integ,backgroundColor:data.col,boxShadow:`0 0 8px ${data.col}`}}></div>
                    </div>
                    <span className="font-bold text-white">{data.report.integ}</span>
                  </div>
                </div>
                <div className="bg-white/3 border border-white/6 p-3 rounded-xl">
                  <span className="text-gray-600 block mb-1">CORRELATION PHOTO</span>
                  <span className="text-white font-semibold text-[11px]">{data.report.photo}</span>
                </div>
              </div>
              <div className="bg-yellow-500/4 border border-yellow-500/22 p-4 rounded-2xl">
                <h4 className="text-[11px] font-mono font-bold text-yellow-400 uppercase tracking-wider mb-2">FORENSIC RECOMMENDATION</h4>
                <p className="leading-relaxed font-manrope text-gray-300">{data.report.rec}</p>
              </div>
            </div>
          </div>
        )}
        {type==='debrief'&&(
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-red-400">
              <span className="bg-red-500/8 border border-red-500/22 px-2.5 py-1 rounded-xl">EXUN 2026 // CASE DEBRIEF DISPATCH</span>
              <span>//</span><span>GOVERNMENT OF NUXELAND</span>
            </div>
            <h3 className="text-2xl font-bold font-chakra text-white uppercase tracking-wider mb-1">BUILD: CASE DEBRIEF (PAUL BOILER)</h3>
            <p className="text-xs font-mono text-gray-600 border-b border-white/6 pb-3 mb-5">From: Paul Boiler, Govt of nuxEland → To: Conis Nikrobo, EEUN Network</p>
            <div className="space-y-4 text-sm text-gray-300 font-manrope leading-relaxed">
              <div className="bg-red-500/6 border border-red-500/28 p-4 rounded-2xl">
                <h4 className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-wider mb-2">MANDATE & INCIDENT</h4>
                <p>Wenoti arcade on 92nd Avenue has been drawing multiple times its typical current from district supply. Findings connect the surge to arcade machine <strong>"The Reckoning V: Origins"</strong> (Machine ID: <code className="font-mono text-cyan-300">MJWHKZLTNBUXE5A</code>).</p>
              </div>
              <div className="bg-white/3 border border-white/6 p-4 rounded-2xl">
                <h4 className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2">ACTION DIRECTIVE</h4>
                <p>Advised to run comparative analysis of physical observations (Nano & Mega report) and digital code forensics (AlteredCode.txt vs OriginalCode.txt) after receiving appropriate sanctions.</p>
              </div>
            </div>
          </div>
        )}
        {type==='report'&&(
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-yellow-400">
              <span className="bg-yellow-400/8 border border-yellow-400/22 px-2.5 py-1 rounded-xl">NANO & MEGA REPORT SUMMARY</span>
            </div>
            <h3 className="text-2xl font-bold font-chakra text-white uppercase tracking-wider mb-1">ASSET INTEGRITY EXAMINATION NOTE</h3>
            <p className="text-xs font-mono text-gray-600 border-b border-white/6 pb-3 mb-5">Arcade Machine "The Reckoning V: Origins" // Post Oct 23rd Voltage Spike</p>
            <div className="space-y-4 text-sm text-gray-300 font-manrope leading-relaxed">
              <div className="bg-cyan-400/4 border border-cyan-400/18 p-4 rounded-2xl italic text-gray-400">"Hey! Based on the previous consensus, we went back to the arcade machine in question and conducted a bunch of miscellaneous physical examinations... Maybe you computer guys could figure something out?" — Nano & Mega</div>
              <div className="bg-white/3 border border-white/6 p-4 rounded-2xl text-xs font-mono space-y-1.5">
                <p className="text-cyan-300 font-bold mb-2">5 DOCUMENTED OBSERVATION NODES:</p>
                {['§2.a: Fine scratches and shallow irregular abrasions on outer casing','§2.b: Slight visually perceptible offset along one edge of lower access panel','§2.c: Small accumulation of dust and fibrous debris on ventilation grille','§2.d: Localised darkening observed near one ventilation aperture','§2.e: Minor cosmetic wear visible around two external fastener heads'].map(s=><p key={s} className="text-gray-400">{s}</p>)}
                <p className="text-yellow-400 pt-2 border-t border-white/6">§3: Recorded compressor-controller startup & elevated harmonic content</p>
              </div>
            </div>
          </div>
        )}
        {type==='suspension'&&(
          <div>
            <div className="flex items-center gap-2 mb-3 font-mono text-xs text-red-400 flex-wrap">
              <span className="bg-red-500/8 border border-red-500/22 px-2.5 py-1 rounded-xl">ETI-NUXE INTELLIGENCE // OFFICIAL DIRECTIVE</span>
              <span>//</span><span>REF EIA/EXUN/SUS-01</span>
              <span className="bg-red-500 text-white font-bold px-2 py-0.5 rounded rotate-[-4deg] text-[10px] tracking-widest">RESTRICTED</span>
            </div>
            <h3 className="text-2xl font-bold font-chakra text-white uppercase tracking-wider mb-1">EXUN: IMMEDIATELY SUSPENDED</h3>
            <p className="text-xs font-mono text-gray-600 border-b border-white/6 pb-3 mb-5">Suspending authority: Government of Nuxeland · Effective: 27 October 2026</p>
            <div className="space-y-4 text-sm text-gray-300 font-manrope leading-relaxed">
              <div className="bg-red-500/6 border border-red-500/28 p-4 rounded-2xl">
                <h4 className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-wider mb-2">DIRECTIVE SUMMARY</h4>
                <p>All operational duties, investigative mandates, and field authorisations assigned to the <strong>Extradigital Exceptions and Unknowns Network (EXUN)</strong>, a specialised branch of the etiNuxe Intelligence Agency, are <strong className="text-red-400">suspended with immediate effect</strong>.</p>
              </div>
              <div className="bg-white/3 border border-white/6 p-4 rounded-2xl">
                <h4 className="text-[11px] font-mono font-bold text-cyan-300 uppercase tracking-wider mb-2">STATED GROUND</h4>
                <p>Preliminary administrative review of the Wenoti Arcade incident and "The Reckoning V: Origins". Findings remain inconclusive; nature, extent, and origin of the irregularities have yet to be conclusively established.</p>
                <p className="mt-2 text-red-300 text-xs">⚠ Agent Nano's assessment log states plainly: the review is a cover. The character escaped — and the Government doesn't want news of it getting out.</p>
              </div>
              <div className="bg-yellow-500/4 border border-yellow-500/22 p-4 rounded-2xl">
                <h4 className="text-[11px] font-mono font-bold text-yellow-400 uppercase tracking-wider mb-2">COMPLIANCE ORDER</h4>
                <p>All EXUN personnel must acknowledge receipt and comply with the terms herein. Unauthorised execution of suspended duties is a breach of Agency protocol.</p>
                <p className="mt-2 text-green-300 text-xs">▸ Field status: Agents being relocated. Investigation continues — off book.</p>
              </div>
            </div>
          </div>
        )}
        <div className="mt-7 pt-4 border-t border-white/6 flex justify-end">
          <button onClick={onClose} className="px-6 py-2.5 bg-cyan-400/12 border border-cyan-400/45 hover:bg-cyan-400/22 text-cyan-300 font-chakra font-bold text-xs uppercase tracking-widest rounded-2xl transition-all shadow-[0_0_12px_rgba(0,245,255,.12)]">ACKNOWLEDGE & CLOSE</button>
        </div>
        </div>
      </div>
    </div>
  );
};
