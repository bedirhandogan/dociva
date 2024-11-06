<script setup>
const activeDropdownMenu = ref(false);
const dropdownRef = ref(null);

const closeDropdown = (event) => {
   // Check if click is outside dropdown
   if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      activeDropdownMenu.value = false;
   }
};

const toggleActiveDropdownMenu = () => {
   activeDropdownMenu.value = !activeDropdownMenu.value;

   if (activeDropdownMenu.value) {
      // Add listener when opening
      window.addEventListener('click', closeDropdown);
   } else {
      // Remove listener when closing
      window.removeEventListener('click', closeDropdown);
   }
};

// Cleanup listener on component unmount
onUnmounted(() => {
   window.removeEventListener('click', closeDropdown);
});

const props = defineProps({
   direction: {
      type: String,
      default: 'up',
   },
   gap: {
      type: Number,
      default: 10,
   },
});
</script>

<template>
   <div :class="`dropdown direction-${direction}`" ref="dropdownRef">
      <div class="trigger" v-on:click="toggleActiveDropdownMenu">
         <slot name="DropdownTrigger"></slot>
      </div>
      <div
         :class="['menu', { active: activeDropdownMenu }]"
         :style="{
            transform:
               direction === 'up' ? `translateY(-${22 + gap}px)` : `translateY(${22 + gap}px)`,
         }"
      >
         <slot name="DropdownMenu"></slot>
      </div>
   </div>
</template>

<style scoped>
.dropdown {
   position: relative;
   display: flex;
   align-items: flex-end;
   gap: 10px;
}

.trigger {
   cursor: pointer;
   display: flex;
}

.menu {
   display: flex;
   flex-direction: column;
   padding: 5px;
   border-radius: 10px;
   opacity: 0;
   width: 0;
   height: 0;
   overflow: hidden;
   position: absolute;
   transition: 200ms opacity ease;
}

.dropdown.direction-up {
   flex-direction: column-reverse;
}

.dropdown.direction-down {
   flex-direction: column;
}

.menu.active {
   width: max-content;
   height: max-content;
   opacity: 1;
   background-color: var(--color-matt-black);
   border: 1px solid var(--color-lead);
}
</style>
