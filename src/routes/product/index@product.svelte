<script>
  import { Breadcrumb, Crumb } from "$lib/breadcrumbs";
  const product = {
    name: 'Blue Plaid School Girl Skirt',
    rating: 5,
    price: {
      base: 26.99,
      sale: null,
    }
  }

  function getSaleSaving() {
    const { base, sale } = product.price;
    return sale / base * 100;
  }
</script>
<Breadcrumb>
  <Crumb href="/" on:click={(evt) => {evt.preventDefault()}}>Home</Crumb>
  <Crumb href="/" on:click={(evt) => {evt.preventDefault()}}>Lingerie</Crumb>
  <Crumb href="/" on:click={(evt) => {evt.preventDefault()}}>Fantasy Dress Up</Crumb>
  <Crumb href="/" on:click={(evt) => {evt.preventDefault()}} current>Blue Plaid School Girl Skirt</Crumb>
</Breadcrumb>
<div class="pdp-layout">
  <div class="productImage">
    <picture class="productImage__media">
      <img class="image" src="https://spencers.scene7.com/is/image/Spencers/03653300-a?hei=500" alt="product" decoding="async" />
    </picture>
  </div>
  <div class="productDetail">
    <header class="productDetail__header">
      <h1>{product.name}</h1>
      <div>
        {#each Array(product.rating) as _}
          <svg role="presentation" focusable="false" class="icon" viewBox="0 0 24 24">
            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
        {/each}
      </div>
    </header>
    <div class="productDetail__pricing">
      {#if product.price.sale}
        <span>${product.price.sale}</span>
        <s>${product.price.base}</s>
        <span>{getSaleSaving()}% Off</span>
      {:else}
        <span>${product.price.base}</span>
      {/if}
    </div>
    <div class="test-block"></div>
  </div>
</div>
<style>
  .pdp-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-top: 16px;
  }
  .productImage {
    position: sticky;
  }

  .test-block {
    height: 1700px;
    width: 100%;
  }

  .productImage__media {
    height: 580px;
    display: block;
  }
</style>