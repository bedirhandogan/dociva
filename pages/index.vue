<script setup>
import Button from '../components/Button.vue';
import Pagination from '../components/Pagination.vue';
import Tooltip from '../components/Tooltip.vue';

const sidebarCollapsedState = useSidebarCollapsed();

const toggleSidebar = () => {
   sidebarCollapsedState.value = !sidebarCollapsedState.value;
};

const date = 'Mon Nov 11 2024 13:29:15 GMT+0300'; // Example date for testing

const tableClusterHeader = [
   { label: 'Name', key: 'name' },
   { label: 'Description', key: 'description' },
   { label: 'File Count', key: 'fileCount', sortable: true },
   { label: 'Last Updated', key: 'lastUpdated', type: 'date', sortable: true },
   { label: 'Action', key: 'action', type: 'icon' },
];
const tableClusterData = {
   0: [
      {
         name: 'Nebula Nexus',
         description: 'A collection of cosmic-themed PDFs.',
         fileCount: 1,
         lastUpdated: 'Mon Nov 11 2024 12:29:15 GMT+0300 (GMT+03:00)',
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Nebula Nexus');
         },
      },
      {
         name: 'Starlight Station',
         description: 'A collection of star-themed PDFs.',
         fileCount: 2,
         lastUpdated: 'Mon Nov 11 2024 11:29:15 GMT+0300 (GMT+03:00)',
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Starlight Station');
         },
      },
      {
         name: 'Galactic Gateway',
         description: 'A collection of galaxy-themed PDFs.',
         fileCount: 3,
         lastUpdated: 'Mon Nov 11 2024 10:29:15 GMT+0300 (GMT+03:00)',
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Galactic Gateway');
         },
      },
      {
         name: 'Asteroid Archive',
         description: 'A collection of asteroid-themed PDFs.',
         fileCount: 4,
         lastUpdated: date,
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Asteroid Archive');
         },
      },
      {
         name: 'Comet Collection',
         description: 'A collection of comet-themed PDFs.',
         fileCount: 5,
         lastUpdated: date,
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Comet Collection');
         },
      },
   ],
   1: [
      {
         name: 'Nebula Nexus 2',
         description: 'A collection of cosmic-themed PDFs.',
         fileCount: 1,
         lastUpdated: 'Mon Nov 11 2024 12:29:15 GMT+0300 (GMT+03:00)',
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Nebula Nexus');
         },
      },
      {
         name: 'Starlight Station 2',
         description: 'A collection of star-themed PDFs.',
         fileCount: 2,
         lastUpdated: 'Mon Nov 11 2024 11:29:15 GMT+0300 (GMT+03:00)',
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Starlight Station');
         },
      },
      {
         name: 'Galactic Gateway 2',
         description: 'A collection of galaxy-themed PDFs.',
         fileCount: 3,
         lastUpdated: 'Mon Nov 11 2024 10:29:15 GMT+0300 (GMT+03:00)',
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Galactic Gateway');
         },
      },
      {
         name: 'Asteroid Archive 2',
         description: 'A collection of asteroid-themed PDFs.',
         fileCount: 4,
         lastUpdated: date,
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Asteroid Archive');
         },
      },
      {
         name: 'Comet Collection 2',
         description: 'A collection of comet-themed PDFs.',
         fileCount: 5,
         lastUpdated: date,
         action: 'tabler:circle-arrow-up-right',
         actionfn: () => {
            console.log('Edit clicked: Comet Collection');
         },
      },
   ],
};
const activeClustersPage = ref(0);

const tableRecentHeader = [
   { label: 'Name', key: 'name', extra: 'file-type' },
   { label: 'Cluster', key: 'cluster' },
   { label: 'Size', key: 'size', sortable: true, type: 'size' },
   { label: 'Last Updated', key: 'lastUpdated', type: 'date', sortable: true },
];
const tableRecentData = {
   0: [
      {
         name: 'Asteroid 1',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.2 MB',
         lastUpdated: 'Mon Nov 11 2024 12:29:15 GMT+0300',
      },
      {
         name: 'Asteroid 2',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.3 MB',
         lastUpdated: date,
      },
      {
         name: 'Asteroid 3',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.4 MB',
         lastUpdated: date,
      },
      {
         name: 'Asteroid 4',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.5 MB',
         lastUpdated: date,
      },
      {
         name: 'Asteroid 5',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.6 MB',
         lastUpdated: date,
      },
   ],
   1: [
      {
         name: 'Asteroid 1.2',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.2 MB',
         lastUpdated: 'Mon Nov 11 2024 12:29:15 GMT+0300',
      },
      {
         name: 'Asteroid 2.2',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.3 MB',
         lastUpdated: date,
      },
      {
         name: 'Asteroid 3.2',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.4 MB',
         lastUpdated: date,
      },
      {
         name: 'Asteroid 4.2',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.5 MB',
         lastUpdated: date,
      },
      {
         name: 'Asteroid 5.2',
         'file-type': 'PDF',
         cluster: 'Asteroid Archive',
         size: '1.6 MB',
         lastUpdated: date,
      },
   ],
};
const activeRecentPage = ref(0);
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

      <div class="content">
         <div class="section">
            <div class="table-wrapper">
               <div class="header">
                  <div class="title">
                     Clusters
                     <span class="subtitle">View All Document Clusters.</span>
                  </div>

                  <Button name="Create" />
               </div>
               <Table
                  :header="tableClusterHeader"
                  :data="tableClusterData[activeClustersPage]"
                  :key="
                     activeClustersPage // add key for reactivity
                  "
               />
               <div class="footer">
                  {{ activeClustersPage * 5 }} - {{ (activeClustersPage + 1) * 5 }} of
                  {{ Object.keys(tableClusterData).length * 5 }} Clusters
                  <Pagination
                     :active-page="activeClustersPage"
                     :total-pages="Object.keys(tableClusterData).length"
                     :prev-page="() => (activeClustersPage = Math.max(activeClustersPage - 1, 0))"
                     :next-page="
                        () =>
                           (activeClustersPage = Math.min(
                              activeClustersPage + 1,
                              Object.keys(tableClusterData).length - 1,
                           ))
                     "
                  />
               </div>
            </div>
            <div class="table-wrapper">
               <div class="header">
                  <div class="title">
                     Recent Documents
                     <span class="subtitle">View All Recent Documents.</span>
                  </div>
                  <Tooltip text="Shows document history for the last 2 weeks only">
                     <Icon
                        name="tabler:info-circle"
                        size="20"
                        mode="svg"
                        class="icon active-hover"
                     />
                  </Tooltip>
               </div>
               <Table
                  :header="tableRecentHeader"
                  :data="tableRecentData[activeRecentPage]"
                  :key="
                     activeRecentPage // add key for reactivity
                  "
               />
               <div class="footer">
                  {{ activeRecentPage * 5 }} - {{ (activeRecentPage + 1) * 5 }} of
                  {{ Object.keys(tableRecentData).length * 5 }} Clusters
                  <Pagination
                     :active-page="activeRecentPage"
                     :total-pages="Object.keys(tableRecentData).length"
                     :prev-page="() => (activeRecentPage = Math.max(activeRecentPage - 1, 0))"
                     :next-page="
                        () =>
                           (activeRecentPage = Math.min(
                              activeRecentPage + 1,
                              Object.keys(tableRecentData).length - 1,
                           ))
                     "
                  />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style>
.main {
   position: relative;
   padding: 0 35px 35px 35px;
   height: 100vh;
   overflow-y: scroll;
   display: flex;
   flex-direction: column;
   gap: 10px;

   & > .header {
      padding-top: 35px;
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      justify-content: space-between;
      background-color: var(--color-chaos-black);

      & > .title {
         display: flex;
         align-items: center;
         gap: 35px;

         .text {
            display: flex;
            flex-direction: column;
            gap: 5px;

            span:nth-child(1) {
               font-size: 20px;
               font-weight: 500;
            }

            span:nth-child(2) {
               font-size: 14px;
               color: var(--color-squant);
            }
         }
      }
   }

   .sidebar-trigger {
      display: flex;
      cursor: pointer;
   }

   .content {
      display: flex;
      gap: 15px;

      .section {
         display: flex;
         flex-direction: column;
         gap: 15px;
      }

      .table-wrapper {
         border: 1px solid var(--color-eerie-black);
         padding: 12.5px 15px 15px 15px;
         border-radius: 15px;
         display: flex;
         flex-direction: column;
         gap: 15px;

         & > .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0;

            .title {
               display: flex;
               flex-direction: column;
               align-items: flex-start;
               gap: 5px;
               font-size: 16px;

               .subtitle {
                  font-size: 14px;
                  color: var(--color-squant);
               }
            }
         }

         & > .footer {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: var(--color-squant);
            font-weight: 400;
         }
      }
   }
}
</style>
