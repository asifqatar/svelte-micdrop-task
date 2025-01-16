<script context="module">
  import Input from "./Input.svelte";
  import { Story, Template } from "@storybook/addon-svelte-csf";

  import ShareIcon from "../../assets/svg/share-08.svg";
  import Pin from "./../../assets/icons/tick-01.png";

  export const meta = {
    title: "Components/Input",
    component: Input,
    argTypes: {
      type: { control: "text" },
      label: { control: "text" },
      placeholder: { control: "text" },
      className: { control: "text" },
      id: { control: "text" },
      name: { control: "text" },
      maxlength: { control: "number" },
      minlength: { control: "number" },
      required: { control: "boolean" },
      disabled: { control: "boolean" },
      optional: { control: "boolean" },
      errorText: { control: "text" },
    },
  };

  const handleInput = (event) => {
    const value = event.target.value;
    console.log(value);
  };
</script>

<Template let:args>
  <Input on:change={handleInput} {...args} />
</Template>

<Story
  name="Default Input"
  args={{
    label: "Default Input",
    type: "email",
    size: "full",
    placeholder: "Enter your name",
    errorText: "This is an error message",
    contentFloat: "left",
  }}
/>

<Story
  name="Text Component"
  args={{
    type: "Full Name",
    label: "Full Name",
    placeholder: "Enter your Full Name",
    errorText: "Please enter your Full Name",
    size: "full",
  }}
/>

<Story
  name="Email Input Component"
  args={{
    type: "email",
    label: "Email Input",
    placeholder: "Enter your Email",
    errorText: "Please enter correct email",
    size: "full",
  }}
/>

<Story name="Text Area">
  <Input
    type="textarea"
    id="texarea"
    name="textarea"
    label="Text Area"
    placeholder="Write a text here"
  />
</Story>

<Story
  name="Password"
  args={{
    type: "password",
    label: "Password",
    placeholder: "Please enter password",
    size: "medium",
    required: true,
    size: "full",
    helperText: "Password must be atleast 8 characters",
  }}
/>

<Story
  name="Last name"
  args={{ type: "text", label: "Last name", placeholder: "Mark" }}
/>

<Story
  name="Input with Helper Text"
  args={{
    type: "text",
    label: "Address",
    placeholder: "Enter Address here",
    size: "full",
    helperText: "Address should be Steet, City and Zip Code.",
  }}
/>

<Story
  name="Input Content Center"
  args={{
    type: "text",
    label: "Text Center",
    placeholder: "Input content Center",
    size: "full",
    contentFloat: "center",
  }}
/>

<Story
  name="Input with Icon"
  args={{
    type: "text",
    label: "Input with Icon",
    placeholder: "Input with Icon",
    size: "full",
    icon: Pin,
  }}
/>

<Story
  name="Credit Card"
  args={{
    type: "creditCardNumber",
    label: "Card number",
    placeholder: "1234 4567 7890 0123",
    size: "full",
    required: true,
    maxlength: 19,
    minlength: 19,
    errorText: "Please enter valid card number.",
  }}
/>

<Story
  name="Error for Required Field"
  args={{
    type: "text",
    label: "Required Field",
    placeholder: "Enter your text here",
    size: "full",
    required: true,
    errorText: "This field is required.",
  }}
/>

<Story
  name="Phone Number"
  args={{
    type: "phoneNumber",
    label: "Phone Number",
    placeholder: "xxx-xxx-xxxx",
    size: "full",
    required: true,
    maxlength: 12,
    minlength: 10,
    errorText: "Please enter valid phone number.",
  }}
/>

<Story
  name="Hint Message with Icon"
  args={{
    type: "text",
    label: "Optional Field",
    placeholder: "Hint message for optional field",
    size: "full",
    hintText: "You can share this with your friends",
    hintIcon: ShareIcon,
  }}
/>

<Story
  name="Readonly Field"
  args={{
    type: "text",
    label: "Readonly Field",
    placeholder: "Readonly Field",
    size: "full",
    readonly: true,
  }}
/>

<Story
  name="Controlled Input"
  args={{
    type: "text",
    label: "Controlled Input",
    placeholder: "Controlled Input",
    buttonText: "Edit",
    required: true,
    size: "full",
    errorText: "You can search here",

    controlled: true,
  }}
/>
