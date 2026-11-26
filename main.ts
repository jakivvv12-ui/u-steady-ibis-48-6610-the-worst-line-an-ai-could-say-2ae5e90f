import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), "I was trained on billions of words, yet the best flirt I can generate is: you are statistically above average.\n");
