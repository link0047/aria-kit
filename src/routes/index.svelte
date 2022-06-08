<script>
  import { Carousel, Slide } from "$lib/carousel";
  import { Breadcrumb, Crumb } from "$lib/breadcrumbs";
  import { store } from '../store';
  const slides = new Array(3);
</script>
<Carousel>
  {#each slides as slide, i}
    <Slide>
      <div class="block">{i}</div>
    </Slide>   
  {/each}
  
  
</Carousel>
<section class="page-section">
  {#if $store.header.hasBreadcrumbs}
    <Breadcrumb>
      <Crumb href="/" on:click={(evt) => {evt.preventDefault()}}>Home</Crumb>
      <Crumb href="/{$store.header.currentPage}" on:click={(evt) => {evt.preventDefault()}} current>{$store.header.currentPage}</Crumb>
    </Breadcrumb>
  {/if}
  <header class="page-section__header"> 
    <h1 class="page-section__title"><span>{$store.header.currentPage}</span></h1> 
  </header>
</section>
{#each $store.sections as section}
    <section class="page-section">
      {#if section.heading}
        <header class="page-section__header">
          <h2 
            class="page-section__title" 
            class:middle={section.alignment == 'middle'}
            class:right={section.alignment == 'right'}
          >
            {section.heading}
          </h2>
        </header>
      {/if}
      <div class="grid" role="group" style="--columns:{section.columnNumber}">
        {#each section.data as card}
          <svelte:component this={card.component} {...card.props}/>
        {/each}
      </div>
    </section>
  {/each}
<style>
  .page-section__header {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    padding: 8px 0;
  }

  .page-section__header .page-section__title {
    flex: 1;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 24px;
    text-transform: uppercase;
  }

  .middle {
    text-align: center;
  }

  .right {
    text-align: right;
  }

  .page-section__title {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.4em;
    margin: 0;
    position: relative;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(var(--columns, 4), 1fr);
    gap: 8px;
  }

  .block {
    background-color: #f2f2f2;
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>