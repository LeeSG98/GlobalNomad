export interface PageMenuProps {
  linkTo: string;
  icon: any;
  activeIcon: any;
  name: string;
  setIsShowProfileForm?: React.Dispatch<React.SetStateAction<boolean>>;
}
