import loginCadastroUsuarioServRest from "./PreencherFormularioCadastroUsuario";
import loginUsuario from "./PreencherLogin";

const FormUtils = {
   ...loginCadastroUsuarioServRest,
   ...loginUsuario
};

export default FormUtils;