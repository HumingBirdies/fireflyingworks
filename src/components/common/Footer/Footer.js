import React from 'react';
import { Routes, Route, Switch, BrowserRouter as Router } from "react-router-dom";  
import Typography from "@material-ui/core/Typography";

import './Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <p className="content">© 2021 by Lee Zhi Ying. </p>
      <p className="content">fireflyingworks@gmail.com</p>
    </div>
  );
}

export { Footer };

