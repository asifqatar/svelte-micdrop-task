<script>
  import { createEventDispatcher } from "svelte";
  export let existingImages = [];
  export let readonly = false;
  export let shape = "default";
  import CancelIcon from "./../../assets/svg/cancel.svg";
  import Modal from "../Modal/Modal.svelte";

  import AddMain from "./../../assets/svg/add-main-01.svg";
  import AlertIcon from "./../../assets/svg/Alert-icon.svg";
  import CloudUpload from "./../../assets/svg/cloud-upload.svg";
  import pdfUpload from "./../../assets/svg/pdf-upload-download.svg";

  let images = [];
  let videos = [];
  let pdfs = [];
  let error = "";
  let deleteModalOpen = false;
  let uploadModalOpen = false;

  let selectedIndex = null;
  let fileType = null;

  const dispatch = createEventDispatcher();

  const MAX_FILE_SIZE = 300 * 1024 * 1024; // 300 MB
  const ALLOWED_FILE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/svg+xml",
    "image/gif",
    "video/mp4",
    "application/pdf",
  ];

  $: images = existingImages;

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
    if (!file || !ALLOWED_FILE_TYPES.includes(file.type)) {
      error = "File not supported!";
      return;
    } else if (file.size > MAX_FILE_SIZE) {
      error = "File too large! (Max upload size: 300 MB)";
    } else if (file) {
      if (file.type.startsWith("image/")) {
        images = [...images, URL.createObjectURL(file)];
      } else if (file.type === "video/mp4") {
        videos = [...videos, URL.createObjectURL(file)];
      } else if (file.type === "application/pdf") {
        pdfs = [...pdfs, URL.createObjectURL(file)];
      }
      error = "";
      dispatch("upload", file);
      uploadModalOpen = false;
    }
    isDragOver = false;
  }

  function handleDelete(index, type) {
    if (fileType === "image" && selectedIndex !== null) {
      images = images.filter((_, i) => i !== selectedIndex);
    } else if (fileType === "video" && selectedIndex !== null) {
      videos = videos.filter((_, i) => i !== selectedIndex);
    } else if (fileType === "pdf" && selectedIndex !== null) {
      pdfs = pdfs.filter((_, i) => i !== selectedIndex);
    }
    dispatch("delete", { index, type });
    selectedIndex = null;
    deleteModalOpen = !deleteModalOpen;
  }

  function handleUpload() {
    uploadModalOpen = !uploadModalOpen;
  }

  function openFileUploadModal() {
    if (!readonly) {
      const fileInput = document.querySelector('input[type="file"]');
      fileInput.value = "";
      fileInput.click();
    }
  }

  function shapeStyle(shape) {
    switch (shape) {
      case "64x64-rounded-square":
        return `w-16 h-16 rounded-lg`;
      case "256x256-profile-photo":
        return `w-64 h-64 rounded-full`;
      case "128x128-rounded-square":
        return `w-32 h-32 rounded-lg`;
      case "fullwidth-rounded-rectangle":
        return `w-full h-32 rounded-xl`;
      case "32x32-circle":
        return `w-8 h-8 rounded-full`;
      default:
        return `w-16 h-16 rounded-lg`;
    }
  }

  function shapeClose(shape) {
    switch (shape) {
      case "64x64-rounded-square":
        return `top-[-5px] right-[-5px] p-1 rounded-lg`;
      case "256x256-profile-photo":
        return `top-[22px] right-[19px] p-2.5 rounded-full`;
      case "128x128-rounded-square":
        return `top-[-5px] right-[-5px] p-1 rounded-lg`;
      case "fullwidth-rounded-rectangle":
        return `top-[-5px] right-[-5px] p-1 rounded-xl`;
      case "32x32-circle":
        return `top-[-3px] right-[-3px] rounded-full`;
      default:
        return `top-[-5px] right-[-5px] p-1 rounded-full`;
    }
  }

  let isDragOver = false;

  function handleDragOver(event) {
    event.preventDefault();
    isDragOver = true;
  }

  function handleDragLeave() {
    isDragOver = false;
  }

  function handeModel(index = null, type) {
    deleteModalOpen = !deleteModalOpen;
    if (index !== null) {
      selectedIndex = index;
      fileType = type;
    }
  }

  function handeUploadModel() {
    uploadModalOpen = !uploadModalOpen;
  }
</script>

<input
  type="file"
  on:change={onDrop}
  accept="image/*,video/mp4,application/pdf"
  class="hidden"
  aria-label="file-input"
/>

<div class="w-4/5 mx-auto">
  <div
    class="w-full flex flex-col justify-center items-start p-4 rounded-[12px] bg-white border border-BG-Secondary shadow"
  >
    <div class="flex w-full gap-3.5">
      {#each images as image, index}
        <div class={`relative shadow ${shapeStyle(shape)}`}>
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            src={image}
            alt="uploaded image"
            class={`object-cover ${shapeStyle(shape)}`}
          />
          {#if !readonly}
            <button
              class={`${shapeClose(shape)} absolute bg-red-200 cursor-pointer`}
              on:click={() => handeModel(index, "image")}
            >
              <img src={CancelIcon} alt="close button img" />
            </button>
          {/if}
        </div>
      {/each}

      {#each videos as video, index}
        <div class={`relative shadow ${shapeStyle(shape)}`}>
          <!-- svelte-ignore a11y-media-has-caption -->
          <video
            src={video}
            alt="uploaded video"
            class={`object-cover ${shapeStyle(shape)}`}
          ></video>
          {#if !readonly}
            <button
              class={`${shapeClose(shape)} absolute bg-red-200 cursor-pointer`}
              on:click={() => handeModel(index, "video")}
            >
              <img src={CancelIcon} alt="X" />
            </button>
          {/if}
        </div>
      {/each}

      {#each pdfs as pdf, index}
        <div
          class={`relative shadow ${shapeStyle(shape)} flex justify-center items-center`}
        >
          <img
            src={pdfUpload}
            alt="PDF Icon"
            class={`"object-contain max-w-full max-h-full ${shape.includes("256x256-profile-photo") ? "rounded-full" : "p-2"}`}
          />
          {#if !readonly}
            <button
              class={`${shapeClose(shape)} absolute bg-red-200 cursor-pointer`}
              on:click={() => handeModel(index, "pdf")}
            >
              <img src={CancelIcon} alt="close button img" />
            </button>
          {/if}
        </div>
      {/each}

      {#if !readonly}
        <button
          class={`flex justify-center items-center border-dashed border-2 cursor-pointer border-brand-Primary border-opacity-50 bg-BG-Secondary ${shapeStyle(shape)}`}
          on:click={handleUpload}
        >
          <img
            src={AddMain}
            alt="Add icon"
            class={`${shape.includes("32x32-circle") && "p-1.5"}`}
          />
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
          onClick: handeModel,
        },
        {
          label: "Delete",
          onClick: handleDelete,
        },
      ]}
    />

    {#if uploadModalOpen}
      <div
        class="fixed inset-0 flex items-center justify-center gap-6 bg-gray-900 bg-opacity-50 z-50"
        role="presentation"
        on:click={handeUploadModel}
      >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <div
          class="bg-white pb-6 px-6 rounded-2xl modal-box text-center flex w-[484px] flex-col max-sm:w-full"
          role="dialog"
          on:click={(event) => event.stopPropagation()}
        >
          <button
            class={`presentation dropzone w-full flex py-8 mt-6 flex-col rounded-xl justify-center items-center ${isDragOver ? "bg-blue-100" : ""}`}
            on:drop={onDrop}
            on:dragover={handleDragOver}
            on:dragleave={handleDragLeave}
          >
            {#if !readonly}
              <img
                class="p-5 bg-brand-Primary rounded-full ring-[16px] ring-blue-100"
                src={CloudUpload}
                alt=""
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
            Supported : JPG, JPEG, PNG, MP4, Webp, SVG, GIF
          </h2>
          <p class="text-accent-success text-sm font-medium">Max 300 MB</p>

          {#if error}
            <p class="text-red-500 text-xs font-semibold mt-4">{error}</p>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>
