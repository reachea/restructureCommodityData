const data = require('./data');

function restructureData(data) {
  let insertedProduct = {};
  const series = {}

  const sampleData = {
    options: {
      xaxis: {
        categories: []
      }
    },
    series: []
  }

  if (data) {
    for (const item of data) {
      if (!insertedProduct[`${item.product_name}`]) {
        sampleData.options.xaxis.categories.push(item.product_name)
      }

      insertedProduct[`${item.product_name}`] = item.product_name
      
      if (!series[`${item.province_name}`]) {
        series[`${item.province_name}`] = {
          name: item.province_name,
          data: []
        }
      }

      series[`${item.province_name}`].data.push(item.daily_price)
    }

    for (const key of  Object.keys(series)) {
      sampleData.series.push(series[key])
    }
  
    return sampleData
  }
}

let newData = {
  height: 300,
  type: 'bar',
  ...restructureData(data)
}

console.log(newData)