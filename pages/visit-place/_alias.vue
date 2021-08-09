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
          <lingallery :iid.sync="currentId" :width="700" :height="500" :items=galleries />

          <v-row class="mt-10">
              <v-col md="4">
                <p class="font-weight-black">
                  Адрес
                </p>
              </v-col>
              <v-col md="8">
                {{this.place.address}}
                <div class="line-block mt-md-2"></div>
              </v-col>

              <v-col md="4">
                <p class="font-weight-black">
                  Режим работы:
                </p>
              </v-col>
              <v-col md="8">
                <div v-if="this.place.workdays">
                  <div v-for="(item,i) in this.place.workdays" :key="i">
                    {{item.weekday['title_'+$i18n.locale]}}
                    <span v-if="item.time_start"> / {{item.time_start}} --</span>
                    <span v-if="item.time_end"> -- {{item.time_end}}</span>
                  </div>
                </div>
                <div class="line-block mt-md-2"></div>
              </v-col>

              <v-col md="4">
                <p class="font-weight-black">
                  Телефоны для связи:
                </p>
              </v-col>
              <v-col md="8">
                <div v-if="this.place.phone">
                  <span v-for="(item,i) in this.place.phone" :key="i">
                    <a :href="'tel:'+item">{{item}}</a> .,
                  </span>
                </div>
                <div class="line-block mt-md-2"></div>
              </v-col>

              <v-col md="4">
                <p class="font-weight-black">
                  Средний чек:
                </p>
              </v-col>
              <v-col md="8">
                <div v-if="this.place.price">
                  {{this.place.price}}
                </div>
                <div class="line-block mt-md-2"></div>
              </v-col>

              <v-col md="4">
                <p class="font-weight-black">
                  Описание:
                </p>
              </v-col>
              <v-col md="8">
                <div v-html="this.place['description_'+$i18n.locale]"></div>
                <div class="line-block mt-md-2"></div>
              </v-col>

              <v-col md="4">
                <p class="font-weight-black">
                  Веб-сайт:
                </p>
              </v-col>
              <v-col md="8">
                <div v-if="this.place.social_networks">
                  <div v-for="(item,i) in this.place.social_networks" :key="i">
                    <a :href="item">{{item}}</a> .,
                  </div>
                </div>

                <div class="line-block mt-md-2"></div>
              </v-col>

              <v-col md="4">
                <p class="font-weight-black">
                  Электронная почта:
                </p>
              </v-col>
              <v-col md="8">
                <div v-if="this.place.user">
                    <a :href="'mailto:'+this.place.user.email">{{this.place.user.email}}</a>
                </div>

                <div class="line-block mt-md-2"></div>
              </v-col>
          </v-row>
        </v-col>
        <v-col md="4">
          <yandex-map :coords="coords"
                      zoom="10"
                      style="width: 400px;height: 500px;"
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

    <v-container class="py-md-10">
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
                  Cобытия на месте
                </p>
                <p class="icon-subtitle">
                  Купить билеты онлайн
                </p>
              </div>

            </div>
          </div>
          <div class="line-block"></div>

        </v-col>
      </v-row>
    </v-container>

    <section class="calendar-event d-flex align-center">
      <v-container>
        <v-row>
          <v-col class="d-block d-md-flex align-center" cols="12" md="6" sm="12">
            <v-btn-toggle
              v-model="text"
              tile
              group
              color="white"
              class="d-block day-button-group"
            >
              <v-btn class="white--text text-subtitle-2 text-md-h6 day-button text-capitalize" value="nearest" active-class="">
                Ближайшие
              </v-btn>
              <v-btn class="white--text text-subtitle-2 text-md-h6 day-button text-capitalize" value="today" active-class="">
                Сегодня
              </v-btn>

              <v-btn class="white--text text-subtitle-2 text-md-h6 day-button text-capitalize"  value="tomorrow" active-class="">
                Завтра
              </v-btn>
            </v-btn-toggle>
          </v-col>
          <v-col class="text-right d-flex align-center justify-end" cols="12" md="6" sm="12">
            <v-btn class="white--text text-subtitle-2 text-md-h6 text-capitalize" color="transparent" elevation="0" value="today" active-class="">
              Выбрать дату
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

    </section>

    <v-container class="my-5">
      <v-row>
        <v-col cols="6" lg="3" sm="6" v-for="(event,index) in this.place.events"  :key="index">
          <v-card
            class="mx-auto my-5 event-card"
          >
            <v-img
              class="event-img"
              :src="getImages(event.image)"
              gradient="rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)"

            >

              <template v-if="event.workdays.length>0">
                <div class="py-2 d-flex justify-space-around">
                  <div>
                    <small class="white--text" v-for="(day,index) in event.workdays" :key="index">
                      {{day.weekday["title_" + $i18n.locale]}} <br>
                    </small><br>
                    <p class="event-time"  v-for="(day,index) in event.workdays" :key="index" v-if="day.date_start">
                      {{day.date_start}} -
                    </p>
                    <p class="event-time" v-for="(day,index) in event.workdays" :key="index" v-if="day.date_end">
                      {{day.date_end}}
                    </p>
                  </div>
                  <div>
                    <small class="white--text">Время</small>
                    <br>
                    <template v-for="(day,index) in event.workdays">
                      <small class="white--text" :key="index" v-if="day.time_start">
                        {{day.time_start}} -
                      </small>

                      <small class="white--text" :key="index"  v-if="day.time_end">
                        {{day.time_end}}
                      </small>
                      <br>
                    </template>

                  </div>
                </div>
              </template>
            </v-img>

            <v-card-title class="black--text event-title">
              {{event["title_"+$i18n.locale]}}
            </v-card-title>

            <v-card-text class="event-location pb-0" >
              <div class="text-subtitle-1">
                <div class="d-flex pb-0 align-items-center" >
                  <div class="pr-1" v-if="event.address">
                    <v-icon color="red accent-4" size="18">
                      fas fa-map-marker-alt
                    </v-icon>
                  </div>
                  <div class="event-subtitle" v-if="event.address">
                  <span class="text-body-2 black--text font-weight-bold ">
                    {{event.address}}
                  </span>
                    <br>
                  </div>
                </div>
              </div>

            </v-card-text>

            <v-card-text class="text-caption black--text event-description" v-html="(event['description_' + $i18n.locale]).slice(0,300)">

            </v-card-text>

            <v-card-actions class="event-action">
              <v-btn  v-if="event.eventum" color="red accent-4"  class="white--text text-caption text-capitalize red-button">
                {{$t("buy")}}
              </v-btn>

              <v-btn color="red accent-4" class="white--text text-caption text-capitalize red-button">
                {{$t("more_info")}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" class="text-center">
          <v-btn
            outlined
            rounded
            x-large
            class="text-caption text-none red-button"
          >
            Загрузить еще....
          </v-btn>
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
  methods:{
    getImages(data){
      console.log(this.$store.state.image.image);
      return this.$store.state.image.image + data ;
    },
    truncate(string, value) {
      return string.substring(0, value) + '…';
    }

  },
  mounted() {
    console.log(this.place)
  }


}
</script>

<style scoped>

</style>
