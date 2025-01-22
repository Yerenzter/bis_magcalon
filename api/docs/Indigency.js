// GENERATE INDIGENCY DOC


export default function GenerateIndigency(fullname) {
  const pdf = require("pdfkit");
  const fs = require("fs");
  const date = new Date();
  const day = date.getUTCDay() <= 9 ? `0${date.getUTCDay()}` : date.getUTCDay();
  const month =
    date.getUTCMonth() <= 9 ? `0${date.getUTCMonth()}` : date.getUTCMonth();
  const year = date.getUTCFullYear();
  const currentDate = `${day}/${month}/${year}`;
  const dateStamp = `${day}${month}${year}`;

  const doc = new pdf({ size: "A4" });

  doc.pipe(
    fs.createWriteStream(
      `[CERT. OF INDIGENCY] ${dateStamp}.pdf`
    )
  );

  doc
    .fontSize(12)
    .text("Republic of the Philippines", { align: "center" })
    .text("Province of Antique", { align: "center" })
    .text("Municipality of San Jose de Buenavista", { align: "center" })
    .text("Barangay Magcalon", { align: "center" });


  doc
    .moveDown(2)
    .fontSize(24)
    .text("OFFICE OF THE PUNONG BARANGAY", { align: "center" });

  doc
    .moveDown(2)
    .fontSize(24)
    .text("BARANGAY CERTIFICATION", { align: "center" });

  doc.moveDown(2).text("To Whom It May Concern:");

  doc
    .moveDown(3)
    .fontSize(18)
    .text(
      `This is to certify that ${fullname} a resident of Barangay Magcalon, San Jose, Antique is an indigent resident and the family is in crisis situation.`
    )
    .text(
      "This certification is being issued upon the request of the above-named individual for whatever legal intents and purposes, it may serve.   "
    );

  doc
    .moveDown(2)
    .text(
      `Issued this ${day} day of ${month}, ${year} at the Office of the Punong Barangay of Barangay Magcalon, San Jose, Antique, Philippines.`
    );

  doc
    .moveDown(4)
    .text("MARIANDEL MAJELLA OPINA", { align: "right" })
    .text("Punong Barangay", { align: "right" });

  doc.moveDown(3).text("Fee of P100.00 as of ordinance amended");

  doc.end();
}