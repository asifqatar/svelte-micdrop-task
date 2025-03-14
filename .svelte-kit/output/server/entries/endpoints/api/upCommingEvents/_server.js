const id = 1234;
const dashboard = [];
const tableData = [
  {
    id: 1,
    seats: {
      current: 875,
      sale: 1023
    },
    eventName: {
      name: "Jetpack Comedy",
      showTime: "12:30PM PST",
      image: "src/assets/images/Avatar1.png"
    },
    dateOfPurchase: "2024",
    sale: "$1482",
    percentage: "80",
    performers: [
      {
        name: "John Doe",
        email: "john@gmail.com",
        contactNumber: "123-456-7890",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      }
    ]
  },
  {
    id: 2,
    seats: {
      current: 2,
      sale: 10
    },
    eventName: {
      name: "Adrenaline",
      showTime: "12:30PM PST",
      image: "src/assets/images/Avatar1.png"
    },
    dateOfPurchase: "2024-07-15T12:25:10.000Z",
    sale: "$1482",
    percentage: "30",
    performers: [
      {
        name: "John Doe",
        email: "john@gmail.com",
        contactNumber: "123-456-7890",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      }
    ]
  },
  {
    id: 3,
    seats: {
      current: 500,
      sale: 1023
    },
    eventName: {
      name: "The Reading Out of Your Noteboo",
      showTime: "12:30PM PST",
      image: "src/assets/images/Avatar1.png"
    },
    dateOfPurchase: "2024-08-10T10:00:00.000Z",
    sale: "$1482",
    performers: [
      {
        name: "John Doe",
        email: "john@gmail.com",
        contactNumber: "123-456-7890",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      }
    ]
  },
  {
    id: 4,
    seats: {
      current: 2,
      sale: 10
    },
    eventName: {
      name: "Mister Vape Face Dies on Stage",
      showTime: "12:30PM PST",
      image: "src/assets/images/Avatar1.png"
    },
    dateOfPurchase: "2024-08-05T14:18:45.000Z",
    sale: "$1482",
    percentage: "40",
    performers: [
      {
        name: "John Doe",
        email: "john@gmail.com",
        contactNumber: "123-456-7890",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      }
    ]
  },
  {
    id: 5,
    seats: {
      current: 8,
      sale: 10
    },
    eventName: {
      name: "The Nicole Show",
      showTime: "12:30PM PST",
      image: "src/assets/images/Avatar1.png"
    },
    dateOfPurchase: "2024-09-20T09:30:15.000Z",
    stage: "Main",
    sale: "$1482",
    performers: [
      {
        name: "John Doe",
        email: "john@gmail.com",
        contactNumber: "123-456-7890",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      },
      {
        name: "Jane Smith",
        email: "jane@gmail.com",
        contactNumber: "987-654-3210",
        image: "src/assets/images/Avatar1.png"
      }
    ]
  }
];
const Data = {
  id,
  dashboard,
  tableData
};
function GET() {
  return new Response(JSON.stringify(Data), {
    headers: {
      "Content-Type": "application/json"
    }
  });
}
export {
  GET
};
