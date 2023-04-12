import React from 'react';

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CalendarIcon,
  CancelIcon,
  CheckIcon,
  ClockIcon,
  DeleteIcon,
  DownloadIcon,
  EyeIcon,
  FavouritesIcon,
  FileIcon,
  FolderIcon,
  HeartIcon,
  HomeIcon,
  ImageIcon,
  InfoIcon,
  LinkIcon,
  MailIcon,
  MoreIcon,
  MoreVerticalIcon,
  NoEyeIcon,
  PaperclipIcon,
  PaperPlaneIcon,
  PencilIcon,
  SearchIcon,
  ShareIcon,
  TextAlignCenterIcon,
  TextAlignJustifiedIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '.';

interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  const iconMap: { [key: string]: React.ReactElement } = {
    arrowDown: <ArrowDownIcon />,
    arrowLeft: <ArrowLeftIcon />,
    arrowRight: <ArrowRightIcon />,
    arrowUp: <ArrowUpIcon />,
    calendar: <CalendarIcon />,
    cancel: <CancelIcon />,
    check: <CheckIcon />,
    clock: <ClockIcon />,
    delete: <DeleteIcon />,
    download: <DownloadIcon />,
    eye: <EyeIcon />,
    favourites: <FavouritesIcon />,
    file: <FileIcon />,
    folder: <FolderIcon />,
    heart: <HeartIcon />,
    home: <HomeIcon />,
    image: <ImageIcon />,
    info: <InfoIcon />,
    link: <LinkIcon />,
    mail: <MailIcon />,
    more: <MoreIcon />,
    moreVertical: <MoreVerticalIcon />,
    noEye: <NoEyeIcon />,
    paperclip: <PaperclipIcon />,
    paperPlane: <PaperPlaneIcon />,
    pencil: <PencilIcon />,
    search: <SearchIcon />,
    share: <ShareIcon />,
    textAlignCenter: <TextAlignCenterIcon />,
    textAlignJustified: <TextAlignJustifiedIcon />,
    textAlignLeft: <TextAlignLeftIcon />,
    textAlignRight: <TextAlignRightIcon />,
  };

  const icon = iconMap[name];

  return (
    <span data-testid="icon-container" className={className}>
      {icon}
    </span>
  );
};

export default Icon;
