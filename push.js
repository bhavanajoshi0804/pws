var push = require('web-push');

let vapidkeys = {
    publicKey: "BMLoo-yViPpi8MYNuyUyFnKYfyaahGShsMQ2gKh-LunYErdzZmSwZ110Cv5JMtoHRB93icaz4m12tricB-MizrI",
    privateKey: "yBKjUuZzqf29FGgLB05OEXEijm8Co9ioYuZWOcU8GzM"
  }
  
  push.setVapidDetails("mailto:someone@example.com",vapidkeys.publicKey, vapidkeys.privateKey)
  
  let sub = {};
  
  push.sendNotification(sub, 'test message')