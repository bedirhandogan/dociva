<script setup>
const sidebarCollapsedState = useSidebarCollapsed();
const dashboard = ref(null);

onMounted(() => {
   if (dashboard.value.clientWidth <= 1024) {
      sidebarCollapsedState.value = true;
   }
});
</script>

<template>
   <div :class="sidebarCollapsedState ? 'dashboard collapsed' : 'dashboard'" ref="dashboard">
      <Sidebar />
      <NuxtPage />
   </div>
</template>

<style>
.dashboard {
   display: grid;
   grid-template-columns: 300px 1fr;
   transition: 200ms grid-template-columns ease;
}

.dashboard.collapsed {
   grid-template-columns: 0 1fr;
}
</style>
