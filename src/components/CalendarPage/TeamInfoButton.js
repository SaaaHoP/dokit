import React, { Component } from "react";
import TeamInfo from "./TeamInfo";
import  {TeamCalendarPageInfoButton, TeamCalendarPageInfoButtonIcon} from "./StyledComponent";

class TeamInfoButton extends Component {
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
        <TeamCalendarPageInfoButton onClick={this.openModal}>
            <TeamCalendarPageInfoButtonIcon />
        </TeamCalendarPageInfoButton>
        <TeamInfo isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}
export default TeamInfoButton;