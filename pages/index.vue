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
        <v-row>
          <v-col
            v-for="i in 12"
            :key="i"
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
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                class="white--text align-end place-img"
              >
                <v-card-title class="text-md-h6 text-subtitle-1 font-weight-bold place-title">Top western road trips</v-card-title>
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
                  Календарь событий
                </p>
                <p class="icon-subtitle">
                  Следите за событиями любимого города
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


    <v-container class="my-5">
      <v-row>
        <v-col cols="6" lg="3" sm="6" v-for="i in 4" >
        <v-card
          class="mx-auto my-5 event-card"
        >
          <v-img
            class="event-img"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            gradient="rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)"

          >

              <template v-if="(i%2==0)">
                <div class="py-2 d-flex justify-space-around">
                <div>
                  <small class="white--text">Дата</small>
                  <p class="event-time">
                    02.07.2021 -
                  </p>
                  <p class="event-time">
                    10.07.2021
                  </p>
                </div>
                <div>
                  <small class="white--text">Время</small>
                  <p class="event-time">
                    9:00
                  </p>
                </div>
                </div>
              </template>
              <template v-else>
                <div class="py-2 d-flex">
                <div class="px-5 event-everyday">
                  <p class="event-time">
                    Ежедневное посещение
                  </p>
                </div>
                </div>
              </template>




          </v-img>

          <v-card-title class="black--text event-title">
            Ярмарка продуктовая
          </v-card-title>

          <v-card-text class="event-location">
            <div class="text-subtitle-1">
              <div class="d-flex">
                <div class="pr-1">
                  <v-icon color="red accent-4" size="18">
                    fas fa-map-marker-alt
                  </v-icon>
                </div>
                <div class="event-subtitle">
                  <span class="text-body-2 black--text font-weight-bold ">
                    Выставочный центр «Көрме»
                  </span>
                  <br>
                  <small>
                    проспект Нурсултана Назарбаева, 12
                  </small>
                </div>
              </div>
            </div>

          </v-card-text>

          <v-card-text class="text-caption black--text event-description">
            Уважаемые жители и гости города!!! Приглашаем вас на ярмарку, которая пройдет в выставочном центре. Тип питания, у вас есть возможность приобрести фрукты по низкой цене. Ждем вас! # Тәуелсіздік # Тә...
          </v-card-text>

          <v-card-actions class="event-action">
            <v-btn  v-if="i%2==0" color="red accent-4"  class="white--text text-caption text-capitalize red-button">
              Купить билеты
            </v-btn>

            <v-btn color="red accent-4" class="white--text text-caption text-capitalize red-button">
              Подробнее
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
                far fa-calendar-check
              </v-icon>
            </v-sheet>
            <div class="ml-4 d-flex align-center">
              <div>
                <p class="icon-title">
                  Календарь событий
                </p>
                <p class="icon-subtitle">
                  Следите за событиями любимого города
                </p>
              </div>

            </div>
          </div>
          <div class="line-block"></div>

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" v-for="i in 2" :key="i">
          <div class="d-flex border rounded-lg border routes-card">
            <div class="d-flex" style="width: 40%">
              <v-img class="routes-img" width="100%"  src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"></v-img>
            </div>
            <div class="px-4 py-md-4 routes-text">
              <p class="text-subtitle-1 text-md-h6">БИЗНЕС-ТУР</p>
              <v-list class="text-caption text-md-body-1 routes-list">
                <v-list-item class="px-0 routes-list-item">
                  08:00 - Сбор
                </v-list-item>
                <v-list-item class="px-0 routes-list-item">
                  09:00-10:00 Завтрак в национальном ресторане казахской кухни «Sandyq»
                </v-list-item>

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
                  Календарь событий
                </p>
                <p class="icon-subtitle">
                  Следите за событиями любимого города
                </p>
              </div>

            </div>
          </div>
          <div class="line-block"></div>

        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col lg="3" md="4" sm="12" xs="6" cols="6" v-for="i in 4" class="px-2 souvenir-column">
          <v-card class="mx-auto my-2 souvenir-card">
            <v-img
              class="souvenir-img"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <div>
              <v-card-title class="black--text souvenir-title pa-2">
                «Подражание лучшим...»
              </v-card-title>
              <v-card-text class="text-caption black--text souvenir-subtitle pa-2">
                Полностью завершенное графическое произведение. Одним из лучших художников мирового уровня является копия произведения И. Крамского «Белгісіз» (Неизвестная). Автор: Абдураимова Санобар Алимжановна             </v-card-text>
              <v-card-actions class=" pa-2">
                <div class="souvenir-action">
                  <div class="souvenir-price">
                    <p class="text-subtitle-1 font-weight-bold ma-0 ml-2 souvenir-price">
                      <v-icon size="12" color="white" class="souvenir-icon pa-1 mr-1">
                        fas fa-tags
                      </v-icon>
                      700000 ТГ
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
                  Календарь событий
                </p>
                <p class="icon-subtitle">
                  Следите за событиями любимого города
                </p>
              </div>

            </div>
          </div>
          <div class="line-block"></div>

        </v-col>


      </v-row>
      <v-row class="mt-5">
        <v-col lg="3" md="4" sm="6" cols="6" v-for="i in 4" class="px-2 souvenir-column">
          <v-card class="mx-auto my-2 news-card">
            <v-img
              class="news-img"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <div>
              <v-card-title class="black--text news-title pa-2">
                НА РАЗВИТИЕ ВОЕННО-СПОРТИВНОЙ БАЗЫ «БЕРКУТ» В ГОРОДЕ ШЫМКЕНТ ПЛАНИРУЕТСЯ ПРИВЛЕЧЕНИЕ ИНВЕСТИЦИЙ
              </v-card-title>
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
      sliders:[]
    }
  },
  methods:{
    getImages(data){
      console.log(this.$store.state.image.image);
      return this.$store.state.image.image + data ;
    }

  },
  async asyncData({$axios}) {
    let sliders = [];
    try{
      await $axios.$get("/sliders").then((e)=>{e.length > 0 ? sliders = e : null});
    }
    catch (e) {
      console.log(e);
    }
    return {sliders:sliders}
  }
}
</script>

<style lang="scss">




</style>
