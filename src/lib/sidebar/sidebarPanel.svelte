<script>
  export let opened = false;
  export let title = 'Panel';
</script>
<div class="panel" hidden={opened ? undefined : true}>
  <header class="panel__header">
    <slot name="closeBtn" />
    <h2 class="panel__title">{title}</h2>
  </header>
  <section class="panel__body">
    <slot/>
  </section>
</div>
<style>
.panel {
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: #fff;
}

.panel__header {
  padding: 8px 16px;
  display: grid;
  gap: 4px;
  grid-template-columns: 36px 1fr;
  border-bottom: 1px solid #e1e3e5;
}

.panel__title {
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 24px;
}

.panel__body {
  padding: 8px;
}
</style>