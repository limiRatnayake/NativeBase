import BreadcrumbMain from './Breadcrumb';
import BreadcrumbLink from './BreadcrumbLink';
import BreadcrumbItem from './BreadcrumbItem';
import BreadcrumbText from './BreadcrumbText';
import BreadcrumbIcon from './BreadcrumbIcon';
export type { IBreadcrumbProps, IBreadcrumbItemProps } from './types';
import type { IBreadcrumbComponentType } from './types';

const BreadcrumbTemp: any = BreadcrumbMain;
BreadcrumbTemp.Item = BreadcrumbItem;
BreadcrumbTemp.Link = BreadcrumbLink;
BreadcrumbTemp.Text = BreadcrumbText;
BreadcrumbTemp.Icon = BreadcrumbIcon;

// To add typings
const Breadcrumb = BreadcrumbTemp as IBreadcrumbComponentType;
export { Breadcrumb };
