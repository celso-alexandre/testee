import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

export function Chart() {
  const options: ApexOptions = {
    title: {
      text: 'Recipe Status',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#263238',
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {},
    },
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      stackType: '100%',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
      categories: [
        'No Recipes (Error Event)',
        'oo--oo1111',
        'funciona',
        'orane juice',
        'Test new buffer2',
        'nova 13 01',
        'nova 10 10',
      ],
      labels: {},
    },
    yaxis: {
      showAlways: false,
      showForNullSeries: false,
      min: 0,
      max: 100,
      forceNiceScale: false,
    },
    fill: {
      opacity: 0.9,
    },
    legend: {
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
      showForSingleSeries: true,
      showForZeroSeries: false,
      showForNullSeries: false,
      position: 'right',
      offsetX: 0,
      offsetY: 37,
    },
    colors: [
      '#006049',
      '#66621d',
      '#46661d',
      '#a12e66',
      '#661d40',
    ],
  };

  const series: Array<any> = [
    {
      name: 'Ok',
      data: [
        0,
        8,
        4,
        14,
        2,
        16,
        7,
      ],
    },
    {
      name: 'Blocked blades',
      data: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
    },
    {
      name: 'Crusher overcurrent',
      data: [
        0,
        0,
        0,
        0,
        0,
        1,
        0,
      ],
    },
    {
      name: 'Jammed',
      data: [
        0,
        0,
        0,
        12,
        0,
        1,
        0,
      ],
    },
    {
      name: 'Custom serving',
      data: [
        0,
        2,
        0,
        0,
        0,
        0,
        0,
      ],
    },
  ];

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
}
