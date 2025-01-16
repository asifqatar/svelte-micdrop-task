<script>
  import NotificationList from "./NotificationList.svelte";
  export let notifications = [];

  function isToday(dateString) {
    const notificationDate = new Date(dateString);
    const today = new Date();
    return (
      notificationDate.getDate() === today.getDate() &&
      notificationDate.getMonth() === today.getMonth() &&
      notificationDate.getFullYear() === today.getFullYear()
    );
  }

  function formatNotificationTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const timeDiff = (now - date) / 1000;

    if (isToday(dateString)) {
      if (timeDiff < 60) return `${Math.floor(timeDiff)} seconds ago`;
      if (timeDiff < 3600) return `${Math.floor(timeDiff / 60)} minutes ago`;
      if (timeDiff < 86400) return `${Math.floor(timeDiff / 3600)} hours ago`;
    }

    const options = {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return date.toLocaleString("en-US", options);
  }

  let todayNotifications = [];
  let earlierNotifications = [];

  $: {
    todayNotifications = notifications.filter((notif) => isToday(notif.time));
    earlierNotifications = notifications.filter(
      (notif) => !isToday(notif.time)
    );
  }
</script>

<div class="">
  {#if todayNotifications.length > 0}
    <h3 class="text-sm font-medium text-gray-500 my-6">Today</h3>
    <div class="flex flex-col gap-6">
      {#each todayNotifications as notification}
        <NotificationList
          name={notification.name}
          action={notification.action}
          event={notification.event}
          message={notification.message}
          time={formatNotificationTime(notification.time)}
          avatar={notification.avatar}
          statusIcon={notification.statusIcon}
          status={notification.status}
        />
      {/each}
    </div>
  {/if}

  {#if earlierNotifications.length > 0}
    <h3 class="text-sm font-medium text-gray-500 my-6">Yesterday</h3>
    <div class="flex flex-col gap-6">
      {#each earlierNotifications as notification}
        <NotificationList
          name={notification.name}
          action={notification.action}
          event={notification.event}
          message={notification.message}
          time={formatNotificationTime(notification.time)}
          avatar={notification.avatar}
          statusIcon={notification.statusIcon}
          status={notification.status}
        />
      {/each}
    </div>
  {/if}

  {#if notifications.length === 0}
    <p class="text-[16px] font-medium text-gray-900 leading-6">
      No notifications available
    </p>
  {/if}
</div>
