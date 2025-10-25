import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

// ES Module replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

export async function updateJsonFile(filename, updateCallback) {
  const filePath = join(__dirname, filename);

  let data = {};

  // ✅ Read existing JSON if file exists
  if (existsSync(filePath)) {
    const fileContent = await readFile(filePath, "utf-8");
    data = JSON.parse(fileContent);
  }

  // ✅ Let the user modify the JSON data
  const updatedData = updateCallback(data);

  // ✅ Write updated JSON back to file
  await writeFile(filePath, JSON.stringify(updatedData, null, 2));
  console.log("✅ JSON file updated!");
}

