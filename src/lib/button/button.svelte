<script>
 export let type = 'button';
 export let variant = 'default';
 export let raised = false;
 export let disabled = false;
//  export let size = '';
</script>
<button 
  class="btn"
  class:btn--primary={ variant === 'primary' }
  class:btn--outlined={ variant === 'outlined' }
  class:btn--icon={ variant === 'icon' }
  class:btn--raised={ raised }
  type="{type}"
  disabled={disabled}
  {...$$restProps}
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:blur
  on:focus
>
  <slot/>
</button>
<style>
.btn {
  -webkit-tap-highlight-color: transparent;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.875rem;
  text-decoration: none;
  text-transform: initial;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 64px;
  height: 36px;
  padding: 0 16px;
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
  gap: 4px;
}

.btn--icon {
  padding: 0;
  min-width: 24px;
}

.btn--raised {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn--raised:hover, .btn--raised:focus {
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}

.btn:not(:disabled) {
  color: #212121;
  background-color: transparent;
}

.btn:hover {
  cursor: pointer;
}
</style>