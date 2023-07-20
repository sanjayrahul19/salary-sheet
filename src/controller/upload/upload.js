import { generateHtml } from "../../mail-template/mail";
import { responseHandler } from "../../response/responseHandler";
import XLSX from "xlsx";

export const upload = async (req, res) => {
  if (!req.files || !req.files.file) {
    return responseHandler(res, 400, "Please upload a proper file", false);
  }

  const file = req.files.file;
  if (!file.name.toLowerCase().endsWith(".xlsx")) {
    return responseHandler(res, 400, "Invalid file format. Please upload only XLSX files.", false);
  }

  try {
    const fileBuffer = file.data;
    const workbook = XLSX.read(fileBuffer);
    if (!workbook.SheetNames || workbook.SheetNames.length === 0) {
      throw new Error("No sheets found in the workbook");
    }

    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 0 });

    const firstRow = jsonData[0];
    const requiredColumns = [
      "Employee_ID",
      "Employee_Name",
      "Designation",
      "Date_Of_Joining",
      "Month_Year",
      "No_Of_Days_Worked",
      "Account_Number",
      "PAN_Number",
      "Email_ID",
      "Basic_Pay",
      "HRA",
      "Conveyance",
      "Food_Allowance",
      "Eduction_Allowance",
      "Special_Allowance",
      "Performance_Bonus",
      "Overtime_Pay",
      "Total_Earnings",
      "EPF",
      "ESI",
      "TDS",
      "Professional_Tax",
      "Loss_Of_Pay",
      "Salary_In_Advance",
      "Other_Deductions",
      "Total_Deductions",
      "Net_Pay_In_Rupees",
      "In_Words",
    ];

    const missingColumns = [];
    for (const column of requiredColumns) {
      if (!firstRow[column]) {
        missingColumns.push(column);
      }
    }
    if (missingColumns.length > 0) {
      for (const column of missingColumns) {
        return responseHandler(res, 400, `Required column '${column}' is missing in the first row`, false);
      }
    }

    const generateHtmlPromises = jsonData.map((data) => generateHtml(data));
    await Promise.all(generateHtmlPromises);

    return responseHandler(res, 200, "Mail sent successfully", true);
  } catch (err) {
    return responseHandler(res, 500, err.message, false);
  }
};
