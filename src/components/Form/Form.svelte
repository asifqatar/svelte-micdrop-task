<script>
  import Button from "../Button/Button.svelte";
  import Input from "./../Input/Input.svelte";

  export let formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    stageName: "",
    location: "",
  };

  export let formErrors = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    stageName: "",
    location: "",
  };

  let form;

  const validateForm = () => {
    let isValid = true;

    if (!formData.firstName.trim()) {
      formErrors.firstName = "Please enter a valid name.";
      isValid = false;
    } else {
      formErrors.firstName = "";
    }

    if (!formData.lastName.trim()) {
      formErrors.lastName = "Please enter a valid name.";
      isValid = false;
    } else {
      formErrors.lastName = "";
    }

    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      formErrors.email = "Please enter a valid email address.";
      isValid = false;
    } else {
      formErrors.email = "";
    }

    if (formData.phone.trim() && !isValidPhoneNumber(formData.phone)) {
      formErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    } else {
      formErrors.phone = "";
    }

    if (formData.stageName.trim() && formData.stageName.length < 2) {
      formErrors.stageName = "Please enter a valid stage name.";
      isValid = false;
    } else {
      formErrors.stageName = "";
    }

    if (formData.location.trim() && formData.location.length < 2) {
      formErrors.location = "Please enter a valid location.";
      isValid = false;
    } else {
      formErrors.location = "";
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const isValidPhoneNumber = (phone) => {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(String(phone));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
      form.reset(); // Use the form reference to reset
    } else {
      console.log("Form has validation errors.");
    }
  };
</script>

<form
  bind:this={form}
  on:submit|preventDefault={handleSubmit}
  class="w-full mx-auto flex flex-col gap-6"
>
  <h2 class="text-2xl font-normal text-Text-Tartiary leading-6">Basic info</h2>
  <div class="flex justify-between gap-4">
    <Input
      label="First Name"
      id="firstName"
      name="firstName"
      placeholder="Peet"
      required
      bind:value={formData.firstName}
      className="w-full"
      size="full"
      errorText={formErrors.firstName}
    />
    <Input
      label="Last Name"
      id="lastName"
      name="lastName"
      placeholder="Guercio"
      required
      bind:value={formData.lastName}
      className="w-full"
      size="full"
      errorText={formErrors.lastName}
    />
  </div>

  <div class="flex justify-between gap-4">
    <Input
      label="Email address"
      type="email"
      id="email"
      name="email"
      placeholder="name@example.com"
      required
      bind:value={formData.email}
      className="w-full"
      size="full"
      errorText={formErrors.email}
    />

    <Input
      label="Phone"
      type="phoneNumber"
      id="phone"
      name="phone"
      placeholder="xxx-xxx-xxxx"
      required
      bind:value={formData.phone}
      className="w-full"
      size="full"
      errorText={formErrors.phone}
    />
  </div>

  <Input
    label="Stage name (optional)"
    type="text"
    id="stageName"
    name="stageName"
    placeholder="Stage name"
    bind:value={formData.stageName}
    size="full"
    buttonText="Edit"
    controlled
    errorText={formErrors.stageName}
    helperText="How you’ll be identified by club managers and displayed on event pages"
  />

  <Input
    label="Location"
    type="text"
    id="location"
    name="location"
    placeholder="New York, USA"
    required
    bind:value={formData.location}
    size="full"
    buttonText="Edit"
    controlled
    errorText={formErrors.location}
  />
  <div class="flex justify-between gap-4 mx-auto">
    <Button type="submit" className="">Save changes</Button>
    <Button strokebtn type="button" className="">Cancel</Button>
  </div>
</form>
