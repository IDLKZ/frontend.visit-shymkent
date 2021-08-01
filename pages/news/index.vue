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
                  Новости
                </p>
                <p class="icon-subtitle">
                  Что происходит в Шымкенте
                </p>
              </div>

            </div>
          </div>
          <div class="line-block"></div>

        </v-col>

      </v-row>
      <!--Main News-->
      <v-row>
        <v-col xl="8" md="8" sm="12" xs="12">
          <v-img
            gradient="rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)"
            class="main-news d-flex align-end pa-5" src="https://visit-shymkent.kz/land/images/storage/img_ef4fdb7bad98493cbed952dbfbe03af8.png">
            <div>
              <p class="main-news-title white--text">
                Дворцы школьников и молодежи появятся в Шымкенте
              </p>
              <span class="d-flex  justigy-between">
                      <p class="main-news-info "><v-icon size="14" color="white">fas fa-clock</v-icon> 12 июля 2021 14:25</p>
                      <p class="main-news-info ml-2"><v-icon size="14" color="white">fas fa-user</v-icon> Админ Админов</p>

          </span>
            </div>




          </v-img>
        </v-col>

        <v-col xl="4" md="4" sm="12" xs="12">
          <v-col cols="12" class="pt-0">
            <p class="last-news-title">
              Последние новости
            </p>
            <span class="d-flex  justigy-between">
                      <p class="main-news-info black--text"><v-icon size="14" color="black">fas fa-clock</v-icon>Обновлено 12 июля 2021 14:25</p>
          </span>
          </v-col>
          <v-col cols="12">
            <v-card outlined class="pa-2">
              <v-card tile elevation="0" link class="border-bottom" v-for="i in 4">
                <p class="v-card-subtitle mb-1">
                  Дворцы школьников и молодежи появятся в Шымкенте
                </p>
                <p class="main-news-info black--text pa-0"><v-icon size="14" color="black">fas fa-clock</v-icon>Обновлено 12 июля 2021 14:25</p>
              </v-card>

            </v-card>

          </v-col>
        </v-col>

      </v-row>


      <v-row class="mt-5 py-5">
        <v-col lg="3" md="4" sm="6" cols="6" v-for="i in 8" class="px-2 souvenir-column">
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







      <!--      Конец Кард -->
    </v-container>


  </section>
</template>

<script>

export default {
  name: "news",

}
</script>

<style scoped>

</style>
