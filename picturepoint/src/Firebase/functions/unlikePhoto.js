const { db } = require('./firebase');

//Unlike a photo
exports.unlikePost = (photoID, username, photo) => {
    db.collection('likes').where("photo", '==', photoID).onSnapshot((snapshot) => {
        let isLiked;
        snapshot.forEach((doc) => {
            if(doc.data().user === username)
                db.collection('likes').doc(doc.id).delete();
        });
    });

    db.collection('photos').doc(photoID).update({
        "likes": (photo.likes - 1)
    })
}