export interface SalesData {
  month: string;
  value: number;
  type: "inflow" | "commission" | "mrr" | "gmv";
}

export interface MetricData {
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
  color: string;
}

export interface OverviewStats {
  total: string;
  active: string;
  archived: string;
}

export interface UserStats {
  total: string;
  riders: string;
  subscribers: string;
}

export interface PropertyListing {
  id: string;
  title: string;
  image?: string;
  images?: string[];
  category: "most-clicked" | "most-watchlisted" | "hottest-listing";
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType;
  href: string;
  active?: boolean;
}

export interface User {
  name: string;
  avatar?: string;
}
