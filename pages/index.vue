<template>
  <section class="ma-0">
    <v-container fluid class="pa-0">
      <v-carousel
        cycle
        height="100vh"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in 2"
          :key="i"
          src="https://i.pinimg.com/originals/71/9b/e8/719be89efa6a548253b4d3c7e9bfa6b1.jpg"
        >
          <v-container style="height:100%; width:100vw"  class="pl-md-10 pl-3  d-flex align-center">
            <div>
              <p class="text-md-h2 text-h5 font-weight-bold white--text mb-md-4 mb-4">
                Скоро здесь будет текст!
              </p>

              <p class="text-md-h5 text-subtitle-1 font-weight-bold white--text mb-md-10 mb-4">
                Скоро здесь будет текст! Скоро здесь будет текст!
              </p>
              <v-btn color="red darken-1" class="white--text font-weight-bold"
              large
              >
                Узнать
              </v-btn>
            </div>

          </v-container>

        </v-carousel-item>
      </v-carousel>

    </v-container>


    <v-container class="mt-md-15 py-md-10">
        <v-row>
          <v-col md="9" cols="12" class="d-flex">
              <v-sheet class="d-flex justify-center icon-section" rounded color="red darken-1" height="75" width="75">
                <v-icon color="white" size="50">
                  far fa-compass
                </v-icon>
              </v-sheet>
              <div class="ml-4">
                <p class="text-md-h4 text-h5  red--text text--darken-1 mb-0">
                  Путеводитель
                </p>
                <p class="text-h6 font-weight-light">
                  Откройте для себя красивейшие места любимого Шымкента
                </p>
              </div>
          </v-col>

          <v-col md="3" cols="12" class="d-none d-sm-block text-right">
            Сотни
            <br>
            интереснейших мест
            <br>
            города
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
                class="white--text align-end"
              >
                <v-card-title class="text-md-h6 text-subtitle-1 font-weight-bold">Top western road trips</v-card-title>
              </v-img>

            </v-card>

          </v-col>


        </v-row>
    </v-container>

    <v-container class="mt-md-15 py-md-10">
      <v-row>
        <v-col md="6" cols="12" class="d-flex">
          <v-sheet class="d-flex justify-center icon-section" rounded color="red darken-1" height="75" width="75">
            <v-icon color="white" size="50">
              far fa-calendar-check
            </v-icon>
          </v-sheet>
          <div class="ml-4">
            <p class="text-md-h4 text-h6 font-weight-medium red--text text--darken-1 mb-0">
              Календарь событий
            </p>
            <p class="text-h6 font-weight-light">
              Следите за событиями любимого города
            </p>
          </div>
        </v-col>

        <v-col md="6" cols="12" class="d-none d-sm-block">
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
        <v-col cols="12" lg="3" sm="6" v-for="i in 4" >
        <v-card
          class="mx-auto my-12 event-card"
        >
          <v-img
            class="card-img"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>

          <v-card-title class="black--text">
            Ярмарка продуктовая
          </v-card-title>

          <v-card-text>
            <v-row
              align="center"
              class="mx-0"
            >

            </v-row>

            <div class="mt-4  text-subtitle-1">

              <div class="d-flex">
                <div class="pr-1">
                  <v-icon color="red accent-4" size="18">
                    fas fa-map-marker-alt
                  </v-icon>
                </div>
                <div>
                  <span class="text-body-2 black--text font-weight-bold ">
                    Выставочный центр «Көрме»
                  </span>
                  <br>
                  <small style="font-size: 12px">
                    проспект Нурсултана Назарбаева, 12
                  </small>
                </div>
              </div>

            </div>

          </v-card-text>

          <v-card-text class="text-caption black--text" style="min-height: 150px">
            Уважаемые жители и гости города!!! Приглашаем вас на ярмарку, которая пройдет в выставочном центре. Тип питания, у вас есть возможность приобрести фрукты по низкой цене. Ждем вас! # Тәуелсіздік # Тә...
          </v-card-text>

          <v-card-actions class="d-flex justify-md-space-between">
            <v-btn color="red accent-4" class="white--text text-caption text-capitalize px-8">
              Купить
            </v-btn>

            <v-btn color="red accent-4" class="white--text text-caption text-capitalize px-8">
              Подробнее
            </v-btn>
          </v-card-actions>
        </v-card>
        </v-col>

    <v-col cols="12" class="text-center">
      <v-btn
        outlined
        rounded
        color="red accent-4"
        x-large
        class="text-caption text-none"
      >
        Загрузить еще....
      </v-btn>
    </v-col>

      </v-row>
    </v-container>

    <section style="background-color:#C42313;">
      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex">
            <v-sheet class="d-flex justify-center icon-section" rounded color="white" height="75" width="75">
            <v-icon color="red" size="50">
                far fa-sun
              </v-icon>
            </v-sheet>
            <div class="ml-4">
              <p class="text-md-h4 text-h6 font-weight-medium white--text mb-0">
                Календарь событий
              </p>
              <p class="text-h6 font-weight-light white--text">
                Следите за событиями любимого города
              </p>
            </div>
          </v-col>



        </v-row>
      </v-container>
    </section>

    <v-container class="mt-md-15 py-md-10">
      <v-row>
        <v-col md="6" cols="12" class="d-flex">
          <v-sheet class="d-flex justify-center icon-section" rounded color="red darken-1" height="75" width="75">
            <v-icon color="white" size="50">
              fas fa-map-marker-alt
            </v-icon>
          </v-sheet>
          <div class="ml-4">
            <p class="text-md-h4 text-h6 font-weight-medium red--text text--darken-1 mb-0">
              Маршруты
            </p>
            <p class="text-h6 font-weight-light">
              Не знаете, что посетить?
            </p>
          </div>
        </v-col>

        <v-col md="6" cols="12" class="d-none d-sm-block">
          <div class="line-block">
          </div>
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
            class="text-caption text-none"
          >
            Смотреть все категории
          </v-btn>
        </v-col>
      </v-row>
    </v-container>


    <v-container class="mt-md-15 py-md-10">
      <v-row>
        <v-col md="6" cols="12" class="d-flex">
          <v-sheet class="d-flex justify-center icon-section" rounded color="red darken-1" height="75" width="75">
            <v-icon color="white" size="50">
              fas fa-shopping-cart
            </v-icon>
          </v-sheet>
          <div class="ml-4">
            <p class="text-md-h4 text-h6 font-weight-medium red--text text--darken-1 mb-0">
              Сувениры
            </p>
            <p class="text-h6 font-weight-light">
              Оставьте себе на память кусочек Шымкента
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-col lg="3" md="4" sm="6" cols="6" v-for="i in 4" class="px-2">
          <v-card
            class="mx-auto my-12 souvenir-card"
          >
            <v-img
              class="souvenir-img"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-title class="black--text souvenir-title">
              «Подражание лучшим...»
            </v-card-title>


            <v-card-text class="text-caption black--text souvenir-subtitle">
              Полностью завершенное графическое произведение. Одним из лучших художников мирового уровня является копия произведения И. Крамского «Белгісіз» (Неизвестная). Автор: Абдураимова Санобар Алимжановна             </v-card-text>

            <v-card-actions class="souvenir-action">
              <span class="d-flex">
                <v-sheet class="pa-1 souvenir-sheet">
                  <v-icon size="15" color="white" class="souvenir-icon">
                    fas fa-tags
                  </v-icon>
                </v-sheet>
                <p class="text-subtitle-1 font-weight-bold text-uppercase ma-0 ml-2 souvenir-price">
                  700000 Тг
                </p>
              </span>

              <v-btn color="red accent-4" class="white--text text-caption text-capitalize souvenir-button">
                Подробнее
              </v-btn>
            </v-card-actions>
          </v-card>
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
    }
  },
}
</script>

<style lang="scss">
//Hello
$mainColor: #C42313;
$grayColor:#cbcbcb;
@mixin chart-line{
  border: 1px dashed #cbcbcb;
}


.calendar-event{
  min-height: 100px;
  background: #C42313;
}

.active-button{

}
.day-button-group{
  .day-button{
    border-right: 1px solid white!important;
    color:$grayColor;
    padding-right: 5px;
    @media screen and (max-width: 768px) {
      border-right: none;
    }
    :hover{
      color: white;
      background: transparent!important;
    }
  }
  :nth-last-child(1){
    border-right: none!important;
  }
}

.place-card{

  img{
    min-height: 200px;
    @media screen and (max-width: 400px){
      min-height: 160px;
    }
  }
  @media screen and (max-width: 400px){
    font-size: 10px;
  }

}

.event-card{
  elevation: 0;
  box-shadow: none!important;
  .card-img{
    height: 270px;
    border-radius: 5px;
  }
}

.routes-card{
  padding:0;
  border:1px solid $grayColor;
  border-radius: 8px;
  .routes-img{
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  }

  .routes-text{
    @media screen {
      padding: 10px 0 10px 0;
    }
  }

  .routes-list-item{
    @media screen and (max-width: 768px){
      min-height: 0;
    }

  }

}

.line-block{
  @include chart-line
}

.souvenir-card{
  box-shadow: none!important;
  .souvenir-img{
    min-height: 250px;
    @media screen and (max-width: 600px){
      min-height: 150px;
    }
  }
  .souvenir-action{
    .souvenir-icon{
      background: $mainColor;
    }
  }


}


</style>
