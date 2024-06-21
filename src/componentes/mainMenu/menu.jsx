import React, { useState } from "react";
import "./style.css";
import {
  HomeFilled,
  ContactsOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

import HealingIcon from "@mui/icons-material/Healing";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SpaIcon from "@mui/icons-material/Spa";
import MedicationIcon from "@mui/icons-material/Medication";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

import { Menu } from "antd";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <HomeFilled />,
  },
  {
    label: "Saúde",
    key: "SubMenu",
    icon: <HealingIcon fontSize="large" />,
    children: [
      {
        type: "group",
        label: "Bem estar",
        children: [
          {
            label: "Fitness",
            key: "setting:1",
            icon: <FitnessCenterIcon fontSize="large" />,
          },
          {
            label: "Maquiagens",
            key: "setting:4",
            icon: <AutoFixHighIcon fontSize="large" />,
          },
        ],
      },
      {
        type: "group",
        label: "Medicamentos",
        children: [
          {
            label: "Manipulados",
            key: "setting:3",
            icon: <MedicationIcon fontSize="large" />,
          },
          {
            label: "Naturais",
            key: "setting:2",
            icon: <SpaIcon fontSize="large" />,
          },
        ],
      },
    ],
  },
  {
    label: "Coleções",
    key: "colections",
    icon: <CaretDownOutlined fontSize="large" />,
  },
  {
    label: "Rastreamento",
    key: "a",
    icon: <LocalShippingIcon fontSize="large" />,
  },
  {
    label: "Contato",
    key: "b",
    icon: <ContactsOutlined fontSize="large" />,
  },
];
const MainMenu = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      className="menuItems"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default MainMenu;
