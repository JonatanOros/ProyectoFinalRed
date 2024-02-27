const { Imagen }=require('../models');


class ImagenDAO{
    constructor(){}
    
    async crearPublicacion(url,idpublicacion){
        try{
            const imagen= await Imagen.create({url,idpublicacion});
            return imagen;

        }catch (error){
            throw error;
        }

    }


    async obtenerImagen(){
        try{
            const imagen= await Imagen.findAll();
            return imagen;

        }catch (error){
            throw error;
        }
    }

    async obtenerImagenPorID(id){
        try{
            const imagen= await Imagen.findByPk(id);
            return imagen;

        }catch (error){
            throw error;
        }
    }

    async actualizarImagen(id,url,idpublicacion){
        try{
            await Imagen.update({id,url,idpublicacion},{where: {id} });
            const imagenActualizado=await Imagen.findByPk(id);
            return imagenActualizado;

        }catch(error){
            throw error;
        }
    }

    async eliminarImagen(id){
        try{
            
            const imagen=await Imagen.findByPk(id);
            if(!imagen){
                throw new Error('Imagen no Encontrado');
            }
            await imagen.destroy();

            return 'imagen eliminado';

        }catch(error){
            throw error;
        }
    }


}

module.exports = new ImagenDAO();