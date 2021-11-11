const express = require("express");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3030;

// middleware
//body-parser handles reading data from the form element
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiResearch = require('./routes/researchRoutes')
const apiComments = require('./routes/commentsRoutes')
const apiReplies = require('./routes/replyRoutes')
const apiEvents = require('./routes/eventsRoutes')
const apiEventReg = require('./routes/eventRegRoutes')
const apiTips = require('./routes/tipsRoutes')
const apiBookAppointment = require('./routes/bookAppointmentRoutes')
// const apiImages = require('./routes/imagesRoutes')
const apiLandingPage = require('./routes/landingPageRoutes')
const apiSpecialties = require('./routes/specialitiesRoutes')
// const apiSuccessStories = require('./routes/successStoriesRoutes')
const apiUserSignup = require('./routes/userSignupRoutes')




app.use("/research", apiResearch)
app.use("/comments", apiComments)
app.use("/replies", apiReplies)
app.use("/events", apiEvents)
app.use("/tips", apiTips)
// app.use("/successStories", apiSuccessStories)
app.use("/specialties", apiSpecialties)
app.use("/signUp", apiUserSignup)
app.use("/landingPage", apiLandingPage)
// app.use("/images", apiImages)
app.use("/bookAppointment", apiBookAppointment)
app.use("/eventRegistration", apiEventReg)








db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
