<script>
  export let regionRef = undefined;
  export let id = undefined;
  export let opened = false;
  export let label = undefined;
  export let disabled = false;
</script>
<button 
  id="{id}" 
  class="collaspeDisclosure" 
  aria-controls="{regionRef}" 
  aria-expanded="{opened}"
  aria-label="{label}"
  type="button"
  disabled={disabled}
  {...$$restProps}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:blur
  on:focus
>
  <slot />
</button>
<style>
  .collaspeDisclosure {
    -webkit-tap-highlight-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 36px;
    padding: 0;
    border: none;
    border-radius: 4px;
    outline: 0;
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
    transition: baackground-color 150ms cubic-bezier(0.4, 0.22, 0.28, 1);
  }

  .collaspeDisclosure:hover {
    background-color: #dbdddf;
    cursor: pointer;
  }
</style>