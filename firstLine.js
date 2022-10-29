const { Paragraph, TextRun } = require("docx");

const firstLine = new Paragraph({
  children: [new TextRun({ text: "【별지제4호서식】", size: 26 })],
});

module.exports = firstLine;