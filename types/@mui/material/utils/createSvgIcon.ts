import SvgIcon from '@mui/material/SvgIcon';
export type createSvgIcon = (path: React.ReactNode, displayName: string) => typeof SvgIcon;
export default createSvgIcon;