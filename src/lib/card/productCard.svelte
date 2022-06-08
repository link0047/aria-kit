<script>
  import Card from "./card.svelte";
  const transparentPixel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
  export let url = '';
  export let title = '';
  export let image = { alt: '', mobile: transparentPixel, desktop: transparentPixel };
</script>
<Card class="card--product">
  <a href="{url}" title="{title}">
    <picture class="card__media">
      <source media="(max-width: 560px)" srcset="{image.mobile}"/>
      <img width="232" height="232" alt="{image.alt}" class="image" decoding="async" src="{image.mobile}">
    </picture>
    <div class="card__title">{title}</div>
  </a>
</Card>
<style>
  a, a:visited {
    color: #221924;
    text-decoration: none;
  }

  .card__title {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.4;
    margin: 8px 0;
    transition: transform .28s ease-in-out;
  }

  :global(.card--product) {
    transition: transform .28s cubic-bezier(.22, .61, .36, 1);
  }

  :global(.card--product) .card__title {
    text-align: center;
  }

  @media (min-width: 8in) {
    :global(.card--product):hover {
      transform: translatey(-8px);
    }

    :global(.card--product):hover .card__title {
      transform: scale(1.1);
    }

  }
</style>