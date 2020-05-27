import React from 'react'

export default function Navigation(props) {
    const {brand, links} = props;
    
    //const function componentDidMount() {}

    //const function componentWillUnmount() {}

    //const function handleScroll() {}

    return (
        <nav>
        <div className="nav-header">
          <img src="https://via.placeholder.com/150x60?text=My+Logo"/>

          <div className="inner-nav-div">
            <a href="#"><h3>Projects</h3></a>
            <a href="#"><h3>About</h3></a>
          </div>          
        </div>
      </nav>
    )
}