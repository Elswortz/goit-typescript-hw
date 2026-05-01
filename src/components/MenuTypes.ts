type Menu = {
  id: MenuIds;
  title: string;
};

type MenuIds = "home" | "about" | "contact";

type SelectedMenu = {
  id: MenuIds;
};

export type MenuSelected = {
  selectedMenu: SelectedMenu;
};

export type MenuAction = {
  onSelectedMenu: (selectedMenu: SelectedMenu) => void;
};

export type PropsProvider = { children: React.ReactNode };

export type PropsMenu = {
  menus: Menu[];
};
