<script setup>
import moment from 'moment';
import FileType from './FileType.vue';

const props = defineProps({
   header: {
      type: Array,
      required: true,
   },
   data: {
      type: Array,
      required: true,
   },
});

const sortMode = ref(
   Object.fromEntries(props.header.filter((i) => i.sortable).map((item) => [item.key, 'default'])),
);

const toggleSortOrder = (key) => {
   Object.keys(sortMode.value).forEach((k) => {
      if (k !== key) {
         sortMode.value[k] = 'default';
      }
   });

   switch (sortMode.value[key]) {
      case 'default':
         sortMode.value[key] = 'descend';
         break;
      case 'descend':
         sortMode.value[key] = 'ascend';
         break;
      case 'ascend':
         sortMode.value[key] = 'default';
         break;
   }
};

const originalData = ref([...props.data]);

const sortedData = () => {
   const sortableItem = props.header.find(
      (item) => item.sortable && sortMode.value[item.key] !== 'default',
   );

   if (!sortableItem) {
      return originalData.value;
   }

   const convertToBytes = (size) => {
      const units = {
         B: 1,
         KB: 1024,
         MB: 1024 ** 2,
         GB: 1024 ** 3,
      };

      const [value, unit] = size.split(' ');
      return parseFloat(value) * units[unit];
   };

   return [...props.data].sort((a, b) => {
      if (sortableItem.type === 'date') {
         switch (sortMode.value[sortableItem.key]) {
            case 'ascend':
               return moment(b[sortableItem.key]).diff(moment(a[sortableItem.key]));
            case 'descend':
               return moment(a[sortableItem.key]).diff(moment(b[sortableItem.key]));
            default:
               return originalData.value;
         }
      } else if (sortableItem.type === 'size') {
         switch (sortMode.value[sortableItem.key]) {
            case 'ascend':
               return convertToBytes(a[sortableItem.key]) - convertToBytes(b[sortableItem.key]);
            case 'descend':
               return convertToBytes(b[sortableItem.key]) - convertToBytes(a[sortableItem.key]);
            default:
               return originalData.value;
         }
      } else {
         switch (sortMode.value[sortableItem.key]) {
            case 'ascend':
               return a[sortableItem.key] - b[sortableItem.key];
            case 'descend':
               return b[sortableItem.key] - a[sortableItem.key];
            default:
               return originalData.value;
         }
      }
   });
};
</script>

<template>
   <div class="table">
      <div class="row header">
         <div v-for="HItem in header" class="cell" :key="HItem.key">
            <span style="user-select: none"
               >{{ HItem.label }}
               <div v-if="HItem.sortable" v-on:click="toggleSortOrder(HItem.key)">
                  <Icon
                     :name="`tabler:${
                        sortMode[HItem.key] === 'ascend' // if
                           ? 'sort-ascending-2'
                           : sortMode[HItem.key] === 'descend' // else if
                             ? 'sort-descending-2'
                             : 'selector' // else
                     }`"
                     size="18"
                     mode="svg"
                     class="icon active-hover"
                  />
               </div>
            </span>
         </div>
      </div>
      <div class="row" v-for="DItem in sortedData()" :key="DItem.name">
         <div v-for="HItem in header" class="cell" :key="DItem.key">
            <Icon
               v-if="HItem.type === 'icon'"
               v-on:click="DItem[HItem.key + 'fn']()"
               :name="DItem[HItem.key]"
               size="20"
               mode="svg"
               class="icon active-hover"
               style="--interaction-icon-color: var(--color-smashing-pumpkins)"
            />
            <span v-else-if="HItem.type === 'date'">
               {{ moment(DItem[HItem.key], 'ddd MMM DD YYYY HH:mm:ss ZZ').fromNow() }}
            </span>
            <span v-else-if="HItem.extra === 'file-type'" class="file-type-wrapper">
               {{ DItem[HItem.key] }}
               <FileType :type="DItem[HItem.extra]" />
            </span>
            <span v-else>{{ DItem[HItem.key] }} </span>
         </div>
      </div>
   </div>
</template>

<style>
.table {
   display: table;
   border: 1px solid var(--color-eerie-black);
   background-color: var(--color-cursed-black);
   border-radius: 10px;
   overflow: hidden;
   font-size: 14px;

   .row {
      display: table-row;
      border-bottom: 1px solid var(--color-eerie-black);
      color: var(--color-squant);

      &:last-child {
         border-bottom: none;
      }

      &.header {
         display: table-row !important;
         background-color: var(--color-pot-black);
         color: var(--color-unique-grey);

         .cell span {
            display: flex;
            align-items: center;
            gap: 10px;
         }
      }

      .cell {
         display: table-cell;
         vertical-align: middle;
         padding: 10px 35px 10px 13px;
         border-right: 1px solid var(--color-eerie-black);
         border-bottom: 1px solid var(--color-eerie-black);
         white-space: nowrap;
         overflow: hidden;
         text-overflow: ellipsis;
         max-width: 175px;

         &:last-child {
            border-right: none;
         }

         .file-type-wrapper {
            display: flex;
            align-items: center;
            gap: 10px;
         }
      }

      &:last-child .cell {
         border-bottom: none;
      }
   }
}
</style>
