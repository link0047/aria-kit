<script>
  export let ref = null;
  export let id = ``;
</script>
<div
  bind:this="{ref}"
  id="{id}"
  role="dialog" 
  tabindex="-1" 
  aria-label="" 
  class="popover"
  {...$$restProps}
>
  <slot />
</div>
<style>
.popover {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  background-color: #fff;
  border-radius: 3px;
  max-height: calc(100vh - 56px);
  outline: 0px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%), 0 3px 1px -2px rgb(0 0 0 / 20%);
  color: #212121;
  z-index: 999;
}
</style>