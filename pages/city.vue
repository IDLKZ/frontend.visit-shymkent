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
                  О Городе
                </p>
              </div>

            </div>
          </div>
          <div class="line-block ml-md-10"></div>

        </v-col>
      </v-row>


      <v-col md="9">
        <p class="text-subtitle-1">
          Город Шымкент, с населением более миллиона человек, один из трёх крупнейших городов Казахстана, имеющих статус республиканского значения, является отдельной административно-территориальной единицей, не входящей в состав окружающей его области. Состоит из четырёх административных районов: Абайский, Енбекшинский, Аль-Фарабийский и Каратауский.

          Самый крупный промышленный, торговый и культурный центр южного региона расположен относительно недалеко от границ с Узбекистаном и Кыргызстаном, а также их столиц – Ташкента и Бишкека.
        </p>
        <div class="mt-5 mb-5">
          <VueSlickCarousel
            ref="c1"
            :asNavFor="$refs.c2"
            :focusOnSelect="true">
            <div v-for="i in 8">
              <v-img src="https://visit-shymkent.kz/land/images/about_slider/3.jpg"></v-img>
            </div>
          </VueSlickCarousel>
          <VueSlickCarousel
            ref="c2"
            :asNavFor="$refs.c1"
            :slidesToShow="4"
            :focusOnSelect="true">
            <div v-for="i in 8" class="pa-2">
              <v-img src="https://visit-shymkent.kz/land/images/about_slider/2.jpg"></v-img>
            </div>

          </VueSlickCarousel>
        </div>

        <p class="text-subtitle-1">
          В современном Шымкенте дружно проживают представители более 95 национальностей (казахи и русские, узбеки и татары, корейцы и другие). Жизненный уклад населения, общность и самобытность этнических групп, их синтез – все это сформировало культурную политику города.

          Природа Шымкента располагает к отдыху и оздоровлению организма. Город расположен в своеобразной ландшафтной зоне и с древних времён имеет славу «города-сада», зелёного города. Растительность характеризуется чрезвычайным разнообразием. Шымкент характеризуется высоким стоянием подземных вод, что обуславливает наличие нескольких родниковых источников прямо в центре города (исток реки Кошкараты).

          В ближайшей к территории города области есть источники минеральных вод, термальные источники. Целебный климат этих мест полезен для людей, страдающих кардиологическими заболеваниями. Для любителей горного отдыха - в восточной части горизонта обзору открывается горный ландшафт, входящий в горную систему Западного Тянь-Шаня. В южной части горной цепи находится гора Казыгурт (высота пика 1768 метров, длина 20 км), находящаяся в 40 км к юго-востоку от Шымкента. По направлению к северу от горы Казыгурт открывается вид на горный хребет Каржантау (наивысшая точка 2823 м, длина цепи 90 км). За этой горой располагается Угамский хребет (наивысшая точка 4299 м, длина 115 км). Шымкент вызывает большой интерес у туристов искусствоведов, историков и археологов. Ведь именно отсюда начинается туристические маршруты в курортные, экзотические и исторические места, которых на юге Казахстана довольно не мало.
        </p>
      </v-col>










      <!--      Конец Кард -->
    </v-container>


  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
name: "city",
  components: { VueSlickCarousel },
}
</script>

<style scoped>

</style>
