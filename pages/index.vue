<script setup>
const sidebarCollapsedState = useSidebarCollapsed();

const toggleSidebar = () => {
   sidebarCollapsedState.value = !sidebarCollapsedState.value;
};
</script>

<template>
   <div class="main">
      <div class="header">
         <div class="title">
            <div class="sidebar-trigger" v-on:click="toggleSidebar" v-if="sidebarCollapsedState">
               <Icon
                  name="tabler:layout-sidebar-left-expand"
                  size="26"
                  mode="svg"
                  class="icon active-hover"
               />
            </div>
            <div class="text">
               <span>Dashboard</span>
               <span>View and edit your content.</span>
            </div>
         </div>

         <Search />
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
   padding-bottom: 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
}

.main .header .title {
   display: flex;
   align-items: center;
   gap: 35px;
}

.main .header .title .text {
   display: flex;
   flex-direction: column;
   gap: 5px;
}

.main .header .title span:nth-child(1) {
   font-size: 20px;
   font-weight: 500;
}

.main .header .title span:nth-child(2) {
   font-size: 14px;
   color: var(--color-squant);
}

.main .sidebar-trigger {
   display: flex;
   cursor: pointer;
}
</style>
