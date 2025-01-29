import { createApp } from 'vue';
import App from './App.vue';

import Button from './components/button.vue';
import Modal from './components/Modal.vue';
import MyAlert from './components/MyAlert.vue';
import CardDatePicker from './components/CardDatePicker.vue';
import IftaLabel from './components/IftaLabel.vue';
import ColorsButton from './components/ColorsButton.vue';
import Timeline from './components/Timeline.vue';
import Paginator from './components/Paginator.vue';
import Accordion from './components/Accordion.vue';
import AccordionPanel from './components/AccordionPanel.vue';
import FormWithCascadeSelect from './components/FormWithCascadeSelect.vue';

// Vue uygulamasını oluştur ve bileşenleri kaydet
const app = createApp(App);

app.component('Button', Button);
app.component('Modal', Modal);
app.component('MyAlert', MyAlert);
app.component('CardDatePicker', CardDatePicker);
app.component('IftaLabel', IftaLabel);
app.component('ColorsButton', ColorsButton);
app.component('Timeline', Timeline);
app.component('Paginator', Paginator);
app.component('Accordion', Accordion);
app.component('AccordionPanel', AccordionPanel);
app.component('FormWithCascadeSelect', FormWithCascadeSelect);

app.mount('#app');

export { Button, Modal, MyAlert, CardDatePicker, IftaLabel, ColorsButton, Timeline, Paginator, Accordion, AccordionPanel, FormWithCascadeSelect };
