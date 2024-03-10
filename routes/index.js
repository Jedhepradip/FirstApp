import express from "express";
import userData from "../model/model.js"
const router = express.Router();

const authenticateUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userData.findOne({ email: email });
        if (!user || user.password !== password) {
            res.status(401).send("Invalid email or password");
        } else {
            req.user = user;
            next();
        }
    } catch (error) {
        console.error("Error authenticating user:", error);
        res.status(500).send("Internal Server Error");
    }
};

router.get("/", (req, res) => {
    res.render("register")
})

router.get('/login', function (req, res) {
    res.render("login")
})

router.post('/signin//home',authenticateUser, function (req, res) {
    res.render("home",{username:req.user.username})
})

router.get("/userall", async function (req, res) {
    const alluser = await userData.find()
    res.send(alluser)
})

router.post("/home", async (req, res) => {
    try {
        const { name, email, password, Cpassword } = req.body;
        if (Cpassword === password) {
            const saveData = new userData({
                name: name,
                password: password,
                email: email,
                Cpassword: Cpassword,
            })
            const SaveData = await saveData.save();
            res.render("home")
        }
        else {
            res.send("pass are not matching")
        }

    } catch (error) {
        console.log(error)
    }
})
export default router;

        // const name = req.body.name
        // const email = req.body.email
        // const password = req.body.password
        // const Cpassword = req.body.Cpassword
