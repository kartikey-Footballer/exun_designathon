/* ── SUSPENDED OPERATIONS VAULT :: classified documents seized post-SUS-01 ── */

/* Document 1 — Official suspension directive */
const VDNotice={
  id:'notice',
  ref:'EIA/EXUN/SUS-01',
  title:'Suspension Notice',
  effective:'27 OCTOBER 2026',
  classification:'RESTRICTED',
  issuer:'Government of Nuxeland',
  recipient:'Extradigital Exceptions and Unknowns Network (EXUN)',
  subject:'IMMEDIATE SUSPENSION OF OPERATIONAL AUTHORITY',
  body:[
    'By order of the competent authority of the Government of Nuxeland, all operational duties, investigative mandates, and field authorisations previously assigned to the Extradigital Exceptions and Unknowns Network (EXUN), a specialised branch of the etiNuxe Intelligence Agency, are hereby suspended with immediate effect.',
    'This directive follows a preliminary administrative review of the circumstances surrounding the Wenoti Arcade incident and the subsequent investigation into the anomalous activity associated with the arcade machine designated "The Reckoning V: Origins". The findings available to the Agency remain inconclusive, and the nature, extent, and origin of the reported irregularities have yet to be conclusively established.',
    'All personnel attached to EXUN are directed to acknowledge receipt of this notice and comply fully with the terms set forth herein.',
  ],
  sign:'BY ORDER OF THE GOVERNMENT OF NUXELAND',
  warn:'This document is an official administrative directive. Unauthorised execution of suspended duties shall be treated as a breach of Agency protocol.',
};

/* Document 2 — Nano's breakthrough log, 23:54, October 25th */
const VDLog={
  id:'log',
  ref:'PA-LOG/NANO/2554',
  title:'Progress Assessment Log',
  effective:'25 OCTOBER 2026 // 23:54',
  classification:'INTERNAL',
  assessor:'Agent Nano',
  status:'MAJOR BREAKTHROUGH???',
  body:[
    'OK OK OK... listen, LISTEN. I know this is going to sound really insane and you guys probably think I have gone crazy, but it\'s all clocking now.',
    'I\'m writing this log at 23:54, October 25th. The past few days have been full of random tests and experiments on that freaky arcade machine but I think I\'ve finally cracked the code. LITERALLY. Let\'s go all the way back for a minute. That electricity report energy dossier thing. There was a huge energy spike on the 23rd and that\'s what started all of this.',
    'That\'s the same night me and Agent Mega met POI-1 at the Reckoning machine, that weird cosplayer. BUT BUT BUT BUT. He WASN\'T a cosplayer!!! It\'s all making sense. When we finally got the game source code on the 24th, the code analysts reverted and told me that one of the character "classes" (coding thing) was completely missing.',
    'That could only mean one thing... The character. Escaped.',
  ],
  pillar:'If my theory is correct, then A VIDEO GAME CHARACTER HAS ESCAPED INTO THE REAL WORLD!!!! CALL THE MILITARY!!',
  statusFoot:'AREA OF CONCERN — STATUS: IMMEDIATE CONCERN?? 10/10??? CODE RED? BLUE? GREEN? ALL OF THEM?!',
};

/* Document 3 — Nano's farewell note (unauthorised transmission) */
const VDNote={
  id:'note',
  ref:'SG/NANO/~NULL',
  title:'A Note From Nano',
  effective:'UNTRACEABLE DISPATCH',
  classification:'TREASON?',
  from:'Agent Nano (relocated)',
  head:'A goodbye from an old friend :)',
  lines:[
    'Hey, hey, hey... They really can\'t know I\'m writing this. I mean, it counts at the least as treason and breach of protocol, but after the work you\'ve been doing over the past 4 days with these random anomalies and updates, you deserve the truth, even if it jeopardises my future here. I\'m sticking my head out for you buddy!',
    'Anyways, the situation out here has gotten way worse... Remember my little theory?? Turns out I was right. Obviously. A little too right...',
    'Forget the Wenoti arcade, our POI was just the first of a digital jailbreak. Countries all around the world have been contacting the etiNuxe Intelligence Agency with reports of video game characters disappearing from arcades without a trace???',
    'The Government doesn\'t want news of this getting out. Maybe they know something? Or it\'s another way to get a quick buck. Either way, that\'s the real reason why EXUN got suspended. Don\'t listen to their fancy jargon...',
    'That\'s all from my end. Agents like us are being relocated, so I guess I better get packing. What are you going to do now?',
  ],
  foot:'— N.',
};

/* Worldwide disappearance feed (post-jailbreak intercepts) */
const VDGlobal=[
  {id:'g1',region:'WENOTI / NUXELAND',detail:'POI-1, iridescent armoured figure seen near 92nd Avenue service conduit. Origin cabinet: "The Reckoning V: Origins".'},
  {id:'g2',region:'MELBURN ARCDECK-7',detail:'Two cabinets emptied after overnight blackout. Kill counters frozen mid-death. No forced entry.'},
  {id:'g3',region:'YOKOHAMA GOLDEN-9',detail:'Operator reports high-score initials rewritten to "NANO" hours after maintenance lockout.'},
  {id:'g4',region:'OSLO SUBSTATION 4-C',detail:'12.4 kHz harmonic resonance recorded on feeder line during cabinet blackout window.'},
  {id:'g5',region:'TORONTO PIXL-PIT',detail:'CRT raster collapse to white point captured on maintenance camera, 22:31 local. Subject missing from bezel art scan.'},
];
