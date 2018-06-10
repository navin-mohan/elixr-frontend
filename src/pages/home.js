import React, { Component } from 'react'
import './home.css'
import ProjectBar from '../components/project'


export default class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            projects: []
        }
    }


    componentDidMount(){
        //TODO: add api call
        this.setState({
            projects: [
                {
                    name: 'Project1',
                    desc: 'lorem ipsum something',
                    skills: [
                        'python', 'c++', 'cuda'
                    ],

                },
                {
                    name: 'Project2',
                    desc: 'lorem ipsum something',
                    skills: [
                        'python', 'c++', 'cuda'
                    ],

                }
            ]
        })
    }


    render(){

        const projects = this.state.projects.map( (project,i) => (
            <ProjectBar key={i}>{project.name}</ProjectBar>
        ))
        return (
           <div className="container">
                <h1 className="title">hello user!</h1>
                <br/>
                {projects}
           </div>
        )
    }
}