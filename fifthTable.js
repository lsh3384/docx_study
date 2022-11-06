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
        size: 15,
        type: WidthType.PERCENTAGE,
      },
      rowSpan: 3,
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "조 사 자",
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 2
    new TableCell({
      width: {
        size: 15,
        type: WidthType.PERCENTAGE,
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "소속",
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 3
    new TableCell({
      width: {
        size: 30,
        type: WidthType.PERCENTAGE,
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "**** 소속",
              size: 18,
            }),
          ],
        }),
      ],
      verticalAlign: VerticalAlign.CENTER,
    }),

    // # 4
    new TableCell({
        width: {
          size: 10,
          type: WidthType.PERCENTAGE,
        },
        rowSpan: 3,
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "연 락 처",
                size: 18,
              }),
            ],
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),

          // # 5
    new TableCell({
        width: {
          size: 30,
          type: WidthType.PERCENTAGE,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "연 락 처",
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




// -----------------------------------------------------------------------2---------------------------------------------------------------------
const secondRow = new TableRow({
    children: [
      // # 1 merge됨

      // # 2
      new TableCell({
        width: {
          size: 15,
          type: WidthType.PERCENTAGE,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "부서명",
                size: 18,
              }),
            ],
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
  
      // # 3
      new TableCell({
        width: {
          size: 15,
          type: WidthType.PERCENTAGE,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "**** 팀",
                size: 18,
              }),
            ],
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
  
      // # 4 merge됨

      // # 5
      new TableCell({
        width: {
          size: 30,
          type: WidthType.PERCENTAGE,
        },
        rowSpan: 2,
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "1234@email.com",
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

// -----------------------------------------------------------------------3---------------------------------------------------------------------
const thirdRow = new TableRow({
    children: [
      // # 1 merge됨

      // # 2
      new TableCell({
        width: {
          size: 15,
          type: WidthType.PERCENTAGE,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "성    명",
                size: 18,
              }),
            ],
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
  
      // # 3
      new TableCell({
        width: {
          size: 15,
          type: WidthType.PERCENTAGE,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "홍길동",
                size: 18,
              }),
            ],
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
  
      // # 4 merge됨

      // # 5 merge됨
    ],
    height: {
      value: 300,
      rule: HeightRule.ATLEAST,
    },
  });


  
// -----------------------------------------------------------------------4---------------------------------------------------------------------
const fourthRow = new TableRow({
    children: [
      // # 1
      new TableCell({
        width: {
          size: 15,
          type: WidthType.PERCENTAGE,
        },
        rowSpan: 3,
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "조사팀장",
                size: 18,
              }),
            ],
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
  
      // # 2
      new TableCell({
        width: {
          size: 15,
          type: WidthType.PERCENTAGE,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "소    속",
                size: 18,
              }),
            ],
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
  
      // # 3
      new TableCell({
        width: {
          size: 30,
          type: WidthType.PERCENTAGE,
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: "**** 소속",
                size: 18,
              }),
            ],
          }),
        ],
        verticalAlign: VerticalAlign.CENTER,
      }),
  
      // # 4
      new TableCell({
          width: {
            size: 10,
            type: WidthType.PERCENTAGE,
          },
          rowSpan: 3,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "연 락 처",
                  size: 18,
                }),
              ],
            }),
          ],
          verticalAlign: VerticalAlign.CENTER,
        }),
  
            // # 5
      new TableCell({
          width: {
            size: 30,
            type: WidthType.PERCENTAGE,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "010-1234-1234",
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
  
  
  
  
  // -----------------------------------------------------------------------5---------------------------------------------------------------------
  const fifthRow = new TableRow({
      children: [
        // # 1 merge됨
  
        // # 2
        new TableCell({
          width: {
            size: 15,
            type: WidthType.PERCENTAGE,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "부서명",
                  size: 18,
                }),
              ],
            }),
          ],
          verticalAlign: VerticalAlign.CENTER,
        }),
    
        // # 3
        new TableCell({
          width: {
            size: 15,
            type: WidthType.PERCENTAGE,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "**** 팀",
                  size: 18,
                }),
              ],
            }),
          ],
          verticalAlign: VerticalAlign.CENTER,
        }),
    
        // # 4 merge됨
  
        // # 5
        new TableCell({
          width: {
            size: 30,
            type: WidthType.PERCENTAGE,
          },
          rowSpan: 2,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "1234@email.com",
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
  
  // -----------------------------------------------------------------------6---------------------------------------------------------------------
  const sixthRow = new TableRow({
      children: [
        // # 1 merge됨
  
        // # 2
        new TableCell({
          width: {
            size: 15,
            type: WidthType.PERCENTAGE,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "성    명",
                  size: 18,
                }),
              ],
            }),
          ],
          verticalAlign: VerticalAlign.CENTER,
        }),
    
        // # 3
        new TableCell({
          width: {
            size: 15,
            type: WidthType.PERCENTAGE,
          },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: "홍길동",
                  size: 18,
                }),
              ],
            }),
          ],
          verticalAlign: VerticalAlign.CENTER,
        }),
    
        // # 4 merge됨
  
        // # 5 merge됨
      ],
      height: {
        value: 300,
        rule: HeightRule.ATLEAST,
      },
    });

const fifthTable = new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  layout: TableLayoutType.FIXED,
  rows: [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow],
});

module.exports = fifthTable;
