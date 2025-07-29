<template>
  <div>
    <ion-header class="tw-bg-white">
      <ion-toolbar style="--background: white; --border-width: 0">
        <ion-title class="tw-text-black tw-pt-7 tw-pb-2">
          Изделия со скидкой
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <div class="tw-grid tw-grid-cols-2 tw-gap-3 tw-mx-3 tw-mt-7">
      <div
        v-for="(item, index) in items"
        :key="item.id"
        :class="[
          index === items.length - 1 && items.length % 2 !== 0
            ? 'tw-col-span-2'
            : '',
        ]"
      >
        <div
          @click="
            $router.push({ path: '/productList'})
          "
          class="tw-flex tw-gap-2 tw-items-center tw-bg-[#F8F8F8] tw-rounded-[14px] tw-p-2"
        >
          <img
            class="tw-w-[56px] tw-h-[56px] tw-rounded-[14px]"
            :src="item.imagePath"
            alt=""
          />
          <p class="tw-text-sm tw-font-[400] tw-text-[#111111]">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import itemsData from "../data/category.json";

const items = ref([]);

items.value = itemsData;
console.log(items.value);

</script>
