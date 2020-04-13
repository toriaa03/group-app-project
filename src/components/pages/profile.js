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
                        <input type="text"
                        name="newPost"
                        className="new-post-input"
                        placeholder="Type your post here"
                        />
                        {/* DropzonComponent */}
                    </div>

                    <div className="posts">
                        posts here
                    </div>

                </div>

                <div className="profile-right">
                    <div className="user-login-display">
                        <button className="logInOut">Login/Logout</button>
                        <div className="profilePicture"></div>
                    </div>
                    
                    <div class="profile-options">
                        <div className="upo about">About</div>
                        <div className="upo friends">Friends</div>
                        <div className="upo photos">Photos</div>
                    </div>
                    <div className="intrests-wrapper">
                        <div className="profileIntrests">Books</div>
                        <div className="profileIntrests">Music</div>
                        <div className="profileIntrests">Gaming</div>
                        <div className="profileIntrests">Add new Intrest</div>
                    </div>
                </div>

            

            

                
            </div>
        )
    }
}