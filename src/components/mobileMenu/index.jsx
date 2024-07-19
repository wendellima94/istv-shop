import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./style.css";
import LogoItemsContent from "../logoItems";
import SearchContainer from "../search";
// menu-item
export default (props) => {
  return (
    <>
      <Menu>
        <div className="logoContent">
          <SearchContainer />
          <LogoItemsContent />
        </div>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/salads">
          Saúde
        </a>
        <a className="menu-item" href="/pizzas">
        Medicamentos
        </a>
        <a className="menu-item" href="/rastreamento">
          Rasteeamento
        </a>
        <a className="menu-item" href="/desserts">
          Contato
        </a>
      </Menu>
    </>
  );
};


// {
//   label: "Home",
//   key: "/",
//   icon: <HomeFilled />,
// },
// {
//   label: "Saúde",
//   key: "SubMenu",
//   icon: <HealingIcon fontSize="large" />,
//   children: [
//     {
//       type: "group",
//       label: "Bem estar",
//       children: [
//         {
//           label: "Fitness",
//           key: "setting:1",
//           icon: <FitnessCenterIcon fontSize="large" />,
//         },
//         {
//           label: "Maquiagens",
//           key: "setting:4",
//           icon: <AutoFixHighIcon fontSize="large" />,
//         },
//       ],
//     },
//     {
//       type: "group",
//       label: "Medicamentos",
//       children: [
//         {
//           label: "Manipulados",
//           key: "setting:3",
//           icon: <MedicationIcon fontSize="large" />,
//         },
//         {
//           label: "Naturais",
//           key: "setting:2",
//           icon: <SpaIcon fontSize="large" />,
//         },
//       ],
//     },
//   ],
// },