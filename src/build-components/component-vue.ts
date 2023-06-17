import { defineAsyncComponent } from "vue"

// import HelloWorld from "../components/HelloWorld.vue";
const HelloWorld = defineAsyncComponent(() => import('../components/HelloWorld.vue'))
export {
  HelloWorld
}