import clsx from "clsx";
import { twMerge } from "tailwind-merge";
const EventIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%202V4M6%202V4'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.05%2022C7.01949%2022%205.00424%2022%203.75212%2020.6464C2.5%2019.2927%202.5%2017.1141%202.5%2012.7568V12.2432C2.5%207.88594%202.5%205.70728%203.75212%204.35364C5.00424%203%207.01949%203%2011.05%203H12.95C16.9805%203%2018.9958%203%2020.2479%204.35364C21.4765%205.68186%2021.4996%207.80438%2021.5%2012'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3%208H21'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13%2018H21M17%2014V22'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const BookingIcon = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M17.2891%206C17.0128%206%2016.7478%206.10536%2016.5525%206.29289C16.3571%206.48043%2016.2474%206.73478%2016.2474%207V10C16.2474%2011.0609%2015.8084%2012.0783%2015.027%2012.8284C14.2456%2013.5786%2013.1858%2014%2012.0807%2014H7.91406C6.80899%2014%205.74919%2013.5786%204.96778%2012.8284C4.18638%2012.0783%203.7474%2011.0609%203.7474%2010V7C3.7474%206.73478%203.63765%206.48043%203.4423%206.29289C3.24695%206.10536%202.982%206%202.70573%206C2.42946%206%202.16451%206.10536%201.96916%206.29289C1.77381%206.48043%201.66406%206.73478%201.66406%207V10C1.66572%2011.5908%202.32473%2013.116%203.49647%2014.2409C4.66822%2015.3658%206.25697%2015.9984%207.91406%2016H8.95573V18H6.8724C6.59613%2018%206.33118%2018.1054%206.13583%2018.2929C5.94048%2018.4804%205.83073%2018.7348%205.83073%2019C5.83073%2019.2652%205.94048%2019.5196%206.13583%2019.7071C6.33118%2019.8946%206.59613%2020%206.8724%2020H13.1224C13.3987%2020%2013.6636%2019.8946%2013.859%2019.7071C14.0543%2019.5196%2014.1641%2019.2652%2014.1641%2019C14.1641%2018.7348%2014.0543%2018.4804%2013.859%2018.2929C13.6636%2018.1054%2013.3987%2018%2013.1224%2018H11.0391V16H12.0807C13.7378%2015.9984%2015.3266%2015.3658%2016.4983%2014.2409C17.6701%2013.116%2018.3291%2011.5908%2018.3307%2010V7C18.3307%206.73478%2018.221%206.48043%2018.0256%206.29289C17.8303%206.10536%2017.5653%206%2017.2891%206Z'%20fill='%231F2A37'/%3e%3cpath%20d='M8.95573%2013H11.0391C12.1441%2013%2013.2039%2012.5786%2013.9853%2011.8284C14.7667%2011.0783%2015.2057%2010.0609%2015.2057%209V4C15.2057%202.93913%2014.7667%201.92172%2013.9853%201.17157C13.2039%200.421427%2012.1441%200%2011.0391%200H8.95573C7.85066%200%206.79085%200.421427%206.00945%201.17157C5.22805%201.92172%204.78906%202.93913%204.78906%204V9C4.78906%2010.0609%205.22805%2011.0783%206.00945%2011.8284C6.79085%2012.5786%207.85066%2013%208.95573%2013ZM6.8724%204C6.8724%203.46957%207.09189%202.96086%207.48259%202.58579C7.87329%202.21071%208.40319%202%208.95573%202H11.0391C11.5916%202%2012.1215%202.21071%2012.5122%202.58579C12.9029%202.96086%2013.1224%203.46957%2013.1224%204V9C13.1224%209.53043%2012.9029%2010.0391%2012.5122%2010.4142C12.1215%2010.7893%2011.5916%2011%2011.0391%2011H8.95573C8.40319%2011%207.87329%2010.7893%207.48259%2010.4142C7.09189%2010.0391%206.8724%209.53043%206.8724%209V4Z'%20fill='%231F2A37'/%3e%3c/svg%3e";
const EmailIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.9984%207L3.77959%207.81253C2.90588%208.39501%202.46902%208.68625%202.23227%209.13041C1.99552%209.57457%201.99728%2010.0966%202.00078%2011.1406C2.00501%2012.3975%202.01669%2013.6782%202.04904%2014.9741C2.12578%2018.0487%202.16416%2019.586%203.29456%2020.7164C4.42496%2021.8469%205.98302%2021.8858%209.09913%2021.9637C11.0377%2022.0121%2012.9591%2022.0121%2014.8976%2021.9637C18.0138%2021.8858%2019.5718%2021.8469%2020.7022%2020.7164C21.8326%2019.586%2021.871%2018.0487%2021.9477%2014.9741C21.9801%2013.6782%2021.9917%2012.3975%2021.996%2011.1406C21.9995%2010.0966%2022.0012%209.57456%2021.7645%209.13041C21.5277%208.68625%2021.0909%208.39501%2020.2171%207.81253L18.9983%207'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3cpath%20d='M2%2010L8.91302%2014.1478C10.417%2015.0502%2011.169%2015.5014%2012%2015.5014C12.831%2015.5014%2013.583%2015.0502%2015.087%2014.1478L22%2010'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2012V6C5%204.11438%205%203.17157%205.58579%202.58579C6.17157%202%207.11438%202%209%202H15C16.8856%202%2017.8284%202%2018.4142%202.58579C19%203.17157%2019%204.11438%2019%206V12'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M10%2010H14M10%206H14'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const VenueIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M13.6177%2021.367C13.1841%2021.773%2012.6044%2022%2012.0011%2022C11.3978%2022%2010.8182%2021.773%2010.3845%2021.367C6.41302%2017.626%201.09076%2013.4469%203.68627%207.37966C5.08963%204.09916%208.45834%202%2012.0011%202C15.5439%202%2018.9126%204.09916%2020.316%207.37966C22.9082%2013.4393%2017.599%2017.6389%2013.6177%2021.367Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M15.5%2011H12M12%2011H8.5M12%2011V14.5M12%2011V7.5'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e";
const PayoutIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.016%202C18.9026%202%2018%204.68629%2018%208H20.016C20.9876%208%2021.4734%208%2021.7741%207.66455C22.0749%207.32909%2022.0225%206.88733%2021.9178%206.00381C21.6414%203.67143%2020.8943%202%2020.016%202Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M18%208.05426V18.6458C18%2020.1575%2018%2020.9133%2017.538%2021.2108C16.7831%2021.6971%2015.6161%2020.6774%2015.0291%2020.3073C14.5441%2020.0014%2014.3017%2019.8485%2014.0325%2019.8397C13.7417%2019.8301%2013.4949%2019.9768%2012.9709%2020.3073L11.06%2021.5124C10.5445%2021.8374%2010.2868%2022%2010%2022C9.71321%2022%209.45546%2021.8374%208.94%2021.5124L7.02913%2020.3073C6.54415%2020.0014%206.30166%2019.8485%206.03253%2019.8397C5.74172%2019.8301%205.49493%2019.9768%204.97087%2020.3073C4.38395%2020.6774%203.21687%2021.6971%202.46195%2021.2108C2%2020.9133%202%2020.1575%202%2018.6458V8.05426C2%205.20025%202%203.77325%202.87868%202.88663C3.75736%202%205.17157%202%208%202H20'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10%208C8.89543%208%208%208.67157%208%209.5C8%2010.3284%208.89543%2011%2010%2011C11.1046%2011%2012%2011.6716%2012%2012.5C12%2013.3284%2011.1046%2014%2010%2014M10%208C10.8708%208%2011.6116%208.4174%2011.8862%209M10%208V7M10%2014C9.12919%2014%208.38836%2013.5826%208.1138%2013M10%2014V15'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3c/svg%3e";
const MarketingIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%2018C20.2091%2018%2022%2014.4183%2022%2010C22%205.58172%2020.2091%202%2018%202C15.7909%202%2014%205.58172%2014%2010C14%2014.4183%2015.7909%2018%2018%2018Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M18%202C14.8969%202%208.46512%204.37761%204.77105%205.85372C3.07942%206.52968%202%208.17832%202%2010C2%2011.8217%203.07942%2013.4703%204.77105%2014.1463C8.46512%2015.6224%2014.8969%2018%2018%2018'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M11%2022L9.05674%2020.9303C6.94097%2019.7657%205.74654%2017.4134%206.04547%2015'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const OrdersIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.774%2018C21.5233%2018%2022.1193%2017.5285%2022.6545%2016.8691C23.7499%2015.5194%2021.9513%2014.4408%2021.2654%2013.9126C20.568%2013.3756%2019.7894%2013.0714%2019%2013M18%2011C19.3807%2011%2020.5%209.88071%2020.5%208.5C20.5%207.11929%2019.3807%206%2018%206'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M3.22596%2018C2.47666%2018%201.88067%2017.5285%201.34555%2016.8691C0.250087%2015.5194%202.04867%2014.4408%202.73465%2013.9126C3.43197%2013.3756%204.21058%2013.0714%205%2013M5.5%2011C4.11929%2011%203%209.88071%203%208.5C3%207.11929%204.11929%206%205.5%206'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M8.0838%2015.1112C7.06203%2015.743%204.38299%2017.0331%206.0147%2018.6474C6.81178%2019.436%207.69952%2020%208.81563%2020H15.1844C16.3005%2020%2017.1882%2019.436%2017.9853%2018.6474C19.617%2017.0331%2016.938%2015.743%2015.9162%2015.1112C13.5201%2013.6296%2010.4799%2013.6296%208.0838%2015.1112Z'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M15.5%207.5C15.5%209.433%2013.933%2011%2012%2011C10.067%2011%208.5%209.433%208.5%207.5C8.5%205.567%2010.067%204%2012%204C13.933%204%2015.5%205.567%2015.5%207.5Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3c/svg%3e";
const OrganisationIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M3%204.5C3%203.67157%203.67157%203%204.5%203H6.5C7.32843%203%208%203.67157%208%204.5V6.5C8%207.32843%207.32843%208%206.5%208H4.5C3.67157%208%203%207.32843%203%206.5V4.5Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M3%2017.5C3%2016.6716%203.67157%2016%204.5%2016H6.5C7.32843%2016%208%2016.6716%208%2017.5V19.5C8%2020.3284%207.32843%2021%206.5%2021H4.5C3.67157%2021%203%2020.3284%203%2019.5V17.5Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M7.99977%2018.5H20.9998M15.9998%205.5H7.99977M16.3233%207.67649L7.64844%2016.3513'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M16%204.5C16%203.67157%2016.6716%203%2017.5%203H19.5C20.3284%203%2021%203.67157%2021%204.5V6.5C21%207.32843%2020.3284%208%2019.5%208H17.5C16.6716%208%2016%207.32843%2016%206.5V4.5Z'%20stroke='%23252B37'%20stroke-width='1.5'/%3e%3cpath%20d='M18%2021L19.3883%2020.0537C20.4628%2019.3213%2021%2018.9551%2021%2018.5C21%2018.0449%2020.4628%2017.6787%2019.3883%2016.9463L18%2016'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const ReportingIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7%2017V13'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M12%2017V7'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M17%2017V11'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linecap='round'/%3e%3cpath%20d='M2.5%2012C2.5%207.52166%202.5%205.28249%203.89124%203.89124C5.28249%202.5%207.52166%202.5%2012%202.5C16.4783%202.5%2018.7175%202.5%2020.1088%203.89124C21.5%205.28249%2021.5%207.52166%2021.5%2012C21.5%2016.4783%2021.5%2018.7175%2020.1088%2020.1088C18.7175%2021.5%2016.4783%2021.5%2012%2021.5C7.52166%2021.5%205.28249%2021.5%203.89124%2020.1088C2.5%2018.7175%202.5%2016.4783%202.5%2012Z'%20stroke='%23252B37'%20stroke-width='1.5'%20stroke-linejoin='round'/%3e%3c/svg%3e";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function truncateTitle(title, maxLength) {
  if (title.length > maxLength) {
    return title.slice(0, maxLength) + "...";
  }
  return title;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function getDays(params) {
  if (params === "weeks") {
    return [
      { value: "monday", label: "Monday" },
      { value: "tuesday", label: "Tuesday" },
      { value: "wednesday", label: "Wednesday" },
      { value: "thursday", label: "Thursday" },
      { value: "friday", label: "Friday" }
    ];
  } else {
    return Array.from({ length: 31 }, (_, i) => {
      const day = i + 1;
      const suffix = day % 10 === 1 && day !== 11 ? "st" : day % 10 === 2 && day !== 12 ? "nd" : day % 10 === 3 && day !== 13 ? "rd" : "th";
      return {
        value: day.toString(),
        label: day + suffix
      };
    });
  }
}
function getDaysNumberOptions(timeUnit) {
  if (timeUnit === "months") {
    return Array.from({ length: 12 }, (_, i) => ({
      value: (i + 1).toString(),
      label: (i + 1).toString()
    }));
  } else if (timeUnit === "weeks") {
    return Array.from({ length: 10 }, (_, i) => ({
      value: (i + 1).toString(),
      label: (i + 1).toString()
    }));
  } else {
    return Array.from({ length: 31 }, (_, i) => ({
      value: (i + 1).toString(),
      label: (i + 1).toString()
    }));
  }
}
const ROLE_PERMISSION_LIST = [
  {
    icon: EventIcon,
    title: "Event creation",
    description: "Allow users to enter event info, create tickets & customize order forms",
    checkbox: [
      "Create Events",
      "Edit Event Details",
      "Manage event status",
      "Manage tickets",
      "Manage Collections"
    ]
  },
  {
    icon: BookingIcon,
    title: "Booking",
    description: "Allow users to manage performers, their invitations and statuses",
    checkbox: [
      "Access the roster page and view performer profiles",
      "Edit performer profiles",
      "Send booking invitations",
      "Manually confirm/decline performers to spots",
      "Send avails requests"
    ]
  },
  {
    icon: VenueIcon,
    title: "Venue creation",
    description: "Allow users to create new venues",
    checkbox: ["Add/edit/delete venues"]
  },
  {
    icon: MarketingIcon,
    title: "Marketing",
    description: "Sell more tickets by creating campaigns, tracking engagements, etc.",
    checkbox: [
      "Access social media posts",
      "Manage tracking links",
      "Manage promo codes"
    ]
  },
  {
    icon: OrdersIcon,
    title: "Orders & attendees",
    description: "Allow users to view, update & refund orders, manage attendee guest or waitlists & release tickets",
    checkbox: [
      "Add attendees",
      "Manage orders, refunds, transfers and attendees",
      "View list of attendees",
      "Check in attendees",
      "Resend confirmation emails",
      "Override ticket restrictions",
      "Sell tickets at the door",
      "Revoke and reissue barcodes"
    ]
  },
  {
    icon: OrganisationIcon,
    title: "Organization",
    description: "Keep your users organized with assigned permissions per user, enable access to APIs & extensions",
    checkbox: [
      "Manage organization members & permissions",
      "Edit organization infomation"
    ]
  },
  {
    icon: EmailIcon,
    title: "Contacts",
    description: "Keep our users in the loop, select which emails you would like them to receive",
    checkbox: [
      "Email attendees",
      "Email/SMS performers"
    ]
  },
  {
    icon: ReportingIcon,
    title: "Reporting",
    description: "Allow users to access, filter & export data across your organization",
    checkbox: [
      "Access reports pages"
    ]
  },
  {
    icon: PayoutIcon,
    title: "Payouts & billing",
    description: "Users can configure payout methods, manage event payment options & track financials with reporting",
    checkbox: [
      "Manage financial accounts (Stripe)"
    ]
  }
];
export {
  ROLE_PERMISSION_LIST as R,
  getDays as a,
  classNames as b,
  cn as c,
  getDaysNumberOptions as g,
  truncateTitle as t
};
