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
        borderWidth: 5,
        borderColor: "rgba(255,255,255,0.8)",
        backgroundColor: "transparent",
      },
    ],
  },
});
