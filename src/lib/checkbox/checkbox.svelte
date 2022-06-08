<script>
  export let id = '';
  export let labelId = '';
  export let name = '';
  export let value = '';
  export let required = false;
</script>
<div class="checkbox">
  <input class="checkbox__native-control" id="{id}" name="{name}" type="checkbox" value="{value}" aria-labelledby="{labelId}" required={required || undefined}>
  <div class="checkbox__display"></div>
  <label id={labelId} class="checkbox__label" for="{id}">
    <slot />
  </label>
</div>
<style>
.checkbox {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  position: relative;
  margin: 0 8px 8px 0;
  cursor: pointer;
}

.checkbox__native-control {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  opacity: 0;
}

.checkbox__display {
  position: relative;
  border-radius: 2px;
  border: 2px solid rgba(0, 0, 0, 0.54);
  width: 20px;
  height: 20px;
  pointer-events: none;
  background-color: transparent;
  transition: border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);
}

.checkbox__display:before {
  content: '';
  position: absolute;
  width: 6px;
  height: 2px;
  background-color: #fff;
  transform: rotate(45deg);
  top: 9px;
  left: 1px;
  opacity: 0;
}

.checkbox__display:after {
  content: '';
  position: absolute;
  width: 12px;
  height: 2px;
  background-color: #fff;
  top: 7px;
  left: 3px;
  transform: scaleX(0) rotate(0);
  transition: opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 120ms 0ms;
}

.checkbox__native-control:checked + .checkbox__display:before {
  opacity: 1;
}

.checkbox__native-control:checked + .checkbox__display:after {
  transform: scaleX(1) rotate(-45deg);
}

.checkbox__native-control:checked + .checkbox__display {
  background-color: #4877da;
  border-color: #4877da;
}

.checkbox__native-control:focus + .checkbox__display,
.checkbox__native-control:hover + .checkbox__display {
  border-color: #000;
}

.checkbox__label {
  padding: 0 8px;
}
</style>