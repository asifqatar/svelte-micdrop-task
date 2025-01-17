<script>
  let selected = "This month";
  const periods = ["This week", "This month", "This year"];

  function selectPeriod(period) {
    selected = period;
  }
</script>

<div
  class="flex items-center justify-center border rounded-[8px] w-[180px] h-[36px] bg-gray-50 shadow-sm"
>
  <div class="border-r border-gray-300 pr-3">
    <button class="text-gray-500 hover:text-gray-500 pr-2">
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.75182 4.82781L5.28255 1.38324C5.53479 1.13678 5.54916 0.722349 5.31393 0.457482C5.07933 0.192617 4.68248 0.178275 4.43086 0.424738L0.862578 3.90657C0.613468 4.14976 0.476109 4.47562 0.475586 4.82591C0.475064 5.17619 0.611451 5.50246 0.85921 5.74639L4.41709 9.23885C4.53754 9.35688 4.69058 9.41538 4.8437 9.41561C5.0112 9.41586 5.17755 9.34671 5.30025 9.20874C5.53627 8.94458 5.52314 8.53076 5.27163 8.28289L1.75182 4.82781Z"
          fill="#6B7280"
        />
      </svg>
    </button>

    <button class="text-gray-500 hover:text-gray-500 px-1 py-3">
      <svg
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.09196 3.95154L1.53408 0.458985C1.28257 0.21242 0.886307 0.224925 0.650916 0.489097C0.414899 0.753268 0.427406 1.16775 0.67891 1.41497L4.19935 4.87015L0.66862 8.31481C0.41638 8.56128 0.402012 8.97573 0.637239 9.2406C0.760157 9.37894 0.926301 9.44859 1.0938 9.44884C1.24692 9.44907 1.40013 9.39102 1.52093 9.27335L5.08921 5.79141C5.3377 5.54821 5.47506 5.22235 5.47558 4.87205C5.4761 4.52176 5.33972 4.19548 5.09196 3.95154Z"
          fill="#6B7280"
        />
      </svg>
    </button>
  </div>

  <div class="relative">
    <button
      class="flex items-center text-gray-500 font-normal focus:outline-none text-sm ml-3"
    >
      {selected}
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-3"
      >
        <path
          d="M4.97169 5.56945C4.62663 5.56894 4.29159 5.42781 4.05296 5.18308L0.570926 1.61479C0.324452 1.36192 0.338792 0.966319 0.603019 0.73109C0.867244 0.49711 1.28235 0.510229 1.52818 0.762469L4.9736 4.29259L8.42953 0.772761C8.67611 0.520631 9.09191 0.508751 9.35478 0.744141C9.6183 0.980158 9.63212 1.3758 9.38489 1.62793L5.89223 5.18583C5.65222 5.42984 5.31676 5.56997 4.97169 5.56945Z"
          fill="#6B7280"
        />
      </svg>
    </button>
  </div>
</div>
