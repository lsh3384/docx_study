const { Paragraph, TextRun, Table, TableRow, TableCell, WidthType, HeightRule, AlignmentType, VerticalAlign } = require("docx");

const firstTable = new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 2000,
              type: WidthType,
            },
            children: [
              new Paragraph({
                text: "□ 특        허 ┐",
                alignment: AlignmentType.RIGHT,
              }),
              new Paragraph({
                text: "□ 실용신안등록 ┘",
                alignment: AlignmentType.RIGHT,
              }),
            ],
          }),
          new TableCell({
            width: {
              size: 5000,
              type: WidthType,
            },
            children: [
              new Paragraph({
                children: [new TextRun({
                  text: "서면형 선행기술조사보고서",
                  bold: true,
                  size: 30,
              })],
                alignment: AlignmentType.CENTER,
              }),
            ],
            verticalAlign: VerticalAlign.CENTER,
          }),
          new TableCell({
            width: {
              size: 2000,
              type: WidthType,
            },
            children: [
              new Paragraph({
                text: "┌ 최초조사 □",
                alignment: AlignmentType.LEFT,
              }),
              new Paragraph({
                text: "└ 재 조 사 □",
                alignment: AlignmentType.LEFT,
              }),
            ],
          }),
        ],
        height: {
          value: 300,
          rule: HeightRule.ATLEAST,
        },
      }),
    ],
  });

  module.exports = firstTable;