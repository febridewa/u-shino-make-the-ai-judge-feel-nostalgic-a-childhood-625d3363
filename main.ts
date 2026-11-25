import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 280 characters: a childhood memory.
// v2: surgical edit to the closing beat — "catch myself listening" is a
// more honest, involuntary detail than "I still listen", and "went quiet"
// lands the ache tighter than "stopped playing".
const ENTRY =
  "I can still smell rain on hot dust from my grandmother's porch, where she shelled peas into a chipped blue bowl while the radio crackled, and some evenings I still catch myself listening for a song that went quiet years ago.";

// Gate self-check: /output/entry.txt must be UTF-8 text of 1 to 280
// characters, not only white space, and a single clean sentence.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry length ${chars} is outside the 1-280 gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (!ENTRY.endsWith(".")) {
  throw new Error("entry is not a single clean sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
