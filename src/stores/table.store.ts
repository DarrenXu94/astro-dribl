import { defineStore } from "pinia";
import type { Match, Table } from "../models/competition";
import { getData } from "../services/Table.service";
// @ts-ignore
import uniqby from "lodash.uniqby";
// @ts-ignore
import sortby from "lodash.sortby";

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

      this.upcoming = sortby(
        uniqby(upcoming, "attributes.event_name"),
        "attributes.date"
      );
      this.recent = sortby(
        uniqby(recent, "attributes.event_name"),
        "attributes.date"
      );
    },
    async fetchTable() {
      const res = await getData();
      this.tables = res as any;

      this.getFixtures(res as any);
    },
  },
});
