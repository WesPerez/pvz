"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type Mood = "开心" | "安静" | "怀旧" | "奇幻";
type Tempo = "慢板" | "行板" | "快板";

interface NoteInfo {
  freq: number;
  name: string;
}

const MOODS: { key: Mood; emoji: string; scale: NoteInfo[] }[] = [
  {
    key: "开心",
    emoji: "😊",
    scale: [
      { freq: 261.63, name: "C" },
      { freq: 293.66, name: "D" },
      { freq: 329.63, name: "E" },
      { freq: 392.0, name: "G" },
      { freq: 440.0, name: "A" },
    ],
  },
  {
    key: "安静",
    emoji: "🌙",
    scale: [
      { freq: 220.0, name: "A" },
      { freq: 261.63, name: "C" },
      { freq: 293.66, name: "D" },
      { freq: 329.63, name: "E" },
      { freq: 392.0, name: "G" },
    ],
  },
  {
    key: "怀旧",
    emoji: "🍂",
    scale: [
      { freq: 293.66, name: "D" },
      { freq: 329.63, name: "E" },
      { freq: 349.23, name: "F" },
      { freq: 392.0, name: "G" },
      { freq: 440.0, name: "A" },
      { freq: 466.16, name: "Bb" },
    ],
  },
  {
    key: "奇幻",
    emoji: "✨",
    scale: [
      { freq: 261.63, name: "C" },
      { freq: 293.66, name: "D" },
      { freq: 329.63, name: "E" },
      { freq: 369.99, name: "F#" },
      { freq: 415.3, name: "G#" },
      { freq: 466.16, name: "A#" },
    ],
  },
];

const TEMPO_MAP: Record<Tempo, number> = {
  慢板: 400,
  行板: 250,
  快板: 150,
};

function getWaveform(mood: Mood): OscillatorType {
  if (mood === "怀旧") return "triangle";
  return "sine";
}

function generateMelody(mood: Mood): NoteInfo[] {
  const moodData = MOODS.find((m) => m.key === mood)!;
  const count = 12 + Math.floor(Math.random() * 5); // 12-16
  return Array.from({ length: count }, () => {
    const idx = Math.floor(Math.random() * moodData.scale.length);
    return { ...moodData.scale[idx] };
  });
}

export function MelodySpirit() {
  const [mood, setMood] = useState<Mood>("开心");
  const [tempo, setTempo] = useState<Tempo>("行板");
  const [melody, setMelody] = useState<NoteInfo[]>([]);
  const [playing, setPlaying] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(-1);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const timersRef = useRef<number[]>([]);
  const playingRef = useRef(false);

  const stopPlayback = useCallback(() => {
    playingRef.current = false;
    setPlaying(false);
    setCurrentIdx(-1);
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  }, []);

  const playMelody = useCallback(() => {
    if (melody.length === 0) return;

    stopPlayback();
    playingRef.current = true;
    setPlaying(true);

    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    const duration = TEMPO_MAP[tempo] / 1000;
    const waveform = getWaveform(mood);
    const isFantasy = mood === "奇幻";

    melody.forEach((note, i) => {
      const tid = window.setTimeout(() => {
        if (!playingRef.current) return;

        setCurrentIdx(i);

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = waveform;
        osc.frequency.value = note.freq;

        if (isFantasy) {
          osc.detune.value = Math.random() * 12 - 6;
        }

        // ADSR envelope
        const attack = duration * 0.05;
        const decay = duration * 0.1;
        const sustainLevel = 0.3;
        const release = duration * 0.15;
        const sustainEnd = duration - release;

        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + attack);
        gain.gain.linearRampToValueAtTime(
          0.15 * sustainLevel,
          ctx.currentTime + attack + decay
        );
        gain.gain.setValueAtTime(
          0.15 * sustainLevel,
          ctx.currentTime + sustainEnd
        );
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + duration);
      }, i * TEMPO_MAP[tempo]);

      timersRef.current.push(tid);
    });

    // Auto-stop when melody finishes
    const endTid = window.setTimeout(() => {
      stopPlayback();
    }, melody.length * TEMPO_MAP[tempo] + 100);
    timersRef.current.push(endTid);
  }, [melody, tempo, mood, stopPlayback]);

  const handleGenerate = useCallback(() => {
    stopPlayback();
    setMelody(generateMelody(mood));
  }, [mood, stopPlayback]);

  const handlePlayStop = useCallback(() => {
    if (playing) {
      stopPlayback();
    } else {
      playMelody();
    }
  }, [playing, playMelody, stopPlayback]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      playingRef.current = false;
      timersRef.current.forEach((id) => clearTimeout(id));
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="card-cute"
      style={{
        background: "#dbeefe",
        padding: 24,
        borderRadius: 20,
        maxWidth: 480,
        margin: "0 auto",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: 16, fontSize: 18 }}>
        🎵 旋律精灵
      </h3>

      {/* Mood selection */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, marginBottom: 8, color: "#555" }}>
          选择心情
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {MOODS.map((m) => (
            <button
              key={m.key}
              onClick={() => setMood(m.key)}
              style={{
                flex: 1,
                padding: "8px 4px",
                borderRadius: 12,
                border:
                  mood === m.key
                    ? "2px solid #34d399"
                    : "1.5px solid #c7ddf5",
                background:
                  mood === m.key ? "rgba(52,211,153,0.1)" : "#fff",
                cursor: "pointer",
                fontSize: 13,
                transition: "all 0.2s",
              }}
            >
              {m.emoji} {m.key}
            </button>
          ))}
        </div>
      </div>

      {/* Tempo selection */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, marginBottom: 8, color: "#555" }}>
          选择速度
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["慢板", "行板", "快板"] as Tempo[]).map((t) => (
            <button
              key={t}
              onClick={() => setTempo(t)}
              style={{
                flex: 1,
                padding: "8px 4px",
                borderRadius: 12,
                border:
                  tempo === t ? "2px solid #38bdf8" : "1.5px solid #c7ddf5",
                background:
                  tempo === t ? "rgba(56,189,248,0.1)" : "#fff",
                cursor: "pointer",
                fontSize: 13,
                transition: "all 0.2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        style={{
          display: "block",
          width: "100%",
          padding: "10px 0",
          borderRadius: 14,
          border: "none",
          background: "linear-gradient(135deg, #38bdf8, #34d399)",
          color: "#fff",
          fontSize: 15,
          fontWeight: 600,
          cursor: "pointer",
          marginBottom: 16,
        }}
      >
        生成旋律
      </button>

      {/* Note display */}
      {melody.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            flexWrap: "wrap",
            marginBottom: 16,
            minHeight: 40,
          }}
        >
          {melody.map((note, i) => {
            const isCurrent = i === currentIdx;
            return (
              <div
                key={i}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 10,
                  fontWeight: 600,
                  background: isCurrent ? "#38bdf8" : "#fff",
                  color: isCurrent ? "#fff" : "#555",
                  border: isCurrent
                    ? "2px solid #38bdf8"
                    : "1.5px solid #c7ddf5",
                  transform: isCurrent
                    ? "translateY(-6px)"
                    : "translateY(0)",
                  transition: "transform 0.15s ease, background 0.15s ease",
                }}
              >
                {note.name}
              </div>
            );
          })}
        </div>
      )}

      {/* Play / Stop */}
      {melody.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={handlePlayStop}
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              border: "2px solid #c7ddf5",
              background: playing ? "#fef3c7" : "#fff",
              cursor: "pointer",
              fontSize: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
          >
            {playing ? "⏸" : "▶"}
          </button>
        </div>
      )}
    </div>
  );
}
