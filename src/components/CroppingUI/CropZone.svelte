<script>
  import { createEventDispatcher } from "svelte";
  export let existingImage = "";
  export let readonly = false;
  export let shape = "rect"; // rect or round
  import CancelIcon from "./../../assets/svg/cancel.svg";
  import Modal from "../Modal/Modal.svelte";
  import AddMain from "./../../assets/svg/add-main-01.svg";
  import AlertIcon from "./../../assets/svg/Alert-icon.svg";
  import CloudUpload from "./../../assets/svg/cloud-upload.svg";
  import CroppingUi from "./CroppingUI.svelte";

  let image = existingImage || "";
  let croppedImage = "";
  let error = "";
  let deleteModalOpen = false;
  let uploadModalOpen = false;
  let editModalOpen = false;
  let isDragOver = false;

  const dispatch = createEventDispatcher();
  const MAX_FILE_SIZE = 300 * 1024 * 1024; // 300 MB
  const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp"];

  $: if (existingImage && !croppedImage && !image) {
    image = existingImage;
  }

  function onDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;

    handleFiles(files);
    isDragOver = false;
  }

  function handleFiles(files) {
    const file = Array.from(files).find(
      (file) =>
        ALLOWED_FILE_TYPES.includes(file.type) && file.size <= MAX_FILE_SIZE
    );
    if (!file) {
      error = "File not supported or too large! (Max upload size: 300 MB)";
      return;
    }
    image = URL.createObjectURL(file);
    error = "";
    dispatch("upload", file);
    uploadModalOpen = false;
    editModalOpen = true;
  }

  function handleDelete() {
    image = "";
    croppedImage = "";
    dispatch("delete");
    deleteModalOpen = false;
  }

  function handleUpload() {
    uploadModalOpen = !uploadModalOpen;
  }

  function openFileUploadModal() {
    if (!readonly) {
      const fileInput = document.getElementById("file-input");
      fileInput.value = "";
      fileInput.click();
    }
  }

  function shapeStyle(shape) {
    return shape === "round"
      ? "w-16 h-16 rounded-full"
      : "w-16 h-16 rounded-lg";
  }

  function shapeClose(shape) {
    return shape === "round"
      ? "top-[-2px] right-[-2px] p-1 rounded-full"
      : "top-[-5px] right-[-5px] p-1 rounded-full";
  }

  function handleDragOver(event) {
    event.preventDefault();
    isDragOver = true;
  }

  function handleDragLeave() {
    isDragOver = false;
  }

  function handleModel() {
    deleteModalOpen = !deleteModalOpen;
  }

  function handleCroppedImage(croppedImageURL) {
    croppedImage = croppedImageURL;
    image = croppedImageURL;
    editModalOpen = false;
  }

  function handleCloseEditModal() {
    editModalOpen = false;
    image = existingImage || "";
  }
</script>

<input
  type="file"
  on:change={onDrop}
  accept="image/*"
  id="file-input"
  class="hidden"
  aria-label="file-input"
/>

<div class="w-4/5 mx-auto">
  <div
    class="w-full flex flex-col justify-center items-start p-4 rounded-[12px] bg-white border border-BG-Secondary shadow"
  >
    <div class="flex w-full gap-3.5">
      {#if croppedImage || image}
        <div class={`relative shadow ${shapeStyle(shape)}`}>
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src={croppedImage || image}
            alt="uploaded image"
            class={`w-full h-full object-cover ${shapeStyle(shape)}`}
          />
          {#if !readonly}
            <button
              class={`${shapeClose(shape)} absolute bg-red-200 cursor-pointer`}
              on:click={handleModel}
            >
              <img src={CancelIcon} alt="close button img" />
            </button>
          {/if}
        </div>
      {:else if !readonly}
        <button
          class={`flex justify-center items-center border-dashed border-2 cursor-pointer border-brand-Primary border-opacity-50 bg-BG-Secondary ${shapeStyle(shape)}`}
          on:click={handleUpload}
        >
          <img src={AddMain} alt="Add icon" />
        </button>
      {/if}
    </div>

    <Modal
      show={deleteModalOpen}
      icon={AlertIcon}
      title="Delete this image?"
      description="Are you sure you want to permanently delete this image? This action cannot be undone."
      actions={[
        {
          label: "Cancel",
          strokebtn: true,
          onClick: handleModel,
        },
        {
          label: "Delete",
          onClick: handleDelete,
        },
      ]}
    />

    {#if uploadModalOpen}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="fixed inset-0 flex items-center justify-center gap-6 bg-gray-900 bg-opacity-50 z-50"
        role="presentation"
        on:click={() => (uploadModalOpen = false)}
      >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <div
          class="bg-white pb-6 px-6 rounded-2xl modal-box text-center flex w-[484px] flex-col max-sm:w-full"
          role="dialog"
          on:click|stopPropagation
        >
          <button
            class={`presentation dropzone w-full flex py-8 mt-6 flex-col rounded-xl justify-center items-center ${
              isDragOver ? "bg-blue-100" : ""
            }`}
            on:drop={onDrop}
            on:dragover={handleDragOver}
            on:dragleave={handleDragLeave}
          >
            {#if !readonly}
              <img
                class="p-5 bg-brand-Primary rounded-full ring-[16px] ring-blue-100"
                src={CloudUpload}
                alt="Upload cloud icon"
              />
            {/if}
          </button>
          <p class="uploadFile text-xl font-normal text-Text-Primary">
            Drop anywhere to upload
          </p>
          <div class="flex items-center justify-center gap-6 my-5">
            <span class="block w-full h-px bg-stroke-Primary"></span>
            <p class="text-base text-center text-Text-Tartiary">or</p>
            <span class="block w-full h-px bg-stroke-Primary"></span>
          </div>
          <button
            class="p-3 mx-auto min-w-24 text-brand-Primary text-sm leading-3 font-medium rounded-lg flex justify-center items-center border border-stroke-Primary cursor-pointer bg-BG-Secondary/20"
            on:click={openFileUploadModal}
          >
            Browse files
          </button>
          <h2 class="text-Text-Tartiary font-normal text-sm my-5">
            Supported: JPG, JPEG, PNG, Webp
          </h2>
          <p class="text-accent-success text-sm font-medium">Max 300 MB</p>

          {#if error}
            <p class="text-red-500 text-xs font-semibold mt-4">{error}</p>
          {/if}
        </div>
      </div>
    {/if}

    {#if editModalOpen}
      <CroppingUi
        {shape}
        openEditModal={editModalOpen}
        aspect
        localImage={image}
        on:cropped={(event) => {
          const { croppedImageURL } = event.detail;
          handleCroppedImage(croppedImageURL);
        }}
        handleCloseEditModal={() => handleCloseEditModal()}
      />
    {/if}
  </div>
</div>
