import { ShoppingCartOutlined } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import "./style.css"
const LoginItemsHeader = () => (
  <>
    <div className="itemsContainer">
      <ShoppingCartOutlined />
      <AccountCircleIcon />
    </div>
  </>
);
export default LoginItemsHeader;
