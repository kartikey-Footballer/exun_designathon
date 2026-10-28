/* ── RETRO GAME SIMULATOR ── */
const GameSim=({audio,snd,onBreach})=>{
  const [pos,setPos]=useState({x:12,y:6});
  const [breach,setBreach]=useState(false);
  const [moves,setMoves]=useState(0);
  const [log,setLog]=useState('Game engine initialized: world_(24,12), character_(12,6). Bounds clamp active.');
  const W=24,H=12;
  const mv=useCallback((dx,dy)=>{
    if(snd&&audio)tone(audio,breach?200:560,'square',.04,.025);
    const nx=breach?pos.x+dx:Math.max(0,Math.min(W-1,pos.x+dx));
    const ny=breach?pos.y+dy:Math.max(0,Math.min(H-1,pos.y+dy));
    setPos({x:nx,y:ny});
    setLog(breach?`CRITICAL: Character bounds bypassed! Entity at (${nx},${ny}) outside matrix!`:`character_.move(${dx},${dy},24,12) → bounded at (${nx},${ny})`);
    setMoves(c=>c+1);
  },[breach,pos,snd,audio]);
  const triggerBreach=()=>{setBreach(true);setLog('FATAL ALERT: Class Character deleted from memory! std::clamp eradicated. Entity escaping!');if(audio)alarm(audio);if(onBreach)onBreach()};
  const reset=()=>{setBreach(false);setPos({x:12,y:6});setMoves(0);setLog('Game engine re-flashed: Clean Character(12,6) bound to World(24,12).')};
  useEffect(()=>{
    const h=e=>{
      if(e.target.tagName==='INPUT')return;
      if(e.key==='w'||e.key==='W'||e.key==='ArrowUp')mv(0,-1);
      else if(e.key==='s'||e.key==='S'||e.key==='ArrowDown')mv(0,1);
      else if(e.key==='a'||e.key==='A'||e.key==='ArrowLeft')mv(-1,0);
      else if(e.key==='d'||e.key==='D'||e.key==='ArrowRight')mv(1,0);
    };
    window.addEventListener('keydown',h);return()=>window.removeEventListener('keydown',h);
  },[mv]);
  const escaped=pos.x<0||pos.x>=W||pos.y<0||pos.y>=H;
  return(
    <div className="glass rounded-2xl p-6 shadow-2xl my-2" style={{animation:'enterUp .5s cubic-bezier(.22,1,.36,1) both'}}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5 pb-4 border-b border-white/6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-green-500/12 text-green-300 border border-green-500/28 text-[10px] font-mono px-2 py-0.5 rounded font-bold">LIVE C++ SIMULATOR</span>
            <h2 className="text-base font-bold font-chakra text-white uppercase tracking-wider">"The Reckoning V: Origins" — Runtime Engine Simulation</h2>
          </div>
          <p className="text-xs font-mono text-gray-600">Exact ASCII execution of World::render(const Character&) and Game::run() loop</p>
        </div>
        <div className="flex gap-3 font-mono text-xs">
          <button onClick={triggerBreach} className={`px-4 py-2 rounded-xl font-bold font-chakra tracking-wider uppercase transition-all ${breach?'bg-red-500 text-white shadow-[0_0_25px_rgba(255,0,60,.8)] animate-pulse':'bg-red-500/12 text-red-400 border border-red-500/45 hover:bg-red-500/22'}`}>{breach?'⚡ ENTITY BREACHED!':'SIMULATE EXTRADIGITAL BREACH'}</button>
          <button onClick={reset} className="px-3 py-2 bg-white/4 border border-white/12 hover:border-white/28 text-gray-400 rounded-xl transition-all">RESET RUNTIME</button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className={`col-span-1 lg:col-span-8 bg-black border-2 rounded-2xl p-5 relative overflow-hidden crt-flick ${breach?'border-red-500/65 crt-screen-red':'border-cyan-400/38 crt-screen'}`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/3 to-transparent pointer-events-none anim-scan"></div>
          <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.1) 2px,rgba(0,0,0,.1) 4px)',borderRadius:'inherit'}}></div>
          <div className="absolute inset-0 pointer-events-none crt-veil z-[5]"></div>
          <div className="absolute inset-0 pointer-events-none phosphor"></div>
          <div className="w-full flex justify-between text-[11px] font-mono text-gray-600 border-b border-gray-900 pb-2 mb-3 relative z-10">
            <span className="text-cyan-300">RESOLUTION: 24 × 12 CHARS</span>
            <span>X={pos.x}, Y={pos.y} | MOVES={moves}</span>
            <span className={breach?'text-red-400 font-bold animate-pulse':'text-green-400'}>{breach?'BOUNDS: UNCONSTRAINED':'BOUNDS: std::clamp ACTIVE'}</span>
          </div>
          <div className="font-mono text-sm leading-tight p-3 bg-[#030508] border border-gray-900 rounded-xl relative z-10 min-h-[200px] flex flex-col items-center justify-center">
            {Array.from({length:H},(_,y)=>(
              <div key={y} className="flex space-x-1 tracking-widest select-none">
                {Array.from({length:W},(_,x)=>{
                  const ie=x===pos.x&&y===pos.y;
                  return<span key={x} className={ie?(breach?'text-red-400 font-bold text-base animate-ping':'text-cyan-300 font-bold text-base ncyan'):'text-cyan-700/70'}>{ie?'@':'.'}</span>;
                })}
              </div>
            ))}
          </div>
          {escaped&&(
            <div className="absolute inset-6 bg-black/95 border border-red-500 rounded-2xl p-5 z-30 flex flex-col items-center justify-center text-center shadow-[0_0_40px_rgba(255,0,60,.8)] animate-pulse">
              <p className="text-red-400 font-bold text-lg uppercase font-chakra nred">EXTRADIGITAL ESCAPE CONFIRMED</p>
              <p className="text-gray-400 text-sm mt-2 font-mono leading-relaxed">Entity @ exceeded the 24×12 matrix. Substation 92-B logged 2,684 kWh spike.</p>
            </div>
          )}
          <div className="w-full mt-3 pt-2 border-t border-gray-900 font-mono text-xs text-gray-600 relative z-10">
            <span className="text-cyan-300">&gt; </span><span>{log}</span>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4 bg-white/3 border border-white/6 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-chakra font-bold text-white uppercase tracking-wider mb-2">ENGINE CONTROLS</h3>
            <p className="text-xs text-gray-500 font-mono mb-5 leading-relaxed">
              Keys <kbd className="bg-gray-900 text-cyan-300 px-1.5 py-0.5 rounded border border-gray-700 text-[10px]">W</kbd>{' '}
              <kbd className="bg-gray-900 text-cyan-300 px-1.5 py-0.5 rounded border border-gray-700 text-[10px]">A</kbd>{' '}
              <kbd className="bg-gray-900 text-cyan-300 px-1.5 py-0.5 rounded border border-gray-700 text-[10px]">S</kbd>{' '}
              <kbd className="bg-gray-900 text-cyan-300 px-1.5 py-0.5 rounded border border-gray-700 text-[10px]">D</kbd>{' '}
              or Arrow keys or on-screen D-pad.
            </p>
          </div>
          <div className="flex flex-col items-center gap-1 my-2">
            <button onClick={()=>mv(0,-1)} className="w-12 h-12 bg-gray-900 border border-cyan-400/28 hover:bg-cyan-400/12 text-cyan-300 font-chakra font-bold rounded-xl flex items-center justify-center shadow transition-all active:scale-90">W</button>
            <div className="flex gap-1">
              <button onClick={()=>mv(-1,0)} className="w-12 h-12 bg-gray-900 border border-cyan-400/28 hover:bg-cyan-400/12 text-cyan-300 font-chakra font-bold rounded-xl flex items-center justify-center shadow transition-all active:scale-90">A</button>
              <button onClick={()=>mv(0,1)}  className="w-12 h-12 bg-gray-900 border border-cyan-400/28 hover:bg-cyan-400/12 text-cyan-300 font-chakra font-bold rounded-xl flex items-center justify-center shadow transition-all active:scale-90">S</button>
              <button onClick={()=>mv(1,0)}  className="w-12 h-12 bg-gray-900 border border-cyan-400/28 hover:bg-cyan-400/12 text-cyan-300 font-chakra font-bold rounded-xl flex items-center justify-center shadow transition-all active:scale-90">D</button>
            </div>
          </div>
          <div className="bg-black/48 border border-white/6 rounded-xl p-3 text-[11px] font-mono text-gray-500 mt-2">
            <span className="text-gray-600 block mb-1">// Clamping Logic in OriginalCode:</span>
            <span className="text-green-400 block">x_ = std::clamp(x + dx, 0, 23);</span>
            <span className="text-green-400 block">y_ = std::clamp(y + dy, 0, 11);</span>
          </div>
        </div>
      </div>
    </div>
  );
};
