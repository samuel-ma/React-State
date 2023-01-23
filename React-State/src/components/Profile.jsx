import React, { Component } from 'react'

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
            <div style={{borderRadius: "10px", padding: "10px", border: "solid 1px var(--blue2)", display: "flex", alignItems: "center", flexDirection: "column"}}>
                <img style={{borderRadius: "10px", width: "500px", height: "200px", objectFit: "cover"}} src={this.state.imgSrc} alt="" /> 
                <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                <div>
                    <h1 style={{margin: "0"}}>134k</h1>
                    <p style={{margin: "0"}}>Followers</p>
                </div>

                <div style={{marginTop: "-50px", display: "flex", alignItems: "center", justifyContent: "center", padding: "7px", backgroundColor: "lightBlue", borderRadius: "100px"}}>
                    <img style={{width: "120px", height: "120px", objectFit: "cover", borderRadius: "100px"}} src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                </div>
                <div>
                    <h1 style={{margin: "0"}}>200</h1>
                    <p style={{margin: "0"}}>Following</p>
                </div>
                </div>
                <h1 style={{marginBottom: "0px",}}>{this.state.fullName}</h1>
                <i style={{marginBottom: "0px",}}>{this.state.profession}</i>
                <p style={{marginTop: "0px",}}>{this.state.bio}</p>
        </div>
        )
    }
}
