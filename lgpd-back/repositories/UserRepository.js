import User from "../models/User.js";

const saveUser = async (UserModel) => {
    const save = await User.create(UserModel);
    return save;
};

const getAllUsers = async () => {
    return await User.findAll({
        order: [
            ['id', 'ASC']  // Ordena os usuários em ordem
        ]
    });
};

const getUserById = async (id) => {
    return await User.findByPk(id);
}

const deleteUserById = async (id) => {
    return await User.destroy({ where: { id: Number(id)}}); //OBS id é passado como string, então precisamos converter para número
};

const updateUserById = async (id, UserModel) => {
    try {
        const result = await User.update(UserModel,{where: {id: id}});
        if(result[0] === 1){
            return {message: "user update with success"};
        } else {
            return {message: "can not find ${id} to update", status: 404};
        }
    } catch(error){
        console.error(error);
    }
};

const factory = {
    saveUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    updateUserById
}

export default factory;