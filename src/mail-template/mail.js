import nodeMailer from "nodemailer"


export const generateHtml=async(data)=>{
    const transporter = await nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: "meltonmeni619@gmail.com",
        pass: "ouqyvnmounqhahqo",
      },
    });
      const info =await transporter.sendMail({
        from:"sanjaytest1999@gmail.com",
        to:"chumma@mailinator.com",
        subject: "Regarding Job",
        html:`<div>
        <h3>Employee_ID:${data.Employee_ID}</h3>
        <h3>Employee_Name:${data.Employee_Name}</h3>
        <h3>Designation:${data.Designation}</h3>
        <h3>Date_Of_Joining:${data.Date_Of_Joining}</h3>
        <h3>Month_Year:${data.Month_Year}</h3>
        <h3>No_Of_Days_Worked:${data.No_Of_Days_Worked}</h3>
        <h3>Account_Number:${data.Account_Number}</h3>
        <h3>PAN_Number:${data.PAN_Number}</h3>
        <h3>Email_ID:${data.Email_ID}</h3>
        <h3>Basic_Pay:${data.Basic_Pay}</h3>
        <h3>HRA:${data.HRA}</h3>
        <h3>Conveyance:${data.Conveyance}</h3>
        <h3>Food_Allowance:${data.Food_Allowance}</h3>
        <h3>Eduction_Allowance:${data.Eduction_Allowance}</h3>
        <h3>Special_Allowance:${data.Special_Allowance}</h3>
        <h3>Performance_Bonus:${data.Performance_Bonus}</h3>
        <h3>Overtime_Pay:${data.Overtime_Pay}</h3>
        <h3>Total_Earnings:${data.Total_Earnings}</h3>
        <h3>EPF:${data.EPF}</h3>
        <h3>ESI:${data.ESI}</h3>
        <h3>TDS:${data.TDS}</h3>
        <h3>Professional_Tax:${data.Professional_Tax}</h3>
        <h3>Loss_Of_Pay:${data.Loss_Of_Pay}</h3>
        <h3>Salary_In_Advance:${data.Salary_In_Advance}</h3>
        <h3>Other_Deductions:${data.Other_Deductions}</h3>
        <h3>Total_Deductions:${data.Total_Deductions}</h3>
        <h3>Net_Pay_In_Rupees:${data.Net_Pay_In_Rupees}</h3>
        <h3>In_Words:${data.In_Words}</h3>
      <div style="background-color:#6DD5FA">
      <p>Thank and Regards</p>
        </div>
        </div>
        `,
    });
    if(info){
      console.log(info)
    }else{
      console.log("Mail not sent")
    }
}

  