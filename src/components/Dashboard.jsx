import axios from "axios";
import { Chart } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Tick } from "../lib";
import { data } from "autoprefixer";

const ChartOccupation = () => {
  const data = {
    labels: ["Frontend", "Backend", "Fullstack"],
    datasets: [
      {
        label: "No. of Tech Stacks",
        data: [128, 32, 18],
        backgroundColor: ["#22C55E", "#16A34A", "#15803D"],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default function Dashboard() {
  useEffect(() => {
    Tick(fetchPopulation);
  }, []);

  const [populaton, sendPopulation] = useState({});

  const fetchPopulation = async () => {
    let res = await axios.get("http://localhost:4435/residents/population");
    sendPopulation(res.data);
  };
  return (
    <div className="w-4/5 row p-5 h-max absolute right-0">
      <div className="col s12">
        <span className="text-6xl text-green-700">Dashboard</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <div className="col s12 m7">
        <span className="text-5xl text-green-700">Summary</span>
      </div>

      <div className="col s12 row">
        <div className="col s12 m7 row">
          <div className="col s12 m8">
            <ChartOccupation />
          </div>
        </div>

        <div className="col s12 m5 row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center">
                  <strong className="text-3xl text-green-700">
                    Population
                  </strong>
                  <br />
                  <strong className="text-6xl text-gray-700">
                    {populaton.length}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center">
                  <strong className="text-3xl text-green-700">
                    Registered
                  </strong>
                  <br />
                  <strong className="text-6xl text-gray-700">0</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center">
                  <strong className="text-3xl text-green-700">Male</strong>
                  <br />
                  <strong className="text-6xl text-gray-700">0</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center">
                  <strong className="text-3xl text-green-700">Female</strong>
                  <br />
                  <strong className="text-6xl text-gray-700">0</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
