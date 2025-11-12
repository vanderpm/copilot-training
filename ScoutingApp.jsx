import React, { useState } from "react";
import supabase from "./supabaseClient";

// Simple form for FRC scouting: Match & Team, with inputs for Auton, Teleop, and Endgame
export default function ScoutingApp() {
  const [match, setMatch] = useState("");
  const [team, setTeam] = useState("");
  const [auton, setAuton] = useState("");
  const [teleop, setTeleop] = useState("");
  const [endgame, setEndgame] = useState("");
  const [status, setStatus] = useState("");

  const handleSave = async () => {
    setStatus("Saving...");
    const { error } = await supabase.from("scouting_reports").insert([
      {
        match_number: Number(match),
        team_number: Number(team),
        auton: { notes: auton },
        teleop: { notes: teleop },
        endgame: { notes: endgame },
      },
    ]);
    setStatus(error ? `Error: ${error.message}` : "Saved!");
    setTimeout(() => setStatus(""), 3500);
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>FIRST Robotics Scouting</h1>
      <label>
        Match Number:{" "}
        <input
          type="number"
          value={match}
          onChange={(e) => setMatch(e.target.value)}
        />
      </label>
      <br />
      <label>
        Team Number:{" "}
        <input
          type="number"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
        />
      </label>
      <br />
      <h2>Autonomous</h2>
      <textarea
        value={auton}
        onChange={(e) => setAuton(e.target.value)}
        placeholder="Auton notes"
        style={{ width: "100%" }}
      />
      <h2>Teleop</h2>
      <textarea
        value={teleop}
        onChange={(e) => setTeleop(e.target.value)}
        placeholder="Teleop notes"
        style={{ width: "100%" }}
      />
      <h2>Endgame</h2>
      <textarea
        value={endgame}
        onChange={(e) => setEndgame(e.target.value)}
        placeholder="Endgame notes"
        style={{ width: "100%" }}
      />
      <br />
      <button onClick={handleSave} style={{ marginTop: "1rem", fontSize: "1rem" }}>
        Save Report
      </button>
      {status && <div style={{ marginTop: 12 }}>{status}</div>}
    </div>
  );
}
