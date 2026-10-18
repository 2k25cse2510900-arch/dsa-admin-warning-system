const landing = document.querySelector(".landing");
const activateButton = document.querySelector("#activate-button");
const warningStage = document.querySelector("#warning-stage");
const chaseScreen = document.querySelector("#chase-screen");
const endingScreen = document.querySelector("#ending-screen");
const finalScreen = document.querySelector("#final-screen");
const playAgainButton = document.querySelector("#play-again-button");
const backHomeButton = document.querySelector("#back-home-button");
const audioToggle = document.querySelector("#audio-toggle");

const endingKeys = ["dussehra", "rage", "removed"];
let endingDeck = [];
let audioContext = null;
let masterCompressor = null;
let masterGain = null;
let audioUnavailable = false;
let sequenceStartedOnce = false;
let soundMuted = false;
const activeNodes = new Set();

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

      // Master Compressor to maximize loudness while preventing clipping
      masterCompressor = audioContext.createDynamicsCompressor();
      masterCompressor.threshold.setValueAtTime(-14, audioContext.currentTime);
      masterCompressor.knee.setValueAtTime(8, audioContext.currentTime);
      masterCompressor.ratio.setValueAtTime(5, audioContext.currentTime);
      masterCompressor.attack.setValueAtTime(0.003, audioContext.currentTime);
      masterCompressor.release.setValueAtTime(0.12, audioContext.currentTime);

      // Master Gain for volume and instant mute/unmute
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

/* 1. Retro Warning Chimes Cascade */
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

/* 2. Chase Scene Footsteps & Catch-Up */
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
  // Dramatic catch-up whoosh + dramatic brass stab
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

/* 3. Dussehra: Bow Draw, Release, Flight, Impact, and Flames */
function playBowDraw() {
  // Rising tension creak
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
  // Snappy plucked bow twang
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
  // Heavy strike thud + sharp snap
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

    // Amplitude crackle pops
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

/* 4. Kick Ending: Punchy Impact, Exaggerated Launch Doppler, Distant Twinkle */
function playKickImpact() {
  // Deep sub drop + sharp slap
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
  // Playful exaggerated launch Doppler whoosh (rising then fading into distance)
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
    playTone({ startFrequency: 240, endFrequency: 48, duration: 0.26, waveform: "sine", volume: 0.42, attack: 0.005 });
    playTone({ startFrequency: 950, endFrequency: 180, duration: 0.12, waveform: "sawtooth", volume: 0.25, attack: 0.005 });
  }
}

function playDizzyFall() {
  // Comical slide whistle down with vibrato wobble
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

    // Soft ground thump
    schedule(() => {
      playTone({ startFrequency: 95, endFrequency: 40, duration: 0.16, waveform: "sine", volume: 0.26 });
    }, 450);
  } catch {}
}

/* 6. Victory Fanfare & UI Clicks */
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

function updateAudioToggle() {
  audioToggle.textContent = soundMuted ? "SOUND OFF" : "SOUND ON";
  audioToggle.setAttribute("aria-pressed", String(soundMuted));
  audioToggle.setAttribute("aria-label", soundMuted ? "Unmute sound" : "Mute sound");
  if (masterGain && audioContext) {
    masterGain.gain.setValueAtTime(soundMuted ? 0 : 0.28, audioContext.currentTime);
  }
}

/* =========================================================
   RANDOM ENDINGS MANAGER
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
  playWarningBeep(index, total);

  // Compute position across viewport using a structured 4x4 grid with jitter
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

function resetPage() {
  sequenceTimers.forEach((timer) => {
    window.clearTimeout(timer);
    window.clearInterval(timer);
  });
  sequenceTimers = [];
  stopActiveSounds();
  sequenceRunning = false;
  sequenceStartedOnce = false;

  warningStage.replaceChildren();
  warningStage.hidden = true;
  chaseScreen.hidden = true;
  endingScreen.hidden = true;
  endingScreen.querySelectorAll(".ending-variant").forEach((variant) => {
    variant.hidden = true;
  });

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

audioToggle.addEventListener("click", () => {
  soundMuted = !soundMuted;
  if (soundMuted) stopActiveSounds();
  else if (sequenceStartedOnce) prepareAudio();
  updateAudioToggle();
});

playAgainButton.addEventListener("click", () => {
  resetPage();
  startSequence();
});

backHomeButton.addEventListener("click", resetPage);
