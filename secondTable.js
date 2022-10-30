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


const borderNone = {
  top: {
    style: BorderStyle.NONE,
    size: 1,
  },
  bottom: {
    style: BorderStyle.NONE,
    size: 1,
  },
  left: {
    style: BorderStyle.NONE,
    size: 1,
  },
  right: {
    style: BorderStyle.NONE,
    size: 1,
  },
}

const firstRow = new TableRow({
  children: [
    new TableCell({
      width: {
        size: 4000,
        type: WidthType,
      },
      borders: borderNone,
      children: [
        new Paragraph({
          text: "수신 : 특허청장",
          alignment: AlignmentType.LEFT,
        }),
      ],
    }),
    new TableCell({
      width: {
        size: 1000,
        type: WidthType,
      },
      borders: borderNone,
      children: [
        new Paragraph({
          text: "",
          alignment: AlignmentType.LEFT,
        }),
      ],
    }),
    new TableCell({
      width: {
        size: 4000,
        type: WidthType,
      },
      borders: borderNone,
      children: [
        new Paragraph({
          text: "조사기술분야 : 전기심사과",
          alignment: AlignmentType.LEFT,
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
          size: 4000,
          type: WidthType,
        },
        borders: borderNone,
        children: [
          new Paragraph({
            text: "참조 : 전기통신기술심사국 차상도 심사관",
            alignment: AlignmentType.LEFT,
          }),
        ],
      }),
      new TableCell({
        width: {
          size: 1000,
          type: WidthType,
        },
        borders: borderNone,
        children: [
          new Paragraph({
            text: "",
            alignment: AlignmentType.LEFT,
          }),
        ],
      }),
      new TableCell({
        width: {
          size: 4000,
          type: WidthType,
        },
        borders: borderNone,
        children: [
          new Paragraph({
            text: "조사의뢰일 : 2022. 02. 15 .",
            alignment: AlignmentType.LEFT,
          }),
        ],
      }),
    ],
    height: {
      value: 300,
      rule: HeightRule.ATLEAST,
    },
  });

  const thirdRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 4000,
          type: WidthType,
        },
        borders: borderNone,
        children: [
          new Paragraph({
            text: "발신 :  ㈜티디아 대표",
            alignment: AlignmentType.LEFT,
          }),
        ],
      }),
      new TableCell({
        width: {
          size: 1000,
          type: WidthType,
        },
        borders: borderNone,
        children: [
          new Paragraph({
            text: "",
            alignment: AlignmentType.LEFT,
          }),
        ],
      }),
      new TableCell({
        width: {
          size: 4000,
          type: WidthType,
        },
        borders: borderNone,
        children: [
          new Paragraph({
            text: "조사보고일 : 2022. 04. 11.",
            alignment: AlignmentType.LEFT,
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
  rows: [firstRow, secondRow, thirdRow],
});

module.exports = firstTable;
