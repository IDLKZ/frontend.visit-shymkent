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
<!--        Дата и Время -->


<!--        Конец выбора даты-->
      </v-row>



<!--      Кард-->

      <v-row>
        <v-col cols="6" lg="3" sm="6" v-for="i in 8" >
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
                  <div class="px-5  event-everyday">
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
              <v-btn v-if="i%2==0" color="red accent-4" class="white--text text-caption text-capitalize">
                Купить билеты
              </v-btn>

              <v-btn color="red accent-4" class="white--text text-caption text-capitalize">
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


<!--      Конец Кард -->
    </v-container>


  </section>
</template>

<script>
export default {
  name: "events"
}
</script>

<style scoped lang="scss">





</style>
