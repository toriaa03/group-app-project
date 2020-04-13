import React, { Component } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCircle } from "@fortawesome/free-solid-svg-icons";

// library.add(faCircle);


export default class extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

  render() {
      return (
          <div>
              
              <h1>Homepage</h1>

              <div className="slideshow">
                  <img src="https://picsum.photos/id/432/1200/500" />

                 <div className="btn-slider">
                     {/* <FontAwescomeIcon icon="far fa-circle" /> */}
                </div>

              </div>




          </div>
      )
  }
}