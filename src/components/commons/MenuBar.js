import React, { useState } from 'react';
import {
    MenuBox,
    MenuBoxDokitIcon,
    UpperBox,
    UpperBoxTitle,
    UpperBoxIcon1,
    UpperBoxIcon2,
    SideBox,
    SideBoxDetail1,
    SideBoxDetail2,
    SideBoxDetail3,
    SideBoxDetail4,
    SideBoxDetail5,
    SideBoxIcon1,
    SideBoxIcon2,
    SideBoxIcon3,
    SideBoxIcon4,
    SideBoxIcon5,
    SideBoxIcon6,
    SideBoxIcon7,
    SideBoxIcon8,
    SideBoxTitle1,
    SideBoxTitle2,
    SideBoxTitle3,
    SideBoxTitle4,
    SideBoxTitle5,
    SideBoxTitle6,
    SideBoxTitle7,
    SideBoxTitle8
  } from '../MenuBar/StyledComponent';

const MenuBar = () => {
    return(
        <>
            <MenuBox>
                <UpperBox>
                    <MenuBoxDokitIcon />
                    <UpperBoxTitle>Veritas Lus Mea</UpperBoxTitle>
                    <UpperBoxIcon1 />
                    <UpperBoxIcon2 />
                </UpperBox>
                <SideBox>
                    <SideBoxDetail1>
                        <SideBoxIcon1 />
                        <SideBoxTitle1>Dokit List</SideBoxTitle1>
                        <SideBoxIcon2 />
                        <SideBoxTitle2>Calendar</SideBoxTitle2>
                        <SideBoxIcon3 />
                        <SideBoxTitle3>Friends</SideBoxTitle3>
                        <SideBoxIcon4 />
                        <SideBoxTitle4>Team</SideBoxTitle4>
                    </SideBoxDetail1>
                    <SideBoxDetail2>
                        <SideBoxIcon5 />
                        <SideBoxTitle5>Timer</SideBoxTitle5>
                    </SideBoxDetail2>    
                    <SideBoxDetail3>
                        <SideBoxIcon6 />
                        <SideBoxTitle6>Incompleted List</SideBoxTitle6>
                    </SideBoxDetail3>
                    <SideBoxDetail4>
                        <SideBoxIcon7 />
                        <SideBoxTitle7>Guest Book</SideBoxTitle7>
                    </SideBoxDetail4>
                    <SideBoxDetail5>
                        <SideBoxIcon8 />
                        <SideBoxTitle8>Favorite</SideBoxTitle8>
                    </SideBoxDetail5>
                </SideBox>
            </MenuBox>
        </>
    );
};

export default MenuBar;