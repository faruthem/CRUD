import { Router } from "express";
import Task from "../models/Task";
const router = Router()

router.get("/", async (req, res)=>{
    const tasks = await Task.find().lean();
    console.log(tasks[0]);
    res.render("index", {tasks:tasks});
});

router.get("/about", (req, res)=>{
    res.render("about");
});

router.post("/tasks/add", async(req, res)=>{
    try{
        const task = Task(req.body)
        const taskSaved = await task.save();
        console.log(taskSaved);
        //console.log(task);
        //console.log(req.body); //Ayuda a mostrar la información que el usuario agrego.
        //res.send("Tarea guardada");
        res.redirect('/');
    } catch (errorr){
        console.log(error);
}
});

router.get("/edit/:id", async(req, res)=>{
    //console.log(req.params.id)
    const task = await Task.findById(req.params.id).lean()
    //res.render("edit");
    res.render("edit", {task});
});
router.post("/edit/:id", async(req, res)=>{
    const{id}=req.params
    await Task.findOneAndUpdate(req.params.id,)
    //const taskSaved = await task.save();
    //console.log(req.body);
    res.redirect('/');
    //console.log(task);
    //console.log(req.body); //Ayuda a mostrar la información que el usuario agrego.
    //res.send("Tarea guardada");
});
//Para crear una nueva ruta, es con get
//res.render, manda a la página
//res.send, , manda mensajes
router.get("/delete/:id",async (req, res)=>{
    const {id} = req.params
    await Task.findByIdAndDelete(id,req.body)
    //res.render("delete");
    res.redirect('/');
});

router.get("/taggdone/:id",async(req,res)=>{
        const{id} = req.params;
        const task= await Task.findById(id);
        task.done = !task.done;
        await task.save();
        res.redirect("/");
});

export default router;