<script>
  import { onMount } from "svelte";
  import generateId from "./store";
  export let label = '';
  export let id = `aria-carousel-track-${generateId()}`;
  // export let perPage = 1;
  export let currentPage = 0;
  export let ref;
  let dots = [];

  function next() {
    currentPage += 1;
  }

  function prev() {
    currentPage -= 1;
  }

  onMount(() => {
    console.log(ref);
  });
</script>
<section
  bind:this={ref}
  class="carousel" 
  aria-roledescription="carousel"
  aria-label={label}
>
  <div class="carousel__viewport">
    <div class="carousel__controls">
      <button on:click="{prev}" class="previous" aria-controls="{id}" aria-label="Previous Slide">
        <svg class="icon" role="presentation" focusable="false" viewBox="0 0 24 24">
          <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
        </svg>
      </button>
      <button on:click="{next}" class="next" aria-controls="{id}" aria-label="Next Slide">
        <svg class="icon" role="presentation" focusable="false" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </button>
      <div class="carousel__dots-container">
        <svg class="carousel__dots" role="presentation" focusable="false" viewBox="0 0 20 4">
          <circle fill-opacity="0.6" r="2" cx="2" cy="2"></circle>
          <circle fill-opacity="0.6" r="2" cx="10" cy="2"></circle>
          <circle fill-opacity="1" r="2" cx="18" cy="2"></circle>
        </svg>
      </div>
    </div>
    <div id="{id}" class="carousel__track" style="transform:translate3d(calc(-{currentPage}% * 100 + -{currentPage}*8px),0,0)" aria-live="off">
      <slot />
    </div>
  </div>
</section>
<style>
.carousel__viewport {
  position: relative;
  width: 100%;
}

.carousel__track {
  display: flex;
  transition: transform .3s ease-in;
  gap: 8px;
}

.previous {
  left: 0;
}

.next {
  right: 0;
}

.next,
.previous {
  position: absolute;
  height: 100%;
  max-width: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  outline: 0;
  z-index: 1;
  background-color: transparent;
  overflow: hidden;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  appearance: none;
}

.carousel__dots-container {
  display: flex;
  align-items: center;
  justify-content: center;

}

.carousel__dots {
  position: absolute;
  z-index: 1;
  bottom: 4px;
  height: 8px;
  fill: #fff;
}
</style>