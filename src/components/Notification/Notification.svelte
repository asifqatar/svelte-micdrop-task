<script>
  import Card from "../card/index.svelte";
  import NotificationGroup from "./NotificationGroup.svelte";


  export let notifications = [];
</script>

<Card  title="Notifications" link="/">
  <NotificationGroup {notifications} />
</Card>
