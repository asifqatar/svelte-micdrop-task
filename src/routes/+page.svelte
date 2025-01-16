<script>
  import Button from "../../src/components/Button/Button.svelte";
  import Form from "../components/Form/Form.svelte";
  import DatePicker from "../components/DatePicker/DatePicker.svelte";
  import Modal from "../components/Modal/Modal.svelte";
  import DateRangePicker from "./../components/DateRangePicker/DateRangePicker.svelte";

  import Pin from "./../assets/svg/pin.svg";
  import Badge from "../components/Badges/Badge.svelte";
  import CalendarContainer from "../components/Calendar/CalendarContainer/CalendarContainer.svelte";
  import FileDropzone from "./../components/FileDropzone/FileDropzone.svelte";
  import Cropzone from "../components/CroppingUI/CropZone.svelte";

  let modalOpen = false;

  const confirmModal = () => {
    modalOpen = true;
  };

  function onConfirm() {
    console.log("Item created");
    modalOpen = false;
  }

  function showModal() {
    modalOpen = true;
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col my-5">
  <h1>List of Links</h1>
  <ul>
    <li>
      <a href="/settings" class="text-xl text-blue-500 underline">Settings</a>
    </li>
    <li>
      <a href="/settings/profile" class="text-xl text-blue-500 underline"
        >Profile</a
      >
    </li>
    <li>
      <a href="/settings/invite-user" class="text-xl text-blue-500 underline"
        >Invite User</a
      >
    </li>
    <li>
      <a href="/settings/venue/add" class="text-xl text-blue-500 underline"
        >Add Venue</a
      >
    </li>
    <li>
      <a href="/settings/create-role" class="text-xl text-blue-500 underline"
        >Create Role</a
      >
    </li>
  </ul>
</div>

<div class="py-5">
  <FileDropzone />
</div>

<div class="py-5">
  <Cropzone shape="round" />
</div>

<div class="py-5">
  <CalendarContainer />
</div>

<div class="py-5">
  <DatePicker />
</div>
<div class="py-5">
  <DateRangePicker />
</div>
<section class="flex flex-col justify-center items-center flex-[0.6] py-20">
  <div class="flex space-x-3">
    <Button alert strokebtn on:click={confirmModal} beforeIcon={Pin}
      >Open Modal</Button
    >
  </div>
  <Modal
    show={modalOpen}
    title="Create Item"
    description="Are you sure you want to create this item?"
    closeBtn={true}
    actions={[
      {
        label: "Cancel",
        onClick: () => (modalOpen = false),
        strokebtn: true,
      },
      { label: "Confirm", onClick: onConfirm },
    ]}
  />

  <div class="py-5 flex gap-2">
    <Form />
  </div>

  <div class="py-5">
    <Badge on:click={showModal} status="success" size="large">modal</Badge>
    <Badge
      on:click={() => alert("This is Alert Badge")}
      status="danger"
      size="large">alert</Badge
    >
    <Badge
      on:click={() => alert("This is Dismisable Badge")}
      dismissable
      className="border border-stroke-Primary"
      size="large">warning</Badge
    >
    <p>To check more about Button variations, Please check the Storybook</p>
  </div>
</section>
