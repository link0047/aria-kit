<script>
  export let ref = null;
  export let invalid = false;
  export let name = undefined;
  export let disabled = false;
  export let required = false;
  export let labelText = '';
  export let id = ``;
  $: errorId = `error-${id}`;
</script>
<div class="select">
  <label id="" class="select__label" for="{id}">{labelText}</label>
  <select 
    bind:this="{ref}"
    class="select__native-control"
    aria-describedby="{invalid ? errorId : undefined}"
    aria-invalid="{invalid || undefined}"
    disabled="{disabled || undefined}"
    required="{ required || undefined }"
    id="{id}"
    name="{name}"
    {...$$restProps}
  >
    <slot />
  </select>
  <div id="{errorId}" class="error-message" aria-live="assertive" role="alert"></div>
</div>
<style>
.select {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  margin: 0 0 8px;
}

.select__native-control {
  -webkit-appearance: none;
  appearance: none;
  outline: 0;
  color: #212121;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: .04em;
  border: 1px solid #949499;
  border-radius: 4px;
  background-color: #fff;
  height: 36px;
  width: 100%;
  min-width: 88px;
  padding: 8px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: border, box-shadow;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23212121' viewBox='0 0 24 24'%3E%3Cpath d='M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right;
}

.select__native-control:hover {
  border-color: #000;
  box-shadow: inset 0 0 0 1px #000;
  cursor: pointer;
}

.select__native-control:focus {
  border-color: #3367d6 #285bc7 #2451b2;
  box-shadow: inset 0 0 0 1px #2451b2;
}
</style>