export const single = [
    {
      "name": "North Korea",
      "value": 51474
    },
    {
      "name": "Czech Republic",
      "value": 12666
    },
    {
      "name": "Madagascar",
      "value": 47029
    },
    {
      "name": "Macao",
      "value": 53369
    },
    {
      "name": "Tonga",
      "value": 10200
    }
  ]

export const pieData = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  }
]

export const combinedLineBarData = [
  {
    name: 'Evaporation',
    type: 'bar',
    tooltip: {
      valueFormatter: function (value: number) {
        return (value as number) + ' ml';
      }
    },
    data: [
      2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
    ]
  },
  {
    name: 'Precipitation',
    type: 'bar',
    tooltip: {
      valueFormatter: function (value: number) {
        return (value as number) + ' ml';
      }
    },
    data: [
      2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
    ]
  },
  {
    name: 'Temperature',
    type: 'line',
    yAxisIndex: 1,
    tooltip: {
      valueFormatter: function (value: number) {
        return (value as number) + ' °C';
      }
    },
    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
  }
]
