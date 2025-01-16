<script>
  import AvailSettingsIcon from "@/assets/svg/avail-settings.svg";
  import CustomSettingsIcon from "@/assets/svg/custom-settings.svg";
  import Button from "@/components/Button/Button.svelte";
  import Card from "@/components/Card.svelte";
  import Input from "@/components/Input/Input.svelte";
  import CustomModal from "@/components/Modal/CustomModal.svelte";
  import AvailsSettings from "@/components/pages/settings/venue/add/availsSettings.svelte";
  import AvaialRequestContent from "@/components/pages/settings/venue/add/modals/avaialRequestContent.svelte";
  import SendRequestContent from "@/components/pages/settings/venue/add/modals/sendRequestContent.svelte";
  import VenueModalContent from "@/components/pages/settings/venue/add/modals/venueModalContent.svelte";
  import SetDisclaimers from "@/components/pages/settings/venue/add/setDisclaimers.svelte";
  import { writable } from "svelte/store";
  import { z } from "zod";

  import CustomDropzone from "@/components/CustomDropzone.svelte";
  import ErrorMessage from "@/components/Input/ErrorMessage.svelte";
  import { Accordion, AccordionItem, Label, Textarea } from "flowbite-svelte";
  import { PlusOutline, TrashBinOutline } from "flowbite-svelte-icons";

  import ModalOne from "@/assets/images/modal_1.png";
  import ModalTwo from "@/assets/images/modal_2.png";
  import ModalThree from "@/assets/images/modal_3.png";

  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here...",
  };

  let stages = [""];

  let showAvailModal = false;
  let showVenueModal = false;
  let showAvailRequest = false;
  let showSendRequest = false;
  //
  let showCannotDeleteModal = false;
  let showDeleteModal = false;

  // Form state
  let form = {
    venue_name: "",
    location: "",
    phone: "",
    description: "",
  };

  // Zod schema for validation
  const schema = z.object({
    venue_name: z.string().min(1, "Venue name is required."),
    location: z.string().min(1, "Location is required."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    // description: z
    //   .string()
    //   .min(10, "Description must be at least 10 characters.")
    //   ,
    stages: z.array(z.string().min(1, "Stage name cannot be empty.")),
  });

  // Error store
  const errors = writable({});

  // Handle form submit
  function handleSubmit(event) {
    event.preventDefault();
    errors.set({}); // Reset errors

    // Validate form data using Zod
    const result = schema.safeParse({ ...form, stages });

    if (result.success) {
      console.log("Form submitted successfully:", form);
      // Handle form submission logic (e.g., API call)
    } else {
      const validationErrors = result.error.format();
      errors.set(validationErrors);
    }
  }

  // Add a stage
  function addStage() {
    stages = [...stages, ""];
  }

  // Update stage value
  function updateStage(index, value) {
    stages[index] = value;
  }

  let selectedTags = [];
  const handleTagChange = (event) => {
    selectedTags = event.detail;
  };

  const deleteStage = (index) => {
    if (index === 0) return;
    stages = stages.filter((_, i) => i !== index);
  };

  function handleAction(label) {
    console.log(label + " action triggered");
  }
</script>

<Card>
  <CustomModal
    show={showAvailModal}
    size="xl"
    closeBtn
    on:cancel={() => handleAction("cancel")}
    on:confirm={() => handleAction("confirm")}
  >
    <img src={ModalOne} alt="modal-1" />
    <!-- <AvailModalContent /> -->
  </CustomModal>
  <!--  -->
  <CustomModal
    show={showVenueModal}
    size="full"
    closeBtn
    on:cancel={() => handleAction("cancel")}
    on:confirm={() => handleAction("confirm")}
  >
    <img src={ModalTwo} alt="modal-2" />

    <!-- <VenueModalContent /> -->
  </CustomModal>
  <CustomModal
    show={showAvailRequest}
    closeBtn
    on:cancel={() => handleAction("cancel")}
    on:confirm={() => handleAction("confirm")}
  >
    <AvaialRequestContent />
  </CustomModal>
  <CustomModal
    show={showSendRequest}
    closeBtn
    size="xl"
    on:cancel={() => handleAction("cancel")}
    on:confirm={() => handleAction("confirm")}
    style="width: 600px"
  >
    <SendRequestContent on:close={() => (showSendRequest = false)} />
  </CustomModal>

  <p class="text-lg">Add Venue</p>

  <form class="my-5" on:submit={handleSubmit}>
    <div class="mb-6">
      <Label for="venue_name" class="block mb-2">Venue name</Label>
      <Input
        id="venue_name"
        size="full"
        placeholder="Bar Lubitsh"
        bind:value={form.venue_name}
        buttonText="Edit"
        controlled
      />
      <ErrorMessage message={$errors.venue_name?._errors?.[0]} />
    </div>

    <div class="flex flex-col lg:flex-row lg:gap-4 w-full">
      <div class="mb-6 flex-1">
        <Label for="location" class="block mb-2">Location</Label>
        <Input
          id="location"
          size="full"
          placeholder="46, Real Estate, New Work, USA"
          bind:value={form.location}
          buttonText="Edit"
          controlled
        />
        <ErrorMessage message={$errors.location?._errors?.[0]} />
      </div>
      <div class="mb-6 flex-1">
        <Label for="phone" class="block mb-2">Phone</Label>
        <Input
          id="phone"
          size="full"
          placeholder="xxx-xxx-xxxx"
          bind:value={form.phone}
          buttonText="Edit"
          controlled
        />
        <ErrorMessage message={$errors.phone?._errors?.[0]} />
      </div>
    </div>

    <div class="w-full mb-6">
      <Label for="stage" class="block mb-2">Name of main stage(optional)</Label>
      <div class="w-full flex flex-col justify-start gap-4">
        {#each stages as stage, index}
          <div class="w-full flex">
            <Input
              className="w-full"
              key={index}
              size="full"
              placeholder={index === 0 ? "Main stage" : `Stage ${index}`}
              bind:value={stages[index]}
              on:input={(e) => updateStage(index, e.target.value)}
              buttonText="Edit"
              controlled
            />
            {#if index > 0}
              <button
                class="p-4 cursor-pointer"
                on:click|preventDefault={() => deleteStage(index)}
              >
                <TrashBinOutline class="my-auto text-red-600 " />
              </button>
            {/if}
          </div>
          <ErrorMessage message={$errors.stages?._errors?.[index]?.[0]} />
        {/each}
      </div>
      <button
        class="flex text-sm text-brand-Primary my-2 cursor-pointer"
        on:click|preventDefault={addStage}
      >
        <PlusOutline size="md" class="mr-2" />
        Add stage
      </button>
    </div>

    <div class="mb-6">
      <Label for="description" class="block mb-2">Description</Label>
      <Textarea
        {...textareaprops}
        bind:value={form.description}
        buttonText="Edit"
        controlled
      />
      <ErrorMessage message={$errors.description?._errors?.[0]} />
    </div>

    <div class="mb-6">
      <CustomDropzone label="Venue logos (optional)" showWider />
    </div>

    <div class="my-5">
      <Accordion class="rounded-none border-none" flush>
        <AccordionItem>
          <span slot="header" class="text-sm font-normal flex">
            <img
              src={CustomSettingsIcon}
              class="mr-2 my-auto"
              alt="CustomSettingsIcon"
            />
            <span class="my-auto text-black"
              >Set Disclaimers, FAQs & Custom messages</span
            >
          </span>
          <SetDisclaimers />
        </AccordionItem>
        <AccordionItem>
          <span slot="header" class="text-sm font-normal flex gap-2">
            <img
              src={AvailSettingsIcon}
              class="mr-2 my-auto"
              alt="CustomSettingsIcon"
            />
            <span class="my-auto text-black">Avails settings</span>
          </span>
          <AvailsSettings
            on:send:avail-request={() => (showAvailModal = !showAvailModal)}
          />
        </AccordionItem>
        <!-- <AccordionItem>
          <span slot="header" class="text-sm font-normal flex gap-2">
            <img
              src={OrgSettingsIcon}
              class="mr-2 my-auto"
              alt="CustomSettingsIcon"
            />
            <span class="my-auto text-black">Organization settings</span>
          </span>
        </AccordionItem> -->
      </Accordion>
    </div>

    <Button strokebtn className="w-full md:w-auto">Cancel</Button>
    <Button className="w-full md:w-auto" type="submit">Save Changes</Button>
    <Button
      className="w-full md:w-auto"
      on:click={() => (showCannotDeleteModal = !showCannotDeleteModal)}
      >Upcoming Venue</Button
    >
    <Button
      className="w-full md:w-auto"
      danger
      on:click={() => (showDeleteModal = !showDeleteModal)}>Delete Venue</Button
    >
  </form>

  <CustomModal show={showCannotDeleteModal} size="sm">
    <div class="flex flex-col justify-center items-center p-2">
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.2058 6C30.8921 2 25.1079 2 22.7942 6L0.814303 44C-1.49937 48 1.39273 53 6.02008 53H49.9799C54.6073 53 57.4994 48 55.1857 44L33.2058 6ZM28.1687 19C26.2321 19 24.6622 20.567 24.6622 22.5V31.5C24.6622 33.433 26.2321 35 28.1687 35C30.1053 35 31.6752 33.433 31.6752 31.5V22.5C31.6752 20.567 30.1053 19 28.1687 19ZM28.1687 38C26.2321 38 24.6622 39.567 24.6622 41.5C24.6622 43.433 26.2321 45 28.1687 45C30.1053 45 31.6752 43.433 31.6752 41.5C31.6752 39.567 30.1053 38 28.1687 38Z"
          fill="#FF922E"
        />
      </svg>

      <p class="my-5 text-lg">Cannot delete</p>
      <span class="text-sm font-light my-1 text-center"
        >You cannot delete a venue with upcoming events. You must move these
        events to another venue or delete them before you can delete this venue.</span
      >
      <Button
        className="w-full mt-8"
        on:click={() => (showCannotDeleteModal = !showCannotDeleteModal)}
        >Ok</Button
      >
    </div>
  </CustomModal>

  <CustomModal show={showDeleteModal} size="sm">
    <div class="flex flex-col justify-center items-center p-2">
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M33.2058 6C30.8921 2 25.1079 2 22.7942 6L0.814303 44C-1.49937 48 1.39273 53 6.02008 53H49.9799C54.6073 53 57.4994 48 55.1857 44L33.2058 6ZM28.1687 19C26.2321 19 24.6622 20.567 24.6622 22.5V31.5C24.6622 33.433 26.2321 35 28.1687 35C30.1053 35 31.6752 33.433 31.6752 31.5V22.5C31.6752 20.567 30.1053 19 28.1687 19ZM28.1687 38C26.2321 38 24.6622 39.567 24.6622 41.5C24.6622 43.433 26.2321 45 28.1687 45C30.1053 45 31.6752 43.433 31.6752 41.5C31.6752 39.567 30.1053 38 28.1687 38Z"
          fill="#FF922E"
        />
      </svg>

      <p class="my-5 text-lg">Are you sure?</p>
      <span class="text-sm font-light my-1 text-center"
        >This will delete the venue, all sales and event data, and remove it
        from all associated performers’ portals.</span
      >
      <div class="w-full flex gap-2">
        <Button
          className="w-full mt-8"
          strokebtn
          on:click={() => (showDeleteModal = !showDeleteModal)}>Cancel</Button
        >
        <Button
          className="w-full mt-8"
          danger
          on:click={() => (showDeleteModal = !showDeleteModal)}
          >Delete Venue</Button
        >
      </div>
    </div>
  </CustomModal>

  <!-- <Button
    className="w-full md:w-auto"
    on:click={() => (showAvailModal = !showAvailModal)}>Modal 1</Button
  >
  <Button
    className="w-full md:w-auto"
    on:click={() => (showVenueModal = !showVenueModal)}>Modal 2</Button
  >
  <Button
    className="w-full md:w-auto"
    on:click={() => (showAvailRequest = !showAvailRequest)}>Modal 3</Button
  >
  <Button
    className="w-full md:w-auto"
    on:click={() => (showSendRequest = !showSendRequest)}>Modal 4</Button
  > -->
</Card>
