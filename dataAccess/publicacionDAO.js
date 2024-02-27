const { Publicacion }=require('../models');


class PublicacionDAO{
    constructor(){}
    
    async crearPublicacion(imagen,descripcion,fecha,idusuario){
        try{
            const publicacion= await Publicacion.create({imagen,descripcion,fecha,idusuario});
            return publicacion;

        }catch (error){
            throw error;
        }

    }


    async obtenerPublicacion(){
        try{
            const publicacion= await Publicacion.findAll();
            return publicacion;

        }catch (error){
            throw error;
        }
    }

    async obtenerPublicacionPorID(id){
        try{
            const publicacion= await Publicacion.findByPk(id);
            return publicacion;

        }catch (error){
            throw error;
        }
    }

    async actualizarPublicacion(id,imagen,descripcion,fecha,idusuario){
        try{
            await Publicacion.update({id,imagen,descripcion,fecha,idusuario},{where: {id} });
            const publicacionActualizado=await Publicacion.findByPk(id);
            return publicacionActualizado;

        }catch(error){
            throw error;
        }
    }

    async eliminarPublicacion(id){
        try{
            
            const publicacion=await Publicacion.findByPk(id);
            if(!publicacion){
                throw new Error('Publicacion no Encontrado');
            }
            await publicacion.destroy();

            return 'publicacion eliminado';

        }catch(error){
            throw error;
        }
    }


}

module.exports = new PublicacionDAO();