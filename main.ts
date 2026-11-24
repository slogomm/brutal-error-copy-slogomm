import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });

const message = "Error 500: The system has given up. It asks that you stop taking this personally and refresh.";
// Revised after local test
writeFileSync(join(outputDir, "entry.txt"), message);