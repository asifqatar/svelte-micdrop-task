import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import EventIcon from "@/assets/svg/role/event.svg";
import BookingIcon from "@/assets/svg/role/booking.svg";
import EmailIcon from "@/assets/svg/role/emails.svg";
import VenueIcon from "@/assets/svg/role/venue.svg";
import PayoutIcon from "@/assets/svg/role/payout.svg";
import MarketingIcon from "@/assets/svg/role/marketing.svg";
import OrdersIcon from "@/assets/svg/role/orders.svg";
import OrganisationIcon from "@/assets/svg/role/organisation.svg";
import ReportingIcon from "@/assets/svg/role/reporting.svg";

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function truncateTitle(title, maxLength) {
  if (title.length > maxLength) {
    return title.slice(0, maxLength) + "...";
  }
  return title;
}

export function convertToCustomDateFormat(isoString) {
  const date = new Date(isoString);

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const customDate = new Date(year, month, day);

  return customDate;
}


export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function getDays(params) {
  if (params === "weeks") {
    return [
      { value: "monday", label: "Monday" },
      { value: "tuesday", label: "Tuesday" },
      { value: "wednesday", label: "Wednesday" },
      { value: "thursday", label: "Thursday" },
      { value: "friday", label: "Friday" },
    ];
  } else {
    return Array.from({ length: 31 }, (_, i) => {
      const day = i + 1;
      const suffix =
        day % 10 === 1 && day !== 11
          ? "st"
          : day % 10 === 2 && day !== 12
            ? "nd"
            : day % 10 === 3 && day !== 13
              ? "rd"
              : "th";
      return {
        value: day.toString(),
        label: day + suffix,
      };
    });
  }
}

// Function to get days number options based on selected time unit
export function getDaysNumberOptions(timeUnit) {
  if (timeUnit === "months") {
    return Array.from({ length: 12 }, (_, i) => ({
      value: (i + 1).toString(),
      label: (i + 1).toString(),
    }));
  } else if (timeUnit === "weeks") {
    return Array.from({ length: 10 }, (_, i) => ({
      value: (i + 1).toString(),
      label: (i + 1).toString(),
    }));
  } else {
    return Array.from({ length: 31 }, (_, i) => ({
      value: (i + 1).toString(),
      label: (i + 1).toString(),
    }));
  }
}

export const ROLE_PERMISSION_LIST = [
  {
    icon: EventIcon,
    title: "Event creation",
    description:
      "Allow users to enter event info, create tickets & customize order forms",
    checkbox: [
      "Create Events",
      "Edit Event Details",
      "Manage event status",
      "Manage tickets",
      "Manage Collections",
    ],
  },
  {
    icon: BookingIcon,
    title: "Booking",
    description:
      "Allow users to manage performers, their invitations and statuses",
    checkbox: [
      "Access the roster page and view performer profiles",
      "Edit performer profiles",
      "Send booking invitations",
      "Manually confirm/decline performers to spots",
      "Send avails requests"
    ],
  },
  {
    icon: VenueIcon,
    title: "Venue creation",
    description: "Allow users to create new venues",
    checkbox: ["Add/edit/delete venues"],
  },
  {
    icon: MarketingIcon,
    title: "Marketing",
    description:
      "Sell more tickets by creating campaigns, tracking engagements, etc.",
    checkbox: [
      "Access social media posts",
      "Manage tracking links",
      "Manage promo codes",
    ],
  },
  {
    icon: OrdersIcon,
    title: "Orders & attendees",
    description:
      "Allow users to view, update & refund orders, manage attendee guest or waitlists & release tickets",
    checkbox: [
      "Add attendees",
      "Manage orders, refunds, transfers and attendees",
      "View list of attendees",
      "Check in attendees",
      "Resend confirmation emails",
      "Override ticket restrictions",
      "Sell tickets at the door",
      "Revoke and reissue barcodes",
    ],
  },
  {
    icon: OrganisationIcon,
    title: "Organization",
    description:
      "Keep your users organized with assigned permissions per user, enable access to APIs & extensions",
    checkbox: [
      "Manage organization members & permissions",
      "Edit organization infomation",
    ],
  },
  {
    icon: EmailIcon,
    title: "Contacts",
    description:
      "Keep our users in the loop, select which emails you would like them to receive",
    checkbox: [
      "Email attendees",
      "Email/SMS performers",
    ],
  },
  {
    icon: ReportingIcon,
    title: "Reporting",
    description:
      "Allow users to access, filter & export data across your organization",
    checkbox: [
      "Access reports pages",
    ],
  },
  {
    icon: PayoutIcon,
    title: "Payouts & billing",
    description:
      "Users can configure payout methods, manage event payment options & track financials with reporting",
    checkbox: [
      "Manage financial accounts (Stripe)"
    ],
  },
];