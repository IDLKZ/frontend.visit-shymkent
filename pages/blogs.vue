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
                  Блоги
                </p>
                <p class="icon-subtitle">
                  ТУРИЗМ И НЕ ТОЛЬКО
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
        <v-col cols="6" lg="4" md="4" sm="6" v-for="(item, i) in blogs" :key="i">
          <v-card
            class="mx-auto my-5 blog-card"
          >
            <v-img
              class="blog-img"
              :src="getImages(item.image)"
            >
            </v-img>
            <div class="d-flex justify-space-between my-2">
              <div class="text-subtitle-2">
                Дата публикации: {{ item.created_at }}
              </div>
              <div>
                <p class="text-subtitle-2" style="color: #C42313">
                  {{ item.categorynews }}
                </p>
              </div>

            </div>

            <v-card-title class="black--text blog-title pa-0">
              {{item['title_'+$i18n.locale]}}
            </v-card-title>
            <v-list-item-icon>
              <v-icon small>
                fas fa-user
              </v-icon>
              <v-list-item class="text-body">
                {{ item.user.name }}
              </v-list-item>
            </v-list-item-icon>


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
  name: "blogs",
  data(){
    return {
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
  },
  methods:{
    getImages(data){
      console.log(this.$store.state.image.image);
      return this.$store.state.image.image + data ;
    },
    truncate(string, value) {
      return string.substring(0, value) + '…';
    }

  },
  async asyncData({$axios}) {
    let blogs = [];
    try{
      await $axios.$get("/blogs").then((e)=>{blogs = e.data});
    }
    catch (e) {
      console.log(e);
    }
    return {blogs}
  },
}
</script>

<style scoped>

</style>
