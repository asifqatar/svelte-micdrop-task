<script>
  import { z } from "zod";
  import Button from "@/components/Button/Button.svelte";
  import Card from "@/components/Card.svelte";
  import EventSearch from "@/components/search/EventSearch.svelte";
  import { Checkbox, Input, Label, Select } from "flowbite-svelte";

  // Define Zod schema for validation
  const userSchema = z.object({
    email: z.string().email("Invalid email address"),
    role: z.string().nonempty("User role is required"),
    hasLimitedAccess: z.boolean(),
    // selectedEvents: z.optional(),
  });

  let userForms = [
    {
      id: 1,
      email: "",
      role: "",
      hasLimitedAccess: false,
      selectedEvents: [],
      errors: {}, // To store validation errors
    },
  ];

  // Validate a single form and update errors
  const validateForm = (index) => {
    const form = userForms[index];
    const validation = userSchema.safeParse(form);

    if (!validation.success) {
      const errors = validation.error.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      userForms[index].errors = errors;
    } else {
      userForms[index].errors = {};
    }
  };

  // Check if all forms are valid
  $: isFormValid = userForms.every(
    (form) => Object.keys(form.errors).length === 0 && form.email && form.role
  );

  $: console.log("isFormValid", userForms, isFormValid);

  const handleSelect = (index, event) => {
    const item = event.detail;
    if (!userForms[index].selectedEvents.find((i) => i.id === item.id)) {
      userForms[index].selectedEvents = [
        ...userForms[index].selectedEvents,
        item,
      ];
    }
    validateForm(index); // Revalidate after selection
  };

  const handleRemove = (index, eventId) => {
    userForms[index].selectedEvents = userForms[index].selectedEvents.filter(
      (item) => item.id !== eventId
    );
    validateForm(index); // Revalidate after removal
  };

  const addUserForm = () => {
    userForms = [
      ...userForms,
      {
        id: userForms.length + 1,
        email: "",
        role: "",
        hasLimitedAccess: false,
        selectedEvents: [],
        errors: {},
      },
    ];
  };

  const removeUserForm = (index) => {
    userForms = userForms.filter((_, i) => i !== index);
  };

  const handleSubmit = () => {
    const hasErrors = userForms.some((_, i) => {
      validateForm(i);
      return Object.keys(userForms[i].errors).length > 0;
    });

    if (!hasErrors) {
      console.log("All forms are valid!", userForms);
    }
  };
</script>

<Card>
  <h2 class="text-2xl">Invite Users</h2>
  <span class="text-sm text-gray-500">
    Enter the email addresses of the users you’d like to add, then choose the
    role they should have within your organization.
  </span>

  {#each userForms as form, index}
    <div class="flex flex-col p-5 my-5 rounded">
      <div class="w-full flex flex-col lg:flex-row gap-5 items-start">
        <p># {index + 1}</p>
        <div class="w-full flex flex-col mb-5">
          <Label for={`email-${index}`} class="block mb-2">User email</Label>
          <Input
            id={`email-${index}`}
            type="email"
            size="lg"
            placeholder="Enter email address"
            bind:value={form.email}
            on:blur={() => validateForm(index)}
          />
          {#if form.errors.email}
            <p class="text-red-500 text-sm mt-1">{form.errors.email}</p>
          {/if}
          <div class="my-5">
            <Label>
              User role
              <Select
                class="mt-2 p-4"
                placeholder="Select a role"
                items={[
                  { value: "co-host", name: "Co-host" },
                  { value: "host", name: "Host" },
                ]}
                bind:value={form.role}
                on:change={() => validateForm(index)}
              />
            </Label>
            {#if form.errors.role}
              <p class="text-red-500 text-sm mt-1">{form.errors.role}</p>
            {/if}
          </div>
          <Checkbox
            bind:checked={form.hasLimitedAccess}
            on:change={() => validateForm(index)}
          >
            Limited event access
          </Checkbox>
          {#if form.hasLimitedAccess}
            <EventSearch
              placeholder="Select Event"
              on:select={(e) => handleSelect(index, e)}
            />
          {/if}
        </div>
        {#if index > 0}
          <Button danger on:click={() => removeUserForm(index)}>Remove</Button>
        {/if}
      </div>

      {#each form.selectedEvents as event, i}
        <div class="flex justify-between gap-1 items-center my-3">
          <div>
            <p class="font-normal">
              #{i + 1}
              {event.title}
            </p>
            <p class="text-sm text-gray-500 my-2">
              {event.date} • {event.time}
            </p>
          </div>
          <button
            on:click={() => handleRemove(index, event.id)}
            class="text-red-500 text-sm my-auto"
          >
            Remove
          </button>
        </div>
      {/each}
    </div>
  {/each}

  <hr class="my-5" />
  <!-- svelte-ignore a11y-invalid-attribute -->
  <a
    href="#"
    on:click|preventDefault={addUserForm}
    class="text-primary-500 my-5"
  >
    Add more user
  </a>

  <div class="flex my-5 gap-2">
    <Button on:click={handleSubmit} disabled={!isFormValid}
      >Save and invite</Button
    >
    <Button strokebtn>Cancel</Button>
  </div>
</Card>
