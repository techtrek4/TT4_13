import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
<body>
    <nav class="navbar navbar-light bg-light navbar-expand-md fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://www.dbs.com.sg/">
            <img
              src="images/dbs-bank-logo2.png"
              id="logo"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler float-end"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                DBS Banking
              </h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div class="offcanvas-body" id="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page">Loans</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="profilePage.html">My Account</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" /*v-on:click="checkLogout()"*/>Log Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    <div class="container-fluid" id="main-box">
        <div class="display-6 text-danger mt-2 ms-2">Welcome, XXX</div>

        <p class="mt-4 fs-3">Apply For A New Loan</p>

        

        <div class="row">
            <div class="col d-none d-lg-block"><img src="./images/happypeople.jpg" id="human"/></div>

            <div class="col">
                <p class="fs-5 text-center">I want to borrow</p>
                <div class="row">
                    <div class="col">
                        <p class="text-center">
                            Loan Amount
                        </p>
                    </div>

                    <div class="col">
                        <input type="text" /*value="loan_amount"*//>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <p class="text-center">
                            Loan Period (years)
                        </p>
                    </div>

                    <div class="col">
                        <input class="mt-2" type="number" value="loan_period"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <p class="text-center mt-2">Monthly repayment</p>
                    </div>
                    <div class="col">
                        <p class="mt-2"> {/*{calcPayablePerMonth}*/}</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col text-center">Interest Rate</div>
                    <div class="col">
                        <p> {/*{interest_rate}*/}</p>
                    </div>
                </div>

                <div class="row d-flex align-items-center text-center">
                    <div class="col"></div>
                    <button type="button" class="col btn btn-success">APPLY NOW</button>
                    <div class="col"></div>
                </div>
            </div> 
        </div>
    </div>
      

    <script src="/frontend/applyNewLoan.js"></script>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>

    <script src="https://unpkg.com/vue@next"></script>


    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</body>
  )
}