<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <div class="tw-px-3 tw-flex tw-items-center tw-justify-between">
          <h2 class="tw-font-semibold tw-text-[24px]">Профиль</h2>
          <img class="tw-w-[24px] tw-h-[24px]" src="/logout.png" alt="" />
        </div>
      </ion-toolbar>
    </ion-header>
    <div class="tw-px-3">
      <NuxtLink to="/myInformation"
        class="tw-flex tw-items-center tw-justify-between tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px] tw-h-[48px] tw-px-2 tw-mt-6"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <img class="tw-w-[24px] tw-h-[24px]" src="/user.png" alt="" />
          <p class="tw-text-[#909090] tw-text-[14px]">Мои данные</p>
        </div>
        <img class="tw-w-[24px] tw-h-[24px]" src="/arrowright.png" alt="" />
      </NuxtLink>

      <div
        class="tw-flex tw-items-center tw-justify-between tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px] tw-h-[48px] tw-px-2 tw-mt-4"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <img class="tw-w-[24px] tw-h-[24px]" src="/box.png" alt="" />
          <p class="tw-text-[#909090] tw-text-[14px]">Доставка и оплата</p>
        </div>
        <img class="tw-w-[24px] tw-h-[24px]" src="/arrowright.png" alt="" />
      </div>

      <div
        class="tw-flex tw-items-center tw-justify-between tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px] tw-h-[48px] tw-px-2 tw-mt-4"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <img class="tw-w-[24px] tw-h-[24px]" src="/agreement.png" alt="" />
          <p class="tw-text-[#909090] tw-text-[14px]">
            Пользовательськое соглашение
          </p>
        </div>
        <img class="tw-w-[24px] tw-h-[24px]" src="/arrowright.png" alt="" />
      </div>

      <div
        class="tw-flex tw-items-center tw-justify-between tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px] tw-h-[48px] tw-px-2 tw-mt-4"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <img class="tw-w-[24px] tw-h-[24px]" src="/garantiya.png" alt="" />
          <p class="tw-text-[#909090] tw-text-[14px]">Гарантия качества</p>
        </div>
        <img class="tw-w-[24px] tw-h-[24px]" src="/arrowright.png" alt="" />
      </div>

      <div
        class="tw-flex tw-items-center tw-justify-between tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px] tw-h-[48px] tw-px-2 tw-mt-4"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <img class="tw-w-[24px] tw-h-[24px]" src="/oferta.png" alt="" />
          <p class="tw-text-[#909090] tw-text-[14px]">Публичная оферта</p>
        </div>
        <img class="tw-w-[24px] tw-h-[24px]" src="/arrowright.png" alt="" />
      </div>

      <div
        class="tw-flex tw-items-center tw-justify-between tw-border-[1px] tw-border-[#EBEBEB] tw-rounded-[14px] tw-h-[48px] tw-px-2 tw-mt-4"
      >
        <div class="tw-flex tw-items-center tw-gap-3">
          <img class="tw-w-[24px] tw-h-[24px]" src="/language.png" alt="" />
          <div class="tw-flex tw-flex-col">
            <span class="tw-text-[12px] tw-text-[#909090]">Язык</span>
            <p class="tw-text-black tw-text-[14px]">Русский</p>
          </div>
        </div>
        <img class="tw-w-[24px] tw-h-[24px]" src="/arrowright.png" alt="" />
      </div>

      <div class="tw-mt-6">
        <div class="tw-flex tw-items-center tw-justify-between">
          <span class="tw-text-black tw-text-[14px]">Вход по Face ID</span>
          <img class="tw-w-[60px] tw-h-[35px]" src="/switch.png" alt="" />
        </div>
        <div class="tw-flex tw-items-center tw-justify-between tw-mt-4">
          <span class="tw-text-black tw-text-[14px]">Вход по отпечатку пальца</span>
          <img class="tw-w-[60px] tw-h-[35px]" src="/switch.png" alt="" />
        </div>
      </div>
      <img class="tw-h-[226px] tw-w-full tw-mt-6" src="/profilehero.png" alt=""></img>
    </div>
    
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
