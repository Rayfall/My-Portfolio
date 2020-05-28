import React, {Component} from 'react';
import Tabletop from 'tabletop'

class Projects extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  //let key = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCg-UcbvD2VshfB4G21Ay6UGNyDrIB8GkCDF-59KBafC6OAsAR2k7Lb0ajx9uS8XmbR0kyxEGlQL8H/pubhtml";

  componentDidMount() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1GV9cCJvJgPMX6nv2SFlIkL6UA6clT0k8na7NHg-3ZSQ/edit?usp=sharing',
      callback: googleData => {
        this.setState({
          data: googleData
      })},
      simpleSheet: true
    });    
  }

  render() {
    const { data } = this.state
    return (
      <div>
        {
          data.map(project => {
            return (
              <div key={project.Title}>
                  <h3><a href = {project.URL}  target="_blank"> {project.Title}</a></h3>
                  <img alt={project.Description} src={project.Image} height="200" width="200"/>
                  <p>{project.Description}</p>
              </div>
            )
          })
        }
      </div>
    );
  }    
}

export default Projects;