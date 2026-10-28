/* ── OFFICIAL DOSSIER ── */
const Dossier=()=>{
  const [doc,setDoc]=useState('debrief');
  const [dr1,setDr1]=useState(false);
  const [dr2,setDr2]=useState(false);
  const tabs=[
    {id:'debrief',l:'1. Case Debrief (Paul Boiler)',c:'cyan'},
    {id:'report',l:'2. Asset Integrity (Nano & Mega)',c:'cyan'},
    {id:'photos',l:'3. Photo Evidence [REDACTED]',c:'red'},
    {id:'transcript',l:'4. Transcript 1 Surveillance',c:'purple'},
  ];
  const tac={cyan:'bg-cyan-400/12 text-cyan-300 border-cyan-400/38',red:'bg-red-500/12 text-red-400 border-red-500/38',purple:'bg-purple-500/12 text-purple-300 border-purple-500/38'};
  return(
    <div className="glass rounded-2xl p-6 shadow-2xl my-2" style={{animation:'enterUp .5s cubic-bezier(.22,1,.36,1) both'}}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5 pb-4 border-b border-white/6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-500/12 border border-purple-500/38"><IFile cls="text-purple-400 w-5 h-5"/></div>
          <div>
            <h2 className="text-xl font-bold font-chakra text-white uppercase tracking-wider">etiNuxe Intelligence Agency // Case Evidence Dossier</h2>
            <p className="text-xs font-mono text-gray-600">Official Records: Paul Boiler Debrief, Nano & Mega Asset Integrity Report, Physical Evidence</p>
          </div>
        </div>
        <div className="flex flex-wrap bg-black/38 border border-white/6 p-1 rounded-2xl font-mono text-xs gap-1">
          {tabs.map(t=><button key={t.id} onClick={()=>setDoc(t.id)} className={`px-3 py-1.5 rounded-xl border transition-all ${doc===t.id?tac[t.c]:'border-transparent text-gray-500 hover:text-gray-300'}`}>{t.l}</button>)}
        </div>
      </div>
      {doc==='debrief'&&(
        <div className="bg-black/28 border border-white/6 rounded-2xl p-6 font-mono text-sm max-w-4xl mx-auto">
          <div className="border-b border-white/6 pb-4 mb-5 flex justify-between items-start">
            <div><span className="bg-blue-700 text-white font-bold px-2.5 py-0.5 rounded text-xs mr-2">Exun 2026</span><span className="text-cyan-300 font-bold text-lg font-chakra uppercase ncyan">Build: Case Debrief</span></div>
            <span className="text-gray-600 text-xs">CLASSIFIED // SEC-4</span>
          </div>
          <div className="bg-black/38 border border-white/6 p-3 rounded-xl mb-5 text-xs text-gray-400 space-y-1">
            <p><strong className="text-gray-500">From:</strong> Paul Boiler, Government of nuxEland</p>
            <p><strong className="text-gray-500">To:</strong> Conis Nikrobo, Extradigital Exceptions and Unknowns Network</p>
          </div>
          <div className="space-y-4 text-gray-300 font-manrope text-sm leading-relaxed">
            <p>Congratulations: your team has been selected to be part of the <strong className="text-cyan-300">Extradigital Exceptions and Unknowns Network</strong> branch of etiNuxe Intelligence Agency!</p>
            <p className="bg-cyan-400/4 border-l-2 border-cyan-400 p-4 rounded-r-xl"><strong>Wenoti arcade on 92nd avenue</strong> has been drawing multiple times its typical amount of current from the district supply. The owner reported these inexplicable surges and claims not to have made any modifications that could have caused them.</p>
            <p>The proceedings of <strong>[Transcript 1]</strong> suggest a possible connection to the arcade machine <em>"The Reckoning V: Origins"</em>. You are advised to run forensics and comparative analysis of the physical and digital evidence after receiving appropriate sanctions.</p>
          </div>
          <div className="mt-6 pt-4 border-t border-white/6 grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="bg-white/3 p-2.5 rounded-xl border border-white/6"><span className="text-gray-600 block">LOCATION</span><span className="text-white font-bold">Wenoti Arcade, 92nd Avenue, nuxEland</span></div>
            <div className="bg-white/3 p-2.5 rounded-xl border border-white/6"><span className="text-gray-600 block">MACHINE ID</span><span className="text-yellow-400 font-bold font-mono">MJWHKZLTNBUXE5A</span></div>
          </div>
        </div>
      )}
      {doc==='report'&&(
        <div className="bg-black/28 border border-white/6 rounded-2xl p-6 font-mono text-sm max-w-4xl mx-auto space-y-5">
          <div className="border-b border-white/6 pb-4 flex justify-between">
            <div><span className="bg-blue-700 text-white font-bold px-2.5 py-0.5 rounded text-xs mr-2">Exun 2026</span><span className="text-cyan-300 font-bold text-lg font-chakra uppercase">Asset Integrity Report</span></div>
            <span className="text-yellow-400 text-xs font-bold bg-yellow-400/8 border border-yellow-400/28 px-2 py-0.5 rounded">CAUSATION UNDETERMINED</span>
          </div>
          <div className="bg-cyan-400/4 border border-cyan-400/18 p-4 rounded-2xl">
            <h4 className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-1.5 font-chakra">Note from Nano and Mega:</h4>
            <p className="font-manrope text-xs text-gray-400 leading-relaxed italic">"Hey! Based on the previous consensus, we went back to the arcade machine in question and conducted a bunch of miscellaneous physical examinations to assess the external damage following the voltage spike on the 23rd. There's a lot of details to go through, so take your time. Just a heads up, none of this data seems conclusive or supplies valuable evidence, as far as we could tell. Maybe you computer guys could figure something out? Don't bash your heads over it though!"</p>
          </div>
          <div className="space-y-4 font-manrope text-xs text-gray-400 leading-relaxed">
            {[
              ['2a. Enclosure surface damage','Fine scratches and shallow abrasions were observed on the outer casing. Their distribution was irregular, and no distinctive pattern was identified that would establish a particular impact direction or mechanism.'],
              ['2b. Access-panel alignment','A slight, visually perceptible offset was noted along one edge of the lower access panel. The panel remained attached, and no conclusion regarding interference with internal components could be drawn.'],
              ['2c. Ventilation grille','A small accumulation of dust and fibrous debris was present along portions of the ventilation grille. No verified airflow restriction or associated thermal consequence was established.'],
              ['2d. Surface discolouration','Localised darkening was observed near one ventilation aperture. The material\'s composition and the origin of the discolouration were not determined. Cannot independently be classified as evidence of overheating, combustion, or electrical arcing.'],
              ['2e. Fastener condition','Minor cosmetic wear was visible around two externally accessible fastener heads. No verified loss of fastening integrity or corresponding structural instability was recorded.'],
              ['3. Correlation with Electrical Observations','The physical findings do not independently establish a connection with the electrical irregularities documented in the accompanying report. The recorded compressor-controller startup and elevated harmonic content remain observations of undetermined significance.'],
            ].map(([h,b])=>(
              <div key={h}><h4 className="font-mono font-bold text-cyan-300 text-xs mb-1">{h}</h4><p>{b}</p></div>
            ))}
          </div>
        </div>
      )}
      {doc==='photos'&&(
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <h3 className="text-lg font-chakra font-bold text-red-400 uppercase tracking-wider nred">FORENSIC OPTICAL LOG: [REDACTED] EVIDENCE RECONSTRUCTION</h3>
            <p className="text-xs font-mono text-gray-600 mt-1">Toggle spectral de-redaction filter to examine forensic scans from Nano & Mega's inspection report (Page 2).</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {n:1,dr:dr1,setDr:setDr1,l2:'SPECTRAL SCAN: THERMAL ARCS',lR:'VENT_APERTURE',cont:<div className="flex flex-col items-center justify-center py-4"><div className="w-20 h-20 rounded-full border-2 border-red-500 border-dashed flex items-center justify-center bg-red-500/8 animate-pulse"><span className="text-red-400 font-bold text-xs">DARKENING</span></div><span className="text-gray-600 text-[9px] mt-2">Localised thermal scuff gradient</span></div>,note:'Photo 1: External casing exhibiting superficial abrasions and localised surface discolouration near the ventilation assembly.'},
              {n:2,dr:dr2,setDr:setDr2,l2:'JUNCTION SCAN: FASTENERS',lR:'LOWER_ACCESS',cont:<div className="flex flex-col items-center justify-center py-4"><div className="w-32 h-10 border-2 border-yellow-400 border-dashed flex items-center justify-center bg-yellow-400/8"><span className="text-yellow-400 font-bold text-xs">3.2mm OFFSET</span></div><span className="text-gray-600 text-[9px] mt-2">Torque wear on 2 exposed heads</span></div>,note:'Photo 2: Lower access-panel junction showing minor alignment irregularities and cosmetic wear around the exposed fasteners.'},
            ].map(({n,dr,setDr,l2,lR,cont,note})=>(
              <div key={n} className="bg-black/28 border border-white/6 rounded-2xl p-4">
                <div className="flex justify-between items-center text-xs font-mono mb-3">
                  <span className="text-white font-bold">PHOTO {n} // EVIDENCE SCAN</span>
                  <button onClick={()=>setDr(!dr)} className="px-2 py-1 rounded-lg bg-cyan-400/12 border border-cyan-400/38 text-cyan-300 text-[10px] font-bold hover:bg-cyan-400/22 transition-all">{dr?'RESTORE REDACTION':'DE-REDACT FILTER'}</button>
                </div>
                <div className="w-full h-52 rounded-xl bg-black border border-white/8 flex flex-col items-center justify-center overflow-hidden">
                  {dr?(
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-950 to-black p-4 flex flex-col justify-between font-mono text-[10px]">
                      <div className="flex justify-between text-cyan-300"><span>{l2}</span><span>{lR}</span></div>
                      {cont}
                      <span className="text-green-400 text-right text-[9px]">MAGNIFICATION: 40× OPTICAL</span>
                    </div>
                  ):(
                    <div className="w-full h-full bg-[#0f0508] border border-red-500/28 flex flex-col items-center justify-center">
                      <div className="bg-red-500 text-white font-chakra font-bold text-lg px-6 py-2 rotate-[-12deg] shadow-[0_0_18px_rgba(255,0,60,.6)] tracking-widest">[REDACTED]</div>
                      <span className="text-[10px] font-mono text-gray-600 mt-4">CLASSIFIED UNDER ETI-NUXE SECURITY PROTOCOL</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-400 font-manrope mt-3 leading-snug">{note}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {doc==='transcript'&&(
        <div className="bg-black/28 border border-white/6 rounded-2xl p-6 font-mono text-sm max-w-4xl mx-auto space-y-4">
          <div className="border-b border-white/6 pb-3 flex justify-between items-center">
            <span className="text-purple-300 font-bold text-base font-chakra uppercase">[Transcript 1] SURVEILLANCE LOG: WENOTI ARCADE</span>
            <span className="text-xs text-gray-600">DATE: OCT 23, 2026</span>
          </div>
          <div className="space-y-3 text-xs font-mono text-gray-400">
            <p><span className="text-gray-600">[22:30:15]</span> Surveillance Unit 4 established perimeter observation on 92nd Avenue.</p>
            <p><span className="text-cyan-300 font-bold">[22:31:04]</span> <strong className="text-white">DISTRICT SURGE:</strong> Substation feeder spikes from 25.1 kWh baseline to 2,684 kWh peak draw.</p>
            <p><span className="text-yellow-400 font-bold">[22:31:42]</span> <strong className="text-white">POI-1 IDENTIFIED:</strong> Subject enters arcade aisle clad in refractive <span className="italic text-white">"bedazzled armour"</span>. Direct approach to Machine ID MJWHKZLTNBUXE5A.</p>
            <p><span className="text-red-400 font-bold">[22:32:15]</span> <strong className="text-white">ACOUSTIC WARBLING:</strong> Cabinet enclosure begins audible reverberation. CRT raster collapses to white point. Character bounding failure triggered.</p>
            <p><span className="text-purple-400 font-bold">[22:33:01]</span> <strong className="text-white">SUSPECT EGRESS:</strong> POI-1 vacates arcade via rear service door. High EM distortion renders optical tracking offline for 48 seconds.</p>
          </div>
        </div>
      )}
    </div>
  );
};
