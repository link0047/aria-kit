<script>
  export let value = '';
  export let hidden = false;
  export let disabled = false;
  export let selected = false;
</script>
<option
  value="{value}"
  selected="{selected}"
  hidden="{hidden}"
  disabled="{disabled}"
>
  <slot/>
</option>