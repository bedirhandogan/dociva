<script setup>
defineProps({
   keys: Array,
});
</script>

<template>
   <div class="short-cut">
      <div v-for="item in keys" class="key" :key="item">{{ item }}</div>
   </div>
</template>

<style>
.short-cut {
   display: flex;
   gap: 5px;
   cursor: pointer;
}

.short-cut .key {
   padding: 3px 5px;
   background-color: var(--color-eerie-black);
   border-radius: 4px;
   color: var(--color-shark-fin);
   font-size: 13px;
   text-transform: uppercase;
   font-weight: 400;
}
</style>
