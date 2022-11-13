<template>
  <div class="table-renderer">

    <table>
      <thead>
        <tr>
          <th v-for="col of cols" :key="col.key">
            {{ col.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row of tableStore.tables" :key="row.hash_id">
          <td v-for="col of cols" :key="col.key">
            <div v-if="col.key == 'attributes.club_name'" class="d-flex g-10">
              <img :src="row.attributes.logo" alt="logo">
              {{ get(row, col.key) }}

            </div>
            <span v-else :class="col.class">
              {{ get(row, col.key) }}
            </span>
          </td>
        </tr>

      </tbody>
    </table>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
// @ts-ignore
import get from 'lodash.get'
import type { Table } from '../models/competition';
import { useTableStore } from '../stores/table.store';
// const movies = await fetch('https://jsonplaceholder.typicode.com/todos').then((response) =>
//   response.json()
// );


export default defineComponent({
  name: 'TableRenderer',
  components: {
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
  data() {
    return {
      get,
      tableData: [] as Table[],
      cols: [
        {
          text: '#',
          key: 'attributes.position'
        },
        {
          text: 'Team',
          key: 'attributes.club_name'
        },
        {
          text: 'Pl',
          key: 'attributes.played'
        },
        {
          text: 'W',
          key: 'attributes.won'
        }, {
          text: 'D',
          key: 'attributes.drawn'
        }, {
          text: 'L',
          key: 'attributes.lost'
        },
        {
          text: 'Pts',
          key: 'attributes.points',
          class: 'bold'
        },
      ]

    }
  },
});
</script>
<style lang="scss">
.table-renderer {
  margin: 1rem;
  background-color: white;
  padding: 5px;
  border-radius: 12px;

  .d-flex {
    display: flex;
  }

  .g-10 {
    gap: 10px;
  }

  .bold {
    font-weight: bold;
  }

  --tr-height: 50px;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      tr {
        height: var(--tr-height);
        border-bottom: solid 1px var(--border-color);

        th {
          &:first-of-type {
            padding-left: 11px;
          }

          text-align: left;
        }
      }
    }

    tbody {
      tr {
        height: var(--tr-height);
        border-bottom: solid 1px var(--border-color);

        &:last-of-type {
          border-bottom: 0;
        }

        td {
          &:first-of-type {
            padding-left: 11px;
          }

          min-width: 25px;

          img {
            width: 22px;
            height: 22px;
          }
        }

      }
    }
  }
}
</style>