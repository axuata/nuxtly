<script setup>
const { setLocale } = useI18n()
</script>

<template>
  <TestComponent />
  <div>
    <div>
      <button @click="setLocale('ja')">ja</button>
      <button @click="setLocale('en')">en</button>
      <p>{{ $t('welcome') }}</p>
    </div>
  </div>
</template>
