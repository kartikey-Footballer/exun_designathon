/* ── ICONS ── */
const Svg=({cls='w-5 h-5',vb='0 0 24 24',ch,style})=><svg className={cls} style={style} xmlns="http://www.w3.org/2000/svg" viewBox={vb} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ch}</svg>;
const IActivity=({cls})=><Svg cls={cls||'w-5 h-5'} ch={<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>}/>;
const ICross=({cls})=><Svg cls={cls||'w-5 h-5'} ch={<><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></>}/>;
const ITerm=({cls})=><Svg cls={cls||'w-5 h-5'} ch={<><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></>}/>;
const IClock=({cls})=><Svg cls={cls||'w-5 h-5'} ch={<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}/>;
const IAlert=({cls})=><Svg cls={cls||'w-4 h-4'} ch={<><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>}/>;
const IShield=({cls})=><Svg cls={cls||'w-4 h-4'} ch={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>}/>;
const IFile=({cls})=><Svg cls={cls||'w-5 h-5'} ch={<><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></>}/>;
const ISearch=({cls})=><Svg cls={cls||'w-4 h-4'} ch={<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>}/>;
const IVolOn=({cls})=><Svg cls={cls||'w-4 h-4'} ch={<><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></>}/>;
const IVolOff=({cls})=><Svg cls={cls||'w-4 h-4'} ch={<><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></>}/>;
const IXIcon=({cls})=><Svg cls={cls||'w-5 h-5'} ch={<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>}/>;
const IPlay=({cls})=><Svg cls={cls||'w-4 h-4'} ch={<polygon points="5 3 19 12 5 21 5 3"/>}/>;
const ICpu=({cls})=><Svg cls={cls||'w-4 h-4'} ch={<><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></>}/>;
const IZap=({cls})=><Svg cls={cls||'w-4 h-4'} ch={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>}/>;
const ILock=({cls})=><Svg cls={cls||'w-4 h-4'} ch={<><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>}/>;
