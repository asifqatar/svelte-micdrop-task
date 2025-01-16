<script>
  import { Accordion, AccordionItem } from "flowbite-svelte";
  import { ClockSolid, MapPinAltSolid } from "flowbite-svelte-icons";
  import ClubLogo from "@/assets/svg/club-logo.svg";
  import Button from "@/components/Button/Button.svelte";

  import barCode from "@/assets/svg/barcode.svg";
  import CautionIcon from "@/assets/svg/caution.svg";
  import userImage from "@/assets/svg/user-image.svg";
  import imageUploaded from "@/assets/images/image-uploaded.png";
  import CustomDropdown from "@/components/CustomDropdown.svelte";

  let selectOption;
  let options = [{ label: "Other showtimes", value: "Other showtimes" }];
</script>

<section>
  <div class="flex flex-col justify-center items-center text-center">
    <img src={CautionIcon} alt="caution-icon" />

    <p class="text-xl my-3">Venue info</p>
    <p class="w-4/5 md:w-2/3 text-sm text-center my-2 text-gray-500 font-light">
      Displayed on all ticket pages, emailed and printed tickets. This could be
      show FAQs, venue parking information, accessibility, club rules, etc.
    </p>
  </div>

  <div class="flex flex-col lg:flex-row gap-2 my-5">
    <!-- first-div -->
    <div class="flex flex-col flex-1 p-4 border rounded-lg max-h-max">
      <div class="flex flex-col lg:flex-row gap-4 p-2">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img src={imageUploaded} class="rounded" />
        <div class="flex flex-col">
          <p class="text-base md:text-lg font-semibold">
            The 88 Show with This Guy! What A Long Name For A Show!
          </p>
          <div class="flex flex-col gap-2 my-4">
            <div class="flex items-center">
              <ClockSolid class="mr-2" color="gray" />
              <div class="flex flex-col text-sm">
                <span class="text-black">11:00PM @ The Crow - Main Stage</span>
              </div>
            </div>
            <div class="flex items-center">
              <MapPinAltSolid class="mr-2" color="gray" />
              <span class="flex flex-col text-sm">
                7702 Santa Monica Blvd, <br />
                Los Angeles, CA 90046
              </span>
            </div>
            <CustomDropdown {options} selected={selectOption} />
          </div>
        </div>
      </div>
      <Accordion class="rounded-none border-none" flush>
        <AccordionItem>
          <span slot="header" class="text-xs font-normal flex gap-2">
            <span class="my-auto">
              General Admission <br />
              $15 + $2.83 fee
            </span>
          </span>
        </AccordionItem>
        <AccordionItem>
          <span slot="header" class="text-xs font-normal flex gap-2">
            <span class="my-auto">
              VIP Booth Seat <br />
              $30 + $4.03 fee
            </span>
          </span>
        </AccordionItem>
        <AccordionItem>
          <span slot="header" class="text-xs font-normal flex gap-2">
            <span class="my-auto">
              Mezzanine <br />
              $30 + $4.03 fee
            </span>
          </span>
          <p class="text-xs text-gray-500">
            Avery Pearson and his band of merry maniacs take over the Main Stage
            at The Crow every Friday for their own brand of whatever the fuck
            this show is about. This is the main description of the show. It
            could go on for a while. Avery Pearson and his band of merry maniacs
            take over the Main Stage at The Crow every Friday for their own
            brand of whatever the fuck this show is about. This is the main
            description of the show. It could go on for a while. Avery Pearson
            and his band of merry maniacs take over the Main Stage at The Crow
            every Friday for their own brand of whatever the fuck this show is
            about. This is the main description of the show. It could go on for
            a while.
            <br />
            <br />
            Avery Pearson and his band of merry maniacs take over the Main Stage
            at The Crow every Friday for their own brand of whatever the fuck this
            show is about. This is the main description of the show. It could go
            on for a while. Avery Pearson and his band of merry maniacs take over
            the Main Stage at The Crow every Friday for their own brand of whatever
            the fuck this show is about. This is the main description of the show.
            It could go on for a while. Avery Pearson and his band of merry maniacs
            take over the Main Stage at The Crow every Friday for their own brand
            of whatever the fuck this show is about. This is the main description
            of the show. It could go on for a while.
          </p>
        </AccordionItem>
        <AccordionItem>
          <span slot="header" class="text-black font-normal flex gap-2">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={userImage} alt="user-image" />
            <span class="my-auto"> Garrick Bernard </span>
          </span>
        </AccordionItem>
        <AccordionItem>
          <span slot="header" class="text-black font-normal flex gap-2">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={userImage} alt="user-image" />
            <span class="my-auto"> Gibran Saleem </span>
          </span>
        </AccordionItem>
        <AccordionItem>
          <span slot="header" class="text-black font-normal flex gap-2">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={userImage} alt="user-image" />
            <span class="my-auto"> Grace Lusk </span>
          </span>
        </AccordionItem>
      </Accordion>
    </div>

    <!-- second-div -->
    <div class="w-full lg:w-2/5 flex flex-col justify-center text-center">
      <div
        class="w-full bg-[#3D3434] mb-5 p-6 flex justify-center items-center rounded-lg"
      >
        <img src={ClubLogo} alt="club-logo" />
      </div>
      <p class="text-xl my-2">Hey Andrew Reynoldshire-Berksome!</p>
      <p class="text-md font-light my-2">You’ve got tickets.</p>
      <div class="flex gap-4 items-center mx-auto my-5">
        <img src={barCode} alt="bar-code" />
        <span class="text-sm text-left text-gray-500 font-light">
          General Admission x 6 <br />
          VIP x 4
        </span>
      </div>
      <p class="text-md my-2">
        Friday Night Laughs featuring Ryan <br /> Bryans and friends!
      </p>
      <div class="flex flex-col lg:flex-row gap-6 justify-between">
        <div class="flex items-center">
          <ClockSolid size="xs" color="gray" />
          <div class="flex flex-col text-xs text-gray-500">
            <span class="text-black">11:00PM Fri 18 Aug, 2024</span>
            <span>@ The Crow - Main Stage</span>
          </div>
        </div>
        <div class="flex items-center">
          <MapPinAltSolid size="xs" color="gray" />
          <span class="flex flex-col text-xs text-gray-500">
            7702 Santa Monica Blvd, <br />
            Los Angeles, CA 90046
          </span>
        </div>
      </div>
      <div
        class="w-full bg-green-200 p-4 my-5 flex flex-col gap-2 text-xs text-left rounded-lg border-2 border-dashed border-green-300"
      >
        <span>
          What are the show’s COVID protocols?
          <br />
          Proof of vaccination is required upon entry. The name on your vaccination
          card must match the one on your ID.</span
        >
        <span>
          Is there an age requirement?
          <br />
          Yes, the venue serves alcohol, so there is a strict 21+ age requirement
          unless otherwise specified.</span
        >
        <span>
          Is there a food/drink minimum?
          <br />
          No, there is not a drink minimum but it would be great for you to get a
          drink to support Bar Lubitsch - we love them for letting us put this show
          on!</span
        >
        <span>
          What’s up with parking?
          <br />
          There's plenty of street parking around Bar Lubitsch, and a paid lot just
          a few doors down.</span
        >
        <span>
          What are the show’s COVID protocols?
          <br />
          Proof of vaccination is required upon entry. The name on your vaccination
          card must match the one on your ID.</span
        >
        <span>
          Is there an age requirement?
          <br />
          Yes, the venue serves alcohol, so there is a strict 21+ age requirement
          unless otherwise specified.</span
        >
        <span>
          Is there a food/drink minimum?
          <br />
          No, there is not a drink minimum but it would be great for you to get a
          drink to support Bar Lubitsch - we love them for letting us put this show
          on!</span
        >
        <span>
          What’s up with parking?
          <br />
          There's plenty of street parking around Bar Lubitsch, and a paid lot just
          a few doors down.</span
        >
      </div>

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
    </div>
  </div>

  <div class="flex justify-center items-center">
    <Button size="xl" className="w-full md:max-w-md">ok</Button>
  </div>
</section>
