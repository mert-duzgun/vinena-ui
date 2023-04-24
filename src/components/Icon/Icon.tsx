import { Box } from 'components';

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

/*
TODO: IconName type should be generated from the iconMap using 'keyof typeof iconMap'
It's not possible to do this at the moment because of how SVGR generates the icons on the runtime
*/

export type IconName =
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'calendar'
  | 'cancel'
  | 'check'
  | 'clock'
  | 'delete'
  | 'download'
  | 'eye'
  | 'favourites'
  | 'file'
  | 'folder'
  | 'heart'
  | 'home'
  | 'image'
  | 'info'
  | 'link'
  | 'mail'
  | 'more'
  | 'moreVertical'
  | 'noEye'
  | 'paperclip'
  | 'paperPlane'
  | 'pencil'
  | 'search'
  | 'share'
  | 'textAlignCenter'
  | 'textAlignJustified'
  | 'textAlignLeft'
  | 'textAlignRight';

export interface IconProps {
  name: IconName;
  className?: string;
  testId?: string;
}

export const Icon = ({ name, className, testId }: IconProps) => {
  const iconMap = {
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
    <Box
      data-testid={testId || 'icon-container'}
      css={{ display: 'inline-flex' }}
      className={className}
    >
      {icon}
    </Box>
  );
};
