import { existsSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { spawnSync } from "node:child_process";

const scopes = new Set(["frontend", "backend", "shared"]);
const scope = process.argv[2];

if (!scopes.has(scope)) {
  console.error("Usage: node scripts/typecheck.mjs <frontend|backend|shared>");
  process.exitCode = 1;
} else {
  const projectDirectory = resolve(scope);

  if (!existsSync(projectDirectory)) {
    console.error(`Typecheck scope does not exist: ${scope}`);
    process.exitCode = 1;
  } else if (!hasTypeScriptSource(projectDirectory)) {
    console.log(`Skipping ${scope} typecheck: no TypeScript source files found.`);
  } else {
    const tscPath = resolve("node_modules", "typescript", "bin", "tsc");
    const result = spawnSync(process.execPath, [tscPath, "--project", `${scope}/tsconfig.json`, "--noEmit"], {
      stdio: "inherit"
    });

    if (result.error) {
      console.error(result.error.message);
      process.exitCode = 1;
    } else {
      process.exitCode = result.status ?? 1;
    }
  }
}

function hasTypeScriptSource(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") {
      continue;
    }

    const entryPath = resolve(directory, entry.name);
    if (entry.isDirectory() && hasTypeScriptSource(entryPath)) {
      return true;
    }

    if (entry.isFile() && (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx"))) {
      return true;
    }
  }

  return false;
}
