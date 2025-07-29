<template>
  <div
    class="tw-h-screen tw-flex tw-flex-col tw-max-w-[450px] tw-w-full tw-overflow-hidden tw-mx-auto tw-border-[3px] tw-border-dashed"
  >
    <main class="tw-flex-[1_1_auto] tw-overflow-y-scroll">
      <slot />
    </main>
    <Footer />
  </div>
</template>
