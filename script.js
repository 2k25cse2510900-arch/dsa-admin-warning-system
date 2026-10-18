const landing = document.querySelector(".landing");
const activateButton = document.querySelector("#activate-button");
<<<<<<< HEAD
const generalWarningCard = document.querySelector("#general-warning-card");
const generalSimButton = document.querySelector("#general-sim-button");
const decisionCenter = document.querySelector("#decision-center");
const warningStage = document.querySelector("#warning-stage");
const chaseScreen = document.querySelector("#chase-screen");
const endingScreen = document.querySelector("#ending-screen");
const awardScreen = document.querySelector("#award-screen");
const screenshotScreen = document.querySelector("#screenshot-screen");
const finalScreen = document.querySelector("#final-screen");
const playAgainButton = document.querySelector("#play-again-button");
const backHomeButton = document.querySelector("#back-home-button");
const backParticipantsButton = document.querySelector("#back-participants-button");
const awardMenuButton = document.querySelector("#award-menu-button");
const awardReplayButton = document.querySelector("#award-replay-button");
const screenshotMenuButton = document.querySelector("#screenshot-menu-button");
const screenshotReplayButton = document.querySelector("#screenshot-replay-button");
const audioToggle = document.querySelector("#audio-toggle");

/* =========================================================
   PARTICIPANTS DATA ARCHITECTURE
   ========================================================= */
const participants = [
  {
    id: "kartik",
    name: "Kartik Kumar",
    status: "Top Performer",
    desc: "Consistent Daily Submitter",
    role: "award",
    image: "assets/kartik.jpg",
    accent: "#f5d547",
    glow: "rgba(245, 213, 71, 0.45)",
    badge: "★ TOP PERFORMER #1",
    bouquetTheme: "gold",
    title: "ADMIN RECOGNITION: TOP PERFORMER #1!",
    personalTitle: "KARTIK KUMAR — YOUR CONSISTENCY IS SEEN",
    recognition: "Consistency is not about having energy every day. It is about showing up even when you are exhausted.",
    subtitle: "A heartfelt thank-you for showing up with sincerity and discipline.",
    appreciation: "Your sincerity, dedication, and discipline make you one of the most valued members of this group. I genuinely admire you. Keep going, champion!",
    story: ["Show up", "Keep going", "Recognised"],
    message: "Kartik — First-place performance! Supreme daily consistency appreciated!",
    heart: "💛",
    petals: ["⭐", "✨", "🌟", "💛", "✨", "🏆"]
  },
  {
    id: "tanmay",
    name: "Tanmay Awasthi",
    status: "Second Top Scorer",
    desc: "Second Top Group Scorer",
    role: "award",
    image: "assets/tanmay.jpg",
    accent: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.45)",
    badge: "★ TOP SCORER #2",
    bouquetTheme: "cyan",
    title: "ADMIN RECOGNITION: TOP SCORER #2!",
    personalTitle: "TANMAY AWASTHI — A JOURNEY THAT SPEAKS",
    recognition: "You joined later, but you proved that consistency matters more than seniority.",
    subtitle: "You joined later, then made every step count.",
    appreciation: "You showed that a newcomer can outperform expectations through discipline and dedication. Keep proving yourself through your work. Your journey is just getting started!",
    story: ["New arrival", "Daily effort", "Own momentum"],
    message: "Tanmay — Second top scorer in the group. Outstanding consistency!",
    heart: "💖",
    petals: ["💎", "💠", "✨", "💙", "⭐", "🔹"]
  },
  {
    id: "avantika",
    name: "Avantika Yadav",
    status: "Progress Recognised",
    desc: "Consistency Greatly Improved",
    role: "award",
    image: "assets/avantika.jpg",
    accent: "#ec4899",
    glow: "rgba(236, 72, 153, 0.45)",
    badge: "★ PROGRESS RECOGNISED",
    bouquetTheme: "pink",
    title: "ADMIN NOTICE: PROGRESS RECOGNISED!",
    personalTitle: "AVANTIKA YADAV — A COMEBACK TO BE PROUD OF",
    recognition: "You proved me wrong, and I am genuinely proud of you.",
    subtitle: "Growth means proving your own doubts wrong, one effort at a time.",
    appreciation: "I once worried that inconsistency might hold you back, but your recent progress showed me what you are capable of. The questions you have solved reflect your effort and growth. Keep going, Avantika. You are doing great!",
    story: ["Finding a rhythm", "Choosing to return", "Growing forward"],
    message: "Avantika — Progress recognised! Keep this consistency going!",
    heart: "💖",
    petals: ["🌸", "🌺", "🌷", "💖", "✨", "🌸"]
  },
  {
    id: "krishna",
    name: "Krishna",
    status: "Least Active / Pending",
    desc: "Missing Screenshots & Proof",
    role: "dussehra",
    image: "assets/krishna.jpg",
    accent: "#ef4444",
    glow: "rgba(239, 68, 68, 0.4)",
    badge: "⚠ LEAST ACTIVE",
    title: "ADMIN DECISION: GROUP REMOVAL",
    subtitle: "Krishna — Zero screenshots detected. Admin patience expired!",
    message: "Krishna — Officially banned from the group (fictional). DSA proof pending!",
    verdict: "OFFICIALLY BANNED (FICTIONAL)",
    action: "Submit Screenshots to Appeal"
  },
  {
    id: "kshitij",
    name: "Kshitij Rajput",
    status: "Consistency Loading...",
    desc: "Attendance Detected Sometimes",
    role: "rage",
    image: "assets/kshitij.jpg",
    accent: "#f97316",
    glow: "rgba(249, 115, 22, 0.4)",
    badge: "⚠ ATTENDANCE LOADING",
    title: "ADMIN SLAPSTICK PUNCH-O-RAMA!",
    accountabilityIntro: "Kshitij Rajput — I expected better from you.",
    accountabilityBody: "I have repeatedly asked you to make your LeetCode submission activity public so I can verify your progress. I have also asked you to share your code and screenshots in the group. These are basic requirements of our group's tracking system, yet the requests remain incomplete.",
    accountabilityAction: "Make your LeetCode submission activity public, solve and submit your work, and share your code and screenshots in the group.",
    accountabilityClose: "Trust is built through consistent actions, responsibility, and transparency. I still want to see you improve, but I need you to follow through.",
    subtitle: "The chase and comic punch stay; the final review asks for clear follow-through.",
    message: "Kshitij — Attendance detected… consistency still loading!",
    verdict: "CONSISTENCY LOADING...",
    action: "Submit Daily Proof Consistently"
  },
  {
    id: "kanika",
    name: "Kanika",
    status: "Missing Submissions",
    desc: "Submissions Incomplete",
    role: "removed",
    image: "assets/kanika.jpg",
    accent: "#a855f7",
    glow: "rgba(168, 85, 247, 0.4)",
    badge: "⚠ SUBMISSIONS PENDING",
    title: "ADMIN KICK OF JUSTICE!",
    subtitle: "Kanika needs to return to daily action! A mighty kick connects!",
    message: "Kanika — Missing submissions detected! Time to return to action!",
    verdict: "ACTION REQUIRED",
    action: "Return to Regular Submissions"
  },
  {
    id: "deepanshu",
    name: "Deepanshu",
    status: "Consistent; Screenshots Shared",
    desc: "DSA consistency; group engagement needed",
    role: "screenshot",
    image: "assets/deepanshu.jpg",
    accent: "#10b981",
    glow: "rgba(16, 185, 129, 0.4)",
    badge: "GROUP ENGAGEMENT",
    title: "GROUP COMMUNICATION CHECK-IN",
    subtitle: "DSA consistency and recently shared screenshots recognised.",
    message: "Deepanshu is consistent with DSA and has shared the requested screenshots. More replies in the group would help everyone stay connected.",
    verdict: "SCREENSHOTS RECEIVED",
    action: "Read and reply to group messages"
  }
];

let activeParticipant = null;
=======
const warningStage = document.querySelector("#warning-stage");
const chaseScreen = document.querySelector("#chase-screen");
const endingScreen = document.querySelector("#ending-screen");
const finalScreen = document.querySelector("#final-screen");
const playAgainButton = document.querySelector("#play-again-button");
const backHomeButton = document.querySelector("#back-home-button");
const audioToggle = document.querySelector("#audio-toggle");

>>>>>>> origin/main
const endingKeys = ["dussehra", "rage", "removed"];
let endingDeck = [];
let audioContext = null;
let masterCompressor = null;
let masterGain = null;
let audioUnavailable = false;
let sequenceStartedOnce = false;
let soundMuted = false;
const activeNodes = new Set();
<<<<<<< HEAD
const sceneRecordings = {
  ban: null,
  chase: null
};
=======

const warnings = [
  "DSA PROOF NOT FOUND!",
  "ADMIN IS WATCHING!",
  "LAST WARNING: 0 COMMITS!",
  "YOUR STREAK IS IN CRITICAL DANGER!",
  "FATAL ERROR: NO BASE CASE DETECTED!",
  "ALERT: TIME COMPLEXITY O(N!) EXCEEDED!",
  "MEMORY LIMIT: EXCUSES EXCEEDED 256MB!",
  "UNHANDLED PROCRASTINATION EXCEPTION!",
  "ADMIN PATIENCE LEVEL: 0.00%!",
  "SEGMENTATION FAULT: STREAK DUMPED!",
  "WARNING: BAN HAMMER PRIMED & ARMED!",
  "CRITICAL NOTICE: GROUP RULES VIOLATED!",
  "SYSTEM HALTED: SUBMIT PROOF NOW!",
  "NULL POINTER: DAILY EFFORT NOT FOUND!",
  "STACK OVERFLOW OF FAKE REASONS!",
  "EMERGENCY: ADMIN HAS ENTERED THE SERVER!"
];
>>>>>>> origin/main

let sequenceRunning = false;
let sequenceTimers = [];

function schedule(callback, delay) {
  const timer = window.setTimeout(callback, delay);
  sequenceTimers.push(timer);
  return timer;
}

/* =========================================================
   WEB AUDIO API ENGINE (AUDIBLE, RICH, FULLY SYNTHESIZED)
   ========================================================= */
function prepareAudio() {
  if (audioUnavailable) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      audioUnavailable = true;
      audioToggle.title = "Web Audio is unavailable; the experience will continue silently.";
      return;
    }
    if (!audioContext) {
      audioContext = new AudioContextClass();

<<<<<<< HEAD
      // Master Compressor
=======
      // Master Compressor to maximize loudness while preventing clipping
>>>>>>> origin/main
      masterCompressor = audioContext.createDynamicsCompressor();
      masterCompressor.threshold.setValueAtTime(-14, audioContext.currentTime);
      masterCompressor.knee.setValueAtTime(8, audioContext.currentTime);
      masterCompressor.ratio.setValueAtTime(5, audioContext.currentTime);
      masterCompressor.attack.setValueAtTime(0.003, audioContext.currentTime);
      masterCompressor.release.setValueAtTime(0.12, audioContext.currentTime);

<<<<<<< HEAD
      // Master Gain for global volume and instant mute/unmute
=======
      // Master Gain for volume and instant mute/unmute
>>>>>>> origin/main
      masterGain = audioContext.createGain();
      masterGain.gain.setValueAtTime(soundMuted ? 0 : 0.28, audioContext.currentTime);

      masterCompressor.connect(masterGain);
      masterGain.connect(audioContext.destination);
    }
    if (audioContext.state === "suspended") {
      audioContext.resume().catch(() => {
        audioUnavailable = true;
      });
    }
  } catch {
    audioUnavailable = true;
  }
}

function stopActiveSounds() {
  activeNodes.forEach((node) => {
    try {
      if (typeof node.stop === "function") node.stop();
      if (typeof node.disconnect === "function") node.disconnect();
    } catch {}
  });
  activeNodes.clear();
<<<<<<< HEAD
  if ("speechSynthesis" in window) {
    try { window.speechSynthesis.cancel(); } catch {}
  }
=======
>>>>>>> origin/main
}

function createNoiseBuffer(duration = 1) {
  if (!audioContext) return null;
  const bufferSize = Math.floor(audioContext.sampleRate * duration);
  const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

function playTone({
  startFrequency,
  endFrequency = startFrequency,
  duration,
  waveform = "sine",
  volume = 0.22,
  delay = 0,
  attack = 0.02,
  decay = 0.04
}) {
  if (audioUnavailable || !audioContext || audioContext.state === "closed") return;
  try {
    const startAt = audioContext.currentTime + delay;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = waveform;
    osc.frequency.setValueAtTime(Math.max(1, startFrequency), startAt);
    if (endFrequency !== startFrequency) {
      osc.frequency.exponentialRampToValueAtTime(Math.max(1, endFrequency), startAt + duration);
    }

    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(volume, startAt + attack);
    const releaseTime = Math.max(0.01, duration - attack - decay);
    gain.gain.setValueAtTime(volume, startAt + attack + releaseTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);

    osc.connect(gain);
    gain.connect(masterCompressor);

    activeNodes.add(osc);
    osc.addEventListener("ended", () => {
      activeNodes.delete(osc);
      try {
        osc.disconnect();
        gain.disconnect();
      } catch {}
    }, { once: true });

    osc.start(startAt);
    osc.stop(startAt + duration + 0.02);
  } catch {}
}

<<<<<<< HEAD
/* Sound Generators */
=======
/* 1. Retro Warning Chimes Cascade */
>>>>>>> origin/main
function playWarningBeep(index) {
  const freqs = [520, 680, 580, 820, 620, 760, 500, 900, 640, 780, 560, 860, 660, 800, 720, 940];
  const freq = freqs[index % freqs.length];
  playTone({
    startFrequency: freq,
    endFrequency: freq * 0.9,
    duration: 0.09,
    waveform: "triangle",
    volume: 0.22,
    attack: 0.01
  });
}

<<<<<<< HEAD
=======
/* 2. Chase Scene Footsteps & Catch-Up */
>>>>>>> origin/main
function playFootstep(isHigh) {
  playTone({
    startFrequency: isHigh ? 320 : 220,
    endFrequency: isHigh ? 160 : 110,
    duration: 0.05,
    waveform: "triangle",
    volume: 0.15,
    attack: 0.005
  });
}

function playChaseCatchUp() {
<<<<<<< HEAD
=======
  // Dramatic catch-up whoosh + dramatic brass stab
>>>>>>> origin/main
  playTone({
    startFrequency: 160,
    endFrequency: 780,
    duration: 0.42,
    waveform: "sawtooth",
    volume: 0.24,
    attack: 0.05
  });
  [261.6, 329.6, 392.0, 523.2].forEach((freq, idx) => {
    playTone({
      startFrequency: freq,
      endFrequency: freq * 1.05,
      duration: 0.38,
      waveform: "triangle",
      volume: 0.18,
      delay: 0.05 + idx * 0.02
    });
  });
}

<<<<<<< HEAD
function playBowDraw() {
=======
/* 3. Dussehra: Bow Draw, Release, Flight, Impact, and Flames */
function playBowDraw() {
  // Rising tension creak
>>>>>>> origin/main
  playTone({
    startFrequency: 130,
    endFrequency: 290,
    duration: 0.45,
    waveform: "sawtooth",
    volume: 0.22,
    attack: 0.08
  });
}

function playBowRelease() {
<<<<<<< HEAD
=======
  // Snappy plucked bow twang
>>>>>>> origin/main
  playTone({
    startFrequency: 460,
    endFrequency: 95,
    duration: 0.18,
    waveform: "triangle",
    volume: 0.32,
    attack: 0.005
  });
}

function playArrowFlight(duration = 0.8) {
  if (audioUnavailable || !audioContext) return;
  try {
    const buffer = createNoiseBuffer(duration);
    if (!buffer) return;
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;

    const filter = audioContext.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(900, audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(2600, audioContext.currentTime + duration);
    filter.Q.value = 6;

    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.25, audioContext.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(masterCompressor);

    activeNodes.add(noise);
    noise.start();
    noise.stop(audioContext.currentTime + duration);
  } catch {}
}

function playArrowImpact() {
<<<<<<< HEAD
=======
  // Heavy strike thud + sharp snap
>>>>>>> origin/main
  playTone({
    startFrequency: 240,
    endFrequency: 55,
    duration: 0.2,
    waveform: "sine",
    volume: 0.34,
    attack: 0.005
  });
  playTone({
    startFrequency: 850,
    endFrequency: 200,
    duration: 0.08,
    waveform: "square",
    volume: 0.22,
    attack: 0.005
  });
}

function playFireCrackle(duration = 1.8) {
  if (audioUnavailable || !audioContext) return;
  try {
    const buffer = createNoiseBuffer(duration);
    if (!buffer) return;
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;

    const filter = audioContext.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1200, audioContext.currentTime);
    filter.Q.value = 3;

<<<<<<< HEAD
=======
    // Amplitude crackle pops
>>>>>>> origin/main
    const gain = audioContext.createGain();
    const now = audioContext.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.26, now + 0.15);
    gain.gain.setValueAtTime(0.24, now + duration - 0.4);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(masterCompressor);

    activeNodes.add(noise);
    noise.start();
    noise.stop(now + duration);
  } catch {}
}

<<<<<<< HEAD
function playKickImpact() {
=======
/* 4. Kick Ending: Punchy Impact, Exaggerated Launch Doppler, Distant Twinkle */
function playKickImpact() {
  // Deep sub drop + sharp slap
>>>>>>> origin/main
  playTone({
    startFrequency: 210,
    endFrequency: 45,
    duration: 0.24,
    waveform: "sine",
    volume: 0.38,
    attack: 0.005
  });
  playTone({
    startFrequency: 950,
    endFrequency: 220,
    duration: 0.1,
    waveform: "triangle",
    volume: 0.28,
    attack: 0.005
  });
}

function playYeetLaunch(duration = 1.5) {
<<<<<<< HEAD
=======
  // Playful exaggerated launch Doppler whoosh (rising then fading into distance)
>>>>>>> origin/main
  if (audioUnavailable || !audioContext) return;
  try {
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(940, now + 0.35);
    osc.frequency.exponentialRampToValueAtTime(240, now + duration);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.32, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(masterCompressor);

    activeNodes.add(osc);
    osc.start(now);
    osc.stop(now + duration);
  } catch {}
}

function playDistantTwinkle() {
  playTone({
    startFrequency: 1760,
    endFrequency: 2400,
    duration: 0.45,
    waveform: "sine",
    volume: 0.22,
    attack: 0.02
  });
}

<<<<<<< HEAD
function playCartoonPunch(punchNumber) {
  if (punchNumber === 1) {
    playTone({ startFrequency: 360, endFrequency: 110, duration: 0.14, waveform: "triangle", volume: 0.32, attack: 0.005 });
    playTone({ startFrequency: 750, endFrequency: 250, duration: 0.06, waveform: "square", volume: 0.18, attack: 0.005 });
  } else if (punchNumber === 2) {
    playTone({ startFrequency: 420, endFrequency: 130, duration: 0.14, waveform: "triangle", volume: 0.34, attack: 0.005 });
    playTone({ startFrequency: 820, endFrequency: 300, duration: 0.06, waveform: "square", volume: 0.2, attack: 0.005 });
  } else {
=======
/* 5. Slapstick Punches: Three Separated Impacts & Dizzy Fall */
function playCartoonPunch(punchNumber) {
  if (punchNumber === 1) {
    // Punch 1: Snappy boxing hit
    playTone({ startFrequency: 360, endFrequency: 110, duration: 0.14, waveform: "triangle", volume: 0.32, attack: 0.005 });
    playTone({ startFrequency: 750, endFrequency: 250, duration: 0.06, waveform: "square", volume: 0.18, attack: 0.005 });
  } else if (punchNumber === 2) {
    // Punch 2: Faster, higher hit
    playTone({ startFrequency: 420, endFrequency: 130, duration: 0.14, waveform: "triangle", volume: 0.34, attack: 0.005 });
    playTone({ startFrequency: 820, endFrequency: 300, duration: 0.06, waveform: "square", volume: 0.2, attack: 0.005 });
  } else {
    // Punch 3: Heavy knockout punch
>>>>>>> origin/main
    playTone({ startFrequency: 240, endFrequency: 48, duration: 0.26, waveform: "sine", volume: 0.42, attack: 0.005 });
    playTone({ startFrequency: 950, endFrequency: 180, duration: 0.12, waveform: "sawtooth", volume: 0.25, attack: 0.005 });
  }
}

function playDizzyFall() {
<<<<<<< HEAD
=======
  // Comical slide whistle down with vibrato wobble
>>>>>>> origin/main
  if (audioUnavailable || !audioContext) return;
  try {
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();
    const gain = audioContext.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(540, now);
    osc.frequency.exponentialRampToValueAtTime(170, now + 0.42);

    lfo.type = "sine";
    lfo.frequency.value = 10;
    lfoGain.gain.value = 16;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    gain.gain.setValueAtTime(0.24, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(masterCompressor);

    activeNodes.add(osc);
    activeNodes.add(lfo);

    lfo.start(now);
    osc.start(now);
    lfo.stop(now + 0.46);
    osc.stop(now + 0.46);

<<<<<<< HEAD
=======
    // Soft ground thump
>>>>>>> origin/main
    schedule(() => {
      playTone({ startFrequency: 95, endFrequency: 40, duration: 0.16, waveform: "sine", volume: 0.26 });
    }, 450);
  } catch {}
}

<<<<<<< HEAD
/* Celebratory / Award Fanfare */
function playCelebrationFanfare() {
  [523.2, 659.2, 783.9, 987.8, 1046.5].forEach((freq, idx) => {
    playTone({
      startFrequency: freq,
      endFrequency: freq * 1.02,
      duration: 0.35,
      waveform: "triangle",
      volume: 0.24,
      delay: idx * 0.1
    });
  });
}

function playSparkleChime() {
  [1200, 1600, 2000, 2400].forEach((freq, idx) => {
    playTone({
      startFrequency: freq,
      duration: 0.18,
      waveform: "sine",
      volume: 0.18,
      delay: idx * 0.06
    });
  });
}

/* Scanner Audio */
function playScanBleep(freq = 880) {
  playTone({ startFrequency: freq, endFrequency: freq * 1.1, duration: 0.04, waveform: "square", volume: 0.12 });
}

function playConfusedBoing() {
  playTone({ startFrequency: 300, endFrequency: 120, duration: 0.35, waveform: "sine", volume: 0.3 });
  playTone({ startFrequency: 600, endFrequency: 240, duration: 0.25, waveform: "triangle", volume: 0.2 });
}

=======
/* 6. Victory Fanfare & UI Clicks */
>>>>>>> origin/main
function playCompletionFanfare() {
  [523.2, 659.2, 783.9, 1046.5].forEach((freq, idx) => {
    playTone({
      startFrequency: freq,
      duration: 0.22,
      waveform: "triangle",
      volume: 0.24,
      delay: idx * 0.09
    });
  });
}

function playImpact() {
  playTone({ startFrequency: 280, endFrequency: 120, duration: 0.14, waveform: "triangle", volume: 0.28 });
}

<<<<<<< HEAD
function playButtonClick() {
  playTone({ startFrequency: 1000, endFrequency: 350, duration: 0.03, waveform: "triangle", volume: 0.18 });
}

/* Participant recordings use the same global mute and reset lifecycle. */
function stopRecording(key) {
  const audio = sceneRecordings[key];
  if (!audio) return;
  audio.pause();
  audio.currentTime = 0;
  sceneRecordings[key] = null;
}

function playRecording(key, path, { loop = false, volume = 0.85 } = {}) {
  stopRecording(key);
  if (soundMuted) return;

  const audio = new Audio(path);
  audio.preload = "auto";
  audio.loop = loop;
  audio.volume = volume;
  sceneRecordings[key] = audio;
  audio.addEventListener("error", () => {
    if (sceneRecordings[key] === audio) {
      sceneRecordings[key] = null;
      audio.pause();
    }
  }, { once: true });

  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      if (sceneRecordings[key] === audio) sceneRecordings[key] = null;
      audio.pause();
    });
  }
}

function stopSceneRecordings() {
  stopRecording("ban");
  stopRecording("chase");
}

=======
>>>>>>> origin/main
function updateAudioToggle() {
  audioToggle.textContent = soundMuted ? "SOUND OFF" : "SOUND ON";
  audioToggle.setAttribute("aria-pressed", String(soundMuted));
  audioToggle.setAttribute("aria-label", soundMuted ? "Unmute sound" : "Mute sound");
  if (masterGain && audioContext) {
    masterGain.gain.setValueAtTime(soundMuted ? 0 : 0.28, audioContext.currentTime);
  }
<<<<<<< HEAD
  Object.values(sceneRecordings).forEach((audio) => {
    if (audio) audio.muted = soundMuted;
  });
}

/* =========================================================
   PARTICIPANT CARDS GENERATION (7 PARTICIPANTS)
   ========================================================= */
function renderParticipantCards() {
  const grid = document.querySelector("#participants-grid");
  if (!grid) return;
  grid.innerHTML = "";

  participants.forEach((p) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "participant-card";
    card.setAttribute("data-id", p.id);
    card.setAttribute("aria-label", `Select ${p.name}: ${p.status}`);
    card.style.setProperty("--card-accent", p.accent);
    card.style.setProperty("--card-glow", p.glow);

    const initial = p.name.charAt(0).toUpperCase();

    card.innerHTML = `
      <div class="card-avatar-wrap">
        <img src="${p.image}" alt="${p.name}" class="card-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="card-avatar-fallback">${initial}</div>
      </div>
      <div>
        <h3 class="card-name">${p.name}</h3>
        <span class="card-badge">${p.badge}</span>
        <p class="card-sub">${p.desc}</p>
      </div>
      <span class="card-btn">EVALUATE ➔</span>
    `;

    card.addEventListener("click", () => {
      playButtonClick();
      startParticipantFlow(p);
    });

    grid.appendChild(card);
  });
}

/* =========================================================
   AWARD PRESENTATION BOUQUETS & STAGES
   ========================================================= */
function getBouquetSvgMarkup(theme) {
  if (theme === "gold") {
    // Kartik: Golden wrapping, radiant sunflowers, yellow roses, gold ribbons & stars
    return `
      <svg class="admin-bouquet bouquet-gold" viewBox="0 0 60 70" aria-hidden="true">
        <polygon points="20,40 40,40 34,68 26,68" fill="#d97706" stroke="#b45309" stroke-width="2"/>
        <ellipse cx="30" cy="40" rx="10" ry="3" fill="#f59e0b"/>
        <circle cx="30" cy="54" r="3.5" fill="#facc15"/>
        <path d="M27 54 C18 48, 16 60, 27 56 M33 54 C42 48, 44 60, 33 56" fill="none" stroke="#facc15" stroke-width="2.5"/>
        <path d="M10 28 Q20 18 25 33 Q14 42 10 28 Z" fill="#15803d"/>
        <path d="M50 28 Q40 18 35 33 Q46 42 50 28 Z" fill="#15803d"/>
        <!-- Radiant Giant Sunflower -->
        <circle cx="30" cy="22" r="11" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="30" cy="22" r="6" fill="#78350f"/>
        <circle cx="30" cy="22" r="3" fill="#451a03"/>
        <!-- Golden Roses -->
        <circle cx="17" cy="28" r="8.5" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="17" cy="28" r="4" fill="#facc15"/>
        <circle cx="43" cy="28" r="8.5" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5"/>
        <circle cx="43" cy="28" r="4" fill="#facc15"/>
        <!-- Radiant Gold Daisy -->
        <circle cx="30" cy="34" r="7.5" fill="#fde047" stroke="#eab308" stroke-width="1.5"/>
        <circle cx="30" cy="34" r="3" fill="#b45309"/>
      </svg>
    `;
  } else if (theme === "cyan") {
    // Tanmay: Cyan/blue wrapping, blue hydrangeas, electric blue orchids, silver ribbon
    return `
      <svg class="admin-bouquet bouquet-cyan" viewBox="0 0 60 70" aria-hidden="true">
        <polygon points="20,40 40,40 34,68 26,68" fill="#0284c7" stroke="#0369a1" stroke-width="2"/>
        <ellipse cx="30" cy="40" rx="10" ry="3" fill="#38bdf8"/>
        <circle cx="30" cy="54" r="3.5" fill="#7dd3fc"/>
        <path d="M27 54 C18 48, 16 60, 27 56 M33 54 C42 48, 44 60, 33 56" fill="none" stroke="#e0f2fe" stroke-width="2.5"/>
        <path d="M10 28 Q20 18 25 33 Q14 42 10 28 Z" fill="#047857"/>
        <path d="M50 28 Q40 18 35 33 Q46 42 50 28 Z" fill="#047857"/>
        <!-- Royal Blue Orchid -->
        <circle cx="30" cy="22" r="11" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5"/>
        <circle cx="30" cy="22" r="6" fill="#60a5fa"/>
        <circle cx="30" cy="22" r="2.5" fill="#ffffff"/>
        <!-- Cyan Hydrangeas -->
        <circle cx="17" cy="28" r="8.5" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <circle cx="17" cy="28" r="4" fill="#bae6fd"/>
        <circle cx="43" cy="28" r="8.5" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5"/>
        <circle cx="43" cy="28" r="4" fill="#bae6fd"/>
        <!-- Ice Blue Blossom -->
        <circle cx="30" cy="34" r="7.5" fill="#0284c7" stroke="#0369a1" stroke-width="1.5"/>
        <circle cx="30" cy="34" r="3" fill="#e0f2fe"/>
      </svg>
    `;
  } else {
    // Avantika: Magenta/rose wrapping, pink roses, soft tulips, white cherry blossoms
    return `
      <svg class="admin-bouquet bouquet-pink" viewBox="0 0 60 70" aria-hidden="true">
        <polygon points="20,40 40,40 34,68 26,68" fill="#be185d" stroke="#9d174d" stroke-width="2"/>
        <ellipse cx="30" cy="40" rx="10" ry="3" fill="#ec4899"/>
        <circle cx="30" cy="54" r="3.5" fill="#f472b6"/>
        <path d="M27 54 C18 48, 16 60, 27 56 M33 54 C42 48, 44 60, 33 56" fill="none" stroke="#fbcfe8" stroke-width="2.5"/>
        <path d="M10 28 Q20 18 25 33 Q14 42 10 28 Z" fill="#15803d"/>
        <path d="M50 28 Q40 18 35 33 Q46 42 50 28 Z" fill="#15803d"/>
        <!-- Crimson Velvet Rose -->
        <circle cx="30" cy="22" r="11" fill="#e11d48" stroke="#be123c" stroke-width="1.5"/>
        <circle cx="30" cy="22" r="6" fill="#fb7185"/>
        <circle cx="30" cy="22" r="2.5" fill="#ffffff"/>
        <!-- Soft Pink Tulips -->
        <circle cx="17" cy="28" r="8.5" fill="#f472b6" stroke="#db2777" stroke-width="1.5"/>
        <circle cx="17" cy="28" r="4" fill="#fce7f3"/>
        <circle cx="43" cy="28" r="8.5" fill="#f472b6" stroke="#db2777" stroke-width="1.5"/>
        <circle cx="43" cy="28" r="4" fill="#fce7f3"/>
        <!-- White Cherry Blossom -->
        <circle cx="30" cy="34" r="7.5" fill="#ffffff" stroke="#f472b6" stroke-width="1.5"/>
        <circle cx="30" cy="34" r="3" fill="#ec4899"/>
      </svg>
    `;
  }
}

function setAwardStage(stageName, p) {
  const stageContainer = document.querySelector("#award-stage-container");
  const statusEl = document.querySelector("#award-stage-status");
  const storyEl = document.querySelector("#award-story");
  if (!stageContainer) return;

  stageContainer.classList.remove("stage-approach", "stage-present", "stage-accept", "stage-celebration", "stage-happy-ending");
  stageContainer.classList.add(`stage-${stageName}`);
  if (storyEl) storyEl.dataset.stage = stageName;

  if (statusEl) {
    if (stageName === "approach") {
      statusEl.textContent = `Admin approaching ${p ? p.name : "participant"} with celebratory bouquet...`;
    } else if (stageName === "present") {
      statusEl.textContent = `Admin presents the celebratory bouquet to ${p ? p.name : "participant"}!`;
    } else if (stageName === "accept") {
      statusEl.textContent = `${p ? p.name : "Participant"} happily accepts the bouquet!`;
    } else if (stageName === "celebration") {
      statusEl.textContent = `Celebration! Outstanding consistency recognized!`;
    } else if (stageName === "happy-ending") {
      statusEl.textContent = `Award presented successfully! Well done, ${p ? p.name : "participant"}!`;
    }
  }
}

/* =========================================================
   PARTICIPANT SPECIFIC FLOWS
   ========================================================= */
function startParticipantFlow(p) {
  if (sequenceRunning) return;
  activeParticipant = p;
  prepareAudio();

  if (p.role === "award") {
    // A/B/C: Kartik, Tanmay, Avantika Award Celebration
    startAwardFlow(p);
  } else if (p.role === "screenshot") {
    // G: Deepanshu Screenshot Verification
    startScreenshotFlow(p);
  } else {
    // D: Krishna (Dussehra), E: Kshitij (Punches), F: Kanika (Kick)
    startWarningAndActionFlow(p);
  }
}

/* Award Presentation Flow (Explicit stages: approach -> present -> accept -> celebration -> happy-ending) */
function startAwardFlow(p) {
  sequenceRunning = true;
  sequenceStartedOnce = true;
  landing.classList.add("sequence-active");
  decisionCenter.hidden = true;
  if (generalWarningCard) generalWarningCard.hidden = true;

  // Apply participant theme to award screen
  awardScreen.classList.remove("award-theme-gold", "award-theme-cyan", "award-theme-pink");
  awardScreen.classList.add(`award-theme-${p.bouquetTheme || "gold"}`);

  const titleEl = document.querySelector("#award-title");
  const subEl = document.querySelector("#award-subtitle");
  const msgEl = document.querySelector("#award-message");
  const appreciationEl = document.querySelector("#award-appreciation");
  const storyEl = document.querySelector("#award-story");
  const heartEl = document.querySelector("#award-heart");
  const petalsEl = document.querySelector("#award-petals");
  const bouquetContent = document.querySelector("#bouquet-content");

  if (titleEl) titleEl.textContent = p.personalTitle || p.title;
  if (subEl) subEl.textContent = p.subtitle;
  if (msgEl) msgEl.textContent = p.recognition || p.message;
  if (appreciationEl) appreciationEl.textContent = p.appreciation || "";
  if (storyEl) {
    const story = p.story || ["Effort", "Progress", "Recognition"];
    storyEl.innerHTML = story.map((step, index) => `<div class="award-story-step" data-step="${index}"><span class="story-node" aria-hidden="true"></span><span>${step}</span></div>`).join("");
    storyEl.setAttribute("aria-label", `${p.name}'s story: ${story.join(", ")}`);
    storyEl.dataset.stage = "approach";
    storyEl.dataset.participant = p.id;
  }
  if (heartEl) heartEl.textContent = p.heart;

  if (petalsEl && Array.isArray(p.petals)) {
    petalsEl.innerHTML = p.petals.map((pt) => `<span>${pt}</span>`).join("");
  }

  // Populate Characters in Award Stage:
  // 1. Friendly, smiling, weapon-free Award Admin
  addEndingCharacter("#award-admin-actor", "#award-admin-svg");
  const tie = awardScreen.querySelector("#award-admin-actor .admin-suit-tie");
  if (tie) tie.setAttribute("fill", p.accent);

  // 2. Appropriate Participant Character:
  // Avantika -> female-award-svg (clearly visible high ponytail, pink jacket, smiling)
  // Kartik & Tanmay -> male-award-svg (standing calmly and happily)
  const participantSource = (p.id === "avantika") ? "#female-award-svg" : "#male-award-svg";
  addEndingCharacter("#award-participant-actor", participantSource);

  // Set participant shirt badge
  const shirt = awardScreen.querySelector("#award-participant-actor #participant-shirt-badge");
  if (shirt) shirt.textContent = p.name.toUpperCase();

  // Insert the customized themed bouquet into bouquet actor
  if (bouquetContent) {
    bouquetContent.innerHTML = getBouquetSvgMarkup(p.bouquetTheme || "gold");
  }

  awardScreen.hidden = false;

  // --- STAGE-BASED SEQUENCE (approach -> present -> accept -> celebration -> happy-ending) ---
  
  // 1. STAGE: APPROACH (0ms - 2000ms)
  // Admin enters at normal walking pace carrying bouquet; participant stands calmly and happily
  setAwardStage("approach", p);

  // 2. STAGE: PRESENT BOUQUET (2000ms - 3200ms)
  // Admin stops in front of participant and extends bouquet forward
  schedule(() => {
    setAwardStage("present", p);
  }, 2000);

  // 3. STAGE: ACCEPT BOUQUET (3200ms - 4200ms)
  // Participant reaches forward, bouquet visibly transfers into participant's hands!
  schedule(() => {
    setAwardStage("accept", p);
  }, 3200);

  // 4. STAGE: CELEBRATION (4200ms - 6200ms)
  // Bouncing heart pops up, petals shower down, celebration fanfare and sparkles play
  schedule(() => {
    setAwardStage("celebration", p);
    playCelebrationFanfare();
    schedule(playSparkleChime, 800);
  }, 4200);

  // 5. STAGE: HAPPY ENDING (6200ms onwards)
  // Both characters hold smiling pose, congratulatory message glows
  schedule(() => {
    setAwardStage("happy-ending", p);
  }, 6200);
}

/* DSA Evidence Verification Console Flow (Deepanshu) */
function startScreenshotFlow(p) {
  sequenceRunning = true;
  sequenceStartedOnce = true;
  landing.classList.add("sequence-active");
  decisionCenter.hidden = true;
  if (generalWarningCard) generalWarningCard.hidden = true;

  const fill = document.querySelector("#scan-progress-fill");
  const status = document.querySelector("#scan-status");
  const bannerIncomplete = document.querySelector("#console-incomplete-banner");
  const bannerAction = document.querySelector("#console-action-banner");
  const communicationScene = document.querySelector("#deepanshu-communication-scene");

  const slotRecent = document.querySelector("#slot-recent");
  const slotLatest = document.querySelector("#slot-latest");

  if (fill) fill.style.width = "0%";
  if (status) status.textContent = "Initializing DSA consistency and screenshot review...";
  if (bannerIncomplete) bannerIncomplete.hidden = true;
  if (bannerAction) bannerAction.hidden = true;
  if (communicationScene) {
    communicationScene.hidden = true;
    communicationScene.classList.remove("communication-reveal");
  }

  if (slotRecent) slotRecent.classList.remove("slot-highlight");
  if (slotLatest) slotLatest.classList.remove("slot-highlight");

  screenshotScreen.hidden = false;

  // Scanning progress animation & sound
  let progress = 0;
  const scanInterval = window.setInterval(() => {
    progress += 10;
    if (fill) fill.style.width = `${progress}%`;

    if (progress <= 30) {
      if (status) status.textContent = `Reviewing DSA activity... ${progress}% [CONSISTENCY RECOGNISED]`;
    } else if (progress <= 65) {
      if (status) status.textContent = `Reviewing shared screenshots... ${progress}% [EVIDENCE RECEIVED]`;
      if (slotRecent) slotRecent.classList.add("slot-highlight");
    } else {
      if (status) status.textContent = `Checking group communication... ${progress}% [ENGAGEMENT FOLLOW-UP]`;
      if (slotLatest) slotLatest.classList.add("slot-highlight");
    }

    playScanBleep(680 + progress * 7);

    if (progress >= 100) {
      window.clearInterval(scanInterval);

      schedule(() => {
        if (status) status.textContent = "Review complete: requested screenshots received; group engagement is the next step.";
        if (bannerIncomplete) bannerIncomplete.hidden = false;
        playSparkleChime();

        // After a brief pause, reveal NEXT ACTION
        schedule(() => {
          if (bannerAction) bannerAction.hidden = false;
          playSparkleChime();
          schedule(() => {
            if (communicationScene) {
              communicationScene.hidden = false;
              communicationScene.classList.add("communication-reveal");
            }
          }, 900);
        }, 1200);
      }, 400);
    }
  }, 180);

  sequenceTimers.push(scanInterval);
}

/* Warning Popups & Chase & Ending Flow (Krishna, Kshitij, Kanika, General) */
function startWarningAndActionFlow(p) {
  sequenceRunning = true;
  sequenceStartedOnce = true;
  landing.classList.add("sequence-active");
  decisionCenter.hidden = true;
  if (generalWarningCard) generalWarningCard.hidden = true;
  warningStage.hidden = false;

  const targetName = p ? p.name : "DEVELOPER";

  // Customize Warnings with Target Name
  const participantWarnings = [
    `${targetName.toUpperCase()}: DSA PROOF NOT FOUND!`,
    `ADMIN IS WATCHING ${targetName.toUpperCase()}!`,
    `LAST WARNING: 0 COMMITS LOGGED!`,
    `${targetName.toUpperCase()}: YOUR STREAK IS IN DANGER!`,
    `FATAL: RECURSION WITHOUT BASE CASE!`,
    `TIME COMPLEXITY O(N!) EXCEEDED!`,
    `MEMORY EXCEEDED: TOO MANY EXCUSES!`,
    `UNHANDLED PROCRASTINATION EXCEPTION!`,
    `ADMIN PATIENCE LEVEL: 0.00%!`,
    `SEGFAULT: ${targetName.toUpperCase()}'S STREAK DUMPED!`,
    `WARNING: BAN HAMMER PRIMED & ARMED!`,
    `CRITICAL: GROUP RULES VIOLATED!`,
    `SYSTEM HALTED: SUBMIT PROOF NOW!`,
    `NULL POINTER: DAILY EFFORT MISSING!`,
    `STACK OVERFLOW OF FAKE REASONS!`,
    `EMERGENCY: ADMIN HAS ENTERED THE SERVER!`
  ];

  const popupInterval = 160;
  participantWarnings.forEach((message, index) => {
    schedule(() => addWarning(message, index, participantWarnings.length), index * popupInterval);
  });

  // Transition to Chase Scene
  schedule(() => {
    warningStage.hidden = true;
    chaseScreen.hidden = false;

    // Update Chase Caption & Shirt
    const caption = document.querySelector("#chase-caption");
    if (caption) {
      caption.textContent = p
        ? `${p.name} is on the run! The DSA admin has zero patience left!`
        : "The DSA proof is still missing. Run for your streak!";
    }
    const label = document.querySelector("#chase-target-label");
    if (label) label.textContent = p ? `${p.name.toUpperCase()} (NO PROOF)` : "DSA PROOF PENDING";

    // Set Chase Participant: Female runner with ponytail for Kanika, default for others
    setupChaseParticipant(p);

    // Footstep Sound Loop
    if (p && ["krishna", "kshitij", "kanika"].includes(p.id)) {
      playRecording("chase", "Sound/Pakad.oga", { loop: true, volume: 0.8 });
    }
    let stepCount = 0;
    const footstepInterval = window.setInterval(() => {
      if (!sequenceRunning) {
        window.clearInterval(footstepInterval);
        return;
      }
      playFootstep(stepCount % 2 === 0);
      stepCount++;
    }, 180);
    sequenceTimers.push(footstepInterval);

    // Near-catch audio sting at 4600ms
    schedule(playChaseCatchUp, 4600);

    // Transition from Chase to Ending at 5500ms
    schedule(() => {
      window.clearInterval(footstepInterval);
      stopRecording("chase");
      chaseScreen.hidden = true;
      executeEnding(p);
    }, 5500);
  }, participantWarnings.length * popupInterval + 1100);
}

function setupChaseParticipant(p) {
  const maleRunner = document.querySelector("#male-chase-runner");
  const femaleRunner = document.querySelector("#female-chase-runner");

  if (p && p.id === "kanika") {
    if (maleRunner) maleRunner.style.display = "none";
    if (femaleRunner) {
      femaleRunner.style.display = "block";
      const shirt = femaleRunner.querySelector("#participant-shirt-badge");
      if (shirt) shirt.textContent = "KANIKA";
    }
  } else {
    if (femaleRunner) femaleRunner.style.display = "none";
    if (maleRunner) {
      maleRunner.style.display = "block";
      const shirt = maleRunner.querySelector("#participant-shirt-badge");
      if (shirt && p) shirt.textContent = p.name.toUpperCase();
      else if (shirt) shirt.textContent = "0 DSA";
    }
  }
}

/* Execute Specific or Random Ending */
function executeEnding(p) {
  let endingKey = p ? p.role : pickEnding();
  if (!["dussehra", "rage", "removed"].includes(endingKey)) {
    endingKey = pickEnding();
  }

  const selectedEnding = endingScreen.querySelector(`[data-ending="${endingKey}"]`);
  endingScreen.querySelectorAll(".ending-variant").forEach((variant) => {
    variant.hidden = variant !== selectedEnding;
  });

  if (endingKey === "dussehra") {
    addEndingCharacter(".archer-host", ".admin");
    addEndingCharacter(".target-host", ".participant");

    const shirt = endingScreen.querySelector(".target-host #participant-shirt-badge");
    if (shirt && p) shirt.textContent = p.name.toUpperCase();

    const titleEl = document.querySelector("#dussehra-title");
    if (titleEl && p) titleEl.textContent = `DUSSEHRA MODE: ${p.name.toUpperCase()} BAN PROTOCOL`;

    // Dussehra Synchronized Sound Sequence
    schedule(playBowDraw, 200);
    schedule(playBowRelease, 700);
    schedule(() => playArrowFlight(0.8), 720);
    schedule(playArrowImpact, 1500);
    schedule(() => playFireCrackle(1.8), 1520);

  } else if (endingKey === "rage") {
    addEndingCharacter(".rage-admin-host", ".admin");
    addEndingCharacter(".rage-participant-host", ".participant");

    const shirt = endingScreen.querySelector(".rage-participant-host #participant-shirt-badge");
    if (shirt && p) shirt.textContent = p.name.toUpperCase();

    const titleEl = document.querySelector("#rage-title");
    if (titleEl && p) titleEl.textContent = `ADMIN SLAPSTICK PUNCHES: ${p.name.toUpperCase()}!`;

    // Three Punches Synchronized Sequence
    schedule(() => playCartoonPunch(1), 800);
    schedule(() => playCartoonPunch(2), 1300);
    schedule(() => playCartoonPunch(3), 1800);
    schedule(playDizzyFall, 2300);
  } else {
    // Admin Kick Ending
    addEndingCharacter(".kick-admin-host", ".admin");
    const kickParticipantSource = (p && p.id === "kanika") ? "#female-runner-svg" : "#male-chase-runner";
    addEndingCharacter(".removed-participant-host", kickParticipantSource);

    const shirt = endingScreen.querySelector(".removed-participant-host #participant-shirt-badge");
    if (shirt && p) shirt.textContent = p.name.toUpperCase();

    const titleEl = document.querySelector("#removed-title");
    if (titleEl && p) titleEl.textContent = `ADMIN KICK OF JUSTICE: ${p.name.toUpperCase()}!`;

    // Kick & Launch Synchronized Sequence
    schedule(playKickImpact, 1000);
    schedule(() => playYeetLaunch(1.5), 1020);
    schedule(playDistantTwinkle, 2500);
  }

  endingScreen.hidden = false;

  // Transition from Ending to Final Screen after 3900ms
  schedule(() => {
    endingScreen.hidden = true;
    showFinalVerdictScreen(p);
  }, 3900);
}

/* Final Verdict Screen with Specialized Panels (Krishna, Kanika, General/Kshitij) */
function showFinalVerdictScreen(p) {
  finalScreen.hidden = false;
  playCompletionFanfare();
  sequenceRunning = false;

  const finalBadge = document.querySelector("#final-badge");
  const finalTitle = document.querySelector("#final-title");

  const krishnaCard = document.querySelector("#krishna-case-review");
  const kanikaCard = document.querySelector("#kanika-streak-trap");
  const generalCard = document.querySelector("#general-dossier-card");
  const kshitijPanel = document.querySelector("#kshitij-accountability");

  // Hide all variants first
  if (krishnaCard) krishnaCard.hidden = true;
  if (kanikaCard) kanikaCard.hidden = true;
  if (generalCard) generalCard.hidden = true;
  if (kshitijPanel) kshitijPanel.hidden = true;

  if (p && p.id === "krishna") {
    // 1. KRISHNA: CASE REVIEW & FINAL BAN
    if (finalBadge) finalBadge.textContent = "STATUS: OFFICIAL AUDIT PROTOCOL";
    if (finalTitle) finalTitle.innerHTML = "CASE REVIEW: KRISHNA<br><span>ADMIN SANCTION RECORDED</span>";
    if (krishnaCard) krishnaCard.hidden = false;
    const banVerdict = krishnaCard && krishnaCard.querySelector(".verdict-decision");
    if (banVerdict) playRecording("ban", "Sound/Ban.oga");
  } else if (p && p.id === "kanika") {
    // 2. KANIKA: THE STREAK TRAP (STREAK VS. LEARNING)
    if (finalBadge) finalBadge.textContent = "STATUS: LEARNING PROTOCOL // MINDSET SHIFT";
    if (finalTitle) finalTitle.innerHTML = "THE STREAK TRAP<br><span>SOLVING &gt; PROTECTING NUMBERS</span>";
    if (kanikaCard) kanikaCard.hidden = false;
  } else {
    // 3. KSHITIJ & GENERAL SIMULATION: PRESERVED DOSSIER
    if (finalBadge) finalBadge.textContent = "STATUS: INVESTIGATION CONCLUDED";
    if (finalTitle) {
      finalTitle.innerHTML = p
        ? `WARNING COMPLETE.<br><span>${p.name.toUpperCase()} EVALUATION LOGGED!</span>`
        : "WARNING COMPLETE.<br><span>DSA PROOF STILL PENDING!</span>";
    }
    if (generalCard) generalCard.hidden = false;

    if (p && p.id === "kshitij" && kshitijPanel) {
      kshitijPanel.hidden = false;
      const intro = document.querySelector("#kshitij-accountability-title");
      const body = document.querySelector("#kshitij-accountability-body");
      const action = document.querySelector("#kshitij-accountability-action");
      const close = document.querySelector("#kshitij-accountability-close");
      if (intro) intro.textContent = p.accountabilityIntro;
      if (body) body.textContent = p.accountabilityBody;
      if (action) action.textContent = p.accountabilityAction;
      if (close) close.textContent = p.accountabilityClose;
      const patience = document.querySelector("#dossier-patience");
      const streak = document.querySelector("#dossier-streak");
      if (patience) patience.closest(".dossier-item").hidden = true;
      if (streak) streak.closest(".dossier-item").hidden = true;
    }

    const defendantEl = document.querySelector("#dossier-defendant");
    const verdictEl = document.querySelector("#dossier-verdict");
    const actionEl = document.querySelector("#dossier-action");

    if (defendantEl) defendantEl.textContent = p ? p.name : "Procrastinating Student";
    if (verdictEl) verdictEl.textContent = (p && p.verdict) || "VERDICT: GUILTY OF SLACKING";
    if (actionEl) actionEl.textContent = (p && p.action) || "Solve 1 LeetCode Problem";
  }

  if (!p || p.id !== "kshitij") {
    const patience = document.querySelector("#dossier-patience");
    const streak = document.querySelector("#dossier-streak");
    if (patience) patience.closest(".dossier-item").hidden = false;
    if (streak) streak.closest(".dossier-item").hidden = false;
  }
}

/* =========================================================
   RANDOM ENDINGS HELPER
=======
}

/* =========================================================
   RANDOM ENDINGS MANAGER
>>>>>>> origin/main
   ========================================================= */
function pickEnding() {
  if (endingDeck.length === 0) {
    endingDeck = [...endingKeys];
    for (let index = endingDeck.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [endingDeck[index], endingDeck[swapIndex]] = [endingDeck[swapIndex], endingDeck[index]];
    }
  }
  return endingDeck.pop();
}

function addEndingCharacter(hostSelector, characterSelector) {
<<<<<<< HEAD
  const host = document.querySelector(hostSelector);
  if (!host) return null;
  const source = document.querySelector(characterSelector);
  if (!source) return null;
  const character = source.cloneNode(true);
  character.classList.remove("participant", "admin");
  character.classList.add("ending-person");
  character.removeAttribute("style");
  character.setAttribute("aria-hidden", "true");
  host.replaceChildren(character);
  return character;
=======
  const host = endingScreen.querySelector(hostSelector);
  if (!host) return;
  const character = document.querySelector(characterSelector).cloneNode(true);
  character.classList.remove("participant", "admin");
  character.classList.add("ending-person");
  character.setAttribute("aria-hidden", "true");
  host.replaceChildren(character);
}

function showRandomEnding() {
  const selectedKey = pickEnding();
  const selectedEnding = endingScreen.querySelector(`[data-ending="${selectedKey}"]`);
  endingScreen.querySelectorAll(".ending-variant").forEach((variant) => {
    variant.hidden = variant !== selectedEnding;
  });

  if (selectedKey === "dussehra") {
    addEndingCharacter(".archer-host", ".admin");
    addEndingCharacter(".target-host", ".participant");

    // Dussehra Synchronized Sound Sequence
    schedule(playBowDraw, 200);
    schedule(playBowRelease, 700);
    schedule(() => playArrowFlight(0.8), 720);
    schedule(playArrowImpact, 1500);
    schedule(() => playFireCrackle(1.8), 1520);
  } else if (selectedKey === "rage") {
    addEndingCharacter(".rage-admin-host", ".admin");
    addEndingCharacter(".rage-participant-host", ".participant");

    // Three Punches Synchronized Sequence
    schedule(() => playCartoonPunch(1), 800);
    schedule(() => playCartoonPunch(2), 1300);
    schedule(() => playCartoonPunch(3), 1800);
    schedule(playDizzyFall, 2300);
  } else {
    // Admin Kick Ending
    addEndingCharacter(".kick-admin-host", ".admin");
    addEndingCharacter(".removed-participant-host", ".participant");

    // Kick & Launch Synchronized Sequence
    schedule(playKickImpact, 1000);
    schedule(() => playYeetLaunch(1.5), 1020);
    schedule(playDistantTwinkle, 2500);
  }

  endingScreen.hidden = false;
>>>>>>> origin/main
}

/* =========================================================
   WARNING POPUPS (16 POPUPS FILLING THE VIEWPORT)
   ========================================================= */
function addWarning(message, index, total) {
  const popup = document.createElement("article");
  const sizeClasses = ["popup-compact", "popup-normal", "popup-wide"];
  const sizeClass = sizeClasses[index % sizeClasses.length];
  popup.className = `warning-window ${sizeClass}`;
  popup.setAttribute("aria-label", message);
  popup.innerHTML = `
    <div class="window-titlebar">
      <span>DSA Admin Warning</span>
      <span class="window-close" aria-label="Close window" role="button">&#215;</span>
    </div>
    <div class="window-content">
      <span class="window-warning-icon" aria-hidden="true">&#9888;</span>
      <p class="window-message"></p>
    </div>`;
  popup.querySelector(".window-message").textContent = message;

  const closeButton = popup.querySelector(".window-close");
  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    popup.remove();
    playImpact();
  });

  warningStage.append(popup);
<<<<<<< HEAD
  playWarningBeep(index);

  // Compute position across viewport using 4x4 grid with jitter
=======
  playWarningBeep(index, total);

  // Compute position across viewport using a structured 4x4 grid with jitter
>>>>>>> origin/main
  const stageRect = warningStage.getBoundingClientRect();
  const stageW = stageRect.width || window.innerWidth;
  const stageH = stageRect.height || window.innerHeight;
  const popupWidth = popup.offsetWidth || 300;
  const popupHeight = popup.offsetHeight || 105;

  const col = index % 4;
  const row = Math.floor(index / 4);
  const cellW = Math.max(20, (stageW - popupWidth - 24) / 3);
  const cellH = Math.max(20, (stageH - popupHeight - 32) / 3);

  const jitterX = ((index * 37) % 36) - 18;
  const jitterY = ((index * 43) % 28) - 14;

  let left = 12 + col * cellW + jitterX;
  let top = 16 + row * cellH + jitterY;

  left = Math.max(8, Math.min(left, stageW - popupWidth - 8));
  top = Math.max(8, Math.min(top, stageH - popupHeight - 8));

  popup.style.left = `${Math.round(left)}px`;
  popup.style.top = `${Math.round(top)}px`;
  popup.style.zIndex = String(index + 1);

  const tilts = [-3.5, 2.2, -1.8, 3.2, -2.5, 1.9, -3.0, 2.8, -1.5, 3.5, -2.8, 2.0, -3.2, 1.6, -2.0, 2.5];
  popup.style.setProperty("--tilt", `${tilts[index % tilts.length]}deg`);
}

/* =========================================================
<<<<<<< HEAD
   RESET AND NAVIGATION
   ========================================================= */
=======
   CORE SEQUENCE CONTROLLER
   ========================================================= */
function startSequence() {
  if (sequenceRunning) return;
  sequenceRunning = true;
  sequenceStartedOnce = true;
  prepareAudio();

  landing.classList.add("sequence-active");
  warningStage.hidden = false;

  const popupInterval = 160;
  warnings.forEach((message, index) => {
    schedule(() => addWarning(message, index, warnings.length), index * popupInterval);
  });

  // Staggered popup cascade finishes, then smoothly transition to chase
  schedule(() => {
    warningStage.hidden = true;
    chaseScreen.hidden = false;

    // Chase footstep sound loop
    let stepCount = 0;
    const footstepInterval = window.setInterval(() => {
      if (!sequenceRunning) {
        window.clearInterval(footstepInterval);
        return;
      }
      playFootstep(stepCount % 2 === 0);
      stepCount++;
    }, 180);
    sequenceTimers.push(footstepInterval);

    // Near-catch impact sting at 4600ms
    schedule(playChaseCatchUp, 4600);

    // Transition from Chase to Ending at 5500ms
    schedule(() => {
      window.clearInterval(footstepInterval);
      chaseScreen.hidden = true;
      showRandomEnding();

      // Transition from Ending to Final Screen after 3900ms
      schedule(() => {
        endingScreen.hidden = true;
        finalScreen.hidden = false;
        playCompletionFanfare();
        sequenceRunning = false;
      }, 3900);
    }, 5500);
  }, warnings.length * popupInterval + 1100);
}

>>>>>>> origin/main
function resetPage() {
  sequenceTimers.forEach((timer) => {
    window.clearTimeout(timer);
    window.clearInterval(timer);
  });
  sequenceTimers = [];
  stopActiveSounds();
<<<<<<< HEAD
  stopSceneRecordings();
=======
>>>>>>> origin/main
  sequenceRunning = false;
  sequenceStartedOnce = false;

  warningStage.replaceChildren();
  warningStage.hidden = true;
  chaseScreen.hidden = true;
  endingScreen.hidden = true;
<<<<<<< HEAD
  if (awardScreen) {
    awardScreen.hidden = true;
    awardScreen.classList.remove("award-theme-gold", "award-theme-cyan", "award-theme-pink");
  }
  const stageContainer = document.querySelector("#award-stage-container");
  if (stageContainer) {
    stageContainer.classList.remove("stage-approach", "stage-present", "stage-accept", "stage-celebration", "stage-happy-ending");
  }
  const bouquetContent = document.querySelector("#bouquet-content");
  if (bouquetContent) bouquetContent.innerHTML = "";
  if (screenshotScreen) screenshotScreen.hidden = true;
  finalScreen.hidden = true;

  // Restore chase participant to default male runner
  setupChaseParticipant(null);

=======
>>>>>>> origin/main
  endingScreen.querySelectorAll(".ending-variant").forEach((variant) => {
    variant.hidden = true;
  });

<<<<<<< HEAD
  const hosts = [
    ".archer-host",
    ".target-host",
    ".kick-admin-host",
    ".rage-admin-host",
    ".rage-participant-host",
    ".removed-participant-host",
    "#award-admin-actor",
    "#award-participant-actor",
    ".award-admin-host",
    ".award-participant-host",
    ".screenshot-admin-host",
    ".screenshot-participant-host"
  ];
  hosts.forEach((sel) => {
    const el = document.querySelector(sel);
    if (el) el.replaceChildren();
  });

  // Reset Specialized Verdict Panels
  const krishnaCard = document.querySelector("#krishna-case-review");
  const kanikaCard = document.querySelector("#kanika-streak-trap");
  const generalCard = document.querySelector("#general-dossier-card");
  if (krishnaCard) krishnaCard.hidden = true;
  if (kanikaCard) kanikaCard.hidden = true;
  if (generalCard) generalCard.hidden = true;

  // Reset Console Banners & Slots
  const bannerIncomplete = document.querySelector("#console-incomplete-banner");
  const bannerAction = document.querySelector("#console-action-banner");
  if (bannerIncomplete) bannerIncomplete.hidden = true;
  if (bannerAction) bannerAction.hidden = true;
  const communicationScene = document.querySelector("#deepanshu-communication-scene");
  if (communicationScene) {
    communicationScene.hidden = true;
    communicationScene.classList.remove("communication-reveal");
  }

  const slotRecent = document.querySelector("#slot-recent");
  const slotLatest = document.querySelector("#slot-latest");
  if (slotRecent) slotRecent.classList.remove("slot-highlight");
  if (slotLatest) slotLatest.classList.remove("slot-highlight");

  landing.classList.remove("sequence-active");
  if (decisionCenter) decisionCenter.hidden = false;
  if (generalWarningCard) generalWarningCard.hidden = true;
}

/* =========================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================= */
renderParticipantCards();

// General simulation triggers
if (generalSimButton) {
  generalSimButton.addEventListener("click", () => {
    playButtonClick();
    startWarningAndActionFlow(null);
  });
}

if (activateButton) {
  activateButton.addEventListener("click", () => {
    playButtonClick();
    startWarningAndActionFlow(null);
  });
}
=======
  endingScreen.querySelectorAll(".ending-art > div").forEach((host) => {
    if (
      host.classList.contains("archer-host") ||
      host.classList.contains("target-host") ||
      host.classList.contains("kick-admin-host") ||
      host.classList.contains("rage-admin-host") ||
      host.classList.contains("rage-participant-host") ||
      host.classList.contains("removed-participant-host")
    ) {
      host.replaceChildren();
    }
  });

  finalScreen.hidden = true;
  landing.classList.remove("sequence-active");
  activateButton.focus();
}

/* =========================================================
   EVENT LISTENERS
   ========================================================= */
activateButton.addEventListener("click", startSequence);
>>>>>>> origin/main

audioToggle.addEventListener("click", () => {
  soundMuted = !soundMuted;
  if (soundMuted) stopActiveSounds();
  else if (sequenceStartedOnce) prepareAudio();
  updateAudioToggle();
});

<<<<<<< HEAD
// Replay buttons
playAgainButton.addEventListener("click", () => {
  playButtonClick();
  const current = activeParticipant;
  resetPage();
  if (current) startParticipantFlow(current);
  else startWarningAndActionFlow(null);
});

if (awardReplayButton) {
  awardReplayButton.addEventListener("click", () => {
    playButtonClick();
    const current = activeParticipant;
    resetPage();
    if (current) startAwardFlow(current);
  });
}

if (screenshotReplayButton) {
  screenshotReplayButton.addEventListener("click", () => {
    playButtonClick();
    const current = activeParticipant;
    resetPage();
    if (current) startScreenshotFlow(current);
  });
}

// Return to Participants Menu
backHomeButton.addEventListener("click", () => {
  playButtonClick();
  resetPage();
});

if (backParticipantsButton) {
  backParticipantsButton.addEventListener("click", () => {
    playButtonClick();
    resetPage();
  });
}

if (awardMenuButton) {
  awardMenuButton.addEventListener("click", () => {
    playButtonClick();
    resetPage();
  });
}

if (screenshotMenuButton) {
  screenshotMenuButton.addEventListener("click", () => {
    playButtonClick();
    resetPage();
  });
}
=======
playAgainButton.addEventListener("click", () => {
  resetPage();
  startSequence();
});

backHomeButton.addEventListener("click", resetPage);
>>>>>>> origin/main
