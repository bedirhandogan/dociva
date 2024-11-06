<script setup>
const sidebarCollapsedState = useSidebarCollapsed();

const toggleSidebar = () => {
   sidebarCollapsedState.value = !sidebarCollapsedState.value;
};
</script>

<template>
   <div class="main">
      <div class="header">
         <div class="sidebar-trigger" v-on:click="toggleSidebar" v-if="sidebarCollapsedState">
            <Icon
               name="tabler:layout-sidebar-left-expand"
               size="22"
               mode="svg"
               class="icon active-hover"
            />
         </div>
         Main Content
      </div>
   </div>
</template>

<style>
.main {
   padding: 35px;
}

.main .header {
   display: flex;
   align-items: center;
   gap: 10px;
}

.main .sidebar-trigger {
   display: flex;
   cursor: pointer;
}
</style>
