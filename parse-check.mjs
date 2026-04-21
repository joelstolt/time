import { transform } from "esbuild";
import fs from "fs";
const files = process.argv.slice(2);
let failed = 0;
for (const f of files) {
  try {
    const src = fs.readFileSync(f, "utf8");
    await transform(src, { loader: "jsx", sourcefile: f });
    console.log("OK   " + f);
  } catch (e) {
    failed++;
    console.log("FAIL " + f);
    console.log("  " + (e.errors ? e.errors.map(x => x.text + " @ " + (x.location ? x.location.line + ":" + x.location.column : "?")).join("\n  ") : e.message));
  }
}
process.exit(failed ? 1 : 0);
