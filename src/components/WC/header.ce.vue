<template>
  <div>
    <input :value="modelValue" @input="handleInput"/>
  </div>
</template>

<script setup lang="ts">
defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue', 'updateValue']);
function handleInput ($event: any) {
  emits('update:modelValue', $event.target.value);
  emits('updateValue', $event.target.value);
}
// console.log(props);

// function handleUpdate() {
//   emits('update:modelValue', 'ok');
//   console.log(props.modelValue);
// }
</script>
<style lang="scss" scoped>
h1 {
 color: red; 
}
</style>