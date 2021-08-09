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
                  {{event["title_" + $i18n.locale]}}
                </p>
              </div>

            </div>
          </div>
          <div class="line-block ml-md-10"></div>

        </v-col>
      </v-row>
      <v-row>
        <v-col md="4">
          <lingallery :iid.sync="currentId" :width="'100%'" :height="400" :items=galleries />
        </v-col>
        <v-col md="8">
          <p  class="black--text text-h5 font-weight-bold">
            О мероприятии/услуге
          </p>
          <div class="my-2" v-html="event['description_' + $i18n.locale]"></div>

          <p  class="black--text text-h5 font-weight-bold">
            Дополнительная информация
          </p>
          <div class="my-2" v-if="event.workdays.length">
            <p  class="black--text text-h6 font-weight-bold">
              Время работы:
            </p>
            <template >
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left">
                      День работы
                    </th>
                    <th class="text-left">
                      День начала
                    </th>
                    <th class="text-left">
                      День окончания
                    </th>
                    <th class="text-left">
                      Время начала
                    </th>
                    <th class="text-left">
                      Время конца
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                    v-for="item in event.workdays"
                    :key="item.created_at"
                  >
                    <td>{{ item.weekday["title_"+$i18n.locale] }}</td>
                    <td>{{ item.date_start }}</td>
                    <td>{{ item.date_end }}</td>
                    <td>{{ item.time_start }}</td>
                    <td>{{ item.time_end}}</td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </template>
          </div>
          <div v-if="event.phone.length" class="d-flex">
            <div class="w-50">
              <p  class="black--text text-h6 font-weight-bold">
                Телефон:
              </p>
            </div>
            <div class="w-50 border-bottom-line">
              <v-btn
                elevation="0"
                class="ma-2"
                color="transparent"
                v-for="item in event.phone" :key="item"
                :href="'tel:'+item"
              >
                <v-icon
                  dark
                  left
                >
                  mdi-phone
                </v-icon>{{item}}
              </v-btn>
            </div>

          </div>
          <div v-if="event.social_networks.length" class="d-flex">
            <div class="w-50">
              <p  class="black--text text-h6 font-weight-bold">
                Соц.сети:
              </p>
            </div>
            <div class="w-50 border-bottom-line">
              <v-btn
                elevation="0"
                class="ma-2"
                color="transparent"
                v-for="item in event.social_networks" :key="item"
                target="_blank"
                :href="item"
              >
                {{item.slice(0,15) + "..."}}
              </v-btn>
            </div>

          </div>
          <div v-if="event.sites.length" class="d-flex">
            <div class="w-50">
              <p  class="black--text text-h6 font-weight-bold">
                Вэб-сайты:
              </p>
            </div>
            <div class="w-50 border-bottom-line">
              <v-btn
                elevation="0"
                class="ma-2"
                color="transparent"
                v-for="item in event.sites" :key="item"
                target="_blank"
                :href="item"
              >
                {{item.slice(0,15) + "..."}}
              </v-btn>
            </div>

          </div>

          <div class="d-flex">
            <div class="w-50">
              <p  class="black--text text-h6 font-weight-bold">
                Адрес:
              </p>
            </div>
            <div class="w-50 border-bottom-line">
              <p class="mt-2"><v-icon>fas fa-map-marker-alt</v-icon>  {{event.address}} </p>
            </div>

          </div>
        </v-col>



      </v-row>




    </v-container>



  </section>
</template>

<script>
import Lingallery from 'lingallery';
export default {
  components:{
    Lingallery
  },
  name: "_alias",
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
      event:null,
      currentId:null,
      galleries:[],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
        },
        {
          name: 'Eclair',
          calories: 262,
        },
        {
          name: 'Cupcake',
          calories: 305,
        },
        {
          name: 'Gingerbread',
          calories: 356,
        },
        {
          name: 'Jelly bean',
          calories: 375,
        },
        {
          name: 'Lollipop',
          calories: 392,
        },
        {
          name: 'Honeycomb',
          calories: 408,
        },
        {
          name: 'Donut',
          calories: 452,
        },
        {
          name: 'KitKat',
          calories: 518,
        },
      ],
    }
  },
  async asyncData({$axios,route,redirect,store}) {
    let event;
    let galleries = [];
    await $axios.$get("/event/"+route.params.alias)
  .then(e => {
      if (Object.keys(e).length === 0) throw({ statusCode: 404, message: 'Event not found' })
      else {
        event = e;
      }
    }).catch(e => {
      error(e)
    })

    if(event.galleries.length > 0){
      for(let i = 0; i < event.galleries.length; i++){
        galleries.push(
          {id:event.galleries[i].id,src:store.state.image.image +event.galleries[i].image , thumbnail:store.state.image.image + event.galleries[i].image}
        )
      }
    }
    galleries.push({
      id:100, src:store.state.image.image +event.image, thumbnail:store.state.image.image +event.image
    })

    return {event,galleries};

  }

}
</script>

<style scoped>

</style>
