const { Paragraph, TextRun, Table, TableRow, TableCell, TableLayoutType, WidthType, HeightRule, AlignmentType, VerticalAlign } = require("docx");

const testTable = new Table({
  width: { size: 100, type: WidthType.PERCENTAGE, },
  layout: TableLayoutType.FIXED,
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              text: "only English",
              alignment: AlignmentType.RIGHT,
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

module.exports = testTable;
