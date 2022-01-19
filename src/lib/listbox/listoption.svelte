<script>
  import { getContext } from 'svelte';
  export let selected = false;
  let optionRef;
  let highlighted = false;
  const setActive = getContext('setActiveChild');

  let activeIndex = getContext('store');
  function handleClick(event) {
    console.log('click')
    setActive(event.currentTarget);
  }

  $: {
    let index = optionRef && optionRef.dataset.index;
    highlighted = (+index === $activeIndex) ? true : false;
  }

  function handleMouseEnter() {
    highlighted = true;
  }

  function handleMouseLeave() {
    highlighted = false;
  }
</script>
<button bind:this={optionRef} tabindex="-1" class="listbox__option"class:listbox__option--highlighted="{highlighted}" on:click={handleClick} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave} role="option" aria-selected={selected}>
  <slot />
</button>
<style>
.listbox__option {
  position: relative;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: flex;
  background-color: transparent;
  border: 0;
  align-items: center;
  color: #202124;
  cursor: pointer;
  list-style: none;
  margin: 0; 
  padding: 8px;
  line-height: 16px;
  font-size: .875rem;
  height: 36px;
  white-space: nowrap;
}

.listbox__option--highlighted {
  background-color: #eee;
}
</style>