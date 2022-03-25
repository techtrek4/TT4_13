import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function LoansPage({ newExpense, handleChange, handleSubmit }){
    return (
        <Link to="/">
        <button className="primary-button">Log out</button>
        </Link>
      );

}