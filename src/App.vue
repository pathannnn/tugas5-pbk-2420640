<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> pathanShop </q-toolbar-title>

        <q-space />

        <q-btn flat label="Daftar" />
        <q-btn flat label="Log In" />

        <q-input round filled dense placeholder="Search..." />
        <q-btn flat round icon="search" />
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Notifikasi" />
        <q-route-tab to="/page2" label="Bantuan" />
        <q-route-tab to="/page3" label="Kontak" />
      </q-tabs>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md" style="margin-bottom: 1rem">
        <div class="q-gutter-md">
          <q-carousel
            v-model="slide"
            transition-prev="jump-right"
            transition-next="jump-left"
            swipeable
            animated
            control-color="white"
            prev-icon="arrow_left"
            next-icon="arrow_right"
            navigation-icon="radio_button_unchecked"
            navigation
            padding
            arrows
            height="300px"
            class="bg-purple text-white shadow-1 rounded-borders"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <q-icon name="style" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="tv" class="column no-wrap flex-center">
              <q-icon name="live_tv" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="layers" class="column no-wrap flex-center">
              <q-icon name="layers" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="map" class="column no-wrap flex-center">
              <q-icon name="terrain" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="clock" class="column no-wrap flex-center">
              <q-icon name="schedule" size="56px" />
              <div class="q-mt-md text-center">
                {{ lorem }}
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white text-center q-pa-md">
      <em> @copyright </em> Fatih Masrukhan
    </q-footer>
  </q-layout>

  <!-- New Card Section -->
  <div class="q-pa-md row items-start q-gutter-md" style="margin-top: 1rem">
    <q-card class="my-card" flat bordered v-for="i in 5" :key="i">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-card-section>
        <div class="text-overline text-orange-9">Overline</div>
        <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
        <div class="text-caption text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Share" />
        <q-btn flat color="secondary" label="Book" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
  <!-- End of New Card Section -->
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const slide = ref(0); // Add this line for carousel navigation
    const expanded = ref(false); // Add this line for expanded section
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."; // Add this line for lorem text

    onMounted(() => {
      // Tutup sidebar saat pertama kali halaman dimuat
      leftDrawerOpen.value = false;
    });

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      leftDrawerOpen,
      slide,
      expanded,
      lorem,
      toggleLeftDrawer,
    };
  },
};
</script>

<style>
/* Add your custom styles here */
.my-card {
  flex: 1;
  max-width: 300px;
}
.q-gutter-md {
  margin: 0 -1rem; /* Set margin between carousel and cards to 1rem */
}
</style>
