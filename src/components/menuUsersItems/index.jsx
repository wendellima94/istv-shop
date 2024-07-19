import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./style.css";
import { ShoppingCartOutlined } from "@mui/icons-material";

const LoginItemsHeader = ({ onOpenCart }) => (
  <div className="itemsContainer">
    <ShoppingCartOutlined onClick={onOpenCart} style={{ cursor: "pointer" }} />
    <AccountCircleIcon />
  </div>
);

export default LoginItemsHeader;
