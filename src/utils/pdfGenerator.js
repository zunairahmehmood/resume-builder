import html2pdf from "html2pdf.js";

export const downloadResumePDF = () => {
  const element = document.getElementById("resume");
  html2pdf().from(element).save("resume.pdf");
};