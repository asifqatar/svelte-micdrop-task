<script context="module">
  import { Story, Template } from "@storybook/addon-svelte-csf";

  import userIcon from "./../../assets/svg/edit-user-02.svg";
  import successIcon from "./../../assets/icons/Vector.svg";
  import pinIcon from "./../../assets/icons/Subtract.svg";
  import crossIcon from "./../../assets/icons/cross.svg";
  import dotIcon from "./../../assets/icons/Ellipse68.svg";
  import dotBrandIcon from "./../../assets/icons/Ellipsebrand.svg";
  import Badge from "./Badge.svelte";

  export const meta = {
    title: "Components/Badge",
    component: Badge,
    argTypes: {
      size: { control: "select", options: ["small", "medium", "large"] },
      className: { control: "text" },
      icon: { control: "text" },
      textColor: { control: "color" },
      bgColor: { control: "color" },
      status: { control: "select", options: ["success", "warning", "danger"] },
      noBorder: { control: "boolean" },
      tier: { control: "number" },
      tierVariation: { control: "select", options: ["red", "purple"] },
      event: { control: "select", options: ["squareEvent", "circleEvent"] },
      eventTextColor: { control: "color" },
      eventBgColor: { control: "color" },
    },
  };
</script>

<Template let:args>
  <Badge on:click {...args}>Headliner</Badge>
</Template>

<Story name="Small Badges">
  <Badge size="small" textColor="white" className="bg-[#f66]">Headliner</Badge>
</Story>

<Story name="Medium Badges">
  <Badge size="medium" textColor="white" className="bg-[#f66]">Headliner</Badge>
</Story>

<Story name="Large Badges">
  <Badge size="large" textColor="white" className="bg-[#f66]">Headliner</Badge>
</Story>

<Story name="Position with Icon">
  <Badge size="large" textColor="#666C79" bgColor="#F7F8FA" icon={userIcon}>
    Invited
  </Badge>
</Story>

<Story name="Success Badge">
  <Badge size="large" status="success" icon={successIcon}>Success</Badge>
</Story>

<Story name="Warning Badge">
  <Badge size="large" status="warning" icon={pinIcon}>Pinned</Badge>
</Story>

<Story name="Danger Badge">
  <Badge size="large" status="danger" icon={crossIcon}>Declined</Badge>
</Story>

<Story name="No Border Badge">
  <Badge size="medium" status="warning" icon={dotIcon} noBorder>No Border</Badge>
</Story>

<Story name="Tier 1 Badge red">
  <Badge tier={1} tierVariation="red">1</Badge>
</Story>

<Story name="Tier 1 Badge Violet">
  <Badge tier={1}>1</Badge>
</Story>

<Story name="Tier 2 Badge">
  <Badge tier={2}>2</Badge>
</Story>

<Story name="Tier 3 Badge">
  <Badge tier={3}>3</Badge>
</Story>

<Story name="Tier 4 Badge">
  <Badge tier={4}>4</Badge>
</Story>

<Story name="Tier 5 Badge">
  <Badge tier={5}>5</Badge>
</Story>

<Story name="Event Badge">
  <Badge size="large" event="squareEvent" eventBgColor="#ffffff">
    10:30 Tuesday June 20, 2024
  </Badge>
</Story>

<Story name="Event Circle Badge">
  <Badge
    size="large"
    event="circleEvent"
    eventTextColor="rgba(2, 132, 254, 1)"
    eventBgColor="rgba(2, 132, 254, 0.15)"
    icon={dotBrandIcon}
  >
    10:30 Tuesday June 20, 2024
  </Badge>
</Story>

<Story name="Clickable Badge">
  <Badge
    size="large"
    status="danger"
    on:click={() => alert("This is Alert Badge")}
  >
    Alert
  </Badge>
</Story>

<Story name="Dismissible Badge">
  <Badge size="large" bgColor="#fff" className="border border-[#D4D6D9]" dismissable={true}>
    Sale Type: Complimentary
  </Badge>
</Story>