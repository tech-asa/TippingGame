import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// 遷移ページ
import { Playing } from "../Pages/Playing";
import { SampleB } from "../Pages/SampleB";
import { SampleC } from "../Pages/SampleC";

export const PageRouting = () => {
    return (
        <>
            <Router>
                {/* ページリンク */}
                <div>
                    <Link to="/sampleA">sampleA</Link>
                    <Link to="/sampleB">sampleB</Link>
                    <Link to="/sampleC">sampleC</Link>
                </div>
                <Switch>
                    {/* <Route>で個々のルーティングを定義する */}
                    <Route path="/sampleA" component={Playing} />
                    <Route path="/sampleB" component={SampleB} />
                    <Route path="/sampleC" component={SampleC} />
                </Switch>
            </Router>
        </>
    );
}

