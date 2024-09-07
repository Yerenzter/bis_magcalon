export default function Dashboard() {
  return (
    <div className="w-4/5 row p-5 h-max absolute right-0">
      <div className="col s12">
        <span className="text-6xl text-green-700">Dashboard</span>
      </div>

      <div className="divider my-3 col s12"></div>

      <div className="col s12 m7">
        <span className="text-5xl text-green-700">What to do?</span>
      </div>

      <div className="col s12 m5 row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <div className="card-body text-center">
                <strong className="text-3xl text-green-700">Population</strong>
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
                <strong className="text-3xl text-green-700">Registered</strong>
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
  );
}
