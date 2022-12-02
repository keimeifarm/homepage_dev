var ctx = document.getElementById('horse_0001_sample').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2022.11.01','2022.11.02','2022.11.03','2022.11.04','2022.11.05','2022.11.06','2022.11.07','2022.11.08','2022.11.09','2022.11.10','2022.11.11','2022.11.12','2022.11.13','2022.11.14',''],
    datasets: [{
      label: '体重',
      data: [450,450,450,450,450,450,450,450,450,450,450,450,450,450,],
      borderColor: '#333',
    }, {
      label: '体温',
      data: [37.5, 37.3, 37.0, 37.3, 37.2, 37.5, 37.8, 37.3, 37.0, 37.3, 37.2, 37.5, 37.8, 37.8, ],
      borderColor: '#f88',
      yAxisID: 'y2',
    }],
  },
  options: {
    scales: {
      y: {   // 体重
        min: 400,
        max: 500,
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
