var ctx = document.getElementById('horse_0001_ttr').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2023.02.08','2023.02.09','2023.02.10','2023.02.11','2023.02.12','2023.02.13','2023.02.14','2023.02.15','2023.02.16','2023.02.17','2023.02.18','2023.02.19','2023.02.20','2023.02.21','2023.02.22','2023.02.23','2023.02.24','2023.02.25','2023.02.26','2023.02.27','2023.02.28','2023.03.01','2023.03.02','2023.03.03','2023.03.04','2023.03.05','2023.03.06','2023.03.07','2023.03.08','2023.03.09','2023.03.10','2023.03.11','2023.03.12','2023.03.13','2023.03.14','2023.03.15','2023.03.16','2023.03.17','2023.03.18','2023.03.19','2023.03.20','2023.03.21','2023.03.22','2023.03.23','2023.03.24','2023.03.25','2023.03.26','2023.03.27','2023.03.28','2023.03.28','2023.03.29','2023.03.30','2023.03.31','2023.04.01','2023.04.02','2023.04.03','2023.04.04','2023.04.05','2023.04.06','2023.04.07','2023.04.08','2023.04.09','2023.04.10','2023.04.11','2023.04.12','2023.04.13','2023.04.14','2023.04.15','2023.04.16','2023.04.17','2023.04.18','2023.04.19','2023.04.20','2023.04.21','2023.04.22','2023.04.23','2023.04.24','2023.04.25','2023.04.26','2023.04.27','2023.04.28','2023.04.29','2023.04.30',''],
    datasets: [{
      label: '体重',
      data: [402,397,399,395,398,397,400,401,398,399,396,401,405,403,405,408,408,408,407,405,403,408,410,408,406,410,412,409,411,409,406,405,405,408,408,409,403,410,409,410,410,407,405,405,400,405,404,403,408,408,408,405,406,405,404,408,410,407,403,404,406,408,409,406,409,409,409,409,409,409,409,409,409,409,409,408,412,412,412,412,412,412,412,],
      borderColor: '#333',
    }, {
      label: '体温',
      data: [37.5, 37.3, 37.3, 37.1, 37.3, 37.8, 37.7, 37.9, 37.6, 37.8, 37.8, 37.7, 37.7, 37.9, 37.8, 37.6, 37.9, 37.9, 37.7, 37.9, 37.9, 37.7, 37.8, 37.7, 37.2, 37.6, 37.8, 37.7, 37.8, 37.7, 37.8, 37.6, 37.5, 37.7, 37.7, 37.7, 37.7, 37.2, 37.4, 37.1, 37.2, 37.2, 37.2, 37.3, 37.1, 37.2, 37.1, 37.1, 37.1, 37.2, 37.2, 37.4, 37.2, 37.4, 37.1, 37.2, 37.3, 37.5, 37.6, 37.6, 37.5, 37.6, 37.2, 37.1, 37.2, 37.3, 37.4, 37.5, 37.6, 37.4, 37.1, 37.3, 37.1, 37.1, 37.2, 37.1, 37.3, 37.2, 37.4, 37.1, 37.2, 37.3, 37.3, ],
      borderColor: '#f88',
      yAxisID: 'y2',
    }],
  },
  options: {
    scales: {
      y: {   // 体重
        min: 350,
        max: 550,
        ticks: {
          color: '#333',
          stepSize: 25,
        },
      },
      y2: { // 体温
        min: 35,
        max: 45,
        position: 'right',
        ticks: {
          color: '#f88',
          stepSize: 2.5,
        },
      },
    },
  },
});
