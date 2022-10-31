const {
    Paragraph,
    TextRun,
    Table,
    TableRow,
    TableCell,
    WidthType,
    HeightRule,
    AlignmentType,
    VerticalAlign,
    BorderStyle
  } = require("docx");
  
    
const border_right_double = {
//   top: {
//     style: BorderStyle.DOUBLE,
//     size: 1,
//   },
//   bottom: {
//     style: BorderStyle.DOUBLE,
//     size: 1,
//   },
//   left: {
//     style: BorderStyle.DOUBLE,
//     size: 1,
//   },
  right: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
};

const border_left_double = {
  left: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
};

  const firstRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType,
        },
        borders: border_right_double,
        children: [
          new Paragraph({
            text: "출 원 번 호",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 3000,
          type: WidthType,
        },
        borders: border_left_double,
        children: [
          new Paragraph({
            text: "1020160167636",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 2500,
          type: WidthType,
        },
        children: [
          new Paragraph({
            text: "출원일(심사청구일)",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 3000,
          type: WidthType,
        },
        children: [
          new Paragraph({
            text: "2016.12.09.(2020.11.09)",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
    ],
    height: {
      value: 300,
      rule: HeightRule.ATLEAST,
    },
  });
  
  const firstTable = new Table({
    rows: [firstRow],
  });
  
  module.exports = firstTable;
  