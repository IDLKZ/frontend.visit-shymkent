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
      <v-col md="6" cols="12" class="d-flex align-center">
        <v-sheet class="icon-section d-flex justify-center" rounded>
          <v-icon class="my-icon" color="white">
            far fa-compass
          </v-icon>
        </v-sheet>
        <div class="ml-4 d-flex align-center">
          <div>
            <p class="icon-title">
              Путеводитель
            </p>
            <p class="icon-subtitle">
              Откройте для себя красивейшие места любимого Шымкента
            </p>
          </div>

        </div>
      </v-col>
      <v-col md="6" cols="12" class="d-none d-sm-flex align-center">
        <div class="line-block"></div>
      </v-col>
    </v-row>



    <v-row>
<!--      Категории-->
    <v-col lg="4" md="4" class="visit-category">
      <v-row>
        <v-cols lg="12" md="12">
          <v-card
            max-width="400px"
            class="mx-auto my-8"
            style="width: 100%"
          >
            <div class="px-5 py-5" style="background: #c4230a">
              <p class="text-h5 white--text font-weight-bold ma-0">
                Категории
              </p>
            </div>

            <div class="px-5 py-10">
              <v-checkbox
                v-model="ex4"
                color="#c4230a"
                value="red"
                hide-details
              >
                <template v-slot:label>
                  <span class="input_label">Все</span>
                </template>
              </v-checkbox>

              <v-expansion-panels accordion>
                <v-expansion-panel
                  v-for="(item,i) in 10"
                  :key="i"
                  style="box-shadow: none!important;"
                >
                  <v-expansion-panel-header style="padding: 0;">
                    <v-checkbox
                      v-model="ex4"
                      color="#c4230a"
                      value="red"
                      hide-details
                    >
                      <template v-slot:label>
                        <span class="input_label">Категория {{item}}</span>
                      </template>
                    </v-checkbox>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-checkbox v-for="i in 5"
                                v-model="ex4"
                                color="#c4230a"
                                value="red"
                                hide-details
                    >
                      <template v-slot:label>
                        <span class="input_label">Подкатегория {{i}}</span>
                      </template>
                    </v-checkbox>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>




          </v-card>
        </v-cols>
      </v-row>
    </v-col>
<!--Конец категорий -->

<!--      Карточки-->
    <v-col lg="8" md="8" sm="12" cols="12">
      <v-row>
        <v-col lg="6" md="12" sm="6" cols="6" v-for="(item,i) in 8" :key="i">
          <v-card
            class="mx-auto my-md-6 my-sm-4 pb-5 visit-card" max-width="500">
            <div>
              <v-img
                class="visit-image"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
              ></v-img>
            </div>
            <div class="px-md-5 pt-2">
              <v-list-item-icon class="my-0 mx-1" v-for="i in 4">
                <v-icon class="mr-1" size="8" style="color: #C42313">
                  fas fa-circle
                </v-icon>
                <v-list-item-title class="tag-title">
                  Туристические сервисы
                </v-list-item-title>
              </v-list-item-icon>
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
            </div>
            <v-card-title class="text-h5 font-weight-bold visit-title">Парк Наурыз</v-card-title>
            <v-card-text  class="black--text text-subtitle-1 visit-subtitle">
                Крупнейшая торгово-розничная сеть Казахстана, входит в десятку крупнейших частных компаний страны. Основной деятельностью является реализация товаров
            </v-card-text>
            <v-card-actions class="px-2">
              <v-btn color="red accent-4" class="white--text text-caption text-capitalize px-md-8 mt-2 visit-button">
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



    </v-col>
      <!--      Карточки-->
    </v-row>

  </v-container>


</section>
</template>

<script>
export default {
name: "visitPlace",
  data(){
  return{
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
  }
  }
}
</script>

<style scoped lang="scss">


.visit-category{
  @media screen and (max-width: 1000px) {
    display: none;
  }
}


.input_label{
  color: black;
}
.v-expansion-panel::before{
  box-shadow: none!important;
}

.visit-image{
  height: 250px;
  border-radius: 5px;
  @media screen and (max-width: 500px) {
    height: 120px;
  }

}


.tag-title{
  font-size: 12px;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
  @media screen  and (min-width: 500px) and (max-width: 900px){
    font-size: 12px;
  }
}
.visit-card{
  cursor: pointer;
  box-shadow: none!important;
  &:hover{
    -webkit-box-shadow: 16px 7px 8px 0px rgba(34, 60, 80, 0.22)!important;
    -moz-box-shadow: 16px 7px 8px 0px rgba(34, 60, 80, 0.22)!important;
    box-shadow: 16px 7px 8px 0px rgba(34, 60, 80, 0.22)!important;
  }
}
.visit-title{
  @media screen and (max-width: 500px) {
    padding: 5px 0 !important;
    font-size: 18px!important;
  }
  @media screen  and (min-width: 500px) and (max-width: 900px){
    font-size: 26px;
  }
}
.visit-subtitle{
  @media screen and (max-width: 500px) {
    padding: 5px 0 !important;
    font-size: 12px!important;
    line-height: 20px;
  }
  @media screen  and (min-width: 500px) and (max-width: 900px){
    font-size: 26px;
  }
}
.visit-button{
  @media screen and (max-width: 500px) {
    width: 100%;
  }
}

</style>
