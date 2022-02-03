import { CloseIcon, TagIcon } from "assets";

export const getMagnifierIcon = (isSelected: boolean) => {
  return {
    magnifierIcon: isSelected ? CloseIcon : TagIcon,
    magnifierIconAlt: isSelected ? "close" : "tag",
  };
};
