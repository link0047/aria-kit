<script>
  export let label = '';
</script>
<div
  class="carousel__slide"
  role="group"
  aria-roledescription="slide"
  aria-label="{label}"
>
  <slot />
</div>
<style>
.carousel__slide {
  width: 100%;
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>