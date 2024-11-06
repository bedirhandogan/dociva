<script setup>
defineProps({
   isActive: Boolean,
});
</script>

<template>
   <div :class="`item ${isActive ? 'active' : ''}`">
      <slot></slot>
   </div>
</template>

<style scoped>
.item {
   width: 100%;
   padding: 8px 25px 8px 8px;
   font-size: 14px;
   color: var(--color-unique-grey);
   transition: 200ms all ease;
   cursor: pointer;
   border-radius: 5px;
   user-select: none;
   display: flex;
   align-items: center;
   gap: 8px;
}

.item.active,
.item:hover {
   background-color: var(--color-dynamic-black);
   color: var(--color-white);
}
</style>
