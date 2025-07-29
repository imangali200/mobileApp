<template>
  <div class="tw-fixed tw-bottom-0 tw-left-0 tw-right-0">
    <ion-footer style="--background: white">
      <ion-toolbar>
        <div class="tw-text-black tw-flex tw-justify-evenly">
          <NuxtLink to="/home" class="tw-flex tw-flex-col tw-items-center">
            <img class="tw-w-[24px] tw-h-[24px]" src="/shop.png" alt="" />
            <span class="tw-text-[12px] tw-text-[#909090]">Магазин</span>
          </NuxtLink>
          <NuxtLink to="/catalog" class="tw-flex tw-flex-col tw-items-center">
            <img class="tw-w-[24px] tw-h-[24px]" src="/katalog.png" alt="" />
            <span class="tw-text-[12px] tw-text-[#909090]">Каталог</span>
          </NuxtLink>
          <NuxtLink to="/card" class="tw-flex tw-flex-col tw-items-center">
            <img class="tw-w-[24px] tw-h-[24px]" src="/korzina.png" alt="" />
            <span class="tw-text-[12px] tw-text-[#909090]">Корзина</span>
          </NuxtLink>
          <NuxtLink to="/favorite" class="tw-flex tw-flex-col tw-items-center">
            <img class="tw-w-[24px] tw-h-[24px]" src="/like.png" alt="" />
            <span class="tw-text-[12px] tw-text-[#909090]">Избранное</span>
          </NuxtLink>
          <div class="tw-flex tw-flex-col tw-items-center">
            <img class="tw-w-[24px] tw-h-[24px]" src="/profile.png" alt="" />
            <span class="tw-text-[12px] tw-text-[#909090]">Профиль</span>
          </div>
        </div>
      </ion-toolbar>
    </ion-footer>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
