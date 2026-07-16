try{
    // code to run
} catch(error){
    // catch the error
}


const userProfile = {
  username: "nature_lover99"
};
try {
  const userTheme = userProfile.settings.theme;
  console.log(`Setting theme to: ${userTheme}`);
} catch (error) {
  console.log("error in getting theme");
}