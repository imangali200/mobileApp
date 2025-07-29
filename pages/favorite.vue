<template>
  <div class="tw-text-black">
    <ion-header>
      <ion-toolbar>
        <div class="tw-px-3 tw-flex tw-items-center">
          <img class="tw-w-[24px] tw-h-[24px]" src="/leftArrow.png" alt="" />
          <h2 class="tw-text-[#111111] tw-text-[16px] tw-font-[500] tw-mx-auto">
            Избранное
          </h2>
        </div>
      </ion-toolbar>
    </ion-header>
    <div class="tw-mx-3">
      <div
        v-for="item in datas.items"
        :key="item.product.id"
        class="tw-bg-[#F8F8F8] tw-rounded-[14px] tw-p-2 tw-mt-5 tw-relative"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <img
            class="tw-w-[80px] tw-h-[80px] tw-rounded-[14px]"
            :src="item.product.imagePath"
            alt=""
          />
          <div>
            <p class="tw-text-[14px]">{{ item.product.name }}</p>
            <p class="tw-text-[#909090] tw-text-[14px]">
              Вес изделия:
              <span class="tw-text-black">{{ item.product.weight }} г</span>
            </p>
            <h2 class="tw-m-0 tw-text-[14px] tw-font-semibold">
              {{ item.product.basePrice }} ₸
            </h2>
          </div>
        </div>
        <img
          @click="remove(item.product.id)"
          class="tw-absolute tw-top-2 tw-right-2 tw-w-[32px] tw-h-[32px]"
          src="/remove.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
import cardData from "../data/card.json";
const datas = ref([]);
datas.value = cardData;

function remove(id) {
  datas.value.items = datas.value.items.filter(
    (item) => item.product.id !== id
  );
}
</script>

<style scoped></style>
