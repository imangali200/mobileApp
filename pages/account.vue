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
            Аккаунт
          </h2>
        </div>
      </ion-toolbar>
    </ion-header>
    <div>
      <v-text-field
        style="border: 1px solid gray"
        v-model="name"
        label="Enter your name"
        readonly=""
        color="primary"
      ></v-text-field>
    </div>
  </div>
</template>

<script setup></script>
