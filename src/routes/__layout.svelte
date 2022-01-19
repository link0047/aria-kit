<script>
  import GlobalHeader from "$lib/globalheader";
  import Sidebar from "$lib/sidebar";
  import { List, ListItem } from "$lib/list";
  import { Button } from "$lib/button";
  import { Select, SelectOptGroup ,SelectOption } from "$lib/select";

  function handleClick() {
    console.log('click');
  }
</script>
<div class="editor">
  <GlobalHeader>
    <Select slot="middle" style="width:400px">
      <SelectOptGroup label="Select Template">
        <SelectOption value selected="true">Homepage</SelectOption>
        <SelectOption>Section</SelectOption>
        <SelectOption>Hybrid</SelectOption>
      </SelectOptGroup>
    </Select>
  </GlobalHeader>
  <Sidebar title="Homepage">
    <List>
      <ListItem>Breadcrumbs</ListItem>
      <ListItem>Header</ListItem>
    </List>
    <Button on:click={handleClick}>
      <svg role="presentation" focusable="false" class="icon" viewBox="0 0 24 24"><path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" /></svg>
      Add Section
    </Button>
  </Sidebar>
  <main class="editor__live-area">
    <section class="page">
      <slot />
    </section>
  </main>
</div>
<style>
.editor {
  min-width: 0;
  max-width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 56px 1fr;
  grid-template-areas:
    "header"
    "main"
    "primary-sidebar";
  width: 100vw;
  height: 100vh;
  background-color: rgba(246, 246, 247, 1);
  overflow: hidden;
}

@media (min-width: 41.6875em) {
  .editor {
    grid-template-columns: 300px 1fr;
    grid-template-areas: "header header" "primary-sidebar main"; 
  }
}

.editor__live-area {
  min-width: 0;
  max-width: 100%;
  grid-area: main;
  z-index: 40;
  position: relative;
  display: flex;
  padding: 24px;
}

.editor__live-area .page {
  padding: 8px;
  border-radius: 4px;
}

.page {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  line-height: 1.4em;
  font-size: 16px;
  direction: ltr;
  background-color: #fff;
  unicode-bidi: embed;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  font-synthesis: none;
  font-feature-settings: "liga", "kern";
}
</style>