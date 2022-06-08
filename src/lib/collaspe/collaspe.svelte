<script>
  export let id = '';
  export let opened = false;
</script>
<div 
  id="{id}" 
  class="collaspe" 
  role="region" 
  tabindex="-1" 
  hidden={opened ? undefined : true}
  {...$$restProps}
>
  <slot />
</div>