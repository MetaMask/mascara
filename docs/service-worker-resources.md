# Service worker Resources

## Important to Note

<!-- - Service only works for https -->
- Service workers will become idle if they are not being woken up
- A Service worker update may be installed but will wait to update until their in no clients using the service worker is open.

## Important reference links:

[Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

[`ServiceWorkerContainer`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer)

[`ServiceWorkerRegistration`](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration)

[`InstallEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent)

>The ServiceWorkerRegistration interface of
the ServiceWorker API represents the
service worker registration. You register
a service worker to control one or more
pages that share the same origin.



##debugging:
[chrome://serviceworker-internals/](chrome://serviceworker-internals/)

This will bring you to a list of service workers
where you can find a console to inspect and debug
the SW

other option is:
open chrome devtools click Application in the top bar and click `Service Workers` in the left hand menu

`Application > Service Workers`



Feature | Chrome |  Firefox (Gecko) | Internet Explorer | Opera | Safari (WebKit)
---|---|---|---|---|---
Basic support | 45.0 [1] [2]  | 44.0 (44.0)[3]  | No support | ? | No support
Available in web workers  | No support | 44.0 (44.0)[3] | No support | ? | No support
