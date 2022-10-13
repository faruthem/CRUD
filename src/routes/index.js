import { Router } from "express";
import Task from "../models/Task";
import user from "../models/User";
import { renderTasks, createTask,aboutTask, renderTaskEdit, editTask, delteTask, doneTask } from "../controllers/tasks.controller";
import { renderUsers, createUser, aboutUser, renderUserEdit, editUser, delteUser, doneUser } from "../controllers/users.controller";
const router = Router();

router.get("/", renderTasks);

router.post("/tasks/add",createTask) ;

router.get("/about",aboutTask);

router.get("/edit/:id",renderTaskEdit);

router.post("/edit/:id",editTask);

router.get("/delete/:id",delteTask);

router.get("/taggdone/:id",doneTask);

router.get("/", renderTasks);

router.post("/users/add",createUser);

router.get("/about",aboutUser);

router.get("/edit/:id",renderUserEdit);

router.post("/edit/:id",editUser);

router.get("/delete/:id",delteUser);

router.get("/taggdone/:id",doneUser);

router.post("/signup", async(req, res)=>{
    const{id } = req.params
    await User.findByIdAndUpdate(id, req.body)
    res.redirect('/');
});

router.get("/signup",(req, res)=>{
    res.render("signup");
});

export default router;