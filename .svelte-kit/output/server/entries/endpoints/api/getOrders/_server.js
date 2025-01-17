async function GET() {
  return new Response(
    JSON.stringify([
      {
        id: 1,
        orderId: "#01",
        date: "Fri, Jul 26, 2024",
        show: { name: "Jetpack Comedy", image: "src/assets/images/Avatar1.png" },
        customer: "Melissa Crew",
        no_tickets: "6",
        channel: { name: "Instagram", image: "src/assets/svg/insta.svg" },
        orderTotal: "$84"
      },
      {
        id: 1,
        orderId: "#02",
        date: "Fri, Jul 26, 2024",
        show: { name: "Jetpack Comedy", image: "src/assets/images/Avatar1.png" },
        customer: "Melissa Crew",
        no_tickets: "6",
        channel: { name: "Twitter / X", image: "src/assets/svg/x.svg" },
        orderTotal: "$84"
      },
      {
        id: 1,
        orderId: "#03",
        date: "Fri, Jul 26, 2024",
        show: { name: "Jetpack Comedy", image: "src/assets/images/Avatar1.png" },
        customer: "Melissa Crew",
        no_tickets: "6",
        channel: { name: "Instagram", image: "src/assets/svg/insta.svg" },
        orderTotal: "$84"
      },
      {
        id: 1,
        orderId: "#04",
        date: "Fri, Jul 26, 2024",
        show: { name: "Jetpack Comedy", image: "src/assets/images/Avatar1.png" },
        customer: "Melissa Crew",
        no_tickets: "6",
        channel: { name: "Eventbrite", image: "src/assets/svg/Eventbrite.svg" },
        orderTotal: "$84"
      },
      {
        id: 1,
        orderId: "#05",
        date: "Fri, Jul 26, 2024",
        show: { name: "Jetpack Comedy", image: "src/assets/images/Avatar1.png" },
        customer: "Melissa Crew",
        no_tickets: "6",
        channel: { name: "Facebook", image: "src/assets/svg/facebook.svg" },
        orderTotal: "$84"
      },
      {
        id: 1,
        orderId: "#06",
        date: "Fri, Jul 26, 2024",
        show: { name: "Jetpack Comedy", image: "src/assets/images/Avatar1.png" },
        customer: "Melissa Crew",
        no_tickets: "6",
        channel: { name: "Instagram", image: "src/assets/svg/facebook.svg" },
        orderTotal: "$84"
      },
      {
        id: 1,
        orderId: "#07",
        date: "Fri, Jul 26, 2024",
        show: { name: "Jetpack Comedy", image: "src/assets/images/Avatar1.png" },
        customer: "Melissa Crew",
        no_tickets: "6",
        channel: { name: "Instagram", image: "src/assets/svg/insta.svg" },
        orderTotal: "$84"
      }
    ])
  );
}
export {
  GET
};
