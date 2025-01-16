<script>
  import Button from "@/components/Button/Button.svelte";
  import ClubLogo from "@/assets/svg/club-logo.svg";
  import MessageIcon from "@/assets/svg/message-icon.svg";
</script>

<section>
  <div class="flex flex-col justify-center items-center text-center">
    <img src={MessageIcon} alt="message-icon" />

    <p class="text-2xl my-3">Avails message</p>
    <p class="w-2/3 text-center my-3 text-gray-500 font-normal">
      This message will appear in Avails Request messages sent to performers.
      Venue name and logo will be automatically included.
    </p>
    <div
      class="w-full bg-[#3D3434] my-5 p-6 flex justify-center items-center rounded-lg"
    >
      <img src={ClubLogo} alt="club-logo" />
    </div>
    <p class="text-2xl my-5">Hey Andy!</p>
    <p class="w-2/3 text-center my-3 text-2xl font-normal">
      Please update your avails for The Downtown Comedy Club.
    </p>
    <div
      class="bg-green-200 p-4 my-5 flex text-xl text-left rounded-lg border-4 border-dashed border-green-300"
    >
      Hey everyone! We have a new avails system! Please click the button and let
      us know when you’re available to perform next month. Thanks so much, we’ll
      send you invitations soon!
    </div>
    <Button size="xl">Submit avails</Button>
    <div
      class="w-full my-5 bg-[#3D3434] p-6 flex text-left flex-col rounded-lg"
    >
      <img class="w-20" src={ClubLogo} alt="club-logo" />
      <span class="text-white my-2 text-sm font-light"
        >© 2021 Comedy Co. All Rights Reserved.</span
      >
      <span class="text-white my-2 text-sm font-light"
        >Apt 22/12 Chestnut Street, Cremorne, Victoria, Australia, 3022</span
      >
    </div>
    <Button size="xl">ok</Button>
  </div>
</section>
