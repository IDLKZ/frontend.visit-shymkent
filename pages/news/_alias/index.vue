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
          <p class="news-main-title">
            Дворцы школьников и молодежи появятся в Шымкенте
          </p>
        </v-col>
        <v-col md="12" cols="12" class="d-flex align-center my-0 py-0">
          <span class="d-flex  justigy-between">
                      <p class="main-news-info  black--text"><v-icon size="14" color="black">fas fa-clock</v-icon> 12 июля 2021 14:25</p>
                      <p class="main-news-info ml-2 black--text"><v-icon size="14" color="black">fas fa-user</v-icon> Админ Админов</p>
          </span>
        </v-col>

      </v-row>
      <!--Main News-->
      <v-row>
        <v-col xl="9" md="9" sm="12" xs="12">
          <v-img
            gradient="rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)"
            class="main-news d-flex align-end pa-5" src="https://visit-shymkent.kz/land/images/storage/img_ef4fdb7bad98493cbed952dbfbe03af8.png">
          </v-img>
          <div class="my-5">
            <p class="text-subtitle-1">
              Об этом на отчетной встрече сообщил глава города. По его словам, большой проблемой для города является охват детей дополнительным образованием.
              ⠀
              «Всего 16 процентов учащихся школ города охвачены дополнительным образованием. Для решения проблем мы реконструируем бывший дворец Фосфорников и откроем его в качестве Дворца молодежи. Кроме того, мы планируем начать строительство нового современного Дворца школьников».
              ⠀
              В результате, по прогнозам властей, до 2025 года охват детей дополнительным образованием будет увеличен почти в 3,5 раза — с нынешних 16% до 55%.
              ⠀
              Также, по информации М. Айтенова, в этом году на оснащение школ направят около шести миллиардов тенге.
              ⠀
              «Оборудовано всего 32 процента учебных кабинетов. Школы будут оснащены 259 специальными предметными кабинетами. Если в начале прошлого года на 27 учеников Шымкента приходился один компьютер, то сейчас на четыре ученика приходится один компьютер. Эта работа будет продолжена в этом году», — подчеркнул спикер.
              ⠀
              Во дворах 28 школ будут построены спортивные площадки. В прошлом году для безопасности детей в зданиях 36-ти школ установили туалеты, в Шымкенте этот вопрос полностью решен. В течение года во всех организациях образования появятся камеры видеонаблюдения современного образца, а также турникеты, которые будут подключены к системе полиции.


            </p>
          </div>




          <v-row class="mt-5 py-5">

            <v-col cols="12" class="text-center">
              <v-btn
                outlined
                rounded
                x-large
                class="text-caption text-none red-button"
              >
              Ко всем новостям
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col xl="3" md="3" sm="12" xs="12">
          <v-row>
            <v-col lg="12" md="12" sm="12" cols="12" v-for="i in 3" class="px-2 souvenir-column">
              <v-card class="mx-auto my-2 news-card">
                <v-img
                  class="news-img"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <div>
                  <p class="main-news-info pt-2 black--text">Опубликовано 12 июля 2021 14:25</p>
                  <v-card-title class="black--text news-title px-0">
                    Чемпионат мира по шахматам среди молодежных команд
                  </v-card-title>
                </div>


              </v-card>
            </v-col>

          </v-row>
        </v-col>

      </v-row>










      <!--      Конец Кард -->
    </v-container>


  </section>

</template>

<script>
export default {
name: "_alias"
}
</script>

<style scoped>

</style>
