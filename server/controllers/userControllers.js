const User = require("../models/user");

const getOneUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        
        if(!user) {
            return res.status(404).json({message: ""})
        }
    } catch (error) {
        
    }
}