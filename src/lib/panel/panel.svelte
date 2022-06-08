<script>
  export let title = '';
</script>
<div class="panel">
  <header class="panel__header">
    <h1 class="panel__title">
      {title}
    </h1>
  </header>
  <section class="panel__body">
    <slot />
  </section>
</div>
<style>
.panel {
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
}

.panel__title:first-letter {
  text-transform: capitalize;
}

.panel__header {
  padding: 8px 16px;
  border-bottom: 1px solid #e1e3e5;
}

.panel__body {
  padding: 8px;
}
</style>