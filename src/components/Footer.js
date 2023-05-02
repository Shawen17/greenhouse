import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ReceiptIcon from "@mui/icons-material/Receipt";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import styled from "styled-components";

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <div>
      <div className="gridscroll">
        <Items className="footer-item">
          <div>
            <HomeIcon />
          </div>
          <p>Home</p>
        </Items>
        <Items className="footer-item">
          <div>
            <ReceiptIcon />
          </div>
          <p>Voucher</p>
        </Items>
        <Items className="footer-item">
          <div>
            <AccountBalanceWalletIcon />
          </div>
          <p>Wallet</p>
        </Items>
        <Items className="footer-item">
          <div>
            <SettingsIcon />
          </div>
          <p>Settings</p>
        </Items>
      </div>
    </div>
  );
};

export default Footer;
