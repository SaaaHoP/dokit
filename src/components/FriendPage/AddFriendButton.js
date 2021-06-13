import React, { Component } from "react";
import AddFriend from "./AddFriend";
import  {FriendPageAddButton, FriendPageAddButtonIcon} from "./StyledComponent";

class AddFriendButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    window.location.reload();
  };

  render() {
    return (
      <>
        <FriendPageAddButton onClick={this.openModal}>
            <FriendPageAddButtonIcon/>
        </FriendPageAddButton>
        <AddFriend isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}

export default AddFriendButton;