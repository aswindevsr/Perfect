

  var options = {

chart: {
    width: 300,
    type: 'donut',
  },
  series: [44, 55, 41],
  legend: {
    show: false
  },
  plotOptions: {
    pie: {
        dataLabels: {
            enabled: false
          }
    }
  },
  responsive: [{
        breakpoint: 900,
        options: {
          chart: {
            width: 250
          },
          legend: {
            show: false
          }
        }
      }],
  };


  var chart = new ApexCharts(document.querySelector("#pieChart"), options);
  chart.render();