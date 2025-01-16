<script>
  import { createEventDispatcher } from "svelte";
  import Cropper from "svelte-easy-crop";
  import ZoomIn from "../../assets/svg/zoom-in.png";
  import ZoomOut from "../../assets/svg/zoom-out.png";
  import Rotate from "../../assets/svg/rotate.svg";
  import Button from "../Button/Button.svelte";

  const dispatch = createEventDispatcher();

  export let shape = "rect";
  export let line = true;
  export let openEditModal = false;
  export let aspect = 1;
  export let handleCloseEditModal;
  export let localImage;

  let crop = { x: 0, y: 0 };
  let zoom = 1;
  let rotation = 0;
  let croppedAreaPixels = null;

  $: aspectRatio = aspect;

  async function rotateImage() {
    rotation += 90;
    if (rotation === 180) {
      rotation = 90;
    }
    localImage = await getRotatedImage(localImage, rotation);
  }

  function zoomIn() {
    zoom = Math.min(zoom + 0.1, 3);
  }

  function zoomOut() {
    zoom = Math.max(zoom - 0.1, 1);
  }

  function onCropComplete(croppedArea, croppedAreaPixelsResult) {
    croppedAreaPixels = croppedArea.detail.pixels;
  }

  async function handleSave() {
    const croppedImageBlob = await getCroppedImg(localImage, croppedAreaPixels);
    dispatch("cropped", { croppedImageURL: croppedImageBlob.dataUrl });
  }

  async function getRotatedImage(imageSrc, rotation) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const angle = (rotation * Math.PI) / 180;
    const width = image.width;
    const height = image.height;

    canvas.width =
      Math.abs(Math.cos(angle) * width) + Math.abs(Math.sin(angle) * height);
    canvas.height =
      Math.abs(Math.sin(angle) * width) + Math.abs(Math.cos(angle) * height);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(angle);

    ctx.drawImage(image, -width / 2, -height / 2);

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        resolve(URL.createObjectURL(blob));
      });
    });
  }

  async function getCroppedImg(imageSrc, pixelCrop) {
    if (!pixelCrop || !pixelCrop.width || !pixelCrop.height) {
      throw new Error("Invalid crop area");
    }
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

    canvas.width = safeArea;
    canvas.height = safeArea;

    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.translate(-safeArea / 2, -safeArea / 2);

    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    );

    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.putImageData(
      data,
      0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x,
      0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y
    );

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const croppedImage = {
          blob: blob,
          size: blob.size,
          type: blob.type,
          dataUrl: URL.createObjectURL(blob),
          width: pixelCrop.width,
          height: pixelCrop.height,
        };
        console.log("Cropped image info:", croppedImage);
        resolve(croppedImage);
      }, "image/png");
    });
  }

  function createImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous");
      image.src = url;
    });
  }
</script>

{#if openEditModal}
  <div
    class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
    role="presentation"
    on:click={handleCloseEditModal}
  >
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div
      class="bg-white p-5 rounded-2xl w-[508px] relative"
      role="dialog"
      on:click={(event) => event.stopPropagation()}
    >
      <h1 class="text-left text-[20px] pb-2.5 font-normal">Crop image</h1>
      <div class="h-[339px] w-[468px] relative">
        <Cropper
          image={localImage}
          {crop}
          {zoom}
          aspect={aspectRatio}
          onCropChange={(newCrop) => (crop = newCrop)}
          onZoomChange={(newZoom) => (zoom = newZoom)}
          on:cropcomplete={onCropComplete}
          cropShape={shape}
          showGrid={line}
        />
      </div>

      <div class="mt-6 w-full text-center">
        <div class="w-[188px] flex justify-center items-center mx-auto gap-4">
          <button on:click={zoomOut}>
            <img src={ZoomOut} alt="Zoom Out" />
          </button>
          <input type="range" min={1} max={3} step={0.1} bind:value={zoom} />
          <button on:click={zoomIn}>
            <img src={ZoomIn} alt="Zoom In" />
          </button>
        </div>

        <button class="mt-6" on:click={rotateImage}>
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img src={Rotate} alt="Rotate Image" />
        </button>
      </div>

      <div class="w-full flex justify-end mt-6">
        <div class="flex items-center gap-1.5 w-52">
          <Button
            strokebtn
            type="button"
            size="full"
            on:click={handleCloseEditModal}
          >
            Cancel
          </Button>
          <Button size="full" on:click={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  </div>
{/if}
