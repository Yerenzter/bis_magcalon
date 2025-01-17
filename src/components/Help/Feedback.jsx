import { Link } from "react-router-dom";

export default function Feedback() {
    return (
        <div className="w-4/5 row p-5 h-max absolute right-0">
            <div className="col s12">
                <span className="text-6xl text-green-700">Feedback</span>
            </div>

            <div className="col s12 divider my-3"></div>

            <div className="col s12">
                <span className="text-4xl text-green-700">Give us a feedback</span>
            </div>

            <div className="col s12 m3 row">
                <div className="col s12 text-center">
                    <div className="card pop">
                        <div className="card-content">
                            <div className="card-body">
                                <strong className="text-green-900">Wow!</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s12 text-center">
                    <div className="card pop">
                        <div className="card-content">
                            <div className="card-body">
                                <strong className="text-green-900">User-friendly system!</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s12 text-center">
                    <div className="card pop">
                        <div className="card-content">
                            <div className="card-body">
                                <strong className="text-green-900">Great performance!</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col s12 text-white flex justify-items-end gap-3 fixed bottom-0 right-0 my-5 me-5">
                <Link onClick={() => history.back()}>
                    <button
                        type="button"
                        className="btn bg-green-500 waves-effect"
                    >
                        Back
                    </button>
                </Link>
            </div>
        </div>
    )
}