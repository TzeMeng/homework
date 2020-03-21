import { Bubble } from 'vue-chartjs'
import database from '../firebase.js'

export default {
  extends: Bubble,
  data: function () {
    return {
        datacollection: {
            datasets: [{
                label: [],
                backgroundColor: [],
                borderColor: [],
                data: []
            }]
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
methods: {
    fetchItems: function () {
      database.collection('countries').get().then(querySnapShot => {
        querySnapShot.forEach(doc => { 
            this.datacollection.datasets[0].label.push([doc.data().country])
            this.datacollection.datasets[0].backgroundColor.push(doc.data().backgroundCol)
            this.datacollection.datasets[0].borderColor.push(doc.data().borderCol)
            this.datacollection.datasets[0].data.push({x:doc.data().param[0],y:doc.data().param[1],r:doc.data().param[2]})
        })
        this.renderChart(this.datacollection, this.options)
      })
    }
  },
  created () {
    this.fetchItems()
  }
}

