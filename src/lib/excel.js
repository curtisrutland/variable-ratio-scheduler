import XLSX from "xlsx";

export default function createExcelFile(results, avg) {
  const data = results.map((r, i) => [i + 1, r]);
  data.unshift(["#", "Ratio"]);
  const ws = XLSX.utils.aoa_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "VR Schedule");
  const filename = `VR ${avg} Schedule - ${new Date().getTime()}.xlsx`;
  XLSX.writeFile(wb, filename);
}
