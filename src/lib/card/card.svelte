<script>
  export let variant = '';
  export let raised = false;
</script>
<div 
  class="card {$$props.class || ''}"
  class:card--outlined={ variant === 'outlined' }
  class:card--raised={ raised }
>
  <slot />
</div>
<style>
  .card {
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    overflow: hidden;
    position: relative;
  }

  .card--outlined {
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
  }

  .card--raised {
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  }
</style>