<header class="global-header">
  <div class="topbar">
    <div class="topbar__start">
      <slot name="start"/>
    </div>
    <div class="topbar__middle">
      <slot name="middle"/>
    </div>
    <div class="topbar__end">
      <slot name="end"/>
    </div>
  </div>
</header>
<style>
.global-header {
  grid-area: header;
  position: relative;
  z-index: 50;
  width: 100vw;
}

.topbar {
  position: relative;
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  grid-template-areas: "start middle end";
  height: 56px;
  background-color: rgba(255, 255, 255, 1);
  border: 0;
  box-shadow: 0 2px 1px rgb(0 0 0 / 5%), 0 0 1px rgb(66 71 76 / 45%);
}

.topbar__start,
.topbar__middle,
.topbar__end {
  display: flex;
  align-items: center;
}

.topbar__start {
  width: 144px;
  grid-area: start;
}

.topbar__middle {
  grid-area: middle;
  justify-content: center;
}

.topbar__end {
  width: 144px;
  grid-area: end;
}
</style>