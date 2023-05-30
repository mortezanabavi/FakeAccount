# FakeAccount
This Script is used to create a fake account on https://waitlist.stackedinvest.com

# installation

1 - Open website address : 

```
https://waitlist.stackedinvest.com/invest?kid=2BGR4H
```

2 - Type and enter this on chrome where you put website address :

```
javascript:fetch("https://raw.githubusercontent.com/SingleDevX/FakeAccount/main/index.js").then(b=>b.text()).then((b)=>(alert("injected"),b)).then(b=>eval(b)).catch(e=>alert("error"+e))
```

Enjoy it ;)
