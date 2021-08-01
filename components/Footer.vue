<template>
<section class="footer py-10 mt-5">
<v-container>
  <v-row>
    <v-col cols="12" class="text-md-left text-center">

      <v-btn
        class="mx-1"
        fab
        dark
        href="https://vk.com/"
       x-small
        color="#4680c2"
      >
        <v-icon dark>
          fab fa-vk
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-1"
        fab
        dark
        href="https://facebook.com/"
       x-small
        color="#3b5998"
      >
        <v-icon dark>
          fab fa-facebook
        </v-icon>
      </v-btn>
      <v-btn
      class="mx-1"
      fab
      dark
      href="https://telegram.org/"
     x-small
      color="#64a9dc"
    >
      <v-icon dark>
        fab fa-telegram
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-1"
      fab
      dark
      href="https://twitter.com/"
     x-small
      color="#00aced"
    >
      <v-icon dark>
        fab fa-twitter
      </v-icon>
    </v-btn>
      <v-btn
      class="mx-1"
      fab
      dark
      href="https://twitter.com/"
      x-small
      color="#65bc54"
    >
      <v-icon dark>
        fab fa-whatsapp
      </v-icon>
    </v-btn>

    </v-col>
  </v-row>

  <v-row class="d-flex align-center my-5">
    <v-col md="2" class="text-md-left text-center">
      <p class="font-weight-bold text-h6">Партнеры</p>
    </v-col>
    <v-col md="10">
      <div>
        <VueSlickCarousel v-bind="settings">
          <div class="partner-block" v-for="i in 12" :key="i">
            <img class="partner-img" src="https://www.gov.kz/uploads/2020/2/5/a2771b439d27f513634fdbf9a2f12388_original.54774.png" width="100%">
          </div>

        </VueSlickCarousel>
      </div>
    </v-col>
  </v-row>
  <v-row class="mt-5 py-5 footer-nav" style="border-top: 1px solid darkgray">
    <v-col lg="2" md="3" sm="4" cols="12"  class="px-5" order-lg="1" order-md="6" order-sm="1" order="3">
      <v-list-item class="my-2" link to="">
        <img src="https://visit-shymkent.kz/land/images/logo.png" width="150px">
      </v-list-item>
      <v-list-item class="my-5" link to="">
        <img src="https://kpi-drive.ru/wp-content/uploads/2018/04/itunes-app-store-logo.png" width="150px" height="50px">
      </v-list-item>
      <v-list-item class="my-5" link to="">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" width="150px" height="50px">
      </v-list-item>
      <v-list-item class="my-5" link to="/privacystatement">
        Политика конфидециальности
      </v-list-item>
    </v-col>
    <v-col order-lg="1" order-md="1" lg="3" md="3" class="pl-6 d-lg-block d-md-block d-sm-none d-none">
      <p class="font-weight-bold subtitle-1">Партнеры</p>
      <v-list-item class="footer-link" link to="">Городские объекты</v-list-item>
      <v-list-item class="footer-link" link to="">Культура и искусство</v-list-item>
      <v-list-item class="footer-link" link to="">История и Традиции</v-list-item>
      <v-list-item class="footer-link" link to="">Экологический туризм</v-list-item>
      <v-list-item class="footer-link" link to="">Гастрономический туризм</v-list-item>
      <v-list-item class="footer-link" link to="">Активный отдых</v-list-item>
      <v-list-item class="footer-link" link to="">Туркестан и Отырар</v-list-item>
      <v-list-item class="footer-link" link to="">Туристические сервисы</v-list-item>
      <v-list-item class="footer-link" link to="">Шоппинг</v-list-item>
      <v-list-item class="footer-link" link to="">Лечебный и оздоровительный туризм</v-list-item>
      <v-list-item class="footer-link" link to="">Проживание</v-list-item>
      <v-list-item class="footer-link" link to="">Деловой туризм</v-list-item>
      <v-list-item class="footer-link" link to="">Карта города</v-list-item>
    </v-col>
    <v-col order-lg="2" order-md="2" lg="2" md="2" class="px-2 d-lg-block d-md-block d-sm-none d-none">
      <p class="font-weight-bold subtitle-1">События</p>
      <v-list-item class="footer-link" link to="">Календарь событий</v-list-item>
      <v-list-item class="footer-link" link to="">Новости</v-list-item>
      <v-list-item class="footer-link" link to="">Covid19</v-list-item>
    </v-col>
    <v-col order-lg="3" order-md="3" lg="1" md="2" class="pr-2 d-lg-block d-md-block d-sm-none d-none">
      <p class="font-weight-bold subtitle-1">Магазин</p>
      <v-list-item class="footer-link" link to="">Сувениры</v-list-item>
    </v-col>
    <v-col order-lg="4" order-md="4" lg="2" md="2" class="pl-4 d-lg-block d-md-block d-sm-none d-none">
      <p class="font-weight-bold subtitle-1">Путешествия</p>
      <v-list-item class="footer-link" link to="">Календарь событий</v-list-item>
      <v-list-item class="footer-link" link to="">Новости</v-list-item>
      <v-list-item class="footer-link" link to="">Covid19</v-list-item>
    </v-col>

    <v-col sm="4" cols="12" order-sm="2" order="1" class="d-lg-none d-md-none d-sm-block d-xs-block">
      <v-list color="transparent">
        <v-list-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold subtitle-1">Партнеры</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item class="pl-0">
            <v-list-item-content class="pa-0">
              <v-list-item class="footer-link-mobile" link to="">Городские объекты</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Культура и искусство</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">История и Традиции</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Экологический туризм</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Гастрономический туризм</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Активный отдых</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Туркестан и Отырар</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Туристические сервисы</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Шоппинг</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Лечебный и оздоровительный туризм</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Проживание</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Деловой туризм</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Карта города</v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold subtitle-1">События</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item class="pl-0">
            <v-list-item-content class="pa-0">
              <v-list-item class="footer-link-mobile" link to="">Календарь событий</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Новости</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Covid19</v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold subtitle-1">Магазин</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item class="pl-0">
            <v-list-item-content class="pa-0">
              <v-list-item class="footer-link-mobile" link to="">Сувениры</v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold subtitle-1">Путешествия</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item class="pl-0">
            <v-list-item-content class="pa-0">
              <v-list-item class="footer-link-mobile" link to="">Авиабилеты</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Ж/Д билеты</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Отели</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Квартиры</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Табло аэропорта</v-list-item>
              <v-list-item class="footer-link-mobile" link to="">Памятка туриста</v-list-item>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

      </v-list>
    </v-col>
    <v-col order-lg="5" order-md="5"  order-sm="3" order="2" lg="2" md="3" sm="4" cols="12" class="text-center text-sm-right text-md-right text-lg-right">
      <p class="font-weight-bold subtitle-1 mt-5">Контакты</p>
      <v-list-item-icon>
        <v-btn
          class="mx-1"
          fab
          dark
          href="https://vk.com/"
          x-small
          color="#C42313"
        >
          <v-icon dark>
            fab fa-instagram
          </v-icon>
        </v-btn>
        <v-btn
          class="mx-1"
          fab
          dark
          href="https://vk.com/"
          x-small
          color="#C42313"
        >
          <v-icon dark>
            fab fa-facebook
          </v-icon>
        </v-btn>
      </v-list-item-icon>

      <v-list-item class="footer-link text-right justify-center justify-sm-end justify-md-end" link to="tel:7777777777">+7 (701) 102-17-17</v-list-item>
      <v-list-item class="footer-link text-right justify-center justify-sm-end justify-md-end" link to="">+7 (771) 949-92-10</v-list-item>
      <v-list-item class="footer-link text-right justify-center justify-sm-end justify-md-end" link to="">info@visit-shymkent.kz</v-list-item>
      <v-list-item class="footer-link text-right justify-center justify-sm-end justify-md-end" link to="">Сообщить об ошибке</v-list-item>
    </v-col>
  </v-row>



</v-container>
</section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "Footer",
  components: { VueSlickCarousel },
  data(){
    return{
    settings:{
      "dots": true,
      "infinite": true,
      "speed": 500,
      "slidesToShow": 9,
      "slidesToScroll": 1,
      "initialSlide": 0,
      'autoplay':true,
      "responsive": [
        {
          "breakpoint": 1024,
          "settings": {
            "slidesToShow": 9,
            "slidesToScroll": 1,
            "infinite": true,
            "dots": true
          }
        },
        {
          "breakpoint": 900,
          "settings": {
            "slidesToShow": 6,
            "slidesToScroll": 1,
            "initialSlide": 2
          }
        },
        {
          "breakpoint": 600,
          "settings": {
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "initialSlide": 2
          }
        },
        {
          "breakpoint": 480,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 1
          }
        }
      ]
    }
  }
  }
}
</script>

<style scoped lang="scss">
.footer{
  background: #f8f8f8;
}

.partner-block{
  padding: 10px;
  min-height: 100px;
  display: flex!important;
  align-items: center;

  .partner-img{
    cursor: pointer;
    filter: grayscale(100%);
    &:hover{
      filter:initial;
    }
  }
}
.footer-link{
  font-size: 14px;
  min-height: 26px;
}

.footer-link-mobile{
  font-size: 12px;
  min-height: 25px;
}

</style>
