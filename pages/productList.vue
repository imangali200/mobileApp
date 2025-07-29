<template>
  <div>
    <ion-header>
      <ion-toolbar style="--background: white">
        <div
          class="tw-flex tw-items-center tw-justify-between tw-text-black tw-px-2"
        >
          <img @click="$router.back()" class="tw-w-[24px] tw-h-[24px]" src="/leftArrow.png" alt="" />
          <h2 class="tw-font-[500] tw-text-[16px]">Цепи</h2>
          <img class="tw-w-[24px] tw-h-[24px]" src="/search.png" alt="" />
        </div>
      </ion-toolbar>
    </ion-header>
    <div class="tw-mx-3">
      <div
        class="tw-flex tw-items-center tw-justify-between tw-text-[#909090] tw-text-sm tw-mt-4"
      >
        <p>По популярности</p>
        <p>Фильтр</p>
      </div>
      <div class="tw-grid tw-grid-cols-2 tw-gap-3 tw-mt-5">
        <div class="tw-relative tw-border-[1px] tw-rounded-[14px] tw-border-[#EBEBEB] tw-py-2" v-for="data in datas" :key="data.id">
          <img @click="$router.push({path:'/details'})" class="tw-h-[139px] tw-mx-auto" :src="data.imagePath" alt="" />
          <div class="tw-mx-3">
            <span class="tw-text-[#111111] tw-text-[14px]">{{
              data.name
            }}</span>
            <div class="tw-flex tw-items-center tw-justify-between">
              <h2 class="tw-text-[#34398B] tw-text-[14px]">
                {{ data.basePrice }} ₸
              </h2>
              <img
                class="tw-w-[32px] tw-h-[32px]"
                src="/right arrow.png"
                alt=""
              />
            </div>
          </div>
          <div class="tw-flex tw-items-center tw-justify-between tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-px-2 tw-pt-2">
            <div class="tw-flex tw-gap-1">
              <img class="tw-w-[24px] tw-h-[24px]" src="/discount2.png" alt="" />
              <img class="tw-w-[24px] tw-h-[24px]" src="/star2.png" alt="" />
              <img class="tw-w-[24px] tw-h-[24px]" src="/crown2.png" alt="" />
            </div>
            <img class="tw-w-[24px] tw-h-[24px]" src="/like2.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import carProducts from "../data/catProducts.json";
const datas = carProducts;
</script>

<style scoped></style>
