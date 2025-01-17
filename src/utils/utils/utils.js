import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function convertToDate(value) {
  return value ? new Date(value).toDateString() : null
}

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

export function convertToCustomDateTimeFormat(isoDateString) {
  const date = new Date(isoDateString);
  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes()
    )
  );
}

export function formatHour(hour) {
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;
  return `${displayHour} ${suffix}`;
}

export const formatDateTime = (dateTimeString, timeZone = "UTC") => {
  const options = {
    weekday: "short", // Mon, Tue, etc.
    year: "numeric", // 2024
    month: "short", // Dec
    day: "numeric", // 12
    hour: "numeric", // 11
    minute: "numeric", // 00
    hour12: true, // 11:00 PM format
    timeZone: timeZone, // Account for the timezone, defaults to 'UTC'
  };

  const date = new Date(dateTimeString);

  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const formatTimeline = (startDateTime) => {
  const formatHour = (date) => {
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const suffix = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${suffix}`;
  };

  const start = formatHour(new Date(startDateTime));
  return `${start}`;
};

export function formatTimeRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  function formatTime(date) {
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutesStr + " " + ampm;
  }
  const startTime = formatTime(start);
  const endTime = formatTime(end);
  return `${startTime} - ${endTime}`;
}

export const getDay = (dateString) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date(dateString);
  return days[date.getUTCDay()];
};

export const getMonth = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(dateString);
  return months[date.getUTCMonth()];
};

export const getDateOfMonth = (dateString) => {
  const date = new Date(dateString);
  return date.getUTCDate();
};


export function handleConvertToDate(value) {
  return value ? new Date(value).toDateString() : null
  
}