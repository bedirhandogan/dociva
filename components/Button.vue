<script setup>
defineProps({
   name: String,
});
</script>

<template>
   <div class="button">{{ name }}</div>
</template>

<style scoped>
.button {
   padding: 7px 10px;
   height: min-content;
   width: max-content;
   border: 1px dashed var(--color-eerie-black);
   font-size: 14px;
   color: var(--color-unique-grey);
   border-radius: 7.5px;
   transition: 200ms all;
   cursor: pointer;
}

.button:hover {
   background-color: var(--color-eerie-black);
   border-style: solid;
}
</style>
