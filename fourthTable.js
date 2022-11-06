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
    BorderStyle,
    TableLayoutType,
  } = require("docx");

  
  
const firstRow = new TableRow({
    children: [
  
      // # 1
      new TableCell({
        width: {
          size: 10,
          type: WidthType.PERCENTAGE,
        },
        columnSpan: 1,
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "본    원",
                size: 18,
              }),
            ]
          }),

          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "청구항",
                bold: true,
                size: 18,
              }),
            ]
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
  
      // # 2
      new TableCell({
        width: {
          size: 20,
          type: WidthType.PERCENTAGE,
        },
        columnSpan: 1,
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "문헌번호",
                size: 18,
              }),
            ]
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
  
      // # 3
      new TableCell({
        width: {
          size: 70,
          type: WidthType.PERCENTAGE,
        },
        columnSpan: 2,
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "본원과 선행기술의 구성대비",
                size: 18,
              }),
            ]
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


  const fourthTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    rows: [
      firstRow,
    ],
  });

  module.exports = fourthTable;