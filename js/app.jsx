/* ── ROOT APP ── */
const App=()=>{
  const [snd,setSnd]=useState(false);
  const [audio,setAudio]=useState(null);
  const [tab,setTab]=useState('matrix');
  const [modal,setModal]=useState(null);
  const [mdata,setMdata]=useState(null);
  const [scrub,setScrub]=useState(10);
  useEffect(()=>{
    const a=mkAudio();setAudio(a);
    const wake=()=>{if(a&&a.state==='suspended')a.resume()};
    window.addEventListener('pointerdown',wake);window.addEventListener('keydown',wake);
    return()=>{window.removeEventListener('pointerdown',wake);window.removeEventListener('keydown',wake)}
  },[]);
  useEffect(()=>{
    const h=e=>{
      if(e.target.tagName==='INPUT')return;
      if(e.key==='Escape'){setModal(null);setMdata(null);}
      if(e.key==='1')setTab('matrix');
      if(e.key==='2')setTab('simulator');
      if(e.key==='3')setTab('dossier');
      if(e.key==='4')setTab('vault');
    };
    window.addEventListener('keydown',h);return()=>window.removeEventListener('keydown',h);
  },[]);
  const openH=h=>{setMdata(h);setModal('hotspot')};
  const openD=e=>{if(e&&e.id==='e8'){openS();return}setMdata(null);setModal('debrief')};
  const openR=()=>{setMdata(null);setModal('report')};
  const openS=()=>{setMdata(null);setModal('suspension')};
  const close=()=>{setModal(null);setMdata(null)};
  return(
    <div className="min-h-screen p-3 sm:p-5 lg:p-7 max-w-[1760px] mx-auto flex flex-col">
      <Header audio={audio} snd={snd} setSnd={setSnd} tab={tab} setTab={setTab} onDebrief={openD} onReport={openR} onSusp={openS}/>
      {tab==='matrix'&&(
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-2">
          <TelChart audio={audio} snd={snd} scrub={scrub} setScrub={setScrub}/>
          <IncTimeline audio={audio} snd={snd} onSelect={openD}/>
          <CodeDiff audio={audio} snd={snd} onLaunch={()=>setTab('simulator')}/>
          <AssetMap audio={audio} snd={snd} onHotspot={openH}/>
        </main>
      )}
      {tab==='simulator'&&<GameSim audio={audio} snd={snd} onBreach={()=>{if(audio)alarm(audio)}}/>}
      {tab==='dossier'&&<Dossier/>}
      {tab==='vault'&&<Vault audio={audio} snd={snd}/>}
      <footer className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-gray-600 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#FF003C]"></span>
          <span>EEUN FORENSIC SUITE // EXUN 2026 COMPETITION SUBMISSION // <span className="text-red-400">DUTIES SUSPENDED — CASE OPEN (OFF BOOK)</span></span>
        </div>
        <div className="flex items-center gap-3">
          <span>SHORTCUTS: [1] MATRIX | [2] SIMULATOR | [3] DOSSIER | [4] VAULT</span>
          <span className="text-gray-700">//</span>
          <span>AUTH: CONIS NIKROBO & PAUL BOILER</span>
        </div>
      </footer>
      <Modal isOpen={modal!==null} onClose={close} data={mdata} type={modal}/>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
