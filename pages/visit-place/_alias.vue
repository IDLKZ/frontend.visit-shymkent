<template>
  <section class="py-5">
    <v-container class="mt-md-5 py-md-5">
      <v-row>
        <div>
          <div>
            <v-breadcrumbs
              :items="items"
              divider="-"
            ></v-breadcrumbs>
          </div>
        </div>
      </v-row>

      <v-row>
        <v-col md="12" cols="12" class="d-flex align-center">
          <div class="d-flex align-center">
            <v-sheet class="icon-section d-flex justify-center" rounded>
              <v-icon class="my-icon" color="white">
                far fa-calendar-check
              </v-icon>
            </v-sheet>
            <div class="ml-4 d-flex align-center">
              <div>
                <p class="icon-title">
                  {{ this.place['title_'+$i18n.locale] }}
                </p>
                <p class="icon-subtitle">
                  <span v-for="(item,i) in this.place.category" :key="i">{{item['title_'+$i18n.locale]}} /</span>
                </p>
              </div>

            </div>
          </div>
          <div class="line-block ml-md-10"></div>

        </v-col>
      </v-row>

      <v-row>
        <v-col md="8">
          <lingallery :iid.sync="currentId" :width="700" :height="400" :items=galleries />


        </v-col>
        <v-col md="4">
          <yandex-map :coords="coords"
                      zoom="10"
                      style="width: 400px;height: 400px;"
                      map-type="map"
          >
            <div v-for="(item,i) in placemarks">
              <ymap-marker
                :key="i"
                :marker-id="i"
                marker-type="placemark"
                :coords="item"
                :hint-content="place['title_'+$i18n.locale]"
                :balloon="{header: 'header', body: 'body', footer: 'footer'}"
                :icon="{color: 'green', glyph: 'cinema'}"
                cluster-name="1"
              ></ymap-marker>
            </div>

          </yandex-map>
        </v-col>
      </v-row>
    </v-container>
  </section>

</template>

<script>
import Lingallery from 'lingallery';
export default {
  components:{
    Lingallery
  },
  data() {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          to: '/',
        },
        {
          text: 'Путеводитель',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      categories: [],
      galleries: [],
      currentId:null,
      coords: [42.340782,69.596329],
      placemarks: []
    }
  },
  async asyncData({params, $axios, store}) {
    let galleries = [];
    const alias = params.alias
    const place = await $axios.$get('/single-place/'+alias);
    let TIMA = JSON.parse(place.address_link)
    let placemarks = []
    TIMA.forEach((item, i) => {
      placemarks[i] = [item.lat, item.lng];
    })

    if(place.galleries.length > 0){
      for(let i = 0; i < place.galleries.length; i++){
        galleries.push(
          {id:place.galleries[i].id,src:store.state.image.image +place.galleries[i].image , thumbnail:store.state.image.image + place.galleries[i].image}
        )
      }
    }
    galleries.push({
      id:100, src:store.state.image.image +place.image, thumbnail:store.state.image.image +place.image
    })
    return {place,galleries,placemarks}
  },


}
</script>

<style scoped>
  .lingallery_thumbnails_content{
    text-align: center!important;
  }
</style>
