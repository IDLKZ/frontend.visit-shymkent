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
      galleries:[]
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
