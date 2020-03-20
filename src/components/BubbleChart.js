import { Bubble } from 'vue-chartjs'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            labels: "Africa",
            datasets: [
              {
                label: ["China"],
                backgroundColor: "rgba(255,221,50,0.2)",
                borderColor: "rgba(255,221,50,1)",
                data: [{
                  x: 21269017,
                  y: 5.245,
                  r: 120
                }]
              }, {
                label: ["Denmark"],
                backgroundColor: "rgba(60,186,159,0.2)",
                borderColor: "rgba(60,186,159,1)",
                data: [{
                  x: 258702,
                  y: 7.526,
                  r: 0.5
                }]
              }, {
                label: ["Germany"],
                backgroundColor: "rgba(0,0,0,0.2)",
                borderColor: "#000",
                data: [{
                  x: 3979083,
                  y: 6.994,
                  r: 7.17
                }]
              }, {
                label: ["Japan"],
                backgroundColor: "rgba(193,46,12,0.2)",
                borderColor: "rgba(193,46,12,1)",
                data: [{
                  x: 4931877,
                  y: 5.921,
                  r: 11.18
                }]
              }
            ]
        },
        options: {
            title: {
              display: true,
              text: 'GDP, happiness and population'
            }, 
            scales: {
              yAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "Happiness"
                }
              }],
              xAxes: [{ 
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)"
                }
              }]
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  }
}