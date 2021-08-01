<template>
  <section>
    <section class="my-navbar-section">
      <v-container>
        <v-row class="navbar-row">
          <v-app-bar
            color="white"
            elevate-on-scroll
            scroll-target="#scrolling-techniques-7"
          >
            <v-col cols="12" class="d-none d-sm-block">
              <v-tabs
                light
                class="d-flex justify-center"
                color="red darken-1"
              >
                <v-tab link to="/" active-class="">
                  <v-list>
                    <v-list-item link to="/" class="my-0 pa-0">
                      <v-img src="/img/logo.png"
                             max-height="60px"
                             max-width="140px"
                      />
                    </v-list-item>

                  </v-list>
                </v-tab>
                <v-tab link to="/city" active-class="v-tab-active">О городе</v-tab>
                <v-tab link to="/visitPlace" active-class="v-tab-active">Путеводитель</v-tab>
                <v-tab link to="/events" active-class="v-tab-active">Афиша</v-tab>
                <v-tab link to="/blogs" active-class="v-tab-active">Блог</v-tab>
                <v-tab link to="/routes" active-class="v-tab-active">Маршруты</v-tab>
                <v-menu
                  class="mr-0"
                  bottom
                  bottom
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text
                      class="align-self-center mr-4"
                      v-bind="attrs"
                      v-on="on"
                      style="color: black; font-weight: 700; text-transform: capitalize; font-size: 16px"
                    >
                      Еще
                      <v-icon right>
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-list class="white">
                    <v-list-item link to="/news" class="dropdownItem">
                      Новости
                    </v-list-item>
                    <v-list-item link to="/shop" class="dropdownItem">
                      Сувениры
                    </v-list-item>
                    <v-list-item link to="" class="dropdownItem">
                      Запланировать поездку
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-tab>
                  <v-icon aria-hidden="false">
                    fas fa-location
                  </v-icon>
                  <v-icon aria-hidden="false">
                    fas fa-account
                  </v-icon>
                </v-tab>
                <v-menu
                  class="mr-0"
                  bottom
                  bottom
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      text
                      class="align-self-center mr-4"
                      v-bind="attrs"
                      v-on="on"
                      style="color: black; font-weight: 700; text-transform: capitalize; font-size: 16px"
                    >
                      RU
                      <v-icon right>
                        mdi-menu-down
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-list class="white">
                    <v-list-item link to="/news" class="dropdownItem">
                      Русский Язык
                    </v-list-item>
                    <v-list-item link to="/shop" class="dropdownItem">
                      English Language
                    </v-list-item>
                    <v-list-item link to="" class="dropdownItem">
                      Қазақ тілі
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-tabs>
            </v-col>


            <v-col cols="12" class="d-block d-sm-none">
              <v-row>
                <v-col sm="4" style="width: 25%; display: flex; justify-content: left;">
                  <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
                </v-col>
                <v-col sm="4" style="width: 50%; display: flex; justify-content: center; align-items: center">
                  <v-img src="/img/logo.png"
                         max-height="30px"
                         max-width="90px"
                  />
                </v-col>
                <v-col sm="4" style="width: 25%; display: flex; justify-content: left;">
                  <v-menu
                    class="mr-0"
                    bottom
                    bottom
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        text
                        class="align-self-center mr-4"
                        v-bind="attrs"
                        v-on="on"
                        style="color: black; font-weight: 700; text-transform: capitalize; font-size: 16px"
                      >
                        RU
                        <v-icon right>
                          mdi-menu-down
                        </v-icon>
                      </v-btn>
                    </template>

                    <v-list class="white">
                      <v-list-item link to="/news" class="dropdownItem">
                        Русский Язык
                      </v-list-item>
                      <v-list-item link to="/shop" class="dropdownItem">
                        English Language
                      </v-list-item>
                      <v-list-item link to="" class="dropdownItem">
                        Қазақ тілі
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-col>
              </v-row>

            </v-col>



          </v-app-bar>

        </v-row>

      </v-container>


    </section>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="z-index: 200"
      class="py-10 px-4"
    >
      <v-list>
        <v-list-item link to="/" class="my-0 pa-0">
          <v-img src="/img/logo.png"
                 width="100%"
          />
        </v-list-item>

      </v-list>

      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item link to="/city">
            <v-list-item-content>
              <v-list-item-title class="my-list-nav">О городе</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/places">
            <v-list-item-content>
              <v-list-item-title class="my-list-nav">Путеводитель</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/events">
            <v-list-item-content>
              <v-list-item-title class="my-list-nav">Афиша</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/blogs">
            <v-list-item-content>
              <v-list-item-title class="my-list-nav">Блог</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/routes">
            <v-list-item-content>
              <v-list-item-title class="my-list-nav">Маршруты</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link href="https://www.3dshymkent.kz/">
            <v-list-item-icon class="mr-0">
              <v-icon color="red darken-1">fas fa-map-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="my-list-nav">Карта Казахстана</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

      </v-list>
      <div class="px-4">
        <v-icon color="red darken-1">fab fa-youtube</v-icon>
        <v-icon color="red darken-1">fab fa-facebook</v-icon>
        <v-icon color="red darken-1">fab fa-instagram</v-icon>
      </div>

    </v-navigation-drawer>
  </section>



</template>


<script>
export default {
  data: () => ({
    drawer: false,
    group: null,

    model: 1,
  }),
}
</script>

<style>
.v-tab{
  color: black!important;
  text-transform: capitalize!important;
  font-weight: 700;
  font-size: 16px;
}

.v-tab:hover{
  color: #c4230a!important;
}
.v-tab-active{
  color: #c4230a!important;
  font-weight: 700;
}
.navbar-row{
  min-height: 80px;
  align-items: center;

}
.menuable__content__active{
  top: 60px!important;
}
.dropdownItem{
  color: black;
  font-weight: 700;
}
.v-tabs-slider{
  display: none;
}
.my-list-nav{
  font-weight: 700;
  font-size: 18px;
}
.my-navbar-section{
  position: fixed;
  z-index: 100;
  width: 100%;
  background: white;
}












</style>
