// react
import React from "react";
import {useState} from "react";


// data stubs
import dataPoint from "../../data/accountPoints";
import Currency from "../shared/Currency";
import {numberPattern} from "../../services/patterns";

export default function AccountPagePoints() {
    const [amount, setAmount] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        if (numberPattern.test(event.target.value)) {
            setAmount(event.target.value);

            if (event.target.value < 10 && event.target.value !== "") {
                setErrorMessage("Minimum withdrawal balance is 10");
            } else if (event.target.value > dataPoint.availablePoints) {
                setErrorMessage(`Not enough balance. Maximum withdrawal balance is ${dataPoint.availablePoints}`);
            } else {
                setErrorMessage("");
            }
        }
    };
    return (
        <div className="account-points">
            <div className="account-points__view row">
                <div className="md col-4 ms col-12 card account-points__available-point-card">
                    <h4>Available Points</h4>
                    <p>
                        {dataPoint.availablePoints}
                    </p>
                    <span className="row account-points__available-point-card__value">
                        <h6>Value - </h6>
                        <span>
                            <Currency value={dataPoint.availablePoints * 100}/>
                        </span>
                    </span>
                </div>
                <div className="md col-7 ms col-12 card">
                    <table className="table">
                        <tbody>
                        <tr>
                            <td style={{width: "250px"}}>Life Time Points</td>
                            <td>-</td>
                            <td>{dataPoint.lifeTimePoints}</td>
                        </tr>
                        <tr style={{height: "60px"}}>
                            <td style={{verticalAlign: "middle"}}>Total Withdrawn Points</td>
                            <td>-</td>
                            <td>{dataPoint.lifeTimeWithdrawnPoints}</td>
                        </tr>
                        <tr>
                            <td>Deducted Points</td>
                            <td>-</td>
                            <td>{dataPoint.deductedPoints}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="account-points__request">
                <h4>Withdraw Points</h4>
                <div className="form-group">
                    <table className="table d-none d-md-block table-borderless">
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor="profile-request-points">Request Points Amount</label>
                            </td>
                            <td>
                                <div>
                                    <input
                                        id="profile-request-points"
                                        type="text"
                                        className="form-control"
                                        placeholder={dataPoint.availablePoints.toString()}
                                        onChange={handleChange}
                                        value={amount}
                                    />
                                    <span className="text-danger">
                                            *Minimum - 10 Maximum - {dataPoint.availablePoints}
                                        </span>
                                    {errorMessage !== "" && (
                                        <div className="alert alert-danger account-points__request-errorMsg"
                                             role="alert">
                                            {errorMessage}
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td>
                                <label>
                                    <Currency value={amount ? amount * 100 : 0}/>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <div
                                    className="form-group mt-5 mb-0 account-points__request-button"
                                >
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        disabled={errorMessage !== "" || !amount}
                                    >
                                        Request
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="d-ms-block d-md-none" style={{marginLeft: "10px"}}>
                        <label htmlFor="profile-request-points">Request Points Amount</label>
                        <input
                            id="profile-request-points"
                            type="text"
                            className="form-control"
                            placeholder={dataPoint.availablePoints.toString()}
                            onChange={handleChange}
                            value={amount}
                        />
                        <span className="text-danger">
                                            *Minimum - 10 Maximum - {dataPoint.availablePoints}
                                        </span><br/>
                        {errorMessage !== "" && (
                            <div className="alert alert-danger account-points__request-errorMsg" role="alert">
                                {errorMessage}
                            </div>
                        )}
                        <label>
                            <Currency value={amount ? amount * 100 : 0}/>
                        </label><br/><br/>
                        <div style={{display: "grid", placeItems: "center"}}>
                            <button
                                type="button"
                                className="btn btn-primary"
                                disabled={errorMessage !== "" || !amount}
                            >
                                Request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
