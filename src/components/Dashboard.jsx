import axios from "axios";
import { useEffect, useState } from "react";
import { ChartOccupation, Tick } from "../lib";

export default function Dashboard() {
  useEffect(() => {
    Tick(fetchPopulation);
  }, []);

  useEffect(() => {
    Tick(fetchMalePopulation);
  }, []);

  useEffect(() => {
    Tick(fetchFemalePopulation);
  }, []);

  const [populaton, sendPopulation] = useState({});
  const [malePopulation, sendMalePopulation] = useState({});
  const [femalePopulation, sendFemalePopulation] = useState({});

  const fetchPopulation = async () => {
    let res = await axios.get("http://localhost:4435/residents/population");
    sendPopulation(res.data);
  };

  const fetchMalePopulation = async () => {
    let res = await axios.get(
      "http://localhost:4435/residents/population/male"
    );
    sendMalePopulation(res.data);
  };

  const fetchFemalePopulation = async () => {
    let res = await axios.get(
      "http://localhost:4435/residents/population/female"
    );
    sendFemalePopulation(res.data);
  };
  return (
    <div className="w-4/5 row p-5 h-max absolute right-0 top-12">
      <div className="col s12">
        <span className="text-6xl text-green-700">Dashboard</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <div className="col s12 m7">
        <span className="text-5xl text-green-700">Summary</span>
      </div>

      <div className="col s12 row">
        <div className="col s12 m7 row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-content">
                <div className="card-body">
                  <ChartOccupation />
                </div>
              </div>
            </div>
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
                    {populaton.length || (
                      <div className="p-4">
                        <div className="progress bg-green-500">
                          <div className="indeterminate"></div>
                        </div>
                      </div>
                    )}
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
                  <strong className="text-6xl text-gray-700">
                    {populaton.length || (
                      <div className="p-4">
                        <div className="progress bg-green-500">
                          <div className="indeterminate"></div>
                        </div>
                      </div>
                    )}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col s6 m6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center">
                  <strong className="text-3xl text-green-700">Male</strong>
                  <br />
                  <strong className="text-6xl text-gray-700">
                    {malePopulation.length || (
                      <div className="p-4">
                        <div className="progress bg-green-500">
                          <div className="indeterminate"></div>
                        </div>
                      </div>
                    )}
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="col s6  m6">
            <div className="card">
              <div className="card-content">
                <div className="card-body text-center">
                  <strong className="text-3xl text-green-700">Female</strong>
                  <br />
                  <strong className="text-6xl text-gray-700">
                    {femalePopulation.length || (
                      <div className="p-4">
                        <div className="progress bg-green-500">
                          <div className="indeterminate"></div>
                        </div>
                      </div>
                    )}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
