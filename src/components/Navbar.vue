<template>
  <nav>
    <a href="/" :class="{ highlight: pathname == '/' }">Ladder</a>
    <a href="/fixtures" :class="{ highlight: pathname == '/fixtures' }">Fixtures</a>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  props: {
    pathname: {
      required: true
    }
  },
  mounted() {
    console.log(this.pathname)
  },
  components: {
  },
  data() {
    return {
    };
  },
});
</script>
<style lang="scss">
nav {
  display: flex;
  place-items: center;
  -webkit-box-align: center;
  padding-top: 8px;
  overflow-x: auto;
  background-color: white;
  margin-bottom: 10px;

  a {
    letter-spacing: 0.2px;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    width: auto;
    font-size: 13px;
    font-weight: bold;
    line-height: 1.15;
    padding-bottom: 22px;
    color: var(--light-grey);
    border-bottom: 3px solid transparent;
    margin-right: 15px;

    &.highlight {
      border-bottom: 3px solid var(--highlight);
      color: var(--highlight);


    }

    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>
