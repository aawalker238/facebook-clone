import React from 'react';
import SidebarRow from './SidebarRow';
import {
  LocalHospital,
  EmojiFlags,
  People,
  Chat,
  Storefront,
  VideoLibrary,
  ExpandMore,
} from '@material-ui/icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        title="Anthony Walker"
        src="https://avatars2.githubusercontent.com/u/13881938?s=400&u=8e4913157e73479e351c6405ccae18ecb415d947&v=4"
      />
      <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital} />

      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMore} />
    </div>
  );
};

export default Sidebar;
