<script setup>
const activeFoldableItem = ref('');
const sidebarCollapsedState = useSidebarCollapsed();

const toggleActiveFoldableItem = (groupName) => {
   activeFoldableItem.value = activeFoldableItem.value === groupName ? '' : groupName;
};

const toggleSidebar = () => {
   sidebarCollapsedState.value = !sidebarCollapsedState.value;
};
</script>

<template>
   <div :class="`sidebar ${sidebarCollapsedState ? 'collapsed' : ''}`">
      <div class="header">
         <div class="brand">
            <img src="/logo.svg" alt="Logo" width="25" height="25" />
            <span>Dociva</span>
         </div>
         <div class="sidebar-collapsed-button" v-on:click="toggleSidebar">
            <Icon
               name="tabler:layout-sidebar-left-collapse"
               size="22"
               mode="svg"
               class="icon active-hover"
               style="cursor: pointer"
            />
         </div>
      </div>
      <div class="navigation">
         <SidebarItem name="Dashboard" icon-name="tabler:smart-home" :is-active="true" />
         <SidebarItem name="Import" icon-name="tabler:file-import" :short-cut-keys="['⌘', '1']" />
         <SidebarItem
            name="Create Cluster"
            icon-name="tabler:stack-2"
            :short-cut-keys="['⌘', '2']"
         />
         <SidebarFoldableItem
            groupName="Documents"
            v-on:click="() => toggleActiveFoldableItem('Documents')"
            :active-foldable-item="activeFoldableItem"
            :items="[
               {
                  name: 'User Guides',
                  icon: 'PDF',
                  badge: '825 KB',
               },
               {
                  name: 'Project Report',
                  icon: 'DOCX',
                  badge: '1.4 MB',
               },
               {
                  name: 'Meeting Notes',
                  icon: 'MD',
                  badge: '3.2 MB',
               },
            ]"
         />
         <SidebarFoldableItem
            groupName="Clusters"
            :active-foldable-item="activeFoldableItem"
            v-on:click="() => toggleActiveFoldableItem('Clusters')"
            :items="[
               {
                  name: 'Marketing Assets',
                  icon: 'tabler:stack-2',
                  badge: '8',
               },
               {
                  name: 'Research Papers',
                  icon: 'tabler:stack-2',
                  badge: '3',
               },
               {
                  name: 'Technical Manuals',
                  icon: 'tabler:stack-2',
                  badge: '5',
               },
            ]"
         />
         <SidebarFoldableItem
            groupName="Recent Documents"
            v-on:click="() => toggleActiveFoldableItem('Recent Documents')"
            :active-foldable-item="activeFoldableItem"
            :items="[
               {
                  name: 'Journey Through',
                  icon: 'PDF',
                  badge: '3h ago',
               },
               {
                  name: 'Mindful Notes',
                  icon: 'MD',
                  badge: '2h ago',
               },
               {
                  name: 'Visionary Slides',
                  icon: 'PDF',
                  badge: '30m ago',
               },
            ]"
         />
      </div>
      <div class="footer">
         <div class="user-info">
            <div class="profile-picture">B</div>
            <div class="name">
               Bedirhan Doğan
               <div class="plan">Free</div>
            </div>
         </div>

         <Dropdown>
            <template #DropdownTrigger>
               <Icon name="tabler:dots" size="22" mode="svg" class="icon active-hover" />
            </template>
            <template #DropdownMenu>
               <DropdownItem>
                  <Icon name="tabler:settings" size="20" mode="svg" class="icon" />
                  Settings
               </DropdownItem>
               <DropdownItem>
                  <Icon name="tabler:message-2-heart" size="20" mode="svg" class="icon" />
                  Feedback
               </DropdownItem>
               <DropdownItem class="upgrade-plan">
                  <Icon name="tabler:north-star" size="20" mode="svg" class="icon" />
                  Plan Upgrade
               </DropdownItem>
               <DropdownStandaloneItems>
                  <DropdownItem>
                     <Icon name="tabler:logout" size="20" mode="svg" class="icon" />
                     Logout
                  </DropdownItem>
               </DropdownStandaloneItems>
            </template>
         </Dropdown>
      </div>
   </div>
</template>

<style>
.upgrade-plan {
   color: var(--color-smashing-pumpkins) !important;
   font-weight: 400;

   &:hover {
      background-color: #301911 !important;
   }

   * {
      color: var(--color-smashing-pumpkins) !important;
   }
}

.sidebar {
   width: 300px;
   height: 100vh;
   background-color: var(--color-black-sheep);
   border-right: 1px solid var(--color-eerie-black);
   padding: 0 15px;
   display: grid;
   grid-auto-columns: 1fr;
   grid-template-rows: 55px 1fr 80px;
   gap: 10px;
   transition: 200ms transform ease;
}

.sidebar.collapsed {
   transform: translateX(-100%);
}

.sidebar.collapsed * {
   display: none;
}

.sidebar > .header {
   padding: 15px 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-weight: 400;
}

.sidebar > .header > .brand {
   display: flex;
   align-items: center;
   gap: 15px;
   font-size: 15px;
}

.sidebar > .navigation {
   display: flex;
   flex-direction: column;
   gap: 5px;
}

.sidebar > .footer {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 15px 0;
   border-top: 1px dashed var(--color-eerie-black);
}

.sidebar > .footer > .user-info {
   display: flex;
   align-items: center;
   gap: 10px;
}

.sidebar > .footer > .user-info > .profile-picture {
   width: 40px;
   height: 40px;
   background-color: var(--color-eerie-black);
   color: var(--color-shark-fin);
   font-size: 18px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   cursor: default;
}

.sidebar > .footer > .user-info > .name {
   display: flex;
   flex-direction: column;
   gap: 5px;
}

.sidebar > .footer > .user-info > .name > .plan {
   width: min-content;
   font-size: 12px;
   padding: 2.5px 5px;
   border-radius: 5px;
   background-color: var(--color-eerie-black);
   color: var(--color-squant);
   font-weight: 400;
   cursor: default;
}
</style>
