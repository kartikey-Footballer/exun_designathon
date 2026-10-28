/* ── CODE DIFF VIEWER ── */
const CodeDiff=({audio,snd,onLaunch})=>{
  const [m,setM]=useState('split');
  const [scanning,setScanning]=useState(false);
  const [scanned,setScanned]=useState(false);
  const [copied,setCopied]=useState(false);
  const scan=()=>{setScanning(true);setScanned(false);if(audio)laser(audio);setTimeout(()=>{setScanning(false);setScanned(true)},2200)};
  const copy=()=>{navigator.clipboard.writeText(AC.map(l=>l.t).join('\n'));setCopied(true);setTimeout(()=>setCopied(false),2000)};
  const lc=l=>{
    if(l.tp==='d') return 'line-through text-red-500/75 font-semibold';
    if(l.tp==='e') return 'text-red-400 font-bold underline decoration-wavy decoration-red-500/65';
    if(l.tp==='c') return 'text-orange-400 italic';
    if(l.t&&l.t.includes('//')) return 'text-gray-600 italic';
    if(l.t&&(l.t.includes('class ')||l.t.startsWith('public')||l.t.startsWith('private'))) return 'text-cyan-300';
    return 'text-gray-400';
  };
  const lco=l=>{
    if(l.t&&l.t.includes('class Character')) return 'text-yellow-300 font-bold';
    if(l.t&&l.t.includes('std::clamp')) return 'text-green-400 font-bold bg-green-900/18 px-1 rounded';
    if(l.t&&l.t.includes('//')) return 'text-gray-600 italic';
    if(l.t&&(l.t.includes('class ')||l.t.startsWith('public')||l.t.startsWith('private')||l.t.startsWith('int main'))) return 'text-cyan-300';
    return 'text-gray-400';
  };
  return(
    <div className="col-span-1 lg:col-span-8 glass-red rounded-2xl shadow-2xl overflow-hidden flex flex-col relative anim-enter d3">
      {scanning&&<div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#00F5FF] z-40 pointer-events-none anim-sweep" style={{position:'absolute'}}></div>}
      <div className="bg-red-500/7 border-b border-red-500/22 px-5 py-3.5 flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-red-500/12 border border-red-500/28"><ITerm cls="text-red-400 w-5 h-5"/></div>
          <div>
            <h3 className="text-red-400 font-chakra text-sm font-bold tracking-widest uppercase nred">Code Forensics: Entity Memory Unbounding</h3>
            <p className="text-[10px] font-mono text-gray-600">OriginalCode.txt (Clean Archive) vs AlteredCode.txt (Corrupted ROM Dump)</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button onClick={scan} className={`px-3 py-1.5 rounded-xl font-mono text-[11px] font-bold flex items-center gap-1.5 border transition-all ${scanning?'bg-cyan-400/18 border-cyan-400 text-cyan-300 animate-pulse':'bg-cyan-400/7 border-cyan-400/38 text-cyan-400 hover:bg-cyan-400/14'}`}><ICpu cls="w-3.5 h-3.5"/><span>{scanning?'SCANNING RAM...':'SCAN MEMORY SEGMENT'}</span></button>
          <button onClick={onLaunch} className="px-3 py-1.5 bg-green-500/9 border border-green-500/45 hover:bg-green-500/18 text-green-400 rounded-xl font-mono text-[11px] font-bold flex items-center gap-1.5 transition-all shadow-[0_0_8px_rgba(0,255,136,.12)]"><IPlay cls="w-3.5 h-3.5"/><span>RUN C++ SIMULATOR</span></button>
          <div className="flex bg-black/38 border border-white/8 p-0.5 rounded-xl text-[11px] font-mono gap-0.5">
            {['split','unified'].map(v=><button key={v} onClick={()=>{setM(v);if(snd&&audio)tone(audio,750,'triangle',.05,.025)}} className={`px-2.5 py-1 rounded-lg capitalize transition-all ${m===v?'bg-red-500/18 text-red-400 border border-red-500/38':'text-gray-500 hover:text-gray-300'}`}>{v==='split'?'Split Diff':'Unified'}</button>)}
          </div>
          <button onClick={copy} className="px-2.5 py-1.5 bg-white/4 border border-white/8 hover:border-white/22 text-gray-400 rounded-xl font-mono text-[11px] transition-all">{copied?'✓ COPIED':'COPY CODE'}</button>
        </div>
      </div>
      {scanned&&<div className="bg-black/78 border-b border-cyan-400/28 p-2.5 px-5 font-mono text-xs flex flex-wrap justify-between text-cyan-300 gap-3">
        <span>BINARY OFFSET: <strong>0x00000A40 – 0x00000F80</strong></span>
        <span>MISSING: <strong className="text-red-400">1,344 BYTES DELETED</strong></span>
        <span>SYMBOL: <strong className="text-red-400">'Character' UNRESOLVED</strong></span>
        <span className="text-yellow-400">RUNTIME BREACH: <strong>CONFIRMED</strong></span>
      </div>}
      {m==='split'?(
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/6 font-mono text-xs flex-1 min-h-[280px]">
          <div className="p-4 bg-black/18 overflow-y-auto max-h-[440px]">
            <div className="flex justify-between items-center text-xs mb-3 border-b border-white/6 pb-2">
              <span className="text-green-400 font-bold flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>// OriginalCode.txt</span>
              <span className="text-[10px] text-green-300 bg-green-500/8 border border-green-500/28 px-2 py-0.5 rounded">BOUNDS SECURE</span>
            </div>
            <div className="space-y-0.5 leading-relaxed">
              {OC.map(l=>(
                <div key={l.n} className="flex hover:bg-white/4 py-0.5 px-1 rounded group">
                  <span className="text-gray-700 select-none w-7 text-right pr-3 flex-shrink-0 text-[10px] group-hover:text-gray-500">{l.n}</span>
                  <span className={lco(l)}>{l.t||'\u00A0'}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-black/28 overflow-y-auto max-h-[440px] flex flex-col">
            <div className="flex justify-between items-center text-xs mb-3 border-b border-white/6 pb-2">
              <span className="text-red-400 font-bold flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block"></span>// AlteredCode.txt</span>
              <span className="text-[10px] text-red-400 bg-red-500/8 border border-red-500/28 px-2 py-0.5 rounded animate-pulse">BREACHED / CHARACTER ERASED</span>
            </div>
            <div className="space-y-0.5 leading-relaxed flex-1">
              {AC.map(l=>(
                <div key={l.n} className={`flex py-0.5 px-1 rounded ${l.tp==='d'?'bg-red-500/9':l.tp==='e'?'bg-yellow-500/7':l.tp==='c'?'bg-orange-500/7':'hover:bg-white/3'}`}>
                  <span className="text-gray-700 select-none w-7 text-right pr-3 flex-shrink-0 text-[10px]">{l.n}</span>
                  <span className={lc(l)}>{l.t||'\u00A0'}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 border border-red-500/45 bg-black/78 backdrop-blur rounded-xl p-3.5 shadow-[0_0_18px_rgba(255,0,60,.22)]">
              <div className="flex items-start gap-2.5">
                <IAlert cls="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5 animate-pulse"/>
                <div>
                  <p className="text-red-400 font-chakra font-bold text-[11px] uppercase tracking-wider">FATAL RUNTIME FAULT: UNDECLARED IDENTIFIER 'Character'</p>
                  <p className="text-gray-400 text-[11px] mt-1 leading-relaxed">'class Character' completely deleted from ROM flash. Coordinate bounds clamp (<code className="text-green-400">std::clamp</code>) ceased execution, permitting extradigital entity escape into physical reality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ):(
        <div className="p-5 bg-black/18 font-mono text-xs overflow-x-auto flex-1 min-h-[280px]">
          <div className="text-gray-600 mb-3 pb-2 border-b border-white/6 text-[11px]">
            --- a/OriginalCode.txt (Clean Archive)<br/>+++ b/AlteredCode.txt (Extracted Flash Memory)
          </div>
          <pre className="whitespace-pre text-gray-400 space-y-0.5">
            <span className="text-gray-600">{"@@ -8,17 +8,2 @@ class Character Removal @@\n"}</span>
            <span className="text-red-400 bg-red-500/9 block">{"- class Character {\n- public:\n-     Character(int x, int y) : x_(x), y_(y) {}\n-     void move(int dx, int dy, int width, int height) {\n-         x_ = std::clamp(x_ + dx, 0, width - 1);\n-         y_ = std::clamp(y_ + dy, 0, height - 1);\n-     }\n-     int x() const { return x_; }\n-     int y() const { return y_; }\n- };"}</span>{"\n"}
            <span className="text-green-400 bg-green-500/7 block">{"+ // [FATAL ERROR: Symbol 'class Character' deleted from EEPROM sector]\n+ // Position bounds logic bypassed — Extradigital entity escape triggered"}</span>{"\n"}
            <span className="text-gray-600">{"@@ -30,3 +21,3 @@ World::render Reference @@\n"}</span>
            <span className="text-red-400 block">{"-     void render(const Character& ch) const {\n"}</span>
            <span className="text-red-400 font-bold block">{"+     void render(const Character& ch) const { // ERROR: 'Character' undeclared\n"}</span>
          </pre>
        </div>
      )}
    </div>
  );
};
