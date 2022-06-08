<script>
  import { Collaspe, CollaspeDisclosure } from "$lib/collaspe";
  import { onMount } from 'svelte';
  export let hasCollapsible = false;
  export let primaryAction = () => {};
  $: opened = false;

  function handleDisclosureClick() {
    opened = !opened;
  }

  onMount(async () => {
    if (hasCollapsible) { 
      opened = true;
    }
  });
</script>
<li 
  class="sidebar__item"
  class:sidebar__item--withCollaspe={ hasCollapsible }
  {...$$restProps}
>
  {#if hasCollapsible}
    <CollaspeDisclosure 
      on:click={handleDisclosureClick} opened={opened} style="grid-area:disclosure;">
      <svg style="{`transform:rotate(${opened ? 0 : '-90deg'});transition:transform 150ms ease`}" role="presentation" focusable="false" class="icon" viewBox="0 0 24 24">
        <path xmlns="http://www.w3.org/2000/svg" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
      </svg>
    </CollaspeDisclosure>
  {/if}
  <button class="sidebar__primaryAction" type="button" on:click="{primaryAction}">
    <slot />
  </button>
  {#if hasCollapsible}
    <Collaspe opened={opened} style="grid-area:collaspe;">
      <slot name="collaspe" />
    </Collaspe>
  {/if}
</li>

<style>
  .sidebar__item {
    position: relative;
    min-height: 36px;
    border-radius: 4px;
    display: grid;
    align-items: center;
  }

  .sidebar__primaryAction:hover {
    background-color: #f6f6f7;
    cursor: pointer;
  }

  .sidebar__item--withCollaspe {
    grid-template-columns: 24px 1fr;
    grid-template-rows: 36px 1fr;
    grid-template-areas:
      "disclosure primary-action"
      "collaspe collaspe";
  }

  .icon {
    width: 24px;
    height: 24px;
    fill: #212121;
  }

  .sidebar__primaryAction {
    -webkit-tap-highlight-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    height: 36px;
    padding: 0;
    padding: 0 8px;
    border: none;
    outline: 0;
    border-radius: 4px;
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

  .sidebar__item--withCollaspe > .sidebar__primaryAction {  
    grid-area: primary-action;
  }
</style>