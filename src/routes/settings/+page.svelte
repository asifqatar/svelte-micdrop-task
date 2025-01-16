<script>
  import Button from "@/components/Button/Button.svelte";
  import Card from "@/components/Card.svelte";
  import ProfileTabContent from "@/components/pages/settings/tabs/profile_tab_content.svelte";
  import TeamTabContent from "@/components/pages/settings/tabs/team_tab_content.svelte";
  import VenueTabContent from "@/components/pages/settings/tabs/venue_tab_content.svelte";
  import { TabItem, Tabs } from "flowbite-svelte";
</script>

<Card>
  <p class="text-xl">Organization Profile</p>
  <div class="my-5">
    <Tabs tabStyle="underline" contentClass="bg-white p-4">
      <TabItem open title="Profile">
        <ProfileTabContent />
      </TabItem>
      <TabItem title="Team">
        <TeamTabContent />
      </TabItem>
      <TabItem title="Venue">
        <VenueTabContent />
      </TabItem>
      <TabItem title="Billing">
        <p class="text-sm text-gray-500 dark:text-gray-400">
          <b>Users:</b>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </TabItem>
    </Tabs>
  </div>
</Card>
