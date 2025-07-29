<template>
  <div class="tw-text-black tw-mt-[50px]">
    <div class="tw-mx-2">
      <input
        class="tw-w-full tw-h-[48px] tw-bg-transparent tw-pl-2 tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px]"
        type="text"
        placeholder="Поиск..."
      />
    </div>

    <productSlider
      title="Новинки"
      bgClass="tw-bg-[#C5E7D4]"
      :products="newProduct"
    ></productSlider>
    <productSlider
      title="Популярные товары"
      bgClass="tw-bg-[#D0D1E4]"
      :products="popular"
    ></productSlider>
  </div>
</template>
<script setup lang="ts">
import axios from "axios";

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
  const newRes = await axios.post<CategoryResponse>(
    "https://api.store.astra-lombard.kz/api/v1/products/search",
    {
      pageSize: 15,
      advancedFilter: {
        filters: [
          {
            field: "category.id",
            operator: "eq",
            value: "74facc22-a6e8-4af1-e2e7-08dba71ef022",
          },
        ],
        logic: "and",
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  newProduct.value = newRes.data.data;

  const popularRes = await axios.post<CategoryResponse>(
    "https://api.store.astra-lombard.kz/api/v1/products/search",
    {
      pageSize: 15,
      orderBy: ["viewCount desc"],
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  popular.value = popularRes.data.data;
  console.log(popular.value);
});
</script>
