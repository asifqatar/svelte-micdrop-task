<script>
  import Button from "@/components/Button/Button.svelte";
  import Card from "@/components/Card.svelte";
  import {
    Accordion,
    AccordionItem,
    Checkbox,
    Input,
    Label,
  } from "flowbite-svelte";

  import { ROLE_PERMISSION_LIST } from "@/utils/utils";
  import { z } from "zod";

  const roleSchema = z.object({
    name: z
      .string()
      .min(1, "Role name is required")
      .max(50, "Role name should be less than 50 characters"),
    permissions: z
      .array(z.string())
      .nonempty("At least one permission is required"),
  });

  const role_list = ROLE_PERMISSION_LIST;

  // Reactive variables for form state and errors
  let formData = {
    name: "",
    permissions: [],
  };

  let errors = {};

  // Function to handle form submission
  function handleSubmit() {
    // Clear previous errors
    errors = {};

    try {
      // Validate form data using the Zod schema
      roleSchema.parse(formData);
      console.log("Form submitted successfully:", formData);
    } catch (e) {
      if (e instanceof z.ZodError) {
        // Populate errors based on Zod validation
        e.errors.forEach((error) => {
          errors[error.path[0]] = error.message;
        });
      }
      console.log("Form validation failed:", errors);
    }
  }

  // Function to handle checkbox changes
  function handleCheckboxChange(item) {
    if (formData.permissions.includes(item)) {
      formData.permissions = formData.permissions.filter(
        (permission) => permission !== item
      );
    } else {
      formData.permissions.push(item);
    }
  }
</script>

<Card>
  <p class="my-5">Create Role</p>

  <div class="mb-3">
    <Label for="name" class="block mb-2">Name</Label>
    <Input
      id="name"
      size="lg"
      placeholder="Box Office"
      bind:value={formData.name}
    />

    {#if errors.name}
      <p class="text-red-500 text-sm">{errors.name}</p>
    {/if}
  </div>
  <p class="my-2 text-2xl text-gray-500 font-light">Permissions</p>

  <Accordion class="rounded-none border-none" flush>
    {#each role_list as role, index}
      <AccordionItem value={index.toString()}>
        <div slot="header" class="flex">
          {#if role.icon}
            <img class="mr-4 my-auto" src={role.icon} alt={role.title} />
            <!-- <svelte:component this={role.icon} class="h-5 w-5 mr-2" /> -->
          {/if}
          <div class="flex flex-col">
            <span class="my-auto text-sm font-normal text-black"
              >{role.title}</span
            >
            <span class="text-xs font-light">{role.description}</span>
          </div>
        </div>

        <div class="flex flex-col px-4">
          {#each role.checkbox as item, index}
            <Checkbox
              class="font-normal my-2"
              on:change={() => handleCheckboxChange(item)}
              checked={formData.permissions.includes(item)}>{item}</Checkbox
            >
          {/each}
        </div>
      </AccordionItem>
    {/each}
  </Accordion>

  {#if errors.permissions}
    <p class="text-red-500 text-sm">{errors.permissions}</p>
  {/if}

  <div class="flex gap-4 my-5">
    <Button on:click={handleSubmit}>Save changes</Button>
    <Button strokebtn>Cancel</Button>
  </div>
</Card>
