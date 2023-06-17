import { defineCustomElement } from 'vue'
import Header from '../components/WC/header.ce.vue'; 
function useHeader(tagName: string) {
  const WCHeader =  defineCustomElement(Header);
  customElements.define(tagName, WCHeader);
}
export {
  useHeader
}