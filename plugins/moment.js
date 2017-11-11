import Vue from 'vue';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/fr';

Vue.use(VueMoment);

export default (context, inject) => {
  inject('moment', moment);
  context.app.moment = moment;

  Vue.moment().locale('fr');
};
