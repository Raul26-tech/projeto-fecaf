// Criando função para realizar o slide do menu

const ToggleMenu = () => {
  let navigation = document.querySelector(".navigation");
  let toggle = document.querySelector(".toggle");
  navigation.classList.toggle("active");
  toggle.classList.toggle("active");
};

// Criação dos graficos

const ctx = document.getElementsByClassName("line-chart");

const chartGraph = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    datasets: [
      {
        label: "Contas de LUZ dos últimos meses",
        data: [144, 200, 145, 111, 310, 200, 204, 98, 247, 145, 371, 145],
        borderWidth: 4,
        borderColor: "#bcdffb",
        backgroundColor: "transparent",
      },
      {
        label: "Contas de ÁGUA dos últimos meses",
        data: [144, 200, 145, 111, 200, 150, 200, 98, 247, 145, 371, 145],
        borderWidth: 4,
        borderColor: "#FFF",
        backgroundColor: "transparent",
      },
      {
        label: "Contas de GÁZ dos últimos meses",
        data: [104, 210, 115, 111, 190, 152, 120, 98, 247, 145, 241, 145],
        borderWidth: 4,
        borderColor: "aqua",
        backgroundColor: "transparent",
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      fontSize: 20,
    },
  },
});
