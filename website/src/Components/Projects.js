import React from 'react';
import Tabletop from 'tabletop'

export default function Projects() {

    let key = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRCg-UcbvD2VshfB4G21Ay6UGNyDrIB8GkCDF-59KBafC6OAsAR2k7Lb0ajx9uS8XmbR0kyxEGlQL8H/pubhtml";

    function init() {
        Tabletop.init( {
          key: 'https://docs.google.com/spreadsheets/d/1GV9cCJvJgPMX6nv2SFlIkL6UA6clT0k8na7NHg-3ZSQ/edit?usp=sharing',
          simpleSheet: true }
        ).then(function(data, tabletop) { 
          console.log(data)
        })
      }
      window.addEventListener('DOMContentLoaded', init)

    return (
        <h1>My Projects</h1>
    )

}