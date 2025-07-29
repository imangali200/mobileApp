<template>
  <div class="tw-text-black tw-mt-[70px]">
    <div class="tw-mx-2">
      <input
        class="tw-w-full tw-h-[48px] tw-bg-transparent tw-pl-2 tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px]"
        type="text"
        placeholder="Поиск..."
      />
      <button class="tw-w-full tw-h-[48px] tw-bg-[#34398B] tw-text-white tw-rounded-[14px] tw-my-5">Прейти в Астра-ломбард</button>
      <img class="tw-w-full tw-h-[220px]" src="/hero.png" alt="">
    </div>

    <productSlider
      title="Новинки"
      bgClass="tw-bg-white"
      :products="newProduct"
    ></productSlider>
    <productSlider
      class="bt tw-mb-[50px]"
      title="Популярные товары"
      bgClass="tw-bg-white"
      :products="popular"
    ></productSlider>
  </div>
</template>
<script setup lang="ts">


import products from "../data/products.json";
import newProducts from "../data/newProducts.json";

const discount = ref<Category[]>([]);
const newProduct = ref<Category[]>([]);
const popular = ref<Category[]>([]);

interface Category {
  id: string;
  name: string;
  localizedName: string;
  isLatest: boolean;
  article: number;
  uniqueIdentificator: string | null;
  inStock: boolean;
  description: string;
  localizedDescription: string;
  imagePath: string;
  basePrice: number;
  priceWithDiscount: number;
  individualPrice: number;
  discountPercent: number;
  category: {
    id: string;
    productsCount: number;
    name: string;
    localizedName: string | null;
    imagePath: string;
    bannerImagePath: string | null;
  };
  source: number;
  weight: number;
  isFavourite: boolean;
  viewCount: number;
  classification: string | null;
  createdOn: string;
  updatedOn: string;
}

interface CategoryResponse {
  data: Category[];
}

onMounted(async () => {

  newProduct.value = newProducts;

  popular.value = products;

});
</script>
