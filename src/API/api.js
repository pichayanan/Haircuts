import * as firebase from "firebase";

// export async function uploadImage(file) {
//   // console.log(file);
//   const storageRef = firebase.storage().ref();
//   const imageRef = storageRef.child(`portfolio/${Date.now()}.jpg`);
//   await imageRef.put(file, { contentType: file.type });
//   // await imageRef.put(file);
//   // Add resolution in name for supporting image resize extension
//   let downloadURL = await imageRef.getDownloadURL();
//   // const filename = imageRef.name.split('.').slice(0, -1).join('.');
//   // const imageURL = downloadURL.replace(filename, filename + "_1920x1080");
//   const imageURL = downloadURL;
//   return imageURL;
// }

export async function uploadProfile(file) {
  //   console.log(file);
  const storageRef = firebase.storage().ref();
  const imageRef = storageRef.child(`profileC/test/${Date.now()}.jpg`);
  console.log("file: ", file);

  await imageRef.put(file, { contentType: file.type });
  // await imageRef.put(file);
  // Add resolution in name for supporting image resize extension
  let downloadURL = await imageRef.getDownloadURL();
  // const filename = imageRef.name.split('.').slice(0, -1).join('.');
  // const imageURL = downloadURL.replace(filename, filename + "_1920x1080");
  const imageURL = downloadURL;
  console.log("imageURL: ", imageURL);
  return imageURL;
}

export async function uploadBarberProfile(file) {
  const storageRef = firebase.storage().ref();
  const imageRef = storageRef.child(`profileB/profilepic/${Date.now()}.jpg`);
  console.log("file: ", file);
  await imageRef.put(file, { contentType: file.type });
  let downloadURL = await imageRef.getDownloadURL();
  const imageURL = downloadURL;
  console.log("imageURL: ", imageURL);
  return imageURL;
}

export async function uploadImage(file) {
  const storageRef = firebase.storage().ref();
  const imageRef = storageRef.child(`media/images/${Date.now()}.jpg`);
  await imageRef.put(file, { contentType: file.type });
  let downloadURL = await imageRef.getDownloadURL();
  const imageURL = downloadURL;
  return imageURL;
}
