import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("homepage leads with the senior frontend positioning and stays location-neutral", async () => {
  const homepage = await read("app/page.tsx");
  const profile = await read("content/profile.ts");

  assert.match(profile, /title: "Senior Frontend Engineer"/);
  assert.match(profile, /primaryStack: \["React", "TypeScript", "Next\.js"\]/);
  assert.match(homepage, /profile\.focusAreas\.join/);
  assert.doesNotMatch(homepage, /Istanbul|Netherlands|Arnhem|Amsterdam/);
});

test("contact publishes the approved relocation wording", async () => {
  const profile = await read("content/profile.ts");

  assert.match(
    profile,
    /contactLocation: "Based in Arnhem, Netherlands"/,
  );
  assert.doesNotMatch(profile, /No sponsorship required|authori[sz]ed to work in Netherlands/i);
});

test("Signal Ops is positioned around ordered resumable SSE", async () => {
  const projects = await read("content/projects.ts");
  const signalOps = projects.split('slug: "signal-ops"')[1]?.split("] as const")[0] ?? "";

  assert.match(signalOps, /ordered, resumable Server-Sent Events stream/);
  assert.match(signalOps, /snapshot and cursor/);
  assert.doesNotMatch(signalOps, /technologies:\s*\[[\s\S]*?"WebSockets"/);
});

test("flagship projects expose only verified source and documentation URLs", async () => {
  const projects = await read("content/projects.ts");

  assert.match(projects, /https:\/\/github\.com\/YioGoi\/atlas/);
  assert.match(projects, /https:\/\/github\.com\/YioGoi\/signal-ops/);
  assert.doesNotMatch(projects, /liveUrl|demoUrl/);
});

