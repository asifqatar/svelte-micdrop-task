<script>
  // name = "TeamTabContent";
  import { Label, Input } from "flowbite-svelte";
  import Add from "@/assets/svg/add-main.svg";
  import UserIcon from "@/assets/svg/team-user.svg";
  import MoreIcon from "@/assets/svg/more-actions.svg";
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
  let teamUSER = [...array];

  $: tableView = "user";
</script>

<div>
  <div class="w-full p-2 flex justify-between">
    <Input class="w-2/4" id="search" size="lg" placeholder="search" />
    <Button
      className="md:w-auto"
      beforeIcon={Add}
      on:click={() => alert("clicked")}>Invite User</Button
    >
  </div>

  <div class="flex gap-4 my-5">
    <button
      class="flex justify-center bg-blue-100 text-sm text-brand-Primary p-3 px-5 rounded-full"
      on:click={() => (tableView = "user")}
    >
      <img src={UserIcon} alt="Before Icon here" class="mr-2 my-auto" />
      Users</button
    >
    <button
      class="flex justify-center bg-blue-100 text-sm text-brand-Primary p-3 px-5 rounded-full"
      on:click={() => (tableView = "role")}
    >
      <img src={UserIcon} alt="Before Icon here" class="mr-2 my-auto" />
      Role</button
    >
  </div>

  {#if tableView === "user"}
    <Table hoverable={true} items={teamUSER}>
      <TableHead>
        <TableHeadCell sort={(a, b) => a.type.localeCompare(b.type)}
          >Name</TableHeadCell
        >
        <TableHeadCell sort={(a, b) => a.make - b.make} defaultDirection="desc"
          >Email address</TableHeadCell
        >
        <TableHeadCell sort={(a, b) => a.make - b.make} defaultDirection="desc"
          >Role</TableHeadCell
        >
        <TableHeadCell>
          <span class="sr-only">Buy</span>
        </TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        <TableBodyRow slot="row" let:teamUSER>
          <TableBodyCell>Albert Flores</TableBodyCell>
          <TableBodyCell class="font-light">rrian@yandex.ru</TableBodyCell>
          <TableBodyCell class="font-light">Admin</TableBodyCell>
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
  {/if}
  {#if tableView === "role"}
    <Table hoverable={true} items={teamUSER}>
      <TableHead>
        <TableHeadCell sort={(a, b) => a.type.localeCompare(b.type)}
          >Name</TableHeadCell
        >

        <TableHeadCell>
          <span class="sr-only">Buy</span>
        </TableHeadCell>
      </TableHead>
      <TableBody tableBodyClass="divide-y">
        <TableBodyRow slot="row" let:teamUSER>
          <TableBodyCell class="font-light">Admin</TableBodyCell>
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
  {/if}
</div>
