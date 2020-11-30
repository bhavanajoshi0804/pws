var push = require('web-push');

let vapidkeys = {
    publicKey: "BMLoo-yViPpi8MYNuyUyFnKYfyaahGShsMQ2gKh-LunYErdzZmSwZ110Cv5JMtoHRB93icaz4m12tricB-MizrI",
    privateKey: "yBKjUuZzqf29FGgLB05OEXEijm8Co9ioYuZWOcU8GzM"
  }
  
  push.setVapidDetails("mailto:someone@example.com",vapidkeys.publicKey, vapidkeys.privateKey)
  
  let sub = {
      endpoint:
      "https://fcm.googleapis.com/fcm/send/cotx3x1aHKM:APA91bFsakNblXRHdrQvs03pZj7EPvYP3G9MXwaAhnwDyYWALF2Hjv2ySD8xjnAGi1lwg_uLf1n4R5W-Eofb-dQ5ddz0Voxn0E_O4kOdeXZYsRH5juwieT3-ewStQ2_zZaplWhEywRAu",
      expirationTime:null,
      keys:{
          p256dh:
          "BCP0qDxhrI-dj6_6pWwAo5RswEiX5kEPchVI7d-d5ihOgQhFiZ9xQm2Z6m4lIDpnXVfgoYE8WErPajgovVivkhg",
          auth:"c_mQ7UjwEdWWDO-tu6wuqg"
        }
    };
  
  push.sendNotification(sub, 'test message')