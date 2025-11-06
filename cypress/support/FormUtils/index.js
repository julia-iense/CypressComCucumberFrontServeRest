import loginCadastroUsuarioServRest from "./PreencherFormularioCadastroUsuario";
import ClicarNoBotaoCadastrar from "./ClicarNoBotaoCadastrar";
import loginUsuario from "./PreencherLogin";
import ClicarNoBotaoEntrar from "./ClicarNoBotaoEntrar";

const FormUtils = {
   ...loginCadastroUsuarioServRest,
   ...ClicarNoBotaoCadastrar,
   ...loginUsuario,
   ...ClicarNoBotaoEntrar
};

export default FormUtils;