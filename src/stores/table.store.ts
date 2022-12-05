import { defineStore } from "pinia";
import type { Match, Table } from "../models/competition";
import { getData } from "../services/Table.service";
// @ts-ignore
import uniqby from "lodash.uniqby";
// @ts-ignore
import orderby from "lodash.orderby";

export const useTableStore = defineStore("table", {
  state: () => ({
    tables: [] as Table[],
    upcoming: [] as Match[],
    recent: [] as Match[],
  }),

  actions: {
    getFixtures(res: Table[]) {
      let upcoming = [] as Match[];
      let recent = [] as Match[];
      for (let team of res) {
        upcoming = [...team.attributes.upcoming_matches, ...upcoming];
        recent = [...team.attributes.recent_matches, ...recent];
      }

      this.upcoming = orderby(
        uniqby(upcoming, "attributes.event_name"),
        "attributes.date"
      );
      this.recent = orderby(
        uniqby(recent, "attributes.event_name"),
        "attributes.date",
        "desc"
      );
    },
    setTableData(data: Table[]) {
      this.tables = data;
    },
    async fetchTable() {
      const res = await getData();
      this.tables = res as any;

      this.getFixtures(res as any);
    },
  },
});
