<script setup>
import { ref } from 'vue';

const isCollapsed = ref(false);

defineProps({
   groupName: String,
   activeFoldableItem: String,
   items: Array,
});

const toggleCollapse = () => {
   isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
   <div
      :class="`foldable-item ${activeFoldableItem === groupName ? 'active' : ''}`"
      v-on:click="toggleCollapse"
   >
      <div class="header">
         <div class="name">
            <Icon name="tabler:chevron-right" size="18" mode="svg" class="icon stroke-2 chevron" />
            {{ groupName }}
         </div>

         <div class="count">{{ items.length }}</div>
      </div>

      <div :class="`items`">
         <div
            v-for="item in items"
            class="item"
            :key="item.name"
            :data-icon-type="item.icon.startsWith('tabler:')"
         >
            <div class="name">
               <Icon
                  v-if="item.icon.startsWith('tabler:')"
                  :name="item.icon"
                  size="22"
                  mode="svg"
                  class="icon"
               />
               <FileType v-else :type="item.icon" />
               <div class="text">{{ item.name }}</div>
            </div>
            <div class="badge">{{ item.badge }}</div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.foldable-item {
   padding: 10px 5px;
   cursor: pointer;
   display: flex;
   flex-direction: column;
}

.foldable-item.active {
   gap: 10px;
}

.header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   user-select: none;
}

.name {
   display: flex;
   align-items: center;
   gap: 10px;
   font-size: 14px;
   color: var(--color-argent);
   font-weight: 500;
}

.foldable-item.active .name,
.foldable-item:hover .name {
   color: var(--color-unique-grey);
}

.count {
   padding: 6px;
   background-color: var(--color-eerie-black);
   font-size: 12px;
   color: var(--color-squant);
   font-weight: 400;
   border-radius: 5px;
   line-height: 0.66;
}

.items {
   display: flex;
   flex-direction: column;
   opacity: 0;
   height: 0;
   overflow: hidden;
   transition: 200ms all ease;
   gap: 5px;
}

.foldable-item.active .items {
   opacity: 1;
   height: auto;
}

.foldable-item.active .chevron {
   transform: rotate(90deg);
}

.item {
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 2px 2px 2px 0;
}

.item[data-icon-type='true'] {
   padding: 2px 5px 2px 0;
}

.text {
   color: var(--color-argent);
   font-size: 14px;
   font-weight: 400;
   transition: 200ms all ease;
}

.text:hover {
   color: var(--color-unique-grey);
}

.badge {
   font-size: 12px;
   color: var(--color-stone-cold);
   font-weight: 500;
}
</style>
