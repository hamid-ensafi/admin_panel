let Circle_option= {

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
        opacity:1,
        
  
    },
    
};


var Circle_chart = new ApexCharts(document.querySelector("#Radial-chart"), Circle_option);
Circle_chart.render();