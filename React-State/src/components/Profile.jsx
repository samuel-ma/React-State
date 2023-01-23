import React, { Component } from 'react'
import "./styles/Profile.css"

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
          fullName: "Samuel ma",
          bio: `Hey there👋, Aspiring 10X Dev over here`,
          imgSrc: "https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80",
          profession: "Frontend Developer",
        }
      }

    render() {
        return (
            <div className="container">
                <img className='bgimg' src={this.state.imgSrc} alt="" /> 
                <div className='picDiv'>
                <div>
                    <h1 className='myMargin'>134k</h1>
                    <p className='myMargin'>Followers</p>
                </div>

                <div className='profilepic'>
                    <img className='bgImg' src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                </div>
                <div>
                    <h1 className='myMargin'>200</h1>
                    <p className='myMargin'>Following</p>
                </div>
                </div>
                <h1 className='margB'>{this.state.fullName}</h1>
                <i className='margB'>{this.state.profession}</i>
                <p className='bio'>{this.state.bio}</p>
        </div>
        )
    }
}
