const { Like }=require('../models');


class LikeDAO{
    constructor(){}
    
    async crearLike(fecha,idpublicacion,idusuario){
        try{
            const like= await Like.create({fecha,idpublicacion,idusuario});
            return like;
        }catch (error){
            throw error;
        }
    }


    async obtenerLike(){
        try{
            const like= await Like.findAll();
            return like;

        }catch (error){
            throw error;
        }
    }

    async obtenerLikePorID(id){
        try{
            const like= await Like.findByPk(id);
            return like;

        }catch (error){
            throw error;
        }
    }

    async actualizarLike(id,fecha,idpublicacion,idusuario){
        try{
            await Like.update({id,fecha,idpublicacion,idusuario},{where: {id} });
            const likeActualizado=await Like.findByPk(id);
            return likeActualizado;

        }catch(error){
            throw error;
        }
    }

    async eliminarLike(id){
        try{
            
            const like=await Like.findByPk(id);
            if(!like){
                throw new Error('Producto no Encontrado');
            }
            await like.destroy();

            return 'like eliminado';

        }catch(error){
            throw error;
        }
    }


}

module.exports = new LikeDAO();