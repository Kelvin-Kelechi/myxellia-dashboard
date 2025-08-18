 
import type {
  NavigationItem,
  SalesData,
  MetricData,
  PropertyListing,
} from "../types";
import { GoHomeFill, GoHome } from "react-icons/go";
import {
  PiScrollFill,
  PiScrollLight,
  PiToolboxFill,
  PiToolboxLight,
} from "react-icons/pi";
import { TiUser, TiUserOutline } from "react-icons/ti";
import { TbArticle, TbArticleFilled } from "react-icons/tb";

export const NAVIGATION_ITEMS: (NavigationItem & {
  filledIcon: React.ComponentType;
  outlineIcon: React.ComponentType;
})[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: GoHome,
    filledIcon: GoHomeFill,
    outlineIcon: GoHome,
    href: "/",
    active: true,
  },
  {
    id: "listings",
    label: "Listings",
    icon: PiToolboxLight,
    filledIcon: PiToolboxFill,
    outlineIcon: PiToolboxLight,
    href: "/listings",
  },
  {
    id: "users",
    label: "Users",
    icon: TiUserOutline,
    filledIcon: TiUser,
    outlineIcon: TiUserOutline,
    href: "/users",
  },
  {
    id: "request",
    label: "Request",
    icon: TbArticle,
    filledIcon: TbArticleFilled,
    outlineIcon: TbArticle,
    href: "/request",
  },
  {
    id: "applications",
    label: "Applications",
    icon: PiScrollLight,
    filledIcon: PiScrollFill,
    outlineIcon: PiScrollLight,
    href: "/applications",
  },
];

export const SALES_DATA: SalesData[] = [
  { month: "Jan", value: 35000000, type: "inflow" },
  { month: "Feb", value: 28000000, type: "commission" },
  { month: "Mar", value: 32000000, type: "mrr" },
  { month: "Apr", value: 25000000, type: "gmv" },
  { month: "May", value: 45000000, type: "inflow" },
  { month: "Jun", value: 38000000, type: "commission" },
  { month: "Jul", value: 42000000, type: "mrr" },
  { month: "Aug", value: 35000000, type: "gmv" },
  { month: "Sep", value: 30000000, type: "inflow" },
];

export const METRICS: MetricData[] = [
  {
    title: "Total Inflow",
    value: "₦120,000,000.00",
    change: 2.5,
    changeType: "increase",
    color: "text-blue-600",
  },
  {
    title: "MRR",
    value: "₦50,000,000.00",
    change: 2.7,
    changeType: "increase",
    color: "text-green-600",
  },
  {
    title: "Commission Revenue",
    value: "₦200,000,000.00",
    change: 0.5,
    changeType: "increase",
    color: "text-cyan-600",
  },
  {
    title: "GMV",
    value: "₦100,000,000.00",
    change: 0.5,
    changeType: "decrease",
    color: "text-red-600",
  },
];

export const PROPERTY_LISTINGS: PropertyListing[] = [
  {
    id: "1",
    title: "Urban Prime Plaza Premiere",
    image: "/api/placeholder/400/300",
    category: "most-clicked",
  },
  {
    id: "2",
    title: "Urban Prime Plaza Premiere",
    image: "/api/placeholder/400/300",
    category: "most-watchlisted",
  },
  {
    id: "3",
    title: "Urban Prime Plaza Premiere",
    image: "/api/placeholder/400/300",
    category: "hottest-listing",
  },
];
