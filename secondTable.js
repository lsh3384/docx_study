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
  TableAnchorType,
  RelativeHorizontalPosition,
  OverlapType,
  convertInchesToTwip
} = require("docx");

const firstRow = new TableRow({
  children: [
    new TableCell({
      width: {
        size: 300,
        type: WidthType.DXA,
      },
      borders: {
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
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text:  "수    신 : 특허청장",
              size: 18,
            }),
          ]
        }),
      ],
    }),

    new TableCell({
      width: {
        size: 8,
        type: WidthType.PERCENTAGE,
      },
      borders: {
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
      },
      children: [
        new Paragraph({
          text: "",
          alignment: AlignmentType.LEFT,
        }),
      ],
    }),
    new TableCell({
      width: {
        size: 300,
        type: WidthType.DXA,
      },
      borders: {
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
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: "조사기술분야 : 전기심사과",
              size: 18,
            }),
          ]
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
        size: 300,
        type: WidthType.DXA,
      },
      borders: {
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
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: "신청인 : 전기통신기술심사국 차상도 심사관",
              size: 18,
            }),
          ]
        }),
      ],
    }),
    new TableCell({
      width: {
        size: 8,
        type: WidthType.PERCENTAGE,
      },
      borders: {
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
      },
      children: [
        new Paragraph({
          text: "",
          alignment: AlignmentType.LEFT,
        }),
      ],
    }),
    new TableCell({
      width: {
        size: 300,
        type: WidthType.DXA,
      },
      borders: {
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
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: "조사의뢰일 : 2022. 02. 15 .",
              size: 18,
            }),
          ]
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
        size: 300,
        type: WidthType.DXA,
      },
      borders: {
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
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: "발    신 :  ㈜티디아 대표",
              size: 18,
            }),
          ]
        }),
      ],
    }),
    new TableCell({
      width: {
        size: 8,
        type: WidthType.PERCENTAGE,
      },
      borders: {
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
      },
      children: [
        new Paragraph({
          text: "",
          alignment: AlignmentType.LEFT,
        }),
      ],
    }),
    new TableCell({
      width: {
        size: 300,
        type: WidthType.DXA,
      },
      borders: {
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
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: "조사보고일 : 2022. 04. 11.",
              size: 18,
            }),
          ]
        }),
      ],
    }),
  ],
  height: {
    value: 300,
    rule: HeightRule.ATLEAST,
  },
});

const secondTable = new Table({
  indent: {
    size: 400,
    type: WidthType.DXA,
  },
  width: { size: 90, type: WidthType.PERCENTAGE },
  layout: TableLayoutType.FIXED,
  rows: [firstRow, secondRow, thirdRow],
});

module.exports = secondTable;
