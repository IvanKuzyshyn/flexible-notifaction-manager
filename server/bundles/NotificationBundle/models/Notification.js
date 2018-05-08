import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const NotificationSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  notifyAt: {
    type: Date,
    required: true,
  },
  sender: {
    type: 'mixed',
    required: true,
  },
});

NotificationSchema.plugin(timestamps);

const Notification = mongoose.model('Notification', NotificationSchema);

export default Notification;
