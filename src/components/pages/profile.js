import React, { Component } from 'react';



export default class ProfilePage extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

//   create posts
// profile picture
// their past posts
// friends section
// pictures section
// about
// bio/details

  render() {
      return (
          <div className="profilePageWrapper">
            <div className="profileHeading">
                <div className="profileBackground">
                    
                </div>
                <div className="profilePicture">
                    

                    </div>
                <button className="edit">EDIT</button>
                <div class="profileOptions">
                    <div className="about">About</div>
                    <div className="friends">Friends</div>
                    <div className="photos">Photos</div>
                </div>

            </div>

            create

            <div className="posts">

            </div>

              
          </div>
      )
  }
}