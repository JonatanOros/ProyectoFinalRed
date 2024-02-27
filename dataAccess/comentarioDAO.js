const { Comentario }=require('../models');

class ComentarioDAO{
    constructor(){}
    
    async crearComentario(texto,fecha,idpublicacion,idusuario){
        try{
            const comentario= await Comentario.create({texto,fecha,idpublicacion,idusuario});
            return comentario;
        }catch (error){
            throw error;
        }
    }


    async obtenerComentario(){
        try{
            const comentario= await Comentario.findAll();
            return comentario;

        }catch (error){
            throw error;
        }
    }

    async obtenerComentarioPorID(id){
        try{
            const comentario= await Comentario.findByPk(id);
            return comentario;

        }catch (error){
            throw error;
        }
    }

    async actualizarComentario(id,texto,fecha,idpublicacion,idusuario){
        try{
            await Comentario.update({id,texto,fecha,idpublicacion,idusuario},{where: {id} });
            const comentarioActualizado=await Comentario.findByPk(id);
            return comentarioActualizado;

        }catch(error){
            throw error;
        }
    }

    async eliminarComentario(id){
        try{
            
            const comentario=await Comentario.findByPk(id);
            if(!comentario){
                throw new Error('Comentario no Encontrado');
            }
            await comentario.destroy();

            return 'comentario eliminado';

        }catch(error){
            throw error;
        }
    }


}

module.exports = new ComentarioDAO();