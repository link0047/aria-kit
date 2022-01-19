<script>
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { generateListboxId } from './store.js';
  export let label = 'listbox';
  export let open = true;
  export let disabled = false;
  export let multiselect = false;
  export let selectedIndex = -1;
  let listRef;
  let id = `listbox-${generateListboxId()}`;
  $: activeChild = '';
  let items;

  let activeIndex = writable(selectedIndex);

  function change(dir) {
    let index = $activeIndex + dir;
    if (index < 0) {
      index = items.length - 1;
    } else if (index >= items.length) {
      index = 0;
    }
    $activeIndex = index;
  }

  function handleKeydown(event) {
    const key = event.key;
    !key == 'Tab' && event.preventDefault();

    if (!items) return;

    switch (key) {
      case 'Esc':
      case 'Escape':
        // focus button here
        open = false;
        break;
      case 'Home':
        break;
      case 'End':
        break;
      case 'Up':
      case 'ArrowUp':
        change(-1);
        activeChild = items[$activeIndex].id; 
        break;
      case 'Down':
      case 'ArrowDown':
        change(1);
        activeChild = items[$activeIndex].id;
        break;
      case 'Enter':
      case ' ':
      case 'Space':
        open = false;
        break;
      default:
        break;
    }
  }

  function setActiveChild(child) {
    activeChild = child.id;
  }

  setContext('store', activeIndex);
  setContext('setActiveChild', setActiveChild);

  onMount(() => {
    items = Array.from(listRef.children);
    for (const [i, child] of items.entries()) {
      child.id = `${id}-${i}`;
      child.dataset.index = i;
    }

    activeChild = items[0].id;
  });
</script>
<div bind:this={listRef} aria-multiselectable="{multiselect || undefined }" aria-activedescendant="{activeChild}" aria-label="{label}" class="listbox" id="{id}" on:keydown={handleKeydown} tabindex="0" role="listbox"  hidden={!open} aria-disabled="{disabled || undefined }">
  <slot />
</div>
<style>
.listbox {
  display: flex;
  flex-flow: column;
  padding: 8px .5px;
}

.listbox:focus {
  box-shadow: 0 0 0 2px rgba(69, 143, 255, 1);
  border-radius: 3px;
}
</style>