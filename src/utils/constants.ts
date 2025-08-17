import { Home, Building2, Users, FileText, Briefcase } from "lucide-react";
import type {
  NavigationItem,
  SalesData,
  MetricData,
  PropertyListing,
} from "../types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: "dashboard", label: "Dashboard", icon: Home, href: "/", active: true },
  { id: "listings", label: "Listings", icon: Building2, href: "/listings" },
  { id: "users", label: "Users", icon: Users, href: "/users" },
  { id: "request", label: "Request", icon: FileText, href: "/request" },
  {
    id: "applications",
    label: "Applications",
    icon: Briefcase,
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
