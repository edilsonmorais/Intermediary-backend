import Teacher from "../models/Teacher.js";

const saveTeacher = async (TeacherModel) => {
    const save = await Teacher.create(TeacherModel);
    return save;
};

const getAllTeachers = async () => {
    return await Teacher.findAll({
        order: [
            ['id', 'ASC']  
        ]
    });
};

const getTeacherById = async (id) => {
    return await Teacher.findByPk(id);
}

const deleteTeacherById = async (id) => {
    return await Teacher.destroy({ where: { id: Number(id)}}); //OBS id é passado como string, então precisamos converter para número
};

const updateTeacherById = async (id, TeacherModel) => {
    try {
        const result = await Teacher.update(TeacherModel,{where: {id: id}});
        if(result[0] === 1){
            return {message: "Teacher update with success"};
        } else {
            return {message: "can not find ${id} to update", status: 404};
        }
    } catch(error){
        console.error(error);
    }
};

const factory = {
    saveTeacher,
    getAllTeachers,
    getTeacherById,
    deleteTeacherById,
    updateTeacherById
}

export default factory;