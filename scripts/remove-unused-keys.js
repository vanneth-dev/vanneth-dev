import fs from "fs";
import path from "path";

const jsonFilePath = path.join("src/shared/lang/km.json");
const srcFolder = path.join("src");
const backupFilePath = jsonFilePath + ".backup.json";

fs.copyFileSync(jsonFilePath, backupFilePath);
console.log("Backup created at", backupFilePath);

let translations = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

function scanFolder(folder) {
  let code = "";
  const files = fs.readdirSync(folder);
  for (const file of files) {
    const fullPath = path.join(folder, file);
    const stat = fs.lstatSync(fullPath);
    if (stat.isDirectory()) {
      code += scanFolder(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      code += fs.readFileSync(fullPath, "utf-8") + "\n";
    }
  }
  return code;
}

const frontendCode = scanFolder(srcFolder);

function filterUnusedKeys(obj, code, parentKey = "") {
  const result = {};
  for (const key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      const filtered = filterUnusedKeys(obj[key], code, fullKey);
      if (Object.keys(filtered).length > 0) {
        result[key] = filtered;
      }
    } else {
      const regex = new RegExp(`\\b${key}\\b`, "g");
      if (regex.test(code)) {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

const cleanedTranslations = filterUnusedKeys(translations, frontendCode);

fs.writeFileSync(
  jsonFilePath,
  JSON.stringify(cleanedTranslations, null, 2),
  "utf-8",
);

console.log("Unused keys removed! JSON overwritten successfully.");
