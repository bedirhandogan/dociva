<script setup>
defineProps({
   text: String,
});
</script>
<template>
   <div class="tooltip">
      <slot></slot>
      <div class="text">
         <span class="arrow" />
         {{ text }}
      </div>
   </div>
</template>

<style scoped>
.tooltip {
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
}

.tooltip:hover .text {
   opacity: 1;
}

.text {
   --space: 5px;
   position: absolute;
   top: calc(28px + var(--space));
   opacity: 0;
   background-color: var(--color-matt-black);
   border: 1px solid var(--color-lead);
   font-size: 12px;
   width: max-content;
   padding: 5px 10px;
   border-radius: 5px;
   color: var(--color-unique-grey);
   transition: opacity 0.2s;
}

.arrow {
   position: absolute;
   top: -3px;
   width: 10px;
   height: 10px;
   background-color: var(--color-matt-black);
   border-top: 1px solid var(--color-lead);
   border-left: 1px solid var(--color-lead);
   left: 50%;
   right: 50%;
   transform: rotate(45deg) translateX(-50%);
}
</style>
