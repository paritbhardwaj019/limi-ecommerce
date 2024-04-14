import {
  LayersIcon,
  BarChart4,
  ShoppingCart,
  CreditCard,
  RefreshCcw,
  Truck,
  Check,
} from "lucide-react";

export const TEMP_PRIMARY_CARDS = [
  {
    label: "Today Orders",
    amount: 100.19,
    icon: LayersIcon,
    cashAmount: 20,
    cardAmount: 30,
    creditAmount: 50.19,
  },
  {
    label: "Yesterday Orders",
    amount: 100.19,
    icon: BarChart4,
    cashAmount: 20,
    cardAmount: 30,
    creditAmount: 50.19,
  },
  {
    label: "This Month",
    amount: 100.19,
    icon: ShoppingCart,
    cashAmount: 20,
    cardAmount: 30,
    creditAmount: 50.19,
  },
  {
    label: "Last Month",
    amount: 100.19,
    icon: CreditCard,
    cashAmount: 20,
    cardAmount: 30,
    creditAmount: 50.19,
  },
  {
    label: "All Time Sales",
    amount: 100.19,
    icon: CreditCard,
    cashAmount: 20,
    cardAmount: 30,
    creditAmount: 50.19,
  },
];

export const TEMP_ORDERS_CARDS = [
  {
    label: "Total Orders",
    value: 552,
    icon: ShoppingCart,
  },
  {
    label: "Orders Processing",
    value: 552,
    icon: RefreshCcw,
  },
  {
    label: "Orders Pending",
    value: 552,
    icon: Truck,
  },
  {
    label: "Orders Delivered",
    value: 552,
    icon: Check,
  },
];
