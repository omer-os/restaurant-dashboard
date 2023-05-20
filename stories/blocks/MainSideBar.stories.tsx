import { ClientWrapperContext } from "@components/blocks/layout/ClinetLayoutWrapper";
import MainSideBar from "@components/blocks/sidebar/MainSideBar";
import { useContext } from "react";

export default {
  title: "Blocks/SideBar",
  component: MainSideBar,
};

export const SideBar = () => {
  const { openSideBar, setOpenSideBar } = useContext(ClientWrapperContext);

  return <MainSideBar />;
};
