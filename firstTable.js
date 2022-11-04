const {
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  TableLayoutType,
  HeightRule,
  AlignmentType,
  VerticalAlign,
  BorderStyle,
} = require("docx");

const firstTable = new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  layout: TableLayoutType.FIXED,
  rows: [
    
    new TableRow({
      children: [
        
        new TableCell({
          width: {
            size: 2000,
            type: WidthType,
          },
          verticalAlign: VerticalAlign.CENTER,
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
              text: "특           허 ",
              alignment: AlignmentType.RIGHT,
            }),
            
            new Paragraph({
              text: "최 초 조 사",
              alignment: AlignmentType.RIGHT,
            }),

          ],
        }),
        
        new TableCell({
          width: {
            size: 5000,
            type: WidthType,
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
              children: [
                
                new TextRun({
                  text: "선행기술조사보고서",
                  bold: true,
                  size: 44,
                }),

              ],
              alignment: AlignmentType.CENTER,
            }),
            
            new Paragraph({
              children: [
                
                new TextRun({
                  text: "(우선심사용)",
                  bold: true,
                  size: 44,
                }),

              ],
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
          verticalAlign: VerticalAlign.CENTER,
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
          children: [],
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
