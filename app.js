const docx = require("docx");

const fs = require("fs");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,  } = require("docx");

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section
const table = new Table({
  width: {
    size: 5000,
    type: WidthType,
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph("Hello")],
        }),
        new TableCell({
          children: [],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [],
        }),
        new TableCell({
          children: [new Paragraph("World")],
        }),
      ],
    }),
  ],
});

const doc = new Document({
  sections: [
    {
      children: [
        table
      ],
    },
  ],
});

// Used to export the file into a .docx file
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});

// Done! A file called 'My Document.docx' will be in your file system.
