const LikeDAO= require('./dataAccess/likeDAO');
const UsuarioDAO= require('./dataAccess/usuarioDAO');
const PublicacionDAO= require('./dataAccess/publicacionDAO');
const ComentarioDAO= require('./dataAccess/comentarioDAO');
const ImagenDAO= require('./dataAccess/imagenDAO');

const {sequelize}= require('./models');

async function realizarTransacciones(){
    try{
        await sequelize.sync();

        //Crear usuario
        const usuario=await UsuarioDAO.crearUsuario('Eli','Eli@gmail.com','eli',Date.now());
        console.log('Usuario Creado',usuario.toJSON());


        //obtener usuario
        // Leer productos y ventas
        const usuarioObtner = await UsuarioDAO.obtenerUsuario();

    }catch(error){
        console.error(error);
    }finally {
        // Cierra la conexión a la base de datos cuando todas las transacciones han terminado
        await sequelize.close();

    }


}

realizarTransacciones();