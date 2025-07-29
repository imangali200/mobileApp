<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <div class="tw-px-3 tw-flex tw-items-center">
          <img
            @click="$router.back()"
            class="tw-w-[24px] tw-h-[24px]"
            src="/leftArrow.png"
            alt=""
          />
          <h2 class="tw-text-[#111111] tw-text-[16px] tw-font-[500] tw-mx-auto">
            Мои данные
          </h2>
        </div>
      </ion-toolbar>
    </ion-header>
    <div class="tw-px-3">
      <NuxtLink
        to="/account"
        class="tw-flex tw-items-center tw-justify-between tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px] tw-h-[48px] tw-px-2 tw-mt-6"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <img class="tw-w-[24px] tw-h-[24px]" src="/user.png" alt="" />
          <p class="tw-text-[#909090] tw-text-[14px]">Аккаунт</p>
        </div>
        <img class="tw-w-[24px] tw-h-[24px]" src="/arrowright.png" alt="" />
      </NuxtLink>
      <NuxtLink
        to="/myInformation"
        class="tw-flex tw-items-center tw-justify-between tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px] tw-h-[48px] tw-px-2 tw-mt-4"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <img class="tw-w-[24px] tw-h-[24px]" src="/gift.png" alt="" />
          <p class="tw-text-[#909090] tw-text-[14px]">Мои бонусы</p>
        </div>
        <img class="tw-w-[24px] tw-h-[24px]" src="/arrowright.png" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
