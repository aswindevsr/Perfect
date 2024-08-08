var options = {
  series: [{
  name: 'Net Profit',
  data: [200, 190, 405, 405, 190, 405]
}, {
  name: 'Revenue',
  data: [190, 190, 405, 190, 190, 405,]
}, 
// {
//   name: 'Free Cash Flow',
//   data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
// }
],
// title: {
//   text: 'Lead Generation',
//   align: 'left'
// },
  chart: {
  type: 'bar',
  height: 300,
  toolbar:{
    show:false
  }
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '60%',
    endingShape: 'rounded',
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Thu', 'Fri'],
},
yaxis: {
  title: {
    // text: '$ (thousands)'
  }
},
fill: {
  opacity: 1,
  
},
colors: [
"#E951BF","#718EBF"
],
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#barChart"), options);
chart.render();