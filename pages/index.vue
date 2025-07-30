<template>
  <div class="tw-flex tw-items-center tw-justify-center tw-h-[100vh]">
    <img class="tw-w-[239px] tw-h-[41px]" src="/logo.png" alt="" />
  </div>
</template>
<script setup>
definePageMeta({
  layout:'auth'
})
const router = useRouter();
setTimeout(() => {
  router.push("/auth/login");
}, 2000);
</script>
