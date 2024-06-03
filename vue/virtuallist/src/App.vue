<template>
  count:{{ inx }}
  <div class="list" @scroll="handleScroll">
    <div :style="{ height: height + 'px' }" class="mask"></div>
    <div :style="{ top: offset + 'px' }" class="itemBox">
      <div
        v-for="(item, index) in showList"
        :key="inx + index"
        class="listItem"
      >
        {{ inx + index }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { onMounted } from "vue";
let height = ref(0);
let list = Array(100000).fill(0);
let inx = ref(0);
let offset = ref(0);
let showList = computed(() => list.slice(inx.value, 21 + inx.value));
const handleScroll = (e) => {
  offset.value = e.target.scrollTop - (e.target.scrollTop % 42);
  console.log(e.target.scrollTop);
  inx.value = Math.floor(e.target.scrollTop / 42);
};
onMounted(() => {
  height.value = list.length * 42;
});
</script>
<style scoped>
.list {
  border: 1px solid red;
  padding: 20px;
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  width: 200px;
}
.mask {
  visibility: hidden;
  top: 0;
  left: 0;
  z-index: -1;
}
.itemBox {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: fit-content;
}
.listItem {
  width: 200px;
  padding: 10px;
  height: 22px;
  outline: 1px solid gray;
}
</style>
