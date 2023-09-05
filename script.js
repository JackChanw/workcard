const { createApp, ref } = window.Vue;
const app = createApp({
  setup() {
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const goBack = () => {
      show.value = false;
    }
    return {
      show,
      showPopup,
      goBack
    };
  },
});
app.use(vant);
app.use(vant.Lazyload);
app.mount('#app');
