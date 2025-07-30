<template>
  <div>
    <ion-header class="tw-bg-white">
      <ion-toolbar style="--background: white; --border-width: 0">
        <div class="tw-flex tw-items-center tw-px-2 tw-py-2">
          <img
            class="tw-w-[190px] tw-h-[33px] tw-mx-auto"
            src="/logo.png"
            alt="Logo"
          />
        </div>
      </ion-toolbar>
    </ion-header>
    <div class="tw-px-3 tw-mt-[90px]">
      <h1 class="tw-text-black tw-my-7 tw-font-[500] tw-text-[24px]">Вход</h1>
      <div>
        <input
          required
          v-model="phoneNumber"
          class="tw-border-[1px] tw-bg-transparent tw-h-[48px] tw-w-full tw-rounded-[14px] tw-px-2 tw-text-black"
          type="text"
          placeholder="Телефон"
        />
        <input
          required
          v-model="password"
          class="tw-border-[1px] tw-bg-transparent tw-h-[48px] tw-w-full tw-rounded-[14px] tw-px-2 tw-mt-4 tw-text-black"
          type="text"
          placeholder="Пароль"
        />
        <p class="tw-text-red-500 tw-pl-2">{{ error }}</p>
        <div class="tw-flex tw-justify-end tw-w-full tw-mt-3">
          <span class="tw-text-black tw-text-[14px]">Забыли пароль?</span>
        </div>
      </div>
      <button
        @click="loginButton"
        class="tw-bg-[#FF8A00] tw-w-full tw-h-[48px] tw-rounded-[8px] tw-mt-4"
      >
        Войти
      </button>
      <div class="tw-w-full tw-flex tw-mt-3">
        <p class="tw-text-[14px] tw-text-[#414141] tw-mx-auto">
          Нет учетной записи?
          <span @click="$router.push('/home')" class="tw-text-[#34398B] tw-font-[500]"
            >Зарегистрироваться</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout:'auth'
})
const phoneNumber = ref("");
const error = ref("");
const password = ref("");
const token = useCookie("token");
const router = useRouter();
const loginButton = async () => {
  try {
    if (!phoneNumber.value || !password.value) {
      error.value = "Пароль или номер телефона пустой";
      return;
    }
    const res = await $fetch("https://api.store.astra-lombard.kz/api/tokens", {
      method: "POST",
      body: {
        password: password.value,
        phoneNumber: phoneNumber.value,
      },
    });
    
    if (res && res.token) {
      token.value = res.token;
      error.value = "";
      router.push("/mainPage");
    } else {
      error.value = "Неверный логин или пароль";
    }
  } catch (errors) {
    error.value = "сервер не работает";
  }
};
</script>
