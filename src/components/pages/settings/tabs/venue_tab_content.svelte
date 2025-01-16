<script>
  // name = "TeamTabContent";
  import Add from "@/assets/svg/add-main.svg";
  import MoreIcon from "@/assets/svg/more-actions.svg";
  import Badge from "@/components/Badges/Badge.svelte";
  import Button from "@/components/Button/Button.svelte";
  import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";

  const array = Array(10).fill(10);
  let items = [...array];
</script>

<div>
  <div class="w-full p-2 flex justify-end">
    <a href="/settings/venue/add">
      <Button className="w-full md:w-auto" beforeIcon={Add}>Add Venue</Button>
    </a>
  </div>

  <Table hoverable={true} {items}>
    <TableHead>
      <TableHeadCell>Venue</TableHeadCell>
      <TableHeadCell sort={(a, b) => a.type.localeCompare(b.type)}
        >Location</TableHeadCell
      >
      <TableHeadCell sort={(a, b) => a.make - b.make} defaultDirection="desc"
        >Stages</TableHeadCell
      >
      <TableHeadCell sort={(a, b) => a.make - b.make} defaultDirection="desc"
        >Next event</TableHeadCell
      >
      <TableHeadCell>
        <span class="sr-only">Buy</span>
      </TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      <TableBodyRow slot="row" let:item>
        <TableBodyCell>Jetpack Comedy</TableBodyCell>
        <TableBodyCell>Los Angeles</TableBodyCell>
        <TableBodyCell>1</TableBodyCell>
        <TableBodyCell>
          <Badge size="large" status="success">Feb 1, 2024</Badge>
        </TableBodyCell>
        <TableBodyCell>
          <a
            href="/tables"
            class="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            <img src={MoreIcon} alt="more-actions" class="mr-2" />
          </a>
        </TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>
