<template>
  <div class="fixtures">
    <div v-for="match of tableStore.upcoming" :key="match.hash_id" class="fixtures-container">
      <span class="date-span">
        {{ dayjs(match.attributes.date).format('DD MMM') }}
      </span>
      <div class="fixture-card">
        <span class="align-right">
          {{ match.attributes.home_club_name }}
        </span>
        <img :src="match.attributes.home_logo" alt="Home team logo">
        <div>


          {{ dayjs(match.attributes.date).format('HH:mm') }}
        </div>
        <img :src="match.attributes.away_logo" alt="Away team logo">
        <span class="align-left">
          {{ match.attributes.away_club_name }}
        </span>

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTableStore } from '../stores/table.store';
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

export default defineComponent({
  name: 'Fixtures',
  components: {
  },
  data() {
    return {
      dayjs
    };
  },
  async mounted() {
    this.tableStore.fetchTable()
  },
  setup() {
    const tableStore = useTableStore()
    return {
      tableStore
    }
  },
});
</script>
<style lang="scss">
.fixtures {

  .align-right {
    text-align: right;
  }

  .align-left {
    text-align: left;
  }

  margin: 1rem;

  padding: 1rem;
  background: white;
  padding: 5px;
  border-radius: 12px;

  .fixtures-container {
    padding-top: 4px;

    .date-span {
      margin-left: 15px;
      font-weight: bold;
    }

    .fixture-card {
      font-weight: normal;
      position: relative;
      display: grid;
      -webkit-box-align: center;
      place-items: center;
      padding: 0px 5px;
      grid-template-columns: 1fr 25px 40px 25px 1fr;
      column-gap: 15px;
      user-select: none;
      height: 70px;
      border-bottom: 1px solid var(--border-color);

      span {
        width: 100%;
      }

      & * {
        grid-row: 1 / 1;
      }

      img {
        width: 25px;
        height: 25px;
      }
    }
  }

}
</style>
