<template>
  <div class="home">
    home
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import axios from '../shared/tools/axios';
import { RawNode } from '../shared/models/Node.model';

export default Vue.extend({
  name: 'Home',
  data() {
    return {
      treeData: false,
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData(): Promise<void> {
      let treeData = await this.getData();
      treeData = treeData.data;
      this.transformTreeData(treeData);
    },
    getData(): Promise<RawNode[]> {
      return axios.get('/nodes');
    },
    transformTreeData(data: RawNode[]) {
      console.log(data);
    },
  },
});
</script>
