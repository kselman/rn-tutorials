
import VoipPushNotification from 'react-native-voip-push-notification';


class PushKitHandler extends React.Component {


    // --- anywhere which is most comfortable and appropriate for you,
    // --- usually ASAP, ex: in your app.js or at some global scope.
    componentDidMount() {

        // --- NOTE: You still need to subscribe / handle the rest events as usuall.
        // --- This is just a helper whcih cache and propagate early fired events if and only if for
        // --- "the native events which DID fire BEFORE js bridge is initialed",
        // --- it does NOT mean this will have events each time when the app reopened.


        // ===== Step 1: subscribe `register` event =====
        // --- this.onVoipPushNotificationRegistered
        VoipPushNotification.addEventListener('register', (token) => {
            // --- send token to your apn provider server
        });

        // ===== Step 2: subscribe `notification` event =====
        // --- this.onVoipPushNotificationiReceived
        VoipPushNotification.addEventListener('notification', (notification) => {
            // --- when receive remote voip push, register your VoIP client, show local notification ... etc
            this.doSomething();
          
            // --- optionally, if you `addCompletionHandler` from the native side, once you have done the js jobs to initiate a call, call `completion()`
            VoipPushNotification.onVoipNotificationCompleted(notification.uuid);
        });

        // ===== Step 3: subscribe `didLoadWithEvents` event =====
        VoipPushNotification.addEventListener('didLoadWithEvents', (events) => {
            // --- this will fire when there are events occured before js bridge initialized
            // --- use this event to execute your event handler manually by event type

            if (!events || !Array.isArray(events) || events.length < 1) {
                return;
            }
            for (let voipPushEvent of events) {
                let { name, data } = voipPushEvent;
                if (name === VoipPushNotification.RNVoipPushRemoteNotificationsRegisteredEvent) {
                    this.onVoipPushNotificationRegistered(data);
                } else if (name === VoipPushNotification.RNVoipPushRemoteNotificationReceivedEvent) {
                    this.onVoipPushNotificationiReceived(data);
                }
            }
        });

        // ===== Step 4: register =====
        // --- it will be no-op if you have subscribed before (like in native side)
        // --- but will fire `register` event if we have latest cahced voip token ( it may be empty if no token at all )
        VoipPushNotification.registerVoipToken(); // --- register token
    }

    // --- unsubscribe event listeners
    componentWillUnmount() {
        VoipPushNotification.removeEventListener('didLoadWithEvents');
        VoipPushNotification.removeEventListener('register');
        VoipPushNotification.removeEventListener('notification');
    }

}