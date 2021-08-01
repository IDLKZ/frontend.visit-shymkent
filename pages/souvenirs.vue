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

      <v-row>
        <v-col lg="4" md="4" sm="12" cols="12">
          <v-card
            elevation="0"
            outlined
            class="mx-auto my-8 pa-4"
            style="width: 100%"
          >
            <div class="px-5 py-5">
              <div class="my-2 py-4">
                <p class="text-h5 black--text font-weight-bold ma-0">
                  Продавец
                </p>
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
                <v-checkbox
                  v-model="ex4"
                  color="#c4230a"
                  value="red"
                  hide-details
                >
                  <template v-slot:label>
                    <span class="input_label">Ремесленники</span>
                  </template>
                </v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  color="#c4230a"
                  value="red"
                  hide-details
                >
                  <template v-slot:label>
                    <span class="input_label">Сувенирные магазины</span>
                  </template>
                </v-checkbox>
              </div>
              <div class="my-2 py-4">
                <p class="text-h5 black--text font-weight-bold ma-0">
                  Стоимость
                </p>
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
                <v-checkbox
                  v-model="ex4"
                  color="#c4230a"
                  value="red"
                  hide-details
                >
                  <template v-slot:label>
                    <span class="input_label">До 5 тысяч</span>
                  </template>
                </v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  color="#c4230a"
                  value="red"
                  hide-details
                >
                  <template v-slot:label>
                    <span class="input_label">От 5 до 50тысяч</span>
                  </template>
                </v-checkbox>
                <v-checkbox
                  v-model="ex4"
                  color="#c4230a"
                  value="red"
                  hide-details
                >
                  <template v-slot:label>
                    <span class="input_label">От 50тысяч и выше</span>
                  </template>
                </v-checkbox>
              </div>



            </div>




          </v-card>
        </v-col>

        <v-col lg="8" md="8" sm="12" cols="12">
            <div class="row">
              <v-col lg="4" md="4" sm="12" xs="6" cols="6" v-for="i in 9" class="px-2 souvenir-column">
                <v-card class="mx-auto my-2 souvenir-card">
                  <v-img
                    class="souvenir-img"
                    src="https://visit-shymkent.kz/land/images/storage/img_f2e8c0fffac8442d9564cde0c45fc5ee..jpg"
                  ></v-img>
                  <div class="align-self-center">
                    <v-card-title class="black--text souvenir-title pa-2">
                      Коллекция сундучков для девочек
                    </v-card-title>
                    <v-card-text class=" black--text souvenir-subtitle pa-2">
                      творческое произведение, созданное с высоким мастерством с использованием Турецкого бархата, изготовленного из деревянного каркаса с числовой коллекцией, посвященной девушке. Автор: Абдураимова Сано...                    </v-card-text>
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
            </div>
        </v-col>





      </v-row>








      <!--      Конец Кард -->
    </v-container>


  </section>
</template>

<script>
export default {
name: "souvenirs"
}
</script>

<style scoped>

</style>
