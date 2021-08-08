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
        <v-col cols="6" lg="3" sm="6" v-for="(event,index) in events"  :key="index">
          <v-card
            link
            :to="'/events/' + event.alias"
            class="mx-auto my-5 event-card"
          >
            <v-img
              class="event-img"
              :src="getImages(event.image)"
              gradient="rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)"

            >

              <template v-if="event.workdays.length>0">
                <div class="py-2 d-flex justify-space-around">
                  <div>
                    <small class="white--text" v-for="(day,index) in event.workdays" :key="index">
                      {{day.weekday["title_" + $i18n.locale]}} <br>
                    </small><br>
                    <p class="event-time"  v-for="(day,index) in event.workdays" :key="index" v-if="day.date_start">
                      {{day.date_start}} -
                    </p>
                    <p class="event-time" v-for="(day,index) in event.workdays" :key="index" v-if="day.date_end">
                      {{day.date_end}}
                    </p>
                  </div>
                  <div>
                    <small class="white--text">Время</small>
                    <br>
                    <template v-for="(day,index) in event.workdays">
                      <small class="white--text" :key="index" v-if="day.time_start">
                        {{day.time_start}} -
                      </small>

                      <small class="white--text" :key="index"  v-if="day.time_end">
                        {{day.time_end}}
                      </small>
                      <br>
                    </template>

                  </div>
                </div>
              </template>
            </v-img>

            <v-card-title class="black--text event-title">
              {{event["title_"+$i18n.locale]}}
            </v-card-title>

            <v-card-text class="event-location pb-0" >
              <div class="text-subtitle-1">
                <div class="d-flex pb-0 align-items-center" >
                  <div class="pr-1" v-if="event.address">
                    <v-icon color="red accent-4" size="18">
                      fas fa-map-marker-alt
                    </v-icon>
                  </div>
                  <div class="event-subtitle" v-if="event.address">
                  <span class="text-body-2 black--text font-weight-bold ">
                    {{event.address}}
                  </span>
                    <br>
                  </div>
                </div>
              </div>

            </v-card-text>

            <v-card-text class="text-caption black--text event-description" v-html="(event['description_' + $i18n.locale]).slice(0,300)">

            </v-card-text>

            <v-card-actions class="event-action">
              <v-btn  v-if="event.eventum" color="red accent-4"  class="white--text text-caption text-capitalize red-button">
                {{$t("buy")}}
              </v-btn>

              <v-btn
                link
                :to="'/events/' + event.alias"
                color="red accent-4" class="white--text text-caption text-capitalize red-button">
                {{$t("more_info")}}
              </v-btn>
            </v-card-actions>
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
  name: "events",
  data () {
    return {
      items: [
        {
          text: 'Главная',
          disabled: false,
          to: '/',
        },
        {
          text: 'Календарь событий',
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
    let events = [];
    try{
      await $axios.$get("/events").then((e)=>{e.length > 0 ? events = e : null});
    }
    catch (e) {
      console.log(e);
    }
    return {events}
  }
}
</script>

<style scoped lang="scss">





</style>

