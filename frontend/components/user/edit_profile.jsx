import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: props.user.user.image_url,
      full_name: props.user.user.full_name,
      username: props.user.user.username,
      bio: props.user.user.bio,
      email: props.user.user.email,
      id: props.user.user.id,
      private: props.user.user.private
    };
    this.update = this.update.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    const addUrl =(error, result) => {
      this.setState({image_url: result[0].url});
    }
    let widget = cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, addUrl.bind(this));
    if (this.props.user.user.private) {
      document.getElementById('private-prof').checked = true;
    } else {
      document.getElementById('public-prof').checked = true;
    }
  }
  componentDidUpdate() {
    if (this.state.private) {
      document.getElementById('public-prof').checked = true;
      document.getElementById('private-prof').checked = false;
    } else {
      document.getElementById('public-prof').checked = false;
      document.getElementById('private-prof').checked = true;
    }
  }

  update(prop) {
    return (e) => this.setState({[prop]: e.target.value})
  };

  updateUser () {
    this.props.editUser(this.state);
  }

  render() {
    let checkPrivate = "";
    let checkPublic = "";
    return(
      <div className="edit-profile">
        <div className="modal-form edit-form">
          <h4>Edit Profile</h4>
          <form onSubmit={this.updateUser}>
            <div id="upload-holder"></div>
            <input type="text" onChange={this.update("full_name")} defaultValue={this.state.full_name} />
            <input type="text" onChange={this.update("email")} defaultValue={this.state.email} />
            <input type="text" onChange={this.update("username")} defaultValue={this.state.username} />
            <input type="password" onChange={this.update("password")} placeholder="new password"></input>
            <textarea onChange={this.update("bio")} placeholder="Bio" defaultValue={this.state.bio}></textarea>
            <input type="radio" id="private-prof" onChange={this.update("private")} value="Private"/> Private
            <input type="radio" id="public-prof" onChange={this.update("private")} value="Public"/> Public
            <input type="submit" value="Submit Changes"></input>
          </form>
        </div>
      </div>
    )
  }

}
export default EditProfile;
