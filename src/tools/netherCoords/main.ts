/**
 * @dependencies vue, @wikimedia/codex
 */
import * as vue from 'vue'
import App from './App.vue'

const targetEl = document.querySelector('.mcw-calc[data-type="netherCoords"]')
const createApp =
  process.env.NODE_ENV === 'development'
    ? vue.createApp
    : // @ts-expect-error
      vue.createMwApp || vue.createApp
createApp(App).mount(targetEl)
