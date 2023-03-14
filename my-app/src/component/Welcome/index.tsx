import React from 'react';
import { Avatar, Button, Col, Result, Row } from "antd";
import './Welcome.css'
import { Link } from 'react-router-dom';

const Welcome:React.FC = () => {
    return (
        <div className="e161_517">
        <div className="e161_516"></div>
        <div className="e161_518">
          <div className="ei161_518_31_9">
            <div className="ei161_518_31_10"></div>
            <div className="ei161_518_31_11"></div>
            <div className="ei161_518_31_12"></div>
          </div>
          <div className="ei161_518_31_13">
            <div className="ei161_518_31_14"></div>
            <div className="ei161_518_31_15"></div>
            <div className="ei161_518_31_16"></div>
            <div className="ei161_518_31_17"></div>
          </div>
          <div className="ei161_518_31_18">
            <div className="ei161_518_31_19"></div>
            <div className="ei161_518_31_20"></div>
          </div>
        </div><span  className="e161_641">9:41</span>
        <div className="e161_833">
          <div className="e161_654"></div>
          <div className="e161_832"></div>
            <Link to="/signup" className="e161_656">LOGIN</Link>
        </div>
        <div className="e161_834">
          <div className="e161_657"></div>
              <Link to="/signup" className="e161_658">REGISTER</Link>
        </div>
        <div className="e161_659"></div><span className="e161_660">The information channel</span><span  className="e161_799">@JI-SANG</span>
      </div>
    );

}

export default Welcome;

