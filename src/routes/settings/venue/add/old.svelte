<script>
  import AvailSettingsIcon from "@/assets/svg/avail-settings.svg";
  import CustomSettingsIcon from "@/assets/svg/custom-settings.svg";
  import OrgSettingsIcon from "@/assets/svg/org-settings.svg";
  import Button from "@/components/Button/Button.svelte";
  import Card from "@/components/Card.svelte";
  import Dropzone from "@/components/Dropzone.svelte";
  import CustomModal from "@/components/Modal/CustomModal.svelte";
  import AvailsSettings from "@/components/pages/settings/venue/add/availsSettings.svelte";
  import AvaialRequestContent from "@/components/pages/settings/venue/add/modals/avaialRequestContent.svelte";
  import AvailModalContent from "@/components/pages/settings/venue/add/modals/availModalContent.svelte";
  import SendRequestContent from "@/components/pages/settings/venue/add/modals/sendRequestContent.svelte";
  import VenueModalContent from "@/components/pages/settings/venue/add/modals/venueModalContent.svelte";
  import SetDisclaimers from "@/components/pages/settings/venue/add/setDisclaimers.svelte";
  import { writable } from "svelte/store";
  import { z } from "zod";

  import CustomDropzone from "@/components/CustomDropzone.svelte";
  import ErrorMessage from "@/components/Input/ErrorMessage.svelte";
  import {
    Accordion,
    AccordionItem,
    Input,
    Label,
    Textarea,
  } from "flowbite-svelte";
  import { PlusOutline } from "flowbite-svelte-icons";

  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here...",
  };

  let stages = ["", ""];

  let showAvailModal = false;
  let showVenueModal = false;
  let showAvailRequest = false;
  let showSendRequest = false;

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
    description: z
      .string()
      .min(10, "Description must be at least 10 characters."),
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
    <AvailModalContent />
  </CustomModal>
  <!--  -->
  <CustomModal
    show={showVenueModal}
    size="full"
    closeBtn
    on:cancel={() => handleAction("cancel")}
    on:confirm={() => handleAction("confirm")}
  >
    <VenueModalContent />
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
    <SendRequestContent />
  </CustomModal>

  <p class="text-lg">Add Venue</p>
  <CustomDropzone label="Venue logos (optional)" showWider />

  <form class="my-5" on:submit={handleSubmit}>
    <div class="mb-6">
      <Label for="venue_name" class="block mb-2">Venue name</Label>
      <Input
        id="venue_name"
        size="lg"
        placeholder="Bar Lubitsh"
        bind:value={form.venue_name}
      />
      <ErrorMessage message={$errors.venue_name?._errors?.[0]} />
    </div>

    <div class="flex flex-col lg:flex-row lg:gap-4 w-full">
      <div class="mb-6 flex-1">
        <Label for="location" class="block mb-2">Location</Label>
        <Input
          id="location"
          size="lg"
          placeholder="46, Real Estate, New Work, USA"
          bind:value={form.location}
        />
        <ErrorMessage message={$errors.location?._errors?.[0]} />
      </div>
      <div class="mb-6 flex-1">
        <Label for="phone" class="block mb-2">Phone</Label>
        <Input
          id="phone"
          size="lg"
          placeholder="xxx-xxx-xxxx"
          bind:value={form.phone}
        />
        <ErrorMessage message={$errors.phone?._errors?.[0]} />
      </div>
    </div>

    <div class="mb-6">
      <Label for="stage" class="block mb-2">Stage</Label>
      <div class="flex flex-col justify-start gap-4">
        {#each stages as stage, index}
          <Input
            key={index}
            size="lg"
            placeholder={index === 0 ? "Main stage" : `Stage ${index}`}
            bind:value={stages[index]}
            on:input={(e) => updateStage(index, e.target.value)}
          />
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
      <Label for="description" class="block mb-2">Venue Images</Label>
      <Dropzone />
    </div>

    <div class="mb-6">
      <Label for="description" class="block mb-2">Description</Label>
      <Textarea {...textareaprops} bind:value={form.description} />
      <ErrorMessage message={$errors.description?._errors?.[0]} />
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
        <AccordionItem open>
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
        <AccordionItem>
          <span slot="header" class="text-sm font-normal flex gap-2">
            <img
              src={OrgSettingsIcon}
              class="mr-2 my-auto"
              alt="CustomSettingsIcon"
            />
            <span class="my-auto text-black">Organization settings</span>
          </span>
        </AccordionItem>
      </Accordion>
    </div>

    <Button className="w-full md:w-auto" type="submit">Save Changes</Button>
  </form>
  <Button
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
  >
</Card>
