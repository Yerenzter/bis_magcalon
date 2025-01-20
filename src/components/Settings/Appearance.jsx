import { Link } from "react-router-dom"

export default function Appearance() {
    return (
        <div className="w-4/5 row p-5 h-max absolute right-0 top-12">
            <div className="col s12">
                <span className="text-6xl text-green-700">Appearance</span>
            </div>

            <div className="col s12 divider my-3"></div>

            <div className="col s12 row">
                <span className="text-3xl text-green-900 s10">Font size</span>
                <div className="input-field outlined dropdown-trigger s2" data-target="select-font-size" >
                    <label htmlFor="selectFontSize"></label>
                    <input type="text" id="selectFontSize" readOnly />
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