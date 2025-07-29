<template>
  <div class="tw-text-black">
    <div class="tw-relative">
      <img
        class="tw-h-[340px] tw-object-cover tw-mx-auto"
        :src="data.imagePath"
        alt=""
      />
    </div>
    <div
      class="tw-flex tw-items-center tw-justify-between tw-px-4 tw-pt-[50px] tw-absolute tw-top-0 tw-left-0 tw-right-0"
    >
      <img
        @click="$router.back()"
        class="tw-w-[24px] tw-h-[24px]"
        src="/leftArrow.png"
        alt=""
      />
      <img class="tw-w-[24px] tw-h-[24px]" src="/like2.png" alt="" />
    </div>
    <div class="tw-px-3">
      <div>
        <h2 class="tw-text-[18px]">{{ data.name }}</h2>

        <p class="tw-text-[#909090] tw-text-[14px]">
          Вес изделия: <span class="tw-text-black">{{ data.weight }} г</span>
        </p>
        <div class="tw-mt-4 tw-flex tw-flex-col tw-gap-3">
          <v-expansion-panels>
            <v-expansion-panel title="Описание" :text="data.description">
            </v-expansion-panel>
          </v-expansion-panels>

          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>Характеристики</v-expansion-panel-title>
              <v-expansion-panel-text
                v-for="indata in data.metadata.filtersArray"
                :key="indata.value"
              >
                <div
                  class="tw-text-[14px] tw-flex tw-items-center tw-justify-between tw-px-3"
                >
                  <p class="tw-text-[#111111]">{{ indata.name }}</p>
                  <p class="tw-text-[#34398B]">{{ indata.value }}</p>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <button
            @click="addCart"
            class="tw-w-full tw-h-[48px] tw-rounded-[14px] tw-bg-[#FF8A00] tw-text-white"
          >
            В корзину
          </button>
        </div>
      </div>
    </div>
    <div>
      <v-dialog v-model="alertUser" class="tw-flex tw-items-center tw-justify-center">
        <div class="tw-bg-white tw-h-[310px] tw-rounded-[14px] tw-w-full tw-p-4 tw-flex tw-flex-col tw-items-center">
          <img class="tw-w-[44px] tw-h-[44px]" src="/userImg.png" alt="" />
          <h1 class="tw-text-black tw-text-[24px] tw-text-center tw-px-3 tw-font-[600]">Чтобы продолжить необходимо авторизоваться"</h1>
          <button
            @click="$router.push({path:'/auth/login'})"
            class="tw-w-full tw-h-[48px] tw-rounded-[14px] tw-bg-[#FF8A00] tw-text-white tw-mt-2"
          >
            Войти
          </button>
        </div>
      </v-dialog>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
definePageMeta({
  middleware: "auth",
});
const alertUser = ref(false);
import details from "../data/singleData.json";
const data = details;
console.log(data);
const addCart = () => {
  const token = useCookie("token").value;

  if (!token) {
    alertUser.value = true;
    return;
  }
  router.push({ path: "/card" });
};
</script>
