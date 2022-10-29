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
} = require("docx");

const firstRow = new TableRow({
  children: [
    new TableCell({
      width: {
        size: 1000,
        type: WidthType,
      },
      children: [
        new Paragraph({
          text: "",
          alignment: AlignmentType.RIGHT,
        }),
      ],
    }),
    new TableCell({
      width: {
        size: 1000,
        type: WidthType,
      },
      children: [
        new Paragraph({
          text: "",
          alignment: AlignmentType.RIGHT,
        }),
      ],
    }),
    new TableCell({
      width: {
        size: 1000,
        type: WidthType,
      },
      children: [
        new Paragraph({
          text: "",
          alignment: AlignmentType.RIGHT,
        }),
      ],
    }),
  ],
  height: {
    value: 300,
    rule: HeightRule.ATLEAST,
  },
});


const secondRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1000,
          type: WidthType,
        },
        children: [
          new Paragraph({
            text: "",
            alignment: AlignmentType.RIGHT,
          }),
        ],
      }),
      new TableCell({
        width: {
          size: 1000,
          type: WidthType,
        },
        children: [
          new Paragraph({
            text: "",
            alignment: AlignmentType.RIGHT,
          }),
        ],
      }),
      new TableCell({
        width: {
          size: 1000,
          type: WidthType,
        },
        children: [
          new Paragraph({
            text: "",
            alignment: AlignmentType.RIGHT,
          }),
        ],
      }),
    ],
    height: {
      value: 300,
      rule: HeightRule.ATLEAST,
    },
  });

const firstTable = new Table({
  rows: [firstRow, secondRow],
});

module.exports = firstTable;
