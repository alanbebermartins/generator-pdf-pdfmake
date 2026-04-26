// =========================
// MOCK JSON (substitua pelo seu)
// =========================
const data_json = {
  reportData: [
    {
      public_groups: [
        { groupName: "Grupo 1",  peopleGroup: { totalPeople: 120, answered: 95,  notAnswered: 25,  avarageGroup: 0.82 } },
        { groupName: "Grupo 2",  peopleGroup: { totalPeople: 80,  answered: 60,  notAnswered: 20,  avarageGroup: 0.65 } },
        { groupName: "Grupo 3",  peopleGroup: { totalPeople: 150, answered: 120, notAnswered: 30,  avarageGroup: 0.78 } },
        { groupName: "Grupo 4",  peopleGroup: { totalPeople: 90,  answered: 70,  notAnswered: 20,  avarageGroup: 0.72 } },
        { groupName: "Grupo 5",  peopleGroup: { totalPeople: 60,  answered: 40,  notAnswered: 20,  avarageGroup: 0.55 } },
        { groupName: "Grupo 6",  peopleGroup: { totalPeople: 200, answered: 150, notAnswered: 50,  avarageGroup: 0.81 } },
        { groupName: "Grupo 7",  peopleGroup: { totalPeople: 110, answered: 85,  notAnswered: 25,  avarageGroup: 0.77 } },
        { groupName: "Grupo 8",  peopleGroup: { totalPeople: 95,  answered: 60,  notAnswered: 35,  avarageGroup: 0.58 } },
        { groupName: "Grupo 9",  peopleGroup: { totalPeople: 130, answered: 100, notAnswered: 30,  avarageGroup: 0.79 } },
        { groupName: "Grupo 10", peopleGroup: { totalPeople: 75,  answered: 50,  notAnswered: 25,  avarageGroup: 0.60 } },

        { groupName: "Grupo 11", peopleGroup: { totalPeople: 140, answered: 110, notAnswered: 30,  avarageGroup: 0.83 } },
        { groupName: "Grupo 12", peopleGroup: { totalPeople: 65,  answered: 45,  notAnswered: 20,  avarageGroup: 0.57 } },
        { groupName: "Grupo 13", peopleGroup: { totalPeople: 170, answered: 140, notAnswered: 30,  avarageGroup: 0.86 } },
        { groupName: "Grupo 14", peopleGroup: { totalPeople: 85,  answered: 60,  notAnswered: 25,  avarageGroup: 0.62 } },
        { groupName: "Grupo 15", peopleGroup: { totalPeople: 55,  answered: 30,  notAnswered: 25,  avarageGroup: 0.48 } },
        { groupName: "Grupo 16", peopleGroup: { totalPeople: 210, answered: 160, notAnswered: 50,  avarageGroup: 0.84 } },
        { groupName: "Grupo 17", peopleGroup: { totalPeople: 100, answered: 75,  notAnswered: 25,  avarageGroup: 0.70 } },
        { groupName: "Grupo 18", peopleGroup: { totalPeople: 92,  answered: 68,  notAnswered: 24,  avarageGroup: 0.66 } },
        { groupName: "Grupo 19", peopleGroup: { totalPeople: 125, answered: 95,  notAnswered: 30,  avarageGroup: 0.74 } },
        { groupName: "Grupo 20", peopleGroup: { totalPeople: 78,  answered: 55,  notAnswered: 23,  avarageGroup: 0.61 } },

        { groupName: "Grupo 21", peopleGroup: { totalPeople: 135, answered: 105, notAnswered: 30,  avarageGroup: 0.80 } },
        { groupName: "Grupo 22", peopleGroup: { totalPeople: 70,  answered: 50,  notAnswered: 20,  avarageGroup: 0.59 } },
        { groupName: "Grupo 23", peopleGroup: { totalPeople: 160, answered: 130, notAnswered: 30,  avarageGroup: 0.85 } },
        { groupName: "Grupo 24", peopleGroup: { totalPeople: 88,  answered: 62,  notAnswered: 26,  avarageGroup: 0.63 } },
        { groupName: "Grupo 25", peopleGroup: { totalPeople: 58,  answered: 35,  notAnswered: 23,  avarageGroup: 0.50 } },
        { groupName: "Grupo 26", peopleGroup: { totalPeople: 220, answered: 170, notAnswered: 50,  avarageGroup: 0.87 } },
        { groupName: "Grupo 27", peopleGroup: { totalPeople: 115, answered: 90,  notAnswered: 25,  avarageGroup: 0.76 } },
        { groupName: "Grupo 28", peopleGroup: { totalPeople: 97,  answered: 65,  notAnswered: 32,  avarageGroup: 0.67 } },
        { groupName: "Grupo 29", peopleGroup: { totalPeople: 128, answered: 98,  notAnswered: 30,  avarageGroup: 0.73 } },
        { groupName: "Grupo 30", peopleGroup: { totalPeople: 82,  answered: 58,  notAnswered: 24,  avarageGroup: 0.64 } },

        { groupName: "Grupo 31", peopleGroup: { totalPeople: 145, answered: 115, notAnswered: 30,  avarageGroup: 0.82 } },
        { groupName: "Grupo 32", peopleGroup: { totalPeople: 68,  answered: 48,  notAnswered: 20,  avarageGroup: 0.56 } },
        { groupName: "Grupo 33", peopleGroup: { totalPeople: 175, answered: 145, notAnswered: 30,  avarageGroup: 0.88 } },
        { groupName: "Grupo 34", peopleGroup: { totalPeople: 90,  answered: 65,  notAnswered: 25,  avarageGroup: 0.68 } },
        { groupName: "Grupo 35", peopleGroup: { totalPeople: 62,  answered: 38,  notAnswered: 24,  avarageGroup: 0.52 } },
        { groupName: "Grupo 36", peopleGroup: { totalPeople: 205, answered: 155, notAnswered: 50,  avarageGroup: 0.83 } },
        { groupName: "Grupo 37", peopleGroup: { totalPeople: 108, answered: 82,  notAnswered: 26,  avarageGroup: 0.71 } },
        { groupName: "Grupo 38", peopleGroup: { totalPeople: 94,  answered: 66,  notAnswered: 28,  avarageGroup: 0.69 } },
        { groupName: "Grupo 39", peopleGroup: { totalPeople: 132, answered: 102, notAnswered: 30,  avarageGroup: 0.75 } },
        { groupName: "Grupo 40", peopleGroup: { totalPeople: 85,  answered: 60,  notAnswered: 25,  avarageGroup: 0.66 } }
      ]
    }
  ]
};

// =========================
// UTILIDADES
// =========================

function calcGlobalAdherence(json) {
  let total = 0;
  let answered = 0;

  json.reportData.forEach(r => {
    r.public_groups.forEach(g => {
      total += g.peopleGroup.totalPeople;
      answered += g.peopleGroup.answered;
    });
  });

  return ((answered / total) * 100).toFixed(2) + "%";
}

function calcDiagnostic(json) {
  let sum = 0;
  let count = 0;

  json.reportData.forEach(r => {
    r.public_groups.forEach(g => {
      sum += g.peopleGroup.avarageGroup;
      count++;
    });
  });

  const result = (sum / count) * 100;
  return {
    value: result,
    label: result.toFixed(1) + "%"
  };
}

// =========================
// TABELA
// =========================
function buildTable(json) {
  const body = [
    ["Grupo", "Total", "Respondidas", "Não Respondidas", "Aderência (%)"]
  ];

  json.reportData.forEach(r => {
    r.public_groups.forEach(g => {
      const total = g.peopleGroup.totalPeople;
      const answered = g.peopleGroup.answered;

      body.push([
        g.groupName,
        total,
        answered,
        g.peopleGroup.notAnswered,
        ((answered / total) * 100).toFixed(2) + "%"
      ]);
    });
  });

  return {
    table: {
      headerRows: 1,
      widths: ["*", 60, 80, 100, 100],
      body
    },
    layout: {
      fillColor: (rowIndex) => rowIndex === 0 ? "#596CFF" : null,
      hLineColor: () => "#596CFF",
      vLineColor: () => "#596CFF"
    }
  };
}

// =========================
// BADGE (RoundedBox)
// =========================
function badge(text, options = {}) {
  return {
    table: {
      widths: ["*"],
      body: [[
        {
          text,
          margin: [10, 5],
          alignment: options.align || "left",
          color: options.textColor || "white",
          fillColor: options.bg || "#596cff"
        }
      ]]
    },
    layout: {
      hLineWidth: () => 0,
      vLineWidth: () => 0
    }
  };
}

// =========================
// SCORE CARD
// =========================
function scoreCard(value, label) {

  let bg = "#2f6e2d";
  let text = "Excelente";

  if (value > 80) {
    bg = "#ee3650";
    text = "Muito Ruim";
  } else if (value > 60) {
    bg = "#f4b184";
    text = "Ruim";
  } else if (value > 40) {
    bg = "#ffd656";
    text = "Razoável";
  } else if (value > 20) {
    bg = "#c3dfa5";
    text = "Bom";
  }

  return {
    table: {
      widths: ["*"],
      body: [[
        {
          stack: [
            { text: label, fontSize: 16, bold: true, alignment: "center", color: bg },
            { text: text, alignment: "center", margin: [0, 10, 0, 0], color: "white" }
          ],
          fillColor: bg,
          margin: [0, 20],
          alignment: "center"
        }
      ]]
    },
    layout: "noBorders"
  };
}

// =========================
// PIE CHART (SIMULADO)
// =========================
function fakePieChart(data) {
  // pdfmake não tem pie nativo → simulação simples
  return {
    text: "Gráfico (não nativo no pdfmake)",
    italics: true,
    margin: [0, 20]
  };
}

// =========================
// BUILD DOCUMENT
// =========================

export function generateFilePdf() {

  const table = buildTable(data_json);
  const adherence = calcGlobalAdherence(data_json);
  const diagnostic = calcDiagnostic(data_json);

  const docDefinition = {

    pageSize: "A4",

    pageMargins: [40, 80, 40, 60],

    header: function () {
      return {
        text: "Diagnóstico de Riscos Psicossociais",
        alignment: "center",
        margin: [0, 20],
        bold: true
      };
    },

    footer: function (currentPage, pageCount) {
      return {
        text: `Página ${currentPage}`,
        alignment: "right",
        margin: [0, 20, 40, 0]
      };
    },

    background: function () {
      return {
        canvas: [
          {
            type: "rect",
            x: 0,
            y: 0,
            w: 595,
            h: 842,
            color: "#f5f7fa"
          }
        ]
      };
    },

    content: [

      { text: "Grupo Agulhas Negras", fontSize: 10 },

      badge("Respostas entre 11/03/2026 e 19/03/2026"),

      { text: "", margin: [0, 20] },

      badge("Aderência de participação", { bg: "#e9ecef", textColor: "#596CFF" }),

      table,

      {
        text: `Média geral: ${adherence}`,
        bold: true,
        margin: [0, 10]
      },

      badge("Distribuição por grupo", { bg: "#e9ecef", textColor: "#000" }),

      fakePieChart(),

      badge("Resultado geral do diagnóstico", { bg: "#e9ecef" }),

      scoreCard(diagnostic.value, diagnostic.label)

    ]
  };

  pdfMake.createPdf(docDefinition).download(`Relatório ${formatedReference}.pdf`);
}