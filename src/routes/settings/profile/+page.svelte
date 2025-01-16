<script>
  import Button from "@/components/Button/Button.svelte";
  import Card from "@/components/Card.svelte";
  import { Label, Input, TabItem, Tabs, Toggle } from "flowbite-svelte";
  import AccountPage from "@/assets/images/account_page.png";
  import Add from "@/assets/svg/add-main.svg";
  import CheckMarkIcon from "@/assets/svg/checkmark.svg";
  import FailMarkIcon from "@/assets/svg/failmark.svg";
  import AccountNotification from "@/components/pages/settings/account/AccountNotification.svelte";

  //
</script>

<Card>
  <p class="text-xl ml-2">Account profile</p>

  <Tabs tabStyle="underline" contentClass="bg-white p-4">
    <TabItem open title="Profile">
      <section>
        <div class="flex">
          <img src={AccountPage} alt="account_page" />
          <div class="flex ml-4 my-auto gap-2">
            <Button beforeIcon={Add}>Upload</Button>
            <Button strokebtn>Remove</Button>
          </div>
        </div>
        <p class="text-xl text-gray-500 my-5">Personal details</p>

        <div class="flex flex-col lg:flex-row">
          <div class="flex lg:flex-1 flex-col">
            <div class="flex gap-4">
              <div class="w-full mb-6">
                <Label for="first_name" class="block mb-2">First name</Label>
                <Input id="first_name" size="lg" placeholder="Jetpack" />
              </div>
              <div class="w-full mb-6">
                <Label for="last_name" class="block mb-2">Last name</Label>
                <Input id="last_name" size="lg" placeholder="Jetpack" />
              </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-4">
              <div class="w-full mb-2">
                <Label for="email_address" class="block mb-2"
                  >Email address</Label
                >
                <Input
                  id="email_address"
                  size="lg"
                  placeholder="name@exaple.com"
                />
              </div>
              <div class="w-full mb-6">
                <Label for="phone" class="block mb-2">Phone</Label>
                <Input id="phone" size="lg" placeholder="xxx-xxx-xxxx" />
              </div>
            </div>
            <div class="mb-6">
              <Label for="location" class="block mb-2">Location</Label>
              <Input
                id="location"
                size="lg"
                placeholder="46, Real Estate, New Work, USA"
              />
            </div>

            <!--  -->
          </div>

          <div class="flex-1 lg:p-8"></div>
        </div>

        <p class="text-xl text-gray-500 my-5">Change password</p>
        <div class="flex flex-col lg:flex-row gap-4">
          <div class="flex flex-col flex-1">
            <div class="mb-6">
              <Label for="current_password" class="block mb-2"
                >Current Password</Label
              >
              <Input
                id="current_password"
                size="lg"
                placeholder="Enter your current password"
              />
            </div>

            <div class="mb-6">
              <Label for="new_password" class="block mb-2">New Password</Label>
              <Input
                id="new_password"
                size="lg"
                placeholder="Enter new password"
              />
            </div>

            <div class="mb-6">
              <Label for="confirm_password" class="block mb-2"
                >Confirm Password</Label
              >
              <Input
                id="confirm_password"
                size="lg"
                placeholder="Retype new password"
              />
            </div>
          </div>

          <div
            class="flex flex-1 flex-col bg-gray-100 p-6 rounded-md ring-1 ring-gray-400 my-auto"
          >
            <p class="text-xl font-medium">Password requirements:</p>
            <span class="text-sm lg:text-xl my-2 text-gray-500 font-normal"
              >Ensure that these requirements are met:</span
            >
            <ul class="flex flex-col gap-2">
              <li class="flex gap-2 text-xs lg:text-md text-gray-500">
                <img
                  class="my-auto"
                  src={CheckMarkIcon}
                  alt="check_mark_icon"
                />
                <span class="my-auto">
                  At least 10 characters (and up to 100 characters)</span
                >
              </li>
              <li class="flex gap-2 text-xs lg:text-md text-gray-500">
                <img
                  class="my-auto"
                  src={CheckMarkIcon}
                  alt="check_mark_icon"
                />
                <span class="my-auto"> At least one lowercase character </span>
              </li>
              <li class="flex gap-2 text-xs lg:text-md text-gray-500">
                <img class="my-auto" src={FailMarkIcon} alt="fail_mark_icon" />
                <span class="my-auto">
                  At least one special character (! @ # ?)</span
                >
              </li>
              <li class="flex gap-2 text-xs lg:text-md text-gray-500">
                <img class="my-auto" src={FailMarkIcon} alt="fail_mark_icon" />
                <span class="my-auto">
                  Significantly different from your previous passwords
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div class="my-4">
          <Button>Save changes</Button>
        </div>
      </section>
    </TabItem>
    <TabItem title="Notifications">
      <AccountNotification />
    </TabItem>
  </Tabs>
</Card>
