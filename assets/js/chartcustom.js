let Circle_option = {

    series: [48],
    chart: {
        height: 150,
        type: 'radialBar',
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: '#fff',
        width: 8,
        dashArray: 0,
    },
    plotOptions: {

        radialBar: {

            hollow: {
                size: '60%',


            },
            dataLabels: {
                show: true,
                name: {
                    show: false
                },
                value: {
                    show: true,
                    fontSize: '14px',
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    color: '#fff',
                    offsetY: 5,

                },
            },
            track: {
                show: true,
                background: '#00000065',
                strokeWidth: '50%',
            },
        },
    },
    fill: {
        type: 'solid',
        colors: ['#fff'],
        opacity: 1,


    },

};
let Circle_chart = new ApexCharts(document.querySelector("#Radial-chart"), Circle_option);
Circle_chart.render();


let Column_option = {
    series: [{
        name: 'Profit',

        data: [44, 55, 57, 56, 61, 58, 63]
    }, {
        name: 'Total Sales',
        data: [60, 80, 70, 80, 100, 30, 40]
    }],
    chart: {
        type: 'bar',
        height: 180,
        width:276,
        toolbar: {
            show: false,
        },

    },
    legend: {
        show: false
    },
    plotOptions: {
        bar: {

            horizontal: false,
            columnWidth: '50%',
            endingShape: 'rounded',
            borderRadius: 4,


        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
        curve: 'stepline',
        lineCap: 'round',

    },
    xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        axisBorder: {
            show: true,
            color: '#0000000c',
            offsetX: 5,
            offsetY: 5
        },
        axisTicks: {
            show: false,
        },


    },
    // background line
    grid: {
        show: true,
        borderColor: '#0000000c',
        strokeDashArray: 3,
        position: 'back',
        padding: {
            top: 1,
            bottom: 1,

        },
    },
    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
        axisBorder: {
            show: true,
            color: '#0000000c',
            offsetX: -5,
            offsetY: 0
        },
    },
    fill: {
        type: 'solid',
        colors: ['#845adf', '#f0f0f0'],
        opacity: 1,
    },
    tooltip: {
        enabled: true,
        y: {

            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        },

    }
};

let Column_chart = new ApexCharts(document.querySelector("#column-Chart"), Column_option);
Column_chart.render();







let Main_option = {
    series: [{
            name: "profit",
            type: 'line',
            data: [100, 210, 180, 454, 230, 320, 656, 830, 350, 350, 210, 410],
            color: '#895ae0',

        },
        {
            name: "Revenue",
            type: 'line',
            color: '#23b7e5',
            data: [180, 620, 476, 220, 520, 780, 435, 515, 738, 454, 525, 230]
        },
        {
            name: 'Sales',
            data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480],
            type: 'area',
            color: '#eee',

        }
    ],
    chart: {
        height: 350,

        toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true | '<img src="/static/icons/reset.png" width="20">',
                customIcons: []
            },
        },

    },
    yaxis: {
        min: 0,
        max: 1000,
        tickAmount: 5,
        labels: {
            formatter: (value) => {
                return '$' + value
            },
        },
        axisBorder: {
            show: true,
            color: '#0000000c',
            offsetX: -5,
            offsetY: 0
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [2, 2, 2],
        // colors:['red','green','blue'],
        curve: 'smooth',
        dashArray: [0, 5, 0]
    },
    title: {
        text: 'Revenue Analytics with sales & profit (USD)',
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'small',
            fontFamily: 'Inter',
            color: '#8c9097'
        },
    },

    legend: {
        tooltipHoverFormatter: function (val, opts) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: [' Jan', ' Feb', ' Mar', ' Apr', ' May', 'Jun', 'Jul', ' Aug', ' Sep',
            ' Oct', ' Nov', 'Dec'
        ],
    },
    tooltip: {

        y: [{

                title: {
                    formatter: function (val) {
                        return val + " (mins)"
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {
                        return val + " per session"
                    }
                }
            },
            {
                title: {
                    formatter: function (val) {

                        return val;
                    }
                }
            }
        ]
    },
    grid: {
        borderColor: '#0000000c',
        strokeDashArray: 3,
    },

};

let Main_chart = new ApexCharts(document.querySelector("#main-chart"), Main_option);
Main_chart.render();


let line_option1 = {
    series: [{
        name: "Desktops",
        data: [10, 0, 15, 0, 40, 35, 40, 0, 15]
    }],
    chart: {
        width: 90,
        height: 40,
        type: 'line',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        curve: 'smooth',
        colors: ['#845adf']
    },
    title: {
        show: false
    },
    grid: {
        show: false,

    },
    yaxis: {
        min: 0,
        max: 80,
        tickAmount: 1,
        labels: {
            show: false
        },
        axisTicks: {
            show: false,
        },

    },
    tooltip: {
        enabled: false
    },

};
let line_chart1 = new ApexCharts(document.querySelector(".line-chart1"), line_option1);
line_chart1.render();





let line_option2 = {
    series: [{
        name: "Desktops",
        data: [10, 0, 15, 0, 40, 35, 40, 0, 15]
    }],
    chart: {
        width: 90,
        height: 40,
        type: 'line',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        curve: 'smooth',
        colors: ['#84d7f1']
    },
    title: {
        show: false
    },
    grid: {
        show: false,

    },
    yaxis: {
        min: 0,
        max: 80,
        tickAmount: 1,
        labels: {
            show: false
        },
        axisTicks: {
            show: false,
        },

    },
    tooltip: {
        enabled: false
    },

};

let line_chart2 = new ApexCharts(document.querySelector(".line-chart2"), line_option2);
line_chart2.render();


let line_option3 = {
    series: [{
        name: "Desktops",
        data: [10, 0, 15, 0, 40, 35, 40, 0, 15]
    }],
    chart: {
        width: 90,
        height: 40,
        type: 'line',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        curve: 'smooth',
        colors: ['#26bf94']
    },
    title: {
        show: false
    },
    grid: {
        show: false,

    },
    yaxis: {
        min: 0,
        max: 80,
        tickAmount: 1,
        labels: {
            show: false
        },
        axisTicks: {
            show: false,
        },

    },
    tooltip: {
        enabled: false
    },

};

let line_chart3 = new ApexCharts(document.querySelector(".line-chart3"), line_option3);
line_chart3.render();


let line_option4 = {
    series: [{
        name: "Desktops",
        data: [10, 0, 15, 0, 40, 35, 40, 0, 15]
    }],
    chart: {
        width: 90,
        height: 40,
        type: 'line',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        curve: 'smooth',
        colors: ['#f5b849']
    },
    title: {
        show: false
    },
    grid: {
        show: false,

    },
    yaxis: {
        min: 0,
        max: 80,
        tickAmount: 1,
        labels: {
            show: false
        },
        axisTicks: {
            show: false,
        },

    },
    tooltip: {
        enabled: false
    },

};

let line_chart4 = new ApexCharts(document.querySelector(".line-chart4"), line_option4);
line_chart4.render();


var options = {
    series: [44, 55, 41, 17],
    chart: {
        type: 'donut',
        width: '100%',
        height: 350,


    },
    dataLabels: {
        enabled: false,


    },
    colors: ['#845adf', '#23b7e5', '#f5b849', '#26bf94'],
    labels: ["mobile", "Desktop", "Laptop", "Tablet"],
    stroke: {
        width: 0,
    },
    plotOptions: {
        pie: {
            startAngle: 0,
            endAngle: 360,
            expandOnClick: false,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,

            donut: {
                size: '85%',


                labels: {
                    show: true,

                    name: {
                        show: true,

                    },
                    value: {
                        show: true,
                        fontSize: '24px',
                        fontFamily: 'Inter',
                        offsetY: 10,
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '12px',
                        fontFamily: 'Inter',
                        fontWeight: 'bolder',
                        color: '#8c9097',
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                                return a + b
                            }, 0)
                        }
                    }
                }
            },
        }

    },
    fill: {
        colors: ['#845adf', '#23b7e5', '#f5b849', '#26bf94']
    },
    legend: {
        position: 'bottom',
        showForSingleSeries: true,
        formatter: function (label, opts) {
            return label + ' ' + opts.w.globals.series[opts.seriesIndex]
        },

    },
    tooltip: {
        colors: ['#845adf', '#23b7e5', '#f5b849', '#26bf94'],
        title: {
            show: false
        },
        y: {

            formatter: function (val) {
                return val
            }
        },
    }

};

var chart = new ApexCharts(document.querySelector("#circle-chart"), options);
chart.render();