<script>
  import Panel from "../panel"
  export let title = '';
</script>
<aside class="sidebar">
  <Panel title={title}>
    <slot />
  </Panel>
</aside>
<style>
.sidebar {
  grid-area: primary-sidebar;
  z-index: 10;
  position: relative;
  overflow: scroll;
  background-color: #fff;
  border-right: 1px solid #e1e3e5;
}
</style>