import { Chart } from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { occupationDataMode, occupationDataName } from "../data/Occupation";

// Empty lists.
let x = [];
let x1 = [];
let y = [];
let yy = [];
let z = [];
let xRanked = [];
let yRanked = [];
let y1 = null;
let y2 = null;

setTimeout(() => {
  for (let r = 0; r < occupationDataName.length; r++) {
    x.push(occupationDataMode[r]);
  }

  x.sort().reverse();

  for (let r = 0; r < 5; r++) {
    x1.push(x[r]);
  }

  for (let r = 0; r < occupationDataName.length; r++) {
    if (occupationDataName[r].length !== 0) {
      y.push(occupationDataName[r]);
    }
  }

  for (let r = 0; r < x1.length; r++) {
    if (y[r] !== undefined) {
      for (let c = 0; c < y.length; c++) {
        if (x1[r] === y[c].length) {
          yy.push(y[c][0].occupation);
        }
      }
    }
  }

  y1 = new Set(yy);
  y2 = [...y1];

  for (let r = 0; r < x1.length; r++) {
    if (y2[r] === undefined) {
      z.push({ name: "N/A", quantity: 0 });
    } else {
      z.push({ name: y2[r], quantity: x1[r] });
    }
  }

  for (let r = 0; r < 5; r++) {
    yRanked.push(z[r].name);
  }

  for (let r = 0; r < 5; r++) {
    xRanked.push(z[r].quantity);
  }
}, 1000);

export default function ChartOccupation() {
  let ref = useRef();
  let data = {
    labels: yRanked,
    datasets: [
      {
        label: "People",
        data: xRanked,
        backgroundColor: [
          "#14532D",
          "#15803D",
          "#22C55E",
          "#DCFCE7",
          "#86EFAC",
        ],
        hoverOffset: 8,
      },
    ],
  };

  let options = {
    plugins: {
      title: {
        display: true,  
        text: "5 Most Selected Professions",
        color: "#14532D",
      },
      subtitle: {
        display: true,
        text: "Based on the data from registered residents",
        position: "bottom",
      },
      legend: {
        display: true,
        position: "left",
      },
    },
    responsive: true,
  };

  return <Doughnut ref={ref} data={data} options={options} />;
}
