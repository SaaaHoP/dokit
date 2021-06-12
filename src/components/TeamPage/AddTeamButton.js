import React, { Component } from "react";
import AddTeam from "./AddTeam";
import  {TeamPageAddButton, TeamPageAddButtonIcon} from "./StyledComponent";

class AddTeamButton extends Component {
  
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
  };

  render() {
    return (
      <>
        <TeamPageAddButton onClick={this.openModal}>
            <TeamPageAddButtonIcon/>
        </TeamPageAddButton>
        <AddTeam isOpen={this.state.isModalOpen} open={this.openModal} close={this.closeModal} />
      </>
    );
  }
}

export default AddTeamButton;