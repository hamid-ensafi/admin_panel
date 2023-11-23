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
        name:'Profit',

        data: [44, 55, 57, 56, 61, 58, 63]
    }, {
        name:'Total Sales',
        data: [60, 80,70 , 80, 100, 30,40]
    }],
    chart: {
        type: 'bar',
        height: 180,
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
        enabled:true,
        y: {

            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        },
     
    }
};

let Column_chart = new ApexCharts(document.querySelector("#column-Chart"), Column_option);
Column_chart.render();
