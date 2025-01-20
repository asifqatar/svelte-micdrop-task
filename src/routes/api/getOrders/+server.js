import Instagram from "../../../assets/svg/insta.svg";
import X from "../../../assets/svg/x.svg";
import Eventbrite from "../../../assets/svg/Eventbrite.svg";
import Facebook from "../../../assets/svg/facebook.svg";
import Avatar from "../../../assets/svg/Avatar.svg";

export async function GET() {
  return new Response(
    JSON.stringify([
      {
        id: 1,
        orderId: "#0912",
        date: "Fri, Jul 26, 2024",
        show: { name: "Laugh Riot", image: Avatar },
        customer: "Melissa Crew",
        no_tickets: "6",
        channel: { name: "Instagram", image: Instagram },
        orderTotal: "$84",
      },
      {
        id: 2,
        orderId: "#0122",
        date: "Fri, Jul 26, 2024",
        show: { name: "Jetpack Comedy", image: Avatar },
        customer: "Anthony",
        no_tickets: "3",
        channel: { name: "Twitter / X", image: X },
        orderTotal: "$72",
      },
      {
        id: 3,
        orderId: "#02332",
        date: "Fri, Jul 26, 2024",
        show: { name: "Mister Vape", image: Avatar },
        customer: "Kelly Levine",
        no_tickets: "2",
        channel: { name: "Instagram", image: Instagram },
        orderTotal: "$48",
      },
      {
        id: 4,
        orderId: "#3231",
        date: "Fri, Jul 26, 2024",
        show: { name: "Jetpack Comedy", image: Avatar },
        customer: "Adam Clarkson",
        no_tickets: "1",
        channel: { name: "Eventbrite", image: Eventbrite },
        orderTotal: "$24",
      },
      {
        id: 5,
        orderId: "#36321",
        date: "Fri, Jul 26, 2024",
        show: { name: "The Nicole Show", image: Avatar },
        customer: "Mark Brunt",
        no_tickets: "5",
        channel: { name: "Facebook", image: Facebook },
        orderTotal: "$72",
      },
      {
        id: 6,
        orderId: "#753",
        date: "Fri, Jul 26, 2024",
        show: { name: "HaHa Haven", image: Avatar },
        customer: "Bruce Lane",
        no_tickets: "3",
        channel: { name: "Instagram", image: Facebook },
        orderTotal: "$121",
      }
    ])
  );
}
