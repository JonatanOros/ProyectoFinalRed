const { Usuario }=require('../models');


class UsuarioDAO{
    constructor(){}
    
    async crearUsuario(nombre,correo,contrasena,fecha){
        try{
            const usuario= await Usuario.create({nombre,correo,contrasena,fecha});
            return usuario;

        }catch (error){
            throw error;
        }

    }


    async obtenerUsuario(){
        try{
            const usuario= await Usuario.findAll();
            return usuario;

        }catch (error){
            throw error;
        }
    }

    async obtenerUsuarioPorID(id){
        try{
            const usuario= await Usuario.findByPk(id);
            return usuario;

        }catch (error){
            throw error;
        }
    }

    async actualizarUsuario(id,nombre,correo,contrasena,fecha){
        try{
            await Usuario.update({id,nombre,correo,contrasena,fecha},{where: {id} });
            const usuarioActualizado=await Usuario.findByPk(id);
            return usuarioActualizado;

        }catch(error){
            throw error;
        }
    }

    async eliminarUsuario(id){
        try{
            
            const usuario=await Usuario.findByPk(id);
            if(!usuario){
                throw new Error('Uusario no Encontrado');
            }
            await usuario.destroy();

            return 'usuario eliminado';

        }catch(error){
            throw error;
        }
    }


}

module.exports = new UsuarioDAO();