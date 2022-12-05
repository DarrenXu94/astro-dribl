<template>
  <div class="results">
    <div v-for="match of tableStore.recent" :key="match.hash_id" class="results-container">
      <span class="date-span">
        {{ dayjs(match.attributes.date).format('DD MMM') }}
      </span>
      <div class="result-card">
        <span class="align-right">
          {{ match.attributes.home_club_name }}
        </span>
        <img :src="match.attributes.home_logo" alt="Home team logo">
        <div>
          {{ match.attributes.home_score }} : {{ match.attributes.away_score }}
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
import { defineComponent, PropType } from 'vue';
import { useTableStore } from '../stores/table.store';
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import type { Table } from '../models/competition';
dayjs.extend(customParseFormat)

export default defineComponent({
  name: 'Results',
  components: {
  },
  props: {
    parentData: {
      required: true,
      type: Object as PropType<Table[]>
    }
  },
  async mounted() {
    this.tableStore.setTableData(this.parentData as Table[]);
    this.tableStore.getFixtures(this.parentData as Table[]);
  },
  setup() {
    const tableStore = useTableStore()
    return {
      tableStore
    }
  },
  data() {
    return {
      dayjs
    };
  },
});
</script>
<style lang="scss">
.results {

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

  .results-container {
    padding-top: 4px;

    .date-span {
      margin-left: 15px;
      font-weight: bold;
    }

    .result-card {
      font-weight: normal;
      position: relative;
      display: grid;
      -webkit-box-align: center;
      place-items: center;
      padding: 0px 5px;
      grid-template-columns: 1fr 25px 50px 25px 1fr;
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
