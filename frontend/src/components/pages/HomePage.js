import React from 'react'
import { Link } from 'react-router-dom'

const CurrentLoans = [
    { Loan: "Bank", Amount: "1888" },
    { Loan: "Dishes", Amount: "2212" },
    { Loan: "Utilities", Amount: "3232"},
  ]

  const LoanHistory = [
    { LoanHistory: "Bank1", Amount: "1888" },
    { LoanHistory: "Dishes1", Amount: "2212" },
    { LoanHistory: "Utilities1", Amount: "3232"},
  ]
export default function HomePage() {
    return (
        <div className="text-center m-5-auto">
            <h1 className="main-title home-page-title">Welcome to our app</h1>
                <p style={{ color: 'Black' }} className="main-para text-center">Current Balance : $0 </p>
                <p style={{ color: 'Black', fontWeight: 'bold' }} className="main-para text-center">Current Loans </p>
                <div className= 'text-center'>
                <table>
                    <tr>
                        <th>Loan</th>
                        <th>Amount</th>
                    </tr>
                    {CurrentLoans.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td>{val.Loan}</td>
                        <td>{val.Amount}</td>
                      </tr>
                    )
                    })}
                </table>
                </div>
                <p>
                    {""}
                </p>
                <p style={{ color: 'Black', fontWeight: 'bold'}} className="main-para text-center">Loan History </p>
                <table>
                    <tr>
                        <th>Loan</th>
                        <th>Amount</th>
                    </tr>
                    {LoanHistory.map((val, key) => {
                    return (
                      <tr key={key}>
                        <td>{val.LoanHistory}</td>
                        <td>{val.Amount}</td>
                      </tr>
                    )
                    })}
                </table>

            <Link to = "/loans">
                <button className="button">Loans</button>&nbsp;
            </Link>
            <Link to="/">
                <button className="button">Log out</button>
            </Link>
        </div>
    );
}
