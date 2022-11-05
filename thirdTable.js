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

// ----------------------------------------------------------------------------------------------1--------------------------------------------------------------
const col_width = {
  
  one: 2, // 1, 2
  two: 9,
  three: 2, //3

  // three: 15, // 4, 5
  four: 8,
  five: 7,

  
  six: 15,
  // four: 15, // 6

  // five: 15, // 7
  seven: 15,
  // six: 6, // 8
  eight: 6,
  // seven: 9, //9
  nine: 9,
  
  // eight: 6, // 10
  ten: 6,

  // nine: 8.5, // 11, 12
  eleven: 2,
  twelve: 6.5,

  // ten: 2, //13
  thirteen: 2,

  // eleven: 10.5, // 14
  fourteen: 10.5
}


const firstRow = new TableRow({
  children: [

    // # 1-3
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        right: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
        top: {
          style: BorderStyle.DOUBLE,
          size: 10,
        }
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "출 원 번 호",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 4-6
    new TableCell({
      width: {
        size: col_width.four + col_width.five + col_width.six,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        left: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
        top: {
          style: BorderStyle.DOUBLE,
          size: 10,
        }
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "1020160167636",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 7-8
    new TableCell({
      width: {
        size: col_width.seven + col_width.eight,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        top: {
          style: BorderStyle.DOUBLE,
          size: 10,
        }
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "출원일(심사청구일)",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 9-14
    new TableCell({
      width: {
        size: col_width.nine + col_width.ten + col_width.eleven + col_width.twelve + col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        top: {
          style: BorderStyle.DOUBLE,
          size: 10,
        }
      },
      columnSpan: 6,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "2016.12.09.(2020.11.09)",
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

// ----------------------------------------------------------------------------------------------2--------------------------------------------------------------

const secondRow = new TableRow({
  children: [
    // # 1-3
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        right: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "명            칭",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 4-14
    new TableCell({
      width: {
        size:
          col_width.one +
          col_width.two +
          col_width.three +
          col_width.four +
          col_width.five +
          col_width.six +
          col_width.seven +
          col_width.eight +
          col_width.nine +
          col_width.ten +
          col_width.eleven +
          col_width.twelve +
          col_width.thirteen +
          col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        left: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 11,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "전기 자동차의 충전 제어 장치",
              size: 18,
            }),
          ],
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
    
    // # 1-3
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        right: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "우선권 번호",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 4-6
    new TableCell({
      width: {
        size: col_width.four + col_width.five + col_width.six,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        left: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "해당없음",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 7-8
    new TableCell({
      width: {
        size: col_width.seven + col_width.eight,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "우선권 주장일",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 9-14
    new TableCell({
      width: {
        size: col_width.nine + col_width.ten + col_width.eleven + col_width.twelve + col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 6,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "해당없음",
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

// ----------------------------------------------------------------------------------------------4--------------------------------------------------------------
const fourthRow = new TableRow({
  children: [
    
    // # 1-3
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        right: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
        bottom: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "IPC 분류",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // 4-6
    new TableCell({
      width: {
        size: col_width.four + col_width.five + col_width.six,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        bottom: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "B60L-058/10",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 7-8
    new TableCell({
      width: {
        size: col_width.seven + col_width.eight,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        bottom: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "조사기간",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 9-14
    new TableCell({
      width: {
        size: col_width.nine + col_width.ten + col_width.eleven + col_width.twelve + col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        bottom: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 6,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "2022.02.15 ~ 2022.04.11",
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


// ---------------------------------------------------------------------------------------5---------------------------------------------------------------------
const fifthRow = new TableRow({
  children: [
    
    // # 1-3
    new TableCell({
      //------------------------------------------ 1
      width: {
        size: col_width.one + col_width.two + col_width.three,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        right: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
        // top: {
        //   style: BorderStyle.DOUBLE,
        //   size: 15,
        // },
        bottom: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      rowSpan: 2,
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "서치분류",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 4-5
    new TableCell({
      //------------------------------------------ 2
      width: {
        size: col_width.four + col_width.five,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        top: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "CPC",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 6-14
    new TableCell({
      //------------------------------------------ 3
      width: {
        size: col_width.six + col_width.seven + col_width.seven + col_width.eight + col_width.nine + col_width.ten + col_width.eleven + col_width.twelve + col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        top: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 9,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "B50L-058-10",
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


// ---------------------------------------------------------------------------------------6---------------------------------------------------------------------
const sixthRow = new TableRow({
  children: [
    //------------------------------------------ 1 윗 셀과 병합
    
    // # 4-5
    new TableCell({
      //------------------------------------------ 2
      width: {
        size: col_width.four + col_width.five,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        bottom: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "FI",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 6-14
    new TableCell({
      //------------------------------------------ 3
      width: {
        size: col_width.six + col_width.seven + col_width.seven + col_width.eight + col_width.nine + col_width.ten + col_width.eleven + col_width.twelve + col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        bottom: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 9,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
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

// ---------------------------------------------------------------------------------------7---------------------------------------------------------------------

const seventhRow = new TableRow({
  children: [

    // # 1-3
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three,
        type: WidthType.PERCENTAGE,
      },
      rowSpan: 7,
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "전산검색",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 4-5
    new TableCell({
      width: {
        size: col_width.four + col_width.five,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        left: {
          style: BorderStyle.DOUBLE,
          size: 10,
        },
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "Key word",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 6-14
    new TableCell({
      width: {
        size: col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten + col_width.eleven + col_width.twelve + col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 9,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "(전기자동차 ; ",
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



// ---------------------------------------------------------------------------------------8---------------------------------------------------------------------

const eighthRow = new TableRow({
  children: [
    
    // # 4-5
    new TableCell({
      width: {
        size: col_width.four + col_width.five,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        left: {
          style: BorderStyle.DOUBLE,
          size: 10,
        }
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "DB종류(국가)",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),
    
    // # 6-10
    new TableCell({
      width: {
        size: col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 5,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "검색식",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 11-13
    new TableCell({
      width: {
        size: col_width.eleven + col_width.twelve + col_width.thirteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "검색건수",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 14
    new TableCell({
      width: {
        size: col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 1,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "인용문헌",
              bold: true,
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


// ---------------------------------------------------------------------------------------9---------------------------------------------------------------------

const ninthRow = new TableRow({
  children: [

    // # 4-5
    new TableCell({
      width: {
        size: col_width.four + col_width.five,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        left: {
          style: BorderStyle.DOUBLE,
          size: 10,
        }
      },
      rowSpan: 3,
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "WIPSON(한국)",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),
    
    // # 6-10
    new TableCell({
      width: {
        size: col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 5,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "(H04H-020* H04H-0020*).",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 11-13
    new TableCell({
      width: {
        size: col_width.eleven + col_width.twelve + col_width.thirteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "1111",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 14
    new TableCell({
      width: {
        size: col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 1,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "①",
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

// ---------------------------------------------------------------------------------------10---------------------------------------------------------------------

const tenthRow = new TableRow({
  children: [
    
    // # 6-10
    new TableCell({
      width: {
        size: col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 5,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "(H04H-020*content contentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 11-13
    new TableCell({
      width: {
        size: col_width.eleven + col_width.twelve + col_width.thirteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "1111",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 14
    new TableCell({
      width: {
        size: col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 1,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "①",
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


// ---------------------------------------------------------------------------------------11---------------------------------------------------------------------

const eleventhRow = new TableRow({
  children: [
    
    // # 6-10
    new TableCell({
      width: {
        size: col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 5,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "(H04H-020*content contentcontentcontentcontentcontentcontentcontentcontentcontentcontent",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 11-13
    new TableCell({
      width: {
        size: col_width.eleven + col_width.twelve + col_width.thirteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "1111",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 14
    new TableCell({
      width: {
        size: col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 1,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "①",
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


// ---------------------------------------------------------------------------------------12---------------------------------------------------------------------

const twelvethRow = new TableRow({
  children: [

    // # 4-5
    new TableCell({
      width: {
        size: col_width.four + col_width.five,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        left: {
          style: BorderStyle.DOUBLE,
          size: 10,
        }
      },
      rowSpan: 2,
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "비특허문헌",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),
    
    // # 6-10
    new TableCell({
      width: {
        size: col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 5,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 11-13
    new TableCell({
      width: {
        size: col_width.eleven + col_width.twelve + col_width.thirteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 14
    new TableCell({
      width: {
        size: col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 1,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
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



// ---------------------------------------------------------------------------------------13---------------------------------------------------------------------

const thirteenthRow = new TableRow({
  children: [

    // # 6-10
    new TableCell({
      width: {
        size: col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 5,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 11-13
    new TableCell({
      width: {
        size: col_width.eleven + col_width.twelve + col_width.thirteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 14
    new TableCell({
      width: {
        size: col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 1,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
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



// ---------------------------------------------------------------------------------------14---------------------------------------------------------------------

const fourteenthRow = new TableRow({
  children: [
    
    // # 1-14
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three + col_width.four + col_width.five + 
        col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten +
        col_width.eleven + col_width.twelve + col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        top: {
          style: BorderStyle.DOUBLE,
          size: 10,
        }
      },
      columnSpan: 14,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "타국심사이력",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),
  ]
});



// ---------------------------------------------------------------------------------------15---------------------------------------------------------------------

const fifteenthRow = new TableRow({
  children: [

    // # 1-3
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "구분",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 4-5
    new TableCell({
      width: {
        size: col_width.four + col_width.five,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "문헌번호",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 6-7
    new TableCell({
      width: {
        size: col_width.six + col_width.seven,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "선행기술",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 8-9
    new TableCell({
      width: {
        size: col_width.eight + col_width.nine,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "관련도",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 10-12
    new TableCell({
      width: {
        size: col_width.ten + col_width.eleven + col_width.twelve,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "청구항",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 13-14
    new TableCell({
      width: {
        size: col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "비고",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

  ],
});



// ---------------------------------------------------------------------------------------16---------------------------------------------------------------------

const sixteenthRow = new TableRow({
  children: [

    // # 1-3
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 4-5
    new TableCell({
      width: {
        size: col_width.four + col_width.five,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 6-7
    new TableCell({
      width: {
        size: col_width.six + col_width.seven,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 8-9
    new TableCell({
      width: {
        size: col_width.eight + col_width.nine,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 10-12
    new TableCell({
      width: {
        size: col_width.ten + col_width.eleven + col_width.twelve,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 13-14
    new TableCell({
      width: {
        size: col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

  ],
});



// ---------------------------------------------------------------------------------------17---------------------------------------------------------------------

const seventeenthRow = new TableRow({
  children: [

    // # 1-3
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "본원의 요약",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 4-5
    new TableCell({
      width: {
        size: col_width.four + col_width.five + col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten + col_width.eleven + col_width.twelve + col_width.thirteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 11,
      children: [
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: `[발명의 해결하고자 하는 과제 및 목적]`,
              size: 18,
            }),
          ],
        }),

        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: `시스템을 제공`,
              size: 18,
            }),
          ],
        }),

        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: `[과제의 해결 수단 및 핵심 구성]`,
              size: 18,
            }),
          ],
        }),

        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: `특징으로 함`,
              size: 18,
            }),
          ],
        }),

      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

  ],
});



// ---------------------------------------------------------------------------------------18---------------------------------------------------------------------
const eighteenthRow = new TableRow({
  children: [
    
    // # 1-14
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three + col_width.four + col_width.five + 
        col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten +
        col_width.eleven + col_width.twelve + col_width.thirteen + col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        top: {
          style: BorderStyle.DOUBLE,
          size: 10,
        }
      },
      columnSpan: 14,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "관련 선행기술 목록",
              bold: true,
              size: 18,
            }),
          ]
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),
  ]
});



// ---------------------------------------------------------------------------------------19---------------------------------------------------------------------
const ninteenthRow = new TableRow({
  children: [
    // # 1-4
    new TableCell({
      width: {
        size: col_width.one + col_width.two + col_width.three + col_width.four,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 4,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "문헌번호",
              bold: true,
              size: 18,
            }),
          ],
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "(공개일자)",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 5-11
    new TableCell({
      width: {
        size: col_width.five + col_width.six + col_width.seven + col_width.eight + col_width.nine + col_width.ten + col_width.eleven,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 7,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "발명의 명칭",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 12-13
    new TableCell({
      width: {
        size: col_width.twelve + col_width.thirteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "관련",
              bold: true,
              size: 18,
            }),
          ],
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "청구항",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),


    // # 14
    new TableCell({
      width: {
        size: col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 1,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "참고",
              bold: true,
              size: 18,
            }),
          ],
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "청구항",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

  ],
});



// ---------------------------------------------------------------------------------------20---------------------------------------------------------------------
const twentiethRow = new TableRow({
  children: [
    // # 1
    new TableCell({
      width: {
        size: col_width.one,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 1,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "1.",
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 2-4
    new TableCell({
      width: {
        size: col_width.two + col_width.three + col_width.four,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "KR12345678 B1",
              size: 18,
            }),
          ],
        }),

        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "(2022.01.01)",
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 5-11
    new TableCell({
      width: {
        size:
          col_width.five +
          col_width.six +
          col_width.seven +
          col_width.eight +
          col_width.nine +
          col_width.ten +
          col_width.eleven,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 7,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "~~ 장치",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 12-13
    new TableCell({
      width: {
        size: col_width.twelve + col_width.thirteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 2,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "-",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 14
    new TableCell({
      width: {
        size: col_width.fourteen,
        type: WidthType.PERCENTAGE,
      },
      columnSpan: 1,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "-",
              bold: true,
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),
  ],
});



const thirdTable = new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  layout: TableLayoutType.FIXED,
  rows: [
    firstRow,
    secondRow,
    thirdRow,
    fourthRow,
    fifthRow,
    sixthRow,
    seventhRow,
    eighthRow,
    ninthRow,
    tenthRow,
    eleventhRow,
    twelvethRow,
    thirteenthRow,
    fourteenthRow,
    fifteenthRow,
    sixteenthRow,
    seventeenthRow,
    eighteenthRow,
    ninteenthRow,
    twentiethRow,
  ],
});

module.exports = thirdTable;
