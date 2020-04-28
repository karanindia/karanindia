/* service worker */
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service-worker.js')
        .then(function () {
            /* console.log("Service Worker Registered"); */
        });
}
window.addEventListener('beforeinstallprompt', function (event) {
    /* console.log('fired beforeinstallprompt'); */
    event.preventDefault();
    deferredPrompt = event;
    return false;
});