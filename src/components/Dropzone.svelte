<script>
  let dragOver = false;
  let previews = []; // Array to store preview URLs and file names
  let errorMessage = ""; // Error message for invalid files

  function handleDrop(event) {
    event.preventDefault();
    dragOver = false;
    const files = event.dataTransfer.files;
    processFiles(files);
  }

  function handleDragOver(event) {
    event.preventDefault();
    dragOver = true;
  }

  function handleDragLeave(event) {
    dragOver = false;
  }

  function handleFileInput(event) {
    const files = event.target.files;
    processFiles(files);
  }

  function processFiles(files) {
    errorMessage = "";
    Array.from(files).forEach((file) => {
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          previews = [...previews, { name: file.name, url: e.target.result }];
        };
        reader.readAsDataURL(file);
      } else {
        errorMessage = "Please upload valid image files (JPG, PNG, GIF, etc.).";
      }
    });
  }

  function deletePreview(index) {
    previews = previews.filter((_, i) => i !== index); // Remove the selected image
  }
</script>

<!-- Drop Zone -->
<button
  class="w-full border-2 border-dashed border-spacing-4 border-brand-Primary rounded-lg p-10 text-center bg-gray-50 transition-colors duration-300 ease-in-out {dragOver
    ? 'bg-blue-50'
    : ''}"
  on:dragover|preventDefault={handleDragOver}
  on:dragleave|preventDefault={handleDragLeave}
  on:drop|preventDefault={handleDrop}
>
  <div class="flex justify-center items-center text-3xl text-center mb-4">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 2H12.7727C16.0339 2 17.6645 2 18.7969 2.79784C19.1214 3.02643 19.4094 3.29752 19.6523 3.60289C20.5 4.66867 20.5 6.20336 20.5 9.27273V11.8182C20.5 14.7814 20.5 16.2629 20.0311 17.4462C19.2772 19.3486 17.6829 20.8491 15.6616 21.5586C14.4044 22 12.8302 22 9.68182 22C7.88275 22 6.98322 22 6.26478 21.7478C5.10979 21.3424 4.19875 20.4849 3.76796 19.3979C3.5 18.7217 3.5 17.8751 3.5 16.1818V12"
        stroke="#252B37"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 12C20.5 13.8409 19.0076 15.3333 17.1667 15.3333C16.5009 15.3333 15.716 15.2167 15.0686 15.3901C14.4935 15.5442 14.0442 15.9935 13.8901 16.5686C13.7167 17.216 13.8333 18.0009 13.8333 18.6667C13.8333 20.5076 12.3409 22 10.5 22"
        stroke="#252B37"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.5 4.5C4.99153 3.9943 6.29977 2 7 2M7 2C7.70023 2 9.00847 3.9943 9.5 4.5M7 2V10"
        stroke="#252B37"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <div class="text-base text-gray-600">
    <label
      for="file-input"
      class="text-brand-Primary font-medium cursor-pointer hover:underline"
    >
      Browse images
    </label>
    <input
      type="file"
      id="file-input"
      accept="image/*"
      multiple
      on:change|preventDefault={handleFileInput}
    />
  </div>
  <span class="text-xs text-gray-800">or drag and drop to upload</span>
  <div class="text-xs text-gray-500">
    SVG, PNG, JPG, or GIF (MAX. 800×400px)
  </div>

  {#if errorMessage}
    <div class="mt-4 text-red-500 text-sm">{errorMessage}</div>
  {/if}
</button>

<!-- Image Previews -->
{#if previews.length > 0}
  <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {#each previews as preview, index}
      <div class="relative group">
        <img
          src={preview.url}
          alt="Preview"
          class="object-cover w-full h-14 rounded-md border border-gray-300"
        />
        <button
          class="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full cursor-pointer z-30"
          on:click={() => deletePreview(index)}
        >
          ✖
        </button>
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-white"
        >
          <span class="text-xs truncate px-2">{preview.name}</span>
        </div>
      </div>
    {/each}
  </div>
{/if}

<style>
  input[type="file"] {
    display: none;
  }
</style>
