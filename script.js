ZC.LICENSE = ['7b185ca19b4be2cba68fdcd369c663a9'];

/* Colors */
var white = '#fff';
var transparent = 'transparent';
var lightBlue = '#53688B';
var lightPink = '#C3A9C6';
var lightGreen = '#82EBC1';

/* Chart One */
var chartOneData = {
  type: 'radar',
  globals: {
    fontFamily: 'Nunito', 
  },
  backgroundColor: transparent,
  title: {
    align: 'left',
    text: 'CATEGORIES',
    fontColor: white
  },
  legend: {
    backgroundColor: transparent,
    borderWidth: 0,
    marker: {
      type: 'circle',
      borderWidth: 0
    },
    x: '16px',
    y: '48px'
  },
  plot: {
    aspect: 'area',
    alphaArea: '.6',
  },
  scaleK: {
    labels: ['Intencity', 'Flawour', 'Chill', 'Excitement', 'Good Mood', 'Anxiety', 'Hunger', 'Lasting', 'Effect'],
    item: {
      fontColor: white
    },
    guide: {
      lineStyle: 'solid',
      lineColor: white,
      backgroundColor: transparent,
    },
    tick: {
        lineColor: white
    }
  },
  scaleV: {
    item: {
      visible: false
    },
    guide: {
      lineStyle: 'solid',
      lineColor: white,
      backgroundColor: transparent
    }
  },
  series: [
    {
      values: [3, 27, 27, 27, 22, 20, 22, 20, 27],
      backgroundColor: lightBlue, 
      lineColor: lightBlue,
      text: 'Type 1',
      legendItem: {
        fontColor: lightBlue
      }
    },
    {
      values: [24, 14, 20, 16, 24, 12, 14, 24, 10],
      backgroundColor: lightPink,
      lineColor: lightPink,
      text: 'Type 2',
      legendItem: {
        fontColor: lightPink
      }
    }
  ]
}

zingchart.render({ 
	id : 'chartOne', 
	data : chartOneData, 
	height: '100%', 
	width: '100%' 
});

/* Chart Two */
var chartTwoData = {
  type: 'radar',
  globals: {
    fontFamily: 'Nunito', 
  },
  backgroundColor: transparent,
  title: {
    align: 'left',
    text: 'CATEGORIES',
    fontColor: white
  },
  legend: {
    backgroundColor: transparent,
    borderWidth: 0,
    marker: {
      type: 'circle',
      borderWidth: 0
    },
    x: '16px',
    y: '48px'
  },
  plot: {
    aspect: 'area',
    alphaArea: '.6',
  },
  scaleK: {
    labels: ['Intencity', 'Flawour', 'Chill', 'Excitement', 'Good Mood', 'Anxiety', 'Hunger', 'Lasting', 'Effect'],
    item: {
      fontColor: white,
      rules: [
        {
        rule: '%i == 0 || %i == 2 || %i == 4 || %i == 7',
        fontColor: lightPink
      }
      ]
    },
    guide: {
      lineStyle: 'solid',
      lineColor: white,
      backgroundColor: transparent,
    },
    tick: {
        lineColor: white
    }
  },
  scaleV: {
    item: {
      visible: false
    },
    guide: {
      lineStyle: 'solid',
      lineColor: white,
      backgroundColor: transparent
    }
  },
  series: [
    {
      values: [3, 27, 27, 27, 22, 20, 22, 20, 27],
      backgroundColor: lightBlue, 
      lineColor: lightBlue,
      text: 'Type 1',
      legendItem: {
        fontColor: lightBlue
      }
    },
    {
      values: [24, 14, 20, 16, 24, 12, 14, 24, 10],
      backgroundColor: lightPink,
      lineColor: lightPink,
      text: 'Type 2',
      legendItem: {
        fontColor: lightPink
      },
      valueBox: {
        backgroundColor: 'var(--purple)',
        fontColor: 'white',
        padding: '2px 8px',
        borderRadius: '8px',
        borderWidth: '2px',
        borderColor: lightPink,
        shadow: false
      }
    }
  ]
}

zingchart.render({ 
	id : 'chartTwo', 
	data : chartTwoData, 
	height: '100%', 
	width: '100%' 
});

/* Chart Three */
var chartThreeData = {
  type: 'radar',
  globals: {
    fontFamily: 'Nunito', 
  },
  backgroundColor: transparent,
  title: {
    align: 'left',
    text: 'CATEGORIES',
    fontColor: white
  },
  legend: {
    backgroundColor: transparent,
    borderWidth: 0,
    marker: {
      type: 'circle',
      borderWidth: 0
    },
    x: '16px',
    y: '48px'
  },
  plot: {
    aspect: 'area',
    alphaArea: '.6',
  },
  scaleK: {
    labels: ['Intencity', 'Flawour', 'Chill', 'Excitement', 'Good Mood', 'Anxiety', 'Hunger', 'Lasting', 'Effect'],
    item: {
      fontColor: white
    },
    guide: {
      lineStyle: 'solid',
      lineColor: white,
      backgroundColor: transparent,
    },
    tick: {
        lineColor: white
    }
  },
  scaleV: {
    item: {
      visible: false
    },
    guide: {
      lineStyle: 'solid',
      lineColor: white,
      backgroundColor: transparent
    }
  },
  series: [
    {
      values: [3, 27, 27, 27, 22, 20, 22, 20, 27],
      backgroundColor: lightBlue, 
      lineColor: lightBlue,
      text: 'Type 1',
      legendItem: {
        fontColor: lightBlue
      }
    },
    {
      values: [24, 14, 20, 16, 24, 12, 14, 24, 10],
      backgroundColor: lightPink,
      lineColor: lightPink,
      text: 'Type 2',
      legendItem: {
        fontColor: lightPink
      } 
    }, 
    {
      values: [5, 25, 12, 6, 8, 10, 25, 3, 10],
      backgroundColor: lightGreen, 
      lineColor: lightGreen,
      text: 'Type 3',
      legendItem: {
        fontColor: lightGreen
      }
    }
  ]
}

zingchart.render({ 
	id : 'chartThree', 
	data : chartThreeData, 
	height: '100%', 
	width: '100%' 
});

/* Chart Four */
var chartFourData = {
  type: 'radar',
  globals: {
    fontFamily: 'Nunito', 
  },
  backgroundColor: transparent,
  title: {
    align: 'left',
    text: 'CATEGORIES',
    fontColor: white
  },
  legend: {
    backgroundColor: transparent,
    borderWidth: 0,
    marker: {
      type: 'circle',
      borderWidth: 0
    },
    x: '16px',
    y: '48px'
  },
  plot: {
    aspect: 'area',
    alphaArea: '.6',
  },
  scaleK: {
    labels: ['Intencity', 'Flawour', 'Chill', 'Excitement', 'Good Mood', 'Anxiety', 'Hunger', 'Lasting', 'Effect'],
    item: {
      fontColor: white,
      rules: [
        {
          rule: '%i > 0 && %i < 5',
          fontColor: 'lightBlue'
        },
        {
          rule: '%i == 6 || %i == 8',
          fontColor: 'lightBlue'
        }
      ]
    },
    guide: {
      lineStyle: 'solid',
      lineColor: white,
      backgroundColor: transparent,
    },
    tick: {
        lineColor: white
    }
  },
  scaleV: {
    item: {
      visible: false
    },
    guide: {
      lineStyle: 'solid',
      lineColor: white,
      backgroundColor: transparent
    }
  },
  series: [
    {
      values: [24, 14, 20, 16, 24, 12, 14, 24, 10],
      backgroundColor: lightPink,
      lineColor: lightPink,
      text: 'Type 1',
      legendItem: {
        fontColor: lightPink
      }
    },
    {
      values: [3, 27, 25, 25, 22, 20, 22, 20, 27],
      backgroundColor: lightBlue, 
      lineColor: lightBlue,
      text: 'Type 2',
      legendItem: {
        fontColor: lightBlue
      },
      valueBox: {
        backgroundColor: 'var(--purple)',
        fontColor: 'white',
        padding: '2px 8px',
        borderRadius: '8px',
        borderWidth: '2px',
        borderColor: lightBlue,
        shadow: false
      }
    }
  ]
}

zingchart.render({ 
	id : 'chartFour', 
	data : chartFourData, 
	height: '100%', 
	width: '100%' 
});