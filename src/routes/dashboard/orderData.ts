export const OrderTableColumns = [
  {
    key: "orderId",
    title: "ORDER ID",
    sortable: false,
    customRender: (value) => {
      return `<div>
        <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value}</span>
      </div>`;
    },
  },
  {
    key: "date",
    title: "date of purchase",
    sortable: false,
    customRender: (value) => {
      return `<div>
        <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value}</span>
      </div>`;
    },
  },
  {
    key: "show",
    title: "EVENT",
    sortable: false,
    customRender: (value) => {
      return `<div class="flex items-center gap-6">
      <img src="${value.image}" alt="${value.name}" class="w-8 h-8 rounded-md" />
      <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value.name}</span>
    </div>`;
    },
  },
  {
    key: "customer",
    title: "customer",
    sortable: false,
    customRender: (value) => {
      return `<div>
      <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value}</span>
    </div>`;
    },
  },
  {
    key: "no_tickets",
    title: "no. of tickets",
    sortable: false,
    customRender: (value) => {
      return `<div>
      <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value}</span>
    </div>`;
    },
  },
  {
    key: "channel",
    title: "sales channel",
    sortable: false,
    customRender: (value) => {
      return  `<div class="flex items-center gap-6">
      <img src="${value.image}" alt="${value.name}" class="w-4 h-4 rounded-md" />
      <span class="text-Text-Secondary font-normal text-sm md:pr-4">${value.name}</span>
    </div>`;
    },
  },
  {
    key: "orderTotal",
    title: "order total",
    sortable: false,
    customRender: (value) => {
      return `<div>
      <span class="text-[#0E9F6E] font-normal text-sm md:pr-4">${value}</span>
    </div>`;
    },
  },
];
