<template>
  <div class="backdrop" @click="closeBackdrop">
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { PropType } from 'vue';

export default Vue.extend({
  name: 'Backdrop',
  props: {
    close: {
      type: Function as PropType<() => void>,
    },
  },
  methods: {
    closeBackdrop() {
      this.close();
    },
  },
});
</script>

<style lang="scss" scoped>
.backdrop {
    height: 100vh;
    width: 100vw;
    background: rgba($color: #000000, $alpha: 0.5);
    filter: blur(4);
    top: 0;
    right: 0;
    position: fixed;
}
</style>
