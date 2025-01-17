export const upComingEventsTableColumn = [
    {
      key: "date",
      title: "",
      sortable: false,
      customRender: (value) => {
        console.log(value, 'valuevaluevalue')
        const dateObj = new Date(value);
        const day = dateObj
          .toLocaleDateString("en-US", { weekday: "short" })
          .toUpperCase();
        const date = dateObj.getDate();
        const month = dateObj
          .toLocaleDateString("en-US", { month: "short" })
          .toUpperCase();
  
        return `
          <div class="flex flex-col pr-1">
            <div class="text-[10px] text-[#666C79] leading-[14px] font-normal">${day}</div>
            <div class="text-[#2563EB] text-[20px] font-[400] leading-[20px]">${date}</div>
            <div class="text-[10px] text-[#666C79] leading-[14px] font-normal">${month}</div>
          </div>
        `;
      },
    },
    {
      key: "show",
      title: "Show",
      customRender: (value) => {
        const series = value.series; 
        const moreEventsLink = series 
          ? `<div class="flex flex-row  gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.8587 7.39909C13.9529 7.53156 14 7.66969 14 7.82156C14 8.47609 13.1249 8.87489 11.3745 9.67242L10.238 10.1903C9.13653 10.6922 8.58573 10.9432 8 10.9432C7.41427 10.9432 6.86347 10.6922 5.76199 10.1903L4.62545 9.67242C2.87515 8.87489 2 8.47609 2 7.82156C2 7.66969 2.04711 7.53156 2.14133 7.39909M13.5845 10.8444C13.8615 11.0651 14 11.285 14 11.5454C14 12.2 13.1249 12.5987 11.3745 13.3963L10.238 13.9141C9.13653 14.4161 8.58573 14.667 8 14.667C7.41427 14.667 6.86347 14.4161 5.76199 13.9141L4.62545 13.3963C2.87515 12.5987 2 12.2 2 11.5454C2 11.285 2.13852 11.0651 2.41556 10.8444M5.76199 2.09771L4.62544 2.62306C2.87515 3.43211 2 3.83663 2 4.50065C2 5.16467 2.87515 5.56919 4.62545 6.37824L5.76199 6.90358C6.86347 7.41272 7.41427 7.66732 8 7.66732C8.58573 7.66732 9.13653 7.41272 10.238 6.90358L11.3745 6.37824C13.1249 5.56919 14 5.16467 14 4.50065C14 3.83663 13.1249 3.43211 11.3745 2.62306L10.238 2.09771C9.13653 1.58856 8.58573 1.33398 8 1.33398C7.41427 1.33398 6.86347 1.58856 5.76199 2.09771Z" stroke="#0284FE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="text-[#0284FE] text-[12px] leading-[16px] font-normal cursor-pointer">
          Event series
          </span>
          
          </div>
          ` 
          : '';
  
        return `
          <div class="flex flex-row  gap-3 pr-40">
            <div class="flex flex-col gap-2">
              <span class="text-[14px] text-[#0D1526] leading-[14px] font-[400] max-w-40 truncate">
                ${value.name}
              </span>
              <span class="text-gray-400 text-[12px] text-left leading-[16px] font-normal">
                ${value.showTime}
              </span>
              ${moreEventsLink} <!-- Render the link for series -->
            </div>
          </div>
        `;
      },
      sortable: false,
    },
  
  
    {
      key: "performers",
      title: "Performers",
      sortable: false,
      customRender: (performers) => {
        const maxVisible = 3;
  
        const visiblePerformers = performers.slice(0, maxVisible);
        const remainingCount = performers.length - maxVisible;
  
        return `
          <div class="flex items-center -space-x-2.5 ml-40">
            ${visiblePerformers
              .map((performer) => {
                return `
                  <img 
                    src="src/assets/images/Avatar1.png" 
                    alt="${performer.name}" 
                    class="w-8 h-8 rounded-full border-2 border-white" 
                  />
                `;
              })
              .join("")}
            ${
              remainingCount > 0
                ? `<div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-semibold border-2 border-white text-sm">
                    +${remainingCount}
                  </div>
                  `
                : ""
            }
          </div>
        `;
      },
    },
  
    {
      key: "seats",
      title: "Seats",
      sortable: false,
      customRender: (value) => {
        const current = value.current;
        const sale = value.sale;
        const percentage = ((current / sale) * 100).toFixed(2);
        let barColor = "bg-[#F66]";
  
        if (parseFloat(percentage) >= 70) {
          barColor = "bg-[#15A033]";
        } else if (parseFloat(percentage) >= 30) {
          barColor = "bg-[#FF922E]";
        }
  
        return `
          <div class="flex flex-col w-full mx-auto text-end justify-center gap-1.5">
            <div class="text-[#666C79] flex justify-end  text-[12px] leading-[16px] font-normal">${current}/${sale}</div>
    
            <div class="w-full h-[7px] bg-gray-200 rounded-full">
               <div 
                class="h-[7px] ${barColor} rounded-[10px]" 
                style="width: ${percentage}%;">
              </div>
  
            </div>
            <div class=" items-end text-[#666C79] text-[12px] leading-[16px] font-normal"> 2 in cart</div>
          </div>
        `;
      },
    },
  
    {
      key: "sale",  
      title: "Sale",
      sortable: false,
      customRender: (value) => {
        return `<span class="text-green-500 text-[16px] pl-2 ml-10 leading-[24px] text-end font-[400]">${value}</span>`;
      },
    },
  ];
  