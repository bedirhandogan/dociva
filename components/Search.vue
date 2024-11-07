<template>
   <div class="search">
      <div class="input">
         <Icon name="tabler:search" size="20" mode="svg" class="icon" />
         <input type="text" placeholder="Type to search" />
      </div>
      <Key :keys="['Ctrl', 'K']" />
   </div>
</template>

<style>
.search {
   padding: 10px;
   background-color: var(--color-cursed-black);
   min-width: 300px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 10px;
}

.search .input {
   display: flex;
   align-items: center;
   gap: 10px;
}

.search .input input {
   all: unset;
   background-color: transparent;
   border: none;
   color: var(--color-unique-grey);
   font-size: 14px;
   width: 100%;
}

.search .input input::placeholder {
   color: var(--color-argent);
}
</style>
