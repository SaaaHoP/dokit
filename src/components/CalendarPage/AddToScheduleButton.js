import React, { Component } from "react";
import AddToSchedule from "./AddToSchedule";
import  {CalendarPageScheduleAddButton, CalendarPageScheduleAddButtonIcon} from "./StyledComponent";

class AddToScheduleButton extends Component {
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
        <CalendarPageScheduleAddButton onClick={this.openModal}>
            <CalendarPageScheduleAddButtonIcon />
        </CalendarPageScheduleAddButton>
        <AddToSchedule isOpen={this.state.isModalOpen} close={this.closeModal} />
      </>
    );
  }
}
export default AddToScheduleButton;