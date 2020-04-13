import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
      super(props)

      this.state = {
          
      }
  }

    render() {
        return (
            <div className="profile-page-wrapper">
                <div className="profile-left">
                    <div className="logo-img">Logo</div>
                    <div className="findFriends">
                        <input type="text"
                        name="searchFriends"
                        placeholder="Find Friends"
                        />
                    </div>
                    <div className="chat-friends">Friends</div>
                </div>


                <div className="profile-center">


                    <div class="new-post">
                        new post
                    </div>

                    <div className="posts">
                        posts here
                    </div>

                </div>

                <div className="profile-right">
                    <button className="logInOut"></button>
                    <div className="profilePicture"></div>
                    <button className="edit">EDIT</button>
                    <div class="profile-options">
                        <div className="about">About</div>
                        <div className="friends">Friends</div>
                        <div className="photos">Photos</div>
                    </div>
                    <div className="profileIntrests">Books</div>
                    <div className="profileIntrests">Music</div>
                    <div className="profileIntrests">Gaming</div>
                    <div className="profileIntrests">Add new Intrest</div>
                </div>

            

            

                
            </div>
        )
    }
}