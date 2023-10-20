import fs from "fs";
import XLSX from "xlsx";

const textData = fs.readFileSync("report/runtime.txt", "utf8");

const header = textData.split("|").splice(1, 4);

const rows = textData
  .split("\n")
  .slice(2, textData.length - 1)
  .map((row) => row.split("|").filter((val) => val !== ""));

const workbook = XLSX.utils.book_new();
const sheetData = [[...header], ...rows];

const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

XLSX.writeFile(workbook, "report/output.xlsx");
