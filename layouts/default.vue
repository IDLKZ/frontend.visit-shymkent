<template>
  <section style="overflow: hidden">
    <v-app>
      <Navbar/>
      <v-main class="mt-10">
        <Nuxt/>
      </v-main>
      <Footer/>

    </v-app>
  </section>


</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  components: {Footer, Navbar},
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
