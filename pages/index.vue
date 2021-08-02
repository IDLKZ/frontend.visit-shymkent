<template>
  <section class="ma-0"
  >
<!--    Слайдер -->
    <v-container fluid class="pa-0">
      <v-carousel
        cycle
        height="100vh"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-if="sliders.length > 0"
          v-for="(slide, i) in sliders"
          :key="i"
          :src=getImages(slide.image)
        >
          <v-container style="height:100%; width:100vw"  class="pl-md-10 pl-3  d-flex align-center">
            <div>
              <p class="text-md-h2 text-h5 font-weight-bold white--text mb-md-4 mb-4">
                {{slide["title_"+$i18n.locale]}}
              </p>

              <p class="text-md-h5 text-subtitle-1 font-weight-bold white--text mb-md-10 mb-4">
                {{slide["description_"+$i18n.locale]}}
              </p>
              <v-btn color="red darken-1" class="white--text font-weight-bold"
                     :href="slide['link']"
                     large
              >
                {{slide["button_"+$i18n.locale]}}
              </v-btn>
            </div>

          </v-container>

        </v-carousel-item>

      </v-carousel>

    </v-container>
<!-- Конец слайдера -->


    <!--    Начало путеводителя-->
    <v-container class="mt-md-5 py-md-5">
        <v-row>
          <v-col md="9" cols="12" class="d-flex align-center">
              <v-sheet class="icon-section d-flex justify-center" rounded>
                <v-icon class="my-icon" color="white">
                  far fa-compass
                </v-icon>
              </v-sheet>
              <div class="pl-2 d-flex align-center">
                <div>
                  <p class="icon-title">
                    {{$t("place_title")}}
                  </p>
                  <p class="icon-subtitle">
                    {{$t("place_subtitle")}}
                  </p>
                </div>

              </div>
          </v-col>

          <v-col md="3" cols="12" class="d-none d-sm-block text-right">
            {{$t("place_right")}}
          </v-col>
        </v-row>
        <v-row v-if="categoryplace.length > 0">
          <v-col
            v-for="(category,index) in categoryplace"
            :key="index"
            lg="3"
            md="4"
            sm="6"
            cols="6">

            <v-card
              class="mx-auto place-card"
              link
              to="/"
            >
              <v-img
                :src="getImages(category.image)"
                class="white--text align-end place-img"
                gradient="rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)"
              >
                <v-card-title class="text-md-h6 text-subtitle-1 font-weight-bold place-title">
                  {{category["title_"+$i18n.locale]}}
                </v-card-title>
              </v-img>

            </v-card>

          </v-col>


        </v-row>
    </v-container>
     <!--Конец путеводителя-->

<!--Календарь событий-->
    <v-container class="mt-md-15 py-md-10">
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
                  {{$t("events_title")}}
                </p>
                <p class="icon-subtitle">
                  {{$t("events_subtitle")}}
                </p>
              </div>

            </div>
          </div>
            <div class="line-block"></div>

        </v-col>
      </v-row>
    </v-container>

<!--    Конец календарь событий-->

<!--Карты с календарем событий-->
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


    <v-container class="my-5" v-if="events.length > 0">
      <v-row>
        <v-col cols="6" lg="3" sm="6" v-for="(event,index) in events"  :key="index">
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

<!--    Конец карт с календарем-->


    <section style="background-color:#C42313;padding: 50px 0 50px 0">
      <v-container>
        <v-row>
          <v-col md="12" cols="12" class="d-flex align-center">
            <v-sheet class="icon-section d-flex justify-center" color="white" rounded>
              <v-icon class="my-icon" color="#C42313">
                far fa-sun
              </v-icon>
            </v-sheet>
            <div class="ml-4 d-flex align-center">
              <div>
                <p class="icon-title white--text">
                  Запланировать поездку
                </p>
                <p class="icon-subtitle white--text">
                  Билеты и проживание
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-5">
          <v-tabs background-color="#C42313"  v-model="tab">
            <v-tab   class="schedule" active-class="schedule-active" href="#tab1">
              <v-icon class="schedule-icon mr-2">fas fa-plane</v-icon>Авиабилеты
            </v-tab>
            <v-tab  class="schedule" active-class="schedule-active" href="#tab2">
              <v-icon class="schedule-icon mr-2">fas fa-train</v-icon>Ж/Д
            </v-tab>
            <v-tab  class="schedule" active-class="schedule-active" href="#tab3">
              <v-icon class="schedule-icon mr-2">fas fa-hotel</v-icon>Отели
            </v-tab>
            <v-tab  class="schedule" active-class="schedule-active" href="#tab4">
              <v-icon class="schedule-icon mr-2">fas fa-key</v-icon>Квартиры
            </v-tab>
          </v-tabs>

          <v-tabs-items class="py-5 px-5" style="width: 100%" v-model="tab">
            <v-tab-item value="tab1">
              <v-form  class="d-flex align-center">
                <v-row>
                  <v-col  lg="2" md="3" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Откуда"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="3" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Куда"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="3" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Дата вылета"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="3" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Обратно"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="3" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Пассажиры"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="3" sm="6" cols="12" >
                      <v-btn class="my-btn">
                        Найти
                      </v-btn>
                  </v-col>
                </v-row>
              </v-form>

            </v-tab-item>
            <v-tab-item value="tab2">
              <v-form  class="d-flex align-center">
                <v-row>
                  <v-col  lg="3" md="3" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Откуда"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="3" md="3" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Куда"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Дата вылета"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Обратно"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-btn class="my-btn">
                      Найти
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-tab-item>
            <v-tab-item value="tab3">
              <v-form  class="d-flex align-center">
                <v-row>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Откуда"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Куда"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Дата вылета"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="4" md="4" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Обратно"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-btn class="my-btn">
                      Найти
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-tab-item>
            <v-tab-item value="tab4">
              <v-form  class="d-flex align-center">
                <v-row>
                  <v-col  lg="3" md="3" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Откуда"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Куда"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Дата вылета"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="3" md="3" sm="6" cols="12" >
                    <v-text-field
                      outlined
                      label="Обратно"
                      hide-details="false"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col  lg="2" md="2" sm="6" cols="12" >
                    <v-btn class="my-btn">
                      Найти
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-tab-item>
          </v-tabs-items>

        </v-row>
      </v-container>
    </section>

    <v-container class="mt-md-15 py-md-10">
      <v-row>
        <v-col md="12" cols="12" class="d-flex align-center">
          <div class="d-flex align-center">
            <v-sheet class="icon-section d-flex justify-center" rounded>
              <v-icon class="my-icon" color="white">
                far fa-map-marker-alt
              </v-icon>
            </v-sheet>
            <div class="ml-4 d-flex align-center">
              <div>
                <p class="icon-title">
                 {{$t("routes_title")}}
                </p>
                <p class="icon-subtitle">
                  {{$t("routes_subtitle")}}
                </p>
              </div>

            </div>
          </div>
          <div class="line-block"></div>

        </v-col>
      </v-row>
      <v-row>

        <v-col cols="12" md="6" v-for="route in routes" :key="route.id">
          <div class="d-flex border rounded-lg border routes-card">
            <div class="d-flex" style="width: 40%">
              <v-img class="routes-img" width="100%"  :src="getImages(route.image)"></v-img>
            </div>
            <div class="px-4 py-md-4 routes-text">
              <p class="text-subtitle-1 text-md-h6">{{ route['title_' + $i18n.locale] }}</p>
              <v-list class="text-caption text-md-body-1 routes-list">
                <v-list-item class="px-0 routes-list-item" v-html="truncate(route['description_' + $i18n.locale], 100)"></v-list-item>
<!--                <v-list-item class="px-0 routes-list-item">-->
<!--                  09:00-10:00 Завтрак в национальном ресторане казахской кухни «Sandyq»-->
<!--                </v-list-item>-->

              </v-list>
              <v-btn color="red accent-4" class="white--text text-caption text-capitalize px-8 mt-2">
                Подробнее
              </v-btn>


            </div>
          </div>



        </v-col>

        <v-col cols="12" class="text-center my-4">
          <v-btn
            outlined
            rounded
            color="red accent-4"
            x-large
            class="text-caption text-none red-button"
          >
            Смотреть все категории
          </v-btn>
        </v-col>
      </v-row>
    </v-container>


    <v-container class="mt-md-5 py-md-5">
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
                  Сувениры
                </p>
                <p class="icon-subtitle">
                  Оставьте себе на память кусочек Шымкента
                </p>
              </div>

            </div>
          </div>
          <div class="line-block"></div>

        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col lg="3" md="4" sm="12" xs="6" cols="6" v-for="souvenir in souvenirs" :key="souvenir.id" class="px-2 souvenir-column">
          <v-card class="mx-auto my-2 souvenir-card">
            <v-img
              class="souvenir-img"
              :src="getImages(souvenir.image)"
            ></v-img>
            <div>
              <v-card-title class="black--text souvenir-title pa-2">
                "{{souvenir['title_'+ $i18n.locale]}}"
              </v-card-title>
              <v-card-text class="text-caption black--text souvenir-subtitle pa-2" v-html="truncate(souvenir['description_' + $i18n.locale], 75)"></v-card-text>
              <v-card-actions class=" pa-2">
                <div class="souvenir-action">
                  <div class="souvenir-price">
                    <p class="text-subtitle-1 font-weight-bold ma-0 ml-2 souvenir-price">
                      <v-icon size="12" color="white" class="souvenir-icon pa-1 mr-1">
                        fas fa-tags
                      </v-icon>
                      {{ souvenir.price }} ТГ
                    </p>
                  </div>
                  <div class="souvenir-button">
                    <v-btn color="red accent-4" class="white--text text-caption text-capitalize souvenir-button align-items-left">
                      Подробнее
                    </v-btn>
                  </div>
                </div>
              </v-card-actions>
            </div>


          </v-card>
        </v-col>


      </v-row>

      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn
            outlined
            rounded
            color="red accent-4"
            x-large
            class="text-caption text-none red-button"
          >
            Перейти в магазин
          </v-btn>
        </v-col>
      </v-row>
    </v-container>


    <v-container class="mt-md-15 py-md-10">
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
                  Новости
                </p>
                <p class="icon-subtitle">
                  Что происходит
                </p>
              </div>

            </div>
          </div>
          <div class="line-block"></div>

        </v-col>


      </v-row>
      <v-row class="mt-5">
        <v-col lg="3" md="4" sm="6" cols="6" v-for="blog in blogs" :key="blog.id" class="px-2 souvenir-column">
          <v-card class="mx-auto my-2 news-card">
            <v-img
              class="news-img"
              :src="getImages(blog.image)"
            ></v-img>
            <div>
              <v-card-title class="black--text news-title pa-2" v-html="truncate(blog['description_'+$i18n.locale], 50)"></v-card-title>
            </div>


          </v-card>
        </v-col>


      </v-row>

      <v-row>
        <v-col cols="12" class="text-center">
          <v-btn
            outlined
            rounded
            color="red accent-4"
            x-large
            class="text-caption text-none red-button"
          >
            Ко всем новостям
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      tab:null,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      sliders:[],
      categoryplace:[],
      events:[],
      routes: [],
      souvenirs: [],
      blogs: []
    }
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
  async asyncData({$axios}) {
    let sliders,categoryplace,events,routes,souvenirs,blogs = [];
    try{
      await $axios.$get("/sliders").then((e)=>{e.length > 0 ? sliders = e : null});
      await $axios.$get("/categoriesofthe-places").then((e)=>{e.length > 0 ? categoryplace = e : null});
      await $axios.$get("/events").then((e)=>{e.length > 0 ? events = e : null});
      await $axios.$get("/routes").then((e)=>{e.length > 0 ? routes = e : null});
      await $axios.$get("/souvenirs").then((e)=>{e.length > 0 ? souvenirs = e : null});
      await $axios.$get("/news").then((e)=>{e.length > 0 ? blogs = e : null});
    }
    catch (e) {
      console.log(e);
    }
    return {sliders,categoryplace,events,routes,souvenirs,blogs}
  }
}
</script>

<style lang="scss">




</style>
