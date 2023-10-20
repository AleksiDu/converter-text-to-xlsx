import fs from "fs";
import XLSX from "xlsx";

const textData = fs.readFileSync("report/runtime.txt", "utf8");

const header = textData.split("|").splice(1, 4);

console.log(header);

console.log(textData.split("\n"));

const workbook = XLSX.utils.book_new();
const sheetData = [[...header], ["Data 1", "Data 2", "Data3"]];

const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

XLSX.writeFile(workbook, "report/output.xlsx");
