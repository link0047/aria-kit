<script>
const products = [{ 
  image: 'https://spencers.scene7.com/is/image/Spencers/03653326-a?wid=222&hei=222',
  name: 'Black Mini Skirt',
  price: '26.99'
}, { 
  image: 'https://spencers.scene7.com/is/image/Spencers/03653326-a?wid=222&hei=222',
  name: 'Black Mini Skirt',
  price: '26.99'
},{ 
  image: 'https://spencers.scene7.com/is/image/Spencers/03653326-a?wid=222&hei=222',
  name: 'Black Mini Skirt',
  price: '26.99'
}];

</script>
<h1>About</h1>
<div class="grid grid-3">
  {#each products as product}
    <div class="product-card product-card--certona product-card--raised">
      <picture class="product-card__media">
        <source media="(max-width: 560px)" srcset="{product.image}">
        <img alt="Black Mini Skirt" class="image" decoding="async" src="{product.image}">
      </picture>
      <div class="product-card__info">
        <h2 class="product-card__name">{product.name}</h2>
        <div class="product-card__pricing">
          <span class="product-card__price">${product.price}</span>
        </div>
      </div>
      <div class="select">
        <label id="" class="select__label" for="select-1">Size</label>
        <select class="select__native-control" id="select-1">
          <optgroup label="Select a size">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </optgroup>
        </select>
        <div id="select-1-error" class="error-message" aria-live="assertive" role="alert"></div>
      </div>
      <button type="button" class="btn btn-certona">
        Add To Cart
      </button>
    </div>
  {/each}
</div>

<style>
.grid {
  position: relative;
  padding: 8px 0;
  display: grid;
  gap: 16px;
}

.grid-3 {
  grid-template-columns: repeat(2, 1fr);
}

.product-card__media {
  height: 80px;
  margin-bottom: 8px;
}
.image {
  width: 100%;
  height: auto;
  display: block;
}
.btn {
  -webkit-tap-highlight-color: transparent;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.875rem;
  text-decoration: none;
  text-transform: initial;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 64px;
  height: 36px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  outline: 0;
  background-color: transparent;
  overflow: hidden;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-appearance: none;
  appearance: none;
  gap: 4px;
}

.product-card--certona .btn-certona {
  color: #fff;
  background: #008a00;
  grid-area: addToCart;
}

.product-card {
  position: relative;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  display: block;
  padding: 8px;
  border-radius: 8px;
}

.product-card--raised {
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
 }

.product-card--certona {
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-template-rows: 1fr 56px 36px;
  grid-template-areas: 
    "productImage productInfo"
    "sizeSelect sizeSelect"
    "addToCart addToCart";
  gap: 8px;
}

.product-card__info {
  grid-area: productInfo;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
}

.product-card--certona .product-card__name {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: #000;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: productName;
}

.product-card--certona .product-card__pricing {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
}

.product-card--certona .select {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  grid-area: sizeSelect;
}

.select__label {
  color: #212121;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 4px;
}

.select__native-control {
  -webkit-appearance: none;
  appearance: none;
  outline: 0;
  color: #212121;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: .04em;
  border: 1px solid #949499;
  border-radius: 4px;
  background-color: #fff;
  height: 36px;
  width: 100%;
  min-width: 88px;
  padding: 8px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: border, box-shadow;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23212121' viewBox='0 0 24 24'%3E%3Cpath d='M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83z'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right;
}

.select__native-control:hover {
  border-color: #000;
  box-shadow: inset 0 0 0 1px #000;
  cursor: pointer;
}

.select__native-control:focus {
  border-color: #3367d6 #285bc7 #2451b2;
  box-shadow: inset 0 0 0 1px #2451b2;
}
</style>