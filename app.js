const docx = require("docx");

const fs = require("fs");
const { Document, Packer, Paragraph } = require("docx");

const emptyLine = require('./emptyLine');
const firstLine = require('./firstLine');
const firstTable = require('./firstTable');
const secondTable = require('./secondTable');
const thirdTable = require('./thirdTable');
const testTable = require('./testTable');
// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section


const doc = new Document({
  sections: [
    {
      children: [
        testTable,
        firstLine,
        firstTable,
        // emptyLine,
        // secondTable,
        // emptyLine,
        // thirdTable,
      ],
    },
  ],
});


// Used to export the file into a .docx file
Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document.docx", buffer);
});

// Done! A file called 'My Document.docx' will be in your file system.
