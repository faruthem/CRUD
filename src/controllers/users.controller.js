import User from "../models/User";

export const renderUsers = async(req,res)=>{
    const users = await User.find().lean();
    //console.log(tasks[0]);
    res.render("Index",{users:users});
}

export const createUser =async(req,res)=>{
    try {
        const user =User(req.body)
        const userSaved = await user.save();
        console.log(userSaved);
        //console.log(req.body);
        //res.send("Guardar");
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

export const aboutUser = (req,res)=>{
    res.render("about");
}

export const renderUserEdit = async(req,res)=>{
    //console.log(req.params.id)
  const user = await User.findById(req.params.id).lean()

   // res.render("edit");
    res.render("edit",{user});
}

export const editUser = async(req,res)=>{
    const{id } = req.params

    await User.findByIdAndUpdate(id, req.body)

    //console.log(req.body);
    //res.send('Cambio recibido');
    res.redirect('/');
}

export const delteUser = async(req,res)=>{
    const { id } = req.params;
    await User.findByIdAndDelete(id)
    //res.render("delete");
    res.redirect('/');
}

export const doneUser =async(req,res)=>{
    const{id } = req.params;
    const user = await User.findById(id)
    user.done = !user.done;
    await user.save();
    res.redirect("/");

}