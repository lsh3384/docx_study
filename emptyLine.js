const { Document, Packer, Paragraph } = require("docx");

const emptyLine = new Paragraph({
  text: "",
//   alignment: AlignmentType.RIGHT,
});

module.exports = emptyLine;