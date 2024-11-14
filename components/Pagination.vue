<script setup>
defineProps({
   activePage: Number,
   totalPages: Number,
   prevPage: Function,
   nextPage: Function,
});
</script>

<template>
   <div class="pagination">
      <div :class="`button ${activePage === 0 ? 'disabled' : ''}`" v-on:click="prevPage">
         <Icon
            name="tabler:chevron-left"
            size="20"
            mode="svg"
            class="icon"
            style="--icon-color: var(--color-white)"
         />
      </div>
      <div class="page-number">
         {{ activePage + 1 }} <span>/ {{ totalPages }}</span>
      </div>
      <div
         :class="`button ${activePage + 1 === totalPages ? 'disabled' : ''}`"
         v-on:click="nextPage"
      >
         <Icon
            name="tabler:chevron-right"
            size="20"
            mode="svg"
            class="icon"
            style="--icon-color: var(--color-white)"
         />
      </div>
   </div>
</template>

<style scoped>
.pagination {
   display: flex;
   gap: 5px;
   align-items: center;
}

.page-number {
   color: var(--color-unique-grey);
   font-size: 14px;
   border: 1px solid var(--color-eerie-black);
   padding: 7px 14px;
   border-radius: 5px;
   font-weight: 300;
   font-family: 'Open Sans', sans-serif;
   user-select: none;
}

.page-number span {
   opacity: 0.5;
}

.button {
   padding: 5px;
   background-color: var(--color-cursed-black);
   border: 1px solid var(--color-eerie-black);
   border-radius: 5px;
   transition: 200ms background-color;
   cursor: pointer;
}

.button.disabled {
   cursor: default;
   opacity: 0.5;
}

.button:not(.disabled):hover {
   background-color: var(--color-pot-black);
}
</style>
