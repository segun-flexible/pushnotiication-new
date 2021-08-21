self.addEventListener("push", e => {
    const data = e.data.json();
    self.registration.showNotification(
        data.title, // title of the notification
        {
            body: "Push notification from section.io", //the body of the push notification
            image: "https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280_960_720.png",
            icon: "https://cdn.pixabay.com/photo/2015/12/16/17/41/bell-1096280_960_720.png" // icon 
        }
    );
});