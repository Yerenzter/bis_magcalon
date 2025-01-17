import { Link } from "react-router-dom"

export default function About() {
    return(
        <div className="w-4/5 row p-5 h-max absolute right-0">
            <div className="col s12">
                <span className="text-6xl text-green-700">About us</span>
            </div>

            <div className="col s12 divider my-3"></div>

            <div className="col s12 row">
                <div className="col s12 m4 text-center">
                    <span className="text-5xl text-green-700">Designer</span>
                    <ul className="my-3">
                        <li className="text-2xl text-green-900">Vannessa Jean Santerva</li>
                        <li className="text-2xl text-green-900">Marlowe MiJoy Ovivir</li>
                        <li className="text-2xl text-green-900">Aikrylle Gilua</li>
                    </ul>
                </div>

                <div className="col s12 m4 text-center">
                    <span className="text-5xl text-green-700">Programmer</span>
                    <ul className="my-3">
                        <li className="text-2xl text-green-900">Marc Joseff Umiten</li>
                    </ul>
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