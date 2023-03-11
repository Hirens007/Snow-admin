//userchart chart
var userchart = {
    chart: {
        height: 232,
        type: "area",
        fontFamily: "Inter, sans-serif",
        zoom: {
            enabled: false,
        },
        toolbar: {
            show: false,
        },
    },
    series: [
        {
            name: "Current Week",
            data: [0, 1000, 5000, 10000, 8000, 11000, 15000],
        },
        {
            name: "Previous Week",
            data: [2000, 3000, 6000, 12000, 9000, 13000, 14000],
        },
    ],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        curve: "smooth",
        width: 3,
        lineCap: "square",
    },
    dropShadow: {
        enabled: true,
        opacity: 0.2,
        blur: 10,
        left: -7,
        top: 22,
    },
    colors: ["#1C1C1C", "#A8C5DA"],
    markers: {
        discrete: [
            {
                seriesIndex: 0,
                dataPointIndex: 4,
                fillColor: "#1C1C1C",
                strokeColor: "#fff",
                size: 6,
            },
            {
                seriesIndex: 1,
                dataPointIndex: 5,
                fillColor: "#A8C5DA",
                strokeColor: "#fff",
                size: 6,
            },
        ],
    },
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            show: true,
        },
        labels: {
            offsetX: 0,
            //offsetX: isRtl ? 2 : 0,
            offsetY: 5,
            style: {
                fontSize: "12px",
                cssClass: "apexcharts-xaxis-title",
            },
        },
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: (value) => {
                return value / 1000 + "M";
            },
            offsetX: -10,
            // offsetX: isRtl ? -30 : -10,
            offsetY: 0,
            style: {
                fontSize: "12px",
                cssClass: "apexcharts-yaxis-title",
            },
        },
        opposite: false,
        //opposite: isRtl ? true : false,
    },
    grid: {
        borderColor: "#e0e6ed",
        //borderColor: isDark ? '#191e3a' : '#e0e6ed',
        strokeDashArray: 7,
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
    legend: {
        show: false,
        // position: 'top',
        // horizontalAlign: 'right',
        // fontSize: '12px',
        // markers: {
        //     width: 10,
        //     height: 10,
        //     offsetX: -2,
        // },
        // itemMargin: {
        //     horizontal: 10,
        //     vertical: 5
        // },
    },
    tooltip: {
        marker: {
            show: true,
        },
        x: {
            show: false,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0,
            opacityTo: 0,
            stops: [100, 100],
        },
    },
};
var chart1 = new ApexCharts(document.querySelector("#userchart"), userchart);
chart1.render();

//Traffic by Device
var trafficdevice = {
    series: [
        {
            name: "Device",
            data: [10000, 70000, 40000, 50000, 60000, 80000],
        },
    ],
    chart: {
        height: 189,
        type: "bar",
        events: {
            click: function (chart, w, e) {
                // console.log(chart, w, e)
            },
        },
        toolbar: {
            show: false,
        },
    },
    colors: ["#BAEDBD", "#C6C7F8", "#1C1C1C", "#B1E3FF", "#95A4FC", "#A1E3CB"],
    plotOptions: {
        bar: {
            columnWidth: "30%",
            distributed: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    yaxis: {
        tickAmount: 6,
        labels: {
            formatter: (value) => {
                return value / 100 + "K";
            },
            offsetX: -10,

            offsetY: 0,
            style: {
                fontSize: "12px",
            },
        },
        opposite: false,
    },
    xaxis: {
        categories: ["Linux", "Mac", "iOS", "Windows", "Android", "Other"],
        labels: {
            style: {
                fontSize: "12px",
            },
        },
    },
};
var chart2 = new ApexCharts(document.querySelector("#trafficdevice"), trafficdevice);
chart2.render();

//Traffic by Location
var trafficlocation = {
    series: [38.5, 22.5, 30.8, 8.1],
    chart: {
        type: "donut",
        height: 200,
        fontFamily: "Nunito, sans-serif",
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        position: "right",
        horizontalAlign: "left",
        fontSize: "12px",
        formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
        },
        markers: {
            width: 6,
            height: 6,
            offsetX: -5,
        },
        height: 140,
        offsetY: 0,
    },

    colors: ["#BAEDBD", "#C6C7F8", "#1C1C1C", "#95A4FC"],
    labels: ["United States", "Canada", "Mexico", "Other"],
    responsive: [
        {
            breakpoint: 480,
            options: {
                legend: {
                    position: "bottom",
                    height: 50,
                },
            },
        },
    ],
    states: {
        hover: {
            filter: {
                type: "none",
                value: 0.15,
            },
        },
        active: {
            filter: {
                type: "none",
                value: 0.15,
            },
        },
    },
};
var chart3 = new ApexCharts(document.querySelector("#trafficlocation"), trafficlocation);
chart3.render();

 //Project Status
 var projectstatus = {
    series: [67.6, 26.4, 6 ],
    chart: {
        type: 'donut',
        height: 250,
        fontFamily: 'Nunito, sans-serif',
        
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '12px',
        
        markers: {
            width: 6,
            height: 6,
            offsetX: -5,
        },
        height: 30,
        offsetY: 16,
    },
    plotOptions: {
        pie: {
            donut: {
                size: '65%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '16px',
                        offsetY: 0,
                        color: '#1c1c1c',
                    },
                    value: {
                        show: true,
                        fontSize: '14px',
                        color: '#1c1c1c',
                        offsetY: 5,
                        formatter: (val) => {
                            return val + '%';
                        },
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        color: '#1c1c1c',
                        fontSize: '16px',
                        formatter: (val) => {
                            return 100 + '%';
                        },
                    },
                },
            },
        },
    },
    colors: ['#1C1C1C', '#BAEDBD', '#C6C7F8'],
    labels: ['Competed', 'In Progress', 'Behind'],
    states: {
        hover: {
            filter: {
                type: 'none',
                value: 0.15,
            }
        },
        active: {
            filter: {
                type: 'none',
                value: 0.15,
            }
        },
    },
    };
    var chart4 = new ApexCharts(document.querySelector("#projectstatus"), projectstatus);
    chart4.render();

    //Task overview
    var taskoverview = {
      series: [{
      name: "This Year", 
      data: [25, 38, 35, 29, 32, 28, 25, 32, 11, 18, 27, 30],
    }],
      chart: {
      height: 236,
      type: 'bar',
      events: {
        click: function(chart, w, e) {
          // console.log(chart, w, e)
        }
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#A8C5DA"],
    plotOptions: {
      bar: {
        columnWidth: '30%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        // formatter: (value) => {
        //   return value / 1 + "K";
        // },
        offsetX: -10,
        
        offsetY: 0,
        style: {
          fontSize: "12px",
        },
      },
      opposite: false,
    },
    xaxis: {
      categories: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5', 'Sprint 6', 'Sprint 7', 'Sprint 8', 'Sprint 9', 'Sprint 10', 'Sprint 11', 'Sprint 12'],
      labels: {
        style: {
          fontSize: '12px',
          color:'rgb(55, 61, 63)'
        }
      }
    }
    };
  var chart5 = new ApexCharts(document.querySelector("#taskoverview"), taskoverview);
  chart5.render();

   //revenue  
   var revenue = {
    chart: {
      height: 250,
      type: "area",
      fontFamily: "Inter, sans-serif",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        name: "Current Week",
        data: [0, 1000, 5000, 10000, 8000, 11000, 15000],
      },
      {
        name: "Previous Week",
        data: [2000, 3000, 6000, 12000, 9000, 13000, 14000],
      },
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
      lineCap: "square",
    },
    dropShadow: {
      enabled: true,
      opacity: 0.2,
      blur: 10,
      left: -7,
      top: 22,
    },
    colors: ["#1C1C1C", "#A8C5DA"],
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 4,
          fillColor: "#1C1C1C",
          strokeColor: "#fff",
          size: 6,
        },
        {
          seriesIndex: 1,
          dataPointIndex: 5,
          fillColor: "#A8C5DA",
          strokeColor: "#fff",
          size: 6,
        },
      ],
    },
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
      },
      labels: {
        offsetX: 0,
        //offsetX: isRtl ? 2 : 0,
        offsetY: 5,
        style: {
          fontSize: "12px",
          cssClass: "apexcharts-xaxis-title",
        },
      },
    },
    yaxis: {
      tickAmount: 5,
      labels: {
        formatter: (value) => {
          return value / 1000 + "M";
        },
        offsetX: -10,
        // offsetX: isRtl ? -30 : -10,
        offsetY: 0,
        style: {
          fontSize: "12px",
          cssClass: "apexcharts-yaxis-title",
        },
      },
      opposite: false,
      //opposite: isRtl ? true : false,
    },
    grid: {
      borderColor: "#e0e6ed",
      //borderColor: isDark ? '#191e3a' : '#e0e6ed',
      strokeDashArray: 7,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    legend: {
      show: false,
      // position: 'top',
      // horizontalAlign: 'right',
      // fontSize: '12px',
      // markers: {
      //     width: 10,
      //     height: 10,
      //     offsetX: -2,
      // },
      // itemMargin: {
      //     horizontal: 10,
      //     vertical: 5
      // },
    },
    tooltip: {
      marker: {
        show: true,
      },
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [100, 100],
      },
    },
  };
  var chart6 = new ApexCharts(document.querySelector("#revenue"), revenue);
  chart6.render();

  //Task Ovrview Chart
  var taskovrview = {
    series: [{
                name: 'Task 1',
                data: [12, 18, 15, 25, 6, 18]
            },
                {
                    name: 'Task 2',
                    data: [4, 2, 4, 4, 2, 4],
                    
                },
                ],
                chart: {
                    height: 156,
                    type: 'bar',
                    toolbar: {
                        show: false
                    },
                    stacked: true,
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 1
                },
                colors: ['#93BFDF', '#CFDFEB'],
                yaxis: {
                    tickAmount: 4,
                    opposite: false,
                    },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                },
                
                fill: {
                    opacity: 1
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '25%'
                    }
                },
                legend: {
                    show: false
                },
                           };
  var chart7 = new ApexCharts(document.querySelector("#taskovrview"), taskovrview);
  chart7.render();

  //Total Sales chart bar
  var totalsales = {
    series: [300.56, 135.18, 48.96, 154.02 ],
    chart: {
        type: 'donut',
        height: 300,
        fontFamily: 'Inter, sans-serif',
        
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '12px',
        formatter: function(val, opts) {
         return val + " - " + "$" + opts.w.globals.series[opts.seriesIndex]
        },
        markers: {
            width: 6,
            height: 6,
            offsetX: -5,
        },
        height: 100,
        width:160,
        offsetY: 0,
    },
    
    colors: ['#BAEDBD', '#C6C7F8', '#1C1C1C', '#95A4FC'],
    labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
    states: {
        hover: {
            filter: {
                type: 'none',
                value: 0.15,
            }
        },
        active: {
            filter: {
                type: 'none',
                value: 0.15,
            }
        },
    },
    };
    var chart8 = new ApexCharts(document.querySelector("#totalsales"), totalsales);
    chart8.render();

 //Selling Categories
 var sellingcategories = {
    series: [
        {
            name: "Device",
            data: [100, 300, 400, 800, 1200, 1600, 600],
        },
    ],
    chart: {
        height: 236,
        type: "bar",
        events: {
            click: function (chart, w, e) {
                // console.log(chart, w, e)
            },
        },
        toolbar: {
            show: false,
        },
    },
    colors: ["#BAEDBD", "#C6C7F8", "#1C1C1C", "#B1E3FF", "#95A4FC", "#A1E3CB", "#A8C5DA"],
    plotOptions: {
        bar: {
            columnWidth: "30%",
            distributed: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    yaxis: {
        tickAmount: 6,
        labels: {
            formatter: (value) => {
                return value / 100 + "K";
            },
            offsetX: -10,

            offsetY: 0,
            style: {
                fontSize: "12px",
            },
        },
        opposite: false,
    },
    xaxis: {
        categories: ["Phones", "Laptops", "Headsets", "Games", "Keyboardsy", "Monitors" , "Speakers"],
        labels: {
            style: {
                fontSize: "12px",
            },
        },
    },
};
var chart9 = new ApexCharts(document.querySelector("#sellingcategories"), sellingcategories);
chart9.render();

//Agent chart
var agentchart = {
series: [ {
name: 'Agents Chart',
data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 50]
}, {
name: 'Agents',
data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 40]
}],
chart: {
type: 'bar',
height: 222,
toolbar: {
            show: false,
        },
},
plotOptions: {
bar: {
    horizontal: false,
    columnWidth: '40%',
    endingShape: 'rounded',
    borderRadius: 4,
    borderRadiusApplication: 'end',
    borderRadiusWhenStacked: 'last',
},
},
dataLabels: {
enabled: false
},
legend: {
        show: false,
    },
stroke: {
show: true,
width: 0,
colors: ['transparent',]
},
colors: ['#A8C5DA', '#CFDFEB'],
xaxis: {
categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
},

fill: {
opacity: 1
},

};

var chart10 = new ApexCharts(document.querySelector("#agentchart"), agentchart);
chart10.render();

//Clients Chart
var clientschart = {
series: [ {
name: 'Clients Chart',
data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 60, 50]
}, {
name: 'Clients',
data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 55, 40]
}],
chart: {
type: 'bar',
height: 222,
toolbar: {
            show: false,
        },
},
plotOptions: {
bar: {
    horizontal: false,
    columnWidth: '40%',
    endingShape: 'rounded',
    borderRadius: 4,
    borderRadiusApplication: 'end',
    borderRadiusWhenStacked: 'last',
},
},
dataLabels: {
enabled: false
},
legend: {
        show: false,
    },
stroke: {
show: true,
width: 0,
colors: ['transparent',]
},
colors: ['#95A4FC', '#C6C7F8'],
xaxis: {
categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
},

fill: {
opacity: 1
},

};

var chart11 = new ApexCharts(document.querySelector("#clientschart"), clientschart);
chart11.render();   