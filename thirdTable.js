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
  right: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
};

const border_right_bottom_double = {
  right: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
  bottom: {
    style: BorderStyle.DOUBLE,
    size: 15,
  },
};

const border_right_top_double = {
  right: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
  top: {
    style: BorderStyle.DOUBLE,
    size: 15,
  },
};


const border_left_double = {
  left: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
};

const border_top_double = {
  top: {
    style: BorderStyle.DOUBLE,
    size: 15,
  },
};

const border_bottom_double = {
  bottom: {
    style: BorderStyle.DOUBLE,
    size: 15,
  },
};

  const firstRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType.DXA,
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
          size: 2800,
          type: WidthType.DXA,
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
          size: 2200,
          type: WidthType.DXA,
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
          type: WidthType.DXA,
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


  const secondRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        borders: border_right_double,
        children: [
          new Paragraph({
            text: "명            칭",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 2800+2200+3000,
          type: WidthType.DXA,
        },
        borders: border_left_double,
        columnSpan: 3,
        children: [
          new Paragraph({
            text: "전기 자동차의 충전 제어 장치",
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
  

  const thirdRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        borders: border_right_double,
        children: [
          new Paragraph({
            text: "우선권 번호",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 2800,
          type: WidthType.DXA,
        },
        borders: border_left_double,
        children: [
          new Paragraph({
            text: "해당없음",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 2200,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            text: "우선권 주장일",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 3000,
          type: WidthType.DXA,
        },
        children: [
          new Paragraph({
            text: "해당없음",
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


  const fourthRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        borders: border_right_bottom_double,
        children: [
          new Paragraph({
            text: "IPC 분류",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 2800,
          type: WidthType.DXA,
        },
        borders: border_bottom_double,
        children: [
          new Paragraph({
            text: "B60L-058/10",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 2200,
          type: WidthType.DXA,
        },
        borders: border_bottom_double,
        children: [
          new Paragraph({
            text: "조사기간",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 3000,
          type: WidthType.DXA,
        },
        borders: border_bottom_double,
        children: [
          new Paragraph({
            text: "2022.02.15 ~ 2022.04.11",
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

  const fifthRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        borders: border_right_top_double,
        rowSpan: 2,
        children: [
          new Paragraph({
            text: "서치분류",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 1400,
          type: WidthType.DXA,
        },
        borders: border_top_double,
        children: [
          new Paragraph({
            text: "CPC",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 2200,
          type: WidthType.DXA,
        },
        borders: border_top_double,
        columnSpan: 2,
        children: [
          new Paragraph({
            text: "B50L-058-10",
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

  const sixthRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1400,
          type: WidthType.DXA,
        },
        borders: border_left_double,
        children: [
          new Paragraph({
            text: "FI",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({
        width: {
          size: 2200,
          type: WidthType.DXA,
        },
        columnSpan: 2,
        children: [
          new Paragraph({
            text: "",
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
    rows: [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow],
  });
  
  module.exports = firstTable;
  