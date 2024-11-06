<script setup>
defineProps({
   type: String,
});
</script>

<template>
   <div class="file-type">{{ type }}</div>
</template>

<style>
.file-type {
   padding: 6px 5.5px 5px 5px;
   background-color: var(--color-pot-black);
   border: 1px solid var(--color-eerie-black);
   border-radius: 5px;
   color: var(--color-unique-grey);
   font-size: 10px;
   font-weight: 500;
   line-height: 0.8;
}
</style>
