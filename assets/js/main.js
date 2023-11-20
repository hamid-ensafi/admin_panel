const Search_container = document.querySelector('.search-box-container')
const Search_btn = document.querySelectorAll('.search-btn')



Search_btn.forEach((value) => {

    value.addEventListener('click', (e) => {
        Search_container.classList.toggle('animation-search')
    })

})
Search_container.children[0].addEventListener('click', (e) => {
    e.stopPropagation()
})



const Dropdown_btn = document.querySelectorAll('.drop-down')
const Dropdown_content = document.querySelectorAll('.drop-down-content')
Dropdown_btn.forEach((value) => {
    value.addEventListener('click', () => {
        for (let i of Dropdown_content) {
            i.setAttribute('data-status', 'off')
            if (value.querySelector('.drop-down-content') != i) {
                i.classList.remove('show')
            }
        }
        let temp = value.querySelector('.drop-down-content')

        if (temp.getAttribute('data-status') == 'off') {
            temp.setAttribute('data-status', 'on')
        } else {
            temp.setAttribute('data-status', 'off')
        }
        temp.classList.toggle('show')


    })
})


var options = {

    series: [50],
    chart: {
        height: 150,
        type: 'radialBar',
    },
    stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: '#fff',
        width: 10,
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



// var options = {
//     series: [75],
//     chart: {
//     height: 350,
//     type: 'radialBar',
//     toolbar: {
//       show: true
//     }
//   },
//   plotOptions: {
//     radialBar: {
//       startAngle: -135,
//       endAngle: 225,
//        hollow: {
//         margin: 0,
//         size: '70%',
//         background: '#fff',
//         image: undefined,
//         imageOffsetX: 0,
//         imageOffsetY: 0,
//         position: 'front',
//         dropShadow: {
//           enabled: true,
//           top: 3,
//           left: 0,
//           blur: 4,
//           opacity: 0.24
//         }
//       },
//       track: {
//         background: '#000',
//         strokeWidth: '67%',
//         margin: 0, // margin is in pixels
//         dropShadow: {
//           enabled: true,
//           top: -3,
//           left: 0,
//           blur: 4,
//           opacity: 0.35
//         }
//       },

//       dataLabels: {
//         show: true,
//         name: {
//           offsetY: -10,
//           show: true,
//           color: '#000',
//           fontSize: '17px'
//         },
//         value: {
//           formatter: function(val) {
//             return parseInt(val);
//           },
//           color: '#111',
//           fontSize: '36px',
//           show: true,
//         }
//       }
//     }
//   },
//   fill: {
//     type: 'gradient',
//     gradient: {
//       shade: 'dark',
//       type: 'horizontal',
//       shadeIntensity: 0.5,
//       gradientToColors: ['#ABE5A1'],
//       inverseColors: true,
//       opacityFrom: 1,
//       opacityTo: 1,
//       stops: [0, 100]
//     }
//   },
//   stroke: {
//     lineCap: 'round'
//   },
//   labels: ['Percent'],
//   };

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();