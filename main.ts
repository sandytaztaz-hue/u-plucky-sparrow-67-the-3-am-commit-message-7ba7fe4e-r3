import fs from "node:fs";

const LINE = "fix(prod): revert 3am deploy; the model hallucinated a database and I believed it";
const MAX_CHARS = 200;

if (!LINE || !LINE.trim()) throw new Error("entry line is empty");
if (LINE.length > MAX_CHARS) throw new Error("entry line too long: " + LINE.length + " > " + MAX_CHARS);
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
console.log("wrote /output/entry.txt (" + LINE.length + " chars)");
