import React from "react";
import styled from "styled-components";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import BatteryFullOutlinedIcon from "@mui/icons-material/BatteryFullOutlined";

export const Wrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  z-index: 9;
`;

const Left = styled.div`
  flex: 80%;
  display: flex;
  font-size: 19;
  font-weight: bold;
  padding-left: 25px;
`;
const TopIcons = styled.div`
    position:fixed
    margin-top:5px;
    padding-right:5px;
    right:0;
    display:flex;
    flex:20%;
    align-items:start;
    justify-content:space-between;
`;

function TopBar() {
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Wrapper>
      <Left>{time}</Left>
      <TopIcons>
        <SignalCellularAltOutlinedIcon style={{ fontSize: 19 }} />
        <WifiOutlinedIcon style={{ fontSize: 19 }} />
        <BatteryFullOutlinedIcon style={{ fontSize: 19 }} />
      </TopIcons>
    </Wrapper>
  );
}

export default TopBar;
