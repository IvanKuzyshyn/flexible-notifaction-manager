import DirectMessageScheduler from "../../TelegramBundle/components/DirectMessageScheduler";

export const AVAILABLE_SERVICES = {
  telegram: {
    name: 'Telegram',
    title: 'You can create new Telegram notification using Constructor',
    status: 'connected',
    component: DirectMessageScheduler,
  },
  viber: {
    name: 'Viber',
    title: 'You can create new Viber notification using Constructor',
    status: 'not_connected'
  },
  gmail: {
    name: 'Gmail',
    title: 'You can an email Notification using Email builder',
    status: 'not_connected'
  },
  twilio: {
    name: 'Twilio',
    title: 'You can SMS notification using Constructor',
    status: 'not_connected'
  },
};
