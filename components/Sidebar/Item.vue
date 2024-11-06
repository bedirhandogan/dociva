<script setup>
const props = defineProps({
   name: String,
   iconName: String,
   shortCutKeys: Array,
   isActive: Boolean,
});
</script>

<template>
   <div :class="`item ${isActive && 'active'}`">
      <div class="name">
         <Icon :name="props.iconName" size="24" mode="svg" class="icon" />
         {{ props.name }}
      </div>
      <div class="short-cut-keys">
         <div v-for="item in shortCutKeys" class="key" :key="item">{{ item }}</div>
      </div>
   </div>
</template>

<style scoped>
.item {
   min-height: 37.7px;
   cursor: pointer;
   font-size: 14px;
   padding: 5px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border: 1px solid transparent;
   border-radius: 8px;
   transition: 200ms all ease;
}

.item:hover,
.item.active {
   background-color: var(--color-chaos-black);
   border: 1px solid var(--color-eerie-black);
   box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
}

.item.active .name,
.item:hover .name {
   color: var(--color-white);
}

.name {
   display: flex;
   align-items: center;
   gap: 10px;
   color: var(--color-unique-grey);
}

.short-cut-keys {
   display: flex;
   gap: 5px;
   transform: scale(0.8);
   transform-origin: right;
   margin-left: -10px; /* Adjust this value as needed */
}

.key {
   font-size: 14px;
   font-weight: 500;
   min-height: 26.1px;
   min-width: 26.1px;
   background-color: var(--color-eerie-black);
   color: var(--color-shark-fin);
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 5px;
   padding: 5px;
}
</style>
