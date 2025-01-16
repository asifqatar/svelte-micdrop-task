<script>
  import Button from "@/components/Button/Button.svelte";
  import ErrorMessage from "@/components/Input/ErrorMessage.svelte";
  import { Label, Select, Textarea, Checkbox } from "flowbite-svelte";
  import { z } from "zod";
  import MoreInfoIcon from "@/assets/svg/more-info.svg";
  import DisclaimerImage from "@/assets/images/disclamier-popup.png";
  import FAQImage from "@/assets/images/faq-popup.png";
  import CustomMesageImage from "@/assets/images/custom_message_popup.png";
  import CustomModal from "@/components/Modal/CustomModal.svelte";
  import Input from "@/components/Input/Input.svelte";

  let checkbox_one = false;
  let checkbox_two = false;
  let hasCustomEmail = false;
  let hasCustomCheckout = false;
  //
  let disclaimerPopup = false;
  let faqPopup = false;
  let customMessagePopup = false;

  let textareaprops = {
    id: "description",
    name: "description",
    label: "Your description",
    rows: 4,
    placeholder: "Write text here...",
  };

  // Zod schema for form validation
  const schema = z.object({
    question_prompt: z
      .string()
      .min(1, { message: "Question prompt is required" }),
    selected_question_type: z
      .string()
      .min(1, { message: "Please select a question type" }),
    questions: z.array(
      z.string().min(1, { message: "Option cannot be empty" })
    ),
    disclaimer: z.string().min(1, { message: "Disclaimer is required" }),
    faq: z.string().min(1, { message: "FAQ is required" }),
    request_notification: z.string().min(1, {
      message: "Custom message in avails request notifications is required",
    }),
    booking_notification: z.string().min(1, {
      message: "Custom message in booking notifications is required",
    }),
    email_message: z.string().min(1, {
      message: "Custom email signup message on checkout page is required",
    }),
    avails_email_request: z.string().min(1, {
      message: "Custom message in avails request emails is required",
    }),
    inlcude_booking_emails: z.string().min(1, {
      message: "Include custom message in booking emails is required",
    }),
    venue_faqs: z.string().min(1, { message: "Venue FAQs is required" }),
  });

  let formData = {
    question_prompt: "",
    selected_question_type: "",
    questions: ["", ""],
    disclaimer: "",
    faq: "",
    request_notification: "",
    booking_notification: "",
    email_message: "",
    avails_email_request: "",
    inlcude_booking_emails: "",
    venue_faqs: "",
  };

  let formErrors = {};

  let questions_type = [
    { value: "mc", name: "Multiple choice" },
    { value: "yn", name: "Yes/No" },
    { value: "txt", name: "Text" },
  ];

  function addQuestion() {
    formData.questions = [...formData.questions, ""];
  }

  function updateQuestion(index, value) {
    formData.questions[index] = value;
  }

  function deleteOption(index) {
    formData.questions = formData.questions.filter((_, i) => i !== index);
  }

  function validateForm() {
    formErrors = {}; // Reset errors
    try {
      schema.parse(formData); // Zod validation
    } catch (error) {
      formErrors = error.formErrors.fieldErrors;
    }

    // Return whether the form is valid or not
    return Object.keys(formErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form is valid! Submitting...", formData);
    }
  }

  const handleAction = (value) => {
    console.log("value", value);
  };
</script>

<div class="p-4">
  <form class="my-5" on:submit={handleSubmit}>
    <div class="w-full p-6 mx-auto my-5 rounded-lg border">
      <div class="mb-6">
        <Label for="description" class="flex mb-2">
          <span class="my-auto">Disclaimer</span>
          <button
            class="ml-2 my-auto p-1"
            on:click|preventDefault={() => (disclaimerPopup = !disclaimerPopup)}
          >
            <img class="my-auto" src={MoreInfoIcon} alt="more-info" />
          </button>
        </Label>
        <Textarea {...textareaprops} bind:value={formData.disclaimer} />
        <ErrorMessage message={formErrors.disclaimer} />
      </div>

      <div class="mb-6">
        <Label for="description" class="flex mb-2">
          <span class="my-auto">Venue FAQs</span>
          <button
            class="ml-2 my-auto p-1"
            on:click|preventDefault={() => (faqPopup = !faqPopup)}
          >
            <img class="my-auto" src={MoreInfoIcon} alt="more-info" />
          </button>
        </Label>
        <Textarea {...textareaprops} bind:value={formData.venue_faqs} />
        <ErrorMessage message={formErrors.venue_faqs} />
      </div>
      <div class="mb-6">
        <Label for="description" class="block mb-2">
          <Checkbox bind:checked={hasCustomCheckout}>
            Custom email signup message on checkout page
          </Checkbox>
        </Label>
        {#if hasCustomCheckout}
          <Input
            size="full"
            placeholder="Join the mailing list for updates"
            bind:value={formData.email_message}
            buttonText="Edit"
            controlled
          />
          <ErrorMessage message={formErrors.email_message} />
        {/if}
      </div>
      <div class="mb-6">
        <Label for="description" class="flex mb-2">
          <Checkbox class="my-auto" bind:checked={hasCustomEmail}
            >Custom message in booking emails</Checkbox
          >
          <button
            class="ml-2 my-auto p-1"
            on:click|preventDefault={() =>
              (customMessagePopup = !customMessagePopup)}
          >
            <img class="my-auto" src={MoreInfoIcon} alt="more-info" />
          </button>
        </Label>
        {#if hasCustomEmail}
          <Textarea
            {...textareaprops}
            bind:value={formData.inlcude_booking_emails}
          />
          <ErrorMessage message={formErrors.inlcude_booking_emails} />
        {/if}
      </div>
      <div class="mb-6">
        <Checkbox class="font-normal" bind:checked={checkbox_one}
          >Ask for customer phone number during checkout</Checkbox
        >
      </div>

      {#if checkbox_one}
        <div class="mb-6">
          <Checkbox class="font-normal" bind:checked={checkbox_two}
            >Make phone number required</Checkbox
          >
        </div>
      {/if}
      <div class="flex justify-end gap-4">
        <Button className="px-6" strokebtn={true}>Cancel</Button>
        <Button className="px-6" type="submit">Create</Button>
      </div>
    </div>
  </form>

  <CustomModal
    show={disclaimerPopup}
    closeBtn
    on:cancel={() => handleAction("cancel")}
    on:confirm={() => handleAction("confirm")}
  >
    <div class="my-2">
      <img src={DisclaimerImage} alt="disclaimer-popup" />
    </div>
  </CustomModal>
  <CustomModal
    show={faqPopup}
    closeBtn
    on:cancel={() => handleAction("cancel")}
    on:confirm={() => handleAction("confirm")}
  >
    <div class="my-2">
      <img src={FAQImage} alt="faq-popup" />
    </div>
  </CustomModal>
  <CustomModal
    show={customMessagePopup}
    closeBtn
    on:cancel={() => handleAction("cancel")}
    on:confirm={() => handleAction("confirm")}
  >
    <div class="my-2">
      <img src={CustomMesageImage} alt="custom-message-popup" />
    </div>
  </CustomModal>
</div>
