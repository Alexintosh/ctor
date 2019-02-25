import React, { Component } from "react";
import '../styles/main.scss';

class Home extends Component {

    public render() {
        return (

            <div className="home">
                <form>
                    <div className="inner-form">
                        <div className="basic-search">
                            <div className="input-field">
                                <input id="search" type="text" placeholder="Search for a contract address..." />
                                <div className="icon-wrap">
                                    <svg version="1.1" xmlBase="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 20 20">
                                        <path d="M18.869 19.162l-5.943-6.484c1.339-1.401 2.075-3.233 2.075-5.178 0-2.003-0.78-3.887-2.197-5.303s-3.3-2.197-5.303-2.197-3.887 0.78-5.303 2.197-2.197 3.3-2.197 5.303 0.78 3.887 2.197 5.303 3.3 2.197 5.303 2.197c1.726 0 3.362-0.579 4.688-1.645l5.943 6.483c0.099 0.108 0.233 0.162 0.369 0.162 0.121 0 0.242-0.043 0.338-0.131 0.204-0.187 0.217-0.503 0.031-0.706zM1 7.5c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5-6.5-2.916-6.5-6.5z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="advance-search">
                            <h2>Recently searched</h2>
                            <div className="row">
                                <ul className="results">
                                    <li><a href="/contract/0xbb9bc244d798123fde783fcc1c72d3bb8c189413">0xbb9bc244d798123fde783fcc1c72d3bb8c189413</a> <small>The DAO</small></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default Home;
