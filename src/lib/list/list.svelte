<script>
  export let variant = undefined;
  export let size = undefined;
</script>
<ol 
  class="list" {...$$restProps}
  class:list--indented={ variant == 'indented' }
  class:list--sizeSmall={ size == 'small' }
  class:list--sizeLarge={ size == 'large' }
  {...$$restProps}
>
  <slot />
</ol>
<style>
.list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  gap: 4px;
  background-color: #fff;
}

.list--indented {
  padding-left: 16px;
}
</style>