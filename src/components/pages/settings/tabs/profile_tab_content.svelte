<script>
  import Button from "@/components/Button/Button.svelte";
  import CustomDropzone from "@/components/CustomDropzone.svelte";
  import ErrorMessage from "@/components/Input/ErrorMessage.svelte";
  import { Input, Label, Textarea } from "flowbite-svelte";
  import { writable } from "svelte/store";
  import { z } from "zod";

  // Form state and validation
  let form = {
    organization_name: "",
    email_address: "",
    phone: "",
    location: "",
    description: "",
  };

  // Validation schema using Zod
  const schema = z.object({
    organization_name: z.string().min(1, "Organization name is required."),
    email_address: z.string().email("Please enter a valid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    location: z.string().min(1, "Location is required."),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters."),
  });

  // Error handling
  const errors = writable({});

  // Handle form submit
  function handleSubmit(event) {
    event.preventDefault();
    errors.set({});

    // Validate form data
    const result = schema.safeParse(form);

    if (result.success) {
      console.log("Form submitted:", form);
    } else {
      const fieldErrors = result.error.format();
      errors.set(fieldErrors);
    }
  }

  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here...",
  };
</script>

<div>
  <CustomDropzone label="Upload logo" showWider />
  <form class="my-5" on:submit={handleSubmit}>
    <div class="mb-6">
      <Label for="organization_name" class="block mb-2">Organization name</Label
      >
      <Input
        id="organization_name"
        size="lg"
        bind:value={form.organization_name}
        placeholder="Jetpack"
      />
      {#if $errors.organization_name}
        <ErrorMessage message={$errors.organization_name._errors[0]} />
      {/if}
      <span class="text-xs text-gray-500">Visible to members</span>
    </div>

    <div class="flex flex-col lg:flex-row lg:gap-4 w-full">
      <div class="mb-6 flex-1">
        <Label for="email_address" class="block mb-2">Email address</Label>
        <Input
          id="email_address"
          size="lg"
          bind:value={form.email_address}
          placeholder="name@example.com"
          class="w-full"
        />
        {#if $errors.email_address}
          <ErrorMessage message={$errors.email_address._errors[0]} />
        {/if}
      </div>
      <div class="mb-6 flex-1">
        <Label for="phone" class="block mb-2">Phone</Label>
        <Input
          id="phone"
          size="lg"
          bind:value={form.phone}
          placeholder="xxx-xxx-xxxx"
          class="w-full"
        />

        {#if $errors.phone}
          <ErrorMessage message={$errors.phone._errors[0]} />
        {/if}
      </div>
    </div>

    <div class="mb-6">
      <Label for="location" class="block mb-2">Location</Label>
      <Input
        id="location"
        size="lg"
        bind:value={form.location}
        placeholder="46, Real Estate, New York, USA"
      />

      {#if $errors.location}
        <ErrorMessage message={$errors.location._errors[0]} />
      {/if}
    </div>

    <div class="mb-6">
      <Label for="description" class="block mb-2">Description</Label>
      <Textarea {...textareaprops} bind:value={form.description} />
      {#if $errors.description}
        <ErrorMessage message={$errors.description._errors[0]} />
      {/if}
    </div>

    <Button className="w-full md:w-auto" type="submit">Save Changes</Button>
  </form>
</div>
