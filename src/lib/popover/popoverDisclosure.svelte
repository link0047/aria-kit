<script></script>
<button type="button" aria-expanded="false" aria-controls="" aria-haspopup="dialog" class="popover__disclosure">
  <slot />
</button>
<style>
.popover__disclosure {
  -webkit-tap-highlight-color: transparent;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.875rem;
  text-decoration: none;
  text-transform: initial;
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  min-width: 40px;
  height: 36px;
  padding: 0 8px;
  border: none;
  border-radius: 3px;
  outline: 0;
  background-color: transparent;
  overflow: hidden;
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-appearance: none;
}
</style>