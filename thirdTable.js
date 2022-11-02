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
  
    
const double_normal_right = {
  right: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
};

const double_normal_right_thick_bottom = {
  right: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
  bottom: {
    style: BorderStyle.DOUBLE,
    size: 15,
  },
};

const double_normal_right_thick_top = {
  right: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
  top: {
    style: BorderStyle.DOUBLE,
    size: 15,
  },
};


const double_normal_left = {
  left: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
};

const double_normal_left_thick_bottom = {
  left: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
  bottom: {
    style: BorderStyle.DOUBLE,
    size: 10,
  },
};

const double_thick_top = {
  top: {
    style: BorderStyle.DOUBLE,
    size: 15,
  },
};

const double_thick_bottom = {
  bottom: {
    style: BorderStyle.DOUBLE,
    size: 15,
  },
};

// ----------------------------------------------------------------------------------------------1--------------------------------------------------------------

  const firstRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        borders: double_normal_right,
        columnSpan: 2,
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
        borders: double_normal_left,
        columnSpan: 2,
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
        columnSpan: 2,
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
        columnSpan: 5,
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

// ----------------------------------------------------------------------------------------------2--------------------------------------------------------------


  const secondRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        borders: double_normal_right,
        columnSpan: 2,
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
        borders: double_normal_left,
        columnSpan: 9,
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
  

// ----------------------------------------------------------------------------------------------3--------------------------------------------------------------


  const thirdRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        borders: double_normal_right,
        columnSpan: 2,
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
        borders: double_normal_left,
        columnSpan: 2,
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
        columnSpan: 2,
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
        columnSpan: 5,
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

// ----------------------------------------------------------------------------------------------4--------------------------------------------------------------
  const fourthRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        borders: double_normal_right_thick_bottom,
        columnSpan: 2,
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
        borders: double_thick_bottom,
        columnSpan: 2,
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
        borders: double_thick_bottom,
        columnSpan: 2,
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
        borders: double_thick_bottom,
        columnSpan: 5,
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


// ---------------------------------------------------------------------------------------5---------------------------------------------------------------------
  const fifthRow = new TableRow({
    children: [
      new TableCell({ //------------------------------------------ 1
        width: {
          size: 1500,
          type: WidthType.DXA,
        },
        borders: {
          right: {
            style: BorderStyle.DOUBLE,
            size: 10,
          },
          top: {
            style: BorderStyle.DOUBLE,
            size: 15,
          },
          bottom: {
            style: BorderStyle.DOUBLE,
            size: 10,
          }
        },
        rowSpan: 2,
        columnSpan: 2,
        children: [
          new Paragraph({
            text: "서치분류",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({ //------------------------------------------ 2
        width: {
          size: 1400,
          type: WidthType.DXA,
        },
        borders: double_thick_top,
        columnSpan: 1,
        children: [
          new Paragraph({
            text: "CPC",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({ //------------------------------------------ 3
        width: {
          size: 2200,
          type: WidthType.DXA,
        },
        borders: double_thick_top,
        columnSpan: 8,
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


  // ---------------------------------------------------------------------------------------6---------------------------------------------------------------------

  const sixthRow = new TableRow({
    children: [
                      //------------------------------------------ 1 윗 셀과 병합
      new TableCell({ //------------------------------------------ 2
        width: {
          size: 1400,
          type: WidthType.DXA,
        },
        borders:  {
          bottom: {
            style: BorderStyle.DOUBLE,
            size: 10,
          }
        },
        columnSpan: 1,
        children: [
          new Paragraph({
            text: "FI",
            alignment: AlignmentType.CENTER,
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
      new TableCell({ //------------------------------------------ 3
        width: {
          size: 2200,
          type: WidthType.DXA,
        },
        borders:  {
          bottom: {
            style: BorderStyle.DOUBLE,
            size: 10,
          }
        },
        columnSpan: 8,
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


// ---------------------------------------------------------------------------------------7---------------------------------------------------------------------

  const seventhRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 1400,
          type: WidthType.DXA,
        },
        rowSpan: 7,
        columnSpan: 2,
        children: [
          new Paragraph({
            text: "전산검색",
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
        borders: double_normal_left,
        columnSpan: 1,
        children: [
          new Paragraph({
            text: "Key word",
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
        columnSpan: 8,
        children: [
          new Paragraph({
            text: "(전기자동차 ; ",
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
    rows: [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow, seventhRow],
  });
  
  module.exports = firstTable;
  