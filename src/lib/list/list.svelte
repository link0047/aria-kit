<ol class="list" {...$$restProps}>
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
</style>