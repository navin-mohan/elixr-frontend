import React,{ Component } from 'react';

import './project.css'

export default class ProjectBar extends Component{

    render(){
        return (
            <div className="pill-bar">
            {this.props.children}
            </div>
        );
    }
}