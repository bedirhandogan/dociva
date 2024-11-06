<template>
   <div class="standalone-items">
      <slot></slot>
   </div>
</template>

<style scoped>
.standalone-items {
   padding-top: 5px;
   margin-top: 5px;
   display: flex;
   flex-direction: column;
   border-top: 1px dashed var(--color-lead);
}
</style>
