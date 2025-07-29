<template>
  <div class="tw-text-black">
    <ion-header>
      <ion-toolbar>
        <div
          class="tw-grid tw-grid-cols-2 tw-text-[16px] tw-font-[500] tw-pb-2"
        >
          <h3 class="tw-text-center tw-text-[#111111]">Корзина</h3>
          <h3 class="tw-text-center tw-text-[#909090]">Заказы</h3>
        </div>
      </ion-toolbar>
    </ion-header>
    <div class="tw-flex-1 tw-flex tw-flex-col tw-justify-between tw-mx-3">
      <div>
        <div class=" tw-flex tw-items-center tw-justify-between tw-mt-2">
          <h1 class="tw-font-[500] tw-text-[24px]">Товары в корзине</h1>
          <p class="tw-text-[12px] tw-text-[#FF473C]">ОЧИСТИТЬ</p>
        </div>
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
      <div class="tw-mt-10">
        <div
          class="tw-flex tw-items-center tw-justify-between tw-font-[500] tw-h-[48px] tw-rounded-[14px] tw-bg-[#F8F8F8] tw-px-2"
        >
          <h2 class="tw-text-[16px] tw-font-semibold">ИТОГО</h2>
          <h2 class="tw-text-[16px] tw-font-semibold">
            {{ datas.totalPrice }} ₸
          </h2>
        </div>
        <button
          class="tw-w-full tw-h-[48px] tw-rounded-[14px] tw-bg-[#FF8A00] tw-text-white tw-mt-3"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
import favoriteData from "../data/favorite.json";
const datas = ref([]);
datas.value = favoriteData;

function remove(id) {
  datas.value.items = datas.value.items.filter(
    (item) => item.product.id !== id
  );
}
</script>

<style scoped></style>
